import express from 'express';
import { createServer, type Server } from 'node:http';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { registerRoutes } from './routes';

describe('API security boundary', () => {
  let server: Server;
  let base: string;
  beforeAll(async () => {
    vi.stubEnv('NODE_ENV', 'production');
    vi.stubEnv('FACILITATOR_PASSWORD', 'a-long-test-password-123');
    vi.stubEnv('FACILITATOR_SESSION_SECRET', 'a-long-test-session-secret-at-least-32-chars');
    const app = express();
    app.use(express.json({ limit: '32kb', inflate: false }));
    server = createServer(app);
    await registerRoutes(server, app);
    await new Promise<void>((resolve, reject) => {
      server.once('error', reject);
      server.listen(0, '127.0.0.1', resolve);
    });
    const address = server.address();
    if (!address || typeof address === 'string') throw new Error('No test listener');
    base = `http://127.0.0.1:${address.port}`;
    vi.stubEnv('PUBLIC_ORIGIN', base);
  });
  afterAll(async () => {
    if (server?.listening)
      await new Promise<void>((resolve, reject) =>
        server.close((err) => (err ? reject(err) : resolve())),
      );
    vi.unstubAllEnvs();
  });
  const json = { 'content-type': 'application/json' };
  it('protects metrics, exports and individual session records', async () => {
    for (const path of [
      '/api/facilitator/metrics',
      '/api/facilitator/export.csv',
      '/api/sessions/wiz_00000000000000000000000000000001',
    ]) {
      expect((await fetch(base + path)).status).toBe(401);
    }
  });
  it('accepts telemetry without disclosing stored records and rejects invalid identifiers', async () => {
    const saved = await fetch(base + '/api/sessions', {
      method: 'POST',
      headers: json,
      body: JSON.stringify({ sessionId: 'wiz_00000000000000000000000000000001', mode: 'self' }),
    });
    expect(saved.status).toBe(204);
    expect(await saved.text()).toBe('');
    expect(
      (
        await fetch(base + '/api/sessions', {
          method: 'POST',
          headers: json,
          body: JSON.stringify({ sessionId: 'guessable', mode: 'self' }),
        })
      ).status,
    ).toBe(400);
  });
  it('rejects cross-origin login and non-JSON writes', async () => {
    expect(
      (
        await fetch(base + '/api/facilitator/login', {
          method: 'POST',
          headers: { ...json, origin: 'https://different.example' },
          body: JSON.stringify({ password: 'a-long-test-password-123' }),
        })
      ).status,
    ).toBe(403);
    expect(
      (await fetch(base + '/api/facilitator/login', { method: 'POST', body: 'password=test' }))
        .status,
    ).toBe(415);
  });
  it('allows authenticated review and rejects impossible date filters', async () => {
    const response = await fetch(base + '/api/facilitator/login', {
      method: 'POST',
      headers: json,
      body: JSON.stringify({ password: 'a-long-test-password-123' }),
    });
    expect(response.status).toBe(204);
    const setCookie = response.headers.get('set-cookie') ?? '';
    expect(setCookie).toContain('HttpOnly');
    expect(setCookie).toContain('Secure');
    const headers = { cookie: setCookie.split(';')[0] };
    expect((await fetch(base + '/api/facilitator/metrics', { headers })).status).toBe(200);
    expect(
      (await fetch(base + '/api/facilitator/export.csv', { headers })).headers.get('content-type'),
    ).toContain('text/csv');
    expect(
      (await fetch(base + '/api/facilitator/metrics?from=2026-02-31', { headers })).status,
    ).toBe(400);
  });
  it('throttles repeated login attempts', async () => {
    let status = 0;
    for (let i = 0; i < 11; i++)
      status = (
        await fetch(base + '/api/facilitator/login', {
          method: 'POST',
          headers: json,
          body: JSON.stringify({ password: 'wrong' }),
        })
      ).status;
    expect(status).toBe(429);
  });
});
