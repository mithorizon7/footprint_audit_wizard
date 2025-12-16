import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WizardProvider, useWizard } from "@/context/WizardContext";
import { ProgressBar } from "@/components/wizard/ProgressBar";
import { FictionalBanner } from "@/components/wizard/FictionalBanner";
import { PanicButton } from "@/components/wizard/PanicButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import Welcome from "@/pages/Welcome";
import PublicExposure from "@/pages/steps/PublicExposure";
import Trackers from "@/pages/steps/Trackers";
import FingerprintingStep from "@/pages/steps/Fingerprinting";
import AccountDevice from "@/pages/steps/AccountDevice";
import Cleanup from "@/pages/steps/Cleanup";
import ReportCard from "@/pages/ReportCard";

function WizardContent() {
  const { currentStep } = useWizard();

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

      <div className="fixed top-4 right-4 z-50 no-print">
        <ThemeToggle />
      </div>
      
      <main className="flex-1">
        {renderStep()}
      </main>

      <footer className="py-4 px-6 border-t border-border bg-background no-print">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-muted-foreground">
            Your data stays on this device. We never collect or transmit personal information.
          </p>
          <PanicButton />
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WizardProvider>
          <WizardContent />
        </WizardProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
