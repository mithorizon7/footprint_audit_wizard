import { useWizard } from "@/context/WizardContext";
import { useI18n } from "@/context/I18nContext";
import { StepCard } from "@/components/wizard/StepCard";
import { ExternalLinkCard } from "@/components/wizard/ExternalLinkCard";
import { InstructionBlock } from "@/components/wizard/InstructionBlock";
import { RadioPills } from "@/components/wizard/RadioPills";
import { StepNavigation } from "@/components/wizard/StepNavigation";
import { AccountDeviceEducational } from "@/components/wizard/EducationalContent";
import { Settings, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SiGoogle, SiApple, SiAndroid } from "react-icons/si";
import type { AdSetting, AndroidAdIdAction, IosATT } from "@shared/schema";

export default function AccountDevice() {
  const { data, updateResults, isFictional, tryLiveTools } = useWizard();
  const { t } = useI18n();
  const results = data.results.accountDevice;
  const os = data.device.os;

  const showAndroid = os === "android" || os === "unknown";
  const showApple = os === "ios" || os === "mac" || os === "unknown";
  const showExternalLinks = !isFictional || tryLiveTools;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <StepCard
        stepNumber={4}
        title={t.accountDevice.title}
        concept={t.accountDevice.concept}
        whyItMatters={t.accountDevice.whyItMatters}
      >
        <AccountDeviceEducational content={t.accountDevice.educationalContent} />

        <InstructionBlock
          title={t.instructions.whatToDo}
          instructions={[
            t.instructions.accountDevice1,
            t.instructions.accountDevice2,
            t.instructions.accountDevice3,
          ]}
        />

        {showExternalLinks && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
              {t.accountDevice.externalTools}
            </h3>
            <div className="space-y-4">
              <ExternalLinkCard
                title={t.externalTools.googleAdSettingsTitle}
                description={t.externalTools.googleAdSettingsDesc}
                url="https://support.google.com/My-Ad-Center-Help/answer/12155656?hl=en"
                icon={<SiGoogle className="w-5 h-5" />}
                testId="link-google-ads"
              />

              {showApple && (
                <ExternalLinkCard
                  title={t.externalTools.appleAdsTitle}
                  description={t.externalTools.appleAdsDesc}
                  url="https://support.apple.com/en-us/105131"
                  icon={<SiApple className="w-5 h-5" />}
                  testId="link-apple-ads"
                />
              )}

              {showAndroid && (
                <ExternalLinkCard
                  title={t.externalTools.androidAdIdTitle}
                  description={t.externalTools.androidAdIdDesc}
                  url="https://support.google.com/android/answer/3118621?hl=en"
                  icon={<SiAndroid className="w-5 h-5" />}
                  testId="link-android-ads"
                />
              )}

              {showApple && (
                <ExternalLinkCard
                  title={t.externalTools.iosAttTitle}
                  description={t.externalTools.iosAttDesc}
                  url="https://support.apple.com/en-us/102420"
                  icon={<Settings className="w-5 h-5" />}
                  testId="link-ios-att"
                />
              )}
            </div>
          </div>
        )}

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide flex items-center gap-2">
            <FileText className="w-4 h-4" />
            {t.accountDevice.recordSettings}
          </h3>

          <RadioPills
            value={results.googlePersonalizedAds}
            onChange={(v: AdSetting) => updateResults("accountDevice", { googlePersonalizedAds: v })}
            options={[
              { value: "on", label: t.adSettings.on },
              { value: "off", label: t.adSettings.off },
              { value: "unsure", label: t.common.unsure },
              { value: "not_used", label: t.adSettings.notUsed },
            ]}
            label={t.accountDevice.googleAdsQuestion}
            testId="input-google-ads"
          />

          {showApple && (
            <RadioPills
              value={results.applePersonalizedAds}
              onChange={(v: AdSetting) =>
                updateResults("accountDevice", { applePersonalizedAds: v })
              }
              options={[
                { value: "on", label: t.adSettings.on },
                { value: "off", label: t.adSettings.off },
                { value: "unsure", label: t.common.unsure },
                { value: "not_applicable", label: t.adSettings.notApplicable },
              ]}
              label={t.accountDevice.appleAdsQuestion}
              testId="input-apple-ads"
            />
          )}

          {showAndroid && (
            <RadioPills
              value={results.androidAdvertisingIdAction}
              onChange={(v: AndroidAdIdAction) =>
                updateResults("accountDevice", { androidAdvertisingIdAction: v })
              }
              options={[
                { value: "reset", label: t.androidActions.reset },
                { value: "deleted", label: t.androidActions.deleted },
                { value: "none", label: t.androidActions.none },
                { value: "not_applicable", label: t.adSettings.notApplicable },
              ]}
              label={t.accountDevice.androidIdQuestion}
              testId="input-android-ad-id"
            />
          )}

          {showApple && (
            <RadioPills
              value={results.iosATTSetting}
              onChange={(v: IosATT) => updateResults("accountDevice", { iosATTSetting: v })}
              options={[
                { value: "allow_apps_to_request", label: t.iosAtt.allowApps },
                { value: "blocked", label: t.iosAtt.blocked },
                { value: "unsure", label: t.common.unsure },
                { value: "not_applicable", label: t.adSettings.notApplicable },
              ]}
              label={t.accountDevice.iosAttQuestion}
              helperText={t.accountDevice.iosAttHelper}
              testId="input-ios-att"
            />
          )}
        </div>

        <StepNavigation />
      </StepCard>
    </div>
  );
}
