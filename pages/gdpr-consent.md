# GDPR Consent

> Consent under the GDPR must be freely given, specific, informed, and unambiguous, demonstrated by a clear affirmative action; pre-ticked checkboxes, silence, and bundled consent are invalid, and withdrawal must be as easy as giving consent.

## Key Points
- Consent is defined in Article 4(11) and conditions are set out in Articles 7-8
- Four cumulative requirements: freely given, specific, informed, unambiguous
- Must be a clear affirmative act -- pre-ticked boxes, silence, and inactivity do not constitute consent (Recital 32, confirmed by CJEU in Planet49)
- Controller bears the burden of demonstrating consent was obtained (Article 7(1))
- Withdrawal must be as easy as giving consent (Article 7(3))
- Children's consent requires parental verification for information society services (Article 8)
- EDPB Guidelines 05/2020 provide authoritative interpretation
- Cookie consent is governed by ePrivacy Directive Article 5(3), but the GDPR's consent standard applies to that consent

## Detail

### Definition (Article 4(11))

Consent is defined as: "any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her."

### Conditions for Valid Consent (Article 7)

**Article 7(1) -- Demonstrability:** Where processing is based on consent, the controller must be able to demonstrate that the data subject consented. This requires maintaining records of when and how consent was obtained, what information the data subject was given, and what they consented to.

**Article 7(2) -- Distinguishable requests:** If consent is given in a written declaration that also concerns other matters, the request for consent must be presented in a manner clearly distinguishable from the other matters, in an intelligible and easily accessible form, using clear and plain language. Any part of such a declaration that infringes the GDPR is not binding.

**Article 7(3) -- Right to withdraw:** The data subject has the right to withdraw consent at any time. Withdrawal must be as easy as giving consent. The data subject must be informed of this right before giving consent. Withdrawal does not affect the lawfulness of processing based on consent before its withdrawal.

**Article 7(4) -- Freely given assessment:** When assessing whether consent is freely given, utmost account shall be taken of whether the performance of a contract (including provision of a service) is conditional on consent to processing that is not necessary for the performance of that contract. This is the "anti-bundling" rule -- consent is presumed not to be freely given if it is bundled with acceptance of terms and conditions or if service provision is made conditional on consent.

### The Four Elements of Valid Consent

#### 1. Freely Given

Consent is not freely given if:
- There is a clear imbalance between the data subject and the controller (e.g., employer-employee, public authority-citizen) -- Recital 43
- The data subject has no genuine or free choice, or is unable to refuse or withdraw without detriment
- Consent is bundled: performance of a contract is conditional on consent to unnecessary processing (Article 7(4))
- Consent cannot be given separately for different processing operations (granularity)
- There is detriment for refusing consent (e.g., service degradation, denial of access)

The EDPB Guidelines 05/2020 specify that "cookie walls" -- where website access is entirely conditional on accepting all cookies -- generally do not meet the freely given standard, though some DPAs have accepted limited nuance.

#### 2. Specific

Consent must be:
- Given for each distinct purpose -- if processing serves multiple purposes, consent should be given for each (Recital 32)
- Granular -- separate consent for distinct processing operations
- Clearly separated from information about other matters

#### 3. Informed

Before consenting, the data subject must at minimum be told:
- The controller's identity
- The purpose of each processing operation for which consent is sought
- What type of data will be collected and used
- The existence of the right to withdraw consent
- Information about automated decision-making based on consent (Article 22(2)(c))
- Potential risks of data transfers to third countries without an adequacy decision or appropriate safeguards (where applicable)

Information must be in clear and plain language (Article 7(2)).

#### 4. Unambiguous Indication by Clear Affirmative Action

- Requires a positive opt-in -- checking an unchecked box, clicking an "I agree" button, choosing technical settings, or any other statement or conduct that clearly indicates acceptance
- **Invalid methods:** Pre-ticked checkboxes (Planet49), silence, inactivity, merely continuing to use a service, scrolling through a website
- Blanket acceptance of general terms of service does not constitute valid consent for data processing

### Planet49 Ruling (CJEU C-673/17, October 1, 2019)

The Court of Justice of the EU ruled that:

1. **Pre-ticked checkboxes do not constitute valid consent** for the storage of cookies -- neither under the ePrivacy Directive nor the GDPR. Consent requires active behaviour; a pre-ticked box that the user must deselect requires an act of unchecking rather than an affirmative act of consent.

2. **The consent requirement applies regardless of whether the cookies involve personal data.** Article 5(3) of the ePrivacy Directive protects the terminal equipment itself, not just personal data.

3. **Service providers must inform users of the duration of cookie operation and whether third parties may have access to the cookies.** The information requirements are cumulative with GDPR Articles 13-14.

This ruling is binding across the EU and directly shaped the consent mechanisms required for cookie banners.

### Children's Consent (Article 8)

Where information society services are offered directly to a child, processing based on consent is lawful only if the child is at least **16 years old**. Below that age, consent must be given or authorized by the holder of parental responsibility.

Member states may lower this threshold to **no lower than 13 years** by national law. Notable variations:
- 13 years: Belgium, Denmark, Estonia, Finland, Latvia, Portugal, Sweden, United Kingdom
- 14 years: Austria, Bulgaria, Cyprus, Italy, Lithuania, Spain
- 15 years: Czech Republic, France, Greece, Slovenia
- 16 years: Germany, Hungary, Ireland, Luxembourg, Netherlands, Poland, Romania, Slovakia, Croatia

The controller must make reasonable efforts to verify that consent is given or authorized by the parental responsibility holder, taking into consideration available technology (Article 8(2)).

### EDPB Guidelines 05/2020 on Consent

Key positions from the European Data Protection Board's authoritative guidance:

- **Scrolling or continued browsing is not valid consent.** Actions that cannot be distinguished from normal user behaviour do not demonstrate unambiguous consent.
- **Cookie walls are generally not compliant.** Access to a service should not be made conditional on consenting to non-essential cookies. The EDPB notes that "access to services and functionalities must not be made conditional on the consent of a user to the storing of information, or gaining of access to information already stored, in the terminal equipment of a user (so called cookie walls)."
- **Granularity is required.** Consent must be granular for each purpose and cannot be obtained via a single "accept all" without the option to select specific purposes.
- **Withdrawal mechanisms must be prominent.** If consent was obtained via a one-click button, withdrawal should be similarly easy (e.g., a settings panel accessible from every page, not buried in a support form).
- **Consent obtained under the old Directive (95/46/EC)** can continue to serve as valid consent under the GDPR only if it meets all GDPR conditions.
- **Consent is not "freely given" if the controller processes data on another legal basis for the same purpose** -- you cannot ask for consent as a fallback when relying on legitimate interests.

### Consent and Cookie Consent

While the GDPR defines the standard for consent, cookie consent specifically derives from the ePrivacy Directive Article 5(3). The interaction works as follows:

1. ePrivacy Directive Article 5(3) requires consent for storing or accessing information on a user's terminal equipment (cookies, pixels, local storage, fingerprinting)
2. The consent standard referenced by the ePrivacy Directive is the GDPR's consent standard (as interpreted post-Planet49)
3. An exception exists for cookies that are "strictly necessary" for providing a service explicitly requested by the user (e.g., session cookies, authentication tokens, shopping cart cookies)

See [[gdpr-cookies-eprivacy]] for detailed cookie-specific analysis.

## Product Relevance
- **privacy-mcp**: Consent is a core audit dimension. The consent audit checks whether: (1) cookie banners require affirmative action (not pre-ticked), (2) granular choices are offered, (3) an "accept all" button is not disproportionately prominent compared to reject/customize, (4) withdrawal mechanisms exist and are accessible, (5) cookies are actually blocked until consent is given (consent enforcement), (6) the privacy policy discloses the right to withdraw consent. Tracker detection (60+ services) intersects with consent by identifying which trackers fire before consent is obtained.
- **siteaudit-mcp**: Cookie banner accessibility (keyboard navigation, screen reader labeling, contrast ratios) is an audit concern. Consent mechanisms that are inaccessible to disabled users create both GDPR and WCAG issues.

## Cross-References
- [[gdpr-overview]]
- [[gdpr-legal-bases]]
- [[gdpr-cookies-eprivacy]]
- [[gdpr-privacy-policy-requirements]]
- [[gdpr-data-subject-rights]]
- [[gdpr-enforcement-fines]]

## Sources
- raw/regulations/gdpr-structure.md
- Regulation (EU) 2016/679, Articles 4(11), 7, 8
- EDPB Guidelines 05/2020 on consent under Regulation 2016/679 (Version 1.1, adopted 4 May 2020)
- CJEU Case C-673/17 (Planet49 GmbH), Judgment of 1 October 2019
