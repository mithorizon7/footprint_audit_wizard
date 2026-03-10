import { useEffect, useState, type KeyboardEvent } from 'react';
import { useWizard } from '@/context/WizardContext';
import { useI18n } from '@/context/I18nContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Shield,
  User,
  FlaskConical,
  Monitor,
  Smartphone,
  HelpCircle,
  Clock,
  ExternalLink,
  Lock,
  Lightbulb,
  Key,
  Database,
  Trash2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { STEP_INFO, type Mode, type DeviceType, type OS, type Browser } from '@shared/schema';
import { detectDevice } from '@/lib/wizardStorage';

export default function Welcome() {
  const { data, setMode, setDevice, startAudit, mode } = useWizard();
  const { t, format, plural } = useI18n();
  const [didAutofillDevice, setDidAutofillDevice] = useState(false);

  useEffect(() => {
    if (didAutofillDevice) return;

    const hasDeviceSelection =
      data.device.type !== 'unknown' ||
      data.device.os !== 'unknown' ||
      data.device.browser !== 'unknown';

    if (hasDeviceSelection) {
      setDidAutofillDevice(true);
      return;
    }

    const detected = detectDevice();
    setDevice({
      type: detected.type as DeviceType,
      os: detected.os as OS,
      browser: detected.browser as Browser,
    });
    setDidAutofillDevice(true);
  }, [data.device.browser, data.device.os, data.device.type, didAutofillDevice, setDevice]);

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
  };

  const handleModeCardKeyDown = (event: KeyboardEvent<HTMLElement>, newMode: Mode) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleModeChange(newMode);
    }
  };

  const orderedSteps = STEP_INFO.slice(1);
  const selectedModeTitle =
    mode === 'fictional' ? t.welcome.fictionalPersona : t.welcome.myFootprint;
  const selectedModeDescription =
    mode === 'fictional' ? t.welcome.fictionalPersonaDesc : t.welcome.myFootprintDesc;
  const selectedStarting =
    mode === 'fictional' ? t.welcome.optionDemoStarting : t.welcome.optionSelfStarting;
  const selectedBestFor =
    mode === 'fictional' ? t.welcome.optionDemoBestFor : t.welcome.optionSelfBestFor;
  const currentDeviceSummary = [
    t.deviceNames[data.device.type],
    t.osNames[data.device.os],
    t.browserOptions[data.device.browser],
  ].join(' • ');

  return (
    <div className="min-h-screen flex items-start justify-center px-4 sm:px-8 py-12 sm:py-16">
      <div className="w-full max-w-5xl space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 shadow-[0_18px_40px_-24px_hsl(var(--primary)/0.9)] mb-4">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-foreground">
            {t.welcome.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t.welcome.subtitle}
          </p>
        </div>

        <Card className="p-0">
          <CardContent className="p-6 space-y-4">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <div className="space-y-4">
                <div>
                  <h2 className="font-semibold text-foreground text-lg">
                    {t.welcome.beforeYouStartSummaryTitle}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {t.welcome.expectDescription}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="rounded-2xl border border-border/70 bg-card/70 p-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <p>{t.welcome.beforeYouStartSummaryDo}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-card/70 p-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Key className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <p>{t.welcome.beforeYouStartSummaryNeed}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-card/70 p-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Shield className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <p>{t.welcome.beforeYouStartSummarySafety}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="normal-case tracking-normal">
                    {t.welcome.expectTime}
                  </Badge>
                  <Badge variant="secondary" className="normal-case tracking-normal">
                    {t.welcome.expectSteps}
                  </Badge>
                  <Badge variant="secondary" className="normal-case tracking-normal">
                    {t.welcome.expectPrivacy}
                  </Badge>
                </div>
                <div className="rounded-2xl border border-border/70 bg-card/70 p-4">
                  <h3 className="font-medium text-foreground">{t.welcome.whatToExpect}</h3>
                  <ol className="mt-4 space-y-3">
                    {orderedSteps.map((step, index) => (
                      <li
                        key={step.id}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/50 px-4 py-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                            {index + 1}
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground">
                              {t.steps[step.key as keyof typeof t.steps]}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {format(t.common.stepNumber, { step: index + 1 })}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground shrink-0">
                          {plural('minutes', { count: step.duration })}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-lg font-semibold text-foreground">{t.welcome.chooseYourPath}</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              {t.welcome.chooseYourPathDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card
              className={cn(
                'cursor-pointer transition-all p-0 hover:-translate-y-0.5',
                mode === 'self' && 'ring-2 ring-primary ring-offset-2 ring-offset-background',
              )}
              onClick={() => handleModeChange('self')}
              onKeyDown={(event) => handleModeCardKeyDown(event, 'self')}
              role="button"
              tabIndex={0}
              aria-pressed={mode === 'self'}
              data-testid="mode-self"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
                      mode === 'self' ? 'bg-primary text-primary-foreground' : 'bg-muted',
                    )}
                  >
                    <User className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{t.welcome.myFootprint}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t.welcome.myFootprintDesc}
                    </p>
                    <div className="pt-2 space-y-1 text-xs text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground">
                          {t.welcome.optionTableStarting}:
                        </span>{' '}
                        {t.welcome.optionSelfStarting}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">
                          {t.welcome.optionTableBestFor}:
                        </span>{' '}
                        {t.welcome.optionSelfBestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={cn(
                'cursor-pointer transition-all p-0 hover:-translate-y-0.5',
                mode === 'fictional' && 'ring-2 ring-primary ring-offset-2 ring-offset-background',
              )}
              onClick={() => handleModeChange('fictional')}
              onKeyDown={(event) => handleModeCardKeyDown(event, 'fictional')}
              role="button"
              tabIndex={0}
              aria-pressed={mode === 'fictional'}
              data-testid="mode-fictional"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
                      mode === 'fictional' ? 'bg-primary text-primary-foreground' : 'bg-muted',
                    )}
                  >
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{t.welcome.fictionalPersona}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t.welcome.fictionalPersonaDesc}
                    </p>
                    <div className="pt-2 space-y-1 text-xs text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground">
                          {t.welcome.optionTableStarting}:
                        </span>{' '}
                        {t.welcome.optionDemoStarting}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">
                          {t.welcome.optionTableBestFor}:
                        </span>{' '}
                        {t.welcome.optionDemoBestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="p-0">
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{selectedModeTitle}</h3>
                <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  {selectedModeDescription}
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">
                      {t.welcome.optionTableStarting}:
                    </span>{' '}
                    {selectedStarting}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">
                      {t.welcome.optionTableBestFor}:
                    </span>{' '}
                    {selectedBestFor}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge variant="outline" className="normal-case tracking-normal">
                    {t.steps.publicExposure}
                  </Badge>
                  <Badge variant="outline" className="normal-case tracking-normal">
                    {t.welcome.expectTime}
                  </Badge>
                </div>
              </div>

              <div className="shrink-0">
                <Button size="lg" onClick={startAudit} data-testid="button-begin-audit">
                  {t.common.startAudit}
                </Button>
              </div>
            </div>

            <p className="text-xs text-muted-foreground max-w-2xl">{t.welcome.consent}</p>
          </CardContent>
        </Card>

        <Card className="p-0">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="device-setup" className="border-b-0">
                <AccordionTrigger className="py-0 text-left hover:no-underline">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">{t.welcome.optionalHelp}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="normal-case tracking-normal">
                        {currentDeviceSummary}
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-muted-foreground">
                        {t.welcome.deviceLabel}
                      </label>
                      <Select
                        value={data.device.type}
                        onValueChange={(v) => setDevice({ type: v as DeviceType })}
                      >
                        <SelectTrigger data-testid="select-device-type">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="desktop">
                            <span className="flex items-center gap-2">
                              <Monitor className="w-4 h-4" /> {t.deviceNames.desktop}
                            </span>
                          </SelectItem>
                          <SelectItem value="mobile">
                            <span className="flex items-center gap-2">
                              <Smartphone className="w-4 h-4" /> {t.deviceNames.mobile}
                            </span>
                          </SelectItem>
                          <SelectItem value="unknown">
                            <span className="flex items-center gap-2">
                              <HelpCircle className="w-4 h-4" /> {t.deviceNames.unknown}
                            </span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-muted-foreground">{t.welcome.osLabel}</label>
                      <Select
                        value={data.device.os}
                        onValueChange={(v) => setDevice({ os: v as OS })}
                      >
                        <SelectTrigger data-testid="select-os">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="windows">{t.osNames.windows}</SelectItem>
                          <SelectItem value="mac">{t.osNames.mac}</SelectItem>
                          <SelectItem value="linux">{t.osNames.linux}</SelectItem>
                          <SelectItem value="ios">{t.osNames.ios}</SelectItem>
                          <SelectItem value="android">{t.osNames.android}</SelectItem>
                          <SelectItem value="unknown">{t.osNames.unknown}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-muted-foreground">
                        {t.welcome.browserLabel}
                      </label>
                      <Select
                        value={data.device.browser}
                        onValueChange={(v) => setDevice({ browser: v as Browser })}
                      >
                        <SelectTrigger data-testid="select-browser">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="chrome">{t.browserOptions.chrome}</SelectItem>
                          <SelectItem value="edge">{t.browserOptions.edge}</SelectItem>
                          <SelectItem value="firefox">{t.browserOptions.firefox}</SelectItem>
                          <SelectItem value="safari">{t.browserOptions.safari}</SelectItem>
                          <SelectItem value="other">{t.browserOptions.other}</SelectItem>
                          <SelectItem value="unknown">{t.browserOptions.unknown}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/70 rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center shrink-0 shadow-sm">
              <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-200">
                {t.welcome.privacyProtectedTitle}
              </h3>
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                {t.welcome.privacyProtectedIntro}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                  {t.welcome.privacyBullet1Title}
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  {t.welcome.privacyBullet1Desc}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                  {t.welcome.privacyBullet2Title}
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  {t.welcome.privacyBullet2Desc}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Trash2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                  {t.welcome.privacyBullet3Title}
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  {t.welcome.privacyBullet3Desc}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ExternalLink className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                  {t.welcome.privacyBullet4Title}
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  {t.welcome.privacyBullet4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="learn-more"
            className="border border-border/70 rounded-2xl px-4 bg-card/60"
          >
            <AccordionTrigger className="text-sm font-medium text-foreground">
              {t.common.learnMore}
            </AccordionTrigger>
            <AccordionContent className="space-y-6 pb-4">
              <Card className="p-0">
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-semibold text-foreground text-base">
                    {t.welcome.auditPurposeTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.welcome.auditPurposeDesc1}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.welcome.auditPurposeDesc2}
                  </p>
                </CardContent>
              </Card>

              <Card className="p-0">
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-foreground text-base">
                    {t.welcome.understandingOptionsTitle}
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-border/70">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border/70 bg-muted/40">
                          <th className="text-left py-2 pr-4 font-medium text-muted-foreground"></th>
                          <th className="text-left py-2 px-4 font-semibold text-foreground">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-primary" />
                              {t.welcome.myFootprint}
                            </div>
                          </th>
                          <th className="text-left py-2 px-4 font-semibold text-foreground">
                            <div className="flex items-center gap-2">
                              <FlaskConical className="w-4 h-4 text-primary" />
                              {t.welcome.fictionalPersona}
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/60">
                          <td className="py-3 pr-4 font-medium text-muted-foreground">
                            {t.welcome.optionTableStarting}
                          </td>
                          <td className="py-3 px-4 text-foreground">
                            {t.welcome.optionSelfStarting}
                          </td>
                          <td className="py-3 px-4 text-foreground">
                            {t.welcome.optionDemoStarting}
                          </td>
                        </tr>
                        <tr className="border-b border-border/60">
                          <td className="py-3 pr-4 font-medium text-muted-foreground">
                            {t.welcome.optionTableTools}
                          </td>
                          <td className="py-3 px-4 text-foreground">{t.welcome.optionSelfTools}</td>
                          <td className="py-3 px-4 text-foreground">{t.welcome.optionDemoTools}</td>
                        </tr>
                        <tr className="border-b border-border/60">
                          <td className="py-3 pr-4 font-medium text-muted-foreground">
                            {t.welcome.optionTableLearn}
                          </td>
                          <td className="py-3 px-4 text-foreground">{t.welcome.optionSelfLearn}</td>
                          <td className="py-3 px-4 text-foreground">{t.welcome.optionDemoLearn}</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-medium text-muted-foreground">
                            {t.welcome.optionTableBestFor}
                          </td>
                          <td className="py-3 px-4 text-foreground">
                            {t.welcome.optionSelfBestFor}
                          </td>
                          <td className="py-3 px-4 text-foreground">
                            {t.welcome.optionDemoBestFor}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-0">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{t.welcome.beforeYouStart}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Key className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <span>{t.welcome.prepPoint1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Monitor className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <span>{t.welcome.prepPoint2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <span>{t.welcome.prepPoint3}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center pt-2">
          <a
            href="/facilitator"
            className="text-xs text-muted-foreground underline hover:text-foreground transition-colors"
            data-testid="link-facilitator-dashboard"
          >
            {t.facilitatorDashboard.title}
          </a>
        </div>
      </div>
    </div>
  );
}
