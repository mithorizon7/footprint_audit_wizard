import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { AlertTriangle, ChevronDown, Smartphone, FlaskConical, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWizard } from '@/context/WizardContext';
import { useI18n } from '@/context/I18nContext';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ToolFallbackBlockProps {
  suggestions?: string[];
  className?: string;
  testIdSuffix?: string;
}

export function ToolFallbackBlock({
  suggestions,
  className,
  testIdSuffix,
}: ToolFallbackBlockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setMode, isFictional } = useWizard();
  const { t } = useI18n();

  const defaultSuggestions = t.toolFallback.suggestions;

  const items = suggestions || defaultSuggestions;
  const fallbackTestId = testIdSuffix
    ? `button-tool-fallback-${testIdSuffix}`
    : 'button-tool-fallback';
  const switchTestId = testIdSuffix
    ? `button-switch-fictional-${testIdSuffix}`
    : 'button-switch-fictional';

  const handleSwitchToFictional = () => {
    if (window.confirm(t.toolFallback.confirmSwitch)) {
      setMode('fictional');
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={cn('mt-4', className)}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-between text-muted-foreground hover:text-foreground p-2 bg-transparent"
          data-testid={fallbackTestId}
        >
          <span className="flex items-center gap-2 text-sm">
            <AlertTriangle className="w-4 h-4" />
            {t.toolFallback.title}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <div className="rounded-xl border border-border/70 bg-card/70 p-4 space-y-3 shadow-sm">
          <p className="text-sm text-muted-foreground">{t.toolFallback.description}</p>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                {index === 0 && <RefreshCw className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                {index === 1 && <Smartphone className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                {index === 2 && <FlaskConical className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                {index > 2 && (
                  <span className="w-4 h-4 mt-0.5 flex-shrink-0 text-center">{index + 1}.</span>
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {!isFictional && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleSwitchToFictional}
              className="mt-2"
              data-testid={switchTestId}
            >
              <FlaskConical className="w-4 h-4 mr-2" />
              {t.toolFallback.switchButton}
            </Button>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
