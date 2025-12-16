# Design Guidelines: Footprint Audit Wizard

## Design Approach

**Selected Approach**: Design System - Material Design 3  
**Justification**: This is a utility-focused educational tool requiring clarity, trust, and efficiency. Material Design provides robust patterns for multi-step forms, progress indicators, and information-dense layouts essential for a 60-minute guided experience.

**Core Principles**:
1. **Clarity Above All**: Every element should guide users confidently through the audit process
2. **Trust & Safety**: Design must reinforce privacy-first messaging and data minimization
3. **Progressive Disclosure**: Show only what's needed at each step to avoid overwhelm
4. **Accessibility First**: WCAG compliance is non-negotiable for workforce diversity

---

## Typography System

**Font Family**: Roboto (via Google Fonts CDN) for UI, Roboto Slab for headings  

**Hierarchy**:
- **Page Titles**: text-4xl font-bold (step names, welcome, report card)
- **Section Headers**: text-2xl font-semibold (within steps)
- **Instructions**: text-base font-normal leading-relaxed (body copy)
- **Labels**: text-sm font-medium (form labels, toggles)
- **Captions**: text-xs (helper text, warnings, metadata)
- **Buttons**: text-base font-medium uppercase tracking-wide

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16, 24** consistently throughout (e.g., p-4, mb-8, gap-6)

**Container Structure**:
- **Max Width**: max-w-4xl mx-auto for wizard content (optimal reading/form width)
- **Section Padding**: px-6 py-8 on mobile, px-8 py-12 on desktop
- **Card Spacing**: gap-6 between major sections, gap-4 within cards
- **Form Spacing**: space-y-6 for form groups, space-y-4 for individual fields

**Grid Patterns**:
- Single column primary content flow (wizard steps)
- Two-column layout for report card summary tiles (grid-cols-1 md:grid-cols-2)
- Three-column for device/OS selection (grid-cols-3 gap-4)

---

## Component Library

### Navigation & Progress

**Wizard Progress Bar**:
- Fixed top bar showing 6 steps (Welcome, Public, Trackers, Fingerprint, Account, Cleanup, Report)
- Horizontal stepper with numbered circles
- Visual states: completed (checkmark), current (emphasized), upcoming (muted)
- Time remaining indicator aligned right: "~42 minutes remaining"

**Step Navigation**:
- Bottom-fixed action bar on mobile, inline on desktop
- "Skip" button (text only, left-aligned)
- "Next" button (filled, right-aligned)
- "Previous" breadcrumb link when applicable

### Core Components

**Welcome Screen**:
- Centered layout, no hero image needed
- Icon (shield with checkmark) at top
- Headline + 2-3 sentence description
- Mode toggle card: two large radio button cards side-by-side ("My Footprint" / "Fictional Persona Demo")
- Device selection dropdown (subtle, secondary importance)
- Prominent "Begin Audit" button

**Step Cards**:
- White/surface elevated card with rounded corners (rounded-lg)
- Structure per step:
  - Step number badge (top-left)
  - Step title (text-2xl)
  - Concept explanation (1-2 sentences, slightly larger text-lg)
  - "Why This Matters" callout box (subtle background, border-l-4 accent)
  - External links section with distinctive icon (heroicons external-link)
  - Data recording section (bordered, clear visual separation)
  - Collapsible "Common Pitfalls" accordion (initially collapsed)

**Input Components**:
- **Number inputs**: Large touch-friendly (h-12), with +/- steppers
- **Toggle switches**: Material-style switches for yes/no/unsure states
- **Radio groups**: Pill-style buttons for multiple choice (3-4 options max)
- **Dropdowns**: Native select with custom styling where feasible
- All inputs include visible labels above, helper text below when needed

**External Link Cards**:
- Distinct card style (outline border, no fill)
- Icon + service name + brief descriptor
- "Open in New Tab" button with external link icon
- Arranged vertically with gap-4

**Alert/Warning Boxes**:
- Three severity levels: info (blue accent), warning (amber accent), critical (red accent)
- Icon left-aligned, text with adequate breathing room
- Used for safety messages: "Don't paste sensitive info into this wizard"

**Report Card**:
- Hero summary section: large metric tiles showing key findings
- Tiles in 2-column grid: "Public Exposure Score", "Trackers Found", "Browser Uniqueness", "Ad Personalization Status"
- Each tile: large number/status, small label, brief interpretation
- "What This Means" section: accordion of findings with plain-language explanations
- "Your Next Actions" section: Numbered list (1-5) with actionable items, checkboxes for user planning
- Download buttons: outlined "Print/PDF", filled "Download Report" (both full-width on mobile)

### Special Components

**Panic Button**:
- Small link in footer: "Clear my lab data from this device"
- Confirmation modal before executing
- Destructive red accent when confirmed

**Fictional Persona Banner**:
- Persistent top banner when in demo mode
- Light background, icon, text: "You're viewing a fictional example. No real data collected."
- Dismissible but reappears on refresh if mode unchanged

---

## Interactions & Animations

**Minimal Approach** - animations only where they reduce cognitive load:
- Step transitions: Simple fade-in (300ms) when moving between steps
- Progress bar: Smooth width transition as steps complete
- Accordion expand/collapse: Height transition (200ms ease-out)
- Button states: Subtle scale (0.98) on press, no hover animations needed
- No parallax, no scroll-triggered effects, no decorative motion

---

## Accessibility Implementation

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<form>`
- ARIA labels on all interactive elements
- Focus visible states (ring-2 ring-offset-2)
- Keyboard navigation: Tab through wizard, Enter to submit, Escape to close modals
- Skip links: "Skip to main content", "Skip to next step"
- Form validation: Inline error messages with icons, aria-invalid attributes
- High contrast mode support: ensure borders visible in Windows High Contrast

---

## Images

**No hero image** - this is a functional wizard tool, not a marketing page.

**Icons Only**:
- Heroicons (outline style) via CDN for UI elements
- Step numbers in circles (custom styled div, not SVG)
- Service logos where linking externally (Google, Apple, EFF) - use official brand assets

---

## Mobile Considerations

- Progress stepper switches to vertical dropdown on mobile (< 640px)
- External link cards stack vertically
- Report card tiles stack to single column
- Fixed bottom action bar for Next/Skip buttons (with adequate thumb zone padding-bottom-safe-area)
- Collapsible sections default to collapsed on mobile
- Increased touch targets: min-h-12 for all interactive elements