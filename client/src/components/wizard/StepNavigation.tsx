import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useWizard } from '@/context/WizardContext';
import { useI18n } from '@/context/I18nContext';
import { ChevronLeft, ChevronRight, SkipForward } from 'lucide-react';
import type { GuidedChecklistItem } from './GuidedChecklist';

interface StepNavigationProps {
  showPrevious?: boolean;
  showSkip?: boolean;
  nextLabel?: string;
  onNext?: () => void;
  guidanceItems?: GuidedChecklistItem[];
  minimumCompleted?: number;
}

export function StepNavigation({
  showPrevious = true,
  showSkip = true,
  nextLabel,
  onNext,
  guidanceItems = [],
  minimumCompleted,
}: StepNavigationProps) {
  const { prevStep, nextStep, skipStep, currentStep } = useWizard();
  const { t } = useI18n();
  const [showReadinessPrompt, setShowReadinessPrompt] = useState(false);

  const target = useMemo(() => {
    if (!guidanceItems.length) return 0;
    const requestedTarget = minimumCompleted ?? guidanceItems.length;
    return Math.max(1, Math.min(requestedTarget, guidanceItems.length));
  }, [guidanceItems, minimumCompleted]);

  const completed = useMemo(
    () => guidanceItems.filter((item) => item.done).length,
    [guidanceItems],
  );
  const unmetItems = useMemo(() => guidanceItems.filter((item) => !item.done), [guidanceItems]);
  const requiresPrompt = target > 0 && completed < target;

  useEffect(() => {
    setShowReadinessPrompt(false);
  }, [currentStep]);

  useEffect(() => {
    if (!requiresPrompt) {
      setShowReadinessPrompt(false);
    }
  }, [requiresPrompt]);

  const handleNext = () => {
    if (requiresPrompt && !showReadinessPrompt) {
      setShowReadinessPrompt(true);
      return;
    }

    if (onNext) {
      onNext();
    }
    nextStep();
  };

  return (
    <div className="pt-6 mt-8 border-t border-dashed border-border/70 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {showPrevious && currentStep > 0 && (
            <Button variant="ghost" onClick={prevStep} data-testid="button-previous">
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t.common.back}
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {showSkip && (
            <Button variant="ghost" onClick={skipStep} data-testid="button-skip">
              {t.common.skip}
              <SkipForward className="w-4 h-4 ml-1" />
            </Button>
          )}
          <Button onClick={handleNext} data-testid="button-next">
            {showReadinessPrompt && requiresPrompt ? t.common.continue : nextLabel || t.common.next}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
      {showReadinessPrompt && requiresPrompt && (
        <div
          className="w-full rounded-xl border border-amber-300/70 dark:border-amber-700/70 bg-amber-50/70 dark:bg-amber-950/30 p-3 space-y-2 text-sm"
          data-testid="navigation-readiness-prompt"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center justify-between gap-2">
            <p className="font-medium text-foreground">{t.report.nextActions}</p>
            <span className="text-xs text-muted-foreground">
              {completed}/{target}
            </span>
          </div>
          <ul className="space-y-1 text-muted-foreground">
            {unmetItems.slice(0, 3).map((item) => (
              <li key={item.label} className="leading-relaxed">
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
