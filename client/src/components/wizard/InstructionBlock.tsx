import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/context/I18nContext';
import { cn } from '@/lib/utils';
import { ClipboardList } from 'lucide-react';

interface InstructionBlockProps {
  title: string;
  instructions: string[];
  className?: string;
}

export function InstructionBlock({ title, instructions, className }: InstructionBlockProps) {
  const { t } = useI18n();

  return (
    <div
      className={cn(
        'bg-card/70 rounded-xl border border-border/70 p-5 space-y-3 shadow-sm',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <ClipboardList className="w-4 h-4 text-primary" />
        <h4 className="text-sm font-medium text-foreground">{title}</h4>
      </div>
      <ol className="space-y-3 text-sm text-muted-foreground">
        {instructions.map((instruction, index) => (
          <li
            key={index}
            className={cn(
              'rounded-2xl border p-3',
              index === 0
                ? 'border-primary/30 bg-primary/5 text-foreground'
                : 'border-border/60 bg-background/50',
            )}
          >
            <div className="flex gap-3">
              {index === 0 ? (
                <Badge
                  variant="secondary"
                  className="shrink-0 bg-primary text-primary-foreground hover:bg-primary"
                >
                  {t.common.start}
                </Badge>
              ) : (
                <span className="font-medium text-primary shrink-0">{index + 1}.</span>
              )}
              <span>{instruction}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
