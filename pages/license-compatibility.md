# License Compatibility

> License compatibility determines whether code under different licenses can coexist in a single distributed project, with GPL compatibility being the most complex and consequential area of open-source licensing.

## Key Points
- All permissive licenses (MIT, Apache-2.0, BSD, ISC) are mutually compatible and compatible with all copyleft licenses
- Apache-2.0 is compatible with GPL-3.0 but incompatible with GPL-2.0-only due to the patent termination clause
- GPL-2.0-only and GPL-3.0-only are mutually incompatible; they cannot be combined in a single work
- MPL-2.0 includes an explicit GPL/LGPL/AGPL compatibility provision (Section 3.3)
- CDDL-1.0 and GPL are incompatible (the ZFS on Linux controversy)
- EPL-2.0 is GPL-compatible only if the code designates GPL-2.0-or-later as a secondary license
- EUPL-1.2 has broad compatibility provisions, explicitly listing compatible licenses
- Dual licensing (offering code under two licenses) is a common strategy to resolve compatibility issues

## Detail

### Permissive License Compatibility

Permissive licenses -- MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC, BSL-1.0, Unlicense, CC0-1.0, 0BSD, Zlib, PostgreSQL -- are:

- **Mutually compatible** with each other: code under any permissive license can be combined with code under any other permissive license
- **Compatible with all copyleft licenses:** permissive code can be included in GPL, LGPL, AGPL, and MPL projects
- When combined, the resulting work may be distributed under the copyleft license's terms (the copyleft license "absorbs" the permissive code)

### Apache-2.0 and GPL: The Patent Clause Problem

Apache-2.0 includes a patent termination clause: if a licensee initiates patent litigation alleging infringement by the licensed work, their patent license terminates. This creates a compatibility split:

| Combination | Compatible? | Reason |
|-------------|-------------|--------|
| Apache-2.0 + GPL-3.0-only | Yes | GPL-3.0 has its own patent provisions that accommodate Apache-2.0's clause |
| Apache-2.0 + GPL-3.0-or-later | Yes | Same as above |
| Apache-2.0 + GPL-2.0-only | **No** | The patent termination clause adds a restriction not present in GPL-2.0, violating GPL-2.0's "no additional restrictions" rule |
| Apache-2.0 + GPL-2.0-or-later | Yes | Recipient can choose GPL-3.0, making it compatible |

This is one of the most frequently encountered compatibility issues in practice.

### GPL Family Compatibility Matrix

| Dependency License | GPL-2.0-only project | GPL-3.0-only project | AGPL-3.0-only project |
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

*MPL-2.0 Section 3.3 allows distribution under GPL-2.0 or later.

Key observations:
- GPL-2.0-only is the most restrictive for compatibility -- it cannot incorporate GPL-3.0, LGPL-3.0, or AGPL code
- The `-or-later` suffix dramatically improves compatibility by allowing version upgrade
- AGPL-3.0 code can only be combined into an AGPL-3.0 project (it cannot go into GPL-only projects)
- GPL-3.0 and AGPL-3.0 are cross-compatible: GPL-3.0 code can go into AGPL projects and vice versa (the combined work is AGPL)

### Weak Copyleft Compatibility

**LGPL (2.1 and 3.0):**
- Proprietary code may link to LGPL libraries without the proprietary code becoming LGPL
- Modifications to the LGPL library itself must remain LGPL
- LGPL-3.0 explicitly references GPL-3.0 and adds additional permissions as an exception
- LGPL-2.1 is a standalone license text and is compatible with GPL-2.0

**MPL-2.0:**
- File-level copyleft: modifications to MPL files must remain MPL, but other files in the project may be under any license
- Section 3.3 provides explicit compatibility with GPL-2.0-or-later, LGPL-2.1-or-later, and AGPL-3.0-or-later
- Proprietary and MPL files can coexist in the same project without conflict

**EPL-2.0:**
- Module-level copyleft, similar to MPL but at a coarser granularity
- GPL-compatible only if the EPL code includes a "Secondary License" designation specifying GPL-2.0-or-later
- Without the secondary license designation, EPL-2.0 and GPL are incompatible

**CDDL-1.0:**
- File-level copyleft, similar to MPL
- **Incompatible with GPL.** The CDDL's choice-of-law provision and other terms conflict with GPL requirements
- This incompatibility was the source of the long-running ZFS on Linux debate (ZFS is CDDL; Linux kernel is GPL-2.0-only)

### EUPL-1.2 Compatibility

The European Union Public License 1.2 is a strong copyleft license with an unusually broad compatibility clause. Its Appendix lists "compatible licenses" that derivative works may be distributed under, including:

- GPL-2.0-or-later, GPL-3.0-or-later
- AGPL-3.0-or-later
- LGPL-2.1-or-later, LGPL-3.0-or-later
- MPL-2.0
- EPL-1.0
- CeCILL-2.0, CeCILL-2.1

This makes EUPL-1.2 one of the most interoperable copyleft licenses.

### Dual Licensing

Dual licensing is a strategy where code is offered under two (or more) licenses, allowing the user to choose. Common patterns:

- **MIT OR Apache-2.0:** Used by the Rust ecosystem; user chooses whichever suits their project
- **GPL-2.0-only OR commercial:** Open-source use under GPL, proprietary use under a paid commercial license (e.g., MySQL, Qt)
- **AGPL-3.0-only OR commercial:** SaaS companies that want to offer an open-source version while monetizing proprietary use

SPDX expresses dual licensing with the `OR` operator: `GPL-2.0-only OR MIT`.

### Creative Commons and Software

Creative Commons licenses are designed for content (documentation, images, data), not software:

- **CC0-1.0:** Public domain dedication; compatible with everything
- **CC-BY-4.0:** Attribution required; compatible with most licenses for non-code assets
- **CC-BY-SA-4.0:** ShareAlike creates copyleft-like obligations for derivative content
- **CC-BY-NC-4.0:** Non-commercial restriction makes it non-free and incompatible with OSI-approved license expectations

## Product Relevance
- **license-mcp** uses the compatibility matrix to detect license conflicts in dependency trees. When a project's license is known, license-mcp checks each dependency's license against the compatibility rules, flagging incompatible combinations (e.g., Apache-2.0 dependency in a GPL-2.0-only project, or CDDL dependency in any GPL project). It also handles dual-licensed dependencies by evaluating compatibility for each license option.

## Cross-References
- [[license-overview]]
- [[license-copyleft]]
- [[license-risk-classification]]
- [[license-spdx-identifiers]]

## Sources
- raw/standards/spdx-license-reference.md
