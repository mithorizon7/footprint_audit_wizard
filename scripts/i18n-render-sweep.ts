#!/usr/bin/env tsx
/**
 * i18n Render Sweep Test
 *
 * This script validates that no translation keys are missing
 * by checking that all strings in the translation files are non-empty
 * and no [MISSING: ...] placeholders would appear at runtime.
 *
 * Usage: npx tsx scripts/i18n-render-sweep.ts
 */

import { allTranslations } from '../client/src/lib/i18n';

const LOCALES = ['en', 'lv', 'ru'] as const;

interface MissingKey {
  locale: string;
  key: string;
  reason: string;
}

const missingKeys: MissingKey[] = [];

function checkTranslations(obj: Record<string, unknown>, locale: string, path: string = ''): void {
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = path ? `${path}.${key}` : key;

    if (value === undefined || value === null) {
      missingKeys.push({
        locale,
        key: currentPath,
        reason: 'Value is undefined or null',
      });
    } else if (typeof value === 'string') {
      if (value.trim() === '') {
        missingKeys.push({
          locale,
          key: currentPath,
          reason: 'Value is empty string',
        });
      } else if (value.includes('[MISSING:')) {
        missingKeys.push({
          locale,
          key: currentPath,
          reason: 'Contains [MISSING:] placeholder',
        });
      }
    } else if (typeof value === 'object') {
      checkTranslations(value as Record<string, unknown>, locale, currentPath);
    }
  }
}

function compareWithEnglish(): void {
  const enKeys = new Set<string>();

  function collectKeys(obj: Record<string, unknown>, path: string = ''): void {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      if (typeof value === 'string') {
        enKeys.add(currentPath);
      } else if (typeof value === 'object' && value !== null) {
        collectKeys(value as Record<string, unknown>, currentPath);
      }
    }
  }

  collectKeys(allTranslations.en as unknown as Record<string, unknown>);

  // Check lv and ru have all en keys
  for (const locale of ['lv', 'ru'] as const) {
    const localeTranslations = allTranslations[locale] as unknown as Record<string, unknown>;

    function getValueAtPath(obj: Record<string, unknown>, path: string): unknown {
      const parts = path.split('.');
      let current: unknown = obj;
      for (const part of parts) {
        if (current === null || current === undefined || typeof current !== 'object') {
          return undefined;
        }
        current = (current as Record<string, unknown>)[part];
      }
      return current;
    }

    for (const enKey of enKeys) {
      const value = getValueAtPath(localeTranslations, enKey);
      if (value === undefined) {
        missingKeys.push({
          locale,
          key: enKey,
          reason: `Key exists in 'en' but missing in '${locale}'`,
        });
      }
    }
  }
}

// Run checks
console.log('i18n Render Sweep Test\n');
console.log('Checking for missing or empty translations...\n');

// Check each locale for empty/missing values
for (const locale of LOCALES) {
  const translations = allTranslations[locale] as unknown as Record<string, unknown>;
  checkTranslations(translations, locale);
}

// Check that lv/ru have all keys from en
console.log('Comparing lv/ru with en (source locale)...\n');
compareWithEnglish();

// Report results
if (missingKeys.length === 0) {
  console.log('All translations are present and valid!');
  console.log(`Checked ${LOCALES.length} locales: ${LOCALES.join(', ')}`);
  process.exit(0);
} else {
  console.log(`Found ${missingKeys.length} issue(s):\n`);

  // Group by locale
  const byLocale: Record<string, MissingKey[]> = {};
  for (const item of missingKeys) {
    if (!byLocale[item.locale]) {
      byLocale[item.locale] = [];
    }
    byLocale[item.locale].push(item);
  }

  for (const [locale, items] of Object.entries(byLocale)) {
    console.log(`\n=== ${locale.toUpperCase()} ===`);
    for (const item of items) {
      console.log(`  ${item.key}`);
      console.log(`    ${item.reason}`);
    }
  }

  console.log('\n\nFix these issues to pass the render sweep test.');
  process.exit(1);
}
