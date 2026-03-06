import { describe, expect, it } from 'vitest';
import { formatDate, formatTime } from './formatters';

describe('formatters', () => {
  it('returns an empty string for invalid date input', () => {
    expect(formatDate('not-a-date', 'en')).toBe('');
    expect(formatTime(Number.NaN, 'en')).toBe('');
  });

  it('formats valid date and time inputs', () => {
    const source = new Date('2026-03-06T16:00:00.000Z');
    expect(formatDate(source, 'en')).not.toBe('');
    expect(formatTime(source, 'en')).not.toBe('');
  });
});
