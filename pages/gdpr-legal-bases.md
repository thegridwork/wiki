# GDPR Legal Bases for Processing

> Article 6 of the GDPR establishes six mutually exclusive legal bases that a controller must identify and rely upon before processing personal data; selecting the wrong basis or failing to identify one renders processing unlawful.

## Key Points
- Processing is lawful only if at least one of six legal bases in Article 6(1) applies
- The legal basis must be determined before processing begins and cannot be swapped retroactively
- Consent (Article 6(1)(a)) must meet the strict conditions of Articles 7-8
- Legitimate interests (Article 6(1)(f)) requires a balancing test and does not apply to public authorities
- Special category data (Article 9) requires an additional legal basis on top of Article 6
- The chosen legal basis affects which data subject rights are available (e.g., right to portability only applies to consent and contract bases)
- Controllers must document their legal basis and communicate it to data subjects (Articles 13-14)

## Detail

### The Six Legal Bases (Article 6(1))

#### (a) Consent
The data subject has given consent to the processing of their personal data for one or more specific purposes.

**When it applies:** Where the individual has genuine free choice over whether their data is processed, and there is no imbalance of power. Common for marketing communications, analytics cookies, and newsletter sign-ups.

**Requirements:** Consent must be freely given, specific, informed, and unambiguous (Article 4(11)). It must be demonstrated by a clear affirmative action. Conditions are detailed in Article 7. For children under 16 (or as low as 13 per member state law), parental consent is required under Article 8.

**Limitations:** Cannot be relied upon where there is a clear imbalance between controller and data subject (e.g., employer-employee relationships, public authority-citizen relationships). Must be as easy to withdraw as to give (Article 7(3)).

#### (b) Performance of a Contract
Processing is necessary for the performance of a contract to which the data subject is party, or to take steps at the request of the data subject prior to entering into a contract.

**When it applies:** Processing shipping addresses to deliver purchased goods; processing payment details to complete a transaction; verifying identity to open a bank account. Also covers pre-contractual steps initiated by the data subject.

**Limitations:** Must be genuinely "necessary" for the contract, not merely useful or commercially convenient. The EDPB has clarified that profiling users for personalized advertising is not "necessary" for performing a service contract (EDPB Guidelines 2/2019).

#### (c) Legal Obligation
Processing is necessary for compliance with a legal obligation to which the controller is subject.

**When it applies:** Tax record retention, anti-money laundering checks, employment law record-keeping, mandatory data breach reporting.

**Requirements:** The legal obligation must arise from EU or member state law (Article 6(3)). It cannot be a contractual obligation or self-imposed policy. The specific legal provision should be identifiable.

#### (d) Vital Interests
Processing is necessary to protect the vital interests of the data subject or of another natural person.

**When it applies:** Medical emergencies where the individual cannot give consent; humanitarian crises; life-threatening situations.

**Limitations:** This is a narrow basis. Recital 46 clarifies it should only be relied upon where processing cannot be manifestly based on another legal basis. Essentially a last-resort basis for life-or-death scenarios.

#### (e) Public Task
Processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.

**When it applies:** Government agencies, public health authorities, educational institutions exercising statutory functions.

**Requirements:** Must have a basis in EU or member state law (Article 6(3)). The data subject retains the right to object under Article 21.

#### (f) Legitimate Interests
Processing is necessary for the purposes of the legitimate interests pursued by the controller or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject.

**When it applies:** Fraud prevention, network and information security, direct marketing to existing customers (Recital 47), intra-group data transfers for internal administrative purposes (Recital 48).

**Requirements:** A three-part balancing test (the Legitimate Interests Assessment / LIA):
1. **Purpose test:** Identify the legitimate interest being pursued
2. **Necessity test:** Is the processing necessary for that purpose, or could a less intrusive means achieve it?
3. **Balancing test:** Do the data subject's interests, rights, or freedoms override the legitimate interest?

**Limitations:** Article 6(1) explicitly states this basis "shall not apply to processing carried out by public authorities in the performance of their tasks." The balancing test must be documented and is subject to scrutiny. Children's data warrants stronger protection in this assessment (Recital 38).

### Choosing the Correct Legal Basis

The EDPB and DPAs have emphasized that:
- The legal basis must be identified **before** processing begins
- Controllers cannot retroactively change their legal basis if one is found to be invalid
- Different processing activities may rely on different legal bases, but each activity needs one
- The choice of legal basis has downstream consequences for data subject rights:
  - **Right to data portability** (Article 20): Only available when processing is based on consent (a) or contract (b) and carried out by automated means
  - **Right to erasure** (Article 17): Applies differently depending on basis
  - **Right to object** (Article 21): Specifically applies to processing based on public task (e) or legitimate interests (f)

### Special Category Data (Article 9)

When processing special category data (racial/ethnic origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data for identification, health data, sex life/sexual orientation), controllers need both an Article 6 legal basis AND an Article 9(2) exception. The Article 9(2) exceptions include explicit consent, employment/social security law, vital interests, legitimate activities of certain bodies, data manifestly made public, legal claims, substantial public interest, health/social care, public health, and archiving/research/statistics.

## Product Relevance
- **privacy-mcp**: Central to privacy policy analysis. The scanner checks whether privacy policies identify legal bases for each processing activity. Missing or incorrectly stated legal bases are a high-severity finding. privacy-mcp's data collection assessment evaluates whether the claimed legal basis is plausible given the observed data collection (e.g., claiming "legitimate interests" for tracking cookies is likely incorrect post-Planet49).
- **siteaudit-mcp**: No direct relevance, though cookie banner implementations often reference legal bases in their configurations.

## Cross-References
- [[gdpr-overview]]
- [[gdpr-consent]]
- [[gdpr-privacy-policy-requirements]]
- [[gdpr-data-subject-rights]]
- [[gdpr-cookies-eprivacy]]

## Sources
- raw/regulations/gdpr-structure.md
- Regulation (EU) 2016/679, Articles 4, 5, 6, 7, 8, 9
- EDPB Guidelines 2/2019 on the processing of personal data under Article 6(1)(b)
