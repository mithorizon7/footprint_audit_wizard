import { Button } from "@/components/ui/button";
import { useWizard } from "@/context/WizardContext";
import { useI18n } from "@/context/I18nContext";
import { ChevronLeft, ChevronRight, SkipForward } from "lucide-react";

interface StepNavigationProps {
  showPrevious?: boolean;
  showSkip?: boolean;
  nextLabel?: string;
  onNext?: () => void;
}

export function StepNavigation({
  showPrevious = true,
  showSkip = true,
  nextLabel,
  onNext,
}: StepNavigationProps) {
  const { prevStep, nextStep, skipStep, currentStep } = useWizard();
  const { t } = useI18n();

  const handleNext = () => {
    if (onNext) {
      onNext();
    }
    nextStep();
  };

  return (
    <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-border">
      <div className="flex items-center gap-2">
        {showPrevious && currentStep > 1 && (
          <Button
            variant="ghost"
            onClick={prevStep}
            data-testid="button-previous"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            {t.common.back}
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        {showSkip && (
          <Button
            variant="ghost"
            onClick={skipStep}
            data-testid="button-skip"
          >
            {t.common.skip}
            <SkipForward className="w-4 h-4 ml-1" />
          </Button>
        )}
        <Button onClick={handleNext} data-testid="button-next">
          {nextLabel || t.common.next}
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
