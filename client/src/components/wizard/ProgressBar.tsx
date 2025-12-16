import { STEP_INFO } from "@shared/schema";
import { useWizard } from "@/context/WizardContext";
import { Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProgressBar() {
  const { currentStep, timeRemaining, data } = useWizard();
  const isStarted = !!data.startedAt;

  return (
    <div className="w-full bg-card border-b border-card-border sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-1 flex-1 overflow-x-auto">
            {STEP_INFO.map((step, index) => {
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;
              const isUpcoming = index > currentStep;

              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all duration-300",
                      isCompleted && "bg-primary text-primary-foreground",
                      isCurrent && "bg-primary text-primary-foreground ring-2 ring-primary/30 ring-offset-2 ring-offset-background",
                      isUpcoming && "bg-muted text-muted-foreground"
                    )}
                    data-testid={`step-indicator-${step.id}`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  {index < STEP_INFO.length - 1 && (
                    <div
                      className={cn(
                        "w-6 lg:w-10 h-0.5 mx-1 transition-all duration-300",
                        isCompleted ? "bg-primary" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="sm:hidden flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">
              Step {currentStep + 1} of {STEP_INFO.length}
            </span>
            <div className="flex gap-1">
              {STEP_INFO.map((step, index) => (
                <div
                  key={step.id}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index < currentStep && "bg-primary",
                    index === currentStep && "bg-primary w-4",
                    index > currentStep && "bg-muted"
                  )}
                />
              ))}
            </div>
          </div>

          {isStarted && (
            <div className="flex items-center gap-2 text-muted-foreground shrink-0">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium" data-testid="time-remaining">
                ~{timeRemaining} min left
              </span>
            </div>
          )}
        </div>

        <div className="hidden sm:block mt-2">
          <p className="text-xs text-muted-foreground text-center">
            {STEP_INFO[currentStep]?.name}
          </p>
        </div>
      </div>
    </div>
  );
}
