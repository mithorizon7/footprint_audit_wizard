import { useWizard } from "@/context/WizardContext";
import { useI18n } from "@/context/I18nContext";
import { StepCard } from "@/components/wizard/StepCard";
import { ExternalLinkCard } from "@/components/wizard/ExternalLinkCard";
import { InstructionBlock } from "@/components/wizard/InstructionBlock";
import { RadioPills } from "@/components/wizard/RadioPills";
import { StepNavigation } from "@/components/wizard/StepNavigation";
import { ToolFallbackBlock } from "@/components/wizard/ToolFallbackBlock";
import { CleanupEducational } from "@/components/wizard/EducationalContent";
import { Trash2, FileText, ShieldCheck, ShieldAlert } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AlertBox } from "@/components/wizard/AlertBox";
import { Badge } from "@/components/ui/badge";
import type { YesNo, CookieBlocking, CleanupAction } from "@shared/schema";

export default function Cleanup() {
  const { data, updateResults, completeAudit, isFictional, tryLiveTools } = useWizard();
  const { t, format } = useI18n();
  const results = data.results.cleanup;
  const browser = data.device.browser;
  const showExternalLinks = !isFictional || tryLiveTools;

  const BROWSER_URLS = {
    chrome: {
      clearUrl: "https://support.google.com/accounts/answer/32050?hl=en",
      blockUrl: "https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en#zippy=%2Cblock-third-party-cookies",
    },
    edge: {
      clearUrl: "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d",
      blockUrl: "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d",
    },
    firefox: {
      clearUrl: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox",
      blockUrl: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop",
    },
    safari: {
      clearUrl: "https://support.apple.com/en-us/105082",
      blockUrl: "https://support.apple.com/en-us/105082",
    },
    other: {
      clearUrl: "https://support.google.com/accounts/answer/32050?hl=en",
      blockUrl: "https://support.google.com/accounts/answer/32050?hl=en",
    },
    unknown: {
      clearUrl: "https://support.google.com/accounts/answer/32050?hl=en",
      blockUrl: "https://support.google.com/accounts/answer/32050?hl=en",
    },
  };

  const browserUrls = BROWSER_URLS[browser] || BROWSER_URLS.unknown;
  const browserName = t.browserNames[browser] || t.browserNames.unknown;

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
        pitfalls={t.cleanup.pitfalls}
      >
        <CleanupEducational content={t.cleanup.educationalContent} />

        <InstructionBlock
          title={t.instructions.whatToDo}
          instructions={[
            t.instructions.cleanup1,
            t.instructions.cleanup2,
            t.instructions.cleanup3,
          ]}
        />

        <AlertBox severity="warning" className="mb-6">
          {t.cleanup.cookiesWarning}
        </AlertBox>

        {showExternalLinks && (
          <>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
                {t.cleanup.browserInstructions} {browserName}
              </h3>
              <div className="space-y-4">
                <ExternalLinkCard
                  title={t.externalTools.clearCookiesTitle}
                  description={format(t.externalTools.stepsForBrowser, { browser: browserName })}
                  url={browserUrls.clearUrl}
                  icon={<Trash2 className="w-5 h-5" />}
                  testId="link-clear-cookies"
                />
                <ExternalLinkCard
                  title={t.externalTools.blockCookiesTitle}
                  description={t.externalTools.blockCookiesDesc}
                  url={browserUrls.blockUrl}
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
                <Badge variant="outline" className="text-xs">{t.badges.optional}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.cleanup.breachExposureDesc}
              </p>
              <ExternalLinkCard
                title={t.externalTools.hibpTitle}
                description={t.externalTools.hibpDesc}
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
            onChange={(v: CookieBlocking) =>
              updateResults("cleanup", { thirdPartyCookiesBlockedOrLimited: v })
            }
            options={[
              { value: "yes", label: t.common.yes },
              { value: "no", label: t.common.no },
              { value: "already_blocked", label: t.cleanupActions.alreadyBlocked },
              { value: "unsure", label: t.common.unsure },
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

        <StepNavigation nextLabel={t.common.viewReportCard} onNext={handleNext} showSkip={false} />
      </StepCard>
    </div>
  );
}
