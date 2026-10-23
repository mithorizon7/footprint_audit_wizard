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
- The final release also includes the mobile practice-banner spacing correction
  in `53b068e`.
- Original workspace commit is retained on branch `recovery/pre-pr23-590364f`.

## Runtime and deployment settings

- Use the official Linux x64 Node **22.23.4** archive, pinned by SHA-256. The
  available Replit Node 22 module is an earlier patch.
- The workspace PATH, app workflow, production build, and production start
  prioritize/check the pinned runtime and fail closed instead of using an older
  fallback.
- Production performs a clean lockfile install with lifecycle scripts disabled
  under that runtime before building. CI separately tests the Linux runtime
  launcher against the official checksum-pinned archive.
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
- **Production before publication:** Neither addition is present in the
  production schema. Production Database Settings was inspected on October 23
  at 18:39 UTC: point-in-time recovery is **On, last 7 days**; scheduled backups
  are off. The platform advertises restoration to any exact time in that window.
  No live restoration was executed, and no separate production dump was created.
  The development dump is not a production backup.
- Record the pre-publish UTC time as the production recovery reference. Replit
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

## Publication outcome (October 23)

- Published application release: `6528baf052f5845aa0e4882a63ece8b10320d386`.
- Serving build receipt: `e36c56fb-9406-4729-b887-a42721954c26`, successful
  at 2026-10-23 19:10:59 UTC; build metadata confirms that exact source commit.
- URL: https://footprintaudit.replit.app.
- The six reviewed additive operations were approved through the website's
  schema-review flow. Production catalog inspection confirms the locale column,
  analytics table and all four valid indexes. No existing learner data was
  replaced or deleted.
- Final main CI run `40008695454` passed. Live checks at 19:11 UTC confirmed
  the validated JavaScript content, 113586-byte stylesheet, security headers,
  request boundaries, protected reporting and successful synthetic telemetry
  persistence. One fictional QA session is reused; no learner records were read.
- The runtime is enforced by the checksum-pinned launcher/version guard; direct
  production process-version telemetry was unavailable.
- Facilitator credentials are still absent. The published dashboard is
  deliberately unavailable until the operator enters both Replit Secrets and
  republishes. Do not weaken the guard to bypass that setup requirement.

The earlier preparation sections describe the pre-publication state; this
outcome supersedes their pending-publication and pending-migration statements.
