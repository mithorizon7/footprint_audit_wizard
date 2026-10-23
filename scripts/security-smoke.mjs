import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { once } from 'node:events';

// Select a free local port, then start a disposable production process without secrets.
const probe = createServer();
probe.listen(0, '127.0.0.1');
await once(probe, 'listening');
const port = probe.address().port;
await new Promise((resolve) => probe.close(resolve));
const app = spawn(process.execPath, ['dist/index.cjs'], {
  env: {
    ...process.env,
    NODE_ENV: 'production',
    HOST: '127.0.0.1',
    PORT: String(port),
    DATABASE_URL: '',
    FACILITATOR_PASSWORD: '',
    FACILITATOR_SESSION_SECRET: '',
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});
let logs = '';
app.stdout.on('data', (value) => {
  logs += value;
});
app.stderr.on('data', (value) => {
  logs += value;
});
const base = `http://127.0.0.1:${port}`;
try {
  let ready = false;
  for (let i = 0; i < 50; i++) {
    if (app.exitCode !== null) throw new Error('Production process exited before listening');
    try {
      await fetch(base);
      ready = true;
      break;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  assert.ok(ready, 'Production service must start');
  const html = await (await fetch(base)).text();
  const stylesheet = html.match(/href="([^"]+\.css)"/);
  assert.ok(stylesheet, 'Production page must link its built stylesheet');
  const styleUrl = new URL(stylesheet[1], base);
  assert.equal(styleUrl.origin, base);
  const styleResponse = await fetch(styleUrl);
  assert.equal(styleResponse.status, 200);
  const css = await styleResponse.text();
  for (const rule of [/\.px-4\s*\{/, /\.gap-4\s*\{/, /\.max-w-5xl\s*\{/]) {
    assert.match(css, rule, 'Critical layout utilities must be generated');
  }
  assert.match(css, /--spacing\s*:/, 'Tailwind spacing theme must be included');
  for (const [path, status] of [
    ['/', 200],
    ['/api/missing', 404],
    ['/api/facilitator/metrics', 503],
    ['/api/sessions/wiz_00000000000000000000000000000001', 503],
  ]) {
    const response = await fetch(base + path);
    assert.equal(response.status, status);
    assert.ok(response.headers.get('content-security-policy'));
    assert.ok(response.headers.get('strict-transport-security'));
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
    assert.equal(response.headers.get('x-powered-by'), null);
    if (path.startsWith('/api')) assert.equal(response.headers.get('cache-control'), 'no-store');
  }
  const compressed = await fetch(base + '/api/sessions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'content-encoding': 'br' },
    body: '{}',
  });
  assert.equal(compressed.status, 415);
  const oversized = await fetch(base + '/api/sessions', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ data: 'x'.repeat(40000) }),
  });
  assert.equal(oversized.status, 413);
  assert.ok(!logs.includes('00000000000000000000000000000001'));
  assert.ok(!logs.includes('x'.repeat(50)));
  console.log(
    'Production HTTP smoke passed: startup, CSS layout, headers, API auth, limits and log redaction.',
  );
} finally {
  const stopped = once(app, 'exit');
  app.kill('SIGTERM');
  await stopped;
}
