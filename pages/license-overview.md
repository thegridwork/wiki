# Software License Overview

> Software licenses define the legal terms under which source code and compiled software may be used, modified, and distributed, ranging from public domain dedications with no restrictions to strong copyleft licenses requiring derivative works to remain open source.

## Key Points
- Software licenses fall into four main categories: copyleft (strong), weak copyleft, permissive, and public domain equivalent
- Copyleft licenses (GPL, AGPL) require derivative works to be distributed under the same license terms -- the "viral" effect
- Weak copyleft licenses (LGPL, MPL-2.0) allow proprietary code to coexist with open-source components under specific conditions
- Permissive licenses (MIT, Apache-2.0, BSD) impose minimal restrictions, primarily requiring attribution
- Source-available licenses (SSPL, BUSL-1.1, Elastic-2.0) are not open source by OSI definition but provide access to source code with usage restrictions
- License compliance matters because violations can result in litigation, injunctions, forced code disclosure, or loss of distribution rights
- The SPDX standard provides canonical identifiers for license references in package metadata

## Detail

### License Categories

#### Public Domain / Public Domain Equivalent
Licenses that waive all copyright restrictions, placing code in the public domain or as close to it as legally possible.

- **Unlicense**, **CC0-1.0**, **WTFPL**, **0BSD**
- No conditions on use, modification, or distribution
- CC0-1.0 is technically not OSI-approved but is FSF-approved as free software
- Suitable for code snippets, libraries seeking maximum adoption, or content dedications

#### Permissive Licenses
Licenses that allow broad use with minimal conditions, typically limited to attribution and license notice retention.

- **MIT**, **Apache-2.0**, **BSD-2-Clause**, **BSD-3-Clause**, **ISC**, **BSL-1.0**, **Zlib**, **PostgreSQL**, **BlueOak-1.0.0**
- Users may incorporate permissively-licensed code into proprietary projects
- Apache-2.0 uniquely includes an express patent grant and patent termination clause
- BSD-3-Clause adds a non-endorsement clause; BSD-2-Clause omits it
- All permissive licenses are compatible with each other and with copyleft licenses

#### Weak Copyleft
Licenses that require modifications to the licensed component to remain open source, but allow proprietary code to interface with or include the component.

- **LGPL-2.1**, **LGPL-3.0** -- linking exception: proprietary code may link to LGPL libraries without becoming LGPL
- **MPL-2.0** -- file-level copyleft: modifications to MPL files must remain MPL, but other files in the project may be proprietary
- **EPL-2.0** -- module-level copyleft with optional GPL-2.0 secondary license designation
- **CDDL-1.0** -- file-level copyleft, notably incompatible with GPL
- **Artistic-2.0** -- weak copyleft used primarily by the Perl ecosystem

#### Strong Copyleft
Licenses that require the entire derivative work to be distributed under the same license terms.

- **GPL-2.0**, **GPL-3.0** -- the canonical copyleft licenses; derivative works and combined works must be GPL
- **AGPL-3.0** -- extends GPL-3.0 with a network use clause (Section 13): if modified AGPL code is run on a server and users interact with it over a network, source must be offered to those users
- **CC-BY-SA-4.0** -- copyleft for creative content (not software)
- **EUPL-1.2** -- EU-origin copyleft with broad compatibility provisions

#### Source-Available (Not Open Source)
Licenses that provide source code access but restrict certain uses, making them ineligible for the OSI "open source" designation.

- **SSPL-1.0** (MongoDB) -- requires releasing the entire service stack if offering the software as a service
- **BUSL-1.1** (MariaDB, HashiCorp, Sentry) -- restricts production use; converts to an OSS license after a change date (typically 3-4 years)
- **Elastic-2.0** (Elastic) -- permits most use but prohibits offering as a managed service

### Why License Compliance Matters

1. **Legal risk:** License violations can lead to copyright infringement claims, injunctions, and statutory damages
2. **Forced disclosure:** Violating a copyleft license may result in a court order to release proprietary source code or cease distribution
3. **Supply chain integrity:** Modern software relies on hundreds of dependencies; a single copyleft violation in the dependency tree can affect the entire product
4. **SaaS exposure:** AGPL-3.0 closes the "SaaS loophole" -- even server-side use triggers source disclosure obligations
5. **M&A and investment risk:** License compliance issues can block acquisitions or reduce valuations during due diligence
6. **Community trust:** Open-source communities enforce license compliance reputationally; violations damage a project's standing

## Product Relevance
- **license-mcp** scans project dependencies to identify licenses, categorize them by type (copyleft, weak copyleft, permissive, public domain, source-available), and flag compliance risks. It uses the category distinctions described here to drive its risk classification system and conflict detection logic.

## Cross-References
- [[license-copyleft]]
- [[license-compatibility]]
- [[license-risk-classification]]
- [[license-spdx-identifiers]]

## Sources
- raw/standards/spdx-license-reference.md
