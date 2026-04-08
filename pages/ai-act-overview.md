# EU AI Act Overview

> The EU AI Act (Regulation (EU) 2024/1689) is the world's first comprehensive legal framework for artificial intelligence, establishing harmonised rules across the European Union based on a risk-based classification system spanning 113 articles and multiple annexes.

## Key Points
- Published 12 July 2024 in the Official Journal of the European Union; entered into force 1 August 2024
- Applies to providers, deployers, importers, distributors, and product manufacturers operating in the EU market
- Organised around a four-tier risk classification: unacceptable, high, limited, and minimal risk
- Phased enforcement from February 2025 through August 2027
- Penalty structure reaches up to EUR 35 million or 7% of global annual turnover
- Excludes military/national security, pure research, and purely personal non-professional use (Article 2)

## Detail

### Legislative Structure

The AI Act is organised into 12 titles containing 113 articles plus 13 annexes:

| Title | Subject | Articles |
|-------|---------|----------|
| I | General Provisions | 1-4 |
| II | Prohibited AI Practices | 5 |
| III | High-Risk AI Systems | 6-49 |
| IV | Transparency Obligations | 50 |
| V | General-Purpose AI Models | 51-56 |
| VI | Governance | 57-63 |
| VII | EU Database | 64-65 |
| VIII | Post-Market Monitoring & Enforcement | 72-94 |
| IX | Codes of Conduct & Guidelines | 95-96 |
| X | Delegation of Power | 97-98 |
| XI | Penalties | 99-101 |
| XII | Final Provisions | 102-113 |

### Risk-Based Framework

The Act classifies AI systems into four risk tiers, each carrying different regulatory obligations:

1. **Unacceptable risk** (Article 5) -- Banned outright. Includes social scoring, subliminal manipulation, and certain biometric practices.
2. **High risk** (Articles 6-7, Annexes I and III) -- Subject to comprehensive conformity assessment, risk management, data governance, transparency, human oversight, accuracy, robustness, and cybersecurity requirements.
3. **Limited risk** (Article 50) -- Specific transparency obligations such as disclosing AI interaction, labelling deepfakes, and informing subjects of emotion recognition.
4. **Minimal risk** -- No specific obligations; voluntary codes of conduct encouraged (Article 95).

### Enforcement and Governance

- The **AI Office** (Article 57) is established within the European Commission to develop expertise, coordinate implementation, and oversee GPAI model compliance.
- A **European AI Board** (Article 60) advises the Commission and Member States, composed of one representative per Member State.
- An **Advisory Forum** (Article 62) provides technical expertise from industry, SMEs, civil society, and academia.
- Member States designate **national competent authorities** including notifying authorities and market surveillance authorities (Article 63).
- An **EU database** for high-risk AI systems (Article 64) requires registration before market placement.

### Penalties (Article 99)

| Violation | Maximum Fine |
|-----------|-------------|
| Prohibited AI practices (Article 5) | EUR 35 million or 7% of worldwide annual turnover |
| High-risk system non-compliance | EUR 15 million or 3% of worldwide annual turnover |
| Supplying incorrect information | EUR 7.5 million or 1% of worldwide annual turnover |
| SMEs and startups | Lower of the percentage-based or fixed amount |

The European Data Protection Supervisor (EDPS) enforces penalties against EU institutions (Article 100). The AI Office may fine GPAI providers up to EUR 15 million or 3% of global turnover (Article 101).

### Phased Timeline

The Act enters into force on 1 August 2024, with obligations becoming applicable in stages through 2 August 2027. See [[ai-act-timeline]] for the complete schedule.

### Key Definitions (Article 3)

- **AI system**: A machine-based system designed to operate with varying levels of autonomy, that may exhibit adaptiveness after deployment, and that infers from input how to generate outputs such as predictions, content, recommendations, or decisions.
- **Provider**: The entity that develops or commissions an AI system and places it on the market under its own name.
- **Deployer**: The entity that uses an AI system under its authority (excluding personal non-professional use).
- **General-purpose AI model**: An AI model trained at scale that displays significant generality and can competently perform a wide range of distinct tasks.

## Product Relevance
- **aiact-mcp**: The entire product is built around implementing this Act. The overview informs the top-level classification logic, while specific articles drive individual detection rules and compliance gap analysis. The August 2, 2026 deadline for high-risk AI obligations is the primary compliance target.

## Cross-References
- [[ai-act-risk-classification]]
- [[ai-act-prohibited-practices]]
- [[ai-act-high-risk-annex-iii]]
- [[ai-act-gpai]]
- [[ai-act-transparency]]
- [[ai-act-compliance-requirements]]
- [[ai-act-timeline]]

## Sources
- raw/regulations/eu-ai-act-full-text.md
- raw/regulations/eu-ai-act-annex-iii.md
