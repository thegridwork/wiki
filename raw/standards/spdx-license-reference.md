# SPDX License Identifier Reference

Based on the SPDX License List (https://spdx.org/licenses/).

---

## Major OSS Licenses

| SPDX Identifier | Full Name | OSI Approved | FSF Free | Copyleft Type |
|-----------------|-----------|:------------:|:--------:|---------------|
| MIT | MIT License | Y | Y | None |
| Apache-2.0 | Apache License 2.0 | Y | Y | None |
| BSD-2-Clause | BSD 2-Clause "Simplified" License | Y | Y | None |
| BSD-3-Clause | BSD 3-Clause "New" or "Revised" License | Y | Y | None |
| ISC | ISC License | Y | Y | None |
| 0BSD | BSD Zero Clause License | Y | Y | None |
| GPL-2.0-only | GNU General Public License v2.0 only | Y | Y | Strong |
| GPL-2.0-or-later | GNU General Public License v2.0 or later | Y | Y | Strong |
| GPL-3.0-only | GNU General Public License v3.0 only | Y | Y | Strong |
| GPL-3.0-or-later | GNU General Public License v3.0 or later | Y | Y | Strong |
| LGPL-2.1-only | GNU Lesser General Public License v2.1 only | Y | Y | Weak |
| LGPL-2.1-or-later | GNU Lesser General Public License v2.1 or later | Y | Y | Weak |
| LGPL-3.0-only | GNU Lesser General Public License v3.0 only | Y | Y | Weak |
| LGPL-3.0-or-later | GNU Lesser General Public License v3.0 or later | Y | Y | Weak |
| AGPL-3.0-only | GNU Affero General Public License v3.0 only | Y | Y | Strong (network) |
| AGPL-3.0-or-later | GNU Affero General Public License v3.0 or later | Y | Y | Strong (network) |
| MPL-2.0 | Mozilla Public License 2.0 | Y | Y | Weak (file-level) |
| EPL-2.0 | Eclipse Public License 2.0 | Y | Y | Weak |
| CDDL-1.0 | Common Development and Distribution License 1.0 | Y | Y | Weak (file-level) |
| Artistic-2.0 | Artistic License 2.0 | Y | Y | Weak |
| BSL-1.0 | Boost Software License 1.0 | Y | Y | None |
| Unlicense | The Unlicense | Y | Y | Public domain |
| CC0-1.0 | Creative Commons Zero v1.0 Universal | N | Y | Public domain |
| CC-BY-4.0 | Creative Commons Attribution 4.0 International | N | Y | None (attribution) |
| CC-BY-SA-4.0 | Creative Commons Attribution ShareAlike 4.0 | N | Y | Strong |
| CC-BY-NC-4.0 | Creative Commons Attribution NonCommercial 4.0 | N | N | None (non-free) |
| WTFPL | Do What The F*ck You Want To Public License | N | Y | Public domain |
| Zlib | zlib License | Y | Y | None |
| PostgreSQL | PostgreSQL License | Y | Y | None |
| BlueOak-1.0.0 | Blue Oak Model License 1.0.0 | Y | N | None |
| EUPL-1.2 | European Union Public License 1.2 | Y | Y | Strong |
| SSPL-1.0 | Server Side Public License v1 | N | N | Strong (network) |
| Elastic-2.0 | Elastic License 2.0 | N | N | Source-available |
| BUSL-1.1 | Business Source License 1.1 | N | N | Source-available |

---

## Key Distinctions

### GPL-2.0-only vs GPL-2.0-or-later
- **GPL-2.0-only**: Code may only be distributed under GPL v2.0. Cannot be relicensed under GPL v3.0.
- **GPL-2.0-or-later**: Code may be distributed under GPL v2.0 or any later version published by the FSF. Gives downstream recipients the option to apply GPL v3.0 terms.
- Historically, many projects used the phrase "or (at your option) any later version" — this maps to `-or-later`. Omitting that phrase maps to `-only`.
- Linux kernel is GPL-2.0-only (Linus explicitly chose v2 only).

### AGPL-3.0 — Network Clause
- Identical to GPL-3.0 with one addition: **Section 13 (Remote Network Interaction)**.
- If you modify AGPL code and run it on a server where users interact with it over a network, you must offer the source code to those users.
- This closes the "SaaS loophole" where GPL code can be modified and used server-side without distributing source.
- Implication: Any AGPL dependency in a SaaS product means the entire linked/combined work's source must be made available to network users.

### LGPL — Linking Exception
- LGPL allows proprietary software to **link** to an LGPL library without the proprietary code becoming LGPL.
- The LGPL library itself (and modifications to it) must remain LGPL.
- Users must be able to replace the LGPL library with a modified version (practical requirement: dynamic linking or providing object files).
- LGPL-3.0 explicitly references GPL-3.0 and adds permissions as an exception. LGPL-2.1 is a standalone license text.

### MPL-2.0 — File-Level Copyleft
- Copyleft applies at the **file level**, not the entire program.
- You can combine MPL-2.0 files with proprietary files in the same project.
- Modifications to MPL-2.0 files must remain under MPL-2.0.
- MPL-2.0 includes an explicit GPL/LGPL/AGPL compatibility provision (Section 3.3).

### Source-Available vs Open Source
- **SSPL-1.0** (MongoDB): Requires anyone offering the software as a service to release the entire service stack source. Not OSI-approved.
- **BUSL-1.1** (MariaDB, HashiCorp, Sentry): Restricts production use; converts to an OSS license after a change date (typically 3-4 years).
- **Elastic-2.0** (Elastic): Permits most use but prohibits offering as a managed service. Not OSI-approved.
- None of these are "open source" by OSI definition.

---

## Compatibility Matrix

Which licenses can coexist as dependencies in a single distributed project:

### Permissive Licenses (MIT, Apache-2.0, BSD-2/3-Clause, ISC, BSL-1.0, Unlicense, CC0-1.0)
- All mutually compatible with each other.
- All compatible with any copyleft license (can be included in GPL/LGPL/AGPL/MPL projects).
- Combined work may be distributed under the copyleft license terms.

### Apache-2.0 + GPL Compatibility
- **Apache-2.0 + GPL-3.0**: Compatible. Apache-2.0 code can be included in GPL-3.0 projects.
- **Apache-2.0 + GPL-2.0-only**: **Incompatible.** The patent termination clause in Apache-2.0 adds a restriction not present in GPL-2.0. FSF considers these incompatible.
- **Apache-2.0 + GPL-2.0-or-later**: Compatible (recipient can choose GPL-3.0).

### GPL Family Compatibility
| Dependency License | Project License: GPL-2.0-only | Project License: GPL-3.0-only | Project License: AGPL-3.0-only |
|-------------------|:----:|:----:|:-----:|
| MIT / BSD / ISC | OK | OK | OK |
| Apache-2.0 | NO | OK | OK |
| GPL-2.0-only | OK | NO | NO |
| GPL-2.0-or-later | OK | OK | OK |
| GPL-3.0-only | NO | OK | OK |
| GPL-3.0-or-later | NO | OK | OK |
| LGPL-2.1-only | OK | NO | NO |
| LGPL-2.1-or-later | OK | OK | OK |
| LGPL-3.0-only | NO | OK | OK |
| AGPL-3.0-only | NO | NO | OK |
| MPL-2.0 | OK* | OK | OK |

*MPL-2.0 Section 3.3 allows distribution under GPL-2.0+.

### Weak Copyleft (LGPL, MPL-2.0, EPL-2.0)
- LGPL: Proprietary code can link to LGPL libraries. LGPL modifications stay LGPL.
- MPL-2.0: Proprietary code can coexist at file level. Modified MPL files stay MPL.
- EPL-2.0: Similar to MPL but module-level copyleft. Includes optional GPL-2.0 secondary license designation.
- **MPL-2.0 + GPL**: Compatible via Section 3.3.
- **EPL-2.0 + GPL**: Compatible only if the EPL code designates GPL-2.0-or-later as a secondary license.
- **CDDL-1.0 + GPL**: **Incompatible.** (This is why ZFS on Linux was contentious.)

### Creative Commons
- CC licenses are designed for content (docs, images, data), not software.
- CC0-1.0: Compatible with everything (public domain dedication).
- CC-BY-4.0: Compatible with most licenses for non-code assets.
- CC-BY-SA-4.0: ShareAlike creates copyleft-like obligations for derivative content.
- CC-BY-NC-*: Non-free; incompatible with any OSI-approved license expectations.

---

## SPDX Expression Syntax

For declaring license combinations in package metadata:

| Operator | Meaning | Example |
|----------|---------|---------|
| `AND` | Both licenses apply (conjunctive) | `Apache-2.0 AND MIT` |
| `OR` | Either license may be chosen (disjunctive) | `GPL-2.0-only OR MIT` |
| `WITH` | License with exception | `Apache-2.0 WITH LLVM-exception` |
| `+` | Deprecated; use `-or-later` suffix instead | `GPL-2.0+` is now `GPL-2.0-or-later` |

### Common Exceptions (WITH clause)

| SPDX Exception ID | Used With | Effect |
|-------------------|-----------|--------|
| Classpath-exception-2.0 | GPL-2.0-only | Allows linking from non-GPL code (used by OpenJDK) |
| LLVM-exception | Apache-2.0 | Runtime library exception for LLVM |
| GCC-exception-3.1 | GPL-3.0-only | Allows GCC runtime library use without GPL obligations |
| Bison-exception-2.2 | GPL-3.0-only | Output of Bison parser generator is not GPL-covered |
| Font-exception-2.0 | GPL-2.0-only | Font embedding does not trigger GPL |
| Linux-syscall-note | GPL-2.0-only | Linux kernel UAPI headers can be used by non-GPL programs |

---

## Practical Decision Guide

| Scenario | Recommended License |
|----------|-------------------|
| Maximum adoption, no restrictions | MIT or Apache-2.0 |
| Want patent protection | Apache-2.0 |
| Ensure modifications stay open | GPL-3.0-or-later |
| Library that proprietary code can use | LGPL-3.0-or-later or MPL-2.0 |
| Prevent SaaS free-riding | AGPL-3.0-or-later |
| Public domain equivalent | Unlicense or CC0-1.0 |
| Documentation / content | CC-BY-4.0 |
| Delayed open source (commercial) | BUSL-1.1 (not OSI-approved) |
