# GDPR Cookies and ePrivacy

> Cookie consent is governed by Article 5(3) of the ePrivacy Directive (2002/58/EC), which requires prior informed consent before storing or accessing information on a user's terminal equipment, with the consent standard defined by the GDPR; only "strictly necessary" cookies are exempt from this requirement.

## Key Points
- Cookie consent derives from the ePrivacy Directive, not the GDPR directly -- but the GDPR defines the consent standard
- Article 5(3) of the ePrivacy Directive requires consent for storing or accessing any information on a user's device, regardless of whether it involves personal data
- The "strictly necessary" exemption applies only to cookies essential for providing a service explicitly requested by the user
- Pre-ticked checkboxes are invalid consent (CJEU Planet49, C-673/17)
- Cookie walls are generally non-compliant per EDPB Guidelines 05/2020
- Analytics, advertising, social media, and tracking cookies always require prior consent
- The ePrivacy Regulation (proposed 2017) would replace the Directive but remains stalled as of 2026
- This page directly feeds privacy-mcp's tracker and consent detection capabilities

## Detail

### Legal Framework: ePrivacy Directive Article 5(3)

The ePrivacy Directive 2002/58/EC (as amended by Directive 2009/136/EC) Article 5(3) states:

> "Member States shall ensure that the storing of information, or the gaining of access to information already stored, in the terminal equipment of a subscriber or user is only allowed on condition that the subscriber or user concerned has given his or her consent, having been provided with clear and comprehensive information, in accordance with [the GDPR], inter alia, about the purposes of the processing."

Key points:
- This applies to **any** storage of or access to information on terminal equipment -- not just cookies. It covers: HTTP cookies, Flash/LSO cookies, pixel tags/web beacons, browser fingerprinting, local storage (localStorage, sessionStorage), IndexedDB, and any client-side tracking technology.
- The protection is of the **terminal equipment itself** -- consent is required even when the stored information does not constitute personal data (confirmed by Planet49).
- The consent standard is the GDPR standard: freely given, specific, informed, unambiguous, by clear affirmative action.

### The Strictly Necessary Exemption

Article 5(3) provides a single exemption: consent is not required for storage that is "strictly necessary for the provision of an information society service explicitly requested by the subscriber or user."

#### Cookies That Qualify as Strictly Necessary

- **Session/authentication cookies:** Maintaining logged-in state
- **Shopping cart cookies:** Tracking items in a cart during a session
- **Security cookies:** CSRF tokens, fraud detection during a session
- **Load balancing cookies:** Distributing traffic across servers
- **User interface customization:** Language preference cookies set by the user's explicit action
- **Cookie consent preference cookies:** Storing the user's consent choice itself (this is the consensus position -- you need to remember that the user rejected cookies)

#### Cookies That Do NOT Qualify as Strictly Necessary

- **Analytics cookies** (Google Analytics, Matomo, Plausible, Adobe Analytics) -- even when used "only" for aggregate statistics. The user did not request analytics. Some DPAs (France CNIL) have permitted certain audience measurement cookies under limited conditions, but this is an exception with strict requirements, not a general exemption.
- **Advertising cookies** (Google Ads, Meta Pixel, programmatic advertising tags) -- always require consent
- **Social media plugins** (Facebook Like buttons, Twitter embeds, LinkedIn widgets) -- when they set cookies or transmit data upon page load
- **Retargeting/remarketing cookies** -- always require consent
- **Third-party tracking pixels** -- always require consent
- **Session recording tools** (Hotjar, FullStory, LogRocket) -- require consent as they access terminal equipment for tracking purposes
- **A/B testing cookies** -- generally require consent (the user did not request the experiment)
- **Personalization cookies** -- unless the user explicitly requested the personalized experience

### Cookie Categories

The industry commonly classifies cookies into four categories. While these categories are not defined in the GDPR or ePrivacy Directive, they have been adopted as a practical standard:

| Category | Consent Required | Examples |
|----------|-----------------|----------|
| **Strictly Necessary** | No | Session tokens, CSRF, load balancing, consent storage |
| **Functional/Preferences** | Yes | Language preferences (if set automatically), accessibility settings, region detection |
| **Analytics/Statistics** | Yes | Google Analytics, Adobe Analytics, Matomo, heatmaps |
| **Marketing/Advertising** | Yes | Google Ads, Meta Pixel, programmatic ad tags, retargeting, social plugins |

### Consent Mechanism Requirements

Based on GDPR Articles 4(11) and 7, ePrivacy Article 5(3), EDPB Guidelines 05/2020, and Planet49:

**What a compliant cookie banner must do:**

1. **Appear before any non-essential cookies are set.** Cookies must not fire on page load before the user has consented. This is the "prior consent" requirement. Many implementations fail this -- trackers load before the banner is even displayed or before the user interacts with it.

2. **Provide clear information** about what cookies are used and their purposes, either directly in the banner or via an accessible second layer.

3. **Require affirmative action for acceptance.** An "Accept" button that the user must actively click. Pre-ticked boxes, continued scrolling, and "by continuing to browse you accept cookies" are invalid.

4. **Offer a genuine "Reject" or "Decline" option** that is equally prominent and accessible as the "Accept" option. Making "Accept" a large colored button and "Reject" a small gray text link is a dark pattern that undermines freely given consent.

5. **Provide granular control.** Users must be able to consent to specific categories or purposes, not just "all or nothing." An "Accept All" button is permissible only if accompanied by equally accessible granular options and a "Reject All" button.

6. **Not use cookie walls** (denying service access entirely to users who decline). The EDPB considers cookie walls generally incompatible with freely given consent. Some nuance exists: the Austrian DPA and some others have accepted "consent or pay" models under limited conditions, but this remains contentious.

7. **Ensure withdrawal is as easy as giving consent.** If consent was given via a one-click banner, a one-click withdrawal mechanism must be available (e.g., a persistent settings icon, a footer link to cookie preferences that reopens the consent modal).

8. **Not use deceptive design patterns** (dark patterns). The EDPB Guidelines 03/2022 on dark patterns in social media interfaces extend to consent mechanisms. Examples of non-compliant patterns:
   - Asymmetric button design (prominent "Accept," hidden "Reject")
   - Requiring more clicks to reject than to accept
   - Using confusing language ("We value your privacy" without clear opt-out)
   - Pre-selecting all categories
   - Nagging (repeatedly showing the banner after rejection)

### Planet49 Ruling (CJEU C-673/17, October 1, 2019)

The CJEU established three key principles:

1. **Pre-ticked checkboxes do not constitute valid consent** for cookies. Neither active behaviour nor a clear affirmative action can be inferred from a user's failure to untick a pre-selected option.

2. **The consent requirement under Article 5(3) applies regardless of whether the information stored or accessed constitutes personal data.** The Directive protects the user's terminal equipment, not just personal data. This means even non-personal tracking identifiers require consent.

3. **Users must be informed of the duration of cookie operation and whether third parties have access to the cookies.** This is in addition to standard GDPR transparency requirements (Articles 13-14).

### CNIL Guidance on Analytics (France)

The French CNIL has taken a somewhat distinctive position on analytics cookies. In its June 2020 guidelines and updated recommendations:

- Analytics cookies are **not** strictly necessary and generally require consent
- However, the CNIL has provided a limited exemption path for **audience measurement** cookies that are:
  - Used solely for anonymous aggregate statistical measurement
  - Limited to a single publisher (not shared across sites)
  - Not cross-referenced with other processing operations
  - Used to produce anonymous statistical data only
  - Subject to a data retention period limited to 25 months for cookies and 13 months for collected data

Even under this CNIL-specific approach, Google Analytics in its standard configuration does not qualify because data is processed by Google (a third party) and may be combined with other Google services.

### Consent Management Platforms (CMPs)

Most websites implement cookie consent through CMPs (OneTrust, Cookiebot, TrustArc, Didomi, Usercentrics, etc.). Key compliance considerations:

- **CMP configuration is the controller's responsibility.** Using a CMP does not automatically ensure compliance -- the controller must configure it correctly.
- The **IAB Europe Transparency and Consent Framework (TCF)** was found to be a joint controller arrangement by the Belgian DPA (2022), raising questions about the TCF's compliance. IAB Europe was ordered to bring the TCF into compliance.
- CMPs must actually **block non-essential cookies until consent is obtained** (consent enforcement). Many CMPs display a banner but do not actually prevent cookie setting -- this is a common and serious implementation failure.
- CMP records should be sufficient to demonstrate consent under Article 7(1).

### ePrivacy Regulation (Proposed)

The European Commission proposed the ePrivacy Regulation in January 2017 to replace the Directive. As of 2026, the regulation remains in legislative negotiation. Key proposed changes:

- Direct applicability across the EU (like the GDPR, unlike the current Directive which requires national transposition)
- Expanded scope to cover over-the-top (OTT) communications services
- Potential browser-level consent settings as a valid consent mechanism
- Alignment of enforcement with GDPR fine levels (up to 4% of global turnover)
- Possible relaxation of analytics cookie consent requirements under defined conditions

Until the ePrivacy Regulation is adopted, the 2002 Directive (as amended in 2009) remains in force, interpreted through the lens of GDPR consent standards.

### National Variations

Because the ePrivacy Directive requires national transposition, there are variations in implementation:

- **Germany:** The Federal Court of Justice (BGH) confirmed in the "Planet49" follow-up decision (I ZR 7/16) that consent must be obtained before setting non-essential cookies under Section 25 of the Telekommunikation-Telemedien-Datenschutzgesetz (TTDSG).
- **France:** The CNIL has been particularly active in cookie enforcement, fining Google (EUR 150M) and Facebook (EUR 60M) in 2022 for making it harder to refuse cookies than to accept them.
- **Spain:** The AEPD generally aligns with the EDPB position.
- **Italy:** The Garante issued detailed cookie guidelines in 2021 requiring a banner with clearly differentiated accept/reject buttons.
- **Belgium:** The Belgian DPA's decision against IAB Europe has EU-wide implications for the TCF.

## Product Relevance
- **privacy-mcp**: This is the primary knowledge base for privacy-mcp's tracker detection and consent audit features. Specifically:
  - **Tracker detection (60+ services):** Identifies which third-party services are loaded, categorizes them (analytics, advertising, social, functional), and checks whether they fire before consent is obtained. Each tracker detected pre-consent is a high-severity finding.
  - **Consent audit:** Evaluates the cookie banner for: presence of a reject option, symmetry of accept/reject buttons, granularity of category choices, presence of a "Reject All" equivalent, deceptive design patterns, and whether consent is actually enforced (non-essential cookies blocked until consent).
  - **Cookie categorization:** Determines whether cookies detected on a page are strictly necessary or require consent, cross-referencing against the privacy policy's cookie disclosures.
  - **Third-party tracker analysis:** Links detected trackers to data transfer concerns (see [[gdpr-data-transfers]]) -- e.g., Google Analytics triggers both a consent finding and a transfer finding.
- **siteaudit-mcp**: Cookie banners are a significant accessibility concern. siteaudit-mcp should check: keyboard navigability of the consent modal, screen reader labeling of accept/reject buttons, focus management when the modal appears, contrast ratios of banner text/buttons, and whether the banner traps focus or blocks content for assistive technology users.

## Cross-References
- [[gdpr-consent]]
- [[gdpr-privacy-policy-requirements]]
- [[gdpr-legal-bases]]
- [[gdpr-data-transfers]]
- [[gdpr-enforcement-fines]]
- [[gdpr-overview]]

## Sources
- raw/regulations/gdpr-structure.md
- Directive 2002/58/EC (ePrivacy Directive), Article 5(3)
- Directive 2009/136/EC (amending the ePrivacy Directive)
- CJEU Case C-673/17 (Planet49 GmbH), Judgment of 1 October 2019
- EDPB Guidelines 05/2020 on consent under Regulation 2016/679
- EDPB Guidelines 03/2022 on dark patterns in social media platform interfaces
- CNIL Deliberation 2020-091 on cookies and other trackers (17 September 2020)
- Belgian DPA Decision on IAB Europe (2 February 2022)
