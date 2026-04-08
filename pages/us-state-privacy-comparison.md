# US State Privacy Law Comparison

> A comparative analysis of consumer rights, enforcement mechanisms, and opt-out models across the 19 enacted US state comprehensive privacy laws.

## Key Points
- Access/know, delete, portability, and opt-out of sale are near-universal rights across all states
- Right to correct is absent in Utah and Iowa; right to appeal is absent in California, Utah, and Iowa
- California is the only state with a dedicated enforcement agency (CPPA); all others rely on AG enforcement
- California is the only state with any private right of action (limited to data breaches)
- Sensitive data approach splits into two camps: California's opt-out/limit model vs. all other states' opt-in consent requirement
- Maryland is the strictest: no cure period, bans sensitive data sales, and prohibits targeted advertising to minors
- Iowa is the most business-friendly: 90-day permanent cure period, fewest consumer rights, no data protection assessments

## Detail

### Consumer Rights Comparison Matrix

| Right | CA | VA | CO | CT | UT | TX | OR | MD | MN |
|-------|----|----|----|----|----|----|----|----|-----|
| Access/Know | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Delete | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Correct | Y | Y | Y | Y | N | Y | Y | Y | Y |
| Data Portability | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Opt-out of Sale | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Opt-out of Targeted Advertising | via sharing | Y | Y | Y | Y | Y | Y | Y | Y |
| Opt-out of Profiling | via sharing | Y | Y | Y | N | Y | Y | Y | Y |
| Limit Sensitive PI Use | Y | -- | -- | -- | -- | -- | -- | -- | -- |
| Opt-in for Sensitive Data | -- | Y | Y | Y | Y | Y | Y | Y | Y |
| Right to Appeal | N | Y | Y | Y | N | Y | Y | Y | Y |
| Question Automated Decisions | N | N | N | N | N | N | N | N | Y |
| Third-Party List | N | N | N | N | N | N | Y | N | N |

**Notes:**
- California addresses targeted advertising through its "sharing" opt-out (cross-context behavioral advertising) and sensitive PI limitation
- States with opt-in consent for sensitive data (marked "--" for Limit Sensitive PI Use) do not need a separate limitation right because processing requires prior consent
- Oregon uniquely grants the right to obtain a list of specific third parties to whom PI was disclosed
- Minnesota uniquely grants the right to question the results of automated profiling decisions

### Sensitive Data Approach Comparison

| Approach | States | Mechanism |
|----------|--------|-----------|
| Opt-out (limit use) | California | Consumer directs business to limit use after collection |
| Opt-in (consent required) | VA, CO, CT, UT, TX, OR, IA, IN, TN, MT, DE, NJ, NH, NE, MD, MN, KY, RI | Business must obtain affirmative consent before processing |
| Sale prohibited | Maryland | Sensitive data may not be sold at all |

### Enforcement Mechanisms

| State | Enforcement Body | Cure Period | Max Penalty | Private Right of Action |
|-------|-----------------|-------------|-------------|------------------------|
| California | CPPA (independent agency) | None (eliminated by CPRA) | $7,500/violation | Yes (data breaches only, $100-$750/incident) |
| Virginia | AG | 30 days (permanent) | $7,500/violation | No |
| Colorado | AG | 60 days (sunset Jan 1, 2025) | $20,000/violation | No |
| Connecticut | AG | 60 days (sunset Dec 31, 2024) | $5,000/violation | No |
| Utah | AG (Division of Consumer Protection) | 30 days (permanent) | $7,500/violation | No |
| Texas | AG | 30 days (permanent) | $7,500/violation | No |
| Oregon | AG | 30 days (sunset Jan 1, 2026) | $7,500/violation | No |
| Iowa | AG | 90 days (permanent) | $7,500/violation | No |
| Montana | AG | 60 days (sunset Apr 1, 2026) | $7,500/violation | No |
| Delaware | AG | 60 days (sunset Dec 31, 2025) | $10,000/violation | No |
| New Jersey | AG (Division of Consumer Affairs) | 30 days (sunset Jul 15, 2026) | $10,000/violation | No |
| Maryland | AG (Division of Consumer Protection) | None | $10,000/violation | No |
| Nebraska | AG | 30 days (sunset Jan 1, 2026) | $7,500/violation | No |
| Minnesota | AG | 30 days (sunset Jul 31, 2026) | $7,500/violation | No |
| Tennessee | AG | 60 days (permanent) | $7,500/violation | No |
| New Hampshire | AG | 60 days (permanent) | $7,500/violation | No |
| Indiana | AG | 30 days (sunset Jan 1, 2028) | $7,500/violation | No |
| Kentucky | AG | 30 days (sunset Jan 1, 2028) | $7,500/violation | No |
| Rhode Island | AG | 30 days (sunset Jan 1, 2028) | $7,500/violation | No |

### Cure Period Trend

Cure periods are trending shorter and toward elimination:

- **No cure period:** California (CPPA), Maryland
- **Already sunset:** Colorado (Jan 1, 2025), Connecticut (Dec 31, 2024)
- **Sunsetting soon:** Delaware (Dec 31, 2025), Oregon (Jan 1, 2026), Nebraska (Jan 1, 2026), New Jersey (Jul 15, 2026), Montana (Apr 1, 2026), Minnesota (Jul 31, 2026)
- **Sunsetting later:** Indiana (Jan 1, 2028), Kentucky (Jan 1, 2028), Rhode Island (Jan 1, 2028)
- **Permanent:** Virginia, Utah, Iowa, Texas, Tennessee, New Hampshire

### Data Protection Assessment Requirements

| Required | States |
|----------|--------|
| Yes | CA (via CPPA rulemaking), VA, CO, CT, IN, MT, TX, MD, MN, KY |
| No | UT, IA, NH |

Assessments are typically required for: targeted advertising, sale of PI, profiling that presents a reasonably foreseeable risk, and processing sensitive data.

### Enforcement Strictness Ranking

1. **Maryland** -- No cure period, bans sensitive data sale, prohibits targeted ads to minors, strongest data minimization
2. **California** -- Independent enforcement agency, private right of action for breaches, no cure period
3. **Colorado/Connecticut** -- Cure periods expired, universal opt-out required, data protection assessments
4. **Texas/Nebraska** -- Broadest applicability (no numeric threshold), universal opt-out required
5. **Oregon** -- Includes nonprofits, specific third-party list right
6. **Most other states** -- Standard AG enforcement with cure periods
7. **Iowa** -- Most business-friendly: 90-day permanent cure, fewest rights, no assessments
8. **Utah** -- Most restrictive applicability: requires both revenue and data thresholds

## Product Relevance
- **privacy-mcp** uses this comparison to determine which state-specific requirements apply when auditing a privacy policy. For example, a policy targeting users nationwide must address opt-in consent for sensitive data (not just California's opt-out model), universal opt-out signal recognition, and right-to-appeal disclosures. The comparison matrix informs the completeness checks applied across jurisdictions.

## Cross-References
- [[ccpa-overview]]
- [[ccpa-consumer-rights]]
- [[ccpa-sensitive-data]]
- [[us-state-privacy-landscape]]

## Sources
- raw/regulations/us-state-privacy-laws.md
- raw/regulations/ccpa-cpra-full-text.md
