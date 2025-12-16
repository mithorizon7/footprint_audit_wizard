import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/context/I18nContext";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";

export function LanguageSelector() {
  const { locale, setLocale } = useI18n();

  const currentLocaleName = SUPPORTED_LOCALES.find((l) => l.code === locale)?.name || "English";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label={`Language: ${currentLocaleName}`}
          data-testid="button-language-selector"
        >
          <Globe className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {SUPPORTED_LOCALES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLocale(lang.code as Locale)}
            className={locale === lang.code ? "bg-accent" : ""}
            data-testid={`language-${lang.code}`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
