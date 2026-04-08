# License Risk Classification

> License-mcp classifies open-source license risk into four tiers -- critical, warning, low, and info -- based on the license type, the project context (proprietary vs. open source, SaaS vs. distributed), and the nature of the dependency relationship.

## Key Points
- Critical: strong copyleft (GPL, AGPL) in a proprietary codebase or AGPL in any SaaS context
- Warning: weak copyleft (LGPL, MPL, EPL) requiring careful boundary management; source-available licenses with usage restrictions
- Low: permissive licenses (MIT, Apache-2.0, BSD) with minimal obligations
- Info: public domain dedications (Unlicense, CC0-1.0, 0BSD) with no meaningful restrictions
- Risk depends on context: the same license can be low-risk in one project and critical in another
- AGPL-3.0 receives special treatment because server-side use (not just distribution) triggers source disclosure

## Detail

### Risk Tiers

#### Critical Risk

Licenses that require the entire derivative/combined work to be released under the same terms, creating a direct conflict with proprietary or closed-source distribution.

| License | Trigger Condition | Impact |
|---------|-------------------|--------|
| GPL-2.0-only | Used in a proprietary project (any dependency relationship) | Entire combined work must be GPL-2.0 or distribution must cease |
| GPL-2.0-or-later | Same as above | Same, though `-or-later` offers more compatibility options |
| GPL-3.0-only | Used in a proprietary project | Entire combined work must be GPL-3.0; anti-tivoization applies |
| GPL-3.0-or-later | Same as above | Same as GPL-3.0-only |
| AGPL-3.0-only | Used in **any** server-side/SaaS context | Source of the entire combined work must be offered to network users |
| AGPL-3.0-or-later | Same as above | Same as AGPL-3.0-only |
| CC-BY-SA-4.0 | Used in proprietary content | Derivative content must be CC-BY-SA |
| EUPL-1.2 | Used in proprietary project | Strong copyleft; derivative works must be EUPL or compatible license |

**Why AGPL is especially critical in SaaS:** Most copyleft licenses only trigger obligations upon "distribution" (sharing copies with others). AGPL Section 13 extends this to "Remote Network Interaction" -- if users interact with modified AGPL code over a network, the source must be made available. This means a SaaS product using AGPL code must release its source even though no binary is ever distributed.

#### Warning Risk

Licenses that impose significant obligations but can be managed with careful architecture and compliance practices.

| License | Trigger Condition | Mitigation |
|---------|-------------------|------------|
| LGPL-2.1 / LGPL-3.0 | Linked into proprietary code | Use dynamic linking; provide ability to relink with modified LGPL library |
| MPL-2.0 | Modified MPL files in a mixed project | Keep MPL file modifications under MPL; proprietary code in separate files |
| EPL-2.0 | Used without GPL secondary license designation | Module-level copyleft; keep proprietary code in separate modules |
| CDDL-1.0 | Used in any GPL project | Incompatible with GPL; cannot coexist in combined works |
| SSPL-1.0 | Used in any service offering | Requires releasing entire service stack source; often treated as critical |
| BUSL-1.1 | Used in production before change date | Restricts production use until conversion to OSS license |
| Elastic-2.0 | Offered as a managed service | Prohibits offering as a managed service |
| CC-BY-NC-4.0 | Used in any commercial context | Non-commercial restriction; incompatible with commercial use |

#### Low Risk

Licenses with minimal obligations, primarily attribution and license notice retention.

| License | Obligation |
|---------|-----------|
| MIT | Include license text and copyright notice |
| Apache-2.0 | Include license text, copyright notice, and NOTICE file (if present); patent grant included |
| BSD-2-Clause | Include license text and copyright notice |
| BSD-3-Clause | Include license text, copyright notice; do not use contributor names for endorsement |
| ISC | Include license text and copyright notice |
| BSL-1.0 | Include license text |
| Zlib | Include license text; do not misrepresent origin |
| PostgreSQL | Include license text and copyright notice |
| BlueOak-1.0.0 | Include license text |
| CC-BY-4.0 | Attribution required (for content, not software) |

#### Info (No Risk)

Dedications that impose no meaningful restrictions.

| License | Notes |
|---------|-------|
| Unlicense | Public domain dedication |
| CC0-1.0 | Public domain dedication (not OSI-approved but FSF-approved) |
| 0BSD | Zero-clause BSD; effectively public domain |
| WTFPL | No restrictions |

### Context-Dependent Risk Assessment

The same license produces different risk levels depending on the project context:

| License | Proprietary distributed software | Proprietary SaaS | Open-source GPL-3.0 project | Open-source MIT project |
|---------|----------------------------------|-------------------|----------------------------|------------------------|
| GPL-3.0-only | Critical | Low (no distribution) | Low (compatible) | Critical (incompatible intent) |
| AGPL-3.0-only | Critical | Critical (network clause) | Warning (combined = AGPL) | Critical |
| LGPL-3.0-only | Warning (manage linking) | Low (no distribution) | Low (compatible) | Warning |
| MPL-2.0 | Warning (file boundaries) | Low (no distribution) | Low (compatible) | Warning |
| MIT | Low | Low | Low | Low |

**Key insight:** For SaaS products, GPL-3.0 risk drops because server-side use without distribution does not trigger GPL obligations. However, AGPL-3.0 risk remains critical because the network use clause specifically targets this scenario.

### Source-Available License Risks

Source-available licenses require special attention because they are often confused with open-source licenses:

- **SSPL-1.0:** The service-stack disclosure requirement is so broad that many organizations treat it as effectively unusable for any production service. Risk classification: **Warning to Critical** depending on deployment model.
- **BUSL-1.1:** Time-delayed open source. Risk depends on the change date and planned usage timeline. Production use before the change date requires a commercial agreement. Risk classification: **Warning** (becomes Low after change date).
- **Elastic-2.0:** The managed-service prohibition primarily affects cloud providers and hosting companies. Risk classification: **Warning** for service providers, **Low** for end-user deployments.

### Dependency Depth Considerations

Risk may vary by how deep in the dependency tree a license appears:

- **Direct dependency:** Full risk applies; the project explicitly chose to include this code
- **Transitive dependency:** Same legal risk, but may be less visible; license-mcp scans transitive dependencies to surface hidden risks
- **Development-only dependency:** Build tools, test frameworks, and linters used only during development and not distributed with the product typically do not trigger copyleft obligations (but this is not universally settled law)

## Product Relevance
- **license-mcp** implements this risk classification system directly. It scans dependency manifests (package.json, requirements.txt, go.mod, Cargo.toml, etc.), resolves each dependency's license via SPDX identifiers, and classifies risk based on the license type and the project context. Critical findings are surfaced as top-level alerts. The system handles dual-licensed packages by evaluating the least-restrictive option. AGPL detection is specifically called out in SaaS contexts.

## Cross-References
- [[license-overview]]
- [[license-copyleft]]
- [[license-compatibility]]
- [[license-spdx-identifiers]]

## Sources
- raw/standards/spdx-license-reference.md
