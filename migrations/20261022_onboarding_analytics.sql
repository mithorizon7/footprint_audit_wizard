-- Reviewed additive migration. Apply only after backup and staging validation.
BEGIN;
CREATE TABLE IF NOT EXISTS audit_sessions (
  id serial PRIMARY KEY,
  session_id varchar(64) NOT NULL UNIQUE,
  mode varchar(20) NOT NULL,
  locale varchar(8),
  device_type varchar(20),
  os varchar(20),
  browser varchar(20),
  public_exposure_score integer,
  tracker_score integer,
  fingerprint_score integer,
  ad_settings_score integer,
  tracker_count integer,
  completed integer NOT NULL DEFAULT 0,
  created_at timestamp NOT NULL DEFAULT now(),
  completed_at timestamp
);
ALTER TABLE audit_sessions ADD COLUMN IF NOT EXISTS locale varchar(8);
CREATE TABLE IF NOT EXISTS onboarding_events (
  id serial PRIMARY KEY,
  session_id varchar(64) NOT NULL,
  event_name varchar(64) NOT NULL,
  step_key varchar(32),
  mode varchar(20),
  locale varchar(8),
  guidance_level varchar(16),
  device_type varchar(20),
  os varchar(20),
  browser varchar(20),
  time_since_start_sec integer,
  completed_checklist_count integer,
  target_checklist_count integer,
  unmet_items_count integer,
  unknown_answer_count integer,
  next_action_count integer,
  skipped_step_count integer,
  was_ready boolean,
  weak_report boolean,
  skipped boolean,
  occurred_at timestamp NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS onboarding_events_session_id_idx ON onboarding_events (session_id);
CREATE INDEX IF NOT EXISTS onboarding_events_event_name_idx ON onboarding_events (event_name);
CREATE INDEX IF NOT EXISTS onboarding_events_occurred_at_idx ON onboarding_events (occurred_at);
CREATE INDEX IF NOT EXISTS audit_sessions_created_at_idx ON audit_sessions (created_at);
COMMIT;
