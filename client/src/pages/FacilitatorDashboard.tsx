import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { StepKey } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Users,
  CheckCircle2,
  TimerReset,
  AlertTriangle,
  ShieldCheck,
  Activity,
  ArrowLeft,
  RefreshCw,
  Download,
  LogOut,
  Lock,
  Globe,
  ChartNoAxesColumn,
} from 'lucide-react';
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
  CartesianGrid,
} from 'recharts';
import { Link } from 'wouter';
import { useI18n } from '@/context/I18nContext';

interface FacilitatorAuthStatus {
  authRequired: boolean;
  configured: boolean;
  authenticated: boolean;
}

interface FacilitatorMetrics {
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

const CHART_COLORS = [
  'hsl(var(--primary))',
  'hsl(142, 71%, 45%)',
  'hsl(38, 92%, 50%)',
  'hsl(0, 84%, 60%)',
  'hsl(215, 14%, 65%)',
  'hsl(199, 89%, 48%)',
];

function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function pastIsoDate(daysBack: number): string {
  const value = new Date();
  value.setUTCDate(value.getUTCDate() - daysBack);
  return value.toISOString().slice(0, 10);
}

async function readJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { credentials: 'include' });
  if (!response.ok) {
    const text = (await response.text()) || response.statusText;
    throw new Error(`${response.status}: ${text}`);
  }

  return response.json() as Promise<T>;
}

function formatDuration(seconds: number | null, fallback: string): string {
  if (seconds === null || Number.isNaN(seconds)) {
    return fallback;
  }

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins <= 0) {
    return `${secs}s`;
  }

  return `${mins}m ${secs.toString().padStart(2, '0')}s`;
}

export default function FacilitatorDashboard() {
  const { t, formatNum } = useI18n();
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fromDate, setFromDate] = useState(() => pastIsoDate(13));
  const [toDate, setToDate] = useState(() => todayIsoDate());

  const {
    data: authStatus,
    isLoading: authLoading,
    refetch: refetchAuthStatus,
  } = useQuery<FacilitatorAuthStatus>({
    queryKey: ['facilitator-auth-status'],
    queryFn: () => readJson('/api/facilitator/status'),
    staleTime: 0,
  });

  const metricsEnabled = Boolean(
    authStatus && (!authStatus.authRequired || authStatus.authenticated),
  );
  const metricsQueryString = useMemo(() => {
    const params = new URLSearchParams();
    if (fromDate) params.set('from', fromDate);
    if (toDate) params.set('to', toDate);
    return params.toString();
  }, [fromDate, toDate]);

  const {
    data: metrics,
    isLoading: metricsLoading,
    error: metricsError,
    refetch: refetchMetrics,
  } = useQuery<FacilitatorMetrics>({
    queryKey: ['facilitator-metrics', fromDate, toDate],
    queryFn: () => readJson(`/api/facilitator/metrics?${metricsQueryString}`),
    enabled: metricsEnabled,
    refetchInterval: 30000,
    staleTime: 0,
  });

  const exportHref = useMemo(() => {
    return `/api/facilitator/export.csv?${metricsQueryString}`;
  }, [metricsQueryString]);

  const scoreData = useMemo(
    () => [
      {
        name: t.chartCategories.publicExposure,
        score: metrics?.summary.avgPublicExposureScore ?? 0,
      },
      { name: t.chartCategories.trackers, score: metrics?.summary.avgTrackerScore ?? 0 },
      { name: t.chartCategories.fingerprint, score: metrics?.summary.avgFingerprintScore ?? 0 },
      { name: t.chartCategories.adSettings, score: metrics?.summary.avgAdSettingsScore ?? 0 },
    ],
    [
      metrics?.summary.avgAdSettingsScore,
      metrics?.summary.avgFingerprintScore,
      metrics?.summary.avgPublicExposureScore,
      metrics?.summary.avgTrackerScore,
      t.chartCategories.adSettings,
      t.chartCategories.fingerprint,
      t.chartCategories.publicExposure,
      t.chartCategories.trackers,
    ],
  );

  const funnelData = useMemo(
    () =>
      (metrics?.funnel ?? []).map((entry) => ({
        name: t.facilitatorDashboard.funnelLabels[
          entry.key as keyof typeof t.facilitatorDashboard.funnelLabels
        ],
        count: entry.count,
      })),
    [metrics?.funnel, t],
  );

  const deviceData = metrics?.deviceBreakdown ?? [];
  const modeData = metrics?.modeBreakdown ?? [];
  const browserData = metrics?.browserBreakdown ?? [];
  const localeData = metrics?.localeBreakdown ?? [];
  const dailyData = metrics?.daily ?? [];

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setLoginError(null);

    try {
      await apiRequest('POST', '/api/facilitator/login', { password });
      setPassword('');
      await refetchAuthStatus();
      await refetchMetrics();
    } catch {
      setLoginError(t.facilitatorDashboard.invalidPassword);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/facilitator/logout', {});
      await refetchAuthStatus();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground">
        <div className="text-center space-y-4">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
          <p className="text-muted-foreground">{t.facilitatorDashboard.loading}</p>
        </div>
      </div>
    );
  }

  if (authStatus?.authRequired && !authStatus.configured) {
    return (
      <div className="min-h-screen text-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-10 space-y-6">
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
              <p className="text-sm text-muted-foreground">{t.facilitatorDashboard.subtitle}</p>
            </div>
          </div>

          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-amber-600" />
                <p className="font-medium text-foreground">
                  {t.facilitatorDashboard.authNotConfiguredTitle}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.facilitatorDashboard.authNotConfiguredBody}
              </p>
              <p className="text-xs text-muted-foreground">
                {t.facilitatorDashboard.authConfigVars}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (authStatus?.authRequired && !authStatus.authenticated) {
    return (
      <div className="min-h-screen text-foreground">
        <div className="max-w-md mx-auto px-4 sm:px-8 py-10 space-y-6">
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
                {t.facilitatorDashboard.loginSubtitle}
              </p>
            </div>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-primary" />
                <p className="font-medium text-foreground">{t.facilitatorDashboard.loginTitle}</p>
              </div>

              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <Label htmlFor="facilitator-password">
                    {t.facilitatorDashboard.passwordLabel}
                  </Label>
                  <Input
                    id="facilitator-password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    data-testid="input-facilitator-password"
                  />
                </div>
                {loginError && (
                  <p className="text-sm text-red-600 dark:text-red-400">{loginError}</p>
                )}
                <Button
                  type="submit"
                  disabled={!password || isSubmitting}
                  data-testid="button-facilitator-login"
                >
                  {isSubmitting
                    ? t.facilitatorDashboard.loggingIn
                    : t.facilitatorDashboard.loginButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (metricsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground">
        <div className="text-center space-y-4">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
          <p className="text-muted-foreground">{t.facilitatorDashboard.loading}</p>
        </div>
      </div>
    );
  }

  if (metricsError || !metrics) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center space-y-4">
            <p className="text-muted-foreground">{t.facilitatorDashboard.loadError}</p>
            <Button onClick={() => refetchMetrics()}>
              <RefreshCw className="w-4 h-4 mr-2" />
              {t.facilitatorDashboard.retry}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
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
              <p className="text-sm text-muted-foreground">{t.facilitatorDashboard.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="normal-case tracking-normal">
              <Activity className="w-3 h-3 mr-1" />
              {t.facilitatorDashboard.liveUpdates}
            </Badge>
            {authStatus?.authRequired && (
              <Button variant="outline" size="sm" onClick={handleLogout} disabled={isSubmitting}>
                <LogOut className="w-4 h-4 mr-2" />
                {t.facilitatorDashboard.logout}
              </Button>
            )}
          </div>
        </div>

        <Card>
          <CardContent className="p-5 grid grid-cols-1 md:grid-cols-[repeat(2,minmax(0,1fr))_auto_auto] gap-4 items-end">
            <div className="space-y-2">
              <Label htmlFor="facilitator-from-date">{t.facilitatorDashboard.fromDate}</Label>
              <Input
                id="facilitator-from-date"
                type="date"
                value={fromDate}
                onChange={(event) => setFromDate(event.target.value)}
                data-testid="input-filter-from"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="facilitator-to-date">{t.facilitatorDashboard.toDate}</Label>
              <Input
                id="facilitator-to-date"
                type="date"
                value={toDate}
                onChange={(event) => setToDate(event.target.value)}
                data-testid="input-filter-to"
              />
            </div>
            <Button variant="outline" onClick={() => refetchMetrics()} data-testid="button-refresh">
              <RefreshCw className="w-4 h-4 mr-2" />
              {t.facilitatorDashboard.refresh}
            </Button>
            <Button asChild data-testid="button-export-csv">
              <a href={exportHref}>
                <Download className="w-4 h-4 mr-2" />
                {t.facilitatorDashboard.exportCsv}
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-4">
          <Card data-testid="stat-total-visitors">
            <CardContent className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-xs text-muted-foreground">
                  {t.facilitatorDashboard.totalVisitors}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {formatNum(metrics.summary.totalVisitors)}
              </p>
            </CardContent>
          </Card>
          <Card data-testid="stat-audits-started">
            <CardContent className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-xs text-muted-foreground">
                  {t.facilitatorDashboard.auditsStarted}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {formatNum(metrics.summary.auditsStarted)}
              </p>
            </CardContent>
          </Card>
          <Card data-testid="stat-completed-sessions">
            <CardContent className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs text-muted-foreground">
                  {t.facilitatorDashboard.completed}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {formatNum(metrics.summary.completedSessions)}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatNum(metrics.summary.completionRate)}%
              </p>
            </CardContent>
          </Card>
          <Card data-testid="stat-median-time">
            <CardContent className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <TimerReset className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="text-xs text-muted-foreground">
                  {t.facilitatorDashboard.medianTimeToReport}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {formatDuration(metrics.summary.medianTimeToReportSec, t.metrics.valueNA)}
              </p>
            </CardContent>
          </Card>
          <Card data-testid="stat-weak-report-rate">
            <CardContent className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span className="text-xs text-muted-foreground">
                  {t.facilitatorDashboard.weakReportRate}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {formatNum(metrics.summary.weakReportRate)}%
              </p>
            </CardContent>
          </Card>
          <Card data-testid="stat-prompt-rate">
            <CardContent className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <ChartNoAxesColumn className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span className="text-xs text-muted-foreground">
                  {t.facilitatorDashboard.promptedSessionRate}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {formatNum(metrics.summary.promptedSessionRate)}%
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Card data-testid="chart-funnel">
            <CardHeader>
              <CardTitle className="text-lg font-serif">
                {t.facilitatorDashboard.funnelTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {funnelData.length ? (
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={funnelData}
                      margin={{ left: 0, right: 12, top: 12, bottom: 24 }}
                    >
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 11 }}
                        interval={0}
                        angle={-18}
                        textAnchor="end"
                        height={64}
                      />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '6px',
                        }}
                      />
                      <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {t.facilitatorDashboard.noSessionData}
                </p>
              )}
            </CardContent>
          </Card>

          <Card data-testid="chart-daily-trends">
            <CardHeader>
              <CardTitle className="text-lg font-serif">
                {t.facilitatorDashboard.dailyTrends}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dailyData.length ? (
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dailyData} margin={{ left: 0, right: 12, top: 12, bottom: 8 }}>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '6px',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="auditsStarted"
                        stroke={CHART_COLORS[0]}
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="reportsViewed"
                        stroke={CHART_COLORS[1]}
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="completedSessions"
                        stroke={CHART_COLORS[2]}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {t.facilitatorDashboard.noSessionData}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-6">
          <Card data-testid="chart-avg-scores">
            <CardHeader>
              <CardTitle className="text-lg font-serif">
                {t.facilitatorDashboard.avgPrivacyScores}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={scoreData}>
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
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
              <CardTitle className="text-lg font-serif">
                {t.facilitatorDashboard.deviceBreakdown}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {deviceData.length ? (
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={deviceData} dataKey="count" nameKey="key" outerRadius={92} label>
                        {deviceData.map((entry, index) => (
                          <Cell key={entry.key} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '6px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {t.facilitatorDashboard.noDeviceData}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card data-testid="step-breakdown">
          <CardHeader>
            <CardTitle className="text-lg font-serif">
              {t.facilitatorDashboard.stepBreakdown}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
              {metrics.stepBreakdown.map((entry) => (
                <div
                  key={entry.stepKey}
                  className="rounded-2xl border border-border/70 bg-background/60 p-4 space-y-3"
                >
                  <div>
                    <p className="font-medium text-foreground">{t.steps[entry.stepKey]}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.facilitatorDashboard.stepBreakdownHint}
                    </p>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between gap-3">
                      <span>{t.facilitatorDashboard.viewed}</span>
                      <span className="font-medium text-foreground">
                        {formatNum(entry.viewedSessions)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>{t.facilitatorDashboard.completed}</span>
                      <span className="font-medium text-foreground">
                        {formatNum(entry.completedSessions)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>{t.facilitatorDashboard.skipped}</span>
                      <span className="font-medium text-foreground">
                        {formatNum(entry.skippedSessions)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>{t.facilitatorDashboard.prompted}</span>
                      <span className="font-medium text-foreground">
                        {formatNum(entry.promptedSessions)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>{t.facilitatorDashboard.readyAdvanceRate}</span>
                      <span className="font-medium text-foreground">
                        {entry.readyAdvanceRate === null
                          ? t.metrics.valueNA
                          : `${formatNum(entry.readyAdvanceRate)}%`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>{t.facilitatorDashboard.checklistCompletion}</span>
                      <span className="font-medium text-foreground">
                        {entry.avgChecklistCompletionPct === null
                          ? t.metrics.valueNA
                          : `${formatNum(entry.avgChecklistCompletionPct)}%`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card data-testid="mode-breakdown">
            <CardHeader>
              <CardTitle className="text-lg font-serif">
                {t.facilitatorDashboard.modeBreakdown}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {modeData.length ? (
                modeData.map((entry) => (
                  <div key={entry.key} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-muted-foreground">
                      {entry.key === 'fictional'
                        ? t.welcome.fictionalPersona
                        : t.welcome.myFootprint}
                    </span>
                    <span className="font-medium text-foreground">{formatNum(entry.count)}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  {t.facilitatorDashboard.noSessionData}
                </p>
              )}
            </CardContent>
          </Card>

          <Card data-testid="locale-breakdown">
            <CardHeader>
              <CardTitle className="text-lg font-serif">
                {t.facilitatorDashboard.localeBreakdown}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {localeData.length ? (
                localeData.map((entry) => (
                  <div key={entry.key} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {entry.key.toUpperCase()}
                    </span>
                    <span className="font-medium text-foreground">{formatNum(entry.count)}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  {t.facilitatorDashboard.noSessionData}
                </p>
              )}
            </CardContent>
          </Card>

          <Card data-testid="browser-breakdown">
            <CardHeader>
              <CardTitle className="text-lg font-serif">
                {t.facilitatorDashboard.browserBreakdown}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {browserData.length ? (
                browserData.map((entry) => (
                  <div key={entry.key} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-muted-foreground">{entry.key}</span>
                    <span className="font-medium text-foreground">{formatNum(entry.count)}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  {t.facilitatorDashboard.noSessionData}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="rounded-2xl border border-border/70 bg-card/60 px-5 py-4 text-sm text-muted-foreground space-y-1">
          <p className="font-medium text-foreground">
            {t.facilitatorDashboard.reviewGuidanceTitle}
          </p>
          <p>{t.facilitatorDashboard.reviewGuidanceBody}</p>
          <p>{t.facilitatorDashboard.privacyNotice}</p>
        </div>
      </div>
    </div>
  );
}
