import { useState, useEffect } from "react";
import { AlertTriangle, Clock, RotateCcw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWizard } from "@/context/WizardContext";
import { useI18n } from "@/context/I18nContext";
import { STEP_INFO } from "@shared/schema";

export function SessionRecoveryDialog() {
  const { data, resetWizard, goToStep } = useWizard();
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) return;
    
    const hasIncompleteSession =
      data.startedAt !== null &&
      data.completedAt === null &&
      data.currentStep > 0;

    if (hasIncompleteSession) {
      setOpen(true);
    }
    setChecked(true);
  }, [data.startedAt, data.completedAt, data.currentStep, checked]);

  const getTimeElapsed = () => {
    if (!data.startedAt) return "Unknown";
    const startTime = new Date(data.startedAt).getTime();
    const elapsed = Math.floor((Date.now() - startTime) / 60000);
    if (elapsed < 60) return `${elapsed} minutes ago`;
    const hours = Math.floor(elapsed / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  };

  const getCurrentStepName = () => {
    const stepInfo = STEP_INFO[data.currentStep];
    return stepInfo?.name || "Unknown Step";
  };

  const handleResume = () => {
    setOpen(false);
    goToStep(data.currentStep);
  };

  const handleStartFresh = () => {
    resetWizard();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <DialogTitle className="text-xl">{t.sessionRecovery.title}</DialogTitle>
          </div>
          <DialogDescription className="text-left space-y-3">
            <p>
              {t.sessionRecovery.description}
            </p>
            <div className="bg-muted rounded-md p-3 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{t.sessionRecovery.started} {getTimeElapsed()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="w-4 h-4 text-muted-foreground" />
                <span>{t.sessionRecovery.lastStep} {getCurrentStepName()}</span>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={handleStartFresh}
            className="w-full sm:w-auto"
            data-testid="button-start-fresh"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            {t.sessionRecovery.startFreshButton}
          </Button>
          <Button
            onClick={handleResume}
            className="w-full sm:w-auto"
            data-testid="button-resume-session"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            {t.sessionRecovery.resumeButton}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
