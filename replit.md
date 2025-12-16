# Footprint Audit Wizard

A guided 60-minute digital privacy self-assessment lab for workforce adults. This web application helps users understand and improve their digital footprint through a structured wizard experience.

## Overview

**Purpose**: Educate participants about digital tracking by making the "invisible" visible and measurable, while providing practical digital hygiene actions.

**Key Principle**: Self-audit only. No personal data is collected, stored, or transmitted. All wizard data stays in localStorage on the user's device.

## Architecture

### Frontend (React + TypeScript)
- **Wizard Flow**: 7 steps (Welcome, Public Exposure, Trackers, Fingerprinting, Account/Device, Cleanup, Report Card)
- **State Management**: React Context API (`WizardContext`) for wizard state
- **Storage**: localStorage only - no backend persistence required
- **Styling**: Tailwind CSS with Roboto/Roboto Slab fonts

### Backend (Express)
- Minimal - serves static assets only
- No API routes needed (all data stays client-side)
- No database required

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── wizard/           # Wizard-specific components
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── StepCard.tsx
│   │   │   ├── StepNavigation.tsx
│   │   │   ├── ExternalLinkCard.tsx
│   │   │   ├── AlertBox.tsx
│   │   │   ├── NumberStepper.tsx
│   │   │   ├── RadioPills.tsx
│   │   │   ├── FictionalBanner.tsx
│   │   │   ├── ToolFallbackBlock.tsx
│   │   │   └── PanicButton.tsx
│   │   ├── ui/               # shadcn components
│   │   └── ThemeToggle.tsx
│   ├── context/
│   │   └── WizardContext.tsx # Global wizard state
│   ├── lib/
│   │   ├── wizardStorage.ts  # localStorage helpers
│   │   └── i18n.ts           # Translations for en, lv, ru
│   ├── pages/
│   │   ├── Welcome.tsx
│   │   ├── ReportCard.tsx
│   │   └── steps/
│   │       ├── PublicExposure.tsx
│   │       ├── Trackers.tsx
│   │       ├── Fingerprinting.tsx
│   │       ├── AccountDevice.tsx
│   │       └── Cleanup.tsx
│   └── App.tsx
shared/
└── schema.ts                 # TypeScript interfaces & Zod schemas
```

## Data Model

All data stored in localStorage under key `footprintWizard:v1`:

```typescript
interface WizardData {
  version: "1.0";
  mode: "self" | "fictional";
  device: { type, os, browser };
  currentStep: number;
  startedAt: string | null;
  completedAt: string | null;
  results: {
    publicExposure: { searchResultPagesWithPersonalInfo, peopleSearchSitesFound, ... };
    trackers: { blacklightRun, trackerCount, sessionRecordingFlagged, ... };
    fingerprinting: { effTestRun, browserUnique, trackingProtection };
    accountDevice: { googlePersonalizedAds, applePersonalizedAds, ... };
    cleanup: { cookiesCleared, thirdPartyCookiesBlockedOrLimited, ... };
  };
}
```

## Features

- **Timer System**: 60-minute countdown with per-step target times, elapsed time tracking, and session persistence in localStorage
- **Progress Tracking**: Visual progress bar with step indicators, current step highlighting, and time remaining display
- **Two Modes**: 
  - "My Footprint" - Real self-audit
  - "Fictional Persona" - Prefilled demo data with "Try live tools anyway" toggle
- **Skip Functionality**: Skip any step; skipped steps appear in dedicated Report Card section with educational context
- **External Tool Links**: Opens trusted tools (Blacklight, EFF, Have I Been Pwned, etc.) in new tabs
- **Tool Fallback Blocks**: Collapsible instructions for when external tools are blocked by corporate networks
- **Browser-Specific Guidance**: Cleanup step detects browser and shows relevant instructions for Chrome, Firefox, Safari, or Edge
- **Report Card**: Summary metrics, radar/bar charts, skipped items section, Reality Check disclaimer, and personalized next actions
- **PDF Export**: Print stylesheet for clean PDF generation with proper page breaks and hidden navigation
- **Dark Mode**: Theme toggle with system preference detection
- **Panic Button**: Clear all wizard and timer data instantly with confirmation dialog
- **PII Protection**: No free-text inputs; warning labels on any PII-adjacent content
- **Mobile Responsive**: Works on all device sizes
- **WCAG Accessible**: Semantic HTML, keyboard navigation, high contrast
- **Multi-language Support**: Full i18n with English (en), Latvian (lv), and Russian (ru) translations via I18nContext

## Internationalization (i18n)

### Architecture
- **ICU MessageFormat**: Uses `intl-messageformat` for pluralization and complex messages
- **Bundled Locales**: All translations bundled in `client/src/lib/i18n.ts`
- **Fallback Chain**: User preference → Browser locale → Latvian (lv) → English (en)
- **Dev Mode**: Missing keys display as `[MISSING: key.path]` in red

### Key Naming Conventions
Follow the pattern: `namespace.screen.element.state`

Examples:
- `common.next` - Common UI elements
- `welcome.title` - Welcome page title
- `publicExposure.searchPagesQuestion` - Step-specific question
- `externalTools.blacklightTitle` - External tool name
- `badges.optional` - UI badge text
- `cleanupActions.yes` - Cleanup action option

### Namespaces
- `common` - Shared UI elements (buttons, actions)
- `accessibility` - Aria labels, screen reader text
- `welcome`, `steps`, `report`, `panic` - Page/section content
- `publicExposure`, `trackers`, `fingerprinting`, `accountDevice`, `cleanup` - Wizard step content
- `externalTools` - External tool names and descriptions
- `badges` - UI badge labels
- `siteCategories`, `trackingProtection`, `adSettings`, `androidActions`, `iosAtt`, `cleanupActions` - Option labels

### Validation Scripts
```bash
# Validate ICU syntax and check for missing keys
npx tsx scripts/i18n-validate.ts

# Scan for hardcoded strings
npx tsx scripts/i18n-scan.ts

# Render sweep test (checks all locales for missing translations)
npx tsx scripts/i18n-render-sweep.ts
```

### Adding New Translations
1. Add key to `Translations` interface in `client/src/lib/i18n.ts`
2. Add English translation to `const en`
3. Add Latvian translation to `const lv`
4. Add Russian translation to `const ru`
5. Run validation: `npx tsx scripts/i18n-validate.ts`

## External Tools Referenced

- [Blacklight](https://themarkup.org/blacklight) - Website privacy inspector
- [EFF Cover Your Tracks](https://coveryourtracks.eff.org/) - Fingerprinting test
- [Google Results About You](https://myactivity.google.com/results-about-you)
- [Google Ad Center](https://myadcenter.google.com/)
- Apple/Android ad settings links (contextual)

## Privacy & Safety

- NO backend data collection
- NO personal identifiers stored
- Only coarse counts and yes/no toggles recorded
- All data stored locally in browser
- External links open with `target="_blank" rel="noopener noreferrer"`

## Running the Application

```bash
npm run dev
```

The app runs on port 5000. Frontend and backend are served together via Vite middleware.
