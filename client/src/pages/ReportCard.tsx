import { useRef } from "react";
import { useWizard } from "@/context/WizardContext";
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

const STEP_LINKS: Record<number, { name: string; url: string; description: string }[]> = {
  1: [
    { name: "Google Results About You", url: "https://myactivity.google.com/results-about-you", description: "Review what Google found about you" },
    { name: "Request Removal", url: "https://support.google.com/websearch/answer/9673730", description: "Remove personal info from Google search" },
  ],
  2: [
    { name: "Blacklight", url: "https://themarkup.org/blacklight", description: "Scan websites for trackers" },
  ],
  3: [
    { name: "EFF Cover Your Tracks", url: "https://coveryourtracks.eff.org/", description: "Test your browser fingerprint" },
  ],
  4: [
    { name: "Google Ad Settings", url: "https://myadcenter.google.com/", description: "Control Google ad personalization" },
  ],
  5: [
    { name: "Have I Been Pwned", url: "https://haveibeenpwned.com/", description: "Check if your email was in data breaches" },
  ],
};

export default function ReportCard() {
  const { data, resetWizard, skippedSteps } = useWizard();
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

  const metrics: MetricTile[] = [
    {
      icon: Shield,
      label: "Public Exposure",
      value:
        results.publicExposure.searchResultPagesWithPersonalInfo === 0
          ? "Low"
          : `${results.publicExposure.searchResultPagesWithPersonalInfo} pages`,
      level: getPublicExposureLevel(),
      explanation:
        getPublicExposureLevel() === "good"
          ? "Great! Your personal info wasn't easily found in search results."
          : getPublicExposureLevel() === "warning"
            ? "Some personal info is visible. Consider requesting removal from search engines."
            : "Your personal info is exposed. Take action to remove it from data brokers and search results.",
    },
    {
      icon: Eye,
      label: "Trackers Found",
      value: results.trackers.trackerCount ?? "N/A",
      level: getTrackerLevel(),
      explanation:
        getTrackerLevel() === "good"
          ? "The site you scanned has few trackers. This is better than average."
          : getTrackerLevel() === "warning"
            ? "Moderate tracking detected. Consider using a content blocker."
            : getTrackerLevel() === "critical"
              ? "High tracker count. This site is heavily monetizing your attention."
              : "Run the Blacklight scan to see tracker counts.",
    },
    {
      icon: Fingerprint,
      label: "Browser Uniqueness",
      value:
        results.fingerprinting.browserUnique === "yes"
          ? "Unique"
          : results.fingerprinting.browserUnique === "no"
            ? "Not Unique"
            : "Unknown",
      level: getFingerprintLevel(),
      explanation:
        getFingerprintLevel() === "good"
          ? "Your browser blends in with others, making fingerprinting harder."
          : getFingerprintLevel() === "critical"
            ? "Your browser is uniquely identifiable. Consider using Firefox with enhanced tracking protection."
            : "Run the EFF test to check your browser's fingerprint.",
    },
    {
      icon: Settings,
      label: "Ad Personalization",
      value:
        results.accountDevice.googlePersonalizedAds === "off"
          ? "Limited"
          : results.accountDevice.googlePersonalizedAds === "on"
            ? "Active"
            : "Check Settings",
      level: getAdSettingsLevel(),
      explanation:
        getAdSettingsLevel() === "good"
          ? "You've disabled ad personalization on your accounts."
          : getAdSettingsLevel() === "warning"
            ? "Some ad personalization is still active. Consider disabling in your account settings."
            : "Ad personalization is active. Your activity is being used to target ads.",
    },
  ];

  const getSkippedStepInfo = () => {
    return skippedSteps
      .filter((step) => step >= 1 && step <= 5)
      .map((step) => ({
        step,
        name: STEP_INFO[step]?.name ?? `Step ${step}`,
        links: STEP_LINKS[step] ?? [],
      }));
  };

  const getNextActions = () => {
    const actions: string[] = [];

    const skippedInfo = getSkippedStepInfo();
    skippedInfo.forEach(({ name }) => {
      actions.push(`You skipped "${name}". Complete this section when you have time.`);
    });

    if (getPublicExposureLevel() !== "good" && !skippedSteps.includes(1)) {
      actions.push(
        "Request removal of your personal info from Google search results using the 'Results about you' tool."
      );
    }

    if (results.publicExposure.peopleSearchSitesFound === "yes") {
      actions.push(
        "Opt out from people-search sites. Visit the FTC guide at consumer.ftc.gov/articles/what-know-about-people-search-sites"
      );
    }

    if ((getTrackerLevel() === "critical" || getTrackerLevel() === "warning") && !skippedSteps.includes(2)) {
      actions.push(
        "Install a reputable content blocker like uBlock Origin to reduce tracker exposure."
      );
    }

    if (getFingerprintLevel() === "critical" && !skippedSteps.includes(3)) {
      actions.push(
        "Try Firefox with Enhanced Tracking Protection set to 'Strict' to reduce fingerprinting."
      );
    }

    if (results.accountDevice.googlePersonalizedAds === "on" && !skippedSteps.includes(4)) {
      actions.push("Turn off personalized ads in your Google Ad Center settings.");
    }

    if (results.cleanup.cookiesCleared === "no" && !skippedSteps.includes(5)) {
      actions.push("Clear your browser cookies and site data to remove existing trackers.");
    }

    if (results.cleanup.thirdPartyCookiesBlockedOrLimited === "no" && !skippedSteps.includes(5)) {
      actions.push("Enable blocking of third-party cookies in your browser settings.");
    }

    if (results.cleanup.passwordHygieneActionTaken === "later") {
      actions.push(
        "Check Have I Been Pwned (haveibeenpwned.com) to see if your email was in data breaches."
      );
    }

    if (actions.length === 0) {
      actions.push(
        "Great job! Consider running this audit again in a few months to stay on top of your digital footprint."
      );
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
      category: "Public Exposure",
      score: levelToScore(getPublicExposureLevel()),
      fullMark: 100,
    },
    {
      category: "Trackers",
      score: levelToScore(getTrackerLevel()),
      fullMark: 100,
    },
    {
      category: "Fingerprinting",
      score: levelToScore(getFingerprintLevel()),
      fullMark: 100,
    },
    {
      category: "Ad Settings",
      score: levelToScore(getAdSettingsLevel()),
      fullMark: 100,
    },
  ];

  const barChartData = [
    {
      name: "Public",
      score: levelToScore(getPublicExposureLevel()),
      level: getPublicExposureLevel(),
    },
    {
      name: "Trackers",
      score: levelToScore(getTrackerLevel()),
      level: getTrackerLevel(),
    },
    {
      name: "Fingerprint",
      score: levelToScore(getFingerprintLevel()),
      level: getFingerprintLevel(),
    },
    {
      name: "Ads",
      score: levelToScore(getAdSettingsLevel()),
      level: getAdSettingsLevel(),
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
            Audit Complete
          </Badge>
          <h1 className="text-4xl font-bold font-serif text-foreground print:text-2xl">Your Footprint Report</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Here's a summary of what you discovered about your digital footprint and recommended
            next steps.
          </p>
          <p className="text-xs text-muted-foreground hidden print:block">
            Generated: {new Date().toLocaleDateString()} | All data stored locally only
          </p>
        </div>

        <div className="rounded-md bg-muted/50 p-4 text-sm text-muted-foreground space-y-2 print:bg-transparent print:border print:border-border" data-testid="report-disclaimer">
          <p className="font-medium text-foreground">Reality Check</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>This is a snapshot, not a complete census of your digital footprint.</li>
            <li>Results vary by country, language, and network you're connected to.</li>
            <li>Search personalization means others may see different results for you.</li>
            <li>Your footprint changes over time as new data is collected and shared.</li>
          </ul>
          <p className="text-xs mt-2 pt-2 border-t border-border/50">
            All data remains on your device. This wizard never collects, stores, or transmits personal information.
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
            <CardTitle className="text-xl font-serif">Privacy Score Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <p className="text-sm text-muted-foreground mb-2 text-center">Radar View</p>
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
                      name="Privacy Score"
                      dataKey="score"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.4}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="h-64">
                <p className="text-sm text-muted-foreground mb-2 text-center">Score Comparison</p>
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
                <AccordionTrigger>Public Exposure Details</AccordionTrigger>
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
                <AccordionTrigger>Tracker Analysis</AccordionTrigger>
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
                <AccordionTrigger>Fingerprinting Results</AccordionTrigger>
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

              <AccordionItem value="cleanup">
                <AccordionTrigger>Cleanup Actions Taken</AccordionTrigger>
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
                Skipped Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                You skipped the following sections. Complete them later to get a more accurate picture of your digital footprint.
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
            <CardTitle className="text-xl font-serif">Your Next Actions</CardTitle>
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
            Print / Save PDF
          </Button>
          <Button onClick={handleDownload} data-testid="button-download">
            <Download className="w-4 h-4 mr-2" />
            Download Report
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
            Start New Audit
          </Button>
        </div>
      </div>
    </div>
  );
}
