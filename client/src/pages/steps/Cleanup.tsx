import { useWizard } from "@/context/WizardContext";
import { StepCard } from "@/components/wizard/StepCard";
import { ExternalLinkCard } from "@/components/wizard/ExternalLinkCard";
import { RadioPills } from "@/components/wizard/RadioPills";
import { StepNavigation } from "@/components/wizard/StepNavigation";
import { ToolFallbackBlock } from "@/components/wizard/ToolFallbackBlock";
import { Trash2, FileText, ShieldCheck, ShieldAlert, KeyRound } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AlertBox } from "@/components/wizard/AlertBox";
import { Badge } from "@/components/ui/badge";
import type { YesNo, YesNoUnsure, CleanupAction } from "@shared/schema";

export default function Cleanup() {
  const { data, updateResults, completeAudit } = useWizard();
  const results = data.results.cleanup;
  const browser = data.device.browser;

  const getBrowserInfo = () => {
    const browsers = {
      chrome: {
        name: "Chrome",
        clearUrl: "https://support.google.com/accounts/answer/32050?hl=en",
        blockUrl: "https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en#zippy=%2Cblock-third-party-cookies",
      },
      edge: {
        name: "Edge",
        clearUrl: "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d",
        blockUrl: "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d",
      },
      firefox: {
        name: "Firefox",
        clearUrl: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox",
        blockUrl: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop",
      },
      safari: {
        name: "Safari",
        clearUrl: "https://support.apple.com/en-us/105082",
        blockUrl: "https://support.apple.com/en-us/105082",
      },
      other: {
        name: "your browser",
        clearUrl: "https://support.google.com/accounts/answer/32050?hl=en",
        blockUrl: "https://support.google.com/accounts/answer/32050?hl=en",
      },
      unknown: {
        name: "your browser",
        clearUrl: "https://support.google.com/accounts/answer/32050?hl=en",
        blockUrl: "https://support.google.com/accounts/answer/32050?hl=en",
      },
    };
    return browsers[browser] || browsers.unknown;
  };

  const browserInfo = getBrowserInfo();

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
            Browser Instructions for {browserInfo.name}
          </h3>
          <div className="space-y-4">
            <ExternalLinkCard
              title="Clear Cookies & Site Data"
              description={`Step-by-step instructions for ${browserInfo.name}`}
              url={browserInfo.clearUrl}
              icon={<Trash2 className="w-5 h-5" />}
              testId="link-clear-cookies"
            />
            <ExternalLinkCard
              title="Block Third-Party Cookies"
              description={`Enhanced tracking protection for ${browserInfo.name}`}
              url={browserInfo.blockUrl}
              icon={<ShieldCheck className="w-5 h-5" />}
              testId="link-block-cookies"
            />
          </div>
          <ToolFallbackBlock />
        </div>

        <Separator className="my-8" />

        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
              Breach Exposure Check
            </h3>
            <Badge variant="outline" className="text-xs">Optional</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Check if your email addresses have appeared in known data breaches. This only takes 2 minutes.
          </p>
          <ExternalLinkCard
            title="Have I Been Pwned"
            description="Enter your email on their site (not here) to see if it appeared in data breaches"
            url="https://haveibeenpwned.com/"
            icon={<ShieldAlert className="w-5 h-5" />}
            testId="link-hibp"
          />
          <AlertBox severity="info">
            <strong>Important:</strong> Enter your email directly on the Have I Been Pwned website, never into this wizard. 
            The wizard never asks for personal information.
          </AlertBox>
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
            label="Did you take any password hygiene action?"
            helperText="Examples: checked Have I Been Pwned, enabled MFA, updated a password, or reviewed your password manager"
            testId="input-password-hygiene"
          />
        </div>

        <StepNavigation nextLabel="View Report Card" onNext={handleNext} showSkip={false} />
      </StepCard>
    </div>
  );
}
