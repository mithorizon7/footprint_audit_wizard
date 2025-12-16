import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ExternalLinkCardProps {
  title: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
  testId?: string;
}

export function ExternalLinkCard({ title, description, url, icon, testId }: ExternalLinkCardProps) {
  return (
    <Card className="p-4 border-2 border-dashed bg-transparent">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent flex items-center justify-center text-accent-foreground">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="shrink-0"
          data-testid={testId || `link-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            <span className="hidden sm:inline mr-2">Open</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </Card>
  );
}
