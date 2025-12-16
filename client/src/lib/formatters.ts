import IntlMessageFormat from "intl-messageformat";
import type { Locale } from "./i18n";

const messageCache = new Map<string, IntlMessageFormat>();

export function formatMessage(
  message: string,
  values: Record<string, string | number | boolean> = {},
  locale: Locale = "en"
): string {
  const cacheKey = `${locale}:${message}`;
  
  let formatter = messageCache.get(cacheKey);
  if (!formatter) {
    try {
      formatter = new IntlMessageFormat(message, locale);
      messageCache.set(cacheKey, formatter);
    } catch (error) {
      console.warn(`Invalid ICU message format: ${message}`, error);
      return message;
    }
  }
  
  try {
    return formatter.format(values) as string;
  } catch (error) {
    console.warn(`Error formatting message: ${message}`, error);
    return message;
  }
}

export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(localeToIntl(locale)).format(value);
}

export function formatDate(
  date: Date | string | number,
  locale: Locale,
  options: Intl.DateTimeFormatOptions = { 
    year: "numeric", 
    month: "short", 
    day: "numeric" 
  }
): string {
  const dateObj = typeof date === "string" || typeof date === "number" 
    ? new Date(date) 
    : date;
  return new Intl.DateTimeFormat(localeToIntl(locale), options).format(dateObj);
}

export function formatTime(
  date: Date | string | number,
  locale: Locale,
  options: Intl.DateTimeFormatOptions = { 
    hour: "2-digit", 
    minute: "2-digit" 
  }
): string {
  const dateObj = typeof date === "string" || typeof date === "number" 
    ? new Date(date) 
    : date;
  return new Intl.DateTimeFormat(localeToIntl(locale), options).format(dateObj);
}

export function formatRelativeTime(
  seconds: number,
  locale: Locale
): string {
  const rtf = new Intl.RelativeTimeFormat(localeToIntl(locale), { 
    numeric: "auto",
    style: "narrow" 
  });
  
  if (Math.abs(seconds) < 60) {
    return rtf.format(Math.round(seconds), "second");
  } else if (Math.abs(seconds) < 3600) {
    return rtf.format(Math.round(seconds / 60), "minute");
  } else if (Math.abs(seconds) < 86400) {
    return rtf.format(Math.round(seconds / 3600), "hour");
  } else {
    return rtf.format(Math.round(seconds / 86400), "day");
  }
}

export function formatDuration(totalSeconds: number, locale: Locale): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  const parts = new Intl.ListFormat(localeToIntl(locale), { 
    style: "narrow", 
    type: "unit" 
  });
  
  if (minutes === 0) {
    return `${seconds}s`;
  }
  
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function localeToIntl(locale: Locale): string {
  const localeMap: Record<Locale, string> = {
    en: "en-US",
    lv: "lv-LV",
    ru: "ru-RU",
  };
  return localeMap[locale] || "en-US";
}

export const pluralMessages = {
  en: {
    trackers: "{count, plural, =0 {no trackers} one {# tracker} other {# trackers}}",
    pages: "{count, plural, =0 {no pages} one {# page} other {# pages}}",
    sites: "{count, plural, =0 {no sites} one {# site} other {# sites}}",
    minutes: "{count, plural, =0 {0 minutes} one {# minute} other {# minutes}}",
    seconds: "{count, plural, =0 {0 seconds} one {# second} other {# seconds}}",
    items: "{count, plural, =0 {no items} one {# item} other {# items}}",
    actions: "{count, plural, =0 {no actions} one {# action} other {# actions}}",
    stepOf: "Step {current} of {total}",
    targetMinutes: "Target: {count, plural, one {# minute} other {# minutes}}",
    timeLeft: "{minutes}:{seconds} left",
  },
  lv: {
    trackers: "{count, plural, =0 {nav izsekotāju} one {# izsekotājs} other {# izsekotāji}}",
    pages: "{count, plural, =0 {nav lapu} one {# lapa} other {# lapas}}",
    sites: "{count, plural, =0 {nav vietņu} one {# vietne} other {# vietnes}}",
    minutes: "{count, plural, =0 {0 minūtes} one {# minūte} other {# minūtes}}",
    seconds: "{count, plural, =0 {0 sekundes} one {# sekunde} other {# sekundes}}",
    items: "{count, plural, =0 {nav vienumu} one {# vienums} other {# vienumi}}",
    actions: "{count, plural, =0 {nav darbību} one {# darbība} other {# darbības}}",
    stepOf: "Solis {current} no {total}",
    targetMinutes: "Mērķis: {count, plural, one {# minūte} other {# minūtes}}",
    timeLeft: "Atlikuši: {minutes}:{seconds}",
  },
  ru: {
    trackers: "{count, plural, =0 {нет трекеров} one {# трекер} few {# трекера} many {# трекеров} other {# трекеров}}",
    pages: "{count, plural, =0 {нет страниц} one {# страница} few {# страницы} many {# страниц} other {# страниц}}",
    sites: "{count, plural, =0 {нет сайтов} one {# сайт} few {# сайта} many {# сайтов} other {# сайтов}}",
    minutes: "{count, plural, =0 {0 минут} one {# минута} few {# минуты} many {# минут} other {# минут}}",
    seconds: "{count, plural, =0 {0 секунд} one {# секунда} few {# секунды} many {# секунд} other {# секунд}}",
    items: "{count, plural, =0 {нет элементов} one {# элемент} few {# элемента} many {# элементов} other {# элементов}}",
    actions: "{count, plural, =0 {нет действий} one {# действие} few {# действия} many {# действий} other {# действий}}",
    stepOf: "Шаг {current} из {total}",
    targetMinutes: "Цель: {count, plural, one {# минута} few {# минуты} many {# минут} other {# минут}}",
    timeLeft: "Осталось: {minutes}:{seconds}",
  },
};

export type PluralMessageKey = keyof typeof pluralMessages.en;

export function formatPlural(
  key: PluralMessageKey,
  values: Record<string, string | number>,
  locale: Locale
): string {
  const messages = pluralMessages[locale] || pluralMessages.en;
  const message = messages[key];
  
  if (!message) {
    console.warn(`Missing plural message: ${key} for locale ${locale}`);
    return String(values.count ?? "");
  }
  
  return formatMessage(message, values, locale);
}
