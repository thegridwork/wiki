# AI Act High-Risk AI System Areas (Annex III)

> Annex III of the EU AI Act defines eight use-case areas containing specific sub-categories of AI systems classified as high-risk under Article 6(2), subject to the full suite of high-risk obligations from 2 August 2026.

## Key Points
- Eight areas with a total of 23 sub-categories of high-risk AI use cases
- Application date: **2 August 2026**
- Systems in these areas are subject to Articles 8-15 requirements, provider obligations (Articles 16-29), and conformity assessment (Article 43)
- The Article 6(3) exception may remove high-risk classification if the system does not materially influence decisions and does not perform GDPR profiling
- The Commission may amend Annex III via delegated acts (Article 7)
- This annex is the core reference for aiact-mcp's risk classification engine

## Detail

### Area 1: Biometrics

**Governing articles**: Articles 6(2), 5(1)(d)-(h), 26, 50(3)

Applies insofar as use is not prohibited under Article 5.

**1(a) -- Remote biometric identification systems**
AI systems intended for remote biometric identification of natural persons, excluding verification systems that simply confirm a person is who they claim to be. Examples: facial recognition against a watchlist database, gait recognition at a distance, voice print matching against reference databases, multi-modal biometric identification combining face/iris/fingerprint.

**1(b) -- Biometric categorisation systems**
AI systems for biometric categorisation that infer sensitive or protected attributes (race, political opinions, trade union membership, religious beliefs, sex life, sexual orientation). Excludes categorisation ancillary to another commercial service and strictly necessary for objective technical reasons. Examples: systems inferring ethnicity from facial features, categorising individuals by religious markers, demographic classification at scale in public spaces.

**1(c) -- Emotion recognition systems**
AI systems for emotion recognition in the workplace, educational institutions, or by law enforcement, border management, or administration of justice. Examples: workplace productivity monitoring assessing emotional states, educational proctoring evaluating student stress via facial expressions, interview analysis scoring candidates on detected emotions, law enforcement interrogation tools assessing truthfulness.

### Area 2: Critical Infrastructure

**Governing articles**: Articles 6(2), 9, 14, 15

**2(a) -- Safety components of critical infrastructure**
AI systems used as safety components in management and operation of critical digital infrastructure, road traffic, or supply of water, gas, heating, or electricity. Examples: electricity grid load balancing and fault detection, water treatment plant operations, gas pipeline pressure management, traffic signal control systems, data centre cooling and power distribution, railway signalling, district heating distribution.

### Area 3: Education and Vocational Training

**Governing articles**: Articles 6(2), 9, 10, 13, 14, 26, 27

**3(a) -- Access and admission**
AI systems determining access to or admission into educational and vocational training institutions at all levels. Examples: automated university admissions scoring, school placement and allocation systems, vocational training eligibility screening, scholarship and financial aid decision systems.

**3(b) -- Student evaluation and performance**
AI systems evaluating learning outcomes, steering the learning process, or assessing appropriate education levels. Examples: automated essay scoring and grading, adaptive learning platforms determining student progression, remediation or advancement decision systems, proctoring systems flagging cheating.

**3(c) -- Education level assessment and behaviour monitoring**
AI systems assessing appropriate education level or monitoring prohibited behaviour during tests. Examples: student tracking systems (academic vs. vocational), online exam proctoring detecting prohibited behaviour, educational pathway recommendation systems.

### Area 4: Employment, Workers Management, and Access to Self-Employment

**Governing articles**: Articles 6(2), 9, 10, 13, 14, 26, 27

**4(a) -- Recruitment and selection**
AI systems for recruiting or selecting natural persons, including targeted job advertisements, filtering applications, and evaluating candidates. Examples: resume screening and ranking tools, AI video interview analysis, job advertisement targeting optimising candidate pools, chatbot-based candidate screening, predictive hiring tools.

**4(b) -- Decisions affecting terms of work**
AI systems making or materially influencing decisions on promotion, termination, task allocation based on individual behaviour or traits, and performance monitoring. Examples: automated performance scoring, AI-driven task allocation in logistics, promotion recommendation systems, automated termination tools, worker productivity surveillance (keystroke/screen/location monitoring), gig economy algorithmic management (rating, task assignment, deactivation).

### Area 5: Essential Private and Public Services

**Governing articles**: Articles 6(2), 9, 14, 26, 27, 29

**5(a) -- Creditworthiness assessment**
AI systems evaluating creditworthiness or establishing credit scores, excluding fraud detection. Examples: automated credit scoring models, AI loan approval/denial systems, alternative data credit assessment (social media, phone usage), buy-now-pay-later eligibility determination.

**5(b) -- Risk assessment and pricing in life and health insurance**
AI systems for risk assessment and pricing of natural persons in life and health insurance. Examples: AI underwriting for life insurance, health insurance premium calculation using predictive models, wearable/health data-driven insurance pricing, pre-existing condition risk assessment.

**5(c) -- Emergency call evaluation and triage**
AI systems evaluating and classifying emergency calls, dispatching or prioritising emergency services, or triaging patients. Examples: AI-powered 112/911 call triage, emergency dispatch prioritisation, hospital emergency room triage systems, emergency call severity classification.

**5(d) -- Public assistance benefits and services**
AI systems used by or on behalf of public authorities to evaluate eligibility for public assistance, grant, reduce, revoke, or reclaim benefits. Examples: welfare benefit eligibility determination, social housing allocation, public healthcare prioritisation, unemployment benefit fraud detection and eligibility verification.

Note: Under Article 29, deployers of creditworthiness (5a) or insurance risk (5b) systems must not use them as the sole basis for denying services.

### Area 6: Law Enforcement

**Governing articles**: Articles 6(2), 5(1)(d)(h), 9, 14, 26, 27

Applies insofar as use is permitted under relevant Union and Member State law.

**6(a) -- Victim risk assessment**
AI systems assessing the risk of a natural person becoming the victim of criminal offences. Examples: domestic violence risk assessment tools, victim vulnerability scoring, re-victimisation prediction.

**6(b) -- Polygraphs and similar tools**
AI systems used as polygraphs or similar tools to detect emotional state. Examples: AI lie detection, micro-expression analysis during police interviews, voice stress analysis.

**6(c) -- Deepfake detection**
AI systems detecting deep fakes as referred to in Article 50(4). Examples: forensic AI authenticating video evidence, systems detecting manipulated audio recordings.

**6(d) -- Evidence reliability evaluation**
AI systems evaluating reliability of evidence during investigation or prosecution. Examples: AI evidence reliability scoring, digital forensics evaluating chain of custody, automated witness statement consistency assessment.

**6(e) -- Crime prediction based on profiling**
AI systems predicting occurrence or reoccurrence of criminal offences based on profiling, or assessing personality traits and past behaviour. Does not include systems supporting human assessment based on objective, verifiable facts. Examples: recidivism prediction tools (COMPAS-style), predictive crime mapping profiling individuals, parole/probation risk assessment.

**6(f) -- Crime analytics regarding natural persons**
AI systems profiling natural persons during detection, investigation, or prosecution. Examples: suspect identification and prioritisation, criminal network analysis profiling individuals, social media analysis identifying persons of interest.

### Area 7: Migration, Asylum, and Border Control

**Governing articles**: Articles 6(2), 9, 14, 26, 27, Annex IX

**7(a) -- Polygraphs and similar tools**
AI systems used as polygraphs to assess risk posed by persons entering territory or applying for visa/asylum. Examples: automated deception detection at border crossings, asylum interview stress analysis, visa interview emotional assessment.

**7(b) -- Risk assessment**
AI systems assessing security, irregular migration, or health risks posed by persons entering or present in Member State territory. Examples: automated border risk-scoring, visa application risk assessment, immigration fraud detection, passenger pre-screening connected to Annex IX large-scale IT systems.

**7(c) -- Application examination**
AI systems assisting in examination of asylum, visa, and residence permit applications and related complaints. Examples: automated document analysis for asylum, country-of-origin information assessment, visa processing decision support, residence permit eligibility screening.

**7(d) -- Detection, recognition, or identification of persons**
AI systems for detecting, recognising, or identifying persons, excluding travel document verification. Examples: border surveillance identifying irregular crossings, identification at ports of entry beyond document verification, facial recognition at immigration checkpoints.

### Area 8: Administration of Justice and Democratic Processes

**Governing articles**: Articles 6(2), 9, 14, 26, 27

**8(a) -- Judicial decision-making**
AI systems assisting judicial authorities in researching and interpreting facts and law, applying law to facts, or used in alternative dispute resolution. Examples: AI legal research recommending case law to judges, sentencing recommendation systems, AI-driven dispute resolution platforms, automated small claims decisions, predictive justice tools.

**8(b) -- Influence on elections and referenda**
AI systems intended to influence election or referendum outcomes or voting behaviour of persons directly exposed to them. Excludes tools for campaign logistics not targeting voters. Examples: AI political micro-targeting showing personalised content to influence votes, deepfake generation for political campaigns directed at voters, AI chatbots engaging voters to influence decisions.

### Compliance Summary by Area

| Area | Provider Obligations | Deployer Obligations |
|------|---------------------|---------------------|
| All areas | Arts. 8-15 (requirements), 16-17 (QMS), 43 (conformity assessment), 49 (registration) | Art. 26 (use per instructions, human oversight) |
| 1-8 (public bodies) | As above | Art. 27 (Fundamental Rights Impact Assessment) |
| 5a, 5b | As above | Art. 29 (cannot use as sole basis for denial) |
| 1 (biometrics) | As above | Art. 50(3) (transparency to exposed persons) |
| 6-8 | As above | Art. 27 (FRIA mandatory) |

FRIA = Fundamental Rights Impact Assessment (Article 27).

## Product Relevance
- **aiact-mcp**: This annex is the primary reference table for the risk classification engine. When aiact-mcp detects an AI system (from its 45+ provider pattern library), it must map the system's use case to the correct Annex III area and sub-category to determine high-risk status. The sub-category descriptions and examples inform the matching logic. The Article 6(3) exception check is the secondary decision point after an initial Annex III match. Compliance gap analysis uses the per-area obligation mapping to generate specific remediation guidance.

## Cross-References
- [[ai-act-risk-classification]]
- [[ai-act-overview]]
- [[ai-act-prohibited-practices]]
- [[ai-act-compliance-requirements]]
- [[ai-act-timeline]]

## Sources
- raw/regulations/eu-ai-act-annex-iii.md
- raw/regulations/eu-ai-act-full-text.md
