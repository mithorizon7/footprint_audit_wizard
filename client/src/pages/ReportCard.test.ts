import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import { FICTIONAL_DATA } from '@shared/schema';
import { getTranslations, type Locale } from '@/lib/i18n';
import { formatMessage, formatNumber, formatDate } from '@/lib/formatters';
import { TooltipProvider } from '@/components/ui/tooltip';
import ReportCard from './ReportCard';

let locale: Locale = 'en';
let data = structuredClone(FICTIONAL_DATA);

vi.mock('@/context/WizardContext', () => ({
  useWizard: () => ({ data, skippedSteps: data.skippedSteps ?? [], resetWizard: vi.fn() }),
}));
vi.mock('@/context/I18nContext', () => ({
  useI18n: () => ({
    t: getTranslations(locale),
    format: (message: string, values?: Record<string, string | number | boolean>) =>
      formatMessage(message, values, locale),
    formatNum: (value: number) => formatNumber(value, locale),
    formatDateLocale: (value: string | Date | number) => formatDate(value, locale),
  }),
}));

describe('ReportCard rendering', () => {
  for (const language of ['en', 'lv', 'ru'] as const) {
    for (const count of [0, 2, 5]) {
      it(`renders ${language} with ${count} public-exposure pages`, () => {
        locale = language;
        data = structuredClone(FICTIONAL_DATA);
        data.results.publicExposure.searchResultPagesWithPersonalInfo = count;
        const html = renderToStaticMarkup(
          createElement(TooltipProvider, null, createElement(ReportCard)),
        );
        expect(html).toContain(getTranslations(language).metrics.publicExposureLabel);
        expect(html).not.toContain('[MISSING:');
      });
    }
  }
});
