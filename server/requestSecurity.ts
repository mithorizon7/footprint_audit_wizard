import crypto from 'node:crypto';
import type { Request, RequestHandler } from 'express';

// Keys are digests, so the limiter never retains raw client addresses.
export function createRateLimiter(limit: number, windowMs: number): RequestHandler {
  const buckets = new Map<string, { count: number; resetAt: number }>();
  return (req, res, next) => {
    const now = Date.now();
    const key = crypto
      .createHash('sha256')
      .update(req.ip ?? req.socket.remoteAddress ?? 'unknown')
      .digest('hex');
    if (buckets.size >= 10000) {
      buckets.forEach((bucket, id) => {
        if (bucket.resetAt <= now) buckets.delete(id);
      });
      if (!buckets.has(key) && buckets.size >= 10000) {
        res.setHeader('Retry-After', String(Math.ceil(windowMs / 1000)));
        res.status(429).json({ error: 'Too many requests' });
        return;
      }
    }
    const previous = buckets.get(key);
    const bucket =
      previous && previous.resetAt > now ? previous : { count: 0, resetAt: now + windowMs };
    bucket.count += 1;
    buckets.set(key, bucket);
    if (bucket.count > limit) {
      res.setHeader('Retry-After', String(Math.max(1, Math.ceil((bucket.resetAt - now) / 1000))));
      res.status(429).json({ error: 'Too many requests' });
      return;
    }
    next();
  };
}

export function isSameOrigin(req: Request): boolean {
  if (req.get('sec-fetch-site') === 'cross-site') return false;
  const origin = req.get('origin');
  if (!origin) return true; // Non-browser clients still need route-specific credentials.
  const expected = process.env.PUBLIC_ORIGIN ?? `${req.protocol}://${req.get('host')}`;
  try {
    return origin !== 'null' && new URL(origin).origin === new URL(expected).origin;
  } catch {
    return false;
  }
}

export const requireJsonSameOrigin: RequestHandler = (req, res, next) => {
  if (!isSameOrigin(req)) {
    res.status(403).json({ error: 'Cross-origin request denied' });
    return;
  }
  if (!req.is('application/json')) {
    res.status(415).json({ error: 'Expected application/json' });
    return;
  }
  next();
};
