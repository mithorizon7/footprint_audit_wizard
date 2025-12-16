import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NumberStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label: string;
  helperText?: string;
  testId?: string;
}

export function NumberStepper({
  value,
  onChange,
  min = 0,
  max = 100,
  label,
  helperText,
  testId,
}: NumberStepperProps) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleDecrement}
          disabled={value <= min}
          data-testid={`${testId}-decrement`}
          aria-label="Decrease"
        >
          <Minus className="w-4 h-4" />
        </Button>
        <div
          className={cn(
            "flex items-center justify-center w-16 h-12 rounded-md",
            "bg-muted text-foreground font-semibold text-xl"
          )}
          data-testid={testId}
          aria-live="polite"
        >
          {value === max && max > 5 ? `${max}+` : value}
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleIncrement}
          disabled={value >= max}
          data-testid={`${testId}-increment`}
          aria-label="Increase"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      {helperText && <p className="text-xs text-muted-foreground">{helperText}</p>}
    </div>
  );
}
