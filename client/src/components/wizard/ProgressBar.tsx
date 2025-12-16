import { STEP_INFO, TOTAL_DURATION_MINUTES } from "@shared/schema";
import { useWizard } from "@/context/WizardContext";
import { Check, Clock, Target, SkipForward } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function ProgressBar() {
  const { currentStep, timeRemaining, elapsedSeconds, currentStepTargetMinutes, data, isStepSkipped } = useWizard();
  const isStarted = !!data.startedAt;
  const isCompleted = !!data.completedAt;

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const remainingSeconds = Math.max(0, TOTAL_DURATION_MINUTES * 60 - elapsedSeconds);
  const progressPercent = Math.min(100, (currentStep / (STEP_INFO.length - 1)) * 100);

  return (
    <div className="w-full bg-card border-b border-card-border sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-foreground" data-testid="step-progress">
              Step {currentStep + 1} of {STEP_INFO.length}
            </span>
            <Badge variant="secondary" className="text-xs">
              {Math.round(progressPercent)}%
            </Badge>
          </div>

          {isStarted && !isCompleted && (
            <div className="flex items-center gap-4 text-sm shrink-0">
              <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground">
                <Target className="w-3.5 h-3.5" />
                <span data-testid="step-target">Target: {currentStepTargetMinutes} min</span>
              </div>
              <div className="flex items-center gap-1.5 text-foreground font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span data-testid="time-remaining">{formatTime(remainingSeconds)} left</span>
              </div>
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
                <div
                  className={cn(
                    "relative flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all duration-300",
                    isCompletedStep && !wasSkipped && "bg-primary text-primary-foreground",
                    isCompletedStep && wasSkipped && "bg-amber-500 dark:bg-amber-600 text-white",
                    isCurrent && "bg-primary text-primary-foreground ring-2 ring-primary/30 ring-offset-2 ring-offset-background",
                    isUpcoming && "bg-muted text-muted-foreground"
                  )}
                  data-testid={`step-indicator-${step.id}`}
                  title={wasSkipped ? `${step.name} (Skipped)` : step.name}
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
                </div>
                {index < STEP_INFO.length - 1 && (
                  <div
                    className={cn(
                      "w-6 lg:w-10 h-0.5 mx-1 transition-all duration-300",
                      isCompletedStep ? "bg-primary" : "bg-muted"
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
                  "h-1.5 rounded-full transition-all flex-1",
                  index < currentStep && !wasSkipped && "bg-primary",
                  index < currentStep && wasSkipped && "bg-amber-500",
                  index === currentStep && "bg-primary",
                  index > currentStep && "bg-muted"
                )}
              />
            );
          })}
        </div>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            {STEP_INFO[currentStep]?.name}
          </p>
          {isStarted && !isCompleted && (
            <p className="text-xs text-muted-foreground sm:hidden">
              Target: {currentStepTargetMinutes} min
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
