import { useWizard } from "@/context/WizardContext";
import { StepCard } from "@/components/wizard/StepCard";
import { ExternalLinkCard } from "@/components/wizard/ExternalLinkCard";
import { RadioPills } from "@/components/wizard/RadioPills";
import { StepNavigation } from "@/components/wizard/StepNavigation";
import { Trash2, FileText, ShieldCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AlertBox } from "@/components/wizard/AlertBox";
import type { YesNo, YesNoUnsure, CleanupAction } from "@shared/schema";

export default function Cleanup() {
  const { data, updateResults, completeAudit } = useWizard();
  const results = data.results.cleanup;
  const browser = data.device.browser;

  const getBrowserClearUrl = () => {
    switch (browser) {
      case "chrome":
        return "https://support.google.com/chrome/answer/95647";
      case "edge":
        return "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09";
      case "firefox":
        return "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox";
      case "safari":
        return "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac";
      default:
        return "https://support.google.com/chrome/answer/95647";
    }
  };

  const handleNext = () => {
    completeAudit();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <StepCard
        stepNumber={5}
        title="Cleanup Sprint"
        concept="Now it's time to take action. Clear tracking data and optionally enable privacy protections."
        whyItMatters="Clearing cookies and site data removes existing trackers. Blocking third-party cookies prevents many future tracking attempts. These are quick wins that immediately improve your privacy."
        pitfalls={[
          "Clearing cookies will log you out of most websites.",
          "Some sites may not work properly with third-party cookies blocked.",
          "Consider using a password manager so you don't lose access to accounts.",
        ]}
      >
        <AlertBox severity="warning" className="mb-6">
          <strong>Heads up:</strong> Clearing cookies will log you out of websites. Make sure you
          know your passwords or have a password manager before proceeding.
        </AlertBox>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
            Browser Instructions
          </h3>
          <div className="space-y-4">
            <ExternalLinkCard
              title="Clear Cookies & Site Data"
              description={`Instructions for ${browser === "unknown" ? "your browser" : browser}`}
              url={getBrowserClearUrl()}
              icon={<Trash2 className="w-5 h-5" />}
              testId="link-clear-cookies"
            />
            <ExternalLinkCard
              title="Block Third-Party Cookies"
              description="Enhanced privacy by limiting cross-site tracking"
              url="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en#zippy=%2Cblock-third-party-cookies"
              icon={<ShieldCheck className="w-5 h-5" />}
              testId="link-block-cookies"
            />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Record Your Actions
          </h3>

          <RadioPills
            value={results.cookiesCleared}
            onChange={(v: YesNo) => updateResults("cleanup", { cookiesCleared: v })}
            options={[
              { value: "yes", label: "Yes, cleared" },
              { value: "no", label: "No, skipped" },
            ]}
            label="Did you clear your cookies and site data?"
            testId="input-cookies-cleared"
          />

          <RadioPills
            value={results.thirdPartyCookiesBlockedOrLimited}
            onChange={(v: YesNoUnsure) =>
              updateResults("cleanup", { thirdPartyCookiesBlockedOrLimited: v })
            }
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "unsure", label: "Already blocked" },
            ]}
            label="Did you enable blocking of third-party cookies?"
            testId="input-cookies-blocked"
          />

          <RadioPills
            value={results.passwordHygieneActionTaken}
            onChange={(v: CleanupAction) =>
              updateResults("cleanup", { passwordHygieneActionTaken: v })
            }
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "later", label: "Will do later" },
            ]}
            label="Did you take any password hygiene actions (e.g., check for breached passwords)?"
            helperText="Consider using a service like Have I Been Pwned to check if your accounts were in data breaches"
            testId="input-password-hygiene"
          />
        </div>

        <StepNavigation nextLabel="View Report Card" onNext={handleNext} showSkip={false} />
      </StepCard>
    </div>
  );
}
