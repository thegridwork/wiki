# WCAG 2.1 Overview

> The Web Content Accessibility Guidelines (WCAG) 2.1 is a W3C Recommendation that defines how to make web content more accessible to people with disabilities, organized around four principles (POUR), three conformance levels, and 78 success criteria.

## Key Points
- WCAG 2.1 published June 5, 2018 as a W3C Recommendation; it extends WCAG 2.0 (2008) with 17 new success criteria
- Four principles: Perceivable, Operable, Understandable, Robust (POUR)
- Three conformance levels: A (minimum), AA (standard legal target), AAA (enhanced)
- 78 total success criteria: 30 at Level A, 20 at Level AA, 28 at Level AAA
- Level AA is the legal baseline in most jurisdictions (EU, US, Canada)
- WCAG 2.1 added criteria primarily benefiting mobile users, people with low vision, and people with cognitive disabilities
- The European Accessibility Act (EAA) references WCAG 2.1 AA via EN 301 549, with a compliance deadline of June 28, 2025

## Detail

### Structure

WCAG 2.1 is organized hierarchically:

1. **Principles (4):** The foundational concepts that web accessibility rests on
2. **Guidelines (13):** Under each principle, guidelines provide the goals authors should work toward
3. **Success Criteria (78):** Under each guideline, testable success criteria define specific requirements
4. **Sufficient and Advisory Techniques:** Non-normative guidance on how to meet success criteria

### The Four Principles (POUR)

#### Principle 1: Perceivable
Information and user interface components must be presentable to users in ways they can perceive. This principle covers text alternatives for non-text content, captions and audio descriptions for media, adaptable content structure, and distinguishable visual presentation (including color contrast).

**Guidelines:** 1.1 Text Alternatives, 1.2 Time-based Media, 1.3 Adaptable, 1.4 Distinguishable

#### Principle 2: Operable
User interface components and navigation must be operable by all users. This principle covers keyboard accessibility, sufficient time to interact with content, seizure prevention, navigability, and diverse input modalities.

**Guidelines:** 2.1 Keyboard Accessible, 2.2 Enough Time, 2.3 Seizures and Physical Reactions, 2.4 Navigable, 2.5 Input Modalities

#### Principle 3: Understandable
Information and the operation of the user interface must be understandable. This principle covers readable text, predictable page behavior, and input assistance (error identification, labels, error prevention).

**Guidelines:** 3.1 Readable, 3.2 Predictable, 3.3 Input Assistance

#### Principle 4: Robust
Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies. This principle covers proper markup parsing, programmatic name/role/value for UI components, and status messages.

**Guidelines:** 4.1 Compatible

### Conformance Levels

| Level | Criteria Count (2.1) | Significance |
|-------|---------------------|--------------|
| **A** | 30 | Minimum accessibility; removing the most severe barriers |
| **AA** | 20 (50 cumulative) | Standard target for legal compliance; addresses the most common barriers |
| **AAA** | 28 (78 cumulative) | Enhanced accessibility; not typically required by law for entire sites |

Conformance at a given level requires meeting all success criteria at that level and all lower levels. A site claiming "Level AA conformance" must meet all 30 Level A criteria and all 20 Level AA criteria (50 total).

### WCAG 2.1 New Criteria (Added over 2.0)

WCAG 2.1 added 17 new success criteria not present in WCAG 2.0:

| Level A (5 new) | Level AA (7 new) | Level AAA (5 new) |
|-----------------|-----------------|-------------------|
| 2.1.4 Character Key Shortcuts | 1.3.4 Orientation | 1.3.6 Identify Purpose |
| 2.5.1 Pointer Gestures | 1.3.5 Identify Input Purpose | 2.2.6 Timeouts |
| 2.5.2 Pointer Cancellation | 1.4.10 Reflow | 2.3.3 Animation from Interactions |
| 2.5.3 Label in Name | 1.4.11 Non-text Contrast | 2.5.5 Target Size |
| 2.5.4 Motion Actuation | 1.4.12 Text Spacing | 2.5.6 Concurrent Input Mechanisms |
| | 1.4.13 Content on Hover or Focus | |
| | 4.1.3 Status Messages | |

These additions primarily benefit:
- **Mobile/tablet users:** Orientation, pointer gestures, pointer cancellation, motion actuation, target size
- **Low vision users:** Reflow, non-text contrast, text spacing, content on hover/focus
- **Cognitive disabilities:** Identify input purpose, identify purpose, timeouts
- **Speech input users:** Character key shortcuts, label in name
- **Motor disabilities:** Pointer gestures, pointer cancellation, motion actuation, target size
- **Vestibular disorders:** Animation from interactions

### Criteria Count Comparison

| Level | WCAG 2.0 | WCAG 2.1 | New in 2.1 |
|-------|----------|----------|------------|
| A | 25 | 30 | +5 |
| AA | 13 | 20 | +7 |
| AAA | 23 | 28 | +5 |
| **Total** | **61** | **78** | **+17** |

### Legal Context

WCAG 2.1 Level AA is the de facto legal standard in most major jurisdictions:

- **European Union:** EN 301 549 references WCAG 2.1 AA; EAA deadline June 28, 2025
- **United States:** ADA Title III (courts reference WCAG AA); Section 508 currently references WCAG 2.0 AA with proposed update to 2.1
- **Canada:** Accessible Canada Act references WCAG 2.1 AA via EN 301 549 alignment

### Note on WCAG 2.2

WCAG 2.2 was published in October 2023, adding 9 new success criteria (and obsoleting 4.1.1 Parsing). While WCAG 2.2 is the latest version, WCAG 2.1 remains the version most commonly referenced in legislation and standards (including EN 301 549 and the EAA). This wiki focuses on WCAG 2.1 as the current legal baseline.

## Product Relevance
- **siteaudit-mcp** performs automated WCAG accessibility checks targeting Level A and AA success criteria. It tests for text alternatives, color contrast ratios, heading structure, form labels, keyboard accessibility, and other machine-testable criteria. The POUR framework structures the audit categories in siteaudit-mcp's output.

## Cross-References
- [[wcag-level-a-aa]]
- [[wcag-common-violations]]
- [[eaa-accessibility-act]]

## Sources
- raw/standards/wcag-2-1-reference.md
