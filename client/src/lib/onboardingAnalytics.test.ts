import { describe, expect, it } from 'vitest';
import { wizardDataSchema } from '@shared/schema';
import {
  buildAuditSessionPayload,
  countNextActions,
  countUnknownAnswers,
  getStepKeyForIndex,
  isWeakReport,
} from './onboardingAnalytics';

describe('onboardingAnalytics', () => {
  const baseData = wizardDataSchema.parse({
    sessionId: 'wiz_test',
    startedAt: '2026-03-10T12:00:00.000Z',
    results: {
      publicExposure: {
        searchResultPagesWithPersonalInfo: 3,
        peopleSearchSitesFound: 'yes',
        googleResultsAboutYouVisited: 'yes',
        googleRemovalRequested: 'no',
      },
      trackers: {
        blacklightRun: 'yes',
        siteCategoryScanned: 'news',
        trackerCount: 48,
        thirdPartyCookiesFlagged: 'yes',
        sessionRecordingFlagged: 'unsure',
        keyLoggingFlagged: 'unsure',
        fingerprintingFlagged: 'yes',
      },
      fingerprinting: {
        effTestRun: 'yes',
        browserUnique: 'yes',
        trackingProtection: 'weak',
      },
      accountDevice: {
        googlePersonalizedAds: 'on',
        applePersonalizedAds: 'not_applicable',
        androidAdvertisingIdAction: 'not_applicable',
        iosATTSetting: 'not_applicable',
      },
      cleanup: {
        cookiesCleared: 'no',
        thirdPartyCookiesBlockedOrLimited: 'no',
        passwordHygieneActionTaken: 'later',
      },
    },
  });

  it('maps wizard indices to analytics step keys', () => {
    expect(getStepKeyForIndex(0)).toBe('welcome');
    expect(getStepKeyForIndex(4)).toBe('accountDevice');
    expect(getStepKeyForIndex(6)).toBe('reportCard');
  });

  it('counts unknown answers and next actions from wizard state', () => {
    expect(countUnknownAnswers(baseData.results)).toBe(2);
    expect(countNextActions(baseData)).toBe(7);
  });

  it('marks reports as weak when too many unknowns or skipped steps exist', () => {
    expect(isWeakReport(baseData)).toBe(false);
    expect(
      isWeakReport(
        wizardDataSchema.parse({
          ...baseData,
          skippedSteps: [1, 3],
        }),
      ),
    ).toBe(true);
  });

  it('builds a session payload with audit scores', () => {
    const payload = buildAuditSessionPayload(baseData, 'en');

    expect(payload.sessionId).toBe('wiz_test');
    expect(payload.mode).toBe('self');
    expect(payload.locale).toBe('en');
    expect(payload.publicExposureScore).toBe(25);
    expect(payload.trackerScore).toBe(25);
    expect(payload.fingerprintScore).toBe(25);
    expect(payload.adSettingsScore).toBe(25);
    expect(payload.trackerCount).toBe(48);
  });
});
