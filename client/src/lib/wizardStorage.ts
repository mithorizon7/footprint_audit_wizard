import { WizardData, wizardDataSchema } from '@shared/schema';

const STORAGE_KEY = 'footprintWizard:v1';

export function getWizardData(): WizardData | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    const data = wizardDataSchema.parse(parsed);
    return {
      ...data,
      sessionId: /^wiz_[a-f0-9]{32}$/.test(data.sessionId ?? '')
        ? data.sessionId
        : createSessionId(),
    };
  } catch {
    return null;
  }
}

export function saveWizardData(data: WizardData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save wizard data:', e);
  }
}

export function clearWizardData(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear wizard data:', e);
  }
}

export function createInitialWizardData(): WizardData {
  return wizardDataSchema.parse({ sessionId: createSessionId() });
}

export function createSessionId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `wiz_${crypto.randomUUID().replace(/-/g, '')}`;
  }

  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return `wiz_${Array.from(bytes, (value) => value.toString(16).padStart(2, '0')).join('')}`;
}

export function detectDevice(): {
  type: 'desktop' | 'mobile' | 'unknown';
  os: string;
  browser: string;
} {
  const ua = navigator.userAgent.toLowerCase();

  let type: 'desktop' | 'mobile' | 'unknown' = 'unknown';
  if (/mobile|android|iphone|ipad|tablet/i.test(ua)) {
    type = 'mobile';
  } else if (/windows|macintosh|linux/i.test(ua)) {
    type = 'desktop';
  }

  let os: string = 'unknown';
  if (/windows/i.test(ua)) os = 'windows';
  else if (/iphone|ipad/i.test(ua)) os = 'ios';
  else if (/android/i.test(ua)) os = 'android';
  else if (/macintosh|mac os/i.test(ua)) os = 'mac';
  else if (/linux/i.test(ua) && !/android/i.test(ua)) os = 'linux';

  let browser: string = 'unknown';
  if (/edg/i.test(ua)) browser = 'edge';
  else if (/chrome/i.test(ua) && !/edg/i.test(ua)) browser = 'chrome';
  else if (/firefox/i.test(ua)) browser = 'firefox';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'safari';
  else browser = 'other';

  return { type, os, browser };
}
