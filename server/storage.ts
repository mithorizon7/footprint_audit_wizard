import { and, eq, gte, lte } from 'drizzle-orm';
import { db, hasDatabase } from './db';
import {
  auditSessions,
  onboardingEvents,
  type InsertAuditSession,
  type AuditSession,
  type InsertOnboardingEvent,
  type OnboardingEvent,
} from '@shared/schema';
import {
  buildFacilitatorMetrics,
  type FacilitatorDateRange,
  type FacilitatorMetrics,
} from './facilitatorMetrics';

export interface IStorage {
  upsertAuditSession(session: InsertAuditSession): Promise<AuditSession>;
  updateAuditSession(
    sessionId: string,
    updates: Partial<InsertAuditSession>,
  ): Promise<AuditSession | null>;
  getAuditSessionBySessionId(sessionId: string): Promise<AuditSession | null>;
  createOnboardingEvent(event: InsertOnboardingEvent): Promise<OnboardingEvent>;
  getFacilitatorMetrics(range: FacilitatorDateRange): Promise<FacilitatorMetrics>;
}

function buildSessionWhere(range: FacilitatorDateRange) {
  const conditions = [];

  if (range.from) {
    conditions.push(gte(auditSessions.createdAt, range.from));
  }

  if (range.to) {
    conditions.push(lte(auditSessions.createdAt, range.to));
  }

  if (!conditions.length) {
    return undefined;
  }

  return conditions.length === 1 ? conditions[0] : and(...conditions);
}

function buildEventWhere(range: FacilitatorDateRange) {
  const conditions = [];

  if (range.from) {
    conditions.push(gte(onboardingEvents.occurredAt, range.from));
  }

  if (range.to) {
    conditions.push(lte(onboardingEvents.occurredAt, range.to));
  }

  if (!conditions.length) {
    return undefined;
  }

  return conditions.length === 1 ? conditions[0] : and(...conditions);
}

export class DatabaseStorage implements IStorage {
  async upsertAuditSession(session: InsertAuditSession): Promise<AuditSession> {
    if (!db) {
      throw new Error('Database not configured');
    }

    const [result] = await db
      .insert(auditSessions)
      .values(session)
      .onConflictDoUpdate({
        target: auditSessions.sessionId,
        set: {
          mode: session.mode,
          locale: session.locale ?? null,
          deviceType: session.deviceType ?? null,
          os: session.os ?? null,
          browser: session.browser ?? null,
          publicExposureScore: session.publicExposureScore ?? null,
          trackerScore: session.trackerScore ?? null,
          fingerprintScore: session.fingerprintScore ?? null,
          adSettingsScore: session.adSettingsScore ?? null,
          trackerCount: session.trackerCount ?? null,
          completed: session.completed ?? 0,
          completedAt: session.completedAt ?? null,
        },
      })
      .returning();

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

  async createOnboardingEvent(event: InsertOnboardingEvent): Promise<OnboardingEvent> {
    if (!db) {
      throw new Error('Database not configured');
    }

    const [result] = await db.insert(onboardingEvents).values(event).returning();
    return result;
  }

  async getFacilitatorMetrics(range: FacilitatorDateRange): Promise<FacilitatorMetrics> {
    if (!db) {
      throw new Error('Database not configured');
    }

    const sessionWhere = buildSessionWhere(range);
    const eventWhere = buildEventWhere(range);

    const sessions = sessionWhere
      ? await db.select().from(auditSessions).where(sessionWhere).limit(100001)
      : await db.select().from(auditSessions).limit(100001);
    const events = eventWhere
      ? await db.select().from(onboardingEvents).where(eventWhere).limit(100001)
      : await db.select().from(onboardingEvents).limit(100001);
    if (sessions.length > 100000 || events.length > 100000)
      throw new Error('Select a narrower reporting range');

    return buildFacilitatorMetrics(sessions, events, range);
  }
}

class MemoryStorage implements IStorage {
  private sessions: AuditSession[] = [];
  private events: OnboardingEvent[] = [];
  private nextSessionId = 1;
  private nextEventId = 1;

  async upsertAuditSession(session: InsertAuditSession): Promise<AuditSession> {
    const existingIndex = this.sessions.findIndex((entry) => entry.sessionId === session.sessionId);

    if (existingIndex >= 0) {
      const existing = this.sessions[existingIndex];
      const updated: AuditSession = {
        ...existing,
        ...session,
        locale: session.locale ?? existing.locale,
        deviceType: session.deviceType ?? existing.deviceType,
        os: session.os ?? existing.os,
        browser: session.browser ?? existing.browser,
        publicExposureScore: session.publicExposureScore ?? existing.publicExposureScore,
        trackerScore: session.trackerScore ?? existing.trackerScore,
        fingerprintScore: session.fingerprintScore ?? existing.fingerprintScore,
        adSettingsScore: session.adSettingsScore ?? existing.adSettingsScore,
        trackerCount: session.trackerCount ?? existing.trackerCount,
        completed: session.completed ?? existing.completed,
        completedAt: session.completedAt ?? existing.completedAt,
      };
      this.sessions[existingIndex] = updated;
      return updated;
    }

    const now = new Date();
    const record: AuditSession = {
      id: this.nextSessionId++,
      sessionId: session.sessionId,
      mode: session.mode,
      locale: session.locale ?? null,
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
    if (this.sessions.length > 10000) this.sessions.shift();
    return record;
  }

  async updateAuditSession(
    sessionId: string,
    updates: Partial<InsertAuditSession>,
  ): Promise<AuditSession | null> {
    const sessionIndex = this.sessions.findIndex((entry) => entry.sessionId === sessionId);
    if (sessionIndex === -1) return null;

    const existing = this.sessions[sessionIndex];
    const updated: AuditSession = {
      ...existing,
      ...updates,
      locale: updates.locale ?? existing.locale,
      deviceType: updates.deviceType ?? existing.deviceType,
      os: updates.os ?? existing.os,
      browser: updates.browser ?? existing.browser,
      publicExposureScore: updates.publicExposureScore ?? existing.publicExposureScore,
      trackerScore: updates.trackerScore ?? existing.trackerScore,
      fingerprintScore: updates.fingerprintScore ?? existing.fingerprintScore,
      adSettingsScore: updates.adSettingsScore ?? existing.adSettingsScore,
      trackerCount: updates.trackerCount ?? existing.trackerCount,
      completed: updates.completed ?? existing.completed,
      completedAt: updates.completedAt ?? existing.completedAt,
    };
    this.sessions[sessionIndex] = updated;
    return updated;
  }

  async getAuditSessionBySessionId(sessionId: string): Promise<AuditSession | null> {
    return this.sessions.find((entry) => entry.sessionId === sessionId) ?? null;
  }

  async createOnboardingEvent(event: InsertOnboardingEvent): Promise<OnboardingEvent> {
    const record: OnboardingEvent = {
      id: this.nextEventId++,
      sessionId: event.sessionId,
      eventName: event.eventName,
      stepKey: event.stepKey ?? null,
      mode: event.mode ?? null,
      locale: event.locale ?? null,
      guidanceLevel: event.guidanceLevel ?? null,
      deviceType: event.deviceType ?? null,
      os: event.os ?? null,
      browser: event.browser ?? null,
      timeSinceStartSec: event.timeSinceStartSec ?? null,
      completedChecklistCount: event.completedChecklistCount ?? null,
      targetChecklistCount: event.targetChecklistCount ?? null,
      unmetItemsCount: event.unmetItemsCount ?? null,
      unknownAnswerCount: event.unknownAnswerCount ?? null,
      nextActionCount: event.nextActionCount ?? null,
      skippedStepCount: event.skippedStepCount ?? null,
      wasReady: event.wasReady ?? null,
      weakReport: event.weakReport ?? null,
      skipped: event.skipped ?? null,
      occurredAt: new Date(),
    };
    this.events.push(record);
    if (this.events.length > 50000) this.events.shift();
    return record;
  }

  async getFacilitatorMetrics(range: FacilitatorDateRange): Promise<FacilitatorMetrics> {
    const sessions = this.sessions.filter((session) => {
      if (range.from && session.createdAt < range.from) {
        return false;
      }

      if (range.to && session.createdAt > range.to) {
        return false;
      }

      return true;
    });

    const events = this.events.filter((event) => {
      if (range.from && event.occurredAt < range.from) {
        return false;
      }

      if (range.to && event.occurredAt > range.to) {
        return false;
      }

      return true;
    });

    return buildFacilitatorMetrics(sessions, events, range);
  }
}

export const storage: IStorage = hasDatabase ? new DatabaseStorage() : new MemoryStorage();
