import type { Locale, StepKey, WizardData, WizardResults } from '@shared/schema';
import {
  getAdSettingsLevel,
  getFingerprintLevel,
  getPublicExposureLevel,
  getTrackerLevel,
  scoreFor,
} from './reportUtils';

const STEP_INDEX_BY_KEY: Record<Exclude<StepKey, 'welcome' | 'reportCard'>, number> = {
  publicExposure: 1,
  trackers: 2,
  fingerprinting: 3,
  accountDevice: 4,
  cleanup: 5,
};

export function getStepKeyForIndex(currentStep: number): StepKey {
  switch (currentStep) {
    case 0:
      return 'welcome';
    case 1:
      return 'publicExposure';
    case 2:
      return 'trackers';
    case 3:
      return 'fingerprinting';
    case 4:
      return 'accountDevice';
    case 5:
      return 'cleanup';
    default:
      return 'reportCard';
  }
}

export function countUnknownAnswers(results: WizardResults): number {
  return Object.values(results).reduce((total, section) => {
    return (
      total +
      Object.values(section).filter(
        (value) => value === null || value === 'unsure' || value === 'unknown',
      ).length
    );
  }, 0);
}

export function countNextActions(data: WizardData): number {
  let count = 0;
  const results = data.results;
  const skippedSteps = data.skippedSteps;

  count += skippedSteps.length;

  const publicSkipped = skippedSteps.includes(STEP_INDEX_BY_KEY.publicExposure);
  const trackersSkipped = skippedSteps.includes(STEP_INDEX_BY_KEY.trackers);
  const fingerprintSkipped = skippedSteps.includes(STEP_INDEX_BY_KEY.fingerprinting);
  const accountSkipped = skippedSteps.includes(STEP_INDEX_BY_KEY.accountDevice);
  const cleanupSkipped = skippedSteps.includes(STEP_INDEX_BY_KEY.cleanup);

  const publicLevel = getPublicExposureLevel(results, publicSkipped);
  const trackersLevel = getTrackerLevel(results, trackersSkipped);
  const fingerprintLevel = getFingerprintLevel(results, fingerprintSkipped);

  if (publicLevel !== 'good' && !publicSkipped) count += 1;
  if (results.publicExposure.peopleSearchSitesFound === 'yes' && !publicSkipped) count += 1;
  if ((trackersLevel === 'critical' || trackersLevel === 'warning') && !trackersSkipped) count += 1;
  if (fingerprintLevel === 'critical' && !fingerprintSkipped) count += 1;
  if (results.accountDevice.googlePersonalizedAds === 'on' && !accountSkipped) count += 1;
  if (results.cleanup.cookiesCleared === 'no' && !cleanupSkipped) count += 1;
  if (results.cleanup.thirdPartyCookiesBlockedOrLimited === 'no' && !cleanupSkipped) count += 1;
  if (
    (results.cleanup.passwordHygieneActionTaken === 'later' ||
      results.cleanup.passwordHygieneActionTaken === 'no') &&
    !cleanupSkipped
  ) {
    count += 1;
  }

  return count === 0 ? 1 : Math.min(count, 7);
}

export function isWeakReport(data: WizardData): boolean {
  return countUnknownAnswers(data.results) >= 5 || data.skippedSteps.length >= 2;
}

export function buildAuditSessionPayload(data: WizardData, locale: Locale) {
  const publicSkipped = data.skippedSteps.includes(STEP_INDEX_BY_KEY.publicExposure);
  const trackersSkipped = data.skippedSteps.includes(STEP_INDEX_BY_KEY.trackers);
  const fingerprintSkipped = data.skippedSteps.includes(STEP_INDEX_BY_KEY.fingerprinting);
  const accountSkipped = data.skippedSteps.includes(STEP_INDEX_BY_KEY.accountDevice);

  return {
    sessionId: data.sessionId ?? '',
    mode: data.mode,
    locale,
    deviceType: data.device.type,
    os: data.device.os,
    browser: data.device.browser,
    publicExposureScore: scoreFor(
      getPublicExposureLevel(data.results, publicSkipped),
      publicSkipped,
    ),
    trackerScore: scoreFor(getTrackerLevel(data.results, trackersSkipped), trackersSkipped),
    fingerprintScore: scoreFor(
      getFingerprintLevel(data.results, fingerprintSkipped),
      fingerprintSkipped,
    ),
    adSettingsScore: scoreFor(getAdSettingsLevel(data.results, accountSkipped), accountSkipped),
    trackerCount: data.results.trackers.trackerCount,
    completed: data.completedAt ? 1 : 0,
    completedAt: data.completedAt,
  };
}
