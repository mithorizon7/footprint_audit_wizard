import { useWizard } from "@/context/WizardContext";
import { useI18n } from "@/context/I18nContext";
import { StepCard } from "@/components/wizard/StepCard";
import { ExternalLinkCard } from "@/components/wizard/ExternalLinkCard";
import { InstructionBlock } from "@/components/wizard/InstructionBlock";
import { NumberStepper } from "@/components/wizard/NumberStepper";
import { RadioPills } from "@/components/wizard/RadioPills";
import { StepNavigation } from "@/components/wizard/StepNavigation";
import { PublicExposureEducational } from "@/components/wizard/EducationalContent";
import { Search, FileText, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { YesNoUnsure, YesNo } from "@shared/schema";

export default function PublicExposure() {
  const { data, updateResults, isFictional, tryLiveTools } = useWizard();
  const { t } = useI18n();
  const results = data.results.publicExposure;
  const showExternalLinks = !isFictional || tryLiveTools;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <StepCard
        stepNumber={1}
        title={t.publicExposure.title}
        concept={t.publicExposure.concept}
        whyItMatters={t.publicExposure.whyItMatters}
      >
        <PublicExposureEducational content={t.publicExposure.educationalContent} />

        <InstructionBlock
          title={t.instructions.whatToDo}
          instructions={[
            t.instructions.publicExposure1,
            t.instructions.publicExposure2,
            t.instructions.publicExposure3,
          ]}
        />

        {showExternalLinks && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
              {t.publicExposure.externalTools}
            </h3>
            <div className="space-y-4">
              <ExternalLinkCard
                title={t.externalTools.googleResultsTitle}
                description={t.externalTools.googleResultsDesc}
                url="https://myactivity.google.com/results-about-you"
                icon={<Search className="w-5 h-5" />}
                testId="link-google-results"
              />
              <ExternalLinkCard
                title={t.externalTools.findContactTitle}
                description={t.externalTools.findContactDesc}
                url="https://support.google.com/websearch/answer/12719076?hl=en"
                icon={<Search className="w-5 h-5" />}
                testId="link-google-find-contact"
              />
              <ExternalLinkCard
                title={t.externalTools.requestRemovalTitle}
                description={t.externalTools.requestRemovalDesc}
                url="https://support.google.com/websearch/answer/9673730?hl=en"
                icon={<Shield className="w-5 h-5" />}
                testId="link-google-removal"
              />
            </div>
          </div>
        )}

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide flex items-center gap-2">
            <FileText className="w-4 h-4" />
            {t.publicExposure.recordFindings}
          </h3>

          <NumberStepper
            value={results.searchResultPagesWithPersonalInfo}
            onChange={(v) => updateResults("publicExposure", { searchResultPagesWithPersonalInfo: v })}
            min={0}
            max={5}
            label={t.publicExposure.searchPagesQuestion}
            helperText={t.publicExposure.searchPagesHelper}
            testId="input-search-pages"
          />

          <RadioPills
            value={results.peopleSearchSitesFound}
            onChange={(v: YesNoUnsure) => updateResults("publicExposure", { peopleSearchSitesFound: v })}
            options={[
              { value: "yes", label: t.common.yes },
              { value: "no", label: t.common.no },
              { value: "unsure", label: t.common.unsure },
            ]}
            label={t.publicExposure.peopleSearchQuestion}
            testId="input-people-search"
          />

          <RadioPills
            value={results.googleResultsAboutYouVisited}
            onChange={(v: YesNo) => updateResults("publicExposure", { googleResultsAboutYouVisited: v })}
            options={[
              { value: "yes", label: t.common.yes },
              { value: "no", label: t.common.no },
            ]}
            label={t.publicExposure.googleVisitedQuestion}
            testId="input-google-visited"
          />

          <RadioPills
            value={results.googleRemovalRequested}
            onChange={(v) =>
              updateResults("publicExposure", {
                googleRemovalRequested: v as "yes" | "no" | "not_applicable",
              })
            }
            options={[
              { value: "yes", label: t.common.yes },
              { value: "no", label: t.common.no },
              { value: "not_applicable", label: t.adSettings.notApplicable },
            ]}
            label={t.publicExposure.removalRequestedQuestion}
            testId="input-removal-requested"
          />
        </div>

        <StepNavigation showPrevious={false} />
      </StepCard>
    </div>
  );
}
