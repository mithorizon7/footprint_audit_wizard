import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useI18n } from '@/context/I18nContext';

interface NumberStepperProps {
  value: number | null;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label: string;
  helperText?: string;
  emptyLabel?: string;
  showPlusAtMax?: boolean;
  testId?: string;
}

export function NumberStepper({
  value,
  onChange,
  min = 0,
  max = 100,
  label,
  helperText,
  emptyLabel,
  showPlusAtMax,
  testId,
}: NumberStepperProps) {
  const { t } = useI18n();
  const handleDecrement = () => {
    if (value === null) return;
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value === null) {
      onChange(min);
      return;
    }
    if (value < max) {
      onChange(value + 1);
    }
  };

  const shouldShowPlus = showPlusAtMax ?? max > 5;
  const displayValue =
    value === null ? (emptyLabel ?? '-') : value === max && shouldShowPlus ? `${max}+` : value;

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleDecrement}
          disabled={value === null || value <= min}
          data-testid={`${testId}-decrement`}
          aria-label={t.accessibility.decrease}
        >
          <Minus className="w-4 h-4" />
        </Button>
        <div
          className={cn(
            'flex items-center justify-center w-20 h-12 rounded-full border border-border/70',
            'bg-card/80 text-foreground font-semibold font-mono text-xl shadow-sm',
          )}
          data-testid={testId}
          aria-live="polite"
        >
          {displayValue}
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleIncrement}
          disabled={value !== null && value >= max}
          data-testid={`${testId}-increment`}
          aria-label={t.accessibility.increase}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      {helperText && <p className="text-xs text-muted-foreground">{helperText}</p>}
    </div>
  );
}
