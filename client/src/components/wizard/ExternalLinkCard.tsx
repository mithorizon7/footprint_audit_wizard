import { ExternalLink, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useWizard } from '@/context/WizardContext';
import { useI18n } from '@/context/I18nContext';
import { ToolFallbackBlock } from '@/components/wizard/ToolFallbackBlock';

interface ExternalLinkCardProps {
  title: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
  testId?: string;
}

export function ExternalLinkCard({ title, description, url, icon, testId }: ExternalLinkCardProps) {
  const { isFictional, tryLiveTools } = useWizard();
  const { t } = useI18n();
  const isCollapsed = isFictional && !tryLiveTools;
  const fallbackId = testId || `link-${title.toLowerCase().replace(/\s+/g, '-')}`;

  if (isCollapsed) {
    return (
      <Card className="card-plain p-4 border border-dashed border-border/70 bg-muted/40">
        <div className="flex items-start gap-4">
          {icon && (
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-muted/70 flex items-center justify-center text-muted-foreground">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-muted-foreground">{title}</h4>
              <Lock className="w-3 h-3 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground/70 mt-1 line-clamp-2">
              {t.common.demoModeNotice}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            disabled
            className="shrink-0 opacity-50"
            data-testid={testId || `link-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <span className="hidden sm:inline mr-2">{t.common.demo}</span>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="card-plain p-4 border border-dashed border-border/70 bg-card/50">
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          {icon && (
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/70 flex items-center justify-center text-accent-foreground">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
          </div>
          <Button variant="outline" size="sm" asChild className="shrink-0" data-testid={fallbackId}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline mr-2">{t.common.open}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
        <ToolFallbackBlock className="mt-0" testIdSuffix={fallbackId} />
      </div>
    </Card>
  );
}
