import { z } from "zod";
import { pgTable, serial, varchar, integer, timestamp, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const auditSessions = pgTable("audit_sessions", {
  id: serial("id").primaryKey(),
  sessionId: varchar("session_id", { length: 64 }).notNull().unique(),
  mode: varchar("mode", { length: 20 }).notNull(),
  deviceType: varchar("device_type", { length: 20 }),
  os: varchar("os", { length: 20 }),
  browser: varchar("browser", { length: 20 }),
  publicExposureScore: integer("public_exposure_score"),
  trackerScore: integer("tracker_score"),
  fingerprintScore: integer("fingerprint_score"),
  adSettingsScore: integer("ad_settings_score"),
  trackerCount: integer("tracker_count"),
  completed: integer("completed").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  completedAt: timestamp("completed_at"),
});

export const insertAuditSessionSchema = createInsertSchema(auditSessions).omit({
  id: true,
  createdAt: true,
});

export type InsertAuditSession = z.infer<typeof insertAuditSessionSchema>;
export type AuditSession = typeof auditSessions.$inferSelect;

export const deviceTypeSchema = z.enum(["desktop", "mobile", "unknown"]);
export const osSchema = z.enum(["windows", "mac", "linux", "ios", "android", "unknown"]);
export const browserSchema = z.enum(["chrome", "edge", "firefox", "safari", "other", "unknown"]);
export const mobilePlatformSelectionSchema = z.enum(["ios", "android", "both", "none", "unsure"]);
export const yesNoUnsureSchema = z.enum(["yes", "no", "unsure"]);
export const yesNoSchema = z.enum(["yes", "no"]);
export const cookieBlockingSchema = z.enum(["yes", "no", "unsure", "already_blocked"]);
export const siteCategorySchema = z.enum(["news", "shopping", "health", "social", "other", "unknown"]);
export const trackingProtectionSchema = z.enum(["strong", "partial", "weak", "unsure"]);
export const adSettingSchema = z.enum(["on", "off", "unsure", "not_used", "not_applicable"]);
export const androidAdIdActionSchema = z.enum(["reset", "deleted", "none", "not_applicable", "unsure"]);
export const iosATTSchema = z.enum(["allow_apps_to_request", "blocked", "unsure", "not_applicable"]);
export const cleanupActionSchema = z.enum(["yes", "no", "later"]);
export const modeSchema = z.enum(["self", "fictional"]);

export const publicExposureSchema = z.object({
  searchResultPagesWithPersonalInfo: z.number().min(0).max(5).default(0),
  peopleSearchSitesFound: yesNoUnsureSchema.default("unsure"),
  googleResultsAboutYouVisited: yesNoSchema.default("no"),
  googleRemovalRequested: z.enum(["yes", "no", "not_applicable"]).default("no"),
});

export const trackersSchema = z.object({
  blacklightRun: yesNoSchema.default("no"),
  siteCategoryScanned: siteCategorySchema.default("unknown"),
  trackerCount: z.number().nullable().default(null),
  thirdPartyCookiesFlagged: yesNoUnsureSchema.default("unsure"),
  sessionRecordingFlagged: yesNoUnsureSchema.default("unsure"),
  keyLoggingFlagged: yesNoUnsureSchema.default("unsure"),
  fingerprintingFlagged: yesNoUnsureSchema.default("unsure"),
});

export const fingerprintingSchema = z.object({
  effTestRun: yesNoSchema.default("no"),
  browserUnique: yesNoUnsureSchema.default("unsure"),
  trackingProtection: trackingProtectionSchema.default("unsure"),
});

export const accountDeviceSchema = z.object({
  googlePersonalizedAds: adSettingSchema.default("unsure"),
  applePersonalizedAds: adSettingSchema.default("not_applicable"),
  androidAdvertisingIdAction: androidAdIdActionSchema.default("not_applicable"),
  iosATTSetting: iosATTSchema.default("not_applicable"),
});

export const cleanupSchema = z.object({
  cookiesCleared: yesNoSchema.default("no"),
  thirdPartyCookiesBlockedOrLimited: cookieBlockingSchema.default("unsure"),
  passwordHygieneActionTaken: cleanupActionSchema.default("later"),
});

export const deviceInfoSchema = z.object({
  type: deviceTypeSchema.default("unknown"),
  os: osSchema.default("unknown"),
  browser: browserSchema.default("unknown"),
  mobilePlatformSelection: mobilePlatformSelectionSchema.default("unsure"),
});

export const wizardResultsSchema = z.object({
  publicExposure: publicExposureSchema.default({}),
  trackers: trackersSchema.default({}),
  fingerprinting: fingerprintingSchema.default({}),
  accountDevice: accountDeviceSchema.default({}),
  cleanup: cleanupSchema.default({}),
});

export const wizardDataSchema = z.object({
  version: z.literal("1.0").default("1.0"),
  mode: modeSchema.default("self"),
  device: deviceInfoSchema.default({}),
  results: wizardResultsSchema.default({}),
  currentStep: z.number().min(0).max(6).default(0),
  startedAt: z.string().nullable().default(null),
  completedAt: z.string().nullable().default(null),
  skippedSteps: z.array(z.number()).default([]),
  elapsedSeconds: z.number().default(0),
  tryLiveToolsInFictional: z.boolean().default(false),
});

export type DeviceType = z.infer<typeof deviceTypeSchema>;
export type OS = z.infer<typeof osSchema>;
export type Browser = z.infer<typeof browserSchema>;
export type MobilePlatformSelection = z.infer<typeof mobilePlatformSelectionSchema>;
export type YesNoUnsure = z.infer<typeof yesNoUnsureSchema>;
export type YesNo = z.infer<typeof yesNoSchema>;
export type CookieBlocking = z.infer<typeof cookieBlockingSchema>;
export type SiteCategory = z.infer<typeof siteCategorySchema>;
export type TrackingProtection = z.infer<typeof trackingProtectionSchema>;
export type AdSetting = z.infer<typeof adSettingSchema>;
export type AndroidAdIdAction = z.infer<typeof androidAdIdActionSchema>;
export type IosATT = z.infer<typeof iosATTSchema>;
export type CleanupAction = z.infer<typeof cleanupActionSchema>;
export type Mode = z.infer<typeof modeSchema>;
export type PublicExposure = z.infer<typeof publicExposureSchema>;
export type Trackers = z.infer<typeof trackersSchema>;
export type Fingerprinting = z.infer<typeof fingerprintingSchema>;
export type AccountDevice = z.infer<typeof accountDeviceSchema>;
export type Cleanup = z.infer<typeof cleanupSchema>;
export type DeviceInfo = z.infer<typeof deviceInfoSchema>;
export type WizardResults = z.infer<typeof wizardResultsSchema>;
export type WizardData = z.infer<typeof wizardDataSchema>;

export const FICTIONAL_DATA: WizardData = {
  version: "1.0",
  mode: "fictional",
  device: { type: "desktop", os: "windows", browser: "chrome", mobilePlatformSelection: "unsure" },
  currentStep: 0,
  startedAt: null,
  completedAt: null,
  skippedSteps: [],
  elapsedSeconds: 0,
  tryLiveToolsInFictional: false,
  results: {
    publicExposure: {
      searchResultPagesWithPersonalInfo: 2,
      peopleSearchSitesFound: "yes",
      googleResultsAboutYouVisited: "yes",
      googleRemovalRequested: "no",
    },
    trackers: {
      blacklightRun: "yes",
      siteCategoryScanned: "news",
      trackerCount: 70,
      thirdPartyCookiesFlagged: "yes",
      sessionRecordingFlagged: "yes",
      keyLoggingFlagged: "no",
      fingerprintingFlagged: "yes",
    },
    fingerprinting: {
      effTestRun: "yes",
      browserUnique: "yes",
      trackingProtection: "weak",
    },
    accountDevice: {
      googlePersonalizedAds: "on",
      applePersonalizedAds: "not_applicable",
      androidAdvertisingIdAction: "not_applicable",
      iosATTSetting: "not_applicable",
    },
    cleanup: {
      cookiesCleared: "no",
      thirdPartyCookiesBlockedOrLimited: "no",
      passwordHygieneActionTaken: "later",
    },
  },
};

export const STEP_INFO = [
  { id: 0, key: "welcome", name: "Welcome", duration: 3 },
  { id: 1, key: "publicExposure", name: "Public Exposure", duration: 10 },
  { id: 2, key: "trackers", name: "Trackers", duration: 15 },
  { id: 3, key: "fingerprinting", name: "Fingerprinting", duration: 10 },
  { id: 4, key: "accountDevice", name: "Account & Device", duration: 10 },
  { id: 5, key: "cleanup", name: "Cleanup", duration: 9 },
  { id: 6, key: "reportCard", name: "Report Card", duration: 3 },
] as const;

export const TOTAL_DURATION_MINUTES = 60;
