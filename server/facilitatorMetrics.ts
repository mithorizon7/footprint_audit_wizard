import type { AuditSession, OnboardingEvent, StepKey } from '@shared/schema';

export interface FacilitatorDateRange {
  from: Date | null;
  to: Date | null;
}

export interface FacilitatorMetrics {
  range: {
    from: string | null;
    to: string | null;
  };
  summary: {
    totalVisitors: number;
    auditsStarted: number;
    completedSessions: number;
    completionRate: number;
    reportViews: number;
    reportViewRate: number;
    medianTimeToReportSec: number | null;
    weakReportRate: number;
    promptedSessionRate: number;
    avgNextActionCount: number | null;
    avgPublicExposureScore: number | null;
    avgTrackerScore: number | null;
    avgFingerprintScore: number | null;
    avgAdSettingsScore: number | null;
    avgTrackerCount: number | null;
  };
  funnel: Array<{
    key: string;
    count: number;
    conversionFromStart: number | null;
  }>;
  stepBreakdown: Array<{
    stepKey: StepKey;
    viewedSessions: number;
    completedSessions: number;
    skippedSessions: number;
    promptedSessions: number;
    readyAdvanceRate: number | null;
    avgChecklistCompletionPct: number | null;
  }>;
  deviceBreakdown: Array<{ key: string; count: number }>;
  browserBreakdown: Array<{ key: string; count: number }>;
  localeBreakdown: Array<{ key: string; count: number }>;
  modeBreakdown: Array<{ key: string; count: number }>;
  daily: Array<{
    date: string;
    visitors: number;
    auditsStarted: number;
    reportsViewed: number;
    completedSessions: number;
  }>;
}

const STEP_BREAKDOWN_KEYS: StepKey[] = [
  'publicExposure',
  'trackers',
  'fingerprinting',
  'accountDevice',
  'cleanup',
];

const FUNNEL_STAGES: Array<{
  key: string;
  eventName: OnboardingEvent['eventName'];
  stepKey?: StepKey;
}> = [
  { key: 'welcome_viewed', eventName: 'welcome_viewed' },
  { key: 'mode_selected', eventName: 'mode_selected' },
  { key: 'audit_started', eventName: 'audit_started' },
  { key: 'publicExposure', eventName: 'step_viewed', stepKey: 'publicExposure' },
  { key: 'trackers', eventName: 'step_viewed', stepKey: 'trackers' },
  { key: 'fingerprinting', eventName: 'step_viewed', stepKey: 'fingerprinting' },
  { key: 'accountDevice', eventName: 'step_viewed', stepKey: 'accountDevice' },
  { key: 'cleanup', eventName: 'step_viewed', stepKey: 'cleanup' },
  { key: 'report_viewed', eventName: 'report_viewed' },
];

interface SessionProfile {
  mode: string;
  locale: string;
  deviceType: string;
  browser: string;
}

function toIsoDate(value: Date): string {
  return value.toISOString().slice(0, 10);
}

function roundPct(part: number, total: number): number {
  if (total <= 0) {
    return 0;
  }

  return Math.round((part / total) * 100);
}

function average(values: number[]): number | null {
  if (!values.length) {
    return null;
  }

  const total = values.reduce((sum, value) => sum + value, 0);
  return Math.round(total / values.length);
}

function median(values: number[]): number | null {
  if (!values.length) {
    return null;
  }

  const sorted = [...values].sort((left, right) => left - right);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    return sorted[middle];
  }

  return Math.round((sorted[middle - 1] + sorted[middle]) / 2);
}

function breakdownToArray(counts: Map<string, number>): Array<{ key: string; count: number }> {
  return Array.from(counts.entries())
    .sort((left, right) => {
      if (right[1] !== left[1]) {
        return right[1] - left[1];
      }

      return left[0].localeCompare(right[0]);
    })
    .map(([key, count]) => ({ key, count }));
}

function uniqueSessionCount(
  events: OnboardingEvent[],
  eventName: OnboardingEvent['eventName'],
  stepKey?: StepKey,
): number {
  return new Set(
    events
      .filter(
        (event) => event.eventName === eventName && (stepKey ? event.stepKey === stepKey : true),
      )
      .map((event) => event.sessionId),
  ).size;
}

function selectSessionEvents(events: OnboardingEvent[], latest: boolean): OnboardingEvent[] {
  const selected = new Map<string, OnboardingEvent>();
  for (const event of events) {
    const previous = selected.get(event.sessionId);
    const order = previous
      ? event.occurredAt.getTime() - previous.occurredAt.getTime() || event.id - previous.id
      : 0;
    if (!previous || (latest ? order > 0 : order < 0)) selected.set(event.sessionId, event);
  }
  return Array.from(selected.values());
}

function buildSessionProfiles(
  sessions: AuditSession[],
  events: OnboardingEvent[],
): Map<string, SessionProfile> {
  const profiles = new Map<string, SessionProfile>();

  sessions.forEach((session) => {
    profiles.set(session.sessionId, {
      mode: session.mode || 'unknown',
      locale: session.locale || 'unknown',
      deviceType: session.deviceType || 'unknown',
      browser: session.browser || 'unknown',
    });
  });

  events.forEach((event) => {
    const existing = profiles.get(event.sessionId) ?? {
      mode: 'unknown',
      locale: 'unknown',
      deviceType: 'unknown',
      browser: 'unknown',
    };

    profiles.set(event.sessionId, {
      mode: existing.mode !== 'unknown' ? existing.mode : event.mode || 'unknown',
      locale: existing.locale !== 'unknown' ? existing.locale : event.locale || 'unknown',
      deviceType:
        existing.deviceType !== 'unknown' ? existing.deviceType : event.deviceType || 'unknown',
      browser: existing.browser !== 'unknown' ? existing.browser : event.browser || 'unknown',
    });
  });

  return profiles;
}

function increment(map: Map<string, number>, key: string): void {
  map.set(key, (map.get(key) ?? 0) + 1);
}

export function buildFacilitatorMetrics(
  sessions: AuditSession[],
  events: OnboardingEvent[],
  range: FacilitatorDateRange,
): FacilitatorMetrics {
  const visitorIds = new Set<string>();
  sessions.forEach((session) => visitorIds.add(session.sessionId));
  events.forEach((event) => visitorIds.add(event.sessionId));

  const auditsStarted = new Set(sessions.map((session) => session.sessionId));
  events
    .filter((event) => event.eventName === 'audit_started')
    .forEach((event) => auditsStarted.add(event.sessionId));

  const completedIds = new Set(
    sessions.filter((session) => session.completed === 1).map((session) => session.sessionId),
  );
  const reportViewEvents = events.filter((event) => event.eventName === 'report_viewed');
  const reportViewIds = new Set(reportViewEvents.map((event) => event.sessionId));
  const firstReports = selectSessionEvents(reportViewEvents, false);
  const latestReports = selectSessionEvents(reportViewEvents, true);
  // Resumed audits can have activity in this range without a new start event.
  events
    .filter((event) => !['welcome_viewed', 'mode_selected'].includes(event.eventName))
    .forEach((event) => auditsStarted.add(event.sessionId));
  const promptedIds = new Set(
    events
      .filter((event) => event.eventName === 'next_prompt_shown')
      .map((event) => event.sessionId),
  );

  const summary = {
    totalVisitors: visitorIds.size,
    auditsStarted: auditsStarted.size,
    completedSessions: completedIds.size,
    completionRate: roundPct(completedIds.size, auditsStarted.size),
    reportViews: reportViewIds.size,
    reportViewRate: roundPct(reportViewIds.size, auditsStarted.size),
    medianTimeToReportSec: median(
      firstReports
        .map((event) => event.timeSinceStartSec)
        .filter((value): value is number => typeof value === 'number'),
    ),
    weakReportRate: roundPct(
      latestReports.filter((event) => event.weakReport === true).length,
      latestReports.length,
    ),
    promptedSessionRate: roundPct(promptedIds.size, auditsStarted.size),
    avgNextActionCount: average(
      latestReports
        .map((event) => event.nextActionCount)
        .filter((value): value is number => typeof value === 'number'),
    ),
    avgPublicExposureScore: average(
      sessions
        .map((session) => session.publicExposureScore)
        .filter((value): value is number => typeof value === 'number'),
    ),
    avgTrackerScore: average(
      sessions
        .map((session) => session.trackerScore)
        .filter((value): value is number => typeof value === 'number'),
    ),
    avgFingerprintScore: average(
      sessions
        .map((session) => session.fingerprintScore)
        .filter((value): value is number => typeof value === 'number'),
    ),
    avgAdSettingsScore: average(
      sessions
        .map((session) => session.adSettingsScore)
        .filter((value): value is number => typeof value === 'number'),
    ),
    avgTrackerCount: average(
      sessions
        .map((session) => session.trackerCount)
        .filter((value): value is number => typeof value === 'number'),
    ),
  };

  const funnel = FUNNEL_STAGES.map((stage) => {
    const count =
      stage.key === 'audit_started'
        ? auditsStarted.size
        : uniqueSessionCount(events, stage.eventName, stage.stepKey);
    return {
      key: stage.key,
      count,
      conversionFromStart:
        stage.key === 'welcome_viewed' || stage.key === 'mode_selected'
          ? null
          : roundPct(count, auditsStarted.size),
    };
  });

  const stepBreakdown = STEP_BREAKDOWN_KEYS.map((stepKey) => {
    const completions = events.filter(
      (event) => event.eventName === 'step_completed' && event.stepKey === stepKey,
    );
    const latestCompletions = selectSessionEvents(completions, true);
    const nonSkippedCompletions = latestCompletions.filter((event) => event.skipped !== true);
    const readyCompletions = nonSkippedCompletions.filter((event) => event.wasReady === true);
    const checklistCompletionPct = nonSkippedCompletions
      .map((event) => {
        const completed = event.completedChecklistCount;
        const target = event.targetChecklistCount;

        if (typeof completed !== 'number' || typeof target !== 'number' || target <= 0) {
          return null;
        }

        return Math.min(100, Math.round((completed / target) * 100));
      })
      .filter((value): value is number => typeof value === 'number');

    return {
      stepKey,
      viewedSessions: uniqueSessionCount(events, 'step_viewed', stepKey),
      completedSessions: nonSkippedCompletions.length,
      skippedSessions: new Set(
        latestCompletions.filter((event) => event.skipped === true).map((event) => event.sessionId),
      ).size,
      promptedSessions: uniqueSessionCount(events, 'next_prompt_shown', stepKey),
      readyAdvanceRate: nonSkippedCompletions.length
        ? roundPct(readyCompletions.length, nonSkippedCompletions.length)
        : null,
      avgChecklistCompletionPct: average(checklistCompletionPct),
    };
  });

  const profiles = buildSessionProfiles(sessions, events);
  const deviceBreakdown = new Map<string, number>();
  const browserBreakdown = new Map<string, number>();
  const localeBreakdown = new Map<string, number>();
  const modeBreakdown = new Map<string, number>();

  profiles.forEach((profile) => {
    increment(deviceBreakdown, profile.deviceType);
    increment(browserBreakdown, profile.browser);
    increment(localeBreakdown, profile.locale);
    increment(modeBreakdown, profile.mode);
  });

  const dailyMap = new Map<
    string,
    {
      visitors: Set<string>;
      auditsStarted: Set<string>;
      reportsViewed: Set<string>;
      completedSessions: Set<string>;
    }
  >();

  const ensureDay = (date: string) => {
    const existing = dailyMap.get(date);
    if (existing) {
      return existing;
    }

    const created = {
      visitors: new Set<string>(),
      auditsStarted: new Set<string>(),
      reportsViewed: new Set<string>(),
      completedSessions: new Set<string>(),
    };
    dailyMap.set(date, created);
    return created;
  };

  events.forEach((event) => {
    const day = ensureDay(toIsoDate(event.occurredAt));
    day.visitors.add(event.sessionId);

    if (event.eventName === 'audit_started') {
      day.auditsStarted.add(event.sessionId);
    }

    if (event.eventName === 'report_viewed') {
      day.reportsViewed.add(event.sessionId);
    }
  });

  sessions.forEach((session) => {
    const startedDay = ensureDay(toIsoDate(session.createdAt));
    startedDay.visitors.add(session.sessionId);
    startedDay.auditsStarted.add(session.sessionId);

    if (session.completed === 1) {
      const completedAt = session.completedAt ?? session.createdAt;
      ensureDay(toIsoDate(completedAt)).completedSessions.add(session.sessionId);
    }
  });

  const daily = Array.from(dailyMap.entries())
    .sort((left, right) => left[0].localeCompare(right[0]))
    .map(([date, counts]) => ({
      date,
      visitors: counts.visitors.size,
      auditsStarted: counts.auditsStarted.size,
      reportsViewed: counts.reportsViewed.size,
      completedSessions: counts.completedSessions.size,
    }));

  return {
    range: {
      from: range.from ? toIsoDate(range.from) : null,
      to: range.to ? toIsoDate(range.to) : null,
    },
    summary,
    funnel,
    stepBreakdown,
    deviceBreakdown: breakdownToArray(deviceBreakdown),
    browserBreakdown: breakdownToArray(browserBreakdown),
    localeBreakdown: breakdownToArray(localeBreakdown),
    modeBreakdown: breakdownToArray(modeBreakdown),
    daily,
  };
}

function escapeCsv(value: string | number | null): string {
  if (value === null) {
    return '';
  }

  const stringValue = String(value);
  if (typeof value === 'string' && /^[=+@\-\t\r]/.test(stringValue)) {
    return `"'${stringValue.replace(/"/g, '""')}"`;
  }
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }

  return stringValue;
}

export function facilitatorMetricsToCsv(metrics: FacilitatorMetrics): string {
  const rows: Array<[string, string, string, string | number | null]> = [
    ['meta', 'range', 'from', metrics.range.from],
    ['meta', 'range', 'to', metrics.range.to],
    ['summary', 'summary', 'total_visitors', metrics.summary.totalVisitors],
    ['summary', 'summary', 'audits_started', metrics.summary.auditsStarted],
    ['summary', 'summary', 'completed_sessions', metrics.summary.completedSessions],
    ['summary', 'summary', 'completion_rate_pct', metrics.summary.completionRate],
    ['summary', 'summary', 'report_views', metrics.summary.reportViews],
    ['summary', 'summary', 'report_view_rate_pct', metrics.summary.reportViewRate],
    ['summary', 'summary', 'median_time_to_report_sec', metrics.summary.medianTimeToReportSec],
    ['summary', 'summary', 'weak_report_rate_pct', metrics.summary.weakReportRate],
    ['summary', 'summary', 'prompted_session_rate_pct', metrics.summary.promptedSessionRate],
    ['summary', 'summary', 'avg_next_action_count', metrics.summary.avgNextActionCount],
    ['summary', 'scores', 'avg_public_exposure_score', metrics.summary.avgPublicExposureScore],
    ['summary', 'scores', 'avg_tracker_score', metrics.summary.avgTrackerScore],
    ['summary', 'scores', 'avg_fingerprint_score', metrics.summary.avgFingerprintScore],
    ['summary', 'scores', 'avg_ad_settings_score', metrics.summary.avgAdSettingsScore],
    ['summary', 'scores', 'avg_tracker_count', metrics.summary.avgTrackerCount],
  ];

  metrics.funnel.forEach((entry) => {
    rows.push(['funnel', entry.key, 'count', entry.count]);
    rows.push(['funnel', entry.key, 'conversion_from_start_pct', entry.conversionFromStart]);
  });

  metrics.stepBreakdown.forEach((entry) => {
    rows.push(['step', entry.stepKey, 'viewed_sessions', entry.viewedSessions]);
    rows.push(['step', entry.stepKey, 'completed_sessions', entry.completedSessions]);
    rows.push(['step', entry.stepKey, 'skipped_sessions', entry.skippedSessions]);
    rows.push(['step', entry.stepKey, 'prompted_sessions', entry.promptedSessions]);
    rows.push(['step', entry.stepKey, 'ready_advance_rate_pct', entry.readyAdvanceRate]);
    rows.push([
      'step',
      entry.stepKey,
      'avg_checklist_completion_pct',
      entry.avgChecklistCompletionPct,
    ]);
  });

  metrics.deviceBreakdown.forEach((entry) => {
    rows.push(['device', entry.key, 'count', entry.count]);
  });
  metrics.browserBreakdown.forEach((entry) => {
    rows.push(['browser', entry.key, 'count', entry.count]);
  });
  metrics.localeBreakdown.forEach((entry) => {
    rows.push(['locale', entry.key, 'count', entry.count]);
  });
  metrics.modeBreakdown.forEach((entry) => {
    rows.push(['mode', entry.key, 'count', entry.count]);
  });
  metrics.daily.forEach((entry) => {
    rows.push(['daily', entry.date, 'visitors', entry.visitors]);
    rows.push(['daily', entry.date, 'audits_started', entry.auditsStarted]);
    rows.push(['daily', entry.date, 'reports_viewed', entry.reportsViewed]);
    rows.push(['daily', entry.date, 'completed_sessions', entry.completedSessions]);
  });

  const header = 'section,group,label,value';
  const lines = rows.map((row) => row.map(escapeCsv).join(','));
  return [header, ...lines].join('\n');
}
