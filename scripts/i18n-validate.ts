#!/usr/bin/env tsx
/**
 * i18n Validation Script
 * 
 * Validates ICU message format syntax and checks for:
 * - Invalid ICU syntax
 * - Missing required placeholders
 * - Inconsistent keys across locales
 * 
 * Usage: npx tsx scripts/i18n-validate.ts
 */

import IntlMessageFormat from "intl-messageformat";

// Import translations directly
import { allTranslations } from "../client/src/lib/i18n";
import { pluralMessages } from "../client/src/lib/formatters";

type TranslationObject = Record<string, unknown>;

const LOCALES = ["en", "lv", "ru"] as const;

interface ValidationError {
  locale: string;
  key: string;
  message: string;
  type: "syntax" | "missing" | "placeholder";
}

const errors: ValidationError[] = [];
const warnings: string[] = [];

function flattenObject(
  obj: TranslationObject,
  prefix = ""
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      result[fullKey] = value;
    } else if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenObject(value as TranslationObject, fullKey));
    }
  }

  return result;
}

function extractPlaceholders(message: string): Set<string> {
  const placeholders = new Set<string>();
  const regex = /\{([^},]+)/g;
  let match;

  while ((match = regex.exec(message)) !== null) {
    placeholders.add(match[1].trim());
  }

  return placeholders;
}

function validateICUSyntax(
  message: string,
  locale: string,
  key: string
): boolean {
  try {
    new IntlMessageFormat(message, locale);
    return true;
  } catch (error) {
    errors.push({
      locale,
      key,
      message: `Invalid ICU syntax: ${(error as Error).message}`,
      type: "syntax",
    });
    return false;
  }
}

function validatePlaceholderConsistency(
  translations: Record<string, Record<string, string>>
): void {
  const enStrings = translations.en;
  const locales = Object.keys(translations).filter((l) => l !== "en");

  for (const [key, enValue] of Object.entries(enStrings)) {
    // Skip ICU plural messages - they have localized plural categories
    if (enValue.includes("{") && (enValue.includes("plural,") || enValue.includes(", plural,"))) {
      continue;
    }
    
    const enPlaceholders = extractPlaceholders(enValue);

    for (const locale of locales) {
      const localizedValue = translations[locale]?.[key];

      if (!localizedValue) {
        errors.push({
          locale,
          key,
          message: `Missing translation for key: ${key}`,
          type: "missing",
        });
        continue;
      }

      // Skip ICU plural messages for localized versions too
      if (localizedValue.includes("{") && (localizedValue.includes("plural,") || localizedValue.includes(", plural,"))) {
        continue;
      }

      const localizedPlaceholders = extractPlaceholders(localizedValue);

      // Check for missing placeholders in localized version
      for (const placeholder of enPlaceholders) {
        if (!localizedPlaceholders.has(placeholder)) {
          errors.push({
            locale,
            key,
            message: `Missing placeholder {${placeholder}} in translation`,
            type: "placeholder",
          });
        }
      }

      // Check for extra placeholders in localized version
      for (const placeholder of localizedPlaceholders) {
        if (!enPlaceholders.has(placeholder)) {
          warnings.push(
            `[${locale}] Extra placeholder {${placeholder}} in key "${key}"`
          );
        }
      }
    }
  }
}

function validatePluralMessages(): void {
  console.log("\n=== Validating ICU Plural Messages ===\n");

  for (const locale of LOCALES) {
    const messages = pluralMessages[locale];

    for (const [key, message] of Object.entries(messages)) {
      validateICUSyntax(message, locale, `pluralMessages.${key}`);
    }
  }
}

function validateTranslations(): void {
  console.log("=== Validating Translation Files ===\n");

  const flattenedTranslations: Record<string, Record<string, string>> = {};

  // Get the translations object

  for (const locale of LOCALES) {
    const localeTranslations = allTranslations[locale];
    flattenedTranslations[locale] = flattenObject(
      localeTranslations as unknown as TranslationObject
    );

    // Validate ICU syntax for each string
    for (const [key, value] of Object.entries(flattenedTranslations[locale])) {
      if (value.includes("{") && value.includes("}")) {
        validateICUSyntax(value, locale, key);
      }
    }
  }

  // Check for placeholder consistency
  validatePlaceholderConsistency(flattenedTranslations);
}

function printResults(): void {
  console.log("\n=== Validation Results ===\n");

  if (errors.length === 0 && warnings.length === 0) {
    console.log("All translations are valid!");
    return;
  }

  if (errors.length > 0) {
    console.log(`Found ${errors.length} error(s):\n`);

    for (const error of errors) {
      console.log(`  [${error.locale}] ${error.key}`);
      console.log(`    Type: ${error.type}`);
      console.log(`    ${error.message}\n`);
    }
  }

  if (warnings.length > 0) {
    console.log(`\nFound ${warnings.length} warning(s):\n`);
    for (const warning of warnings) {
      console.log(`  ${warning}`);
    }
  }
}

// Run validation
console.log("i18n Validation Script\n");
console.log("Checking translations for syntax errors and consistency...\n");

validateTranslations();
validatePluralMessages();
printResults();

// Exit with error code if there are errors
if (errors.length > 0) {
  process.exit(1);
}
