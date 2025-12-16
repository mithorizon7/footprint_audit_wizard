import { useWizard } from "@/context/WizardContext";
import { useI18n } from "@/context/I18nContext";
import { StepCard } from "@/components/wizard/StepCard";
import { ExternalLinkCard } from "@/components/wizard/ExternalLinkCard";
import { RadioPills } from "@/components/wizard/RadioPills";
import { StepNavigation } from "@/components/wizard/StepNavigation";
import { ToolFallbackBlock } from "@/components/wizard/ToolFallbackBlock";
import { Trash2, FileText, ShieldCheck, ShieldAlert } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AlertBox } from "@/components/wizard/AlertBox";
import { Badge } from "@/components/ui/badge";
import type { YesNo, YesNoUnsure, CleanupAction } from "@shared/schema";

export default function Cleanup() {
  const { data, updateResults, completeAudit, isFictional, tryLiveTools } = useWizard();
  const { t } = useI18n();
  const results = data.results.cleanup;
  const browser = data.device.browser;
  const showExternalLinks = !isFictional || tryLiveTools;

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
        title={t.cleanup.title}
        concept={t.cleanup.concept}
        whyItMatters={t.cleanup.whyItMatters}
      >
        <AlertBox severity="warning" className="mb-6">
          {t.cleanup.cookiesWarning}
        </AlertBox>

        {showExternalLinks && (
          <>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
                {t.cleanup.browserInstructions} {browserInfo.name}
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
                  {t.cleanup.breachExposure}
                </h3>
                <Badge variant="outline" className="text-xs">Optional</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.cleanup.breachExposureDesc}
              </p>
              <ExternalLinkCard
                title="Have I Been Pwned"
                description="Enter your email on their site (not here) to see if it appeared in data breaches"
                url="https://haveibeenpwned.com/"
                icon={<ShieldAlert className="w-5 h-5" />}
                testId="link-hibp"
              />
            </div>
          </>
        )}

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide flex items-center gap-2">
            <FileText className="w-4 h-4" />
            {t.cleanup.recordActions}
          </h3>

          <RadioPills
            value={results.cookiesCleared}
            onChange={(v: YesNo) => updateResults("cleanup", { cookiesCleared: v })}
            options={[
              { value: "yes", label: t.cleanupActions.yes },
              { value: "no", label: t.cleanupActions.no },
            ]}
            label={t.cleanup.cookiesClearedQuestion}
            testId="input-cookies-cleared"
          />

          <RadioPills
            value={results.thirdPartyCookiesBlockedOrLimited}
            onChange={(v: YesNoUnsure) =>
              updateResults("cleanup", { thirdPartyCookiesBlockedOrLimited: v })
            }
            options={[
              { value: "yes", label: t.common.yes },
              { value: "no", label: t.common.no },
              { value: "unsure", label: t.cleanupActions.alreadyBlocked },
            ]}
            label={t.cleanup.cookiesBlockedQuestion}
            testId="input-cookies-blocked"
          />

          <RadioPills
            value={results.passwordHygieneActionTaken}
            onChange={(v: CleanupAction) =>
              updateResults("cleanup", { passwordHygieneActionTaken: v })
            }
            options={[
              { value: "yes", label: t.common.yes },
              { value: "no", label: t.common.no },
              { value: "later", label: t.cleanupActions.later },
            ]}
            label={t.cleanup.passwordHygieneQuestion}
            helperText={t.cleanup.passwordHygieneHelper}
            testId="input-password-hygiene"
          />
        </div>

        <StepNavigation nextLabel="View Report Card" onNext={handleNext} showSkip={false} />
      </StepCard>
    </div>
  );
}
