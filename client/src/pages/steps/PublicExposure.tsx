import { useWizard } from "@/context/WizardContext";
import { StepCard } from "@/components/wizard/StepCard";
import { ExternalLinkCard } from "@/components/wizard/ExternalLinkCard";
import { NumberStepper } from "@/components/wizard/NumberStepper";
import { RadioPills } from "@/components/wizard/RadioPills";
import { AlertBox } from "@/components/wizard/AlertBox";
import { StepNavigation } from "@/components/wizard/StepNavigation";
import { Search, FileText, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { YesNoUnsure, YesNo } from "@shared/schema";

export default function PublicExposure() {
  const { data, updateResults, isFictional } = useWizard();
  const results = data.results.publicExposure;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <StepCard
        stepNumber={1}
        title="Public Exposure"
        concept="Some personal info is publicly discoverable via search. 'Privacy' isn't only about what you post yourself."
        whyItMatters="Data brokers and people-search sites aggregate public records, social media, and other sources. Even without your knowledge, your contact info may be visible to anyone with a search engine."
        pitfalls={[
          "Search results vary by country/language.",
          "If you're on a work computer, you may be logged into corporate Google accounts.",
          "Incognito mode shows more 'public' results since it's not personalized to you.",
        ]}
      >
        <AlertBox severity="critical" className="mb-6">
          <strong>Don't paste sensitive info into this wizard.</strong> Only enter information
          directly into your own browser's search engine.
        </AlertBox>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
            External Tools
          </h3>
          <div className="space-y-4">
            <ExternalLinkCard
              title="Google 'Results about you'"
              description="See what personal info Google has found about you in search results"
              url="https://myactivity.google.com/results-about-you"
              icon={<Search className="w-5 h-5" />}
              testId="link-google-results"
            />
            <ExternalLinkCard
              title="Find Your Personal Contact Info"
              description="Learn how to find your personal contact info in Google Search results"
              url="https://support.google.com/websearch/answer/12719076?hl=en"
              icon={<Search className="w-5 h-5" />}
              testId="link-google-find-contact"
            />
            <ExternalLinkCard
              title="Request Removal"
              description="Ask Google to remove results containing your personal contact info"
              url="https://support.google.com/websearch/answer/9673730?hl=en"
              icon={<Shield className="w-5 h-5" />}
              testId="link-google-removal"
            />
          </div>
        </div>

        {!isFictional && (
          <AlertBox severity="info" className="mt-6">
            <strong>Self-search prompts:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Search your name + city</li>
              <li>Search your email address (in quotes)</li>
              <li>Search your phone number</li>
            </ul>
          </AlertBox>
        )}

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Record Your Findings
          </h3>

          <NumberStepper
            value={results.searchResultPagesWithPersonalInfo}
            onChange={(v) => updateResults("publicExposure", { searchResultPagesWithPersonalInfo: v })}
            min={0}
            max={5}
            label="How many search result pages contained personal info (address, phone, relatives)?"
            helperText="Count unique pages, not total mentions. Use 5+ if more than 5."
            testId="input-search-pages"
          />

          <RadioPills
            value={results.peopleSearchSitesFound}
            onChange={(v: YesNoUnsure) => updateResults("publicExposure", { peopleSearchSitesFound: v })}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "unsure", label: "Unsure" },
            ]}
            label="Did you find yourself on people-search sites (e.g., Whitepages, Spokeo, BeenVerified)?"
            testId="input-people-search"
          />

          <RadioPills
            value={results.googleResultsAboutYouVisited}
            onChange={(v: YesNo) => updateResults("publicExposure", { googleResultsAboutYouVisited: v })}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
            label="Did you visit Google's 'Results about you' dashboard?"
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
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "not_applicable", label: "N/A" },
            ]}
            label="Did you request removal of any search results from Google?"
            testId="input-removal-requested"
          />
        </div>

        <StepNavigation showPrevious={false} />
      </StepCard>
    </div>
  );
}
