# Onboarding analytics and facilitator access hardening Checklist

Source of truth checklist for a large/intense task.

## Metadata

- Created: 2026-03-10T11:00:49
- Last Updated: 2026-03-10T11:25:00
- Workspace: /Users/davedxn/Downloads/footprint_audit_wizard
- Checklist Doc: /Users/davedxn/Downloads/footprint_audit_wizard/docs/onboarding-analytics-and-facilitator-access-hardening-production-checklist.md

## Scope

- [x] Q-000 [status:verified] Capture explicit scope, constraints, and success criteria.
  - Scope: Add privacy-safe first-party onboarding analytics, a usable facilitator review surface, CSV export/date filters, and protected facilitator access.
  - Constraints: Preserve privacy-first product posture, avoid third-party analytics, keep learner data anonymous, maintain i18n coverage, and fit the existing Express + React stack.
  - Success criteria: real wizard sessions are persisted, onboarding events are measurable, facilitators can securely review funnel/drop-off metrics, exports work, and the final production validation suite passes.

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
  - Note: Added client analytics helper coverage plus new server auth/metrics tests, and corrected `vitest.config.ts` so server tests actually run.
- [x] Q-005 [status:verified] Run full validation suite.
- [x] Q-006 [status:verified] Final code-quality pass and sign-off review.

## Findings Log

- [x] F-001 [status:verified] [P1] [confidence:0.99] The existing facilitator metrics path was effectively inert because the client never persisted wizard sessions or onboarding events.
  - Evidence: prior grep audit showed `client/src` had no calls to `/api/sessions`; facilitator metrics existed only in `server/routes.ts` and `server/storage.ts`.
  - Owner: codex
  - Linked Fix: P-001
- [x] F-002 [status:verified] [P1] [confidence:0.97] Facilitator metrics and the `/facilitator` review surface were publicly reachable with no access control.
  - Evidence: pre-change `server/routes.ts` exposed `/api/facilitator/metrics` directly and `client/src/App.tsx` routed `/facilitator` without any auth boundary.
  - Owner: codex
  - Linked Fix: P-002
- [x] F-003 [status:verified] [P2] [confidence:0.95] The old dashboard exposed only coarse aggregate stats, so it could not answer onboarding questions like where learners stalled, which step needed prompts, or how report quality changed.
  - Evidence: pre-change `client/src/pages/FacilitatorDashboard.tsx` and `server/storage.ts` exposed only total/completion/score/device trend metrics with no funnel, step, prompt, locale, or export coverage.
  - Owner: codex
  - Linked Fix: P-003
- [x] F-004 [status:verified] [P2] [confidence:0.96] The test harness silently excluded server-side tests, which would have left the new auth and metrics aggregation code unexercised.
  - Evidence: `vitest.config.ts` included only `client/src/**/*.test.ts`.
  - Owner: codex
  - Linked Fix: P-004

## Fix Log

- [x] P-001 [status:verified] Add anonymous session identity, client analytics provider, wizard session syncing, and onboarding event emission.
  - Addresses: F-001
  - Evidence: `shared/schema.ts`, `client/src/context/WizardContext.tsx`, `client/src/context/OnboardingAnalyticsContext.tsx`, `client/src/lib/onboardingAnalytics.ts`, `client/src/components/wizard/GuidedChecklist.tsx`, `client/src/components/wizard/StepNavigation.tsx`, `client/src/pages/Welcome.tsx`
- [x] P-002 [status:verified] Protect facilitator access with password-gated session auth and secure metrics/export routes.
  - Addresses: F-002
  - Evidence: `server/facilitatorAuth.ts`, `server/routes.ts`, `client/src/pages/FacilitatorDashboard.tsx`
- [x] P-003 [status:verified] Add first-party onboarding event storage, server-side aggregation, CSV export, date filters, and a rebuilt facilitator dashboard focused on onboarding review.
  - Addresses: F-003
  - Evidence: `server/facilitatorMetrics.ts`, `server/storage.ts`, `server/routes.ts`, `client/src/pages/FacilitatorDashboard.tsx`, `client/src/lib/i18n.ts`
- [x] P-004 [status:verified] Expand automated coverage to include analytics helpers and server auth/aggregation logic, and fix Vitest include patterns so server tests run.
  - Addresses: F-004
  - Evidence: `client/src/lib/onboardingAnalytics.test.ts`, `server/facilitatorAuth.test.ts`, `server/facilitatorMetrics.test.ts`, `vitest.config.ts`

## Validation Log

- [x] V-001 [status:verified] `npm run check`
  - Evidence: 2026-03-10 11:25 EDT + pass
- [x] V-002 [status:verified] `npm run lint`
  - Evidence: 2026-03-10 11:25 EDT + pass
- [x] V-003 [status:verified] `npm test`
  - Evidence: 2026-03-10 11:25 EDT + pass (6 files, 20 tests)
- [x] V-004 [status:verified] `npm run lint:i18n`
  - Evidence: 2026-03-10 11:25 EDT + pass
- [x] V-005 [status:verified] `npm run format:check`
  - Evidence: 2026-03-10 11:25 EDT + pass
- [x] V-006 [status:verified] `npx tsx scripts/i18n-render-sweep.ts`
  - Evidence: 2026-03-10 11:25 EDT + pass
- [x] V-007 [status:verified] `npm run build`
  - Evidence: 2026-03-10 11:25 EDT + pass (existing print CSS warnings and bundle-size warning only)

## Residual Risks

- [x] R-001 [status:accepted_risk] Existing build warnings remain for print utility CSS parsing and a large client bundle; they were not introduced by this analytics/auth rollout.
  - Rationale: The warnings are pre-existing and non-blocking for the new onboarding analytics functionality, but they still represent cleanup work for future release hardening.
  - Owner: engineering
  - Follow-up trigger/date: address before the next bundle/performance optimization pass
- [x] R-002 [status:accepted_risk] Database schema push could not be executed in this workspace because `DATABASE_URL` is unset.
  - Rationale: The code and schema definitions for `audit_sessions`/`onboarding_events` are ready, but any Postgres-backed deployment must run `npm run db:push` before facilitator analytics can persist outside in-memory storage.
  - Owner: deployer/release engineer
  - Follow-up trigger/date: before first production deployment of this analytics stack

## Change Log

- 2026-03-10T11:00:49: Checklist initialized.
- 2026-03-10T11:05:00: Discovery completed; confirmed missing client telemetry, public facilitator access, and dashboard observability gaps.
- 2026-03-10T11:18:00: Implemented first-party onboarding telemetry, facilitator auth, server aggregation, CSV export, and rebuilt dashboard review flow.
- 2026-03-10T11:22:00: Added analytics/auth regression tests and corrected Vitest server test coverage.
- 2026-03-10T11:25:00: Final validation suite rerun on final code state; all gates verified and residual risks documented.
- 2026-03-10T11:26:00: Confirmed local workspace has no `DATABASE_URL`; documented required production `db:push` follow-up.
