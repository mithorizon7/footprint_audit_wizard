import { useWizard } from '@/context/WizardContext';
import { useI18n } from '@/context/I18nContext';
import { StepCard } from '@/components/wizard/StepCard';
import { ExternalLinkCard } from '@/components/wizard/ExternalLinkCard';
import { InstructionBlock } from '@/components/wizard/InstructionBlock';
import { RadioPills } from '@/components/wizard/RadioPills';
import { StepNavigation } from '@/components/wizard/StepNavigation';
import { FingerprintingEducational } from '@/components/wizard/EducationalContent';
import { Fingerprint, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { YesNo, YesNoUnsure, TrackingProtection } from '@shared/schema';

export default function FingerprintingStep() {
  const { data, updateResults, isFictional, tryLiveTools } = useWizard();
  const { t } = useI18n();
  const results = data.results.fingerprinting;
  const showExternalLinks = !isFictional || tryLiveTools;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <StepCard
        stepNumber={3}
        title={t.fingerprinting.title}
        concept={t.fingerprinting.concept}
        outcomePreview={t.fingerprinting.outcomePreview}
        whyItMatters={t.fingerprinting.whyItMatters}
        pitfalls={t.fingerprinting.pitfalls}
      >
        <FingerprintingEducational content={t.fingerprinting.educationalContent} />

        <InstructionBlock
          title={t.instructions.whatToDo}
          instructions={[
            t.instructions.fingerprinting1,
            t.instructions.fingerprinting2,
            t.instructions.fingerprinting3,
          ]}
        />

        {showExternalLinks && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
              {t.fingerprinting.externalTools}
            </h3>
            <div className="space-y-4">
              <ExternalLinkCard
                title={t.externalTools.effCoverTracksTitle}
                description={t.externalTools.effCoverTracksDesc}
                url="https://coveryourtracks.eff.org/"
                icon={<Fingerprint className="w-5 h-5" />}
                testId="link-eff-coveryourtracks"
              />
              <ExternalLinkCard
                title={t.externalTools.effExplainerTitle}
                description={t.externalTools.effExplainerDesc}
                url="https://www.eff.org/pages/cover-your-tracks"
                icon={<Fingerprint className="w-5 h-5" />}
                testId="link-eff-explainer"
              />
            </div>
          </div>
        )}

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide flex items-center gap-2">
            <FileText className="w-4 h-4" />
            {t.fingerprinting.whatToLookFor}
          </h3>

          <RadioPills
            value={results.effTestRun}
            onChange={(v: YesNo) => updateResults('fingerprinting', { effTestRun: v })}
            options={[
              { value: 'yes', label: t.common.yes },
              { value: 'no', label: t.common.no },
            ]}
            label={t.fingerprinting.effRunQuestion}
            testId="input-eff-run"
          />

          <RadioPills
            value={results.browserUnique}
            onChange={(v: YesNoUnsure) => updateResults('fingerprinting', { browserUnique: v })}
            options={[
              { value: 'yes', label: t.common.yes },
              { value: 'no', label: t.common.no },
              { value: 'unsure', label: t.common.unsure },
            ]}
            label={t.fingerprinting.browserUniqueQuestion}
            helperText={t.fingerprinting.browserUniqueHelper}
            testId="input-browser-unique"
          />

          <RadioPills
            value={results.trackingProtection}
            onChange={(v: TrackingProtection) =>
              updateResults('fingerprinting', { trackingProtection: v })
            }
            options={[
              { value: 'strong', label: t.trackingProtection.strong },
              { value: 'partial', label: t.trackingProtection.partial },
              { value: 'weak', label: t.trackingProtection.weak },
              { value: 'unsure', label: t.common.unsure },
            ]}
            label={t.fingerprinting.trackingProtectionQuestion}
            helperText={t.fingerprinting.trackingProtectionHelper}
            testId="input-tracking-protection"
          />
        </div>

        <StepNavigation />
      </StepCard>
    </div>
  );
}
