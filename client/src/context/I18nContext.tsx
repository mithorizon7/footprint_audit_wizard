import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import {
  type Locale,
  type Translations,
  getTranslations,
  getLocaleFromStorage,
  saveLocaleToStorage,
} from "@/lib/i18n";
import {
  formatMessage,
  formatNumber,
  formatDate,
  formatTime,
  formatDuration,
  formatPlural,
  type PluralMessageKey,
} from "@/lib/formatters";

const isDev = import.meta.env.DEV;

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  format: (message: string, values?: Record<string, string | number | boolean>) => string;
  formatNum: (value: number) => string;
  formatDateLocale: (date: Date | string | number, options?: Intl.DateTimeFormatOptions) => string;
  formatTimeLocale: (date: Date | string | number, options?: Intl.DateTimeFormatOptions) => string;
  formatDurationLocale: (seconds: number) => string;
  plural: (key: PluralMessageKey, values: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

function createMissingKeyProxy<T extends object>(
  translations: T,
  path: string = ""
): T {
  if (!isDev) {
    return translations;
  }

  return new Proxy(translations, {
    get(target, prop: string) {
      const value = (target as Record<string, unknown>)[prop];
      const currentPath = path ? `${path}.${prop}` : prop;

      if (value === undefined || value === null) {
        console.warn(`[i18n] Missing translation key: ${currentPath}`);
        return `[MISSING: ${currentPath}]`;
      }

      if (typeof value === "object" && value !== null) {
        return createMissingKeyProxy(value as object, currentPath);
      }

      return value;
    },
  }) as T;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getLocaleFromStorage());
  const [translations, setTranslations] = useState<Translations>(() => 
    createMissingKeyProxy(getTranslations(locale))
  );

  useEffect(() => {
    const rawTranslations = getTranslations(locale);
    setTranslations(createMissingKeyProxy(rawTranslations));
    saveLocaleToStorage(locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const format = (message: string, values?: Record<string, string | number | boolean>) => {
    return formatMessage(message, values, locale);
  };

  const formatNum = (value: number) => {
    return formatNumber(value, locale);
  };

  const formatDateLocale = (
    date: Date | string | number,
    options?: Intl.DateTimeFormatOptions
  ) => {
    return formatDate(date, locale, options);
  };

  const formatTimeLocale = (
    date: Date | string | number,
    options?: Intl.DateTimeFormatOptions
  ) => {
    return formatTime(date, locale, options);
  };

  const formatDurationLocale = (seconds: number) => {
    return formatDuration(seconds, locale);
  };

  const plural = (key: PluralMessageKey, values: Record<string, string | number>) => {
    return formatPlural(key, values, locale);
  };

  return (
    <I18nContext.Provider
      value={{
        locale,
        t: translations,
        setLocale,
        format,
        formatNum,
        formatDateLocale,
        formatTimeLocale,
        formatDurationLocale,
        plural,
      }}
    >
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
