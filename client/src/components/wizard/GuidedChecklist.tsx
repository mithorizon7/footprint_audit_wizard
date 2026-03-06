import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/context/I18nContext';
import { cn } from '@/lib/utils';
import { CheckCircle2, Circle } from 'lucide-react';

export interface GuidedChecklistItem {
  label: string;
  done: boolean;
}

interface GuidedChecklistProps {
  items: GuidedChecklistItem[];
  minimumCompleted?: number;
  className?: string;
}

export function GuidedChecklist({ items, minimumCompleted, className }: GuidedChecklistProps) {
  const { t } = useI18n();

  if (!items.length) {
    return null;
  }

  const target = Math.max(1, Math.min(minimumCompleted ?? items.length, items.length));
  const completed = items.filter((item) => item.done).length;
  const isReady = completed >= target;

  return (
    <div
      className={cn(
        'rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm space-y-3',
        className,
      )}
      data-testid="guided-checklist"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t.instructions.whatToDo}
          </p>
          <p className="text-sm text-muted-foreground">{t.report.nextActions}</p>
        </div>
        <Badge variant="outline" className="text-xs normal-case tracking-normal shrink-0">
          {completed}/{target}
        </Badge>
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-2 text-sm">
            {item.done ? (
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Circle className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
            )}
            <span className={cn(item.done ? 'text-foreground' : 'text-muted-foreground')}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      {isReady && (
        <p className="text-xs text-emerald-700 dark:text-emerald-300" data-testid="guided-ready">
          {t.common.onTrack}
        </p>
      )}
    </div>
  );
}
