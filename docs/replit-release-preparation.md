# Replit release preparation

## Reviewed release

- GitHub `main`: `de2ca1cb5e0b423c96dda434f2bcdcba05e2cdc6`.
- Includes PR 23's opt-in analytics/facilitator hardening and PR 24's localized
  learner-report rendering fix.
- GitHub `build-test` passed on the exact requested commit; the owner reports
  all 41 tests and final CI passed.
- Workspace branch `release/pr24-preparation` starts at the exact reviewed
  source commit and adds Replit deployment/runtime configuration only.
- Original workspace commit is retained on branch `recovery/pre-pr23-590364f`.

## Runtime and deployment settings

- Use the official Linux x64 Node **22.23.4** archive, pinned by SHA-256. The
  available Replit Node 22 module is an earlier patch.
- The workspace PATH, app workflow, production build, and production start
  prioritize/check the pinned runtime and fail closed instead of using an older
  fallback.
- Keep the original Python module available in the workspace.
- Production `PUBLIC_ORIGIN` must equal `https://footprintaudit.replit.app`.
  Development uses request-origin validation and does not inherit that
  production-only origin value.
- The deployed service has not been updated or runtime-verified. Do not publish
  until the release prerequisites are satisfied.

## Database recovery and migration

- **Development:** A private custom-format backup from before this release's
  analytics migration is retained at `generated-artifacts/recovery/pre-pr23-development.dump`
  (directory mode `0700`; file mode `0600`). It was restored into an isolated
  PostgreSQL 16.10 clone. The additive migration succeeded twice on that clone
  while preserving existing audit-row counts/content fingerprints.
- The reviewed migration was then applied to **development** only. The
  `audit_sessions.locale` column and `onboarding_events` table are present in
  the development schema.
- **Production:** Neither addition is present in the production schema. No
  production migration or production backup was performed or verified. The
  development dump is not a production backup and must not be treated as one.
- Before a separately authorized publish, verify a recoverable production
  backup/PITR point and review Replit's managed Publish schema diff. Permit only
  the reviewed additive changes; never overwrite production data.
- The isolated validation server has been shut down. No long-running migration
  or database-validation task remains.

## Release gates

- Do not weaken opt-in analytics or fail-closed facilitator authentication.
- `FACILITATOR_PASSWORD` and `FACILITATOR_SESSION_SECRET` are not present.
  Configure both as Replit Secrets without rotating existing values: a unique
  random password of at least 16 characters (prefer 24+) and an independent
  session secret of at least 32 characters (prefer 32 random bytes encoded in
  base64). Never enter them in source control or chat. Until then facilitator
  access correctly remains unavailable.
- Prior visual verification found missing Tailwind spacing/layout utilities in
  the reviewed CSS build. PR 24 changes report rendering, not the Tailwind
  entrypoint; recheck the latest commit's generated styles before readiness.
  Do not redesign the app as part of deployment preparation.
- Existing reported validation of the reviewed source: 41 tests, passing
  GitHub CI. Runtime-specific checks still need to verify build/start under the
  pinned Node after the Replit settings are restored.

No production publication was performed.
