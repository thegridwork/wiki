# Copyleft Licenses: GPL and AGPL

> The GNU General Public License (GPL) family -- GPL-2.0, GPL-3.0, and AGPL-3.0 -- are the foundational strong copyleft licenses, requiring derivative works to be distributed under the same terms and, in the case of AGPL, extending this obligation to network use.

## Key Points
- Copyleft's "viral" nature means any derivative or combined work must be distributed under the same GPL/AGPL terms
- GPL-2.0 and GPL-3.0 are not interchangeable: GPL-2.0-only code cannot be relicensed under GPL-3.0
- The `-only` vs `-or-later` suffix distinction is critical: `-or-later` allows downstream recipients to apply a later GPL version
- GPL-3.0 added explicit patent grants, anti-tivoization provisions, and improved compatibility mechanisms
- AGPL-3.0 is identical to GPL-3.0 except for Section 13 (Remote Network Interaction), which closes the SaaS loophole
- AGPL-3.0 in a SaaS context means the entire linked/combined work's source must be made available to network users
- The Linux kernel is famously GPL-2.0-only (Linus Torvalds explicitly chose v2 only)

## Detail

### GPL-2.0 -- GNU General Public License v2.0

**SPDX identifiers:** `GPL-2.0-only`, `GPL-2.0-or-later`

GPL-2.0, released in 1991, is the original widely-adopted copyleft license. Core obligations:

1. **Source code availability:** Anyone who distributes GPL-2.0 binaries must make the corresponding source code available
2. **Derivative works:** If you modify GPL-2.0 code and distribute the modified version, the entire modified work must be GPL-2.0
3. **No additional restrictions:** You may not impose restrictions beyond those in the GPL (e.g., no proprietary add-on terms)
4. **License notice:** Distributed copies must include the GPL-2.0 license text and copyright notices

**Limitations of GPL-2.0:**
- No explicit patent grant (implied, but not spelled out)
- No anti-tivoization clause (hardware manufacturers can lock down modified code)
- Patent termination clause absent, creating ambiguity
- Incompatible with Apache-2.0 due to the latter's patent termination clause adding a restriction not present in GPL-2.0

### GPL-3.0 -- GNU General Public License v3.0

**SPDX identifiers:** `GPL-3.0-only`, `GPL-3.0-or-later`

GPL-3.0, released in 2007, addressed the shortcomings of GPL-2.0:

1. **Explicit patent grant (Section 11):** Contributors grant an express, royalty-free patent license for their contributions
2. **Patent termination:** If a licensee initiates patent litigation alleging that the GPL-covered work infringes a patent, their license terminates
3. **Anti-tivoization (Section 6):** For consumer products, the distributor must provide installation information enabling the user to install modified versions
4. **Compatibility improvements:** Better mechanisms for combining GPL-3.0 code with code under other licenses, including explicit Apache-2.0 compatibility
5. **Internationalization:** Language broadened from US-centric "distribution" to the more universal "convey" and "propagate"
6. **DRM provisions (Section 3):** GPL-3.0-covered work cannot be considered an "effective technological measure" under anti-circumvention laws

### GPL-2.0 vs GPL-3.0 Key Differences

| Aspect | GPL-2.0 | GPL-3.0 |
|--------|---------|---------|
| Patent grant | Implicit | Explicit (Section 11) |
| Patent termination | None | Yes -- license terminates on patent litigation |
| Anti-tivoization | None | Yes (Section 6) -- installation info required for consumer products |
| Apache-2.0 compatible | No | Yes |
| DRM provisions | None | Cannot be treated as effective technological measure |
| Terminology | "Distribution" | "Convey" and "Propagate" (broader) |
| Compatibility mechanisms | Limited | Improved (additional permissions framework) |

### The `-only` vs `-or-later` Distinction

This distinction is one of the most consequential in GPL licensing:

- **`GPL-2.0-only`:** Code may only be distributed under GPL v2.0 terms. Cannot be relicensed under GPL v3.0 or any later version.
- **`GPL-2.0-or-later`:** Code may be distributed under GPL v2.0 or, at the recipient's option, any later version published by the FSF. This means a recipient can choose to apply GPL-3.0 terms.

Historically, many projects used the phrase "or (at your option) any later version" in their license headers -- this maps to `-or-later`. Omitting that phrase maps to `-only`. The distinction matters because:

- `GPL-2.0-only` code is **incompatible** with `GPL-3.0-only` code (they cannot be combined in a single work)
- `GPL-2.0-or-later` code **is compatible** with `GPL-3.0-only` code (the recipient can choose GPL-3.0)

### AGPL-3.0 -- GNU Affero General Public License v3.0

**SPDX identifiers:** `AGPL-3.0-only`, `AGPL-3.0-or-later`

AGPL-3.0 is identical to GPL-3.0 in all respects except for the addition of **Section 13: Remote Network Interaction**.

**Section 13 states:** If you modify AGPL-3.0-licensed code and run it on a server where users interact with it remotely over a computer network, you must offer those users access to the Corresponding Source of the modified version. This must be provided through a network server at no charge, via a standard or customary means of facilitating copying of software.

**Implications for SaaS:**
- Any AGPL-3.0 dependency in a SaaS product means the entire linked/combined work's source code must be made available to users who interact with the service over the network
- This closes the "SaaS loophole" present in GPL, where server-side use of modified GPL code does not trigger distribution (and therefore does not trigger source disclosure)
- Many companies (Google, Apple) prohibit AGPL dependencies in their codebases for this reason
- The obligation extends to modifications: if you modify AGPL code and deploy it server-side, source access must be offered even if you never distribute binaries

**AGPL-3.0 is compatible with GPL-3.0:** AGPL code can be included in GPL-3.0 projects (the combined work is AGPL), and GPL-3.0 code can be included in AGPL projects.

### Derivative Works and Combined Works

The scope of "derivative work" under copyleft is a recurring area of legal uncertainty:

- **Clearly derivative:** Modifying GPL source code and distributing the result
- **Clearly derivative:** Statically linking GPL code into a binary
- **Likely derivative:** Dynamically linking to a GPL library in a way that creates a single functional unit (FSF position, though debated)
- **Not derivative:** Aggregating independent programs on the same distribution medium (e.g., a Linux distribution including both GPL and proprietary software)
- **Gray area:** Using GPL code via inter-process communication, plugins, or APIs

## Product Relevance
- **license-mcp** uses copyleft detection as the core of its risk classification system. It identifies GPL-2.0, GPL-3.0, and AGPL-3.0 dependencies, flags the `-only` vs `-or-later` distinction (which affects compatibility), and raises critical alerts when copyleft licenses appear in proprietary project dependency trees. AGPL detection is treated with special severity in SaaS contexts due to the network use clause.

## Cross-References
- [[license-overview]]
- [[license-compatibility]]
- [[license-risk-classification]]
- [[license-spdx-identifiers]]

## Sources
- raw/standards/spdx-license-reference.md
