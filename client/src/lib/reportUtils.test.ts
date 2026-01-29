import { describe, expect, it } from 'vitest';
import { wizardResultsSchema } from '@shared/schema';
import {
  displayValue,
  formatMappedValue,
  getAdSettingsLevel,
  getCleanupLevel,
  getFingerprintLevel,
  getPublicExposureLevel,
  getTrackerLevel,
  isNA,
  scoreFor,
} from './reportUtils';

const baseResults = wizardResultsSchema.parse({});

describe('reportUtils scoring', () => {
  it('treats skipped and unknown as N/A', () => {
    expect(isNA('unknown', false)).toBe(true);
    expect(isNA('good', true)).toBe(true);
    expect(scoreFor('unknown', false)).toBeNull();
    expect(scoreFor('good', true)).toBeNull();
  });

  it('scores public exposure based on pages and people-search', () => {
    const good = getPublicExposureLevel(
      {
        ...baseResults,
        publicExposure: {
          ...baseResults.publicExposure,
          searchResultPagesWithPersonalInfo: 0,
          peopleSearchSitesFound: 'no',
        },
      },
      false,
    );
    const warning = getPublicExposureLevel(
      {
        ...baseResults,
        publicExposure: { ...baseResults.publicExposure, searchResultPagesWithPersonalInfo: 1 },
      },
      false,
    );
    const critical = getPublicExposureLevel(
      {
        ...baseResults,
        publicExposure: { ...baseResults.publicExposure, searchResultPagesWithPersonalInfo: 3 },
      },
      false,
    );
    expect(good).toBe('good');
    expect(warning).toBe('warning');
    expect(critical).toBe('critical');
  });

  it('scores trackers by count and flags unknown when missing', () => {
    const unknown = getTrackerLevel(baseResults, false);
    const good = getTrackerLevel(
      { ...baseResults, trackers: { ...baseResults.trackers, trackerCount: 5 } },
      false,
    );
    const warning = getTrackerLevel(
      { ...baseResults, trackers: { ...baseResults.trackers, trackerCount: 20 } },
      false,
    );
    const critical = getTrackerLevel(
      { ...baseResults, trackers: { ...baseResults.trackers, trackerCount: 60 } },
      false,
    );
    expect(unknown).toBe('unknown');
    expect(good).toBe('good');
    expect(warning).toBe('warning');
    expect(critical).toBe('critical');
  });

  it('scores fingerprinting based on uniqueness result', () => {
    const unknown = getFingerprintLevel(baseResults, false);
    const good = getFingerprintLevel(
      { ...baseResults, fingerprinting: { ...baseResults.fingerprinting, browserUnique: 'no' } },
      false,
    );
    const critical = getFingerprintLevel(
      { ...baseResults, fingerprinting: { ...baseResults.fingerprinting, browserUnique: 'yes' } },
      false,
    );
    expect(unknown).toBe('unknown');
    expect(good).toBe('good');
    expect(critical).toBe('critical');
  });

  it('scores ad settings with mixed statuses', () => {
    const unknown = getAdSettingsLevel(baseResults, false);
    const warning = getAdSettingsLevel(
      {
        ...baseResults,
        accountDevice: {
          ...baseResults.accountDevice,
          googlePersonalizedAds: 'on',
          iosATTSetting: 'blocked',
        },
      },
      false,
    );
    const critical = getAdSettingsLevel(
      {
        ...baseResults,
        accountDevice: {
          ...baseResults.accountDevice,
          googlePersonalizedAds: 'on',
          iosATTSetting: 'allow_apps_to_request',
        },
      },
      false,
    );
    expect(unknown).toBe('unknown');
    expect(warning).toBe('warning');
    expect(critical).toBe('critical');
  });

  it('scores cleanup based on cookie actions', () => {
    const critical = getCleanupLevel(baseResults, false);
    const warning = getCleanupLevel(
      {
        ...baseResults,
        cleanup: {
          ...baseResults.cleanup,
          cookiesCleared: 'yes',
          thirdPartyCookiesBlockedOrLimited: 'unsure',
        },
      },
      false,
    );
    const good = getCleanupLevel(
      {
        ...baseResults,
        cleanup: {
          ...baseResults.cleanup,
          cookiesCleared: 'yes',
          thirdPartyCookiesBlockedOrLimited: 'yes',
        },
      },
      false,
    );
    expect(critical).toBe('critical');
    expect(warning).toBe('warning');
    expect(good).toBe('good');
  });
});

describe('reportUtils formatting', () => {
  it('formats unknown values as not answered', () => {
    const map = { yes: 'Yes', no: 'No' };
    expect(formatMappedValue(null, map, 'Not answered')).toBe('Not answered');
    expect(formatMappedValue('unsure', map, 'Not answered')).toBe('Not answered');
    expect(formatMappedValue('unknown', map, 'Not answered')).toBe('Not answered');
    expect(formatMappedValue('yes', map, 'Not answered')).toBe('Yes');
  });

  it('uses N/A label when skipped', () => {
    expect(displayValue(true, 'Value', 'N/A')).toBe('N/A');
    expect(displayValue(false, 'Value', 'N/A')).toBe('Value');
  });
});
