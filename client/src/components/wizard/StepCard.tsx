import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AlertBox } from './AlertBox';
import { CheckCircle2, Clock, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/context/I18nContext';
import { useWizard } from '@/context/WizardContext';
import { STEP_INFO } from '@shared/schema';

interface StepCardProps {
  stepNumber: number;
  title: string;
  concept: string;
  outcomePreview?: string;
  whyItMatters?: string;
  pitfalls?: string[];
  children: React.ReactNode;
  className?: string;
}

export function StepCard({
  stepNumber,
  title,
  concept,
  outcomePreview,
  whyItMatters,
  pitfalls,
  children,
  className,
}: StepCardProps) {
  const { t, format, plural } = useI18n();
  const { data, elapsedSeconds, currentStep } = useWizard();
  const stepInfo = STEP_INFO[stepNumber];
  const estimatedMinutes = stepInfo?.duration;
  const expectedElapsedSeconds =
    STEP_INFO.slice(1, Math.min(currentStep + 1, STEP_INFO.length)).reduce(
      (sum, step) => sum + step.duration,
      0,
    ) * 60;
  const showOnTrack =
    !!data.startedAt &&
    !data.completedAt &&
    currentStep === stepNumber &&
    elapsedSeconds <= expectedElapsedSeconds;

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="space-y-4">
        <div className="flex items-start gap-3 flex-wrap">
          <Badge variant="secondary" className="shrink-0" data-testid={`badge-step-${stepNumber}`}>
            {format(t.common.stepNumber, { step: stepNumber })}
          </Badge>
          <CardTitle className="text-2xl font-serif">{title}</CardTitle>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">{concept}</p>
        {outcomePreview && <p className="text-sm text-muted-foreground">{outcomePreview}</p>}
        {estimatedMinutes !== undefined && (
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {format(t.common.estimatedTime, {
                minutes: plural('minutes', { count: estimatedMinutes }),
              })}
            </span>
            {showOnTrack && (
              <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                {t.common.onTrack}
              </span>
            )}
          </div>
        )}

        {whyItMatters && (
          <AlertBox severity="info">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{whyItMatters}</span>
            </div>
          </AlertBox>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        {children}

        {pitfalls && pitfalls.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="pitfalls" className="border-b-0">
              <AccordionTrigger
                className="text-sm text-muted-foreground hover:text-foreground py-2"
                data-testid="accordion-pitfalls"
              >
                {t.common.commonPitfalls}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {pitfalls.map((pitfall, index) => (
                    <li key={index}>{pitfall}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
}
