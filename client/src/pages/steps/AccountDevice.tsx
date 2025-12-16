import { useWizard } from "@/context/WizardContext";
import { StepCard } from "@/components/wizard/StepCard";
import { ExternalLinkCard } from "@/components/wizard/ExternalLinkCard";
import { RadioPills } from "@/components/wizard/RadioPills";
import { StepNavigation } from "@/components/wizard/StepNavigation";
import { Settings, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SiGoogle, SiApple, SiAndroid } from "react-icons/si";
import type { AdSetting, AndroidAdIdAction, IosATT } from "@shared/schema";

export default function AccountDevice() {
  const { data, updateResults, isFictional, tryLiveTools } = useWizard();
  const results = data.results.accountDevice;
  const os = data.device.os;

  const showAndroid = os === "android" || os === "unknown";
  const showApple = os === "ios" || os === "mac" || os === "unknown";
  const showExternalLinks = !isFictional || tryLiveTools;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <StepCard
        stepNumber={4}
        title="Account & Device Identifiers"
        concept="Tracking also happens at the account/device level through ad personalization settings, device IDs, and app tracking permissions."
        whyItMatters="Even if you block website trackers, your accounts and devices may still share data with advertisers through built-in identifiers that follow you across apps and services."
        pitfalls={[
          "Settings locations vary by OS version — the links below will guide you.",
          "Resetting an advertising ID creates a new one; it doesn't disable tracking entirely.",
          "Turning off personalized ads may not reduce the number of ads; it changes targeting.",
          "On managed devices, you may not be able to change some settings.",
          "Some settings require being logged into your account on the device.",
        ]}
      >
        {showExternalLinks && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
              External Tools
            </h3>
            <div className="space-y-4">
              <ExternalLinkCard
                title="Google Ad Settings"
                description="Learn how Google personalized ads work and control your settings"
                url="https://support.google.com/My-Ad-Center-Help/answer/12155656?hl=en"
                icon={<SiGoogle className="w-5 h-5" />}
                testId="link-google-ads"
              />

              {showApple && (
                <ExternalLinkCard
                  title="Apple Personalized Ads"
                  description="Manage Apple's personalized advertising settings"
                  url="https://support.apple.com/en-us/105131"
                  icon={<SiApple className="w-5 h-5" />}
                  testId="link-apple-ads"
                />
              )}

              {showAndroid && (
                <ExternalLinkCard
                  title="Android Advertising ID"
                  description="Reset or delete your Android advertising identifier"
                  url="https://support.google.com/googleplay/android-developer/answer/6048248?hl=en"
                  icon={<SiAndroid className="w-5 h-5" />}
                  testId="link-android-ads"
                />
              )}

              {showApple && (
                <ExternalLinkCard
                  title="iOS App Tracking Transparency"
                  description="Understand and control which apps can track you"
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
            Record Your Settings
          </h3>

          <RadioPills
            value={results.googlePersonalizedAds}
            onChange={(v: AdSetting) => updateResults("accountDevice", { googlePersonalizedAds: v })}
            options={[
              { value: "on", label: "On" },
              { value: "off", label: "Off" },
              { value: "unsure", label: "Unsure" },
              { value: "not_used", label: "Don't use Google" },
            ]}
            label="Is Google personalized ads turned on or off?"
            testId="input-google-ads"
          />

          {showApple && (
            <RadioPills
              value={results.applePersonalizedAds}
              onChange={(v: AdSetting) =>
                updateResults("accountDevice", { applePersonalizedAds: v })
              }
              options={[
                { value: "on", label: "On" },
                { value: "off", label: "Off" },
                { value: "unsure", label: "Unsure" },
                { value: "not_applicable", label: "N/A" },
              ]}
              label="Is Apple personalized ads turned on or off?"
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
                { value: "reset", label: "Reset" },
                { value: "deleted", label: "Deleted" },
                { value: "none", label: "No change" },
                { value: "not_applicable", label: "N/A" },
              ]}
              label="What action did you take on your Android advertising ID?"
              testId="input-android-ad-id"
            />
          )}

          {showApple && (
            <RadioPills
              value={results.iosATTSetting}
              onChange={(v: IosATT) => updateResults("accountDevice", { iosATTSetting: v })}
              options={[
                { value: "allow_apps_to_request", label: "Apps can request" },
                { value: "blocked", label: "Blocked" },
                { value: "unsure", label: "Unsure" },
                { value: "not_applicable", label: "N/A" },
              ]}
              label="What is your iOS App Tracking Transparency setting?"
              helperText="Settings > Privacy & Security > Tracking"
              testId="input-ios-att"
            />
          )}
        </div>

        <StepNavigation />
      </StepCard>
    </div>
  );
}
