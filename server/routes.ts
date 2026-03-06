import type { Express } from 'express';
import type { Server } from 'http';
import { storage } from './storage';
import { z } from 'zod';

const sessionIdValueSchema = z
  .string()
  .min(1)
  .max(64)
  .regex(/^[A-Za-z0-9_-]+$/, 'Invalid session id format');

const sessionIdParamSchema = z.object({
  sessionId: sessionIdValueSchema,
});

const scoreSchema = z.number().int().min(0).max(100);
const trackerCountSchema = z.number().int().min(0).max(10_000);

const createAuditSessionSchema = z
  .object({
    sessionId: sessionIdValueSchema,
    mode: z.enum(['self', 'fictional']),
    deviceType: z.enum(['desktop', 'mobile', 'unknown']).nullable().optional(),
    os: z.enum(['windows', 'mac', 'linux', 'ios', 'android', 'unknown']).nullable().optional(),
    browser: z
      .enum(['chrome', 'edge', 'firefox', 'safari', 'other', 'unknown'])
      .nullable()
      .optional(),
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
  .omit({ sessionId: true, mode: true })
  .strict();

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.post('/api/sessions', async (req, res) => {
    try {
      const data = createAuditSessionSchema.parse(req.body);
      const session = await storage.createAuditSession(data);
      res.status(201).json(session);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error('Failed to create session:', error);
        res.status(500).json({ error: 'Failed to create session' });
      }
    }
  });

  app.patch('/api/sessions/:sessionId', async (req, res) => {
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
        console.error('Failed to update session:', error);
        res.status(500).json({ error: 'Failed to update session' });
      }
    }
  });

  app.get('/api/sessions/:sessionId', async (req, res) => {
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
        console.error('Failed to get session:', error);
        res.status(500).json({ error: 'Failed to get session' });
      }
    }
  });

  app.get('/api/facilitator/metrics', async (req, res) => {
    try {
      const metrics = await storage.getAggregateMetrics();
      res.json(metrics);
    } catch (error) {
      console.error('Failed to get metrics:', error);
      res.status(500).json({ error: 'Failed to get metrics' });
    }
  });

  return httpServer;
}
