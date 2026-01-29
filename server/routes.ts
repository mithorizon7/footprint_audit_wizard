import type { Express } from 'express';
import type { Server } from 'http';
import { storage } from './storage';
import { insertAuditSessionSchema } from '@shared/schema';
import { z } from 'zod';

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.post('/api/sessions', async (req, res) => {
    try {
      const data = insertAuditSessionSchema.parse(req.body);
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
      const { sessionId } = req.params;
      const updates = req.body;
      const session = await storage.updateAuditSession(sessionId, updates);
      if (!session) {
        res.status(404).json({ error: 'Session not found' });
        return;
      }
      res.json(session);
    } catch (error) {
      console.error('Failed to update session:', error);
      res.status(500).json({ error: 'Failed to update session' });
    }
  });

  app.get('/api/sessions/:sessionId', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const session = await storage.getAuditSessionBySessionId(sessionId);
      if (!session) {
        res.status(404).json({ error: 'Session not found' });
        return;
      }
      res.json(session);
    } catch (error) {
      console.error('Failed to get session:', error);
      res.status(500).json({ error: 'Failed to get session' });
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
