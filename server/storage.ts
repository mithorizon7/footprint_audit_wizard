import { db, hasDatabase } from './db';
import { auditSessions, type InsertAuditSession, type AuditSession } from '@shared/schema';
import { eq, sql, count, avg, desc } from 'drizzle-orm';

export interface IStorage {
  createAuditSession(session: InsertAuditSession): Promise<AuditSession>;
  updateAuditSession(
    sessionId: string,
    updates: Partial<InsertAuditSession>,
  ): Promise<AuditSession | null>;
  getAuditSessionBySessionId(sessionId: string): Promise<AuditSession | null>;
  getAggregateMetrics(): Promise<{
    totalSessions: number;
    completedSessions: number;
    completionRate: number;
    avgPublicExposureScore: number | null;
    avgTrackerScore: number | null;
    avgFingerprintScore: number | null;
    avgAdSettingsScore: number | null;
    avgTrackerCount: number | null;
    deviceBreakdown: { deviceType: string; count: number }[];
    browserBreakdown: { browser: string; count: number }[];
    recentSessions: { date: string; count: number }[];
  }>;
}

export class DatabaseStorage implements IStorage {
  async createAuditSession(session: InsertAuditSession): Promise<AuditSession> {
    if (!db) {
      throw new Error('Database not configured');
    }
    const [result] = await db.insert(auditSessions).values(session).returning();
    return result;
  }

  async updateAuditSession(
    sessionId: string,
    updates: Partial<InsertAuditSession>,
  ): Promise<AuditSession | null> {
    if (!db) {
      throw new Error('Database not configured');
    }
    const [result] = await db
      .update(auditSessions)
      .set(updates)
      .where(eq(auditSessions.sessionId, sessionId))
      .returning();
    return result || null;
  }

  async getAuditSessionBySessionId(sessionId: string): Promise<AuditSession | null> {
    if (!db) {
      throw new Error('Database not configured');
    }
    const [result] = await db
      .select()
      .from(auditSessions)
      .where(eq(auditSessions.sessionId, sessionId));
    return result || null;
  }

  async getAggregateMetrics() {
    if (!db) {
      throw new Error('Database not configured');
    }
    const [totals] = await db
      .select({
        totalSessions: count(),
        completedSessions: sql<number>`SUM(CASE WHEN completed = 1 THEN 1 ELSE 0 END)`.as(
          'completed_count',
        ),
        avgPublicExposureScore: avg(auditSessions.publicExposureScore),
        avgTrackerScore: avg(auditSessions.trackerScore),
        avgFingerprintScore: avg(auditSessions.fingerprintScore),
        avgAdSettingsScore: avg(auditSessions.adSettingsScore),
        avgTrackerCount: avg(auditSessions.trackerCount),
      })
      .from(auditSessions);

    const deviceBreakdown = await db
      .select({
        deviceType: auditSessions.deviceType,
        count: count(),
      })
      .from(auditSessions)
      .groupBy(auditSessions.deviceType);

    const browserBreakdown = await db
      .select({
        browser: auditSessions.browser,
        count: count(),
      })
      .from(auditSessions)
      .groupBy(auditSessions.browser);

    const recentSessions = await db
      .select({
        date: sql<string>`DATE(created_at)`.as('date'),
        count: count(),
      })
      .from(auditSessions)
      .groupBy(sql`DATE(created_at)`)
      .orderBy(desc(sql`DATE(created_at)`))
      .limit(14);

    const total = totals?.totalSessions || 0;
    const completed = Number(totals?.completedSessions) || 0;

    return {
      totalSessions: total,
      completedSessions: completed,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
      avgPublicExposureScore: totals?.avgPublicExposureScore
        ? Math.round(Number(totals.avgPublicExposureScore))
        : null,
      avgTrackerScore: totals?.avgTrackerScore ? Math.round(Number(totals.avgTrackerScore)) : null,
      avgFingerprintScore: totals?.avgFingerprintScore
        ? Math.round(Number(totals.avgFingerprintScore))
        : null,
      avgAdSettingsScore: totals?.avgAdSettingsScore
        ? Math.round(Number(totals.avgAdSettingsScore))
        : null,
      avgTrackerCount: totals?.avgTrackerCount ? Math.round(Number(totals.avgTrackerCount)) : null,
      deviceBreakdown: deviceBreakdown.map((d: { deviceType: string | null; count: number }) => ({
        deviceType: d.deviceType || 'unknown',
        count: d.count,
      })),
      browserBreakdown: browserBreakdown.map((b: { browser: string | null; count: number }) => ({
        browser: b.browser || 'unknown',
        count: b.count,
      })),
      recentSessions: recentSessions.map((r: { date: string; count: number }) => ({
        date: r.date,
        count: r.count,
      })),
    };
  }
}

class MemoryStorage implements IStorage {
  private sessions: AuditSession[] = [];
  private nextId = 1;

  async createAuditSession(session: InsertAuditSession): Promise<AuditSession> {
    const now = new Date();
    const record: AuditSession = {
      id: this.nextId++,
      sessionId: session.sessionId,
      mode: session.mode,
      deviceType: session.deviceType ?? null,
      os: session.os ?? null,
      browser: session.browser ?? null,
      publicExposureScore: session.publicExposureScore ?? null,
      trackerScore: session.trackerScore ?? null,
      fingerprintScore: session.fingerprintScore ?? null,
      adSettingsScore: session.adSettingsScore ?? null,
      trackerCount: session.trackerCount ?? null,
      completed: session.completed ?? 0,
      createdAt: now,
      completedAt: session.completedAt ?? null,
    };
    this.sessions.push(record);
    return record;
  }

  async updateAuditSession(
    sessionId: string,
    updates: Partial<InsertAuditSession>,
  ): Promise<AuditSession | null> {
    const sessionIndex = this.sessions.findIndex((s) => s.sessionId === sessionId);
    if (sessionIndex === -1) return null;
    const existing = this.sessions[sessionIndex];
    const updated: AuditSession = {
      ...existing,
      ...updates,
      completed: updates.completed ?? existing.completed,
      completedAt: updates.completedAt ?? existing.completedAt,
    };
    this.sessions[sessionIndex] = updated;
    return updated;
  }

  async getAuditSessionBySessionId(sessionId: string): Promise<AuditSession | null> {
    return this.sessions.find((s) => s.sessionId === sessionId) ?? null;
  }

  async getAggregateMetrics() {
    const total = this.sessions.length;
    const completedSessions = this.sessions.filter((s) => s.completed === 1).length;

    const avgValue = (values: Array<number | null | undefined>) => {
      const filtered = values.filter((v): v is number => typeof v === 'number');
      if (filtered.length === 0) return null;
      const sum = filtered.reduce((acc, v) => acc + v, 0);
      return Math.round(sum / filtered.length);
    };

    const deviceCounts = new Map<string, number>();
    const browserCounts = new Map<string, number>();
    const recentCounts = new Map<string, number>();

    this.sessions.forEach((session) => {
      const deviceType = session.deviceType || 'unknown';
      deviceCounts.set(deviceType, (deviceCounts.get(deviceType) ?? 0) + 1);

      const browser = session.browser || 'unknown';
      browserCounts.set(browser, (browserCounts.get(browser) ?? 0) + 1);

      const dateKey = session.createdAt.toISOString().slice(0, 10);
      recentCounts.set(dateKey, (recentCounts.get(dateKey) ?? 0) + 1);
    });

    const recentSessions = Array.from(recentCounts.entries())
      .sort((a, b) => (a[0] < b[0] ? 1 : -1))
      .slice(0, 14)
      .map(([date, count]) => ({ date, count }));

    return {
      totalSessions: total,
      completedSessions,
      completionRate: total > 0 ? Math.round((completedSessions / total) * 100) : 0,
      avgPublicExposureScore: avgValue(this.sessions.map((s) => s.publicExposureScore)),
      avgTrackerScore: avgValue(this.sessions.map((s) => s.trackerScore)),
      avgFingerprintScore: avgValue(this.sessions.map((s) => s.fingerprintScore)),
      avgAdSettingsScore: avgValue(this.sessions.map((s) => s.adSettingsScore)),
      avgTrackerCount: avgValue(this.sessions.map((s) => s.trackerCount)),
      deviceBreakdown: Array.from(deviceCounts.entries()).map(([deviceType, count]) => ({
        deviceType,
        count,
      })),
      browserBreakdown: Array.from(browserCounts.entries()).map(([browser, count]) => ({
        browser,
        count,
      })),
      recentSessions,
    };
  }
}

export const storage: IStorage = hasDatabase ? new DatabaseStorage() : new MemoryStorage();
