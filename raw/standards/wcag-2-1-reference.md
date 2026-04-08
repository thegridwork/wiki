# WCAG 2.1 Structured Reference

Web Content Accessibility Guidelines (WCAG) 2.1
W3C Recommendation, June 5, 2018

**Conformance levels:** A (minimum) < AA (standard target) < AAA (enhanced)
**Legal baseline in most jurisdictions:** Level AA

**European Accessibility Act (EAA):** Directive (EU) 2019/882 — compliance deadline June 28, 2025. Requires products and services sold in the EU to meet accessibility requirements aligned with EN 301 549, which references WCAG 2.1 Level AA.

---

## Principle 1: Perceivable

Information and UI components must be presentable to users in ways they can perceive.

### Guideline 1.1 — Text Alternatives

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 1.1.1 | Non-text Content | A | All non-text content has a text alternative serving the equivalent purpose. |

### Guideline 1.2 — Time-based Media

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 1.2.1 | Audio-only and Video-only (Prerecorded) | A | Provide alternative for prerecorded audio-only or video-only media. |
| 1.2.2 | Captions (Prerecorded) | A | Captions provided for all prerecorded audio content in synchronized media. |
| 1.2.3 | Audio Description or Media Alternative (Prerecorded) | A | Audio description or full text alternative provided for prerecorded video. |
| 1.2.4 | Captions (Live) | AA | Captions provided for all live audio content in synchronized media. |
| 1.2.5 | Audio Description (Prerecorded) | AA | Audio description provided for all prerecorded video content. |
| 1.2.6 | Sign Language (Prerecorded) | AAA | Sign language interpretation provided for all prerecorded audio content. |
| 1.2.7 | Extended Audio Description (Prerecorded) | AAA | Extended audio description provided where pauses are insufficient. |
| 1.2.8 | Media Alternative (Prerecorded) | AAA | Full text alternative provided for all prerecorded synchronized media. |
| 1.2.9 | Audio-only (Live) | AAA | Text alternative provided for live audio-only content. |

### Guideline 1.3 — Adaptable

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 1.3.1 | Info and Relationships | A | Information, structure, and relationships conveyed through presentation are programmatically determinable. |
| 1.3.2 | Meaningful Sequence | A | Correct reading sequence is programmatically determinable when sequence affects meaning. |
| 1.3.3 | Sensory Characteristics | A | Instructions do not rely solely on sensory characteristics (shape, color, size, visual location, orientation, or sound). |
| 1.3.4 | Orientation | AA | Content does not restrict display to a single orientation unless essential. (WCAG 2.1 new) |
| 1.3.5 | Identify Input Purpose | AA | The purpose of input fields collecting user information can be programmatically determined. (WCAG 2.1 new) |
| 1.3.6 | Identify Purpose | AAA | The purpose of UI components, icons, and regions can be programmatically determined. (WCAG 2.1 new) |

### Guideline 1.4 — Distinguishable

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 1.4.1 | Use of Color | A | Color is not used as the only visual means of conveying information. |
| 1.4.2 | Audio Control | A | If audio plays automatically for more than 3 seconds, a mechanism to pause/stop or control volume is available. |
| 1.4.3 | Contrast (Minimum) | AA | Text and images of text have a contrast ratio of at least 4.5:1 (3:1 for large text). |
| 1.4.4 | Resize Text | AA | Text can be resized up to 200% without loss of content or functionality. |
| 1.4.5 | Images of Text | AA | Text is used to convey information rather than images of text, except where customizable or essential. |
| 1.4.6 | Contrast (Enhanced) | AAA | Text contrast ratio of at least 7:1 (4.5:1 for large text). |
| 1.4.7 | Low or No Background Audio | AAA | Prerecorded audio-only content with speech has no or very low background sounds. |
| 1.4.8 | Visual Presentation | AAA | For blocks of text: selectable colors, max 80 characters wide, not justified, line spacing >= 1.5, paragraph spacing >= 2x line spacing. |
| 1.4.9 | Images of Text (No Exception) | AAA | Images of text only used for pure decoration or where essential. |
| 1.4.10 | Reflow | AA | Content reflows without two-dimensional scrolling at 320 CSS px wide / 256 CSS px tall. (WCAG 2.1 new) |
| 1.4.11 | Non-text Contrast | AA | UI components and graphical objects have a contrast ratio of at least 3:1 against adjacent colors. (WCAG 2.1 new) |
| 1.4.12 | Text Spacing | AA | No loss of content/functionality when overriding: line height >= 1.5x, paragraph spacing >= 2x, letter spacing >= 0.12x, word spacing >= 0.16x font size. (WCAG 2.1 new) |
| 1.4.13 | Content on Hover or Focus | AA | Additional content triggered by hover/focus is dismissible, hoverable, and persistent. (WCAG 2.1 new) |

---

## Principle 2: Operable

UI components and navigation must be operable.

### Guideline 2.1 — Keyboard Accessible

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 2.1.1 | Keyboard | A | All functionality is operable through a keyboard interface. |
| 2.1.2 | No Keyboard Trap | A | Keyboard focus can be moved away from any component using standard mechanisms. |
| 2.1.3 | Keyboard (No Exception) | AAA | All functionality is operable through keyboard with no exceptions. |
| 2.1.4 | Character Key Shortcuts | A | If single-character key shortcuts exist, they can be turned off, remapped, or are only active on focus. (WCAG 2.1 new) |

### Guideline 2.2 — Enough Time

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 2.2.1 | Timing Adjustable | A | Time limits can be turned off, adjusted, or extended (with at least 10x option). |
| 2.2.2 | Pause, Stop, Hide | A | Moving, blinking, scrolling, or auto-updating content can be paused, stopped, or hidden. |
| 2.2.3 | No Timing | AAA | Timing is not an essential part of the event or activity. |
| 2.2.4 | Interruptions | AAA | Interruptions can be postponed or suppressed except for emergencies. |
| 2.2.5 | Re-authenticating | AAA | Data is preserved when an authenticated session expires. |
| 2.2.6 | Timeouts | AAA | Users are warned about inactivity timeouts that cause data loss, unless data is preserved for >= 20 hours. (WCAG 2.1 new) |

### Guideline 2.3 — Seizures and Physical Reactions

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 2.3.1 | Three Flashes or Below Threshold | A | Nothing flashes more than 3 times per second, or flash is below general and red flash thresholds. |
| 2.3.2 | Three Flashes | AAA | Nothing flashes more than 3 times per second. |
| 2.3.3 | Animation from Interactions | AAA | Motion animation triggered by interaction can be disabled, unless essential. (WCAG 2.1 new) |

### Guideline 2.4 — Navigable

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 2.4.1 | Bypass Blocks | A | A mechanism is available to bypass repeated blocks of content. |
| 2.4.2 | Page Titled | A | Pages have descriptive and informative titles. |
| 2.4.3 | Focus Order | A | Focusable components receive focus in a meaning-preserving order. |
| 2.4.4 | Link Purpose (In Context) | A | The purpose of each link is determinable from the link text or its context. |
| 2.4.5 | Multiple Ways | AA | More than one way is available to locate a page within a set of pages. |
| 2.4.6 | Headings and Labels | AA | Headings and labels describe topic or purpose. |
| 2.4.7 | Focus Visible | AA | Keyboard focus indicator is visible. |
| 2.4.8 | Location | AAA | Information about the user's location within a set of pages is available. |
| 2.4.9 | Link Purpose (Link Only) | AAA | The purpose of each link is determinable from the link text alone. |
| 2.4.10 | Section Headings | AAA | Section headings are used to organize content. |

### Guideline 2.5 — Input Modalities (WCAG 2.1 new guideline)

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 2.5.1 | Pointer Gestures | A | All multipoint or path-based gestures have single-pointer alternatives. (WCAG 2.1 new) |
| 2.5.2 | Pointer Cancellation | A | For single-pointer operation: down-event does not trigger, up-event triggers or can abort/undo. (WCAG 2.1 new) |
| 2.5.3 | Label in Name | A | Visible label text is included in the accessible name. (WCAG 2.1 new) |
| 2.5.4 | Motion Actuation | A | Functionality triggered by device motion can also be operated via UI and motion response can be disabled. (WCAG 2.1 new) |
| 2.5.5 | Target Size | AAA | Touch/click target is at least 44x44 CSS pixels. (WCAG 2.1 new) |
| 2.5.6 | Concurrent Input Mechanisms | AAA | Content does not restrict input to a single modality (touch, keyboard, mouse, etc.). (WCAG 2.1 new) |

---

## Principle 3: Understandable

Information and the operation of the UI must be understandable.

### Guideline 3.1 — Readable

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 3.1.1 | Language of Page | A | Default human language of each page is programmatically determinable. |
| 3.1.2 | Language of Parts | AA | Language of each passage or phrase is programmatically determinable. |
| 3.1.3 | Unusual Words | AAA | A mechanism identifies definitions of unusual words or jargon. |
| 3.1.4 | Abbreviations | AAA | A mechanism identifies the expanded form of abbreviations. |
| 3.1.5 | Reading Level | AAA | When text requires more than lower secondary reading level, supplemental content is available. |
| 3.1.6 | Pronunciation | AAA | A mechanism identifies specific pronunciation of ambiguous words. |

### Guideline 3.2 — Predictable

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 3.2.1 | On Focus | A | Receiving focus does not initiate a change of context. |
| 3.2.2 | On Input | A | Changing a UI component setting does not automatically cause a change of context unless user was advised. |
| 3.2.3 | Consistent Navigation | AA | Navigation mechanisms occurring on multiple pages are in the same relative order. |
| 3.2.4 | Consistent Identification | AA | Components with the same functionality are identified consistently. |
| 3.2.5 | Change on Request | AAA | Changes of context are initiated only by user request or a mechanism to turn them off is available. |

### Guideline 3.3 — Input Assistance

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 3.3.1 | Error Identification | A | Automatically detected input errors are identified and described in text. |
| 3.3.2 | Labels or Instructions | A | Labels or instructions are provided when content requires user input. |
| 3.3.3 | Error Suggestion | AA | If an error is detected and suggestions are known, they are provided. |
| 3.3.4 | Error Prevention (Legal, Financial, Data) | AA | For pages causing legal commitments or financial transactions: submissions are reversible, checked, or confirmed. |
| 3.3.5 | Help | AAA | Context-sensitive help is available. |
| 3.3.6 | Error Prevention (All) | AAA | For all pages requiring user submissions: submissions are reversible, checked, or confirmed. |

---

## Principle 4: Robust

Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.

### Guideline 4.1 — Compatible

| # | Name | Level | Requirement |
|---|------|-------|-------------|
| 4.1.1 | Parsing | A | In markup languages, elements have complete start/end tags, are nested correctly, have no duplicate attributes, and IDs are unique. (Note: obsoleted in WCAG 2.2 as browsers now handle parsing errors consistently.) |
| 4.1.2 | Name, Role, Value | A | For all UI components, name and role are programmatically determinable; states, properties, and values can be programmatically set; changes are available to user agents and assistive technology. |
| 4.1.3 | Status Messages | AA | Status messages can be programmatically determined through role or properties so they are presented to the user by assistive technologies without receiving focus. (WCAG 2.1 new) |

---

## WCAG 2.1 New Success Criteria Summary

These criteria were added in WCAG 2.1 (not present in WCAG 2.0):

| # | Name | Level | Primary Benefit |
|---|------|-------|-----------------|
| 1.3.4 | Orientation | AA | Mobile/tablet users, motor disabilities |
| 1.3.5 | Identify Input Purpose | AA | Cognitive disabilities, autofill support |
| 1.3.6 | Identify Purpose | AAA | Cognitive disabilities, symbol users |
| 1.4.10 | Reflow | AA | Low vision users, mobile devices |
| 1.4.11 | Non-text Contrast | AA | Low vision users |
| 1.4.12 | Text Spacing | AA | Low vision, dyslexia |
| 1.4.13 | Content on Hover or Focus | AA | Low vision, motor disabilities |
| 2.1.4 | Character Key Shortcuts | A | Speech input users, motor disabilities |
| 2.2.6 | Timeouts | AAA | Cognitive disabilities |
| 2.3.3 | Animation from Interactions | AAA | Vestibular disorders |
| 2.5.1 | Pointer Gestures | A | Motor disabilities, single-switch users |
| 2.5.2 | Pointer Cancellation | A | Motor disabilities, cognitive disabilities |
| 2.5.3 | Label in Name | A | Speech input users |
| 2.5.4 | Motion Actuation | A | Motor disabilities, mounted devices |
| 2.5.5 | Target Size | AAA | Motor disabilities, mobile touch |
| 2.5.6 | Concurrent Input Mechanisms | AAA | All users switching between input methods |
| 4.1.3 | Status Messages | AA | Screen reader users |

---

## Conformance Levels Quick Count

| Level | WCAG 2.0 | WCAG 2.1 |
|-------|----------|----------|
| A | 25 | 30 |
| AA | 13 | 20 |
| AAA | 23 | 28 |
| **Total** | **61** | **78** |

---

## Legal Context

### European Accessibility Act (EAA) — Directive (EU) 2019/882
- **Deadline:** June 28, 2025 — products and services placed on the EU market must comply
- **Scope:** E-commerce, banking, ticketing, e-books, computing hardware and OS, telecom, audiovisual media services
- **Technical standard:** EN 301 549 references WCAG 2.1 Level AA for web content and mobile applications
- **Enforcement:** Member states define penalties; must be "effective, proportionate and dissuasive"
- **Microenterprise exemption:** Businesses with < 10 employees and < EUR 2M turnover may be exempt for services

### US — ADA and Section 508
- **ADA Title III:** Courts increasingly interpret public accommodations to include websites; no formal WCAG mandate in statute but DOJ has referenced WCAG 2.1 AA in consent decrees and rulemaking (final rule April 2024 for state/local government web content).
- **Section 508:** Federal agencies must meet WCAG 2.0 Level AA (via Revised 508 Standards referencing WCAG 2.0, effective January 2018). Proposed update to WCAG 2.1 pending.

### Canada — Accessible Canada Act
- Federal entities and federally regulated industries; references to WCAG 2.1 AA in ICT accessibility standards (EN 301 549 alignment).
