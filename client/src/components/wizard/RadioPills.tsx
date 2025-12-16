import { cn } from "@/lib/utils";

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
              "px-4 py-2 rounded-md text-sm font-medium transition-all",
              "border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              value === option.value
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-foreground border-border hover-elevate"
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
