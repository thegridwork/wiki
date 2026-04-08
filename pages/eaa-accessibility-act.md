# European Accessibility Act (EAA)

> The European Accessibility Act (Directive (EU) 2019/882) is an EU directive requiring products and services placed on the European market to meet accessibility requirements, with a compliance deadline of June 28, 2025, referencing WCAG 2.1 Level AA through the EN 301 549 standard.

## Key Points
- Directive (EU) 2019/882, adopted June 17, 2019; member states required to transpose by June 28, 2022
- Compliance deadline: June 28, 2025 -- products and services placed on the EU market must comply
- Covers: e-commerce, banking, ticketing and check-in machines, e-books and e-readers, computing hardware and operating systems, telecommunications, and audiovisual media services
- Technical standard: EN 301 549 references WCAG 2.1 Level AA for web content and mobile applications
- Enforcement: member states define penalties; must be "effective, proportionate and dissuasive"
- Microenterprise exemption: businesses with fewer than 10 employees and less than EUR 2 million turnover may be exempt for services
- The EAA extends accessibility obligations beyond government/public sector to the private sector

## Detail

### Scope

The EAA applies to products and services made available on the EU market after June 28, 2025:

**Products:**
- Computers and operating systems
- Self-service terminals (ATMs, ticketing machines, check-in kiosks, payment terminals)
- Consumer equipment for electronic communications (smartphones, tablets)
- Consumer equipment for audiovisual media services (smart TVs, set-top boxes)
- E-readers

**Services:**
- Electronic communications services (telephony, messaging)
- Services providing access to audiovisual media (streaming platforms)
- Elements of passenger transport services (websites, apps, ticketing, check-in, real-time travel information)
- Consumer banking services (online banking, payment services)
- E-books and dedicated software
- E-commerce services (websites and mobile applications)

### Relationship to WCAG

The EAA does not directly reference WCAG in its text. Instead, it establishes functional accessibility requirements and mandates that the European Commission designate harmonized standards to provide a presumption of conformity. The primary harmonized standard is:

**EN 301 549 -- Accessibility requirements for ICT products and services**

EN 301 549 incorporates WCAG 2.1 Level AA requirements for:
- Web content (Section 9)
- Non-web documents (Section 10)
- Software (Section 11)
- Mobile applications (via Sections 9 and 11)

Meeting WCAG 2.1 Level AA for web content and mobile applications creates a presumption of conformity with the EAA's web and app requirements. However, EN 301 549 also includes additional requirements beyond WCAG for hardware, software, and telecommunications.

### Enforcement

The EAA is a directive, meaning each EU member state must transpose it into national law and define enforcement mechanisms:

- **Market surveillance authorities** monitor product compliance
- **Designated bodies** oversee service compliance
- Penalties must be "effective, proportionate and dissuasive" (Article 30)
- Member states determine specific penalty amounts and enforcement procedures
- Consumers and organizations can challenge non-compliance through national courts

### Microenterprise Exemption

The EAA provides a limited exemption for microenterprises providing services:
- **Definition:** Fewer than 10 employees AND annual turnover or balance sheet total not exceeding EUR 2 million
- **Scope of exemption:** Applies only to service obligations; product obligations remain
- **Note:** This exemption is narrower than many assume -- it does not exempt small businesses that are not microenterprises, and it does not apply to product manufacturers of any size

### Transition Period

- Products and services placed on the market before June 28, 2025 may continue to be provided under existing contracts for up to 5 years (until June 28, 2030)
- Self-service terminals placed into service before June 28, 2025 may continue to be used for up to 20 years
- Service providers using products that were compliant when first placed on the market have a 5-year transition for those specific products

### Relationship to Other Frameworks

| Framework | Scope | Jurisdiction | WCAG Reference |
|-----------|-------|-------------|----------------|
| EAA (Directive 2019/882) | Private sector products and services | EU member states | WCAG 2.1 AA (via EN 301 549) |
| Web Accessibility Directive (2016/2102) | Public sector websites and apps | EU member states | WCAG 2.1 AA (via EN 301 549) |
| ADA Title III | Public accommodations (increasingly websites) | United States | WCAG referenced in DOJ guidance; no statutory mandate for specific version |
| Section 508 | Federal agencies | United States | WCAG 2.0 AA (update to 2.1 pending) |
| Accessible Canada Act | Federal entities, federally regulated industries | Canada | WCAG 2.1 AA (via EN 301 549 alignment) |

### Section 508 (US Federal)

Section 508 of the Rehabilitation Act requires federal agencies to make their electronic and information technology accessible. The Revised 508 Standards (effective January 2018) reference WCAG 2.0 Level AA. A proposed update to WCAG 2.1 is pending.

Section 508 applies to:
- Federal agency websites, applications, and documents
- Technology procured by federal agencies
- Contractors building technology for federal use

### ADA Title III (US)

The Americans with Disabilities Act Title III applies to "public accommodations." While the statute does not mention websites or WCAG, courts have increasingly interpreted public accommodations to include websites, and the DOJ has referenced WCAG 2.1 AA in consent decrees and rulemaking. In April 2024, the DOJ published a final rule requiring state and local government web content and mobile applications to conform to WCAG 2.1 Level AA.

## Product Relevance
- **siteaudit-mcp** reports accessibility findings against the WCAG 2.1 AA baseline, which aligns with the EAA's requirements through EN 301 549. For businesses targeting EU markets, siteaudit-mcp's WCAG checks directly support EAA compliance assessment. The June 28, 2025 deadline makes this a high-priority check for any site serving EU customers.

## Cross-References
- [[wcag-overview]]
- [[wcag-level-a-aa]]
- [[wcag-common-violations]]

## Sources
- raw/standards/wcag-2-1-reference.md
