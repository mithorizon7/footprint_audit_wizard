# October 2026 Security Audit Checklist

## Scope

- [x] Q-000 [status:verified] Complete authorized local audit and reversible fixes; distinguish all unverified deployed/device/incident actions. Preserve the existing uncommitted analytics rollout. No production mutation, credential rotation, global update, commit or push authorized in this audit.

## Sign-off Gate

- [x] G-001 [status:verified] Authorized local audit/remediation complete; external actions have owners and closure evidence in docs/security-audit-2026-10-22.md. This is not production sign-off.
- [x] G-002 [status:verified] Local findings resolved; unresolved environment findings retained at original urgency in report.
- [x] G-003 [status:verified] Final affected code checks rerun after last code edit (audit_sessions index).
- [x] G-004 [status:verified] Production, credential/incident and one-time device/network checklists published separately.

## Rerun Matrix

- [x] G-010 [status:verified] Reset affected checks after source edits; final results recorded below.
- [x] G-011 [status:verified] Final build/API smoke/tests/types/lint/i18n reflect final code state; formatting rerun after documentation edits.

## Audit Queue

- [x] Q-001 [status:verified] Pre-execution manifests, installed metadata, hooks, history and historical install-log precheck performed before install/test/build. No credible project compromise indicator observed; historical coverage limits documented.
- [x] Q-002 [status:verified] Reused prior valid hardening; refreshed baseline and matching package advisories. GitHub metadata available, Railway requires reauthentication, Replit app unavailable.
- [x] Q-003 [status:verified] Compatible package/runtime, auth/API, request/logging, telemetry privacy and CI changes implemented. Existing analytics changes preserved.
- [x] Q-004 [status:verified] Added real HTTP API tests and cookie/rate-limit tests; production smoke retained as scripts/security-smoke.mjs and wired into CI.
- [x] Q-005 [status:verified] Final source checks and dependency cross-check passed; database/provider limitations remain explicit.
- [x] Q-006 [status:verified] Published report, baseline applicability matrix, exact dependency findings, migration and deployment/device actions.

## Findings Log

- [x] F-001 [status:verified] [P1] [confidence:0.98] Node pins 20.16.0 unsupported, local 22.12.0 unpatched. Repository now requires 22.23.4+ on Node 22. Deployment and system runtime remain pending (SEC-01).
  - Evidence: .nvmrc, .replit, package engines/preflight; official checksum verified for isolated audit runtime.
  - Owner: engineering (local fix); release owner (deployed verification)
- [x] F-002 [status:verified] [P1] [confidence:0.98] Initial local npm scan 30 affected entries (2 critical, 15 high, 11 moderate, 2 low); fixed locally through compatible updates and scoped overrides.
  - Evidence: npm-audit-before/after.json and osv-after.json in ignored evidence; report appendix lists all entries and relevant configuration conditions.
  - Owner: engineering (local fix); release owner (deployed verification)
- [x] F-003 [status:verified] [P1] [confidence:0.98] Public session read/patch and permissive facilitator defaults fixed locally.
  - Evidence: server/routes.ts, server/facilitatorAuth.ts, server/routes.test.ts.
  - Owner: engineering (local fix); release owner (deployed verification)
- [x] F-004 [status:verified] [P2] [confidence:0.98] Login abuse/origin/cookie/credential weaknesses corrected.
  - Evidence: requestSecurity.ts, facilitatorAuth.ts and tests; localhost API verifies denied unauthenticated/cross-origin access, expiry and throttling.
  - Owner: engineering (local fix); release owner (deployed verification)
- [x] F-005 [status:verified] [P2] [confidence:0.98] Compressed parser, raw-body retention and sensitive response/path logging removed; dev listener restricted.
  - Evidence: server/index.ts; production smoke verifies headers, 415/413 and log redaction.
  - Owner: engineering (local fix); release owner (deployed verification)
- [x] F-006 [status:verified] [P2] [confidence:0.98] Unannounced telemetry/local-only claim mismatch and memory growth corrected.
  - Evidence: consent default-off gates, translated disclosure, cryptographic IDs, report ID removal and bounded fallback/query paths. Retention policy remains external action.
  - Owner: engineering (local fix); release owner (deployed verification)
- [x] F-007 [status:verified] [P2] [confidence:0.98] CI provenance/permissions/secret-ignore weaknesses corrected.
  - Evidence: verified official v7 action commits using Node 24, contents:read, no persisted credentials, scripts-disabled installs, audit/smoke gate, .gitignore.
  - Owner: engineering (local fix); release owner (deployed verification)
- [x] F-008 [status:verified] [P2] [confidence:0.98] Updated runtime exposed unsupported macOS reusePort setting; removed unnecessary option.
  - Evidence: initial local production ENOTSUP; final production HTTP smoke succeeds.
  - Owner: engineering (local fix); release owner (deployed verification)

## Fix Log

- [x] P-001 [status:verified] Runtime and dependency changes address F-001/F-002; 682 registry signatures and 119 attestations verified, final npm and OSV scans empty.
  - Addresses: F-001, F-002
  - Evidence: package.json, package-lock.json, .nvmrc; npm-audit-after.json, osv-after.json and npm-signatures.log
- [x] P-002 [status:verified] Server auth/API/logging/request changes address F-003/F-004/F-005/F-008; tests and production smoke pass.
  - Addresses: F-003, F-004, F-005, F-008
  - Evidence: server auth/request/routes/index changes; 29 tests and production-smoke.log
- [x] P-003 [status:verified] Privacy, caps, query/date bounds, export guard and CI changes address F-006/F-007; types/lint/i18n/build pass. Reviewed additive SQL migration prepared, not applied.
  - Addresses: F-006, F-007
  - Evidence: consent/provider/storage and workflow diff; type/lint/i18n/build evidence

## Validation Log

- [x] V-001 [status:verified] Pre-execution inspection and custom heuristic secret scan, 2026-10-22: 79 commits, 507 blobs, no pattern matches. Scope/limitations retained in secret-scan.json.
  - Evidence: 2026-10-22 13:27 EDT + pass; command results and scoped coverage reviewed in this item and companion security report.
- [x] V-002 [status:verified] Types, ESLint, locale lint, locale syntax and render sweep pass on final code. Node 22.23.4; 2026-10-22 approximately 13:23 EDT.
  - Evidence: 2026-10-22 13:27 EDT + pass; command results and scoped coverage reviewed in this item and companion security report.
- [x] V-003 [status:verified] Final tests: 8 files, 29 tests pass, 2026-10-22 13:23 EDT. Initial listener EPERM was a sandbox restriction; isolated localhost execution succeeded with scoped permission.
  - Evidence: 2026-10-22 13:27 EDT + pass; command results and scoped coverage reviewed in this item and companion security report.
- [x] V-004 [status:verified] Production build and final actual-bundle HTTP smoke pass, 2026-10-22 approximately 13:24 EDT. Pre-existing print CSS/chunk warnings retained.
  - Evidence: 2026-10-22 13:27 EDT + pass; command results and scoped coverage reviewed in this item and companion security report.
- [x] V-005 [status:verified] npm audit: zero; OSV: zero across 829 final entries; npm signatures: 682 verified/119 attestations; npm ls tree consistent. SBOM retained. Queries dated 2026-10-22; no source or secrets uploaded.
  - Evidence: 2026-10-22 13:27 EDT + pass; command results and scoped coverage reviewed in this item and companion security report.
- [x] V-006 [status:verified] KEV official mirror snapshot 2026.10.21 checked against all 18 baseline CVEs. BeyondTrust CVE-2026-102764 matches, dateAdded 2026-10-16. Direct CISA endpoint 403; no claim of real-time Oct 22 KEV completeness.
  - Evidence: 2026-10-22 13:27 EDT + pass; command results and scoped coverage reviewed in this item and companion security report.
- [x] V-007 [status:verified] Remote main inventory independently scanned: 803 entries, 38 OSV matches, 27 package names. Different lock hash confirmed; no remote fixes claimed.
  - Evidence: 2026-10-22 13:27 EDT + pass; command results and scoped coverage reviewed in this item and companion security report.
- [x] V-008 [status:verified] Final Prettier and git diff whitespace checks pass. Companion report contains exact deployment commands and closure requirements.
  - Evidence: 2026-10-22 13:27 EDT + pass; command results and scoped coverage reviewed in this item and companion security report.

## Residual Risks

- [x] R-001 [status:accepted_risk] External verification limitation, not acceptance of deployment risk: live service/runtime/database/trust/logs since Oct 17/provider rotation evidence unavailable.
  - Rationale: No production mutation or global changes made. Source fixes are locally verified only; current deployed exposure remains unverified at original urgency.
  - Owner: release/infrastructure owner
  - Follow-up trigger/date: before production promotion; reconnect provider, identify service and inspect actual versions/digests/logs/ACLs/rotations.
- [x] R-002 [status:accepted_risk] Remote main drift and device findings remain outstanding outside this checkout.
  - Rationale: Remote main has a distinct affected lockfile. Device pip/certifi metadata is old; global upgrades were not authorized. Exact remediation path and ownership are in report.
  - Owner: release owner and device owner
  - Follow-up trigger/date: reconcile main and rescan before deployment; perform vendor trust updates from an assessed clean environment.
- [x] R-003 [status:accepted_risk] Database migration not executed and multi-replica/shared throttling, telemetry retention, and facilitator token revocation limitations require deployment decisions.
  - Rationale: No DATABASE_URL available; no claimed PostgreSQL/production validation. Stateless cookies expire in 12 hours or on credential rotation. Public telemetry is self-reported, not evidence of authenticated learner identity.
  - Owner: engineering/operations
  - Follow-up trigger/date: staging test and policy/proxy/edge review before first analytics rollout.

## Change Log

- 2026-10-22: Precheck, previous-work review, fresh advisories and inventory completed. No credible compromise indicator found in inspected artifacts.
- 2026-10-22: Compatible updates with scripts disabled; npm 10 resolver failed internally, npm 11 under isolated patched Node succeeded. No forced major upgrade or global runtime change.
- 2026-10-22: Auth/API/privacy/CI fixes and regression tests completed. Production smoke uncovered and verified fix for reusePort startup failure.
- 2026-10-22: Final local checks passed. External production/incident/device actions remain explicitly unverified; no production clearance claimed.

## Authorized Release Continuation

- [x] Q-007 [status:verified] User authorized remaining project fixes, commit, push and deploy. Preserved prior work in 65e433c, reconciled origin/main in 554ad64, and validated the merged source with 32 passing tests.
- [ ] Q-008 [status:open] Push release, run CI and publish to the identified existing production service.
- [ ] V-009 [status:open] Verify exact released commit, database migration, runtime and live HTTP behavior.
  - Evidence: pending deployment target/access.

- [x] F-009 [status:verified] [P2] [confidence:0.99] Release review found checklist percentages exceeding 100, unordered completion rows selecting old outcomes, duplicate report views biasing averages, resumed audit denominators, and memory storage retaining explicitly cleared scores.
  - Evidence: facilitatorMetrics.ts and storage.ts corrected; regression coverage in facilitatorMetrics.test.ts and routes.test.ts. Thirty-two tests pass, including six API/persistence tests against isolated PostgreSQL 17.9.
- [x] V-010 [status:verified] Additive migration applied twice successfully to an isolated PostgreSQL 17.9 database; actual database-backed API/persistence tests pass. This is local validation, not production migration evidence.
- [x] Q-009 [status:verified] Located the existing Replit app through keyword search: Footprint Audit, app 3d6b1ec9-941f-43da-b7e5-4b1202cbf354, published address https://footprintaudit.replit.app. Read-only Replit inspection confirms the matching GitHub origin and a clean worktree at 590364f; workspace runtime Node 20.20.0, database variable present, facilitator secrets and public-origin variable absent. Replit reports a failed latest publish with an earlier successful deployment still serving; serving runtime/configuration remains unverified.
- [x] F-010 [status:verified] [P2] [confidence:0.99] Corrected six over-escaped print selectors that the production CSS optimizer rejected. Facilitator session expiry now refreshes auth state; auth-load retry retries auth, logout failures are handled, and missing scores no longer appear as zero scores.
  - Evidence: client/src/index.css and client/src/pages/FacilitatorDashboard.tsx; final release CI required after this follow-up.
- [x] V-011 [status:verified] Print/dashboard follow-up CI run 39830221886 passed all steps at bcd6355; PR 23 merged into main at 8a88722. Local final types, lint, locale checks, format, 32 tests, production build and HTTP smoke also pass. All three locales pass the translation-key sweep. Six print warnings are resolved; bundle-size warning remains.
- [x] F-011 [status:verified] [P1] [confidence:1.0] Actual browser practice flow reached a blank report: the exposure tile called a const formatter before initialization when exposure count was nonzero. Moved initialization before metric construction; added nine actual component-render tests across en/lv/ru and exposure counts 0/2/5. Vitest now uses the same automatic JSX runtime as the app.
  - Evidence: local browser console ReferenceError at report navigation; nine ReportCard rendering tests now pass. Final follow-up CI and browser rerun pending.
- [ ] V-012 [status:in_progress] Verify report-crash follow-up through final CI and actual browser navigation before Replit publish.

Railway remains unauthenticated but is not the identified release target. Replit workspace runtime and deployment synchronization are now in scope. System-wide device upgrades remain outside this project release. Telemetry retention and shared edge throttling still require an operations policy; no destructive cleanup or shared credential rotation is authorized implicitly.
