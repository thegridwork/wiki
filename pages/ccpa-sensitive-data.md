# CCPA Sensitive Personal Information

> The CPRA introduced the concept of "sensitive personal information" (SPI) as a distinct category of personal information subject to heightened protections, including a consumer's right to limit its use and disclosure.

## Key Points
- Sensitive personal information is defined in CPRA section 1798.140(ae) and encompasses 11 specific categories
- Consumers have the right to limit a business's use of SPI to what is reasonably necessary to perform the requested service (s 1798.121)
- Businesses must provide a "Limit the Use of My Sensitive Personal Information" link
- The CPRA opt-out/limit model for sensitive data contrasts with most other state privacy laws, which require opt-in consent
- SPI categories include government IDs, account credentials, precise geolocation, racial/ethnic origin, religious beliefs, union membership, private communications content, genetic data, biometric data, health data, and sex life/sexual orientation data

## Detail

### Sensitive Personal Information Categories (s 1798.140(ae))

The CPRA defines 11 categories of sensitive personal information:

| # | Category | Examples |
|---|----------|----------|
| 1 | Government identifiers | Social Security number, driver's license number, state ID number, passport number |
| 2 | Account log-in credentials | Username combined with password; financial account number combined with access code, security code, or password |
| 3 | Precise geolocation | Location data accurate within 1,850 feet (~563 meters) |
| 4 | Racial or ethnic origin | Self-identified or inferred racial or ethnic background |
| 5 | Religious or philosophical beliefs | Faith, denomination, philosophical convictions |
| 6 | Union membership | Status as a member of a labor union |
| 7 | Contents of private communications | Contents of mail, email, and text messages, unless the business is the intended recipient of the communication |
| 8 | Genetic data | Data resulting from genetic testing or analysis |
| 9 | Biometric information | Data used for unique identification purposes (fingerprints, facial geometry, voice prints, iris scans) |
| 10 | Health information | Physical or mental health conditions, diagnoses, treatment information |
| 11 | Sex life or sexual orientation | Information concerning a person's sex life or sexual orientation |

### Use Limitations

Under section 1798.121, when a consumer exercises the right to limit use:

- The business may only use or disclose SPI for purposes **reasonably necessary** to perform the service or provide the goods requested by the consumer
- Permitted necessary uses include: performing services on behalf of the business, ensuring security and integrity, short-term transient use, performing services such as maintaining accounts and providing customer service, verifying and maintaining quality and safety, and processing or fulfilling orders
- The business must not use SPI for profiling, targeted advertising, or any purpose beyond what the consumer would reasonably expect

### Implementation Requirements

Businesses that collect sensitive personal information must:

1. Provide a clear and conspicuous link titled **"Limit the Use of My Sensitive Personal Information"** on their homepage (s 1798.135)
2. Alternatively, businesses may use a single link combining both the "Do Not Sell or Share" and "Limit Sensitive PI" opt-outs
3. Disclose in their privacy policy the categories of SPI collected and the purposes for which each category is used
4. Comply with data minimization requirements -- collection of SPI must be reasonably necessary and proportionate to the disclosed purposes

### Comparison with Other State Laws

California's approach to sensitive data is distinct from most other state privacy laws:

- **California (CCPA/CPRA):** Opt-out model -- businesses may collect and use SPI but must allow consumers to limit that use
- **Most other states (Virginia, Colorado, Connecticut, etc.):** Opt-in model -- businesses must obtain affirmative consent before processing sensitive data
- **Maryland (MODPA):** Prohibits the sale of sensitive data entirely, the strictest approach among US states

## Product Relevance
- **privacy-mcp** checks privacy policies for disclosure of sensitive PI categories being collected and verifies the presence of a "Limit the Use of My Sensitive Personal Information" link or combined opt-out link. It flags policies that mention collecting sensitive categories without corresponding use limitation disclosures.

## Cross-References
- [[ccpa-overview]]
- [[ccpa-consumer-rights]]
- [[ccpa-business-obligations]]
- [[us-state-privacy-comparison]]

## Sources
- raw/regulations/ccpa-cpra-full-text.md
