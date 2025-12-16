import { useWizard } from "@/context/WizardContext";
import { FlaskConical, ExternalLink } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function FictionalBanner() {
  const { isFictional, tryLiveTools, setTryLiveTools, setMode, currentStep } = useWizard();

  if (!isFictional) return null;

  const handleSwitchToReal = () => {
    if (window.confirm("Switch to 'My Footprint' mode? This will clear current demo data.")) {
      setMode("self");
    }
  };

  return (
    <div className="bg-amber-100 dark:bg-amber-900/40 border-b border-amber-200 dark:border-amber-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-amber-700 dark:text-amber-300 flex-shrink-0" />
            <div>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <span className="font-medium">Fictional Persona Mode</span>
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-300/80 mt-0.5">
                Using example data. Click Next to proceed without real searches.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch
                id="try-live-tools"
                checked={tryLiveTools}
                onCheckedChange={setTryLiveTools}
                data-testid="switch-try-live-tools"
              />
              <Label
                htmlFor="try-live-tools"
                className="text-xs text-amber-800 dark:text-amber-200 cursor-pointer flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                <span className="hidden sm:inline">Try live tools anyway</span>
                <span className="sm:hidden">Live tools</span>
              </Label>
            </div>

            {currentStep === 0 && (
              <button
                onClick={handleSwitchToReal}
                className="text-xs text-amber-700 dark:text-amber-300 hover:underline"
                data-testid="button-switch-to-real"
              >
                Switch to My Footprint
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
