import { AlertCircle, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertSeverity = "info" | "warning" | "critical";

interface AlertBoxProps {
  severity: AlertSeverity;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const severityStyles: Record<AlertSeverity, { bg: string; border: string; icon: typeof Info }> = {
  info: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-l-4 border-blue-500",
    icon: Info,
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-l-4 border-amber-500",
    icon: AlertTriangle,
  },
  critical: {
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-l-4 border-red-500",
    icon: AlertCircle,
  },
};

export function AlertBox({ severity, title, children, className }: AlertBoxProps) {
  const styles = severityStyles[severity];
  const Icon = styles.icon;

  return (
    <div className={cn("p-4 rounded-r-md", styles.bg, styles.border, className)}>
      <div className="flex gap-3">
        <Icon
          className={cn(
            "w-5 h-5 flex-shrink-0 mt-0.5",
            severity === "info" && "text-blue-600 dark:text-blue-400",
            severity === "warning" && "text-amber-600 dark:text-amber-400",
            severity === "critical" && "text-red-600 dark:text-red-400"
          )}
        />
        <div className="flex-1 min-w-0">
          {title && (
            <h5
              className={cn(
                "font-medium mb-1",
                severity === "info" && "text-blue-900 dark:text-blue-100",
                severity === "warning" && "text-amber-900 dark:text-amber-100",
                severity === "critical" && "text-red-900 dark:text-red-100"
              )}
            >
              {title}
            </h5>
          )}
          <div
            className={cn(
              "text-sm",
              severity === "info" && "text-blue-800 dark:text-blue-200",
              severity === "warning" && "text-amber-800 dark:text-amber-200",
              severity === "critical" && "text-red-800 dark:text-red-200"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
