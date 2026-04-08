# AI Act Compliance Requirements for High-Risk AI

> High-risk AI system providers must satisfy a comprehensive set of obligations spanning risk management, data governance, technical documentation, logging, transparency, human oversight, accuracy, robustness, quality management, and conformity assessment under Articles 8-17 and 43 of the EU AI Act.

## Key Points
- Eight core technical requirements (Articles 9-15) apply to all high-risk AI systems
- Providers bear primary responsibility; deployers have complementary obligations
- Quality management system (Article 17) must be documented in policies, procedures, and instructions
- Two conformity assessment pathways: internal control (Annex VI) or notified body involvement (Annex VII)
- Technical documentation must be prepared before market placement and retained for 10 years (Articles 11, 18)
- Automatic logging must enable traceability throughout the system's operational life (Article 12)
- Post-market monitoring and serious incident reporting are ongoing obligations (Articles 72-73)
- CE marking indicates conformity; EU database registration required before market placement (Articles 48-49)

## Detail

### Article 8: Compliance with Requirements

High-risk AI systems must comply with the requirements laid down in Articles 9-15, taking into account their intended purpose, the generally acknowledged state of the art (including as reflected in relevant harmonised standards or common specifications), and the specific context and conditions of use.

### Article 9: Risk Management System

Providers must establish, implement, document, and maintain a **continuous, iterative risk management system** throughout the entire lifecycle of the high-risk AI system. The system must:

- **Identify and analyse** known and reasonably foreseeable risks that the AI system may pose to health, safety, or fundamental rights
- **Estimate and evaluate** the risks that may emerge when the system is used in accordance with its intended purpose and under conditions of reasonably foreseeable misuse
- **Evaluate** risks arising from analysis of data gathered from the post-market monitoring system (Article 72)
- **Adopt appropriate and targeted risk management measures** designed to address identified risks, considering the effects and possible interaction of risk management measures, and whether the overall residual risk is acceptable
- **Test** the system to identify the most appropriate risk management measures, including through testing in real-world conditions (Articles 60-61)

The risk management system must be proportionate to the risk posed and is subject to periodic review and updating.

### Article 10: Data and Data Governance

Training, validation, and testing data sets must meet quality criteria:

- **Relevant and sufficiently representative** of the persons or groups on which the system is intended to be used
- **Free of errors** to the extent possible, with appropriate data governance and management practices
- **Complete** relative to the intended purpose
- **Appropriate statistical properties** including, where applicable, geographic, contextual, behavioural, or functional representativeness

Providers must implement data governance measures addressing:
- Design choices for data collection
- Data preparation processing operations (annotation, labelling, cleaning, enrichment, aggregation)
- Relevant assumptions regarding the information the data are supposed to measure
- Prior assessment of data availability, quantity, and suitability
- Bias examination and appropriate mitigation measures
- Identification of relevant data gaps or shortcomings and how they are addressed

Where special categories of personal data (GDPR Article 9(1)) are processed for bias monitoring and detection purposes, specific safeguards and conditions apply.

### Article 11: Technical Documentation (Annex IV)

Technical documentation must be drawn up **before the system is placed on the market** and kept up to date. It must demonstrate that the system complies with Articles 8-15. Annex IV specifies the required content:

1. **General description** -- intended purpose, hardware/software interactions, versions, prior system history
2. **Development process** -- design methods, architecture, computational resources, data management, training/validation/testing procedures
3. **Monitoring and control** -- capabilities, limitations, accuracy levels, foreseeable unintended outcomes, human oversight measures, input data specifications
4. **Performance metrics** -- appropriateness description
5. **Risk management system** -- detailed description per Article 9
6. **Lifecycle changes** -- description of modifications
7. **Standards applied** -- harmonised standards used, or alternative solutions where not applied
8. **EU declaration of conformity** -- copy
9. **Post-market monitoring system** -- description per Article 72

Documentation must be retained for **10 years** after market placement (Article 18).

### Article 12: Record-Keeping (Logging)

High-risk AI systems must include functionality for **automatic logging of events** during operation, to the extent such logging is proportionate to the intended purpose. Logging must:

- Enable traceability of the system's functioning throughout its lifecycle
- Cover at minimum the period of intended use, and in any case no less than 6 months (unless shorter periods are justified and documented)
- Record data sufficient to identify situations that may result in risks to health, safety, or fundamental rights, and to facilitate post-market monitoring

Providers must keep logs automatically generated by their systems (Article 19), and deployers must retain logs under their control for periods appropriate to the intended purpose (Article 26).

### Article 13: Transparency and Information to Deployers

High-risk AI systems must be accompanied by **instructions for use** that include:

- Identity and contact details of the provider
- System characteristics, capabilities, and limitations
- Intended purpose and foreseeable misuse
- Hardware and software requirements
- Performance metrics (accuracy, robustness, cybersecurity)
- Known or foreseeable circumstances that may impact performance
- Human oversight measures and the technical tools available for oversight
- Input data specifications
- Description of output interpretation

### Article 14: Human Oversight

High-risk AI systems must be designed and developed so that they can be effectively overseen by natural persons during use. Human oversight measures must:

- Be identified and built into the system by the provider, or identified as appropriate to be implemented by the deployer
- Enable the overseer to **fully understand** the system's capacities and limitations
- Enable the overseer to **correctly interpret** the system's output
- Enable the overseer to **decide not to use** the system, or to **disregard, override, or reverse** the system's output
- Enable the overseer to **intervene** in the operation of the system or **stop** it (via a "stop" button or similar procedure)

For systems identified in Annex III Areas 1(a) (remote biometric identification), 6 (law enforcement), and 7 (migration/border control), human oversight must ensure that no action or decision is taken solely on the basis of the system's output without independent human verification.

### Article 15: Accuracy, Robustness, and Cybersecurity

High-risk AI systems must achieve appropriate levels of:

- **Accuracy** -- declared performance levels in instructions for use; accuracy metrics appropriate to the system's intended purpose
- **Robustness** -- resilient to errors, faults, or inconsistencies in input; resilient to attempts by unauthorised third parties to alter use or performance through adversarial attacks
- **Cybersecurity** -- protected against manipulation of training data (data poisoning), inputs designed to cause errors (adversarial examples), model flaws, and unauthorised third-party exploitation of vulnerabilities

Technical redundancy solutions may include backup plans and fail-safe mechanisms.

### Article 16: Provider Obligations Summary

Providers of high-risk AI systems must:
1. Ensure compliance with Articles 8-15
2. Indicate their name, trademark, and contact on the system or its packaging
3. Establish a quality management system (Article 17)
4. Maintain technical documentation (Article 11)
5. Keep automatically generated logs (Article 19)
6. Conduct the relevant conformity assessment (Article 43) before market placement
7. Draw up an EU declaration of conformity (Article 47)
8. Affix the CE marking (Article 48)
9. Register the system in the EU database (Article 49)
10. Take corrective action when the system is not in conformity (Article 20)
11. Cooperate with competent authorities (Article 21)

### Article 17: Quality Management System

Providers must implement a QMS documented in policies, procedures, and instructions, covering:

- Strategy for regulatory compliance
- Design and development process, including design specifications
- Design and development verification and validation procedures
- Testing and validation procedures (pre-market and post-market)
- Data management procedures
- Risk management procedures (Article 9)
- Post-market monitoring (Article 72)
- Serious incident and malfunction reporting procedures
- Communication with competent authorities, notified bodies, and deployers
- Systems and procedures for record-keeping
- Resource management, including supply-chain measures
- Accountability framework including management and staff responsibilities

### Article 43: Conformity Assessment

Two conformity assessment procedures exist:

**Pathway 1: Internal Control (Annex VI)** -- Used for most Annex III high-risk systems:
1. Provider verifies QMS conformity with Article 17
2. Provider verifies technical documentation demonstrates compliance with Articles 8-15
3. Provider verifies design/development and post-market monitoring consistency with documentation
4. For systems that continue learning post-placement, provider establishes measures ensuring ongoing compliance

**Pathway 2: Notified Body Assessment (Annex VII)** -- Required for certain systems, particularly biometric identification systems and systems requiring third-party assessment under Annex I legislation:
1. Provider applies to a notified body
2. Notified body assesses quality management system
3. Notified body assesses technical documentation
4. Notified body issues certificate if compliant
5. Provider informs notified body of planned changes
6. Notified body performs periodic audits (at least every 12 months)

Certificates are valid for a maximum of **5 years** and are renewable (Article 44).

### Post-Market Obligations

**Article 72: Post-Market Monitoring** -- Providers must establish and document a post-market monitoring system proportionate to the nature of the AI system. This system collects, documents, and analyses relevant data on performance throughout the system's lifetime.

**Article 73: Serious Incident Reporting** -- Providers must report serious incidents to market surveillance authorities within **15 days** (or **2 days** for widespread infringements). A serious incident includes any incident leading to death, serious health damage, serious property damage, or serious and irreversible disruption of critical infrastructure management.

### Deployer Obligations (Article 26)

Deployers of high-risk AI systems must:
- Use systems in accordance with the instructions for use
- Ensure human oversight by natural persons with necessary competence, training, and authority
- Monitor the operation of the system and inform the provider of any serious incidents
- Keep logs generated by the system for periods appropriate to its intended purpose
- Conduct a data protection impact assessment where required under GDPR
- Public bodies and public service providers must conduct a Fundamental Rights Impact Assessment (Article 27) before deploying certain Annex III systems

## Product Relevance
- **aiact-mcp**: The compliance requirements define the specific gaps the product's gap analysis must check for. When a system is classified as high-risk, aiact-mcp should assess whether the provider demonstrates: (1) risk management system in place, (2) data governance practices documented, (3) technical documentation available, (4) logging functionality present, (5) human oversight mechanisms implemented, (6) accuracy/robustness claims stated, (7) QMS documented, (8) conformity assessment completed. Each gap maps to a specific article and remediation action.

## Cross-References
- [[ai-act-risk-classification]]
- [[ai-act-high-risk-annex-iii]]
- [[ai-act-overview]]
- [[ai-act-timeline]]
- [[ai-act-transparency]]

## Sources
- raw/regulations/eu-ai-act-full-text.md
