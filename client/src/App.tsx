import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Switch, Route } from 'wouter';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { WizardProvider, useWizard } from '@/context/WizardContext';
import { I18nProvider, useI18n } from '@/context/I18nContext';
import { ProgressBar } from '@/components/wizard/ProgressBar';
import { FictionalBanner } from '@/components/wizard/FictionalBanner';
import { PanicButton } from '@/components/wizard/PanicButton';
import { SessionRecoveryDialog } from '@/components/wizard/SessionRecoveryDialog';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import Welcome from '@/pages/Welcome';
import PublicExposure from '@/pages/steps/PublicExposure';
import Trackers from '@/pages/steps/Trackers';
import FingerprintingStep from '@/pages/steps/Fingerprinting';
import AccountDevice from '@/pages/steps/AccountDevice';
import Cleanup from '@/pages/steps/Cleanup';
import ReportCard from '@/pages/ReportCard';
import FacilitatorDashboard from '@/pages/FacilitatorDashboard';

function WizardContent() {
  const { currentStep } = useWizard();
  const { t } = useI18n();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Welcome />;
      case 1:
        return <PublicExposure />;
      case 2:
        return <Trackers />;
      case 3:
        return <FingerprintingStep />;
      case 4:
        return <AccountDevice />;
      case 5:
        return <Cleanup />;
      case 6:
        return <ReportCard />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {currentStep > 0 && (
        <>
          <FictionalBanner />
          <ProgressBar />
        </>
      )}

      <div className="fixed top-4 right-4 z-50 no-print flex items-center gap-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>

      <main className="flex-1">{renderStep()}</main>

      <SessionRecoveryDialog />

      <footer className="py-4 px-6 border-t border-border bg-background no-print">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-muted-foreground">{t.footer.privacyNotice}</p>
          <PanicButton />
        </div>
      </footer>
    </div>
  );
}

function WizardPage() {
  return (
    <WizardProvider>
      <WizardContent />
    </WizardProvider>
  );
}

function FacilitatorPage() {
  return (
    <>
      <div className="fixed top-4 right-4 z-50 no-print flex items-center gap-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>
      <FacilitatorDashboard />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <I18nProvider>
          <Switch>
            <Route path="/facilitator" component={FacilitatorPage} />
            <Route path="/" component={WizardPage} />
          </Switch>
        </I18nProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
