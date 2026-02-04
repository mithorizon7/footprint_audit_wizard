import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

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
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-card/90 via-card/70 to-secondary/70 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_0%_0%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="relative w-full items-center justify-between rounded-3xl border border-transparent bg-background/50 px-5 py-4 text-left shadow-[inset_0_0_0_1px_hsl(var(--border)/0.4)] hover:bg-background/70"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
                <BookOpen className="w-5 h-5" />
              </span>
              <span className="text-base font-semibold text-foreground">{sectionTitle}</span>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/70 shadow-sm">
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="relative px-5 pb-6 pt-4">{children}</div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

interface SectionGridProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionGrid({ children, className }: SectionGridProps) {
  return <div className={cn('grid gap-6 lg:grid-cols-2', className)}>{children}</div>;
}

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({ title, children, className }: ContentSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-5 shadow-sm',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_60%)]" />
      <div className="relative space-y-3">
        <SectionTitle>{title}</SectionTitle>
        {children}
      </div>
    </section>
  );
}

interface BulletListProps {
  items: string[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative rounded-2xl border border-border/60 bg-background/70 px-4 py-3 pl-9 text-sm text-muted-foreground leading-relaxed shadow-sm"
        >
          <span className="absolute left-3 top-4 h-2.5 w-2.5 rounded-full bg-primary/60" />
          {item}
        </li>
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
  className?: string;
}

export function SourcesList({ title, sources, className }: SourcesListProps) {
  if (!sources.length) return null;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-5 shadow-sm',
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-14 -top-16 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      <div className="relative space-y-3">
        <SectionTitle>{title}</SectionTitle>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {sources.map((source) => (
            <li key={source.url} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70" />
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
    </div>
  );
}

interface HighlightBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function HighlightBox({ children, className }: HighlightBoxProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background/80 to-background/60 p-5 shadow-sm',
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{children}</p>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-lg font-semibold font-serif text-foreground tracking-tight">
      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
        {children}
      </span>
    </h4>
  );
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
      <SectionGrid>
        <ContentSection title={content.industryTitle}>
          <Paragraph>{content.industryParagraph1}</Paragraph>
          <Paragraph>{content.industryParagraph2}</Paragraph>
        </ContentSection>

        <ContentSection title={content.dataSourcesTitle}>
          <Paragraph>{content.dataSourcesParagraph}</Paragraph>
          <BulletList items={content.dataSourcesList} />
          <Paragraph>{content.dataSourcesConclusion}</Paragraph>
        </ContentSection>

        <ContentSection title={content.meaningTitle}>
          <Paragraph>{content.meaningParagraph}</Paragraph>
          <BulletList items={content.meaningList} />
        </ContentSection>

        <HighlightBox className="lg:col-span-2">
          <Paragraph>{content.activityPreview}</Paragraph>
        </HighlightBox>

        <SourcesList
          className="lg:col-span-2"
          title={content.sourcesTitle}
          sources={content.sources}
        />
      </SectionGrid>
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
      <SectionGrid>
        <ContentSection title={content.introTitle}>
          <Paragraph>{content.introParagraph1}</Paragraph>
          <Paragraph>{content.introParagraph2}</Paragraph>
        </ContentSection>

        <ContentSection title={content.trackingTypesTitle} className="lg:col-span-2">
          <Paragraph>{content.trackingTypesIntro}</Paragraph>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {trackingTypesList.map((type, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-4 shadow-sm"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold text-foreground">{type.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title={content.beyondAdsTitle}>
          <Paragraph>{content.beyondAdsParagraph}</Paragraph>
          <BulletList items={content.beyondAdsList} />
        </ContentSection>

        <HighlightBox className="lg:col-span-2">
          <Paragraph>{content.activityPreview}</Paragraph>
        </HighlightBox>

        <SourcesList
          className="lg:col-span-2"
          title={content.sourcesTitle}
          sources={content.sources}
        />
      </SectionGrid>
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
      <SectionGrid>
        <ContentSection title={content.introTitle}>
          <Paragraph>{content.introParagraph}</Paragraph>
        </ContentSection>

        <ContentSection title={content.howItWorksTitle}>
          <Paragraph>{content.howItWorksParagraph}</Paragraph>
          <BulletList items={content.attributesList} />
        </ContentSection>

        <ContentSection title={content.statisticsTitle}>
          <Paragraph>{content.statisticsParagraph}</Paragraph>
        </ContentSection>

        <ContentSection title={content.privateBrowsingTitle}>
          <Paragraph>{content.privateBrowsingParagraph1}</Paragraph>
          <Paragraph>{content.privateBrowsingParagraph2}</Paragraph>
        </ContentSection>

        <HighlightBox className="lg:col-span-2">
          <Paragraph>{content.activityPreview}</Paragraph>
        </HighlightBox>

        <SourcesList
          className="lg:col-span-2"
          title={content.sourcesTitle}
          sources={content.sources}
        />
      </SectionGrid>
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
      <SectionGrid>
        <ContentSection title={content.introTitle}>
          <Paragraph>{content.introParagraph}</Paragraph>
        </ContentSection>

        <ContentSection title={content.howItWorksTitle}>
          <Paragraph>{content.howItWorksParagraph}</Paragraph>
          <BulletList items={content.howItWorksList} />
        </ContentSection>

        <ContentSection title={content.scaleTitle}>
          <Paragraph>{content.scaleParagraph}</Paragraph>
        </ContentSection>

        <ContentSection title={content.attTitle}>
          <Paragraph>{content.attParagraph1}</Paragraph>
          <Paragraph>{content.attParagraph2}</Paragraph>
        </ContentSection>

        <ContentSection title={content.activityPreviewTitle} className="lg:col-span-2">
          <BulletList items={content.activityPreviewList} />
        </ContentSection>

        <HighlightBox className="lg:col-span-2">
          <Paragraph>{content.activityPreviewConclusion}</Paragraph>
        </HighlightBox>

        <SourcesList
          className="lg:col-span-2"
          title={content.sourcesTitle}
          sources={content.sources}
        />
      </SectionGrid>
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
      <SectionGrid>
        <ContentSection title={content.breachesTitle}>
          <Paragraph>{content.breachesParagraph1}</Paragraph>
          <Paragraph>{content.breachesParagraph2}</Paragraph>
        </ContentSection>

        <ContentSection title={content.cookiesTitle}>
          <Paragraph>{content.cookiesParagraph}</Paragraph>
          <BulletList items={content.cookiesList} />
        </ContentSection>

        <ContentSection title={content.blockingTitle}>
          <Paragraph>{content.blockingParagraph1}</Paragraph>
          <Paragraph>{content.blockingParagraph2}</Paragraph>
          <BulletList items={content.blockingBrowsers} />
        </ContentSection>

        <ContentSection title={content.hibpTitle}>
          <Paragraph>{content.hibpParagraph1}</Paragraph>
          <Paragraph>{content.hibpParagraph2}</Paragraph>
        </ContentSection>

        <ContentSection title={content.activityPreviewTitle} className="lg:col-span-2">
          <BulletList items={content.activityPreviewList} />
        </ContentSection>

        <HighlightBox className="lg:col-span-2">
          <Paragraph>{content.activityPreviewConclusion}</Paragraph>
        </HighlightBox>

        <SourcesList
          className="lg:col-span-2"
          title={content.sourcesTitle}
          sources={content.sources}
        />
      </SectionGrid>
    </EducationalContent>
  );
}
