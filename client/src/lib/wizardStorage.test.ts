import { afterEach, describe, expect, it } from 'vitest';
import { detectDevice } from './wizardStorage';

const originalNavigator = globalThis.navigator;

function mockUserAgent(userAgent: string) {
  Object.defineProperty(globalThis, 'navigator', {
    configurable: true,
    value: { userAgent },
  });
}

afterEach(() => {
  Object.defineProperty(globalThis, 'navigator', {
    configurable: true,
    value: originalNavigator,
  });
});

describe('detectDevice', () => {
  it('classifies iPad-like user agents as iOS rather than macOS', () => {
    mockUserAgent(
      'Mozilla/5.0 (iPad; CPU OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    );

    expect(detectDevice()).toMatchObject({
      type: 'mobile',
      os: 'ios',
      browser: 'safari',
    });
  });

  it('classifies desktop Chrome on Windows', () => {
    mockUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    );

    expect(detectDevice()).toMatchObject({
      type: 'desktop',
      os: 'windows',
      browser: 'chrome',
    });
  });
});
