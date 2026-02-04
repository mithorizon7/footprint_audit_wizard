import { STEP_INFO } from '@shared/schema';
import { useWizard } from '@/context/WizardContext';
import { useI18n } from '@/context/I18nContext';
import { Check, Target, SkipForward } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function ProgressBar() {
  const { currentStep, currentStepTargetMinutes, data, isStepSkipped, goToStep } = useWizard();
  const { t, plural } = useI18n();
  const isStarted = !!data.startedAt;
  const isCompleted = !!data.completedAt;

  const handleStepSelect = (stepIndex: number) => {
    if (stepIndex === currentStep) return;
    goToStep(stepIndex);
  };

  const getStepName = (stepKey: string): string => {
    const stepNames: Record<string, string> = {
      welcome: t.steps.welcome,
      publicExposure: t.steps.publicExposure,
      trackers: t.steps.trackers,
      fingerprinting: t.steps.fingerprinting,
      accountDevice: t.steps.accountDevice,
      cleanup: t.steps.cleanup,
      reportCard: t.steps.reportCard,
    };
    return stepNames[stepKey] || stepKey;
  };

  const progressPercent = Math.min(100, (currentStep / (STEP_INFO.length - 1)) * 100);

  return (
    <div className="w-full bg-card/80 border-b border-card-border/70 backdrop-blur-md sticky top-0 z-50 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.45)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 pr-24 sm:pr-28">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-foreground" data-testid="step-progress">
              {plural('stepOf', { current: currentStep + 1, total: STEP_INFO.length })}
            </span>
            <Badge
              variant="secondary"
              className="text-xs normal-case tracking-normal bg-secondary/80"
            >
              {Math.round(progressPercent)}%
            </Badge>
          </div>

          {isStarted && !isCompleted && (
            <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground text-sm shrink-0">
              <Target className="w-3.5 h-3.5" />
              <span data-testid="step-target">
                {plural('targetMinutes', { count: currentStepTargetMinutes })}
              </span>
            </div>
          )}
        </div>

        <div className="hidden sm:flex items-center gap-1 overflow-x-auto pb-1">
          {STEP_INFO.map((step, index) => {
            const isCompletedStep = index < currentStep;
            const isCurrent = index === currentStep;
            const isUpcoming = index > currentStep;
            const wasSkipped = isStepSkipped(index);

            return (
              <div key={step.id} className="flex items-center">
                <button
                  type="button"
                  className={cn(
                    'relative flex items-center justify-center w-9 h-9 rounded-full text-xs font-semibold tracking-[0.12em] transition-all duration-300 border border-border/70 bg-card/70',
                    isCompletedStep &&
                      !wasSkipped &&
                      'bg-primary text-primary-foreground border-primary/40 shadow-[0_10px_20px_-14px_hsl(var(--primary)/0.9)]',
                    isCompletedStep &&
                      wasSkipped &&
                      'bg-amber-500 dark:bg-amber-600 text-white border-amber-400/80 shadow-[0_10px_20px_-14px_rgba(251,191,36,0.8)]',
                    isCurrent &&
                      'bg-primary text-primary-foreground border-primary/40 ring-2 ring-primary/30 ring-offset-2 ring-offset-background',
                    isUpcoming && 'bg-muted/60 text-muted-foreground',
                    !isCurrent &&
                      'cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-16px_rgba(15,23,42,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  )}
                  data-testid={`step-indicator-${step.id}`}
                  title={
                    wasSkipped
                      ? `${getStepName(step.key)} (${t.common.skip})`
                      : getStepName(step.key)
                  }
                  aria-label={getStepName(step.key)}
                  aria-current={isCurrent ? 'step' : undefined}
                  onClick={() => handleStepSelect(index)}
                >
                  {isCompletedStep ? (
                    wasSkipped ? (
                      <SkipForward className="w-4 h-4" />
                    ) : (
                      <Check className="w-4 h-4" />
                    )
                  ) : (
                    step.id
                  )}
                </button>
                {index < STEP_INFO.length - 1 && (
                  <div
                    className={cn(
                      'w-6 lg:w-10 h-[2px] mx-1 transition-all duration-300 rounded-full',
                      isCompletedStep ? 'bg-primary/70' : 'bg-muted/70',
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="sm:hidden flex gap-1 mt-1">
          {STEP_INFO.map((step, index) => {
            const wasSkipped = isStepSkipped(index);
            return (
              <div
                key={step.id}
                className={cn(
                  'h-1.5 rounded-full transition-all flex-1',
                  index < currentStep && !wasSkipped && 'bg-primary',
                  index < currentStep && wasSkipped && 'bg-amber-500',
                  index === currentStep && 'bg-primary',
                  index > currentStep && 'bg-muted',
                )}
              />
            );
          })}
        </div>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            {getStepName(STEP_INFO[currentStep]?.key)}
          </p>
          {isStarted && !isCompleted && (
            <p className="text-xs text-muted-foreground sm:hidden">
              {plural('targetMinutes', { count: currentStepTargetMinutes })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
