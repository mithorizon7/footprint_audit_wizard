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
import { useI18n } from "@/context/I18nContext";
import { useToast } from "@/hooks/use-toast";

export function PanicButton() {
  const { resetWizard } = useWizard();
  const { t } = useI18n();
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
          {t.panic.buttonLabel}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t.panic.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {t.panic.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel data-testid="button-panic-cancel">{t.common.cancel}</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleClear}
            className="bg-destructive text-destructive-foreground"
            data-testid="button-panic-confirm"
          >
            {t.panic.confirmButton}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
