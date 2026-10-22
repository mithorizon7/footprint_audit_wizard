import { describe, expect, it } from 'vitest';
import type { AuditSession, OnboardingEvent } from '@shared/schema';
import { buildFacilitatorMetrics, facilitatorMetricsToCsv } from './facilitatorMetrics';

describe('facilitatorMetrics', () => {
  const sessions: AuditSession[] = [
    {
      id: 1,
      sessionId: 'wiz_one',
      mode: 'self',
      locale: 'en',
      deviceType: 'desktop',
      os: 'mac',
      browser: 'chrome',
      publicExposureScore: 60,
      trackerScore: 25,
      fingerprintScore: 25,
      adSettingsScore: 60,
      trackerCount: 42,
      completed: 1,
      createdAt: new Date('2026-03-08T15:00:00.000Z'),
      completedAt: new Date('2026-03-08T15:32:00.000Z'),
    },
    {
      id: 2,
      sessionId: 'wiz_two',
      mode: 'fictional',
      locale: 'lv',
      deviceType: 'mobile',
      os: 'ios',
      browser: 'safari',
      publicExposureScore: 100,
      trackerScore: 60,
      fingerprintScore: 100,
      adSettingsScore: 100,
      trackerCount: 8,
      completed: 0,
      createdAt: new Date('2026-03-09T17:00:00.000Z'),
      completedAt: null,
    },
  ];

  const events: OnboardingEvent[] = [
    {
      id: 1,
      sessionId: 'wiz_one',
      eventName: 'welcome_viewed',
      stepKey: 'welcome',
      mode: 'self',
      locale: 'en',
      guidanceLevel: 'light',
      deviceType: 'desktop',
      os: 'mac',
      browser: 'chrome',
      timeSinceStartSec: 0,
      completedChecklistCount: null,
      targetChecklistCount: null,
      unmetItemsCount: null,
      unknownAnswerCount: null,
      nextActionCount: null,
      skippedStepCount: null,
      wasReady: null,
      weakReport: null,
      skipped: null,
      occurredAt: new Date('2026-03-08T15:00:00.000Z'),
    },
    {
      id: 2,
      sessionId: 'wiz_one',
      eventName: 'audit_started',
      stepKey: 'welcome',
      mode: 'self',
      locale: 'en',
      guidanceLevel: 'light',
      deviceType: 'desktop',
      os: 'mac',
      browser: 'chrome',
      timeSinceStartSec: 0,
      completedChecklistCount: null,
      targetChecklistCount: null,
      unmetItemsCount: null,
      unknownAnswerCount: null,
      nextActionCount: null,
      skippedStepCount: null,
      wasReady: null,
      weakReport: null,
      skipped: null,
      occurredAt: new Date('2026-03-08T15:01:00.000Z'),
    },
    {
      id: 3,
      sessionId: 'wiz_one',
      eventName: 'step_viewed',
      stepKey: 'publicExposure',
      mode: 'self',
      locale: 'en',
      guidanceLevel: 'light',
      deviceType: 'desktop',
      os: 'mac',
      browser: 'chrome',
      timeSinceStartSec: 30,
      completedChecklistCount: null,
      targetChecklistCount: null,
      unmetItemsCount: null,
      unknownAnswerCount: null,
      nextActionCount: null,
      skippedStepCount: null,
      wasReady: null,
      weakReport: null,
      skipped: null,
      occurredAt: new Date('2026-03-08T15:01:30.000Z'),
    },
    {
      id: 4,
      sessionId: 'wiz_one',
      eventName: 'step_completed',
      stepKey: 'publicExposure',
      mode: 'self',
      locale: 'en',
      guidanceLevel: 'light',
      deviceType: 'desktop',
      os: 'mac',
      browser: 'chrome',
      timeSinceStartSec: 180,
      completedChecklistCount: 2,
      targetChecklistCount: 1,
      unmetItemsCount: 0,
      unknownAnswerCount: null,
      nextActionCount: null,
      skippedStepCount: null,
      wasReady: true,
      weakReport: null,
      skipped: false,
      occurredAt: new Date('2026-03-08T15:03:00.000Z'),
    },
    {
      id: 5,
      sessionId: 'wiz_one',
      eventName: 'report_viewed',
      stepKey: 'reportCard',
      mode: 'self',
      locale: 'en',
      guidanceLevel: 'none',
      deviceType: 'desktop',
      os: 'mac',
      browser: 'chrome',
      timeSinceStartSec: 1920,
      completedChecklistCount: null,
      targetChecklistCount: null,
      unmetItemsCount: null,
      unknownAnswerCount: 2,
      nextActionCount: 4,
      skippedStepCount: 0,
      wasReady: null,
      weakReport: false,
      skipped: null,
      occurredAt: new Date('2026-03-08T15:32:00.000Z'),
    },
    {
      id: 6,
      sessionId: 'wiz_two',
      eventName: 'welcome_viewed',
      stepKey: 'welcome',
      mode: 'fictional',
      locale: 'lv',
      guidanceLevel: 'light',
      deviceType: 'mobile',
      os: 'ios',
      browser: 'safari',
      timeSinceStartSec: 0,
      completedChecklistCount: null,
      targetChecklistCount: null,
      unmetItemsCount: null,
      unknownAnswerCount: null,
      nextActionCount: null,
      skippedStepCount: null,
      wasReady: null,
      weakReport: null,
      skipped: null,
      occurredAt: new Date('2026-03-09T17:00:00.000Z'),
    },
    {
      id: 7,
      sessionId: 'wiz_two',
      eventName: 'audit_started',
      stepKey: 'welcome',
      mode: 'fictional',
      locale: 'lv',
      guidanceLevel: 'light',
      deviceType: 'mobile',
      os: 'ios',
      browser: 'safari',
      timeSinceStartSec: 0,
      completedChecklistCount: null,
      targetChecklistCount: null,
      unmetItemsCount: null,
      unknownAnswerCount: null,
      nextActionCount: null,
      skippedStepCount: null,
      wasReady: null,
      weakReport: null,
      skipped: null,
      occurredAt: new Date('2026-03-09T17:01:00.000Z'),
    },
    {
      id: 8,
      sessionId: 'wiz_two',
      eventName: 'next_prompt_shown',
      stepKey: 'publicExposure',
      mode: 'fictional',
      locale: 'lv',
      guidanceLevel: 'high',
      deviceType: 'mobile',
      os: 'ios',
      browser: 'safari',
      timeSinceStartSec: 60,
      completedChecklistCount: 0,
      targetChecklistCount: 1,
      unmetItemsCount: 2,
      unknownAnswerCount: null,
      nextActionCount: null,
      skippedStepCount: null,
      wasReady: null,
      weakReport: null,
      skipped: null,
      occurredAt: new Date('2026-03-09T17:02:00.000Z'),
    },
  ];

  it('aggregates session and onboarding metrics', () => {
    const metrics = buildFacilitatorMetrics(sessions, events, { from: null, to: null });

    expect(metrics.summary.totalVisitors).toBe(2);
    expect(metrics.summary.auditsStarted).toBe(2);
    expect(metrics.summary.completedSessions).toBe(1);
    expect(metrics.summary.completionRate).toBe(50);
    expect(metrics.summary.reportViews).toBe(1);
    expect(metrics.summary.medianTimeToReportSec).toBe(1920);
    expect(metrics.summary.promptedSessionRate).toBe(50);
    expect(metrics.summary.avgTrackerCount).toBe(25);

    expect(metrics.funnel.find((entry) => entry.key === 'report_viewed')?.count).toBe(1);

    const publicExposure = metrics.stepBreakdown.find(
      (entry) => entry.stepKey === 'publicExposure',
    );
    expect(publicExposure).toMatchObject({
      viewedSessions: 1,
      completedSessions: 1,
      promptedSessions: 1,
      readyAdvanceRate: 100,
    });

    expect(metrics.deviceBreakdown).toEqual([
      { key: 'desktop', count: 1 },
      { key: 'mobile', count: 1 },
    ]);
  });

  it('exports flattened CSV rows', () => {
    const metrics = buildFacilitatorMetrics(sessions, events, { from: null, to: null });
    const csv = facilitatorMetricsToCsv(metrics);

    expect(csv).toContain('section,group,label,value');
    expect(csv).toContain('summary,summary,total_visitors,2');
    expect(csv).toContain('funnel,report_viewed,count,1');
    expect(csv).toContain('device,desktop,count,1');
  });
});
