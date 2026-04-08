# GDPR International Data Transfers

> Chapter V of the GDPR (Articles 44-50) restricts the transfer of personal data to countries outside the EEA unless an adequate level of protection is ensured through adequacy decisions, standard contractual clauses, binding corporate rules, or other approved mechanisms.

## Key Points
- Any transfer of personal data to a third country (outside EEA) must comply with Chapter V (Article 44)
- Three tiers of transfer mechanisms: adequacy decisions (Article 45), appropriate safeguards (Article 46), and derogations (Article 49)
- Schrems I (2015) invalidated the EU-US Safe Harbor; Schrems II (2020) invalidated the EU-US Privacy Shield
- Standard Contractual Clauses (SCCs) remain valid post-Schrems II but require a Transfer Impact Assessment (TIA)
- The EU-US Data Privacy Framework was adopted as an adequacy decision on July 10, 2023
- Fines for unlawful transfers have reached EUR 1.2 billion (Meta, 2023)
- Every use of a US-based third-party tracker or service on a website potentially constitutes a data transfer

## Detail

### General Principle (Article 44)

Any transfer of personal data to a third country or international organization may only take place if the controller and processor comply with the conditions in Chapter V, subject to the other provisions of the GDPR. All provisions of Chapter V are applied to ensure that the level of protection of natural persons guaranteed by the GDPR is not undermined.

This means the protections "travel with the data" -- a transfer cannot be used to circumvent GDPR protections.

### Adequacy Decisions (Article 45)

The European Commission may determine that a third country, a territory or sector within a third country, or an international organization ensures an adequate level of data protection. Transfers to such destinations do not require any specific authorization.

**Current adequacy decisions** (as of early 2026):
- Andorra, Argentina, Canada (commercial organizations under PIPEDA), Faroe Islands, Guernsey, Israel, Isle of Man, Japan, Jersey, New Zealand, Republic of Korea, Switzerland, United Kingdom, Uruguay
- **United States** -- limited to organizations certified under the EU-US Data Privacy Framework (DPF), adopted July 10, 2023
- European Commission periodically reviews adequacy decisions (at least every four years -- Article 45(3))

**Assessment criteria (Article 45(2)):** The Commission considers the rule of law, human rights, relevant legislation, data protection rules, enforcement, international commitments, and any other relevant factors. Importantly, access by public authorities (including intelligence services) to transferred data is a key factor -- this was the basis for invalidating the Privacy Shield in Schrems II.

### Appropriate Safeguards (Article 46)

In the absence of an adequacy decision, controllers or processors may transfer data only if they have provided appropriate safeguards and on condition that enforceable data subject rights and effective legal remedies are available.

**Safeguards requiring no specific authorization from a DPA (Article 46(2)):**
- **(a) Binding corporate rules (BCRs)** -- see Article 47
- **(b) Standard contractual clauses (SCCs)** adopted by the Commission -- the most widely used mechanism
- **(c) Standard contractual clauses adopted by a DPA** and approved by the Commission
- **(d) Approved codes of conduct** with binding and enforceable commitments by the controller/processor in the third country
- **(e) Approved certification mechanisms** with binding and enforceable commitments

**Safeguards requiring DPA authorization (Article 46(3)):**
- Contractual clauses between controller/processor and the third-country recipient (not standard clauses)
- Provisions in administrative arrangements between public authorities/bodies

#### Standard Contractual Clauses (SCCs)

The European Commission adopted modernized SCCs on June 4, 2021 (Implementing Decision (EU) 2021/914), replacing the previous sets. The new SCCs cover four modules:

- **Module 1:** Controller to controller
- **Module 2:** Controller to processor
- **Module 3:** Processor to processor
- **Module 4:** Processor to controller

Key features of the 2021 SCCs:
- Modular structure allowing parties to select relevant modules
- Include a "docking clause" permitting additional parties to accede
- Require a Transfer Impact Assessment (TIA) before relying on SCCs
- Require the data importer to notify the data exporter if it becomes unable to comply
- Require the data importer to challenge government access requests

#### Binding Corporate Rules (Article 47)

BCRs are internal data protection policies for multinational corporate groups. They must be approved by the competent DPA under the consistency mechanism and must include:

- Structure and contact details of the group
- The data transfers covered (categories of data, type of processing, purposes, countries)
- Legally binding nature within the group and for data subjects (third-party beneficiary rights)
- Application of the general data protection principles, data subject rights, and appropriate safeguards
- Complaint and dispute resolution mechanisms
- Mechanisms for reporting and recording changes
- Cooperation with DPAs
- Training for personnel with access to personal data

BCRs are resource-intensive to implement and are typically used by large multinational corporations.

### Schrems I (CJEU C-362/14, October 6, 2015)

Maximillian Schrems challenged Facebook Ireland's transfer of his personal data to the US under the EU-US Safe Harbor framework. The CJEU invalidated the Safe Harbor decision (2000/520/EC), finding that:

- The US government's mass surveillance programs (revealed by Edward Snowden) were incompatible with EU fundamental rights
- The Safe Harbor framework did not adequately limit US public authority access to transferred data
- The existence of a Commission adequacy decision does not prevent DPAs from examining complaints about data transfers

### Schrems II (CJEU C-311/18, July 16, 2020)

Schrems challenged the revised EU-US Privacy Shield framework. The CJEU:

1. **Invalidated the EU-US Privacy Shield** (Decision 2016/1250) -- finding that US surveillance laws (Section 702 FISA, Executive Order 12333) provided insufficient safeguards and did not grant EU data subjects actionable rights
2. **Upheld the validity of SCCs** in principle -- but clarified that controllers cannot rely on them mechanically. Controllers must assess, on a case-by-case basis, whether the law of the third country ensures adequate protection. If not, supplementary measures must be implemented.
3. **Required Transfer Impact Assessments (TIAs)** -- before relying on SCCs, controllers must evaluate the legal framework of the destination country, particularly regarding government access to data

The EDPB subsequently published Recommendations 01/2020 on supplementary measures, providing a six-step roadmap:
1. Know your transfers
2. Identify the transfer tool relied upon
3. Assess the law of the third country
4. Identify and adopt supplementary measures
5. Take procedural steps required by the supplementary measure
6. Re-evaluate at appropriate intervals

### EU-US Data Privacy Framework (2023)

Following Executive Order 14086 (signed by President Biden on October 7, 2022), which established new safeguards on US signals intelligence activities and created a Data Protection Review Court, the European Commission adopted a new adequacy decision for the US on **July 10, 2023**.

Key features:
- Applies only to US organizations that **self-certify** with the Department of Commerce under the DPF
- US intelligence agencies are now required to limit surveillance to what is "necessary and proportionate"
- EU individuals can complain to a new **Data Protection Review Court (DPRC)** about US intelligence access
- The Commission will review the decision's continued adequacy; first review took place in 2024

**Limitations and risks:**
- Max Schrems and noyb have announced their intention to challenge the DPF (a potential "Schrems III")
- The DPF only covers certified organizations; transfers to non-certified US entities still require SCCs or other safeguards
- Executive Orders can be revoked or modified by a subsequent administration
- The DPRC's independence and effectiveness remain subject to debate

### Derogations (Article 49)

In the absence of an adequacy decision or appropriate safeguards, transfers may take place only on the basis of specific derogations:

- **(a)** Explicit consent, after being informed of risks
- **(b)** Necessary for the performance of a contract between data subject and controller
- **(c)** Necessary for a contract in the interest of the data subject
- **(d)** Necessary for important reasons of public interest
- **(e)** Necessary for legal claims
- **(f)** Necessary to protect vital interests
- **(g)** Transfer from a public register

These derogations are to be interpreted **narrowly** and cannot be used for systematic, large-scale, or repeated transfers (EDPB Guidelines 2/2018).

## Product Relevance
- **privacy-mcp**: Third-party tracker analysis is directly affected by transfer rules. When privacy-mcp detects trackers from US-based services (Google Analytics, Meta Pixel, etc.), the transfer compliance dimension is critical. The scanner should flag: (1) whether detected third-party services involve data transfers outside the EEA, (2) whether the privacy policy discloses international transfers and the mechanisms used (Article 13(1)(f)), (3) whether US-based services are DPF-certified (for US transfers). The EUR 1.2B Meta fine demonstrates that transfer violations are actively enforced at the highest level.
- **siteaudit-mcp**: No direct relevance, though third-party script loading (which siteaudit may detect for performance reasons) often coincides with data transfer concerns.

## Cross-References
- [[gdpr-overview]]
- [[gdpr-privacy-policy-requirements]]
- [[gdpr-enforcement-fines]]
- [[gdpr-cookies-eprivacy]]
- [[gdpr-consent]]

## Sources
- raw/regulations/gdpr-structure.md
- Regulation (EU) 2016/679, Articles 44-50
- CJEU Case C-362/14 (Schrems I), Judgment of 6 October 2015
- CJEU Case C-311/18 (Schrems II), Judgment of 16 July 2020
- European Commission Implementing Decision (EU) 2021/914 (Standard Contractual Clauses)
- European Commission Adequacy Decision for the EU-US Data Privacy Framework, 10 July 2023
- EDPB Recommendations 01/2020 on supplementary measures (Version 2.0, adopted 18 June 2021)
