# EU AI Act — Structured Reference
## Regulation (EU) 2024/1689 of the European Parliament and of the Council
### Laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)

Published: Official Journal of the European Union, 12 July 2024
Entry into force: 1 August 2024
Full application (final provisions): 2 August 2027

---

## Key Deadlines

| Date | Milestone |
|------|-----------|
| 1 August 2024 | Entry into force |
| 2 February 2025 | Prohibited AI practices apply (Article 5) |
| 2 August 2025 | GPAI obligations apply (Title V, Articles 51-56); Governance provisions (Titles VI-VII) |
| 2 August 2026 | High-risk AI obligations apply (Title III, Chapter 2, Articles 6(2)/Annex III systems) |
| 2 August 2027 | High-risk AI systems that are safety components of products under Annex I legislation (Article 6(1)) |

---

## Risk Classification Framework

### Unacceptable Risk (Prohibited) — Article 5
AI systems banned outright. Includes subliminal manipulation, exploitation of vulnerabilities, social scoring, certain biometric practices, and predictive policing based solely on profiling. Applies from 2 February 2025.

### High Risk — Articles 6-7, Annexes I and III
AI systems that are either (a) safety components of products covered by EU harmonisation legislation listed in Annex I, or (b) AI systems in the use-case areas listed in Annex III. Subject to conformity assessment, risk management, data governance, transparency, human oversight, accuracy, robustness, and cybersecurity requirements. Exception under Article 6(3) if the system does not pose a significant risk to health, safety, or fundamental rights.

### Limited Risk — Article 50
AI systems with specific transparency obligations. Includes AI that interacts with persons (must disclose AI nature), emotion recognition systems (must inform subjects), and systems generating synthetic content/deepfakes (must label as AI-generated).

### Minimal Risk
All other AI systems. No specific obligations under the Act, though voluntary codes of conduct are encouraged (Article 95).

---

## GPAI Model Thresholds

- **Systemic risk threshold**: 10^25 FLOPs cumulative training compute (Article 51(2))
- Models meeting or exceeding this threshold are presumed to have systemic risk
- Commission may update this threshold via delegated acts
- Systemic risk models have additional obligations: model evaluation, adversarial testing, serious incident tracking, cybersecurity protections (Article 55)

---

## Penalties Structure (Article 99)

| Violation | Maximum Fine |
|-----------|-------------|
| Prohibited AI practices (Article 5) | EUR 35 million or 7% of worldwide annual turnover, whichever is higher |
| High-risk system non-compliance (most obligations) | EUR 15 million or 3% of worldwide annual turnover |
| Supplying incorrect information to authorities | EUR 7.5 million or 1% of worldwide annual turnover |
| SMEs and startups | Lower of the percentage-based amount or the fixed amount |

Member States lay down rules on penalties for infringements not covered above. Penalties must be effective, proportionate, and dissuasive.

---

## Title I — General Provisions (Articles 1-4)

| Article | Title | Summary |
|---------|-------|---------|
| 1 | Subject matter | Establishes harmonised rules for AI placement, use, and market surveillance in the Union. |
| 2 | Scope | Applies to providers, deployers, importers, distributors, and product manufacturers; excludes military/national security, research, and purely personal non-professional use. |
| 3 | Definitions | Defines 68 key terms including AI system, provider, deployer, operator, biometric data, emotion recognition system, general-purpose AI model, and others. |
| 4 | AI literacy | Providers and deployers must ensure sufficient AI literacy among staff dealing with AI systems. |

---

## Title II — Prohibited AI Practices (Article 5)

| Article | Title | Summary |
|---------|-------|---------|
| 5 | Prohibited AI practices | Bans eight categories of AI systems deemed to pose unacceptable risk. |

### Prohibited categories (Article 5(1)):

| Sub-paragraph | Prohibition |
|---------------|-------------|
| (a) | Subliminal, manipulative, or deceptive techniques causing or likely to cause significant harm. |
| (b) | Exploiting vulnerabilities due to age, disability, or specific social or economic situation. |
| (c) | Social scoring by public authorities or on their behalf leading to detrimental treatment. |
| (d) | Individual risk assessment for predicting criminal offences based solely on profiling or personality traits (predictive policing). |
| (e) | Untargeted scraping of facial images from the internet or CCTV to build or expand facial recognition databases. |
| (f) | Emotion recognition in the workplace and educational institutions, except for medical or safety reasons. |
| (g) | Biometric categorisation to infer race, political opinions, trade union membership, religious beliefs, sex life, or sexual orientation (exceptions for law enforcement with labelled datasets). |
| (h) | Real-time remote biometric identification in publicly accessible spaces for law enforcement, except under strict conditions (targeted search for specific victims, prevention of imminent terrorist threat, locating/identifying suspects of specific serious crimes). |

---

## Title III — High-Risk AI Systems

### Chapter 1 — Classification Rules (Articles 6-7)

| Article | Title | Summary |
|---------|-------|---------|
| 6 | Classification rules for high-risk AI systems | Two pathways: (1) AI as safety component of product under Annex I legislation requiring third-party conformity assessment; (2) AI in Annex III use cases. Exception in 6(3) for systems not posing significant risk. |
| 7 | Amendments to Annex III | Commission empowered to amend Annex III via delegated acts to add or modify high-risk use cases. |

### Chapter 2 — Requirements for High-Risk AI Systems (Articles 8-15)

| Article | Title | Summary |
|---------|-------|---------|
| 8 | Compliance with the requirements | High-risk AI systems must comply with Articles 9-15, taking into account their intended purpose and the state of the art. |
| 9 | Risk management system | Continuous iterative risk management throughout the system lifecycle; identify, estimate, evaluate, and mitigate risks. |
| 10 | Data and data governance | Training, validation, and testing datasets must be relevant, sufficiently representative, free of errors, and complete; data governance measures required. |
| 11 | Technical documentation | Drawn up before market placement, kept up to date; must demonstrate compliance (detailed in Annex IV). |
| 12 | Record-keeping | Automatic logging of events during operation to enable traceability; logs retained for period appropriate to intended purpose. |
| 13 | Transparency and provision of information to deployers | Instructions for use must accompany the system, including capabilities, limitations, intended purpose, and human oversight measures. |
| 14 | Human oversight | Designed to allow effective oversight by natural persons during use; must include ability to understand, interpret, intervene, and override. |
| 15 | Accuracy, robustness and cybersecurity | Must achieve appropriate levels of accuracy, be resilient to errors and inconsistencies, and be protected against unauthorised third-party exploitation. |

### Chapter 3 — Obligations of Providers and Deployers (Articles 16-29)

| Article | Title | Summary |
|---------|-------|---------|
| 16 | Obligations of providers of high-risk AI systems | Ensure compliance, establish quality management, maintain documentation, keep logs, conduct conformity assessment, register in EU database, take corrective action when non-compliant. |
| 17 | Quality management system | Providers must implement a quality management system documented in policies, procedures, and instructions. |
| 18 | Documentation keeping | Retain technical documentation and conformity assessment documentation for 10 years after the system is placed on the market. |
| 19 | Automatically generated logs | Providers must keep logs automatically generated by their high-risk AI systems, to the extent such logs are under their control. |
| 20 | Corrective actions and duty of information | Providers must take corrective action if a system is not in conformity and inform distributors and deployers. |
| 21 | Cooperation with competent authorities | Providers must cooperate with and provide information to competent authorities upon request. |
| 22 | Authorised representatives | Providers outside the Union must appoint an authorised representative in the Union before placing systems on the market. |
| 23 | Obligations of importers | Importers must verify conformity assessment, CE marking, and technical documentation before placing on market. |
| 24 | Obligations of distributors | Distributors must verify CE marking and that provider and importer have complied with their obligations. |
| 25 | Responsibilities along the AI value chain | Any distributor, importer, deployer, or other third party is considered a provider if they put their name on a high-risk system, modify its intended purpose, or make a substantial modification. |
| 26 | Obligations of deployers of high-risk AI systems | Use systems in accordance with instructions, ensure human oversight, monitor operation, keep logs, conduct data protection impact assessments where relevant. |
| 27 | Fundamental rights impact assessment | Deployers that are bodies governed by public law or private entities providing public services must perform a fundamental rights impact assessment before deploying high-risk systems in certain Annex III areas. |
| 28 | Obligations of deployers regarding AI-generated content | Deployers of emotion recognition or biometric categorisation systems must inform natural persons exposed thereto. |
| 29 | Obligations of users of AI systems listed in Annex III, point 2 | Deployers of AI for creditworthiness or risk assessment in life/health insurance must not use it solely to deny services. |

### Chapter 4 — Notifying Authorities and Notified Bodies (Articles 30-39)

| Article | Title | Summary |
|---------|-------|---------|
| 30 | Notifying authorities | Member States must designate notifying authorities to assess, notify, and monitor conformity assessment bodies. |
| 31 | Application of a conformity assessment body for notification | Bodies apply to the notifying authority of the Member State in which they are established. |
| 32 | Notification procedure | Detailed procedure for notification of conformity assessment bodies. |
| 33 | Requirements relating to notified bodies | Notified bodies must be independent, impartial, competent, and have appropriate liability insurance. |
| 34 | Subsidiaries of and subcontracting by notified bodies | Conditions under which notified bodies may subcontract or use subsidiaries. |
| 35 | Identification numbers and lists of notified bodies | Commission assigns identification numbers; maintains public list. |
| 36 | Changes to notifications | Procedures for changes to scope or conditions of notification. |
| 37 | Challenge of the competence of notified bodies | Procedures when competence of a notified body is questioned. |
| 38 | Coordination of notified bodies | Notified bodies must participate in sectoral coordination. |
| 39 | Conformity assessment bodies of third countries | Conditions under which third-country bodies may be recognised. |

### Chapter 5 — Standards, Conformity Assessment, Certificates, Registration (Articles 40-49)

| Article | Title | Summary |
|---------|-------|---------|
| 40 | Harmonised standards and standardisation deliverables | Compliance with harmonised standards gives presumption of conformity. |
| 41 | Common specifications | Commission may adopt common specifications where harmonised standards are insufficient. |
| 42 | Presumption of conformity with certain requirements | Compliance with harmonised standards or common specifications creates presumption of conformity for the requirements they cover. |
| 43 | Conformity assessment | Two procedures: internal control (Annex VI) or with involvement of notified body (Annex VII), depending on system type. |
| 44 | Certificates | Certificates issued by notified bodies; valid for maximum 5 years, renewable. |
| 45 | Information obligations of notified bodies | Notified bodies must inform notifying authorities and other notified bodies of relevant matters. |
| 46 | Derogation from conformity assessment procedure | Member States may authorise market placement without conformity assessment for exceptional reasons of public security or protection of life and health. |
| 47 | EU declaration of conformity | Provider draws up a written declaration of conformity for each high-risk system. |
| 48 | CE marking | High-risk AI systems bear the CE marking to indicate conformity. |
| 49 | Registration | Providers must register high-risk AI systems in the EU database before placing on market or putting into service. |

---

## Title IV — Transparency Obligations for Certain AI Systems (Article 50)

| Article | Title | Summary |
|---------|-------|---------|
| 50 | Transparency obligations for providers and deployers of certain AI systems | Four transparency requirements for specific AI system types. |

### Sub-provisions:

| Paragraph | Obligation |
|-----------|-----------|
| 50(1) | AI systems intended to interact directly with natural persons must be designed so persons are informed they are interacting with an AI system, unless obvious from context. |
| 50(2) | Providers of AI systems generating synthetic audio, image, video, or text content must ensure outputs are marked in a machine-readable format as artificially generated or manipulated. |
| 50(3) | Deployers of emotion recognition or biometric categorisation systems must inform natural persons exposed to such systems. |
| 50(4) | Deployers of AI systems generating or manipulating image, audio, or video content constituting a deep fake must disclose that the content has been artificially generated or manipulated. |

---

## Title V — General-Purpose AI Models (Articles 51-56)

| Article | Title | Summary |
|---------|-------|---------|
| 51 | Classification of general-purpose AI models as general-purpose AI models with systemic risk | A GPAI model is classified with systemic risk if it has high-impact capabilities or if cumulative training compute exceeds 10^25 FLOPs; Commission may update threshold. |
| 52 | Obligations for providers of general-purpose AI models | All GPAI providers must: maintain technical documentation, provide information to downstream providers, implement copyright law compliance policy, publish sufficiently detailed training content summary. |
| 53 | Obligations for providers of general-purpose AI models with systemic risk | Additional obligations: perform model evaluation (including adversarial testing), assess and mitigate systemic risks, track and report serious incidents, ensure adequate cybersecurity. |
| 54 | Authorised representatives of providers of general-purpose AI models | GPAI providers outside the Union must appoint an authorised representative in the Union. |
| 55 | Codes of practice | AI Office facilitates drawing up codes of practice for GPAI obligations; codes may address copyright, training content summaries, and systemic risk mitigation. |
| 56 | AI Office oversight and enforcement for GPAI | AI Office monitors and enforces GPAI provider compliance; may request documentation, conduct evaluations, and take enforcement action. |

---

## Title VI — Governance (Articles 57-63)

| Article | Title | Summary |
|---------|-------|---------|
| 57 | Establishment of the AI Office | Commission establishes the AI Office within its structures. |
| 58 | Structure and functions of the AI Office | AI Office develops Union expertise, contributes to implementation, coordinates, supports market surveillance. |
| 59 | Establishment of a scientific panel of independent experts | Panel advises AI Office on GPAI model classification, systemic risks, and emerging issues. |
| 60 | European Artificial Intelligence Board | Established as expert group to advise and assist the Commission and Member States; composed of one representative per Member State. |
| 61 | Tasks of the Board | Advise on implementation, contribute to guidelines, facilitate cooperation between national authorities. |
| 62 | Advisory forum | Provides technical expertise and stakeholder input to the Board; composed of industry, SMEs, startups, civil society, and academia. |
| 63 | National competent authorities | Member States designate at least one notifying authority and at least one market surveillance authority. |

---

## Title VII — EU Database (Articles 64-65)

| Article | Title | Summary |
|---------|-------|---------|
| 64 | EU database for high-risk AI systems | Commission establishes and maintains an EU-wide database; data entered by providers and deployers. |
| 65 | Tasks and powers of national market surveillance authorities | Listed in this article. |

---

## Title VIII — Post-Market Monitoring, Information Sharing, Market Surveillance (Articles 72-94)

### Chapter 1 — Post-Market Monitoring (Articles 72-73)

| Article | Title | Summary |
|---------|-------|---------|
| 72 | Post-market monitoring by providers | Providers must establish and document a post-market monitoring system proportionate to the AI system. |
| 73 | Reporting of serious incidents | Providers must report serious incidents to market surveillance authorities within 15 days (or 2 days for widespread infringement). |

### Chapter 2 — Sharing of Information on Serious Incidents (Article 74)

| Article | Title | Summary |
|---------|-------|---------|
| 74 | Exchange of information on serious incidents | Framework for sharing serious incident data between Member State authorities and the Commission. |

### Chapter 3 — Enforcement (Articles 75-78)

| Article | Title | Summary |
|---------|-------|---------|
| 75 | Market surveillance and control of AI systems | General market surveillance framework, leveraging existing Regulation (EU) 2019/1020 infrastructure. |
| 76 | Supervision of testing in real-world conditions | Market surveillance authorities supervise real-world testing under Articles 60-61. |
| 77 | Powers of authorities protecting fundamental rights | National authorities protecting fundamental rights may request and access documentation for high-risk systems in Annex III areas. |
| 78 | Confidentiality | Authorities and all parties must respect confidentiality of information and data obtained. |

### Chapter 4 — Remedies (Articles 79-83)

| Article | Title | Summary |
|---------|-------|---------|
| 79 | Right to lodge a complaint with a market surveillance authority | Any natural or legal person may lodge a complaint; authority must inform complainant of progress and outcome. |
| 80 | Right to explanation of individual decision-making | Affected persons have right to explanation of decisions made by high-risk AI systems that produce legal or similarly significant effects. |
| 81 | Reporting of infringements and protection of reporting persons | Whistleblower protections for reporting infringements of the Act (Directive (EU) 2019/1937 applies). |
| 82 | Right to an effective judicial remedy against a market surveillance authority | Access to effective judicial remedy regarding legally binding decisions. |
| 83 | Procedure for dealing with AI systems presenting a risk at national level | Market surveillance authorities may require operators to take corrective action, withdraw, or recall non-compliant systems. |

### Chapter 5 — Safeguard Procedures (Articles 84-88)

| Article | Title | Summary |
|---------|-------|---------|
| 84 | Union safeguard procedure | When a Member State's measures against an AI system are contested, the Commission evaluates and issues an opinion. |
| 85 | Procedure for dealing with AI systems classified as non-high-risk that present a risk | Provisions for systems initially not classified as high-risk but later found to present a risk. |
| 86 | Formal non-compliance | Procedures when CE marking or declaration of conformity are absent or incorrect. |
| 87 | Compliant AI systems which present a risk | Even compliant systems may be restricted if they present a risk to health, safety, or fundamental rights. |
| 88 | Mutual assistance, market surveillance, and control of GPAI models | Cooperation mechanisms between Member States and the AI Office for GPAI enforcement. |

---

## Title IX — Codes of Conduct and Guidelines (Articles 95-96)

| Article | Title | Summary |
|---------|-------|---------|
| 95 | Codes of conduct for voluntary application | Commission and Member States encourage codes of conduct for non-high-risk AI systems to voluntarily apply high-risk requirements. |
| 96 | Guidelines from the Commission | Commission issues guidelines on practical implementation, with focus on SMEs and startups. |

---

## Title X — Delegation of Power and Committee Procedure (Articles 97-98)

| Article | Title | Summary |
|---------|-------|---------|
| 97 | Exercise of the delegation | Standard delegation of power provisions; delegations for 5 years, tacitly extended. |
| 98 | Committee procedure | Establishes committee procedure for implementing acts under Regulation (EU) No 182/2011. |

---

## Title XI — Penalties (Articles 99-101)

| Article | Title | Summary |
|---------|-------|---------|
| 99 | Penalties | Three-tier penalty structure: EUR 35M/7% for prohibited practices, EUR 15M/3% for high-risk non-compliance, EUR 7.5M/1% for incorrect information. Reduced caps for SMEs/startups. EU institutions subject to penalties from the EDPS. |
| 100 | Administrative fines on Union institutions, bodies, offices and agencies | EDPS enforces penalties against Union institutions deploying AI systems. |
| 101 | Fines for providers of general-purpose AI models | AI Office may fine GPAI providers up to EUR 15M or 3% global turnover for non-compliance; EUR 7.5M or 1% for incorrect information. |

---

## Title XII — Final Provisions (Articles 102-113)

| Article | Title | Summary |
|---------|-------|---------|
| 102 | Amendment to Regulation (EC) No 300/2008 | Consequential amendment for aviation security. |
| 103 | Amendment to Regulation (EU) No 167/2013 | Consequential amendment for agricultural vehicles. |
| 104 | Amendment to Regulation (EU) No 168/2013 | Consequential amendment for two- or three-wheel vehicles. |
| 105 | Amendment to Directive 2014/90/EU | Consequential amendment for marine equipment. |
| 106 | Amendment to Directive (EU) 2016/797 | Consequential amendment for railway interoperability. |
| 107 | Amendment to Regulation (EU) 2018/858 | Consequential amendment for motor vehicles. |
| 108 | Amendment to Regulation (EU) 2018/1139 | Consequential amendment for civil aviation safety (EASA). |
| 109 | Amendment to Regulation (EU) 2019/2144 | Consequential amendment for motor vehicle type-approval. |
| 110 | AI systems already placed on the market or put into service | Transitional provisions for systems already on the market before applicable dates. |
| 111 | Evaluation and review | Commission reviews the Regulation by 2 August 2029, and every four years thereafter. |
| 112 | Entry into force and application | Enters into force on the twentieth day following publication (1 August 2024); phased application dates as set out in the deadlines table. |
| 113 | Addressees | Addressed to all Member States. |

---

## Annexes

### Annex I — Union Harmonisation Legislation (Article 6(1) pathway)
Lists the EU product safety legislation under which AI systems used as safety components trigger high-risk classification. Includes:
- Regulation (EU) 2023/1230 (Machinery)
- Directive 2006/42/EC (Machinery — until superseded)
- Regulation (EU) 2023/988 (General Product Safety)
- Directive 2009/48/EC (Toy Safety)
- Directive 2013/53/EU (Recreational Craft)
- Directive 2014/33/EU (Lifts)
- Directive 2014/34/EU (ATEX Equipment)
- Directive 2014/35/EU (Low Voltage)
- Directive 2014/53/EU (Radio Equipment)
- Directive 2014/68/EU (Pressure Equipment)
- Regulation (EU) 2016/424 (Cableways)
- Regulation (EU) 2016/425 (Personal Protective Equipment)
- Regulation (EU) 2016/426 (Gas Appliances)
- Regulation (EU) 2017/745 (Medical Devices)
- Regulation (EU) 2017/746 (In Vitro Diagnostic Medical Devices)
- Regulation (EU) 2019/2144 (Motor Vehicle Type-Approval)
- Regulation (EU) 2018/1139 (Civil Aviation — EASA)
- Regulation (EU) 2018/858 (Motor Vehicle Approval)
- Regulation (EU) No 167/2013 (Agricultural Vehicles)
- Regulation (EU) No 168/2013 (Two/Three-Wheel Vehicles)

### Annex II — List of Union Criminal Offences (Article 5(1)(h) exception)
Lists the criminal offences for which real-time remote biometric identification may be authorised:
terrorism, trafficking in human beings, sexual exploitation of children, drug trafficking, illegal arms trafficking, murder/grievous bodily harm, organ trafficking, kidnapping/hostage-taking, robbery with violence, environmental crime, racism/xenophobia, organised crime, cybercrime, and other offences punishable by custodial sentence of at least 4 years.

### Annex III — High-Risk AI System Areas (Article 6(2))
Eight areas of high-risk AI use cases. See companion document `eu-ai-act-annex-iii.md` for full breakdown.
1. Biometrics
2. Critical infrastructure
3. Education and vocational training
4. Employment, workers management, access to self-employment
5. Access to and enjoyment of essential private services and essential public services and benefits
6. Law enforcement
7. Migration, asylum and border control management
8. Administration of justice and democratic processes

### Annex IV — Technical Documentation (Article 11)
Specifies the content required in technical documentation for high-risk systems:
1. General description of the AI system (intended purpose, interactions with hardware/software, versions, relevant prior systems)
2. Detailed description of elements and development process (methods, design, architecture, computational resources, data management, training/validation/testing procedures)
3. Detailed information about monitoring, functioning, and control (capabilities/limitations, degree of accuracy, foreseeable unintended outcomes, human oversight measures, input data specifications)
4. Description of appropriateness of performance metrics
5. Detailed description of the risk management system (Article 9)
6. Description of changes made during lifecycle
7. List of harmonised standards applied; where not applied, description of solutions adopted
8. Copy of EU declaration of conformity
9. Description of post-market monitoring system (Article 72)

### Annex V — EU Declaration of Conformity (Article 47)
Template for the written declaration that must accompany each high-risk AI system:
- Name and address of provider
- Statement that the declaration is issued under sole responsibility of the provider
- AI system identification (name, type, additional unambiguous reference)
- Statement of conformity with the Regulation
- Reference to harmonised standards or common specifications applied
- Where applicable, name and identification number of the notified body, description of conformity assessment procedure performed, and reference to certificate issued
- Place and date of issue, name and function of signatory

### Annex VI — Conformity Assessment Procedure Based on Internal Control (Article 43(2))
Procedure for internal conformity assessment (without notified body involvement):
1. Provider verifies quality management system is in conformity with Article 17
2. Provider verifies technical documentation demonstrates compliance with Articles 8-15
3. Provider verifies the system design and development process and post-market monitoring are consistent with documentation
4. For systems that continue to learn after placement, provider establishes measures ensuring compliance is maintained

### Annex VII — Conformity Assessment Procedure Based on Assessment of Quality Management System and Technical Documentation (Article 43(1))
Procedure involving a notified body:
1. Provider applies to a notified body
2. Notified body assesses quality management system
3. Notified body assesses technical documentation
4. Notified body issues certificate if system complies
5. Provider informs notified body of planned changes
6. Notified body performs periodic audits (at least every 12 months)

### Annex VIII — Information to be Submitted Upon Registration (Articles 49 and 51)
Data fields required for registration in the EU database:
**Section A — For high-risk AI systems (Article 49):**
- Provider name, address, contact
- Name and description of the AI system
- Status (on market, in service, withdrawn, recalled)
- Intended purpose
- Whether the system is for law enforcement, migration, or critical infrastructure
- Conformity assessment procedure followed
- Member States where placed on market or put into service
- Whether the system is a component of a product
- URL for instructions for use

**Section B — For GPAI models (Article 51):**
- Provider name, contact
- Name of the GPAI model
- Description (architecture, training compute)
- Whether classified with systemic risk
- Date of placement on market

### Annex IX — Union Legislation on Large-Scale IT Systems in the Area of Freedom, Security, and Justice
Lists the large-scale IT systems whose operation may involve high-risk AI:
- Schengen Information System (SIS)
- Visa Information System (VIS)
- Eurodac
- Entry/Exit System (EES)
- European Travel Information and Authorisation System (ETIAS)
- European Criminal Records Information System — Third Country Nationals (ECRIS-TCN)
- Interoperability framework (Regulations (EU) 2019/817 and 2019/818)

### Annex X — Union Legislation on Large-Scale IT Systems (further systems)
Additional large-scale IT systems:
- Customs information system
- Prüm framework (Directive (EU) 2019/xxxx on automated data exchange for police cooperation)
- EPPO Case Management System
- Other law enforcement and judicial cooperation systems

### Annex XI — Technical Documentation for GPAI Models (Article 52)
Information required in technical documentation for all GPAI models:
1. Name, version, and date of release of the model
2. Description of the model (architecture, number of parameters, modality, input/output format)
3. Description of the training process (training methodologies, data sources, data curation, data volume and types, computational resources used, training compute in FLOPs)
4. Description of intended purpose and foreseeable downstream use cases
5. Description of the model's capabilities and limitations (including languages supported, benchmarks, known biases)
6. Where applicable, description of how the model interacts with hardware or software not part of the model itself
7. Model card or equivalent documentation
8. Description of evaluation procedures and results

### Annex XII — Transparency Information for GPAI Models with Systemic Risk (Article 53)
Additional transparency requirements for systemic risk models:
1. Description of model evaluation methodology, including adversarial testing
2. Description of assessed systemic risks and measures taken to identify, prevent, mitigate
3. Description of serious incidents (as defined) and measures taken
4. Description of energy consumption during training and inference (where measured)
5. Description of computational resources used for training

### Annex XIII — Criteria for Designation of GPAI Models with Systemic Risk (Article 51)
Criteria for classification:
1. Number of parameters of the model
2. Quality and size of the training dataset
3. Cumulative compute used for training (measured in FLOPs) — **presumption of systemic risk at 10^25 FLOPs**
4. Number of registered users
5. Modalities of input/output (text, image, video, audio, code, etc.)
6. Benchmark performance
7. Number of downstream integrations
8. Degree of autonomy in decision-making
9. Accessibility (open-source vs. restricted)
10. Whether the model can be used to generate content that is difficult to distinguish from human-generated content

---

## Articles Not Covered in Titles Above (Supplementary Provisions)

### Title III, Chapter 3 continued — Articles not individually listed above

| Article | Title | Summary |
|---------|-------|---------|
| 28 | (Covered above under deployer obligations for AI-generated content) | |
| 29 | (Covered above under Annex III point 2 deployer obligations) | |

### Sandbox and Testing (Articles 57-63 covered under Governance; Articles 66-71)

| Article | Title | Summary |
|---------|-------|---------|
| 57 | AI regulatory sandboxes | Member States must establish at least one AI regulatory sandbox by 2 August 2026. |
| 58 | Detailed rules for AI regulatory sandboxes | Conditions for participation, supervision, exit, and data protection within sandboxes. |
| 59 | Further processing of personal data in AI regulatory sandboxes | Lawful basis for processing personal data in sandboxes under specific conditions. |
| 60 | Testing of high-risk AI systems in real-world conditions | Conditions under which testing may occur outside sandboxes, including informed consent requirements. |
| 61 | Informed consent for testing in real-world conditions | Subjects must provide free and informed consent; vulnerable persons receive additional protections. |

### Articles 66-71 — Conformity Assessment Bodies and Related

| Article | Title | Summary |
|---------|-------|---------|
| 66 | Procedure for evaluation of the Union AI testing support structures | Mechanisms for evaluating testing infrastructure. |
| 67 | Powers of the Commission | Commission powers related to GPAI enforcement and systemic risk assessment. |
| 68 | Mutual recognition of conformity assessment results | Framework for recognising conformity assessments across Member States. |
| 69 | Cooperation between competent authorities | Cooperation and mutual assistance between national authorities. |
| 70 | Access to data and documentation | Market surveillance authorities may access data and documentation from providers and deployers. |
| 71 | (Covered under Penalties — renumbered in final text) | |

---

## Key Definitions (Article 3, selected)

| Term | Definition (abbreviated) |
|------|--------------------------|
| AI system | A machine-based system designed to operate with varying levels of autonomy, that may exhibit adaptiveness after deployment, and that infers from input how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments. |
| Provider | Natural or legal person that develops or has an AI system developed and places it on the market or puts it into service under its own name or trademark. |
| Deployer | Natural or legal person that uses an AI system under its authority, except where the AI system is used in the course of a personal non-professional activity. |
| Importer | Natural or legal person located or established in the Union that places on the market an AI system bearing the name or trademark of a natural or legal person established in a third country. |
| Distributor | Natural or legal person in the supply chain, other than the provider or importer, that makes an AI system available on the Union market. |
| Operator | Provider, deployer, importer, distributor, or any other natural or legal person subject to obligations under this Regulation. |
| General-purpose AI model | An AI model, including where trained using a large amount of data using self-supervision at scale, that displays significant generality and is capable of competently performing a wide range of distinct tasks. |
| General-purpose AI system | An AI system based on a general-purpose AI model, that has the capability to serve a variety of purposes. |
| Systemic risk | A risk specific to the high-impact capabilities of GPAI models, having a significant effect on the Union market due to reach, or having actual or reasonably foreseeable negative effects on public health, safety, public security, fundamental rights, or society as a whole. |
| Biometric data | Personal data resulting from specific technical processing relating to the physical, physiological, or behavioural characteristics of a natural person. |
| Emotion recognition system | An AI system for identifying or inferring emotions or intentions of natural persons on the basis of their biometric data. |
| Biometric categorisation system | An AI system for assigning natural persons to specific categories on the basis of their biometric data, unless ancillary to another commercial service and strictly necessary for objective technical reasons. |
| Real-time remote biometric identification system | An AI system for identifying natural persons at a distance in real-time, without their active involvement, by comparing biometric data with data in a reference database. |
| Deep fake | AI-generated or manipulated image, audio, or video content that falsely appears to be authentic. |
| Placing on the market | First making an AI system available on the Union market. |
| Putting into service | Supply of an AI system for first use directly to the deployer or for own use for its intended purpose. |
| Intended purpose | The use for which an AI system is intended by the provider, including the specific context and conditions of use. |
| Reasonably foreseeable misuse | Use of an AI system in a way that is not in accordance with its intended purpose, but which may result from reasonably foreseeable human behaviour. |
| Serious incident | Any incident or malfunctioning that directly or indirectly leads to death, serious damage to health or property, or serious and irreversible disruption of critical infrastructure management. |
| Substantial modification | A change to the AI system after placing on the market that affects compliance or that changes the intended purpose for which the system was assessed. |

---

## Source
Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence and amending Regulations (EC) No 300/2008, (EU) No 167/2013, (EU) No 168/2013, (EU) 2018/858, (EU) 2018/1139, (EU) 2019/2144 and Directives 2014/90/EU, (EU) 2016/797, (EU) 2020/1828 (Artificial Intelligence Act).

Official Journal reference: OJ L, 2024/1689, 12.7.2024.
