import type { Express } from 'express';
import type { Server } from 'http';
import { z } from 'zod';
import {
  browserSchema,
  deviceTypeSchema,
  guidanceLevelSchema,
  localeSchema,
  modeSchema,
  onboardingEventNameSchema,
  osSchema,
  stepKeySchema,
} from '@shared/schema';
import { storage } from './storage';
import {
  clearFacilitatorSession,
  getFacilitatorAuthStatus,
  isFacilitatorPasswordValid,
  requireFacilitatorAuth,
  setFacilitatorSession,
} from './facilitatorAuth';
import { facilitatorMetricsToCsv } from './facilitatorMetrics';
import { createRateLimiter, requireJsonSameOrigin } from './requestSecurity';

const sessionIdValueSchema = z
  .string()
  .regex(/^wiz_[a-f0-9]{32}$/, 'Expected a random audit session id');

const sessionIdParamSchema = z.object({
  sessionId: sessionIdValueSchema,
});

const scoreSchema = z.number().int().min(0).max(100);
const trackerCountSchema = z.number().int().min(0).max(10_000);
const isoDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((value) => {
    const date = new Date(`${value}T00:00:00.000Z`);
    return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }, 'Invalid calendar date');

const createAuditSessionSchema = z
  .object({
    sessionId: sessionIdValueSchema,
    mode: modeSchema,
    locale: localeSchema.nullable().optional(),
    deviceType: deviceTypeSchema.nullable().optional(),
    os: osSchema.nullable().optional(),
    browser: browserSchema.nullable().optional(),
    publicExposureScore: scoreSchema.nullable().optional(),
    trackerScore: scoreSchema.nullable().optional(),
    fingerprintScore: scoreSchema.nullable().optional(),
    adSettingsScore: scoreSchema.nullable().optional(),
    trackerCount: trackerCountSchema.nullable().optional(),
    completed: z.union([z.literal(0), z.literal(1)]).optional(),
    completedAt: z.union([z.coerce.date(), z.null()]).optional(),
  })
  .strict();

const updateAuditSessionSchema = createAuditSessionSchema
  .partial()
  .omit({ sessionId: true })
  .strict();

const createOnboardingEventSchema = z
  .object({
    sessionId: sessionIdValueSchema,
    eventName: onboardingEventNameSchema,
    stepKey: stepKeySchema.nullable().optional(),
    mode: modeSchema.nullable().optional(),
    locale: localeSchema.nullable().optional(),
    guidanceLevel: guidanceLevelSchema.nullable().optional(),
    deviceType: deviceTypeSchema.nullable().optional(),
    os: osSchema.nullable().optional(),
    browser: browserSchema.nullable().optional(),
    timeSinceStartSec: z.number().int().min(0).max(86_400).nullable().optional(),
    completedChecklistCount: z.number().int().min(0).max(100).nullable().optional(),
    targetChecklistCount: z.number().int().min(0).max(100).nullable().optional(),
    unmetItemsCount: z.number().int().min(0).max(100).nullable().optional(),
    unknownAnswerCount: z.number().int().min(0).max(100).nullable().optional(),
    nextActionCount: z.number().int().min(0).max(100).nullable().optional(),
    skippedStepCount: z.number().int().min(0).max(10).nullable().optional(),
    wasReady: z.boolean().nullable().optional(),
    weakReport: z.boolean().nullable().optional(),
    skipped: z.boolean().nullable().optional(),
  })
  .strict();

const facilitatorLoginSchema = z
  .object({
    password: z.string().min(1).max(256),
  })
  .strict();

const facilitatorRangeQuerySchema = z
  .object({
    from: isoDateSchema.optional(),
    to: isoDateSchema.optional(),
  })
  .strict()
  .refine(
    (value) => !value.from || !value.to || value.from <= value.to,
    'The start date must be on or before the end date.',
  );

function parseDateRange(query: unknown) {
  const parsed = facilitatorRangeQuerySchema.parse(query);
  const end = parsed.to ? new Date(`${parsed.to}T23:59:59.999Z`) : new Date();
  const start = parsed.from
    ? new Date(`${parsed.from}T00:00:00.000Z`)
    : new Date(end.getTime() - 13 * 86_400_000);
  if (start > end || end.getTime() - start.getTime() > 90 * 86_400_000) {
    throw new z.ZodError([
      { code: 'custom', path: ['from'], message: 'Choose a date range of at most 90 days' },
    ]);
  }

  return {
    from: start,
    to: end,
    rawFrom: start.toISOString().slice(0, 10),
    rawTo: end.toISOString().slice(0, 10),
  };
}

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.use('/api/facilitator', createRateLimiter(120, 60_000));
  app.use('/api/facilitator/login', createRateLimiter(10, 15 * 60_000));
  app.use(['/api/sessions', '/api/onboarding-events'], createRateLimiter(300, 60_000));
  app.use('/api', (req, res, next) => {
    if (['POST', 'PATCH', 'PUT', 'DELETE'].includes(req.method)) {
      requireJsonSameOrigin(req, res, next);
      return;
    }
    next();
  });
  app.get('/api/facilitator/status', (req, res) => {
    res.json(getFacilitatorAuthStatus(req));
  });

  app.post('/api/facilitator/login', (req, res) => {
    try {
      const { password } = facilitatorLoginSchema.parse(req.body);

      if (!isFacilitatorPasswordValid(password)) {
        res.status(401).json({ error: 'Invalid password' });
        return;
      }

      setFacilitatorSession(res);
      res.status(204).end();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error('Failed to authenticate facilitator:');
        res.status(500).json({ error: 'Failed to authenticate facilitator' });
      }
    }
  });

  app.post('/api/facilitator/logout', (_req, res) => {
    clearFacilitatorSession(res);
    res.status(204).end();
  });

  app.post('/api/sessions', async (req, res) => {
    try {
      const data = createAuditSessionSchema.parse(req.body);
      await storage.upsertAuditSession(data);
      res.status(204).end();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error('Failed to upsert session:');
        res.status(500).json({ error: 'Failed to save session' });
      }
    }
  });

  app.patch('/api/sessions/:sessionId', requireFacilitatorAuth, async (req, res) => {
    try {
      const { sessionId } = sessionIdParamSchema.parse(req.params);
      const updates = updateAuditSessionSchema.parse(req.body);
      const session = await storage.updateAuditSession(sessionId, updates);
      if (!session) {
        res.status(404).json({ error: 'Session not found' });
        return;
      }
      res.json(session);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error('Failed to update session:');
        res.status(500).json({ error: 'Failed to update session' });
      }
    }
  });

  app.get('/api/sessions/:sessionId', requireFacilitatorAuth, async (req, res) => {
    try {
      const { sessionId } = sessionIdParamSchema.parse(req.params);
      const session = await storage.getAuditSessionBySessionId(sessionId);
      if (!session) {
        res.status(404).json({ error: 'Session not found' });
        return;
      }
      res.json(session);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error('Failed to get session:');
        res.status(500).json({ error: 'Failed to get session' });
      }
    }
  });

  app.post('/api/onboarding-events', async (req, res) => {
    try {
      const event = createOnboardingEventSchema.parse(req.body);
      await storage.createOnboardingEvent(event);
      res.status(204).end();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error('Failed to create onboarding event:');
        res.status(500).json({ error: 'Failed to create onboarding event' });
      }
    }
  });

  app.get('/api/facilitator/metrics', requireFacilitatorAuth, async (req, res) => {
    try {
      const range = parseDateRange(req.query);
      const metrics = await storage.getFacilitatorMetrics({ from: range.from, to: range.to });
      res.json(metrics);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error('Failed to get facilitator metrics:');
        res.status(500).json({ error: 'Failed to get facilitator metrics' });
      }
    }
  });

  app.get('/api/facilitator/export.csv', requireFacilitatorAuth, async (req, res) => {
    try {
      const range = parseDateRange(req.query);
      const metrics = await storage.getFacilitatorMetrics({ from: range.from, to: range.to });
      const csv = facilitatorMetricsToCsv(metrics);
      const fromLabel = range.rawFrom ?? 'all';
      const toLabel = range.rawTo ?? 'all';

      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="facilitator-metrics-${fromLabel}-to-${toLabel}.csv"`,
      );
      res.status(200).send(csv);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error('Failed to export facilitator metrics:');
        res.status(500).json({ error: 'Failed to export facilitator metrics' });
      }
    }
  });

  return httpServer;
}
