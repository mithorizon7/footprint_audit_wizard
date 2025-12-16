import { useWizard } from "@/context/WizardContext";
import { StepCard } from "@/components/wizard/StepCard";
import { ExternalLinkCard } from "@/components/wizard/ExternalLinkCard";
import { NumberStepper } from "@/components/wizard/NumberStepper";
import { RadioPills } from "@/components/wizard/RadioPills";
import { StepNavigation } from "@/components/wizard/StepNavigation";
import { Eye, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { YesNo, YesNoUnsure, SiteCategory } from "@shared/schema";

export default function Trackers() {
  const { data, updateResults } = useWizard();
  const results = data.results.trackers;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <StepCard
        stepNumber={2}
        title="Tracker Visibility"
        concept="One normal webpage can load dozens of third parties. Tracking isn't just 'cookies' — it includes session recording, fingerprinting, and more."
        whyItMatters="When you visit a website, invisible scripts often record your behavior, share data with advertisers, and build a profile of your interests — often without your knowledge."
        pitfalls={[
          "Some sites block automated scanning; if Blacklight fails, try another site.",
          "Results are a snapshot; they can change day to day.",
          "Avoid scanning health portals or internal company systems.",
        ]}
      >
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
            External Tool
          </h3>
          <ExternalLinkCard
            title="Blacklight by The Markup"
            description="Real-time privacy inspector that reveals trackers, cookies, and surveillance tech on any website"
            url="https://themarkup.org/blacklight"
            icon={<Eye className="w-5 h-5" />}
            testId="link-blacklight"
          />
          <p className="text-sm text-muted-foreground">
            Tip: Try scanning a news site or shopping site you frequently visit. Avoid
            sensitive sites like health portals or banking.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Record Your Findings
          </h3>

          <RadioPills
            value={results.blacklightRun}
            onChange={(v: YesNo) => updateResults("trackers", { blacklightRun: v })}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
            label="Did you run the Blacklight scan?"
            testId="input-blacklight-run"
          />

          <RadioPills
            value={results.siteCategoryScanned}
            onChange={(v: SiteCategory) => updateResults("trackers", { siteCategoryScanned: v })}
            options={[
              { value: "news", label: "News" },
              { value: "shopping", label: "Shopping" },
              { value: "social", label: "Social" },
              { value: "health", label: "Health" },
              { value: "other", label: "Other" },
            ]}
            label="What type of site did you scan?"
            testId="input-site-category"
          />

          <NumberStepper
            value={results.trackerCount ?? 0}
            onChange={(v) => updateResults("trackers", { trackerCount: v })}
            min={0}
            max={100}
            label="How many trackers were detected?"
            helperText="Enter the number shown in Blacklight's summary"
            testId="input-tracker-count"
          />

          <RadioPills
            value={results.thirdPartyCookiesFlagged}
            onChange={(v: YesNoUnsure) => updateResults("trackers", { thirdPartyCookiesFlagged: v })}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "unsure", label: "Unsure" },
            ]}
            label="Were third-party cookies flagged?"
            testId="input-cookies-flagged"
          />

          <RadioPills
            value={results.sessionRecordingFlagged}
            onChange={(v: YesNoUnsure) => updateResults("trackers", { sessionRecordingFlagged: v })}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "unsure", label: "Unsure" },
            ]}
            label="Was session recording detected?"
            helperText="Session recording captures mouse movements, clicks, and keystrokes"
            testId="input-session-recording"
          />

          <RadioPills
            value={results.keyLoggingFlagged}
            onChange={(v: YesNoUnsure) => updateResults("trackers", { keyLoggingFlagged: v })}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "unsure", label: "Unsure" },
            ]}
            label="Was key logging detected?"
            helperText="Key logging captures what you type into forms"
            testId="input-keylogging"
          />

          <RadioPills
            value={results.fingerprintingFlagged}
            onChange={(v: YesNoUnsure) => updateResults("trackers", { fingerprintingFlagged: v })}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "unsure", label: "Unsure" },
            ]}
            label="Was fingerprinting detected?"
            helperText="Fingerprinting identifies your browser without cookies"
            testId="input-fingerprinting"
          />
        </div>

        <StepNavigation />
      </StepCard>
    </div>
  );
}
