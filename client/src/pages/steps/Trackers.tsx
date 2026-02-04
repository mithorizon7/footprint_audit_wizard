import { useWizard } from '@/context/WizardContext';
import { useI18n } from '@/context/I18nContext';
import { StepCard } from '@/components/wizard/StepCard';
import { ExternalLinkCard } from '@/components/wizard/ExternalLinkCard';
import { InstructionBlock } from '@/components/wizard/InstructionBlock';
import { NumberStepper } from '@/components/wizard/NumberStepper';
import { RadioPills } from '@/components/wizard/RadioPills';
import { StepNavigation } from '@/components/wizard/StepNavigation';
import { TrackersEducational } from '@/components/wizard/EducationalContent';
import { Eye, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { YesNo, YesNoUnsure, SiteCategory } from '@shared/schema';

export default function Trackers() {
  const { data, updateResults, isFictional, tryLiveTools } = useWizard();
  const { t } = useI18n();
  const results = data.results.trackers;
  const showExternalLinks = !isFictional || tryLiveTools;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
      <StepCard
        stepNumber={2}
        title={t.trackers.title}
        concept={t.trackers.concept}
        outcomePreview={t.trackers.outcomePreview}
        whyItMatters={t.trackers.whyItMatters}
        pitfalls={t.trackers.pitfalls}
      >
        <TrackersEducational content={t.trackers.educationalContent} />

        <InstructionBlock
          title={t.instructions.whatToDo}
          instructions={[
            t.instructions.trackers1,
            t.instructions.trackers2,
            t.instructions.trackers3,
          ]}
        />

        {showExternalLinks && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
              {t.trackers.externalTool}
            </h3>
            <ExternalLinkCard
              title={t.externalTools.blacklightTitle}
              description={t.externalTools.blacklightDesc}
              url="https://themarkup.org/blacklight"
              icon={<Eye className="w-5 h-5" />}
              testId="link-blacklight"
            />
            <p className="text-sm text-muted-foreground">{t.trackers.blacklightTip}</p>
          </div>
        )}

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide flex items-center gap-2">
            <FileText className="w-4 h-4" />
            {t.trackers.recordFindings}
          </h3>

          <RadioPills
            value={results.blacklightRun}
            onChange={(v: YesNo) => updateResults('trackers', { blacklightRun: v })}
            options={[
              { value: 'yes', label: t.common.yes },
              { value: 'no', label: t.common.no },
            ]}
            label={t.trackers.blacklightRunQuestion}
            testId="input-blacklight-run"
          />

          <RadioPills
            value={results.siteCategoryScanned}
            onChange={(v: SiteCategory) => updateResults('trackers', { siteCategoryScanned: v })}
            options={[
              { value: 'news', label: t.siteCategories.news },
              { value: 'shopping', label: t.siteCategories.shopping },
              { value: 'social', label: t.siteCategories.social },
              { value: 'health', label: t.siteCategories.health },
              { value: 'other', label: t.siteCategories.other },
            ]}
            label={t.trackers.siteCategoryQuestion}
            testId="input-site-category"
          />

          <NumberStepper
            value={results.trackerCount}
            onChange={(v) => updateResults('trackers', { trackerCount: v })}
            min={0}
            max={100}
            label={t.trackers.trackerCountQuestion}
            helperText={t.trackers.trackerCountHelper}
            emptyLabel={t.metrics.valueNotAnswered}
            showPlusAtMax={false}
            testId="input-tracker-count"
          />

          <RadioPills
            value={results.thirdPartyCookiesFlagged}
            onChange={(v: YesNoUnsure) =>
              updateResults('trackers', { thirdPartyCookiesFlagged: v })
            }
            options={[
              { value: 'yes', label: t.common.yes },
              { value: 'no', label: t.common.no },
              { value: 'unsure', label: t.common.unsure },
            ]}
            label={t.trackers.cookiesFlaggedQuestion}
            testId="input-cookies-flagged"
          />

          <RadioPills
            value={results.sessionRecordingFlagged}
            onChange={(v: YesNoUnsure) => updateResults('trackers', { sessionRecordingFlagged: v })}
            options={[
              { value: 'yes', label: t.common.yes },
              { value: 'no', label: t.common.no },
              { value: 'unsure', label: t.common.unsure },
            ]}
            label={t.trackers.sessionRecordingQuestion}
            helperText={t.trackers.sessionRecordingHelper}
            testId="input-session-recording"
          />

          <RadioPills
            value={results.keyLoggingFlagged}
            onChange={(v: YesNoUnsure) => updateResults('trackers', { keyLoggingFlagged: v })}
            options={[
              { value: 'yes', label: t.common.yes },
              { value: 'no', label: t.common.no },
              { value: 'unsure', label: t.common.unsure },
            ]}
            label={t.trackers.keyLoggingQuestion}
            helperText={t.trackers.keyLoggingHelper}
            testId="input-keylogging"
          />

          <RadioPills
            value={results.fingerprintingFlagged}
            onChange={(v: YesNoUnsure) => updateResults('trackers', { fingerprintingFlagged: v })}
            options={[
              { value: 'yes', label: t.common.yes },
              { value: 'no', label: t.common.no },
              { value: 'unsure', label: t.common.unsure },
            ]}
            label={t.trackers.fingerprintingQuestion}
            helperText={t.trackers.fingerprintingHelper}
            testId="input-fingerprinting"
          />
        </div>

        <StepNavigation />
      </StepCard>
    </div>
  );
}
