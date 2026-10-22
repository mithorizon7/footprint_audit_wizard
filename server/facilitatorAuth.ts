import crypto from 'crypto';
import type { NextFunction, Request, Response } from 'express';

const FACILITATOR_SESSION_COOKIE = 'facilitator_session';
const FACILITATOR_SESSION_TTL_MS = 12 * 60 * 60 * 1000;

interface FacilitatorSessionPayload {
  role: 'facilitator';
  exp: number;
}

export interface FacilitatorAuthStatus {
  authRequired: boolean;
  configured: boolean;
  authenticated: boolean;
}

function getConfig() {
  const password = process.env.FACILITATOR_PASSWORD ?? '';
  const secret = process.env.FACILITATOR_SESSION_SECRET?.trim() ?? '';
  const authRequired = true;
  const configured = password.length >= 16 && secret.length >= 32;

  return {
    password,
    secret,
    authRequired,
    configured,
  };
}

function timingSafeEqual(left: string, right: string): boolean {
  const leftBuf = crypto.createHash('sha256').update(left).digest();
  const rightBuf = crypto.createHash('sha256').update(right).digest();

  return crypto.timingSafeEqual(leftBuf, rightBuf);
}

function sign(encodedPayload: string, secret: string): string {
  // Password changes invalidate existing sessions as well as secret rotations.
  const key = crypto.createHmac('sha256', secret).update(getConfig().password).digest();
  return crypto.createHmac('sha256', key).update(encodedPayload).digest('base64url');
}

function encodeSession(payload: FacilitatorSessionPayload, secret: string): string {
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = sign(encodedPayload, secret);
  return `${encodedPayload}.${signature}`;
}

function decodeSession(token: string, secret: string): FacilitatorSessionPayload | null {
  const [encodedPayload, signature, extra] = token.split('.');
  if (token.length > 1024 || !encodedPayload || !signature || extra !== undefined) {
    return null;
  }

  const expectedSignature = sign(encodedPayload, secret);
  if (!timingSafeEqual(signature, expectedSignature)) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, 'base64url').toString('utf8'),
    ) as FacilitatorSessionPayload;

    if (payload.role !== 'facilitator' || !Number.isSafeInteger(payload.exp)) {
      return null;
    }

    if (payload.exp <= Date.now() || payload.exp > Date.now() + FACILITATOR_SESSION_TTL_MS) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

function parseCookieHeader(cookieHeader?: string): Record<string, string> {
  if (!cookieHeader) {
    return {};
  }

  return cookieHeader.split(';').reduce<Record<string, string>>(
    (acc, pair) => {
      const [rawKey, ...rawValue] = pair.trim().split('=');
      if (!rawKey) {
        return acc;
      }

      try {
        acc[rawKey] = decodeURIComponent(rawValue.join('='));
      } catch {
        // A malformed cookie must never break the authentication endpoint.
      }
      return acc;
    },
    Object.create(null) as Record<string, string>,
  );
}

export function getFacilitatorAuthStatus(req: Request): FacilitatorAuthStatus {
  const config = getConfig();

  if (!config.authRequired) {
    return {
      authRequired: false,
      configured: false,
      authenticated: true,
    };
  }

  if (!config.configured) {
    return {
      authRequired: true,
      configured: false,
      authenticated: false,
    };
  }

  const cookies = parseCookieHeader(req.headers.cookie);
  const token = cookies[FACILITATOR_SESSION_COOKIE];
  const payload = token ? decodeSession(token, config.secret) : null;

  return {
    authRequired: true,
    configured: true,
    authenticated: Boolean(payload),
  };
}

export function isFacilitatorPasswordValid(password: string): boolean {
  const config = getConfig();

  if (!config.configured) {
    return false;
  }

  return timingSafeEqual(password, config.password);
}

export function setFacilitatorSession(res: Response): void {
  const config = getConfig();
  if (!config.configured) {
    throw new Error('Facilitator auth is not configured');
  }

  const payload: FacilitatorSessionPayload = {
    role: 'facilitator',
    exp: Date.now() + FACILITATOR_SESSION_TTL_MS,
  };

  res.cookie(FACILITATOR_SESSION_COOKIE, encodeSession(payload, config.secret), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: FACILITATOR_SESSION_TTL_MS,
    path: '/',
  });
}

export function clearFacilitatorSession(res: Response): void {
  res.clearCookie(FACILITATOR_SESSION_COOKIE, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
}

export function requireFacilitatorAuth(req: Request, res: Response, next: NextFunction): void {
  const status = getFacilitatorAuthStatus(req);

  if (!status.authRequired || status.authenticated) {
    next();
    return;
  }

  if (!status.configured) {
    res.status(503).json({ error: 'Facilitator access is not configured.' });
    return;
  }

  res.status(401).json({ error: 'Unauthorized' });
}
