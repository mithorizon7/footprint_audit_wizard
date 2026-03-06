# Onboarding Fluency Audit and Redesign Checklist

Source of truth checklist for a large/intense task.

## Metadata

- Created: 2026-03-06T15:22:45
- Last Updated: 2026-03-06T15:38:51
- Workspace: /Users/davedxn/Downloads/footprint_audit_wizard
- Checklist Doc: /Users/davedxn/Downloads/footprint_audit_wizard/docs/onboarding-fluency-audit-and-redesign-production-checklist.md

## Scope

- [x] Q-000 [status:verified] Capture explicit scope, constraints, and success criteria.
  - Scope: Improve first-session onboarding fluency for learner users in the wizard flow.
  - Constraints: Preserve privacy-first behavior, keep all data local-only, retain existing step/report functionality, preserve i18n compatibility.
  - Success criteria: users can identify the quickest path, complete key actions per step with lower confusion, and reach report card with higher-quality inputs.

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
  - Note: No isolated pure-function logic was introduced; existing project test harness has limited UI coverage. Used lint/type/test/i18n validation suite as regression guard.
- [x] Q-005 [status:verified] Run full validation suite.
- [x] Q-006 [status:verified] Final code-quality pass and sign-off review.

## Findings Log

- [x] F-001 [status:verified] [P2] [confidence:0.95] Welcome flow front-loads high-volume information before first action, increasing first-session abandonment risk.
  - Evidence: `client/src/pages/Welcome.tsx` renders multiple long educational cards and comparison tables before the core mode + start action.
  - Owner: codex
  - Linked Fix: P-001
- [x] F-002 [status:verified] [P2] [confidence:0.92] Step pages default to expanded educational content, adding extraneous cognitive load before users perform core tasks.
  - Evidence: `client/src/components/wizard/EducationalContent.tsx` uses `defaultOpen = true`, and each step page mounts this block ahead of instructions/input capture.
  - Owner: codex
  - Linked Fix: P-002
- [x] F-003 [status:verified] [P2] [confidence:0.90] Users can advance steps without any key finding recorded and receive no contextual recovery guidance.
  - Evidence: `client/src/components/wizard/StepNavigation.tsx` always advances on `Next`; no readiness checks or prompts tied to step response quality.
  - Owner: codex
  - Linked Fix: P-003
- [x] F-004 [status:verified] [P2] [confidence:0.93] Welcome mode cards were pointer-only interactions, reducing keyboard accessibility for first-step onboarding.
  - Evidence: `client/src/pages/Welcome.tsx` mode cards previously used `onClick` without keyboard handlers, focus, or pressed state.
  - Owner: codex
  - Linked Fix: P-004
- [x] F-005 [status:verified] [P2] [confidence:0.91] Account/Device guided checklist did not explicitly track platform selection, leaving a setup edge case under-guided.
  - Evidence: `client/src/pages/steps/AccountDevice.tsx` checklist previously omitted `mobilePlatformSelection` from readiness.
  - Owner: codex
  - Linked Fix: P-005

## Fix Log

- [x] P-001 [status:verified] Restructure welcome flow with a clear quick-start path and collapse secondary detail content.
  - Addresses: F-001
  - Evidence: `client/src/pages/Welcome.tsx` now presents quick-start expectations, mode selection, and start action before secondary context (moved under collapsible `Learn more`).
- [x] P-002 [status:verified] Set educational blocks to collapsed-by-default to prioritize action-first learning.
  - Addresses: F-002
  - Evidence: `client/src/components/wizard/EducationalContent.tsx` now defaults `defaultOpen = false`.
- [x] P-003 [status:verified] Add per-step guided checklist and soft readiness prompts before step transitions.
  - Addresses: F-003
  - Evidence: `client/src/components/wizard/GuidedChecklist.tsx` added; step pages wire checklist items; `client/src/components/wizard/StepNavigation.tsx` adds soft readiness prompt before continue.
- [x] P-004 [status:verified] Add keyboard-operable mode selection cards on Welcome with focus/pressed semantics.
  - Addresses: F-004
  - Evidence: `client/src/pages/Welcome.tsx` now adds keyboard handlers, `tabIndex`, `role=\"button\"`, and `aria-pressed` for mode cards.
- [x] P-005 [status:verified] Include platform-selection progress in Account/Device checklist and enforce a stronger minimum readiness target.
  - Addresses: F-005
  - Evidence: `client/src/pages/steps/AccountDevice.tsx` checklist now includes `deviceSelectionTitle` and uses `minimumCompleted = 2`.

## Validation Log

- [x] V-001 [status:verified] `npm run check`
  - Evidence: 2026-03-06 15:38 EST + pass
- [x] V-002 [status:verified] `npm run lint`
  - Evidence: 2026-03-06 15:38 EST + pass
- [x] V-003 [status:verified] `npm test`
  - Evidence: 2026-03-06 15:38 EST + pass
- [x] V-004 [status:verified] `npm run lint:i18n`
  - Evidence: 2026-03-06 15:38 EST + pass
- [x] V-005 [status:verified] `npm run format:check`
  - Evidence: 2026-03-06 15:38 EST + pass
- [x] V-006 [status:verified] `npx tsx scripts/i18n-validate.ts`
  - Evidence: 2026-03-06 15:38 EST + pass
- [x] V-007 [status:verified] `npx tsx scripts/i18n-render-sweep.ts`
  - Evidence: 2026-03-06 15:38 EST + pass
- [x] V-008 [status:verified] `npm run build`
  - Evidence: 2026-03-06 15:38 EST + pass (existing bundle-size warning only)

## Residual Risks

- [x] R-001 [status:accepted_risk] Copy tone/clarity may still vary by locale due new onboarding emphasis and existing translation nuance.
  - Rationale: UX structure is being improved in code-first changes; translation quality still depends on locale copy depth and future user testing.
  - Owner: product/content maintainer
  - Follow-up trigger/date: after first round of learner usability sessions

## Change Log

- 2026-03-06T15:22:45: Checklist initialized.
- 2026-03-06T15:24:12: Discovery complete, scope anchored, onboarding findings and planned fixes recorded.
- 2026-03-06T15:33:00: Implemented onboarding redesign, completed validation suite, and closed sign-off gates.
- 2026-03-06T15:38:51: Completed deep QA pass; fixed keyboard-access and account-step guidance edge cases; reran expanded validation matrix.
