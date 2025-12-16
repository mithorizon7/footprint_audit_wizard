import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import {
  type Locale,
  type Translations,
  getTranslations,
  getLocaleFromStorage,
  saveLocaleToStorage,
} from "@/lib/i18n";

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getLocaleFromStorage());
  const [translations, setTranslations] = useState<Translations>(() => getTranslations(locale));

  useEffect(() => {
    setTranslations(getTranslations(locale));
    saveLocaleToStorage(locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  return (
    <I18nContext.Provider value={{ locale, t: translations, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
