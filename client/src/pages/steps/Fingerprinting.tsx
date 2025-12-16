import { useWizard } from "@/context/WizardContext";
import { StepCard } from "@/components/wizard/StepCard";
import { ExternalLinkCard } from "@/components/wizard/ExternalLinkCard";
import { RadioPills } from "@/components/wizard/RadioPills";
import { StepNavigation } from "@/components/wizard/StepNavigation";
import { ToolFallbackBlock } from "@/components/wizard/ToolFallbackBlock";
import { Fingerprint, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AlertBox } from "@/components/wizard/AlertBox";
import type { YesNo, YesNoUnsure, TrackingProtection } from "@shared/schema";

export default function FingerprintingStep() {
  const { data, updateResults } = useWizard();
  const results = data.results.fingerprinting;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <StepCard
        stepNumber={3}
        title="Fingerprinting"
        concept="Clearing cookies doesn't make you invisible. Browser fingerprinting can still identify your device through unique combinations of settings, fonts, and hardware."
        whyItMatters="Even in 'private browsing' mode, your browser's unique characteristics (screen size, installed fonts, timezone, WebGL settings) can create a fingerprint that identifies you across websites."
        pitfalls={[
          "Uniqueness can change depending on browser extensions and settings.",
          "Private browsing often does not make your browser non-unique.",
          "Some privacy tools can actually make you MORE unique (ironic but true).",
        ]}
      >
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
            External Tool
          </h3>
          <ExternalLinkCard
            title="EFF Cover Your Tracks"
            description="Test how well your browser protects you from tracking and fingerprinting"
            url="https://coveryourtracks.eff.org/"
            icon={<Fingerprint className="w-5 h-5" />}
            testId="link-eff-coveryourtracks"
          />
        </div>

        <AlertBox severity="info" className="mt-6">
          <strong>What to look for:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>"Your browser fingerprint appears to be unique"</strong> — means you're easily
              identifiable
            </li>
            <li>
              <strong>Tracking Protection</strong> — "Strong protection" is good, "Some protection"
              is okay, "No protection" means trackers can follow you
            </li>
          </ul>
        </AlertBox>

        <ToolFallbackBlock />

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Record Your Findings
          </h3>

          <RadioPills
            value={results.effTestRun}
            onChange={(v: YesNo) => updateResults("fingerprinting", { effTestRun: v })}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
            label="Did you run the EFF Cover Your Tracks test?"
            testId="input-eff-run"
          />

          <RadioPills
            value={results.browserUnique}
            onChange={(v: YesNoUnsure) => updateResults("fingerprinting", { browserUnique: v })}
            options={[
              { value: "yes", label: "Yes, unique" },
              { value: "no", label: "No, not unique" },
              { value: "unsure", label: "Unsure" },
            ]}
            label="Does the test say your browser fingerprint is unique?"
            helperText="Look for 'Your browser fingerprint appears to be unique' or similar wording"
            testId="input-browser-unique"
          />

          <RadioPills
            value={results.trackingProtection}
            onChange={(v: TrackingProtection) =>
              updateResults("fingerprinting", { trackingProtection: v })
            }
            options={[
              { value: "strong", label: "Strong" },
              { value: "partial", label: "Partial" },
              { value: "weak", label: "Weak/None" },
              { value: "unsure", label: "Unsure" },
            ]}
            label="What level of tracking protection did the test report?"
            helperText="This indicates how well your browser blocks known trackers"
            testId="input-tracking-protection"
          />
        </div>

        <StepNavigation />
      </StepCard>
    </div>
  );
}
