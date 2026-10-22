import { afterEach, describe, expect, it, vi } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import { createRateLimiter, isSameOrigin } from './requestSecurity';

function request(headers: Record<string, string> = {}) {
  return { ip: '127.0.0.1', protocol: 'https', get: (key: string) => headers[key] } as Request;
}

describe('request security', () => {
  afterEach(() => vi.unstubAllEnvs());
  it('accepts the configured origin and rejects cross-site browser writes', () => {
    vi.stubEnv('PUBLIC_ORIGIN', 'https://audit.example');
    expect(isSameOrigin(request({ origin: 'https://audit.example' }))).toBe(true);
    expect(isSameOrigin(request({ origin: 'https://different.example' }))).toBe(false);
    expect(isSameOrigin(request({ origin: 'null' }))).toBe(false);
    expect(isSameOrigin(request({ 'sec-fetch-site': 'cross-site' }))).toBe(false);
  });

  it('limits attempts without trusting client-supplied forwarded addresses', () => {
    const limiter = createRateLimiter(2, 60_000);
    const next = vi.fn();
    const res = {
      setHeader: vi.fn(),
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;
    for (let index = 0; index < 3; index++) limiter(request(), res, next as NextFunction);
    expect(next).toHaveBeenCalledTimes(2);
    expect(res.status).toHaveBeenCalledWith(429);
    expect(res.setHeader).toHaveBeenCalledWith('Retry-After', expect.any(String));
  });
});
