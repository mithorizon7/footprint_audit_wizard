import { useState, useEffect } from 'react';
import { AlertTriangle, Clock, RotateCcw, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useWizard } from '@/context/WizardContext';
import { useI18n } from '@/context/I18nContext';
import { STEP_INFO } from '@shared/schema';
import { formatRelativeTime } from '@/lib/formatters';

export function SessionRecoveryDialog() {
  const { data, resetWizard, goToStep } = useWizard();
  const { t, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) return;

    const hasIncompleteSession =
      data.startedAt !== null && data.completedAt === null && data.currentStep > 0;

    if (hasIncompleteSession) {
      setOpen(true);
    }
    setChecked(true);
  }, [data.startedAt, data.completedAt, data.currentStep, checked]);

  const getTimeElapsed = () => {
    if (!data.startedAt) return t.common.unknown;
    const startTime = new Date(data.startedAt).getTime();
    const elapsedSeconds = Math.max(0, Math.floor((Date.now() - startTime) / 1000));
    return formatRelativeTime(-elapsedSeconds, locale);
  };

  const getCurrentStepName = () => {
    const stepInfo = STEP_INFO[data.currentStep];
    if (!stepInfo) return t.sessionRecovery.unknownStep;
    const stepKey = stepInfo.key as keyof typeof t.steps;
    return t.steps[stepKey] || t.sessionRecovery.unknownStep;
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
            <div className="w-10 h-10 rounded-full bg-amber-100/80 dark:bg-amber-950 flex items-center justify-center border border-amber-200/70 dark:border-amber-800/70 shadow-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <DialogTitle className="text-xl">{t.sessionRecovery.title}</DialogTitle>
          </div>
          <DialogDescription className="text-left space-y-3">
            <p>{t.sessionRecovery.description}</p>
            <div className="bg-card/70 border border-border/70 rounded-xl p-3 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>
                  {t.sessionRecovery.started} {getTimeElapsed()}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="w-4 h-4 text-muted-foreground" />
                <span>
                  {t.sessionRecovery.lastStep} {getCurrentStepName()}
                </span>
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
