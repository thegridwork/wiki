# US State Privacy Law Landscape

> As of early 2026, at least 19 US states (including California) have enacted comprehensive consumer privacy laws, creating a complex patchwork of obligations for businesses operating across state lines.

## Key Points
- 19 states have enacted comprehensive privacy laws, with effective dates spanning 2020 through 2026
- No federal comprehensive privacy law exists; state laws fill the gap with varying approaches
- Most state laws follow the Virginia VCDPA model (opt-in for sensitive data, AG enforcement, no private right of action)
- California remains unique with its opt-out model for sensitive data, independent enforcement agency (CPPA), and limited private right of action for data breaches
- Universal opt-out mechanisms (e.g., Global Privacy Control) are increasingly mandated -- at least 10 states require recognition
- A trend toward stricter laws is visible: Maryland (no cure period, bans sensitive data sales), Delaware/Rhode Island (low thresholds), Texas/Nebraska (no numeric thresholds)
- All states except California lack a private right of action for privacy violations

## Detail

### Enacted State Privacy Laws by Effective Date

| State | Law | Effective Date |
|-------|-----|---------------|
| California | CCPA/CPRA | Jan 1, 2020 / Jan 1, 2023 |
| Virginia | VCDPA | Jan 1, 2023 |
| Colorado | CPA | Jul 1, 2023 |
| Connecticut | CTDPA | Jul 1, 2023 |
| Utah | UCPA | Dec 31, 2023 |
| Montana | MCDPA | Oct 1, 2024 |
| Texas | TDPSA | Jul 1, 2024 |
| Oregon | OCPA | Jul 1, 2024 |
| Iowa | ICDPA | Jan 1, 2025 |
| Delaware | DPDPA | Jan 1, 2025 |
| New Hampshire | NH SB 255 | Jan 1, 2025 |
| Nebraska | NDPA | Jan 1, 2025 |
| New Jersey | NJDPA | Jan 15, 2025 |
| Maryland | MODPA | Oct 1, 2025 |
| Tennessee | TIPA | Jul 1, 2025 |
| Minnesota | MCDPA | Jul 31, 2025 |
| Indiana | INCDPA | Jan 1, 2026 |
| Kentucky | KCDPA | Jan 1, 2026 |
| Rhode Island | RIDPA | Jan 1, 2026 |

### Legislative Models

State privacy laws generally follow one of two models:

**California model (CCPA/CPRA):**
- Opt-out approach for sensitive data (consumer limits use after collection)
- Independent enforcement agency (CPPA)
- Limited private right of action (data breaches only)
- Revenue-based applicability threshold
- Broadest definition of personal information

**Virginia model (VCDPA) -- adopted by most states:**
- Opt-in consent required for sensitive data processing
- Attorney General exclusive enforcement
- No private right of action
- Data volume-based applicability thresholds
- Right to appeal controller decisions
- Data protection assessments required

### Applicability Approaches

States take different approaches to determining which businesses are covered:

- **Revenue + data volume (both required):** Utah ($25M revenue AND data thresholds) -- most restrictive
- **Data volume only (either threshold):** Virginia, Colorado, Connecticut, Iowa, Indiana, Kentucky, Minnesota (100,000 consumers OR 25,000 + revenue percentage)
- **Low thresholds:** Delaware (35,000/10,000 consumers, 20% revenue), New Hampshire (35,000/10,000), Rhode Island (35,000/10,000), Montana (50,000)
- **No numeric threshold:** Texas and Nebraska apply to all non-small businesses (SBA definition)

### Universal Opt-Out Mechanisms

A growing number of states require businesses to recognize universal opt-out signals such as the Global Privacy Control (GPC):

| State | Universal Opt-Out Required | Date |
|-------|---------------------------|------|
| California | Yes | Effective |
| Colorado | Yes | Jul 1, 2024 |
| Connecticut | Yes | Jan 1, 2025 |
| Montana | Yes | Jan 1, 2025 |
| Texas | Yes | Jan 1, 2025 |
| Virginia | Yes | Jan 1, 2025 |
| Maryland | Yes | Oct 1, 2025 |
| New Jersey | Yes | Jul 15, 2025 |
| Oregon | Yes | Jan 1, 2026 |
| Delaware | Yes | Jan 1, 2026 |
| Nebraska | Yes | Jan 1, 2026 |
| Minnesota | Yes | Jul 31, 2026 |

### Harmonization Trends

Despite the patchwork nature, several convergence trends are emerging:

1. **Core consumer rights:** Access, deletion, portability, and opt-out of sale are nearly universal
2. **Sensitive data consent:** All states except California require opt-in consent for sensitive data
3. **Data protection assessments:** Most states require assessments for targeted advertising, profiling, and sensitive data processing
4. **AG enforcement:** All states except California rely on the Attorney General for enforcement
5. **Cure periods shrinking:** Early laws had permanent cure periods; newer laws sunset them (Maryland eliminated the cure period entirely)
6. **Universal opt-out adoption:** The trend strongly favors mandatory recognition of browser-based opt-out signals

### Notable Outliers

- **Oregon:** Only state to include nonprofits (effective July 1, 2025); expanded sensitive data definition includes transgender/nonbinary status
- **Tennessee:** Affirmative defense for businesses maintaining a privacy program conforming to NIST frameworks
- **New Jersey:** Financial data partially covered (most states fully exempt GLBA data)
- **Minnesota:** Right to question the result of automated profiling decisions

## Product Relevance
- **privacy-mcp** must account for multi-state compliance when auditing privacy policies. A policy compliant with CCPA alone may miss requirements in states with opt-in sensitive data consent, universal opt-out mandates, or additional consumer rights (e.g., right to appeal). The landscape informs which checks privacy-mcp applies based on a site's geographic scope.

## Cross-References
- [[ccpa-overview]]
- [[us-state-privacy-comparison]]
- [[ccpa-consumer-rights]]
- [[ccpa-business-obligations]]

## Sources
- raw/regulations/us-state-privacy-laws.md
- raw/regulations/ccpa-cpra-full-text.md
