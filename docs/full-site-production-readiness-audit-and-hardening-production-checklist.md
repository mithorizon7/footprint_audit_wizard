# Full Site Production Readiness Audit and Hardening Checklist

Source of truth checklist for a large/intense task.

## Metadata

- Created: 2026-03-06T15:42:09
- Last Updated: 2026-03-06T16:03:30
- Workspace: /Users/davedxn/Downloads/footprint_audit_wizard
- Checklist Doc: /Users/davedxn/Downloads/footprint_audit_wizard/docs/full-site-production-readiness-audit-and-hardening-production-checklist.md

## Scope

- [x] Q-000 [status:verified] Capture explicit scope, constraints, and success criteria.
  - Scope: full-stack audit and hardening across client, shared schema, and server runtime/security behavior.
  - Constraints: preserve privacy-first product behavior, avoid destructive data model rewrites, keep current UX flows intact, prioritize high-confidence hardening fixes.
  - Success criteria: no crashing server behavior on handled errors, validated API write surfaces, stronger HTTP security defaults, robust client state behavior under edge cases, and full validation suite pass.

## Sign-off Gate

- [x] G-001 [status:verified] All queued work, findings, fixes, and validations are complete.
- [x] G-002 [status:verified] All findings are resolved or marked `accepted_risk` with rationale and owner.
- [x] G-003 [status:verified] Required validation suite has been rerun on the final code state.
- [x] G-004 [status:verified] Residual risks and follow-ups are documented.

## Rerun Matrix

- [x] G-010 [status:verified] If code changes after any checked `V-*`, reset affected validation items to unchecked.
- [x] G-011 [status:verified] Final sign-off only after a full validation pass completed after the last code edit.

## Audit Queue

- [x] Q-001 [status:verified] Create checklist and baseline scope.
- [x] Q-002 [status:verified] Complete discovery/audit of impacted systems.
- [x] Q-003 [status:verified] Implement required changes.
- [x] Q-004 [status:verified] Expand or update automated tests.
- [x] Q-005 [status:verified] Run full validation suite.
- [x] Q-006 [status:verified] Final code-quality pass and sign-off review.

## Findings Log

- [x] F-001 [status:verified] [P1] [confidence:0.99] Global error middleware rethrows after responding, which can crash the process on handled request failures.
  - Evidence: `server/index.ts` error middleware now logs and responds without rethrowing.
  - Owner: codex
  - Linked Fix: P-001
- [x] F-002 [status:verified] [P1] [confidence:0.98] `PATCH /api/sessions/:sessionId` accepted unvalidated request bodies and allowed mutation of protected fields.
  - Evidence: `server/routes.ts` now validates params/body with strict zod schemas and excludes protected fields (`sessionId`, `mode`) from updates.
  - Owner: codex
  - Linked Fix: P-002
- [x] F-003 [status:verified] [P2] [confidence:0.95] Unknown `/api/*` requests could fall through to SPA HTML handlers.
  - Evidence: explicit API 404 handlers added in `server/index.ts`, `server/static.ts`, and guarded dev catch-all in `server/vite.ts`.
  - Owner: codex
  - Linked Fix: P-003
- [x] F-004 [status:verified] [P2] [confidence:0.94] Development Vite server used `allowedHosts: true`.
  - Evidence: `server/vite.ts` now uses env-based host allowlist (`DEV_ALLOWED_HOSTS`, default `localhost,127.0.0.1`).
  - Owner: codex
  - Linked Fix: P-004
- [x] F-005 [status:verified] [P2] [confidence:0.91] Client localStorage reads/writes in theme/locale paths were not guarded.
  - Evidence: guarded storage access with try/catch in `client/src/components/ThemeToggle.tsx` and `client/src/lib/i18n.ts`.
  - Owner: codex
  - Linked Fix: P-005
- [x] F-006 [status:verified] [P2] [confidence:0.90] Audit timer state could remain stale when switching modes/restarting.
  - Evidence: timer reset path added and used from `setMode` and `startAudit` in `client/src/context/WizardContext.tsx`.
  - Owner: codex
  - Linked Fix: P-006
- [x] F-007 [status:verified] [P3] [confidence:0.88] Device OS detection order risked iOS/macOS misclassification.
  - Evidence: iOS detection now precedes macOS in `client/src/lib/wizardStorage.ts`; regression test added in `client/src/lib/wizardStorage.test.ts`.
  - Owner: codex
  - Linked Fix: P-007
- [x] F-008 [status:verified] [P2] [confidence:0.92] Missing baseline HTTP hardening headers and `x-powered-by` disable.
  - Evidence: `server/index.ts` now sets security headers, disables `x-powered-by`, applies API no-store caching, and limits request body size.
  - Owner: codex
  - Linked Fix: P-008
- [x] F-009 [status:verified] [P1] [confidence:0.97] Toolchain regressions blocked production checks (ESLint 9 flat config, Tailwind PostCSS v4, and component library API drifts).
  - Evidence: lint/build/typecheck failures reproduced and fixed via `eslint.config.cjs`, `postcss.config.js`, `client/src/index.css`, and UI wrapper updates (`calendar.tsx`, `chart.tsx`, `resizable.tsx`, `shared/schema.ts`).
  - Owner: codex
  - Linked Fix: P-009
- [x] F-010 [status:verified] [P3] [confidence:0.86] Missing targeted regression tests for new edge-case guards.
  - Evidence: added `client/src/lib/formatters.test.ts` and `client/src/lib/wizardStorage.test.ts`.
  - Owner: codex
  - Linked Fix: P-010
- [x] F-011 [status:accepted_risk] [P2] [confidence:0.95] Remaining `npm audit` findings are 4 moderate dev-toolchain vulnerabilities in `drizzle-kit` transitive chain.
  - Evidence: `npm audit --json` reports only `drizzle-kit/@esbuild-kit/esbuild` path after `npm audit fix`.
  - Owner: codex
  - Linked Fix: P-011

## Fix Log

- [x] P-001 [status:verified] Replace rethrowing error middleware with non-crashing response path and safe server-side logging.
  - Addresses: F-001
  - Evidence: `server/index.ts`
- [x] P-002 [status:verified] Add strict request validation and protected-field controls for session update/create paths.
  - Addresses: F-002
  - Evidence: `server/routes.ts`
- [x] P-003 [status:verified] Add explicit API 404 handling and prevent SPA catch-all from swallowing API routes.
  - Addresses: F-003
  - Evidence: `server/index.ts`, `server/static.ts`, `server/vite.ts`
- [x] P-004 [status:verified] Tighten Vite dev host policy with environment-based allowlist.
  - Addresses: F-004
  - Evidence: `server/vite.ts`
- [x] P-005 [status:verified] Harden theme/locale persistence against storage access exceptions.
  - Addresses: F-005
  - Evidence: `client/src/components/ThemeToggle.tsx`, `client/src/lib/i18n.ts`
- [x] P-006 [status:verified] Reset timer state consistently on mode changes and audit start.
  - Addresses: F-006
  - Evidence: `client/src/context/WizardContext.tsx`
- [x] P-007 [status:verified] Correct user-agent OS detection order for iOS/macOS edge cases.
  - Addresses: F-007
  - Evidence: `client/src/lib/wizardStorage.ts`, `client/src/lib/wizardStorage.test.ts`
- [x] P-008 [status:verified] Add baseline security headers and request-size constraints in server middleware.
  - Addresses: F-008
  - Evidence: `server/index.ts`
- [x] P-009 [status:verified] Restore toolchain compatibility for current dependency set.
  - Addresses: F-009
  - Evidence: `eslint.config.cjs`, `postcss.config.js`, `client/src/index.css`, `client/src/components/ui/calendar.tsx`, `client/src/components/ui/chart.tsx`, `client/src/components/ui/resizable.tsx`, `shared/schema.ts`, `server/routes.ts`
- [x] P-010 [status:verified] Add edge-case regression tests for hardened behavior.
  - Addresses: F-010
  - Evidence: `client/src/lib/formatters.test.ts`, `client/src/lib/wizardStorage.test.ts`
- [x] P-011 [status:accepted_risk] Track and contain remaining moderate audit findings pending dependency strategy decision.
  - Addresses: F-011
  - Evidence: `npm audit fix` reduced findings from 8 (2 high) to 4 (all moderate) without forcing major dependency breaks.

## Validation Log

- [x] V-001 [status:verified] `npm run check`
  - Evidence: 2026-03-06 16:02 ET pass
- [x] V-002 [status:verified] `npm run lint`
  - Evidence: 2026-03-06 16:02 ET pass
- [x] V-003 [status:verified] `npm test`
  - Evidence: 2026-03-06 16:02 ET pass (12 tests)
- [x] V-004 [status:verified] `npm run lint:i18n`
  - Evidence: 2026-03-06 16:02 ET pass
- [x] V-005 [status:verified] `npm run format:check`
  - Evidence: 2026-03-06 16:02 ET pass
- [x] V-006 [status:verified] `npm run build`
  - Evidence: 2026-03-06 16:03 ET pass (non-blocking CSS/chunk-size warnings only)
- [x] V-007 [status:verified] `npx tsx scripts/i18n-validate.ts`
  - Evidence: 2026-03-06 16:02 ET pass
- [x] V-008 [status:verified] `npx tsx scripts/i18n-render-sweep.ts`
  - Evidence: 2026-03-06 16:02 ET pass
- [x] V-009 [status:accepted_risk] `npm audit --json`
  - Evidence: 2026-03-06 16:03 ET fail with 4 moderate vulnerabilities in `drizzle-kit` transitive path only; high/low/critical findings resolved.

## Residual Risks

- [x] R-001 [status:accepted_risk] Remaining `drizzle-kit` transitive moderate vulnerabilities require a major dependency path (`npm audit fix --force`) that is not safe for this hardening pass without dedicated migration testing.
  - Rationale: forcing the major dependency action is likely to regress database tooling and requires a separate scoped upgrade plan.
  - Owner: engineering
  - Follow-up trigger/date: schedule dependency migration spike before next release cut.

## Change Log

- 2026-03-06T15:42:09: Checklist initialized.
- 2026-03-06T15:45:49: Scope and discovery findings captured; hardening fix plan expanded.
- 2026-03-06T16:03:30: Hardening fixes completed, compatibility/toolchain regressions resolved, regression tests added, validation matrix rerun, and residual security risk documented.
