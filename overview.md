# Gridwork Compliance Wiki — Overview

> A living knowledge base covering the compliance domains that Gridwork's MCP products operate in. Compiled and maintained by LLM agents, browsed by humans.

## Domains

### EU General Data Protection Regulation (GDPR)
The EU's comprehensive data protection framework, effective May 25, 2018. Governs how personal data of EU residents is collected, processed, stored, and transferred. 99 articles across 11 chapters. Enforced by national Data Protection Authorities (DPAs) with fines up to €20M or 4% of global annual turnover. The ePrivacy Directive (soon to be replaced by ePrivacy Regulation) supplements GDPR specifically for electronic communications and cookies.

**Gridwork products:** privacy-mcp (tracker detection, consent audit, policy analysis, data collection checks)

### EU Artificial Intelligence Act
The world's first comprehensive AI regulation (Regulation 2024/1689), establishing a risk-based framework for AI systems in the EU. Four risk tiers: unacceptable (banned), high (regulated), limited (transparency), minimal (free). Phased enforcement: prohibited practices from Feb 2025, GPAI from Aug 2025, high-risk Annex III from Aug 2026. Fines up to €35M or 7% of global turnover.

**Gridwork products:** aiact-mcp (AI system detection, risk classification, compliance gap analysis)

### California Consumer Privacy Act (CCPA) / CPRA
California's consumer privacy law, effective Jan 1, 2020, significantly amended by CPRA (effective Jan 1, 2023). Grants consumers rights to know, delete, correct, opt-out of sale/sharing, and limit use of sensitive data. Applies to businesses meeting revenue/data thresholds. Enforced by California Privacy Protection Agency (CPPA). Increasingly the template for other US state privacy laws (20+ states enacted as of 2026).

**Gridwork products:** privacy-mcp (privacy policy audit, do-not-sell detection, consumer rights checks)

### Software Licensing & Open Source Compliance
The ecosystem of open source and proprietary software licenses governing how code can be used, modified, and distributed. Key categories: copyleft (GPL, AGPL — viral, require derivative works to use same license), weak copyleft (LGPL, MPL — linking exceptions), permissive (MIT, Apache, BSD — minimal restrictions), public domain (Unlicense, CC0). License conflicts in dependency trees are a major compliance risk, especially AGPL in SaaS contexts.

**Gridwork products:** license-mcp (license scanning, risk classification, conflict detection, copyleft identification)

### Web Accessibility (WCAG / EAA / Section 508)
Web Content Accessibility Guidelines (WCAG) 2.1 define success criteria across four principles: Perceivable, Operable, Understandable, Robust. Three conformance levels: A (minimum), AA (standard target), AAA (enhanced). The European Accessibility Act (EAA, effective June 28, 2025) mandates accessibility for digital products sold in the EU. US Section 508 requires federal websites meet WCAG 2.0 AA.

**Gridwork products:** siteaudit-mcp (accessibility auditing, WCAG criteria checks, contrast analysis)

## Cross-Domain Themes

1. **Consent as a cross-cutting concern** — GDPR consent (Art. 7), ePrivacy cookie consent (Art. 5(3)), AI Act transparency (Art. 50), CCPA opt-out (§1798.120) all require different consent mechanisms on the same website.

2. **Risk-based regulation is the pattern** — AI Act risk tiers, GDPR DPIAs for high-risk processing, license risk categories. Gridwork products all classify by risk level.

3. **Enforcement is accelerating** — GDPR fines crossed €4B cumulative by 2025. AI Act enforcement begins 2025. CCPA/CPRA enforcement ramping up. EAA deadline June 2025. Compliance tools become more valuable as enforcement intensifies.

4. **US privacy is fragmenting** — No federal privacy law. 20+ state laws with different thresholds, rights, and enforcement. Creates demand for automated compliance checking.
