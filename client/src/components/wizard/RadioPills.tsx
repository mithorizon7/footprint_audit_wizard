import { cn } from '@/lib/utils';

interface RadioPillsProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  label: string;
  helperText?: string;
  testId?: string;
}

export function RadioPills<T extends string>({
  value,
  onChange,
  options,
  label,
  helperText,
  testId,
}: RadioPillsProps<T>) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={value === option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-semibold transition-all',
              'border focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2',
              value === option.value
                ? 'bg-primary text-primary-foreground border-primary/40 shadow-[0_10px_20px_-14px_hsl(var(--primary)/0.9)]'
                : 'bg-background/70 text-foreground border-border/70 hover:bg-accent/40 hover:border-border',
            )}
            data-testid={`${testId}-${option.value}`}
          >
            {option.label}
          </button>
        ))}
      </div>
      {helperText && <p className="text-xs text-muted-foreground">{helperText}</p>}
    </div>
  );
}
