import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useWizard } from "@/context/WizardContext";
import { useToast } from "@/hooks/use-toast";

export function PanicButton() {
  const { resetWizard } = useWizard();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleClear = () => {
    resetWizard();
    setOpen(false);
    toast({
      title: "Data cleared",
      description: "All your lab data has been removed from this device.",
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          data-testid="button-panic"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear my lab data
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Clear all lab data?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete all your audit progress and recorded data from this
            device. You'll start fresh with a new audit. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel data-testid="button-panic-cancel">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleClear}
            className="bg-destructive text-destructive-foreground"
            data-testid="button-panic-confirm"
          >
            Yes, clear everything
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
