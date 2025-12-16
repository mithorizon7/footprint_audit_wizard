import { useWizard } from "@/context/WizardContext";
import { FlaskConical, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function FictionalBanner() {
  const { isFictional } = useWizard();
  const [isDismissed, setIsDismissed] = useState(false);

  if (!isFictional || isDismissed) return null;

  return (
    <div className="bg-amber-100 dark:bg-amber-900/40 border-b border-amber-200 dark:border-amber-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-amber-700 dark:text-amber-300 flex-shrink-0" />
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <span className="font-medium">Fictional Persona Mode:</span>{" "}
              <span className="hidden sm:inline">
                You're viewing example data. No real searches or data collection.
              </span>
              <span className="sm:hidden">Example data only.</span>
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 w-6 h-6 text-amber-700 dark:text-amber-300"
            onClick={() => setIsDismissed(true)}
            data-testid="button-dismiss-banner"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
