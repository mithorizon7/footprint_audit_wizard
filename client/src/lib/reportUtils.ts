import type { WizardResults } from "@shared/schema";

export type ScoreLevel = "good" | "warning" | "critical" | "unknown";

export const isNA = (level: ScoreLevel, skipped: boolean) => skipped || level === "unknown";

export const levelToScore = (level: ScoreLevel): number => {
  switch (level) {
    case "good":
      return 100;
    case "warning":
      return 60;
    case "critical":
      return 25;
    default:
      return 50;
  }
};

export const scoreFor = (level: ScoreLevel, skipped: boolean): number | null =>
  isNA(level, skipped) ? null : levelToScore(level);

export const getPublicExposureLevel = (
  results: WizardResults,
  skipped: boolean
): ScoreLevel => {
  if (skipped) return "unknown";
  const pages = results.publicExposure.searchResultPagesWithPersonalInfo;
  if (pages === 0 && results.publicExposure.peopleSearchSitesFound === "no") return "good";
  if (pages <= 2) return "warning";
  return "critical";
};

export const getTrackerLevel = (results: WizardResults, skipped: boolean): ScoreLevel => {
  if (skipped) return "unknown";
  const count = results.trackers.trackerCount;
  if (count === null || count === undefined) return "unknown";
  if (count <= 10) return "good";
  if (count <= 30) return "warning";
  return "critical";
};

export const getFingerprintLevel = (results: WizardResults, skipped: boolean): ScoreLevel => {
  if (skipped) return "unknown";
  if (results.fingerprinting.browserUnique === "no") return "good";
  if (results.fingerprinting.browserUnique === "yes") return "critical";
  return "unknown";
};

export const getAdSettingsLevel = (results: WizardResults, skipped: boolean): ScoreLevel => {
  if (skipped) return "unknown";

  const googleStatus =
    results.accountDevice.googlePersonalizedAds === "off" ||
    results.accountDevice.googlePersonalizedAds === "not_used"
      ? "good"
      : results.accountDevice.googlePersonalizedAds === "on"
        ? "bad"
        : "unknown";

  const appleStatus =
    results.accountDevice.applePersonalizedAds === "not_applicable"
      ? "na"
      : results.accountDevice.applePersonalizedAds === "off"
        ? "good"
        : results.accountDevice.applePersonalizedAds === "on"
          ? "bad"
          : "unknown";

  const androidStatus =
    results.accountDevice.androidAdvertisingIdAction === "not_applicable"
      ? "na"
      : results.accountDevice.androidAdvertisingIdAction === "deleted"
        ? "good"
        : results.accountDevice.androidAdvertisingIdAction === "reset"
          ? "warn"
          : results.accountDevice.androidAdvertisingIdAction === "none"
            ? "bad"
            : "unknown";

  const iosStatus =
    results.accountDevice.iosATTSetting === "not_applicable"
      ? "na"
      : results.accountDevice.iosATTSetting === "blocked"
        ? "good"
        : results.accountDevice.iosATTSetting === "allow_apps_to_request"
          ? "bad"
          : "unknown";

  const statuses = [googleStatus, appleStatus, androidStatus, iosStatus].filter(
    (status) => status !== "na"
  );

  if (statuses.length === 0 || statuses.every((status) => status === "unknown")) {
    return "unknown";
  }

  const hasBad = statuses.includes("bad");
  const hasWarn = statuses.includes("warn");
  const hasGood = statuses.includes("good");

  if (hasBad) {
    return hasGood || hasWarn ? "warning" : "critical";
  }

  if (hasWarn) return "warning";
  return "good";
};

export const getCleanupLevel = (results: WizardResults, skipped: boolean): ScoreLevel => {
  if (skipped) return "unknown";
  const cookiesCleared = results.cleanup.cookiesCleared === "yes";
  const cookiesBlocked =
    results.cleanup.thirdPartyCookiesBlockedOrLimited === "yes" ||
    results.cleanup.thirdPartyCookiesBlockedOrLimited === "already_blocked";
  if (cookiesCleared && cookiesBlocked) return "good";
  if (cookiesCleared || cookiesBlocked) return "warning";
  return "critical";
};

export const formatMappedValue = (
  value: string | number | null | undefined,
  map: Record<string, string>,
  notAnsweredLabel: string
) => {
  if (value === null || value === undefined) return notAnsweredLabel;
  if (value === "unsure" || value === "unknown") return notAnsweredLabel;
  const key = String(value);
  return map[key] ?? key;
};

export const displayValue = (skipped: boolean, value: string, naLabel: string) =>
  skipped ? naLabel : value;
