import { db } from "./db";
import { auditSessions, type InsertAuditSession, type AuditSession } from "@shared/schema";
import { eq, sql, count, avg, desc } from "drizzle-orm";

export interface IStorage {
  createAuditSession(session: InsertAuditSession): Promise<AuditSession>;
  updateAuditSession(
    sessionId: string,
    updates: Partial<InsertAuditSession>
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
    const [result] = await db.insert(auditSessions).values(session).returning();
    return result;
  }

  async updateAuditSession(
    sessionId: string,
    updates: Partial<InsertAuditSession>
  ): Promise<AuditSession | null> {
    const [result] = await db
      .update(auditSessions)
      .set(updates)
      .where(eq(auditSessions.sessionId, sessionId))
      .returning();
    return result || null;
  }

  async getAuditSessionBySessionId(sessionId: string): Promise<AuditSession | null> {
    const [result] = await db
      .select()
      .from(auditSessions)
      .where(eq(auditSessions.sessionId, sessionId));
    return result || null;
  }

  async getAggregateMetrics() {
    const [totals] = await db
      .select({
        totalSessions: count(),
        completedSessions: sql<number>`SUM(CASE WHEN completed = 1 THEN 1 ELSE 0 END)`.as(
          "completed_count"
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
        date: sql<string>`DATE(created_at)`.as("date"),
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
      avgTrackerScore: totals?.avgTrackerScore
        ? Math.round(Number(totals.avgTrackerScore))
        : null,
      avgFingerprintScore: totals?.avgFingerprintScore
        ? Math.round(Number(totals.avgFingerprintScore))
        : null,
      avgAdSettingsScore: totals?.avgAdSettingsScore
        ? Math.round(Number(totals.avgAdSettingsScore))
        : null,
      avgTrackerCount: totals?.avgTrackerCount
        ? Math.round(Number(totals.avgTrackerCount))
        : null,
      deviceBreakdown: deviceBreakdown.map((d: { deviceType: string | null; count: number }) => ({
        deviceType: d.deviceType || "unknown",
        count: d.count,
      })),
      browserBreakdown: browserBreakdown.map((b: { browser: string | null; count: number }) => ({
        browser: b.browser || "unknown",
        count: b.count,
      })),
      recentSessions: recentSessions.map((r: { date: string; count: number }) => ({
        date: r.date,
        count: r.count,
      })),
    };
  }
}

export const storage = new DatabaseStorage();
