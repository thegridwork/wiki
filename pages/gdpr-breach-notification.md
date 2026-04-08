# GDPR Breach Notification

> Articles 33-34 of the GDPR require controllers to notify the supervisory authority of a personal data breach within 72 hours and, where the breach poses a high risk to individuals, to communicate directly to affected data subjects without undue delay.

## Key Points
- A "personal data breach" is defined in Article 4(12) as a breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data
- Notification to the supervisory authority (DPA) must occur within 72 hours of becoming aware of the breach (Article 33(1))
- If the 72-hour deadline cannot be met, the notification must be accompanied by reasons for the delay
- Data subjects must be notified without undue delay when the breach is likely to result in a high risk to their rights and freedoms (Article 34(1))
- Processors must notify the controller without undue delay after becoming aware of a breach (Article 33(2))
- All breaches must be documented regardless of whether they are reported (Article 33(5))
- Breaches that are unlikely to result in a risk to individuals' rights and freedoms do not need to be reported to the DPA

## Detail

### What Constitutes a Personal Data Breach (Article 4(12))

A personal data breach means "a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed."

The EDPB and the former Article 29 Working Party (WP29 Guidelines on Personal data breach notification, WP250rev.01) classify breaches into three categories:

- **Confidentiality breach:** Unauthorized or accidental disclosure of, or access to, personal data (e.g., hacking, accidental email to wrong recipient, lost unencrypted device)
- **Integrity breach:** Unauthorized or accidental alteration of personal data (e.g., data corruption, unauthorized modification of records)
- **Availability breach:** Unauthorized or accidental loss of access to, or destruction of, personal data (e.g., ransomware rendering data inaccessible, accidental deletion without backup)

A single incident may involve one or more of these categories simultaneously.

### Notification to the Supervisory Authority (Article 33)

**Article 33(1) -- The 72-hour rule:**
The controller must notify the competent DPA without undue delay and, where feasible, not later than 72 hours after having become "aware" of the breach. Where notification is not made within 72 hours, it must be accompanied by reasons for the delay.

**"Awareness" (Article 33(1)):** A controller is considered "aware" when it has a reasonable degree of certainty that a security incident has occurred that has led to personal data being compromised. The EDPB has clarified that awareness does not require perfect knowledge of the full scope of the breach -- once a controller has sufficient information to recognize a breach has occurred, the 72-hour clock starts. Brief initial investigation to confirm a breach is expected, but cannot be used as a pretext for delay.

**Exception:** Notification is not required if the breach is "unlikely to result in a risk to the rights and freedoms of natural persons." This requires a documented risk assessment. Where there is any doubt, the safer approach is to notify.

**Article 33(2) -- Processor obligation:**
The processor must notify the controller without undue delay after becoming aware of a personal data breach. The processor's notification to the controller is not subject to the 72-hour limit -- it must simply be without undue delay. The controller's 72-hour clock starts upon the controller's own awareness, not the processor's.

**Article 33(3) -- Contents of the notification:**
The notification must at minimum describe:

1. The nature of the breach, including (where possible) the categories and approximate number of data subjects concerned and the categories and approximate number of personal data records concerned
2. The name and contact details of the DPO or other contact point
3. The likely consequences of the breach
4. The measures taken or proposed to address the breach, including measures to mitigate its possible adverse effects

**Article 33(4) -- Phased notification:**
Where it is not possible to provide all information at the same time, it may be provided in phases without undue further delay. This recognizes that breach investigations are often iterative -- controllers should not delay initial notification while completing their investigation.

**Article 33(5) -- Documentation:**
The controller must document any personal data breaches, comprising:
- The facts relating to the breach
- Its effects
- The remedial action taken

This documentation must enable the DPA to verify compliance with Article 33. This applies to **all** breaches, including those not reported to the DPA because they were assessed as unlikely to result in a risk.

### Communication to Data Subjects (Article 34)

**Article 34(1):**
When a breach is likely to result in a **high risk** to the rights and freedoms of natural persons, the controller must communicate the breach to the data subject without undue delay.

The threshold is higher than for DPA notification: DPA notification requires "risk," while data subject notification requires "high risk." The risk assessment should consider the nature, sensitivity, and volume of the data, the severity and likelihood of consequences, and the characteristics of the data subjects (e.g., vulnerable individuals, children).

**Article 34(2) -- Content:**
The communication must describe in clear and plain language:
- The nature of the breach
- The name and contact details of the DPO or other contact point
- The likely consequences
- The measures taken or proposed, including measures to mitigate adverse effects

**Article 34(3) -- Exceptions:**
Communication to data subjects is not required if:

- **(a)** The controller has implemented appropriate technical and organizational protection measures that render the data unintelligible to unauthorized persons (e.g., encryption with keys not compromised)
- **(b)** The controller has taken subsequent measures that ensure the high risk is no longer likely to materialize
- **(c)** It would involve disproportionate effort -- in which case a public communication or similar measure must be used to inform data subjects equally effectively

### Risk Assessment Framework

The EDPB's guidance on breach assessment considers:

| Factor | Lower risk | Higher risk |
|--------|-----------|-------------|
| Data type | Name, email | Financial, health, identification documents, passwords |
| Volume | Small number of records | Large-scale breach |
| Identifiability | Pseudonymized data | Directly identifying data |
| Special circumstances | Data already public | Vulnerable data subjects (children, patients) |
| Consequences | Spam, unwanted contact | Identity theft, financial loss, discrimination, physical safety |
| Encryption | Data encrypted, keys secure | Unencrypted or keys also compromised |

### Practical Considerations

**Breach detection and response planning:**
While the GDPR does not prescribe specific detection mechanisms, Article 32 (security of processing) requires appropriate technical and organizational measures, which implicitly includes breach detection capabilities. Organizations should maintain:
- Incident response plans
- Clear internal reporting procedures
- Pre-drafted notification templates
- DPA notification portal accounts (many DPAs provide online submission)

**Cross-border breaches:**
Where a breach involves cross-border processing, the one-stop-shop mechanism applies. The controller notifies its lead supervisory authority. However, if the breach only affects data subjects in a single member state, the DPA of that state may also be competent.

**Consequences of failure to notify:**
Failure to notify a breach in accordance with Articles 33-34 can result in administrative fines of up to EUR 10 million or 2% of global annual turnover (Article 83(4)(a)). Several DPAs have imposed fines specifically for late notification or failure to notify, even where the underlying breach itself might not have attracted a fine.

### Notable Enforcement Examples

- **British Airways** (2020): ICO fined GBP 20 million for a breach affecting ~400,000 customers. The breach went undetected for months.
- **Marriott International** (2020): ICO fined GBP 18.4 million for a breach of the Starwood guest reservation database affecting ~339 million records globally.
- **Clearview AI** (multiple DPAs): Fines across Italy, Greece, France for failing to comply with breach-related obligations alongside other violations.
- **Deutsche Wohnen** (2019, later overturned on procedural grounds): EUR 14.5 million fine partly for inadequate data retention practices that contributed to breach risk.

## Product Relevance
- **privacy-mcp**: While privacy-mcp does not directly detect data breaches, it assesses whether a website's privacy policy discloses breach notification procedures and whether the organization has published information about past breaches. The privacy policy analysis checks for the presence of security measures disclosures (relevant to Article 32) and breach notification commitments.
- **siteaudit-mcp**: No direct relevance.

## Cross-References
- [[gdpr-overview]]
- [[gdpr-enforcement-fines]]
- [[gdpr-dpia]]
- [[gdpr-privacy-policy-requirements]]

## Sources
- raw/regulations/gdpr-structure.md
- Regulation (EU) 2016/679, Articles 4(12), 32, 33, 34, 83(4)(a)
- Article 29 Working Party Guidelines on Personal data breach notification under Regulation 2016/679 (WP250rev.01, adopted 6 February 2018)
- EDPB Guidelines 9/2022 on personal data breach notification (adopted 28 March 2023)
