import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface EducationalContentProps {
  sectionTitle: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function EducationalContent({
  sectionTitle,
  children,
  defaultOpen = true,
}: EducationalContentProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-8">
      <div className="border border-border rounded-lg bg-muted/30">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between p-4 h-auto hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{sectionTitle}</span>
            </div>
            {isOpen ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-4 pb-4 pt-2 space-y-4 text-sm text-muted-foreground leading-relaxed">
            {children}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

interface BulletListProps {
  items: string[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="list-disc list-outside ml-5 space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

interface SourceLink {
  label: string;
  url: string;
}

interface SourcesListProps {
  title: string;
  sources: SourceLink[];
}

export function SourcesList({ title, sources }: SourcesListProps) {
  if (!sources.length) return null;

  return (
    <div className="pt-2">
      <SectionTitle>{title}</SectionTitle>
      <ul className="list-disc list-outside ml-5 space-y-2">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface HighlightBoxProps {
  children: React.ReactNode;
}

export function HighlightBox({ children }: HighlightBoxProps) {
  return <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">{children}</div>;
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="text-base font-semibold text-foreground mt-6 mb-3">{children}</h4>;
}

// Step-specific educational content components

interface PublicExposureEducationalProps {
  content: {
    sectionTitle: string;
    industryTitle: string;
    industryParagraph1: string;
    industryParagraph2: string;
    dataSourcesTitle: string;
    dataSourcesParagraph: string;
    dataSourcesList: string[];
    dataSourcesConclusion: string;
    meaningTitle: string;
    meaningParagraph: string;
    meaningList: string[];
    activityPreview: string;
    sourcesTitle: string;
    sources: SourceLink[];
  };
}

export function PublicExposureEducational({ content }: PublicExposureEducationalProps) {
  return (
    <EducationalContent sectionTitle={content.sectionTitle}>
      <SectionTitle>{content.industryTitle}</SectionTitle>
      <Paragraph>{content.industryParagraph1}</Paragraph>
      <Paragraph>{content.industryParagraph2}</Paragraph>

      <SectionTitle>{content.dataSourcesTitle}</SectionTitle>
      <Paragraph>{content.dataSourcesParagraph}</Paragraph>
      <BulletList items={content.dataSourcesList} />
      <Paragraph>{content.dataSourcesConclusion}</Paragraph>

      <SectionTitle>{content.meaningTitle}</SectionTitle>
      <Paragraph>{content.meaningParagraph}</Paragraph>
      <BulletList items={content.meaningList} />

      <HighlightBox>
        <Paragraph>{content.activityPreview}</Paragraph>
      </HighlightBox>

      <SourcesList title={content.sourcesTitle} sources={content.sources} />
    </EducationalContent>
  );
}

interface TrackersEducationalProps {
  content: {
    sectionTitle: string;
    introTitle: string;
    introParagraph1: string;
    introParagraph2: string;
    trackingTypesTitle: string;
    trackingTypesIntro: string;
    trackingTypes: {
      adTrackers: { title: string; description: string };
      thirdPartyCookies: { title: string; description: string };
      sessionRecording: { title: string; description: string };
      keystrokeLogging: { title: string; description: string };
      canvasFingerprinting: { title: string; description: string };
      facebookPixel: { title: string; description: string };
      googleAnalytics: { title: string; description: string };
    };
    beyondAdsTitle: string;
    beyondAdsParagraph: string;
    beyondAdsList: string[];
    activityPreview: string;
    sourcesTitle: string;
    sources: SourceLink[];
  };
}

export function TrackersEducational({ content }: TrackersEducationalProps) {
  const trackingTypesList = [
    content.trackingTypes.adTrackers,
    content.trackingTypes.thirdPartyCookies,
    content.trackingTypes.sessionRecording,
    content.trackingTypes.keystrokeLogging,
    content.trackingTypes.canvasFingerprinting,
    content.trackingTypes.facebookPixel,
    content.trackingTypes.googleAnalytics,
  ];

  return (
    <EducationalContent sectionTitle={content.sectionTitle}>
      <SectionTitle>{content.introTitle}</SectionTitle>
      <Paragraph>{content.introParagraph1}</Paragraph>
      <Paragraph>{content.introParagraph2}</Paragraph>

      <SectionTitle>{content.trackingTypesTitle}</SectionTitle>
      <Paragraph>{content.trackingTypesIntro}</Paragraph>
      <div className="space-y-4 mt-4">
        {trackingTypesList.map((type, index) => (
          <div key={index} className="border-l-2 border-muted-foreground/20 pl-4">
            <p className="font-medium text-foreground">
              {index + 1}. {type.title}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{type.description}</p>
          </div>
        ))}
      </div>

      <SectionTitle>{content.beyondAdsTitle}</SectionTitle>
      <Paragraph>{content.beyondAdsParagraph}</Paragraph>
      <BulletList items={content.beyondAdsList} />

      <HighlightBox>
        <Paragraph>{content.activityPreview}</Paragraph>
      </HighlightBox>

      <SourcesList title={content.sourcesTitle} sources={content.sources} />
    </EducationalContent>
  );
}

interface FingerprintingEducationalProps {
  content: {
    sectionTitle: string;
    introTitle: string;
    introParagraph: string;
    howItWorksTitle: string;
    howItWorksParagraph: string;
    attributesList: string[];
    statisticsTitle: string;
    statisticsParagraph: string;
    privateBrowsingTitle: string;
    privateBrowsingParagraph1: string;
    privateBrowsingParagraph2: string;
    activityPreview: string;
    sourcesTitle: string;
    sources: SourceLink[];
  };
}

export function FingerprintingEducational({ content }: FingerprintingEducationalProps) {
  return (
    <EducationalContent sectionTitle={content.sectionTitle}>
      <SectionTitle>{content.introTitle}</SectionTitle>
      <Paragraph>{content.introParagraph}</Paragraph>

      <SectionTitle>{content.howItWorksTitle}</SectionTitle>
      <Paragraph>{content.howItWorksParagraph}</Paragraph>
      <BulletList items={content.attributesList} />

      <SectionTitle>{content.statisticsTitle}</SectionTitle>
      <Paragraph>{content.statisticsParagraph}</Paragraph>

      <SectionTitle>{content.privateBrowsingTitle}</SectionTitle>
      <Paragraph>{content.privateBrowsingParagraph1}</Paragraph>
      <Paragraph>{content.privateBrowsingParagraph2}</Paragraph>

      <HighlightBox>
        <Paragraph>{content.activityPreview}</Paragraph>
      </HighlightBox>

      <SourcesList title={content.sourcesTitle} sources={content.sources} />
    </EducationalContent>
  );
}

interface AccountDeviceEducationalProps {
  content: {
    sectionTitle: string;
    introTitle: string;
    introParagraph: string;
    howItWorksTitle: string;
    howItWorksParagraph: string;
    howItWorksList: string[];
    scaleTitle: string;
    scaleParagraph: string;
    attTitle: string;
    attParagraph1: string;
    attParagraph2: string;
    activityPreviewTitle: string;
    activityPreviewList: string[];
    activityPreviewConclusion: string;
    sourcesTitle: string;
    sources: SourceLink[];
  };
}

export function AccountDeviceEducational({ content }: AccountDeviceEducationalProps) {
  return (
    <EducationalContent sectionTitle={content.sectionTitle}>
      <SectionTitle>{content.introTitle}</SectionTitle>
      <Paragraph>{content.introParagraph}</Paragraph>

      <SectionTitle>{content.howItWorksTitle}</SectionTitle>
      <Paragraph>{content.howItWorksParagraph}</Paragraph>
      <BulletList items={content.howItWorksList} />

      <SectionTitle>{content.scaleTitle}</SectionTitle>
      <Paragraph>{content.scaleParagraph}</Paragraph>

      <SectionTitle>{content.attTitle}</SectionTitle>
      <Paragraph>{content.attParagraph1}</Paragraph>
      <Paragraph>{content.attParagraph2}</Paragraph>

      <SectionTitle>{content.activityPreviewTitle}</SectionTitle>
      <BulletList items={content.activityPreviewList} />

      <HighlightBox>
        <Paragraph>{content.activityPreviewConclusion}</Paragraph>
      </HighlightBox>

      <SourcesList title={content.sourcesTitle} sources={content.sources} />
    </EducationalContent>
  );
}

interface CleanupEducationalProps {
  content: {
    sectionTitle: string;
    breachesTitle: string;
    breachesParagraph1: string;
    breachesParagraph2: string;
    cookiesTitle: string;
    cookiesParagraph: string;
    cookiesList: string[];
    blockingTitle: string;
    blockingParagraph1: string;
    blockingParagraph2: string;
    blockingBrowsers: string[];
    hibpTitle: string;
    hibpParagraph1: string;
    hibpParagraph2: string;
    activityPreviewTitle: string;
    activityPreviewList: string[];
    activityPreviewConclusion: string;
    sourcesTitle: string;
    sources: SourceLink[];
  };
}

export function CleanupEducational({ content }: CleanupEducationalProps) {
  return (
    <EducationalContent sectionTitle={content.sectionTitle}>
      <SectionTitle>{content.breachesTitle}</SectionTitle>
      <Paragraph>{content.breachesParagraph1}</Paragraph>
      <Paragraph>{content.breachesParagraph2}</Paragraph>

      <SectionTitle>{content.cookiesTitle}</SectionTitle>
      <Paragraph>{content.cookiesParagraph}</Paragraph>
      <BulletList items={content.cookiesList} />

      <SectionTitle>{content.blockingTitle}</SectionTitle>
      <Paragraph>{content.blockingParagraph1}</Paragraph>
      <Paragraph>{content.blockingParagraph2}</Paragraph>
      <BulletList items={content.blockingBrowsers} />

      <SectionTitle>{content.hibpTitle}</SectionTitle>
      <Paragraph>{content.hibpParagraph1}</Paragraph>
      <Paragraph>{content.hibpParagraph2}</Paragraph>

      <SectionTitle>{content.activityPreviewTitle}</SectionTitle>
      <BulletList items={content.activityPreviewList} />

      <HighlightBox>
        <Paragraph>{content.activityPreviewConclusion}</Paragraph>
      </HighlightBox>

      <SourcesList title={content.sourcesTitle} sources={content.sources} />
    </EducationalContent>
  );
}
