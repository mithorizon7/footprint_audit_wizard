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

  const getPublicExposureLevel = (): ScoreLevel => {
    const pages = results.publicExposure.searchResultPagesWithPersonalInfo;
    if (pages === 0 && results.publicExposure.peopleSearchSitesFound === "no") return "good";
    if (pages <= 2) return "warning";
    return "critical";
  };

  const getTrackerLevel = (): ScoreLevel => {
    const count = results.trackers.trackerCount ?? 0;
    if (count === 0) return "unknown";
    if (count <= 10) return "good";
    if (count <= 30) return "warning";
    return "critical";
  };

  const getFingerprintLevel = (): ScoreLevel => {
    if (results.fingerprinting.browserUnique === "no") return "good";
    if (results.fingerprinting.browserUnique === "yes") return "critical";
    return "unknown";
  };

  const getAdSettingsLevel = (): ScoreLevel => {
    const googleOff = results.accountDevice.googlePersonalizedAds === "off";
    const appleOff =
      results.accountDevice.applePersonalizedAds === "off" ||
      results.accountDevice.applePersonalizedAds === "not_applicable";
    if (googleOff && appleOff) return "good";
    if (googleOff || appleOff) return "warning";
    return "critical";
  };

  const getCleanupLevel = (): ScoreLevel => {
    const cookiesCleared = results.cleanup.cookiesCleared === "yes";
    const cookiesBlocked = results.cleanup.thirdPartyCookiesBlockedOrLimited === "yes";
    if (cookiesCleared && cookiesBlocked) return "good";
    if (cookiesCleared || cookiesBlocked) return "warning";
    return "critical";
  };

  const getExposureValue = () => {
    const pages = results.publicExposure.searchResultPagesWithPersonalInfo;
    if (pages === 0) return t.metrics.valueLow;
    return format(t.metrics.valuePages, { count: pages });
  };

  const getTrackerValue = () => {
    const count = results.trackers.trackerCount;
    if (count === null || count === undefined) return t.metrics.valueNA;
    return formatNum(count);
  };

  const getFingerprintValue = () => {
    if (results.fingerprinting.browserUnique === "yes") return t.metrics.valueUnique;
    if (results.fingerprinting.browserUnique === "no") return t.metrics.valueNotUnique;
    return t.metrics.valueUnknown;
  };

  const getAdSettingsValue = () => {
    if (results.accountDevice.googlePersonalizedAds === "off") return t.metrics.valueLimited;
    if (results.accountDevice.googlePersonalizedAds === "on") return t.metrics.valueActive;
    return t.metrics.valueCheckSettings;
  };

  const getCleanupValue = () => {
    const cookiesCleared = results.cleanup.cookiesCleared === "yes";
    const cookiesBlocked = results.cleanup.thirdPartyCookiesBlockedOrLimited === "yes";
    if (cookiesCleared && cookiesBlocked) return t.metrics.valueDone;
    if (cookiesCleared || cookiesBlocked) return t.metrics.valuePartial;
    return t.metrics.valueNotYet;
  };

  const getExposureExplanation = () => {
    const level = getPublicExposureLevel();
    if (level === "good") return t.metrics.exposureGood;
    if (level === "warning") return t.metrics.exposureWarning;
    return t.metrics.exposureCritical;
  };

  const getTrackerExplanation = () => {
    const level = getTrackerLevel();
    if (level === "good") return t.metrics.trackingGood;
    if (level === "warning") return t.metrics.trackingWarning;
    if (level === "critical") return t.metrics.trackingCritical;
    return t.metrics.trackingUnknown;
  };

  const getFingerprintExplanation = () => {
    const level = getFingerprintLevel();
    if (level === "good") return t.metrics.fingerprintGood;
    if (level === "critical") return t.metrics.fingerprintCritical;
    return t.metrics.fingerprintUnknown;
  };

  const getAdSettingsExplanation = () => {
    const level = getAdSettingsLevel();
    if (level === "good") return t.metrics.adsGood;
    if (level === "warning") return t.metrics.adsWarning;
    return t.metrics.adsCritical;
  };

  const getCleanupExplanation = () => {
    const level = getCleanupLevel();
    if (level === "good") return t.metrics.cleanupGood;
    if (level === "warning") return t.metrics.cleanupWarning;
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

    if (results.publicExposure.peopleSearchSitesFound === "yes") {
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

    if (results.cleanup.passwordHygieneActionTaken === "later" || results.cleanup.passwordHygieneActionTaken === "no") {
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

  const chartData = [
    {
      category: t.chartCategories.publicExposure,
      score: levelToScore(getPublicExposureLevel()),
      fullMark: 100,
    },
    {
      category: t.chartCategories.trackers,
      score: levelToScore(getTrackerLevel()),
      fullMark: 100,
    },
    {
      category: t.chartCategories.fingerprint,
      score: levelToScore(getFingerprintLevel()),
      fullMark: 100,
    },
    {
      category: t.chartCategories.adSettings,
      score: levelToScore(getAdSettingsLevel()),
      fullMark: 100,
    },
    {
      category: t.chartCategories.cleanup,
      score: levelToScore(getCleanupLevel()),
      fullMark: 100,
    },
  ];

  const barChartData = [
    {
      name: t.chartCategories.publicExposure,
      score: levelToScore(getPublicExposureLevel()),
      level: getPublicExposureLevel(),
    },
    {
      name: t.chartCategories.trackers,
      score: levelToScore(getTrackerLevel()),
      level: getTrackerLevel(),
    },
    {
      name: t.chartCategories.fingerprint,
      score: levelToScore(getFingerprintLevel()),
      level: getFingerprintLevel(),
    },
    {
      name: t.chartCategories.adSettings,
      score: levelToScore(getAdSettingsLevel()),
      level: getAdSettingsLevel(),
    },
    {
      name: t.chartCategories.cleanup,
      score: levelToScore(getCleanupLevel()),
      level: getCleanupLevel(),
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
                <span className="text-muted-foreground">Good (100)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-muted-foreground">Warning (60)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-muted-foreground">Critical (25)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-serif">What This Means</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="public">
                <AccordionTrigger>{t.report.publicExposureDetails}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>
                    You found <strong>{results.publicExposure.searchResultPagesWithPersonalInfo}</strong>{" "}
                    page(s) with personal info.
                  </p>
                  <p>
                    People-search sites found:{" "}
                    <strong>{results.publicExposure.peopleSearchSitesFound}</strong>
                  </p>
                  <p>
                    Google Results About You visited:{" "}
                    <strong>{results.publicExposure.googleResultsAboutYouVisited}</strong>
                  </p>
                  <p>
                    Removal requested:{" "}
                    <strong>{results.publicExposure.googleRemovalRequested}</strong>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="trackers">
                <AccordionTrigger>{t.report.trackerAnalysis}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>
                    Blacklight scan run: <strong>{results.trackers.blacklightRun}</strong>
                  </p>
                  <p>
                    Site category: <strong>{results.trackers.siteCategoryScanned}</strong>
                  </p>
                  <p>
                    Trackers detected: <strong>{results.trackers.trackerCount ?? "N/A"}</strong>
                  </p>
                  <p>
                    Session recording: <strong>{results.trackers.sessionRecordingFlagged}</strong>
                  </p>
                  <p>
                    Key logging: <strong>{results.trackers.keyLoggingFlagged}</strong>
                  </p>
                  <p>
                    Fingerprinting: <strong>{results.trackers.fingerprintingFlagged}</strong>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fingerprint">
                <AccordionTrigger>{t.report.fingerprintDetails}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>
                    EFF test completed: <strong>{results.fingerprinting.effTestRun}</strong>
                  </p>
                  <p>
                    Browser unique: <strong>{results.fingerprinting.browserUnique}</strong>
                  </p>
                  <p>
                    Tracking protection:{" "}
                    <strong>{results.fingerprinting.trackingProtection}</strong>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="account">
                <AccordionTrigger>{t.report.accountSettings}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>
                    Google personalized ads:{" "}
                    <strong>{results.accountDevice.googlePersonalizedAds}</strong>
                  </p>
                  <p>
                    Apple personalized ads:{" "}
                    <strong>{results.accountDevice.applePersonalizedAds}</strong>
                  </p>
                  <p>
                    Android advertising ID action:{" "}
                    <strong>{results.accountDevice.androidAdvertisingIdAction}</strong>
                  </p>
                  <p>
                    iOS App Tracking Transparency:{" "}
                    <strong>{results.accountDevice.iosATTSetting}</strong>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cleanup">
                <AccordionTrigger>{t.report.cleanupActions}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>
                    Cookies cleared: <strong>{results.cleanup.cookiesCleared}</strong>
                  </p>
                  <p>
                    Third-party cookies blocked:{" "}
                    <strong>{results.cleanup.thirdPartyCookiesBlockedOrLimited}</strong>
                  </p>
                  <p>
                    Password hygiene action:{" "}
                    <strong>{results.cleanup.passwordHygieneActionTaken}</strong>
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
