import { useRef } from "react";
import { useWizard } from "@/context/WizardContext";
import { useI18n } from "@/context/I18nContext";
import type { Translations } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Download,
  Printer,
  Shield,
  Eye,
  Fingerprint,
  Settings,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RefreshCw,
  SkipForward,
  ExternalLink,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { STEP_INFO } from "@shared/schema";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
} from "recharts";

type ScoreLevel = "good" | "warning" | "critical" | "unknown";

interface MetricTile {
  icon: typeof Shield;
  label: string;
  value: string | number;
  level: ScoreLevel;
  explanation: string;
}

interface StepLinkDef {
  titleKey: keyof Translations["externalTools"];
  descKey: keyof Translations["externalTools"];
  url: string;
}

const STEP_LINK_DEFS: Record<number, StepLinkDef[]> = {
  1: [
    { titleKey: "googleResultsTitle", descKey: "googleResultsDesc", url: "https://myactivity.google.com/results-about-you" },
    { titleKey: "findContactTitle", descKey: "findContactDesc", url: "https://support.google.com/websearch/answer/12719076?hl=en" },
    { titleKey: "requestRemovalTitle", descKey: "requestRemovalDesc", url: "https://support.google.com/websearch/answer/9673730?hl=en" },
  ],
  2: [
    { titleKey: "blacklightTitle", descKey: "blacklightDesc", url: "https://themarkup.org/blacklight" },
  ],
  3: [
    { titleKey: "effCoverTracksTitle", descKey: "effCoverTracksDesc", url: "https://coveryourtracks.eff.org/" },
    { titleKey: "effExplainerTitle", descKey: "effExplainerDesc", url: "https://www.eff.org/pages/cover-your-tracks" },
  ],
  4: [
    { titleKey: "googleAdSettingsTitle", descKey: "googleAdSettingsDesc", url: "https://support.google.com/My-Ad-Center-Help/answer/12155656?hl=en" },
  ],
  5: [
    { titleKey: "hibpTitle", descKey: "hibpDesc", url: "https://haveibeenpwned.com/" },
  ],
};

export default function ReportCard() {
  const { data, resetWizard, skippedSteps } = useWizard();
  const { t, format, formatDateLocale, formatNum } = useI18n();
  const reportRef = useRef<HTMLDivElement>(null);
  const results = data.results;

  const isStepSkipped = (step: number) => skippedSteps.includes(step);

  const publicSkipped = isStepSkipped(1);
  const trackersSkipped = isStepSkipped(2);
  const fingerprintSkipped = isStepSkipped(3);
  const accountSkipped = isStepSkipped(4);
  const cleanupSkipped = isStepSkipped(5);

  const getPublicExposureLevel = (): ScoreLevel => {
    if (publicSkipped) return "unknown";
    const pages = results.publicExposure.searchResultPagesWithPersonalInfo;
    if (pages === 0 && results.publicExposure.peopleSearchSitesFound === "no") return "good";
    if (pages <= 2) return "warning";
    return "critical";
  };

  const getTrackerLevel = (): ScoreLevel => {
    if (trackersSkipped) return "unknown";
    const count = results.trackers.trackerCount;
    if (count === null || count === undefined) return "unknown";
    if (count <= 10) return "good";
    if (count <= 30) return "warning";
    return "critical";
  };

  const getFingerprintLevel = (): ScoreLevel => {
    if (fingerprintSkipped) return "unknown";
    if (results.fingerprinting.browserUnique === "no") return "good";
    if (results.fingerprinting.browserUnique === "yes") return "critical";
    return "unknown";
  };

  const getAdSettingsLevel = (): ScoreLevel => {
    if (accountSkipped) return "unknown";

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

  const getCleanupLevel = (): ScoreLevel => {
    if (cleanupSkipped) return "unknown";
    const cookiesCleared = results.cleanup.cookiesCleared === "yes";
    const cookiesBlocked =
      results.cleanup.thirdPartyCookiesBlockedOrLimited === "yes" ||
      results.cleanup.thirdPartyCookiesBlockedOrLimited === "already_blocked";
    if (cookiesCleared && cookiesBlocked) return "good";
    if (cookiesCleared || cookiesBlocked) return "warning";
    return "critical";
  };

  const getExposureValue = () => {
    if (publicSkipped) return t.metrics.valueSkipped;
    const pages = results.publicExposure.searchResultPagesWithPersonalInfo;
    if (pages === 0) return t.metrics.valueLow;
    return formatPageCount(pages);
  };

  const getTrackerValue = () => {
    if (trackersSkipped) return t.metrics.valueSkipped;
    const count = results.trackers.trackerCount;
    if (count === null || count === undefined) return t.metrics.valueNotAnswered;
    return formatNum(count);
  };

  const getFingerprintValue = () => {
    if (fingerprintSkipped) return t.metrics.valueSkipped;
    if (results.fingerprinting.browserUnique === "yes") return t.metrics.valueUnique;
    if (results.fingerprinting.browserUnique === "no") return t.metrics.valueNotUnique;
    return t.metrics.valueUnknown;
  };

  const getAdSettingsValue = () => {
    if (accountSkipped) return t.metrics.valueSkipped;

    const values = [
      results.accountDevice.googlePersonalizedAds,
      results.accountDevice.applePersonalizedAds,
      results.accountDevice.androidAdvertisingIdAction,
      results.accountDevice.iosATTSetting,
    ];

    const hasActive =
      results.accountDevice.googlePersonalizedAds === "on" ||
      results.accountDevice.applePersonalizedAds === "on" ||
      results.accountDevice.androidAdvertisingIdAction === "none" ||
      results.accountDevice.iosATTSetting === "allow_apps_to_request";

    const hasLimited =
      results.accountDevice.googlePersonalizedAds === "off" ||
      results.accountDevice.googlePersonalizedAds === "not_used" ||
      results.accountDevice.applePersonalizedAds === "off" ||
      results.accountDevice.androidAdvertisingIdAction === "deleted" ||
      results.accountDevice.androidAdvertisingIdAction === "reset" ||
      results.accountDevice.iosATTSetting === "blocked";

    const allUnknownOrNA = values.every(
      (value) => value === "unsure" || value === "not_applicable"
    );

    if (allUnknownOrNA) return t.metrics.valueNotAnswered;
    if (hasActive) return t.metrics.valueActive;
    if (hasLimited) return t.metrics.valueLimited;
    return t.metrics.valueCheckSettings;
  };

  const getCleanupValue = () => {
    if (cleanupSkipped) return t.metrics.valueSkipped;
    const cookiesCleared = results.cleanup.cookiesCleared === "yes";
    const cookiesBlocked =
      results.cleanup.thirdPartyCookiesBlockedOrLimited === "yes" ||
      results.cleanup.thirdPartyCookiesBlockedOrLimited === "already_blocked";
    if (cookiesCleared && cookiesBlocked) return t.metrics.valueDone;
    if (cookiesCleared || cookiesBlocked) return t.metrics.valuePartial;
    return t.metrics.valueNotYet;
  };

  const getExposureExplanation = () => {
    if (publicSkipped) return t.metrics.skippedExplanation;
    const level = getPublicExposureLevel();
    if (level === "good") return t.metrics.exposureGood;
    if (level === "warning") return t.metrics.exposureWarning;
    return t.metrics.exposureCritical;
  };

  const getTrackerExplanation = () => {
    if (trackersSkipped) return t.metrics.skippedExplanation;
    const level = getTrackerLevel();
    if (level === "good") return t.metrics.trackingGood;
    if (level === "warning") return t.metrics.trackingWarning;
    if (level === "critical") return t.metrics.trackingCritical;
    return t.metrics.trackingUnknown;
  };

  const getFingerprintExplanation = () => {
    if (fingerprintSkipped) return t.metrics.skippedExplanation;
    const level = getFingerprintLevel();
    if (level === "good") return t.metrics.fingerprintGood;
    if (level === "critical") return t.metrics.fingerprintCritical;
    return t.metrics.fingerprintUnknown;
  };

  const getAdSettingsExplanation = () => {
    if (accountSkipped) return t.metrics.skippedExplanation;
    const level = getAdSettingsLevel();
    if (level === "good") return t.metrics.adsGood;
    if (level === "warning") return t.metrics.adsWarning;
    if (level === "unknown") return t.metrics.adsUnknown;
    return t.metrics.adsCritical;
  };

  const getCleanupExplanation = () => {
    if (cleanupSkipped) return t.metrics.skippedExplanation;
    const level = getCleanupLevel();
    if (level === "good") return t.metrics.cleanupGood;
    if (level === "warning") return t.metrics.cleanupWarning;
    if (level === "unknown") return t.metrics.cleanupUnknown;
    return t.metrics.cleanupCritical;
  };

  const metrics: MetricTile[] = [
    {
      icon: Shield,
      label: t.metrics.publicExposureLabel,
      value: getExposureValue(),
      level: getPublicExposureLevel(),
      explanation: getExposureExplanation(),
    },
    {
      icon: Eye,
      label: t.metrics.trackingIntensityLabel,
      value: getTrackerValue(),
      level: getTrackerLevel(),
      explanation: getTrackerExplanation(),
    },
    {
      icon: Fingerprint,
      label: t.metrics.fingerprintLabel,
      value: getFingerprintValue(),
      level: getFingerprintLevel(),
      explanation: getFingerprintExplanation(),
    },
    {
      icon: Settings,
      label: t.metrics.adSettingsLabel,
      value: getAdSettingsValue(),
      level: getAdSettingsLevel(),
      explanation: getAdSettingsExplanation(),
    },
    {
      icon: Trash2,
      label: t.metrics.cleanupLabel,
      value: getCleanupValue(),
      level: getCleanupLevel(),
      explanation: getCleanupExplanation(),
    },
  ];

  const getLocalizedStepName = (step: number): string => {
    const stepKey = STEP_INFO[step]?.key as keyof typeof t.steps | undefined;
    if (stepKey && t.steps[stepKey]) {
      return t.steps[stepKey];
    }
    return STEP_INFO[step]?.name ?? `Step ${step}`;
  };

  const getSkippedStepInfo = () => {
    return skippedSteps
      .filter((step) => step >= 1 && step <= 5)
      .map((step) => {
        const defs = STEP_LINK_DEFS[step] ?? [];
        const links = defs.map((def) => ({
          name: t.externalTools[def.titleKey],
          url: def.url,
          description: t.externalTools[def.descKey],
        }));
        return {
          step,
          name: getLocalizedStepName(step),
          links,
        };
      });
  };

  const getNextActions = () => {
    const actions: string[] = [];

    const skippedInfo = getSkippedStepInfo();
    skippedInfo.forEach(({ name }) => {
      actions.push(format(t.nextActions.skippedStep, { stepName: name }));
    });

    if (getPublicExposureLevel() !== "good" && !skippedSteps.includes(1)) {
      actions.push(t.nextActions.requestGoogleRemoval);
    }

    if (results.publicExposure.peopleSearchSitesFound === "yes" && !skippedSteps.includes(1)) {
      actions.push(t.nextActions.optOutPeopleSearch);
    }

    if ((getTrackerLevel() === "critical" || getTrackerLevel() === "warning") && !skippedSteps.includes(2)) {
      actions.push(t.nextActions.installContentBlocker);
    }

    if (getFingerprintLevel() === "critical" && !skippedSteps.includes(3)) {
      actions.push(t.nextActions.fingerprintingRisk);
    }

    if (results.accountDevice.googlePersonalizedAds === "on" && !skippedSteps.includes(4)) {
      actions.push(t.nextActions.turnOffGoogleAds);
    }

    if (results.cleanup.cookiesCleared === "no" && !skippedSteps.includes(5)) {
      actions.push(t.nextActions.clearCookies);
    }

    if (results.cleanup.thirdPartyCookiesBlockedOrLimited === "no" && !skippedSteps.includes(5)) {
      actions.push(t.nextActions.enableCookieBlocking);
    }

    if (
      (results.cleanup.passwordHygieneActionTaken === "later" ||
        results.cleanup.passwordHygieneActionTaken === "no") &&
      !skippedSteps.includes(5)
    ) {
      actions.push(t.nextActions.checkHibp);
    }

    if (actions.length === 0) {
      actions.push(t.nextActions.allDone);
    }

    return actions.slice(0, 7);
  };

  const levelToScore = (level: ScoreLevel): number => {
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

  const scoreFor = (level: ScoreLevel, skipped: boolean) => (skipped ? 0 : levelToScore(level));

  const chartData = [
    {
      category: t.chartCategories.publicExposure,
      score: scoreFor(getPublicExposureLevel(), publicSkipped),
      fullMark: 100,
    },
    {
      category: t.chartCategories.trackers,
      score: scoreFor(getTrackerLevel(), trackersSkipped),
      fullMark: 100,
    },
    {
      category: t.chartCategories.fingerprint,
      score: scoreFor(getFingerprintLevel(), fingerprintSkipped),
      fullMark: 100,
    },
    {
      category: t.chartCategories.adSettings,
      score: scoreFor(getAdSettingsLevel(), accountSkipped),
      fullMark: 100,
    },
    {
      category: t.chartCategories.cleanup,
      score: scoreFor(getCleanupLevel(), cleanupSkipped),
      fullMark: 100,
    },
  ];

  const barChartData = [
    {
      name: t.chartCategories.publicExposure,
      score: scoreFor(getPublicExposureLevel(), publicSkipped),
      level: getPublicExposureLevel(),
      skipped: publicSkipped,
    },
    {
      name: t.chartCategories.trackers,
      score: scoreFor(getTrackerLevel(), trackersSkipped),
      level: getTrackerLevel(),
      skipped: trackersSkipped,
    },
    {
      name: t.chartCategories.fingerprint,
      score: scoreFor(getFingerprintLevel(), fingerprintSkipped),
      level: getFingerprintLevel(),
      skipped: fingerprintSkipped,
    },
    {
      name: t.chartCategories.adSettings,
      score: scoreFor(getAdSettingsLevel(), accountSkipped),
      level: getAdSettingsLevel(),
      skipped: accountSkipped,
    },
    {
      name: t.chartCategories.cleanup,
      score: scoreFor(getCleanupLevel(), cleanupSkipped),
      level: getCleanupLevel(),
      skipped: cleanupSkipped,
    },
  ];

  const getBarColor = (level: ScoreLevel) => {
    switch (level) {
      case "good":
        return "hsl(142, 71%, 45%)";
      case "warning":
        return "hsl(38, 92%, 50%)";
      case "critical":
        return "hsl(0, 84%, 60%)";
      default:
        return "hsl(215, 14%, 65%)";
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `footprint-audit-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getLevelIcon = (level: ScoreLevel) => {
    switch (level) {
      case "good":
        return <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case "critical":
        return <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
      default:
        return <HelpCircle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getLevelBg = (level: ScoreLevel) => {
    switch (level) {
      case "good":
        return "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800";
      case "warning":
        return "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800";
      case "critical":
        return "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800";
      default:
        return "bg-muted border-border";
    }
  };

  const formatMappedValue = (value: string | number | null | undefined, map: Record<string, string>) => {
    if (value === null || value === undefined) return t.metrics.valueNotAnswered;
    const key = String(value);
    return map[key] ?? key;
  };

  const displayValue = (skipped: boolean, value: string) => (skipped ? t.common.skipped : value);

  const formatPageCount = (count: number) =>
    count >= 5 ? `${count}+` : format(t.metrics.valuePages, { count });

  const yesNoMap = {
    yes: t.common.yes,
    no: t.common.no,
  };

  const yesNoUnsureMap = {
    yes: t.common.yes,
    no: t.common.no,
    unsure: t.common.unsure,
  };

  const googleRemovalMap = {
    yes: t.common.yes,
    no: t.common.no,
    not_applicable: t.adSettings.notApplicable,
  };

  const siteCategoryMap = {
    news: t.siteCategories.news,
    shopping: t.siteCategories.shopping,
    social: t.siteCategories.social,
    health: t.siteCategories.health,
    other: t.siteCategories.other,
    unknown: t.common.unsure,
  };

  const trackingProtectionMap = {
    strong: t.trackingProtection.strong,
    partial: t.trackingProtection.partial,
    weak: t.trackingProtection.weak,
    unsure: t.common.unsure,
  };

  const adSettingMap = {
    on: t.adSettings.on,
    off: t.adSettings.off,
    unsure: t.common.unsure,
    not_used: t.adSettings.notUsed,
    not_applicable: t.adSettings.notApplicable,
  };

  const androidActionMap = {
    reset: t.androidActions.reset,
    deleted: t.androidActions.deleted,
    none: t.androidActions.none,
    not_applicable: t.adSettings.notApplicable,
    unsure: t.common.unsure,
  };

  const iosAttMap = {
    allow_apps_to_request: t.iosAtt.allowApps,
    blocked: t.iosAtt.blocked,
    not_applicable: t.adSettings.notApplicable,
    unsure: t.common.unsure,
  };

  const cookieBlockingMap = {
    yes: t.common.yes,
    no: t.common.no,
    unsure: t.common.unsure,
    already_blocked: t.cleanupActions.alreadyBlocked,
  };

  const passwordHygieneMap = {
    yes: t.common.yes,
    no: t.common.no,
    later: t.cleanupActions.later,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div ref={reportRef} className="space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="mb-2">
            <Sparkles className="w-3 h-3 mr-1" />
            {t.report.auditComplete}
          </Badge>
          <h1 className="text-4xl font-bold font-serif text-foreground print:text-2xl">{t.report.title}</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.report.subtitle}
          </p>
          <p className="text-xs text-muted-foreground hidden print:block">
            {t.printInfo.generated}: {formatDateLocale(new Date())} | {t.printInfo.dataStoredLocally}
          </p>
        </div>

        <div className="rounded-md bg-muted/50 p-4 text-sm text-muted-foreground space-y-2 print:bg-transparent print:border print:border-border" data-testid="report-disclaimer">
          <p className="font-medium text-foreground">{t.report.realityCheck}</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>{t.realityCheckItems.snapshot}</li>
            <li>{t.realityCheckItems.variesByLocation}</li>
            <li>{t.realityCheckItems.personalization}</li>
            <li>{t.realityCheckItems.changesOverTime}</li>
          </ul>
          <p className="text-xs mt-2 pt-2 border-t border-border/50">
            {t.realityCheckItems.dataOnDevice}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <Card
              key={metric.label}
              className={cn("border", getLevelBg(metric.level))}
              data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{getLevelIcon(metric.level)}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{metric.value}</p>
                    <p className="text-sm text-muted-foreground mt-2">{metric.explanation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card data-testid="chart-privacy-score">
          <CardHeader>
            <CardTitle className="text-xl font-serif">{t.report.privacyScoreOverview}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <p className="text-sm text-muted-foreground mb-2 text-center">{t.charts.radarView}</p>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis
                      dataKey="category"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                    />
                    <Radar
                      name={t.charts.privacyScore}
                      dataKey="score"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.4}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="h-64">
                <p className="text-sm text-muted-foreground mb-2 text-center">{t.charts.scoreComparison}</p>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData} layout="vertical">
                    <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10 }} />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                      width={70}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px",
                      }}
                      labelStyle={{ color: "hsl(var(--foreground))" }}
                    />
                    <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                      {barChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getBarColor(entry.level)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-muted-foreground">{t.charts.legendGood}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-muted-foreground">{t.charts.legendWarning}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-muted-foreground">{t.charts.legendCritical}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-serif">{t.report.whatThisMeans}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="public">
                <AccordionTrigger>{t.report.publicExposureDetails}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>
                    {t.publicExposure.searchPagesQuestion}:{" "}
                    <strong>
                      {displayValue(
                        publicSkipped,
                        formatPageCount(results.publicExposure.searchResultPagesWithPersonalInfo)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.publicExposure.peopleSearchQuestion}:{" "}
                    <strong>
                      {displayValue(
                        publicSkipped,
                        formatMappedValue(results.publicExposure.peopleSearchSitesFound, yesNoUnsureMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.publicExposure.googleVisitedQuestion}:{" "}
                    <strong>
                      {displayValue(
                        publicSkipped,
                        formatMappedValue(results.publicExposure.googleResultsAboutYouVisited, yesNoMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.publicExposure.removalRequestedQuestion}:{" "}
                    <strong>
                      {displayValue(
                        publicSkipped,
                        formatMappedValue(results.publicExposure.googleRemovalRequested, googleRemovalMap)
                      )}
                    </strong>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="trackers">
                <AccordionTrigger>{t.report.trackerAnalysis}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>
                    {t.trackers.blacklightRunQuestion}:{" "}
                    <strong>
                      {displayValue(
                        trackersSkipped,
                        formatMappedValue(results.trackers.blacklightRun, yesNoMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.trackers.siteCategoryQuestion}:{" "}
                    <strong>
                      {displayValue(
                        trackersSkipped,
                        formatMappedValue(results.trackers.siteCategoryScanned, siteCategoryMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.trackers.trackerCountQuestion}:{" "}
                    <strong>
                      {displayValue(
                        trackersSkipped,
                        results.trackers.trackerCount === null || results.trackers.trackerCount === undefined
                          ? t.metrics.valueNotAnswered
                          : formatNum(results.trackers.trackerCount)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.trackers.sessionRecordingQuestion}:{" "}
                    <strong>
                      {displayValue(
                        trackersSkipped,
                        formatMappedValue(results.trackers.sessionRecordingFlagged, yesNoUnsureMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.trackers.keyLoggingQuestion}:{" "}
                    <strong>
                      {displayValue(
                        trackersSkipped,
                        formatMappedValue(results.trackers.keyLoggingFlagged, yesNoUnsureMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.trackers.fingerprintingQuestion}:{" "}
                    <strong>
                      {displayValue(
                        trackersSkipped,
                        formatMappedValue(results.trackers.fingerprintingFlagged, yesNoUnsureMap)
                      )}
                    </strong>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fingerprint">
                <AccordionTrigger>{t.report.fingerprintDetails}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>
                    {t.fingerprinting.effRunQuestion}:{" "}
                    <strong>
                      {displayValue(
                        fingerprintSkipped,
                        formatMappedValue(results.fingerprinting.effTestRun, yesNoMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.fingerprinting.browserUniqueQuestion}:{" "}
                    <strong>
                      {displayValue(
                        fingerprintSkipped,
                        formatMappedValue(results.fingerprinting.browserUnique, yesNoUnsureMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.fingerprinting.trackingProtectionQuestion}:{" "}
                    <strong>
                      {displayValue(
                        fingerprintSkipped,
                        formatMappedValue(results.fingerprinting.trackingProtection, trackingProtectionMap)
                      )}
                    </strong>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="account">
                <AccordionTrigger>{t.report.accountSettings}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>
                    {t.accountDevice.googleAdsQuestion}:{" "}
                    <strong>
                      {displayValue(
                        accountSkipped,
                        formatMappedValue(results.accountDevice.googlePersonalizedAds, adSettingMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.accountDevice.appleAdsQuestion}:{" "}
                    <strong>
                      {displayValue(
                        accountSkipped,
                        formatMappedValue(results.accountDevice.applePersonalizedAds, adSettingMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.accountDevice.androidIdQuestion}:{" "}
                    <strong>
                      {displayValue(
                        accountSkipped,
                        formatMappedValue(results.accountDevice.androidAdvertisingIdAction, androidActionMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.accountDevice.iosAttQuestion}:{" "}
                    <strong>
                      {displayValue(
                        accountSkipped,
                        formatMappedValue(results.accountDevice.iosATTSetting, iosAttMap)
                      )}
                    </strong>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cleanup">
                <AccordionTrigger>{t.report.cleanupActions}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>
                    {t.cleanup.cookiesClearedQuestion}:{" "}
                    <strong>
                      {displayValue(
                        cleanupSkipped,
                        formatMappedValue(results.cleanup.cookiesCleared, yesNoMap)
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.cleanup.cookiesBlockedQuestion}:{" "}
                    <strong>
                      {displayValue(
                        cleanupSkipped,
                        formatMappedValue(
                          results.cleanup.thirdPartyCookiesBlockedOrLimited,
                          cookieBlockingMap
                        )
                      )}
                    </strong>
                  </p>
                  <p>
                    {t.cleanup.passwordHygieneQuestion}:{" "}
                    <strong>
                      {displayValue(
                        cleanupSkipped,
                        formatMappedValue(results.cleanup.passwordHygieneActionTaken, passwordHygieneMap)
                      )}
                    </strong>
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {skippedSteps.length > 0 && (
          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20" data-testid="card-skipped-items">
            <CardHeader>
              <CardTitle className="text-xl font-serif flex items-center gap-2">
                <SkipForward className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                {t.skippedSections.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {t.skippedSections.description}
              </p>
              <div className="space-y-4">
                {getSkippedStepInfo().map(({ step, name, links }) => (
                  <div key={step} className="border-b border-amber-200/50 dark:border-amber-800/50 pb-3 last:border-0 last:pb-0">
                    <p className="font-medium text-foreground mb-2">{name}</p>
                    {links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                            data-testid={`link-skipped-${step}-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            <ExternalLink className="w-3 h-3" />
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-serif">{t.report.nextActions}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {getNextActions().map((action, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Checkbox id={`action-${index}`} className="mt-1" />
                  <label
                    htmlFor={`action-${index}`}
                    className="text-sm text-foreground cursor-pointer leading-relaxed"
                  >
                    {index + 1}. {action}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Separator />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" onClick={handlePrint} data-testid="button-print">
            <Printer className="w-4 h-4 mr-2" />
            {t.common.print}
          </Button>
          <Button variant="outline" onClick={handleDownload} data-testid="button-download-json">
            <Download className="w-4 h-4 mr-2" />
            {t.common.download}
          </Button>
        </div>

        <div className="text-center">
          <Button
            variant="ghost"
            onClick={resetWizard}
            className="text-muted-foreground"
            data-testid="button-start-over"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            {t.common.startOver}
          </Button>
        </div>
      </div>
    </div>
  );
}
