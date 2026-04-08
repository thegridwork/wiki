# WCAG 2.1 Level A and AA Criteria

> A comprehensive reference of all 50 WCAG 2.1 success criteria at Level A (30 criteria) and Level AA (20 criteria), grouped by principle, representing the standard legal compliance target for web accessibility.

## Key Points
- 50 criteria total: 30 Level A + 20 Level AA
- Level AA conformance requires meeting all 50 criteria (A + AA combined)
- Perceivable has the most criteria (23 at A+AA), followed by Operable (18), Understandable (7), and Robust (2+)
- Many Level A criteria are foundational (alt text, keyboard access, heading structure) while Level AA adds refinement (contrast ratios, text resizing, focus visibility)
- WCAG 2.1 added 12 new A/AA criteria over WCAG 2.0, primarily for mobile, low vision, and cognitive accessibility

## Detail

### Principle 1: Perceivable (23 criteria at A+AA)

#### Guideline 1.1 -- Text Alternatives

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 1.1.1 | Non-text Content | A | All non-text content has a text alternative serving the equivalent purpose |

#### Guideline 1.2 -- Time-based Media

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 1.2.1 | Audio-only and Video-only (Prerecorded) | A | Alternative provided for prerecorded audio-only or video-only media |
| 1.2.2 | Captions (Prerecorded) | A | Captions for all prerecorded audio in synchronized media |
| 1.2.3 | Audio Description or Media Alternative (Prerecorded) | A | Audio description or full text alternative for prerecorded video |
| 1.2.4 | Captions (Live) | AA | Captions for all live audio in synchronized media |
| 1.2.5 | Audio Description (Prerecorded) | AA | Audio description for all prerecorded video content |

#### Guideline 1.3 -- Adaptable

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 1.3.1 | Info and Relationships | A | Structure and relationships conveyed through presentation are programmatically determinable |
| 1.3.2 | Meaningful Sequence | A | Correct reading sequence is programmatically determinable |
| 1.3.3 | Sensory Characteristics | A | Instructions do not rely solely on shape, color, size, location, orientation, or sound |
| 1.3.4 | Orientation | AA | Content does not restrict display to a single orientation unless essential *(2.1 new)* |
| 1.3.5 | Identify Input Purpose | AA | Purpose of input fields collecting user information is programmatically determinable *(2.1 new)* |

#### Guideline 1.4 -- Distinguishable

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 1.4.1 | Use of Color | A | Color is not the only visual means of conveying information |
| 1.4.2 | Audio Control | A | Auto-playing audio (>3 seconds) has pause/stop or volume control |
| 1.4.3 | Contrast (Minimum) | AA | Text contrast ratio at least 4.5:1 (3:1 for large text, defined as 18pt or 14pt bold) |
| 1.4.4 | Resize Text | AA | Text resizable up to 200% without loss of content or functionality |
| 1.4.5 | Images of Text | AA | Text used instead of images of text, except where customizable or essential |
| 1.4.10 | Reflow | AA | Content reflows without 2D scrolling at 320 CSS px wide / 256 CSS px tall *(2.1 new)* |
| 1.4.11 | Non-text Contrast | AA | UI components and graphical objects have 3:1 contrast ratio against adjacent colors *(2.1 new)* |
| 1.4.12 | Text Spacing | AA | No content loss when overriding: line height >= 1.5x, paragraph spacing >= 2x, letter spacing >= 0.12x, word spacing >= 0.16x font size *(2.1 new)* |
| 1.4.13 | Content on Hover or Focus | AA | Additional content on hover/focus is dismissible, hoverable, and persistent *(2.1 new)* |

### Principle 2: Operable (18 criteria at A+AA)

#### Guideline 2.1 -- Keyboard Accessible

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 2.1.1 | Keyboard | A | All functionality operable through keyboard |
| 2.1.2 | No Keyboard Trap | A | Focus can always be moved away from any component |
| 2.1.4 | Character Key Shortcuts | A | Single-character shortcuts can be turned off, remapped, or only active on focus *(2.1 new)* |

#### Guideline 2.2 -- Enough Time

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 2.2.1 | Timing Adjustable | A | Time limits can be turned off, adjusted, or extended (at least 10x) |
| 2.2.2 | Pause, Stop, Hide | A | Moving, blinking, scrolling, or auto-updating content can be paused, stopped, or hidden |

#### Guideline 2.3 -- Seizures and Physical Reactions

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 2.3.1 | Three Flashes or Below Threshold | A | Nothing flashes more than 3 times/second, or flash below thresholds |

#### Guideline 2.4 -- Navigable

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 2.4.1 | Bypass Blocks | A | Mechanism to bypass repeated blocks of content |
| 2.4.2 | Page Titled | A | Pages have descriptive titles |
| 2.4.3 | Focus Order | A | Focus order preserves meaning |
| 2.4.4 | Link Purpose (In Context) | A | Link purpose determinable from text or context |
| 2.4.5 | Multiple Ways | AA | More than one way to locate a page within a set |
| 2.4.6 | Headings and Labels | AA | Headings and labels describe topic or purpose |
| 2.4.7 | Focus Visible | AA | Keyboard focus indicator is visible |

#### Guideline 2.5 -- Input Modalities

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 2.5.1 | Pointer Gestures | A | Multipoint/path-based gestures have single-pointer alternatives *(2.1 new)* |
| 2.5.2 | Pointer Cancellation | A | Single-pointer: down-event does not trigger; up-event triggers or can abort *(2.1 new)* |
| 2.5.3 | Label in Name | A | Visible label text included in accessible name *(2.1 new)* |
| 2.5.4 | Motion Actuation | A | Motion-triggered functionality has UI alternative and can be disabled *(2.1 new)* |

### Principle 3: Understandable (7 criteria at A+AA)

#### Guideline 3.1 -- Readable

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 3.1.1 | Language of Page | A | Default language programmatically determinable |
| 3.1.2 | Language of Parts | AA | Language of each passage/phrase programmatically determinable |

#### Guideline 3.2 -- Predictable

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 3.2.1 | On Focus | A | Receiving focus does not initiate a context change |
| 3.2.2 | On Input | A | Changing a setting does not automatically change context unless user advised |
| 3.2.3 | Consistent Navigation | AA | Navigation in same relative order across pages |
| 3.2.4 | Consistent Identification | AA | Same-function components identified consistently |

#### Guideline 3.3 -- Input Assistance

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 3.3.1 | Error Identification | A | Input errors identified and described in text |
| 3.3.2 | Labels or Instructions | A | Labels or instructions provided for user input |
| 3.3.3 | Error Suggestion | AA | Error correction suggestions provided when known |
| 3.3.4 | Error Prevention (Legal, Financial, Data) | AA | Legal/financial submissions are reversible, checked, or confirmed |

### Principle 4: Robust (2 criteria at A+AA, plus note)

#### Guideline 4.1 -- Compatible

| # | Criterion | Level | Requirement |
|---|-----------|-------|-------------|
| 4.1.1 | Parsing | A | Proper markup: complete tags, correct nesting, no duplicate attributes, unique IDs. *(Note: obsoleted in WCAG 2.2 as browsers now handle parsing errors consistently)* |
| 4.1.2 | Name, Role, Value | A | UI component name and role are programmatically determinable; states and values can be set programmatically |
| 4.1.3 | Status Messages | AA | Status messages programmatically determinable via role/properties without receiving focus *(2.1 new)* |

## Product Relevance
- **siteaudit-mcp** checks a subset of these 50 criteria through automated testing. Machine-testable criteria include: 1.1.1 (alt text), 1.3.1 (info and relationships), 1.4.1 (use of color), 1.4.3 (contrast minimum), 1.4.11 (non-text contrast), 2.1.1 (keyboard), 2.4.1 (bypass blocks), 2.4.2 (page titled), 2.4.6 (headings and labels), 2.5.3 (label in name), 3.1.1 (language of page), 3.3.2 (labels or instructions), 4.1.1 (parsing), and 4.1.2 (name, role, value). Criteria requiring human judgment (e.g., 1.2.1 media alternatives, 2.4.4 link purpose) are flagged for manual review.

## Cross-References
- [[wcag-overview]]
- [[wcag-common-violations]]
- [[eaa-accessibility-act]]

## Sources
- raw/standards/wcag-2-1-reference.md
