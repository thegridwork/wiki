# GDPR Data Protection Impact Assessment (DPIA)

> Articles 35-36 of the GDPR require controllers to conduct a Data Protection Impact Assessment before processing that is likely to result in a high risk to the rights and freedoms of natural persons, particularly when using new technologies, systematic profiling, large-scale processing of special categories, or systematic monitoring of public areas.

## Key Points
- A DPIA is mandatory before processing that is "likely to result in a high risk" (Article 35(1))
- Article 35(3) lists three scenarios where a DPIA is always required: systematic profiling with significant effects, large-scale processing of special categories or criminal data, and systematic monitoring of publicly accessible areas on a large scale
- DPAs publish lists of processing operations that require DPIAs (Article 35(4)) and operations that do not (Article 35(5))
- The DPIA must contain at minimum: a systematic description of the processing, assessment of necessity and proportionality, assessment of risks, and measures to address risks (Article 35(7))
- Prior consultation with the DPA is required where residual risk remains high after mitigation (Article 36)
- The DPO must be consulted during the DPIA process (Article 35(2))
- DPIAs are an ongoing obligation -- they must be reviewed when risk changes (Article 35(11))

## Detail

### When a DPIA Is Required (Article 35(1))

A DPIA must be carried out before processing where a type of processing, "in particular using new technologies," and taking into account the nature, scope, context, and purposes of the processing, is **likely to result in a high risk** to the rights and freedoms of natural persons.

The threshold is "likely to result in a high risk" -- not certain to result in harm. This is a precautionary standard.

### Mandatory DPIA Triggers (Article 35(3))

A DPIA is required in particular for:

**(a) Systematic and extensive evaluation of personal aspects** relating to natural persons, which is based on automated processing, including profiling, and on which decisions are based that produce legal effects or similarly significantly affect the natural person.

**(b) Processing on a large scale of special categories of data** referred to in Article 9(1) (health, biometric, genetic, racial, political, religious, sexual orientation, trade union data) or of personal data relating to criminal convictions and offences (Article 10).

**(c) Systematic monitoring of a publicly accessible area on a large scale** (e.g., CCTV systems covering public spaces).

### EDPB/WP29 High-Risk Processing Criteria

The Article 29 Working Party (now EDPB) Guidelines on DPIAs (WP248rev.01) identified nine criteria that indicate high risk. As a rule of thumb, if processing meets **two or more** of these criteria, a DPIA is likely required:

1. **Evaluation or scoring** -- including profiling and predicting (performance at work, economic situation, health, personal preferences, reliability, behaviour, location, movements)
2. **Automated decision-making with legal or similarly significant effect** -- processing that results in decisions that exclude or discriminate against individuals
3. **Systematic monitoring** -- processing used to observe, monitor, or control data subjects, including via networks or "systematic monitoring of a publicly accessible area"
4. **Sensitive data or data of a highly personal nature** -- special categories (Article 9), criminal data (Article 10), financial data, location data, communications content, browsing data
5. **Data processed on a large scale** -- considering number of data subjects, volume of data, duration/permanence of processing, and geographical extent
6. **Matching or combining datasets** -- from different sources or processing operations in a way that exceeds the data subject's reasonable expectation
7. **Data concerning vulnerable data subjects** -- employees, children, elderly, patients, mentally ill, asylum seekers -- where the power imbalance means consent may not be freely given
8. **Innovative use or applying new technological or organisational solutions** -- fingerprint and facial recognition combined for access control, IoT applications, AI/ML processing
9. **Processing that prevents data subjects from exercising a right or using a service or contract** -- including processing that aims to allow, modify, or refuse access to a service

### DPA-Published Lists (Articles 35(4) and 35(5))

Each DPA must establish and publish a list of processing operations that require a DPIA (Article 35(4)). Many DPAs also publish lists of operations that do not require a DPIA (Article 35(5)). These lists must be communicated to the EDPB.

Examples of operations commonly appearing on mandatory DPIA lists across DPAs:
- Large-scale profiling for credit scoring
- Biometric identification systems in workplaces or public areas
- Tracking individuals' location or behaviour systematically
- Processing genetic or health data on a large scale
- AI-based decision-making affecting individuals
- Employee monitoring systems (keystroke logging, screen capture, GPS tracking)
- Large-scale processing of children's data

### Content of a DPIA (Article 35(7))

The assessment must contain at minimum:

**(a) A systematic description** of the envisaged processing operations and the purposes of the processing, including, where applicable, the legitimate interest pursued by the controller.

**(b) An assessment of the necessity and proportionality** of the processing operations in relation to the purposes. This includes evaluating whether the processing is genuinely necessary for the stated purpose and whether less intrusive alternatives exist.

**(c) An assessment of the risks** to the rights and freedoms of data subjects. Risks should be assessed in terms of likelihood and severity, considering the nature, scope, context, and purposes of the processing. Both the risk to individuals (discrimination, identity theft, financial loss, reputational damage, loss of confidentiality, physical harm) and the risk of non-compliance should be evaluated.

**(d) The measures envisaged to address the risks**, including safeguards, security measures, and mechanisms to ensure protection of personal data and demonstrate compliance with the GDPR, taking into account the rights and legitimate interests of data subjects and other persons concerned.

### Additional DPIA Content

Beyond the minimum requirements of Article 35(7), best practice (per EDPB guidance) includes:

- Measures to comply with the Regulation: consent mechanisms, data subject rights facilitation, processor obligations, international transfer safeguards
- Description of the data flows
- Consultation with data subjects or their representatives where appropriate (Article 35(9))
- Views of the DPO (Article 35(2))
- Whether codes of conduct under Article 40 are adhered to (Article 35(8))
- A conclusion on whether residual risk is acceptable or whether prior consultation with the DPA is needed

### Prior Consultation (Article 36)

**Article 36(1):** The controller must consult the DPA prior to processing where a DPIA under Article 35 indicates that the processing would result in a high risk **in the absence of measures taken by the controller to mitigate the risk** -- i.e., where residual risk remains high even after planned safeguards.

**Article 36(2):** Where the DPA considers that the intended processing would infringe the GDPR (in particular where the controller has insufficiently identified or mitigated the risk), it must provide written advice within up to **eight weeks** of the consultation request. This may be extended by **six weeks** for complex matters. The DPA may use any of its powers under Article 58, including issuing warnings, bans, or ordering specific changes.

**Article 36(3) -- Information required for consultation:**
- Responsibilities of the controller, joint controllers, and processors
- Purposes and means of the intended processing
- Safeguards provided to protect data subjects' rights and freedoms
- Contact details of the DPO
- The DPIA itself
- Any other information requested by the DPA

### Ongoing Obligation (Article 35(11))

The controller must carry out a review when there is a change in the risk represented by processing operations. DPIAs are not one-off exercises -- they must be revisited when:
- New technologies are introduced
- The scope or context of processing changes
- New vulnerabilities or threats emerge
- Regulatory guidance is updated
- Enforcement actions reveal new risk factors

### Failure to Conduct a DPIA

Failure to carry out a DPIA when required, or carrying out an insufficient DPIA, can result in administrative fines of up to EUR 10 million or 2% of global annual turnover (Article 83(4)(a)). Failure to consult the DPA under Article 36 carries the same fine ceiling.

## Product Relevance
- **privacy-mcp**: When privacy-mcp detects high-risk processing indicators on a website (large-scale tracking, profiling, special category data collection, automated decision-making), it can flag that a DPIA is likely required. The privacy policy audit can check whether the policy references the existence of a DPIA or the DPO's involvement. Tracker detection identifying extensive profiling and behavioural monitoring (e.g., session recording tools, heatmaps, cross-site tracking) is relevant to DPIA trigger criteria 1, 3, 4, 5, and 6 above.
- **siteaudit-mcp**: No direct relevance.

## Cross-References
- [[gdpr-overview]]
- [[gdpr-legal-bases]]
- [[gdpr-consent]]
- [[gdpr-enforcement-fines]]
- [[gdpr-breach-notification]]

## Sources
- raw/regulations/gdpr-structure.md
- Regulation (EU) 2016/679, Articles 35, 36, 83(4)(a)
- Article 29 Working Party Guidelines on Data Protection Impact Assessment (DPIA) and determining whether processing is "likely to result in a high risk" (WP248rev.01, adopted 4 October 2017)
