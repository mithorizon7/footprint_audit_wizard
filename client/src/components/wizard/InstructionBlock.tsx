import { cn } from "@/lib/utils";
import { ClipboardList } from "lucide-react";

interface InstructionBlockProps {
  title: string;
  instructions: string[];
  className?: string;
}

export function InstructionBlock({ title, instructions, className }: InstructionBlockProps) {
  return (
    <div className={cn("bg-muted/50 rounded-md p-4 space-y-3", className)}>
      <div className="flex items-center gap-2">
        <ClipboardList className="w-4 h-4 text-primary" />
        <h4 className="text-sm font-medium text-foreground">{title}</h4>
      </div>
      <ol className="space-y-2 text-sm text-muted-foreground">
        {instructions.map((instruction, index) => (
          <li key={index} className="flex gap-2">
            <span className="font-medium text-primary shrink-0">{index + 1}.</span>
            <span>{instruction}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
