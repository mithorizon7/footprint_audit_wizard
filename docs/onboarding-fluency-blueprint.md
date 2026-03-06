# Onboarding Fluency Blueprint

## Product Goal

Help workforce learners complete a privacy self-audit with confidence, collect meaningful findings, and leave with concrete next actions.

## First Meaningful Success

- **Success event**: User reaches the Report Card after recording enough key findings to generate useful next actions.
- **Failure event**: User advances through steps with mostly defaults/unknowns and reaches a weak or ambiguous report.
- **Shortest useful path**:
  1. Choose mode (self or fictional) and start audit.
  2. Complete minimum key findings per step.
  3. Review Report Card and check next actions.

## Friction Map (Before Changes)

- **Welcome overload**: too much dense content before the main start action.
- **Step overload**: educational sections opened first, increasing cognitive load before action.
- **Weak progression feedback**: users could advance without capturing key findings.

## Intervention Stack Implemented

1. **Self-descriptive UI first**
   - Welcome page restructured into an action-first flow.
   - Quick-start expectations surfaced near the top.
   - Secondary context moved to collapsible "Learn more" content.
2. **Contextual guidance at decision points**
   - Added a per-step guided checklist showing key items and live completion state.
3. **Soft progression guardrails**
   - Added a soft readiness prompt in navigation when users move ahead with too few key findings.
   - Users can still continue (non-blocking), preserving autonomy.
4. **Cognitive-load reduction**
   - Educational content panels now default collapsed across steps.

## Adaptive/Fading Behavior

- Guidance naturally fades when enough checklist items are completed (on-track state appears).
- If not enough key findings are recorded, guidance reappears only at step transition.

## Accessibility and Safety Notes

- Existing keyboard-friendly controls and semantic structure were preserved.
- No change to privacy model: data remains local-only and no personal identifiers are collected.

## Instrumentation Plan (Recommended Next)

Track these events to validate onboarding effectiveness:

- `welcome_started`
- `step_checklist_progressed` (step, completed_count, target)
- `step_next_prompt_shown` (step, unmet_items_count)
- `report_generated` (steps_skipped, unknown_answer_count)

Primary metrics:

- Time to Report Card
- Average key findings completed per step
- Prompt frequency before step transitions
- Report usefulness proxy (count of concrete next actions)

## Experiment Plan (Recommended Next)

- **Control**: previous onboarding flow.
- **Variant**: current action-first flow + guided checklists + soft prompts.
- **Decision rule**: keep variant only if it improves key-findings completion and report usefulness without increasing abandonment.
