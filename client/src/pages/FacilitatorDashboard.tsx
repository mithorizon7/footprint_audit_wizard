import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  CheckCircle2,
  Percent,
  Activity,
  Monitor,
  Smartphone,
  HelpCircle,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { Link } from "wouter";
import { useI18n } from "@/context/I18nContext";

interface AggregateMetrics {
  totalSessions: number;
  completedSessions: number;
  completionRate: number;
  avgPublicExposureScore: number | null;
  avgTrackerScore: number | null;
  avgFingerprintScore: number | null;
  avgAdSettingsScore: number | null;
  avgTrackerCount: number | null;
  deviceBreakdown: { deviceType: string; count: number }[];
  browserBreakdown: { browser: string; count: number }[];
  recentSessions: { date: string; count: number }[];
}

const CHART_COLORS = [
  "hsl(var(--primary))",
  "hsl(142, 71%, 45%)",
  "hsl(38, 92%, 50%)",
  "hsl(0, 84%, 60%)",
  "hsl(215, 14%, 65%)",
];

export default function FacilitatorDashboard() {
  const { t, formatNum } = useI18n();
  const { data: metrics, isLoading, error, refetch } = useQuery<AggregateMetrics>({
    queryKey: ["/api/facilitator/metrics"],
    refetchInterval: 30000,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
            <p className="text-muted-foreground">{t.facilitatorDashboard.loading}</p>
          </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center space-y-4">
            <p className="text-muted-foreground">{t.facilitatorDashboard.loadError}</p>
            <Button onClick={() => refetch()}>
              <RefreshCw className="w-4 h-4 mr-2" />
              {t.facilitatorDashboard.retry}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const scoreData = [
    { name: t.chartCategories.publicExposure, score: metrics?.avgPublicExposureScore ?? 0 },
    { name: t.chartCategories.trackers, score: metrics?.avgTrackerScore ?? 0 },
    { name: t.chartCategories.fingerprint, score: metrics?.avgFingerprintScore ?? 0 },
    { name: t.chartCategories.adSettings, score: metrics?.avgAdSettingsScore ?? 0 },
  ];

  const getDeviceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "desktop":
        return <Monitor className="w-4 h-4" />;
      case "mobile":
        return <Smartphone className="w-4 h-4" />;
      default:
        return <HelpCircle className="w-4 h-4" />;
    }
  };

  const getDeviceLabel = (type: string) => {
    switch (type.toLowerCase()) {
      case "desktop":
        return t.deviceNames.desktop;
      case "mobile":
        return t.deviceNames.mobile;
      case "unknown":
        return t.deviceNames.unknown;
      default:
        return t.common.unknown;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="icon" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold font-serif text-foreground">
                {t.facilitatorDashboard.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t.facilitatorDashboard.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              <Activity className="w-3 h-3 mr-1" />
              {t.facilitatorDashboard.liveUpdates}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              data-testid="button-refresh"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              {t.facilitatorDashboard.refresh}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card data-testid="stat-total-sessions">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.facilitatorDashboard.totalSessions}</p>
                  <p className="text-3xl font-bold text-foreground">
                    {formatNum(metrics?.totalSessions ?? 0)}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="stat-completed-sessions">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.facilitatorDashboard.completed}</p>
                  <p className="text-3xl font-bold text-foreground">
                    {formatNum(metrics?.completedSessions ?? 0)}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="stat-completion-rate">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.facilitatorDashboard.completionRate}</p>
                  <p className="text-3xl font-bold text-foreground">
                    {formatNum(metrics?.completionRate ?? 0)}%
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Percent className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="stat-avg-trackers">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.facilitatorDashboard.avgTrackersFound}</p>
                  <p className="text-3xl font-bold text-foreground">
                    {metrics?.avgTrackerCount === null || metrics?.avgTrackerCount === undefined
                      ? t.metrics.valueNA
                      : formatNum(metrics.avgTrackerCount)}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card data-testid="chart-avg-scores">
            <CardHeader>
              <CardTitle className="text-lg font-serif">{t.facilitatorDashboard.avgPrivacyScores}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={scoreData}>
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px",
                      }}
                    />
                    <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="chart-device-breakdown">
            <CardHeader>
              <CardTitle className="text-lg font-serif">{t.facilitatorDashboard.deviceBreakdown}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center">
                {metrics?.deviceBreakdown && metrics.deviceBreakdown.length > 0 ? (
                  <div className="flex items-center w-full">
                    <div className="w-1/2 h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={metrics.deviceBreakdown}
                            dataKey="count"
                            nameKey="deviceType"
                            cx="50%"
                            cy="50%"
                            outerRadius={60}
                            label
                          >
                            {metrics.deviceBreakdown.map((_, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={CHART_COLORS[index % CHART_COLORS.length]}
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-1/2 space-y-2">
                      {metrics.deviceBreakdown.map((item, index) => (
                        <div key={item.deviceType} className="flex items-center gap-2 text-sm">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }}
                          />
                          <span className="flex items-center gap-1">
                            {getDeviceIcon(item.deviceType)}
                            {getDeviceLabel(item.deviceType)}
                          </span>
                          <span className="text-muted-foreground ml-auto">{formatNum(item.count)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center w-full">
                    {t.facilitatorDashboard.noDeviceData}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card data-testid="chart-sessions-over-time">
          <CardHeader>
            <CardTitle className="text-lg font-serif">{t.facilitatorDashboard.sessionsOverTime}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              {metrics?.recentSessions && metrics.recentSessions.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[...metrics.recentSessions].reverse()}>
                    <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  {t.facilitatorDashboard.noSessionData}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>{t.facilitatorDashboard.privacyNotice}</p>
        </div>
      </div>
    </div>
  );
}
