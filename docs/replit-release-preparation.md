# Replit release preparation

## Reviewed release

- Reviewed source branch:
  `codex/security-analytics-production-release` at
  `57f100f1037c0ecd78ac0526f7e9013a8b69395e`.
- Includes the final Tailwind layout fix in addition to the reviewed security,
  opt-in analytics, facilitator access, and report fixes.
- GitHub `build-test` passed on the exact reviewed source commit; the owner
  reports all 41 tests and final CI passed.
- The deployment preparation branch merges this exact reviewed source without
  independent application rewrites.
- Original workspace commit is retained on branch `recovery/pre-pr23-590364f`.

## Runtime and deployment settings

- Use the official Linux x64 Node **22.23.4** archive, pinned by SHA-256. The
  available Replit Node 22 module is an earlier patch.
- The workspace PATH, app workflow, production build, and production start
  prioritize/check the pinned runtime and fail closed instead of using an older
  fallback.
- Keep the original Python module available in the workspace.
- Production `PUBLIC_ORIGIN` is
  `https://footprintaudit.replit.app`.
  Development uses request-origin validation and does not inherit that
  production-only origin value.
- The existing deployed service has not been updated or runtime-verified.

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
- Production point-in-time recovery/scheduled-backup availability must be
  confirmed in the production Database tool's Settings before Publish. Replit
  applies managed production schema changes through Publish; do not run direct
  production DDL or overwrite production data.
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
- The reviewed Tailwind fix is present in the merged application source and the
  Replit preview confirms that the learner layout styles render.
- Recheck build/start under the pinned Node after every Replit configuration
  change. Verify the actual published runtime only after a later approved
  publication.

No production migration or publication was performed.
