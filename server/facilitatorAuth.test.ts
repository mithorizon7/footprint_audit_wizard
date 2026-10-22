import { afterEach, describe, expect, it, vi } from 'vitest';
import type { Request, Response } from 'express';
import {
  clearFacilitatorSession,
  getFacilitatorAuthStatus,
  isFacilitatorPasswordValid,
  setFacilitatorSession,
} from './facilitatorAuth';

function makeRequest(cookie?: string) {
  return {
    headers: cookie ? { cookie } : {},
  } as Request;
}

function makeResponse() {
  const cookies = new Map<string, string>();
  return {
    cookies,
    response: {
      cookie: vi.fn((name: string, value: string) => {
        cookies.set(name, value);
      }),
      clearCookie: vi.fn(),
    } as unknown as Response,
  };
}

describe('facilitatorAuth', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('fails closed even in development if credentials are missing', () => {
    vi.stubEnv('FACILITATOR_PASSWORD', '');
    vi.stubEnv('FACILITATOR_SESSION_SECRET', '');
    vi.stubEnv('NODE_ENV', 'development');

    expect(getFacilitatorAuthStatus(makeRequest())).toEqual({
      authRequired: true,
      configured: false,
      authenticated: false,
    });
  });

  it('validates configured passwords and session cookies', () => {
    vi.stubEnv('FACILITATOR_PASSWORD', 'a-long-test-password-123');
    vi.stubEnv('FACILITATOR_SESSION_SECRET', 'a-long-test-session-secret-at-least-32-chars');
    vi.stubEnv('NODE_ENV', 'production');

    expect(isFacilitatorPasswordValid('a-long-test-password-123')).toBe(true);
    expect(isFacilitatorPasswordValid('wrong-pass')).toBe(false);

    const { cookies, response } = makeResponse();
    setFacilitatorSession(response);

    const sessionCookie = cookies.get('facilitator_session');
    expect(sessionCookie).toBeTruthy();

    const status = getFacilitatorAuthStatus(
      makeRequest(`facilitator_session=${encodeURIComponent(sessionCookie ?? '')}`),
    );
    expect(status).toEqual({
      authRequired: true,
      configured: true,
      authenticated: true,
    });

    clearFacilitatorSession(response);
    expect(response.clearCookie).toHaveBeenCalled();
  });

  it('rejects malformed cookies and invalidates sessions when credentials change', () => {
    vi.stubEnv('FACILITATOR_PASSWORD', 'a-long-test-password-123');
    vi.stubEnv('FACILITATOR_SESSION_SECRET', 'a-long-test-session-secret-at-least-32-chars');
    const { cookies, response } = makeResponse();
    setFacilitatorSession(response);
    const request = makeRequest(`facilitator_session=${cookies.get('facilitator_session')}`);
    expect(getFacilitatorAuthStatus(request).authenticated).toBe(true);
    vi.stubEnv('FACILITATOR_PASSWORD', 'another-long-test-password-456');
    expect(getFacilitatorAuthStatus(request).authenticated).toBe(false);
    expect(getFacilitatorAuthStatus(makeRequest('facilitator_session=%')).authenticated).toBe(
      false,
    );
  });

  it('rejects expired sessions and short credentials', () => {
    vi.stubEnv('FACILITATOR_PASSWORD', 'a-long-test-password-123');
    vi.stubEnv('FACILITATOR_SESSION_SECRET', 'a-long-test-session-secret-at-least-32-chars');
    const { cookies, response } = makeResponse();
    setFacilitatorSession(response);
    const clock = vi.spyOn(Date, 'now').mockReturnValue(Date.now() + 13 * 60 * 60 * 1000);
    expect(
      getFacilitatorAuthStatus(
        makeRequest(`facilitator_session=${cookies.get('facilitator_session')}`),
      ).authenticated,
    ).toBe(false);
    clock.mockRestore();
    vi.stubEnv('FACILITATOR_SESSION_SECRET', 'short');
    expect(getFacilitatorAuthStatus(makeRequest()).configured).toBe(false);
  });
});
