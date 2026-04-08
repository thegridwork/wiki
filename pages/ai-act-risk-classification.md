# AI Act Risk Classification

> The EU AI Act establishes a four-tier risk classification framework -- unacceptable, high, limited, and minimal -- that determines the regulatory obligations applicable to each AI system based on its intended purpose and potential for harm.

## Key Points
- Four risk tiers: unacceptable (banned), high (heavy regulation), limited (transparency obligations), minimal (no obligations)
- High-risk classification follows two pathways: Annex I product safety components (Article 6(1)) or Annex III use-case areas (Article 6(2))
- Article 6(3) provides an exception: Annex III systems that do not pose significant risk to health, safety, or fundamental rights may be excluded from high-risk classification
- The Article 6(3) exception does not apply if the system performs profiling as defined under GDPR Article 4(4)
- The Commission may amend Annex III via delegated acts to add or modify high-risk use cases (Article 7)
- This classification framework is the core knowledge substrate for aiact-mcp's risk classifier

## Detail

### Tier 1: Unacceptable Risk -- Prohibited (Article 5)

AI systems deemed to pose an unacceptable risk to fundamental rights are banned outright. Eight categories are prohibited, including social scoring, subliminal manipulation, exploitation of vulnerabilities, certain biometric practices, and emotion recognition in workplaces and educational institutions. Applied from 2 February 2025. See [[ai-act-prohibited-practices]] for full detail.

### Tier 2: High Risk (Articles 6-7, Annexes I and III)

High-risk AI systems are subject to the most comprehensive obligations under the Act, including risk management, data governance, technical documentation, logging, human oversight, accuracy, robustness, cybersecurity, quality management, and conformity assessment.

#### Classification Pathway 1: Product Safety Components -- Article 6(1)

An AI system is high-risk if it is:
- A safety component of a product, or is itself a product, covered by the EU harmonisation legislation listed in **Annex I**; AND
- Required to undergo a third-party conformity assessment under that legislation.

Annex I lists 20 pieces of EU product safety legislation including regulations on machinery, medical devices, toys, lifts, radio equipment, motor vehicles, civil aviation (EASA), and personal protective equipment. These systems have a later compliance deadline of **2 August 2027**.

#### Classification Pathway 2: Use-Case Areas -- Article 6(2)

An AI system is high-risk if it falls within one of the eight use-case areas listed in **Annex III**:

1. Biometrics (remote identification, categorisation, emotion recognition)
2. Critical infrastructure (safety components in energy, water, transport, digital systems)
3. Education and vocational training (admissions, evaluation, assessment)
4. Employment and workers management (recruitment, promotion, monitoring, termination)
5. Essential private and public services (credit scoring, insurance pricing, emergency triage, public benefits)
6. Law enforcement (risk assessment, polygraphs, evidence evaluation, predictive policing, profiling)
7. Migration, asylum, and border control (deception detection, risk assessment, application processing)
8. Administration of justice and democratic processes (judicial decision-making, election influence)

These systems must comply from **2 August 2026**. See [[ai-act-high-risk-annex-iii]] for the complete breakdown with sub-categories and examples.

#### The Article 6(3) Exception

An AI system listed in Annex III is **not** classified as high-risk if it does not pose a significant risk of harm to health, safety, or fundamental rights, including by not materially influencing the outcome of decision-making. This exception:
- Does **not** apply if the system performs profiling of natural persons as defined in GDPR Article 4(4)
- Requires the provider to document the assessment before market placement
- Requires registration in the EU database under Article 49(2)

This is a critical decision point in automated risk classification: a system may match an Annex III area but still escape high-risk classification if the provider can demonstrate low impact and no profiling.

### Tier 3: Limited Risk (Article 50)

AI systems with specific transparency obligations but no conformity assessment requirements:
- Systems interacting directly with persons must disclose their AI nature (Article 50(1))
- Systems generating synthetic content must mark outputs as AI-generated in machine-readable format (Article 50(2))
- Emotion recognition and biometric categorisation systems must inform exposed persons (Article 50(3))
- Deepfake systems must disclose artificial generation or manipulation (Article 50(4))

See [[ai-act-transparency]] for full detail.

### Tier 4: Minimal Risk

All AI systems not falling into the above categories. No specific obligations under the Act. The Commission and Member States encourage voluntary codes of conduct (Article 95) for these systems to apply some or all high-risk requirements on an opt-in basis.

### Classification Decision Logic

For aiact-mcp's classifier, the decision tree is:

1. Does the system match any Article 5 prohibition? --> **Unacceptable** (banned)
2. Is it a safety component of an Annex I product requiring third-party conformity assessment? --> **High risk** (pathway 1)
3. Does it fall within an Annex III use-case area? --> Check Article 6(3) exception:
   - Does it materially influence decision outcomes? If no, and no profiling --> may be excluded
   - Does it perform profiling per GDPR Art 4(4)? If yes --> exception unavailable --> **High risk** (pathway 2)
4. Does it have transparency obligations under Article 50? --> **Limited risk**
5. Otherwise --> **Minimal risk**

## Product Relevance
- **aiact-mcp**: This is the core classification framework. The product's risk classifier must implement the decision logic above, mapping detected AI systems to the correct tier. The 45+ provider detection patterns feed into determining whether a system falls under Annex III areas. The Article 6(3) exception requires additional analysis of whether the system materially influences decisions and whether profiling is involved.

## Cross-References
- [[ai-act-overview]]
- [[ai-act-prohibited-practices]]
- [[ai-act-high-risk-annex-iii]]
- [[ai-act-transparency]]
- [[ai-act-compliance-requirements]]

## Sources
- raw/regulations/eu-ai-act-full-text.md
- raw/regulations/eu-ai-act-annex-iii.md
