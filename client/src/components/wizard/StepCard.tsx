import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertBox } from "./AlertBox";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/context/I18nContext";

interface StepCardProps {
  stepNumber: number;
  title: string;
  concept: string;
  whyItMatters?: string;
  pitfalls?: string[];
  children: React.ReactNode;
  className?: string;
}

export function StepCard({
  stepNumber,
  title,
  concept,
  whyItMatters,
  pitfalls,
  children,
  className,
}: StepCardProps) {
  const { t, format } = useI18n();

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="space-y-4">
        <div className="flex items-start gap-3 flex-wrap">
          <Badge variant="secondary" className="shrink-0" data-testid={`badge-step-${stepNumber}`}>
            {format(t.common.stepNumber, { step: stepNumber })}
          </Badge>
          <CardTitle className="text-2xl font-serif">{title}</CardTitle>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">{concept}</p>

        {whyItMatters && (
          <AlertBox severity="info">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{whyItMatters}</span>
            </div>
          </AlertBox>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        {children}

        {pitfalls && pitfalls.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="pitfalls" className="border-b-0">
              <AccordionTrigger
                className="text-sm text-muted-foreground hover:text-foreground py-2"
                data-testid="accordion-pitfalls"
              >
                {t.common.commonPitfalls}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {pitfalls.map((pitfall, index) => (
                    <li key={index}>{pitfall}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
}
