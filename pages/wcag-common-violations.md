# WCAG Common Violations

> The most frequently encountered WCAG violations on the web -- missing alt text, insufficient color contrast, improper heading hierarchy, missing form labels, and keyboard inaccessibility -- account for the majority of accessibility barriers and are directly testable by automated tools.

## Key Points
- Studies consistently show that a small number of violation types account for the vast majority of accessibility issues found on websites
- Missing alt text (1.1.1), low contrast (1.4.3), missing form labels (3.3.2/1.3.1), and heading hierarchy issues (1.3.1/2.4.6) are the top automated findings
- Keyboard inaccessibility (2.1.1) is among the most impactful violations but harder to detect automatically
- Color contrast failures alone can affect every text element on a page, making them the highest-volume violation by count
- Most common violations map to Level A and AA criteria, meaning they are legally relevant
- Automated tools can detect approximately 30-40% of WCAG issues; the rest require manual testing

## Detail

### 1. Missing or Inadequate Alt Text (1.1.1 Non-text Content -- Level A)

**The violation:** Images, icons, buttons, and other non-text content lack meaningful text alternatives, or have generic/unhelpful alternatives (e.g., `alt="image"`, `alt="photo.jpg"`).

**Why it matters:** Screen reader users cannot perceive the content or purpose of images without alt text. Decorative images should have empty alt attributes (`alt=""`); informative images need descriptive alternatives.

**Common patterns:**
- `<img>` elements with no `alt` attribute
- `<img alt="">` on informative (non-decorative) images
- `<img alt="image">` or `<img alt="photo">` -- generic, unhelpful text
- Icon buttons (e.g., hamburger menu, search icon) with no accessible name
- CSS background images conveying information with no text alternative
- Complex images (charts, diagrams) without extended descriptions

**siteaudit-mcp check:** Detects missing alt attributes, empty alt on linked images, and generic alt text patterns.

### 2. Insufficient Color Contrast (1.4.3 Contrast Minimum -- Level AA)

**The violation:** Text does not have sufficient contrast against its background, failing the 4.5:1 ratio requirement for normal text or 3:1 for large text (18pt or 14pt bold).

**Why it matters:** Low-contrast text is difficult or impossible to read for people with low vision, color blindness, or in bright ambient lighting conditions.

**Common patterns:**
- Light gray text on white backgrounds (very common in modern designs)
- Placeholder text in form fields with insufficient contrast
- Text over images or gradients without sufficient contrast in all areas
- Disabled state text that is too low-contrast (note: disabled controls are exempt, but the exemption is narrow)
- Brand colors that prioritize aesthetics over readability

**Related criteria:**
- 1.4.6 Contrast (Enhanced) -- Level AAA: 7:1 ratio for normal text, 4.5:1 for large text
- 1.4.11 Non-text Contrast -- Level AA: 3:1 for UI components and graphical objects against adjacent colors

**siteaudit-mcp check:** Computes contrast ratios for all text elements against their computed background colors; flags failures with the specific ratio found and the required ratio.

### 3. Heading Hierarchy Issues (1.3.1 Info and Relationships + 2.4.6 Headings and Labels)

**The violation:** Headings are used out of order (skipping levels), used purely for visual styling, or not used at all to structure content.

**Why it matters:** Screen reader users navigate pages by heading structure. A proper hierarchy (h1 > h2 > h3) creates a navigable document outline. Skipped levels or missing headings make navigation unpredictable.

**Common patterns:**
- No `<h1>` element on the page
- Multiple `<h1>` elements (debated, but single h1 is best practice)
- Skipping heading levels (e.g., h1 to h3, missing h2)
- Using headings for visual styling instead of semantic structure (e.g., `<h3>` used because the font size looks right)
- Using styled `<div>` or `<p>` elements instead of heading elements for section titles
- Empty heading elements

**siteaudit-mcp check:** Validates heading hierarchy for skipped levels, missing h1, and empty headings.

### 4. Missing Form Labels (3.3.2 Labels or Instructions + 1.3.1 Info and Relationships)

**The violation:** Form controls (text inputs, select menus, checkboxes, radio buttons) lack properly associated labels.

**Why it matters:** Without associated labels, screen reader users cannot determine the purpose of form controls. Visible labels also provide a larger click/tap target for motor-impaired users.

**Common patterns:**
- Input elements with no `<label>` element or `aria-label`/`aria-labelledby`
- Placeholder text used as the only label (placeholders disappear on input, are often low-contrast, and are not universally exposed to assistive technology)
- `<label>` elements present but not programmatically associated (missing `for` attribute or wrapping)
- Groups of related controls (e.g., radio buttons) without `<fieldset>` and `<legend>`
- Search inputs relying solely on a magnifying glass icon with no accessible name

**siteaudit-mcp check:** Detects form controls without associated labels, mismatched `for`/`id` pairs, and placeholder-only labeling.

### 5. Keyboard Navigation Issues (2.1.1 Keyboard + 2.1.2 No Keyboard Trap + 2.4.7 Focus Visible)

**The violation:** Interactive elements are not reachable or operable via keyboard, focus gets trapped in components, or the focus indicator is invisible.

**Why it matters:** Users who cannot use a mouse -- including people with motor disabilities, screen reader users, and power users -- rely entirely on keyboard navigation. Inaccessible keyboard interaction blocks these users completely.

**Common patterns:**
- Custom interactive elements (dropdowns, modals, tabs) built with `<div>` or `<span>` without keyboard handlers
- Click handlers on non-focusable elements (no `tabindex`, no `role="button"`)
- Focus trapped in modals or overlays with no escape mechanism
- `outline: none` or `outline: 0` in CSS without a replacement focus indicator
- Tab order that does not follow visual layout (misuse of `tabindex` values > 0)
- Dropdown menus that cannot be navigated with arrow keys

**siteaudit-mcp check:** Identifies elements with click handlers but no keyboard equivalents, missing focus styles (`outline: none` without alternatives), and tabindex misuse. Full keyboard navigation testing requires manual verification.

### 6. Missing Page Language (3.1.1 Language of Page -- Level A)

**The violation:** The HTML document does not declare its primary language via the `lang` attribute on the `<html>` element.

**Why it matters:** Screen readers use the page language to determine correct pronunciation rules. Without it, content may be read with the wrong pronunciation engine.

**Common patterns:**
- `<html>` with no `lang` attribute
- Incorrect language code (e.g., `lang="english"` instead of `lang="en"`)
- Language set to wrong value for the actual content

**siteaudit-mcp check:** Verifies presence and validity of `lang` attribute on `<html>`.

### 7. Missing or Incorrect Link Text (2.4.4 Link Purpose in Context -- Level A)

**The violation:** Links have ambiguous text that does not convey their purpose, even in context.

**Why it matters:** Screen reader users often navigate by listing all links on a page. "Click here," "Read more," and "Learn more" links are meaningless out of context.

**Common patterns:**
- `<a href="...">Click here</a>` or `<a href="...">Read more</a>`
- Image links with no alt text (empty accessible name)
- Links that are visually distinguished only by color (also violates 1.4.1)

### 8. Missing Skip Navigation (2.4.1 Bypass Blocks -- Level A)

**The violation:** No mechanism to skip repeated content blocks (header, navigation) and jump to main content.

**Common patterns:**
- No skip link at the top of the page
- Skip link present but not visible on focus
- Skip link target does not exist or does not receive focus

**siteaudit-mcp check:** Detects presence of skip navigation links and validates their targets.

## Product Relevance
- **siteaudit-mcp** focuses its automated WCAG checks on these high-frequency violations. The tool's accessibility audit produces findings categorized by severity, with each finding mapping to a specific WCAG success criterion and level. The violations listed here represent the core detection targets that cover the majority of real-world accessibility issues.

## Cross-References
- [[wcag-overview]]
- [[wcag-level-a-aa]]
- [[eaa-accessibility-act]]

## Sources
- raw/standards/wcag-2-1-reference.md
