# SPDX License Identifiers

> The Software Package Data Exchange (SPDX) standard provides canonical short identifiers for software licenses, enabling unambiguous license declaration in package metadata, SBOMs, and compliance tooling.

## Key Points
- SPDX is maintained by the Linux Foundation; the SPDX License List catalogs 500+ licenses with unique identifiers
- The `-only` suffix means the specific version only; `-or-later` allows the licensee to choose any later version
- The `WITH` operator attaches exceptions that modify a license's terms (e.g., `GPL-2.0-only WITH Classpath-exception-2.0`)
- The `AND` operator means both licenses apply simultaneously; `OR` means either may be chosen
- The deprecated `+` suffix (e.g., `GPL-2.0+`) is replaced by the `-or-later` naming convention
- OSI-approved and FSF-free designations are tracked per license in the SPDX list
- SPDX expressions are used in package.json, Cargo.toml, pom.xml, and other package manifests

## Detail

### Key SPDX Identifiers

#### Permissive Licenses

| SPDX Identifier | Full Name | OSI | FSF |
|-----------------|-----------|:---:|:---:|
| MIT | MIT License | Y | Y |
| Apache-2.0 | Apache License 2.0 | Y | Y |
| BSD-2-Clause | BSD 2-Clause "Simplified" License | Y | Y |
| BSD-3-Clause | BSD 3-Clause "New" or "Revised" License | Y | Y |
| ISC | ISC License | Y | Y |
| 0BSD | BSD Zero Clause License | Y | Y |
| BSL-1.0 | Boost Software License 1.0 | Y | Y |
| Zlib | zlib License | Y | Y |
| PostgreSQL | PostgreSQL License | Y | Y |
| BlueOak-1.0.0 | Blue Oak Model License 1.0.0 | Y | N |

#### Copyleft Licenses

| SPDX Identifier | Full Name | Copyleft Type |
|-----------------|-----------|---------------|
| GPL-2.0-only | GNU General Public License v2.0 only | Strong |
| GPL-2.0-or-later | GNU General Public License v2.0 or later | Strong |
| GPL-3.0-only | GNU General Public License v3.0 only | Strong |
| GPL-3.0-or-later | GNU General Public License v3.0 or later | Strong |
| AGPL-3.0-only | GNU Affero General Public License v3.0 only | Strong (network) |
| AGPL-3.0-or-later | GNU Affero General Public License v3.0 or later | Strong (network) |
| EUPL-1.2 | European Union Public License 1.2 | Strong |

#### Weak Copyleft Licenses

| SPDX Identifier | Full Name | Copyleft Scope |
|-----------------|-----------|----------------|
| LGPL-2.1-only | GNU Lesser General Public License v2.1 only | Library level |
| LGPL-2.1-or-later | GNU Lesser General Public License v2.1 or later | Library level |
| LGPL-3.0-only | GNU Lesser General Public License v3.0 only | Library level |
| LGPL-3.0-or-later | GNU Lesser General Public License v3.0 or later | Library level |
| MPL-2.0 | Mozilla Public License 2.0 | File level |
| EPL-2.0 | Eclipse Public License 2.0 | Module level |
| CDDL-1.0 | Common Development and Distribution License 1.0 | File level |
| Artistic-2.0 | Artistic License 2.0 | Weak |

#### Public Domain Equivalents

| SPDX Identifier | Full Name | OSI | FSF |
|-----------------|-----------|:---:|:---:|
| Unlicense | The Unlicense | Y | Y |
| CC0-1.0 | Creative Commons Zero v1.0 Universal | N | Y |
| WTFPL | Do What The F*ck You Want To Public License | N | Y |

#### Source-Available (Non-OSI)

| SPDX Identifier | Full Name | Notes |
|-----------------|-----------|-------|
| SSPL-1.0 | Server Side Public License v1 | MongoDB; requires service stack disclosure |
| BUSL-1.1 | Business Source License 1.1 | Time-delayed OSS conversion |
| Elastic-2.0 | Elastic License 2.0 | Prohibits managed service offering |

#### Content Licenses

| SPDX Identifier | Full Name | OSI | FSF |
|-----------------|-----------|:---:|:---:|
| CC-BY-4.0 | Creative Commons Attribution 4.0 International | N | Y |
| CC-BY-SA-4.0 | Creative Commons Attribution ShareAlike 4.0 | N | Y |
| CC-BY-NC-4.0 | Creative Commons Attribution NonCommercial 4.0 | N | N |

### The `-only` vs `-or-later` Convention

The version suffix is critical for determining compatibility and downstream rights:

- **`-only`**: The code is licensed exclusively under the specified version. Example: `GPL-2.0-only` means GPL v2.0 and nothing else.
- **`-or-later`**: The code is licensed under the specified version or any later version published by the FSF. Example: `GPL-2.0-or-later` means the recipient may choose GPL v2.0, GPL v3.0, or any future version.

**Historical mapping:**
- The phrase "or (at your option) any later version" in license headers maps to `-or-later`
- Absence of that phrase maps to `-only`
- The deprecated `GPL-2.0+` notation is equivalent to `GPL-2.0-or-later`

**Practical impact:** `GPL-2.0-or-later` dependencies are far more compatible than `GPL-2.0-only` because recipients can choose GPL-3.0, enabling combination with Apache-2.0 and other GPL-3.0-compatible code.

### SPDX Expression Syntax

SPDX defines operators for expressing complex license situations:

| Operator | Meaning | Example |
|----------|---------|---------|
| `AND` | Both licenses apply simultaneously (conjunctive) | `Apache-2.0 AND MIT` |
| `OR` | Either license may be chosen by the recipient (disjunctive) | `GPL-2.0-only OR MIT` |
| `WITH` | License with an exception modifying its terms | `Apache-2.0 WITH LLVM-exception` |

**Operator precedence:** `WITH` binds tightest, then `AND`, then `OR`. Parentheses may be used for clarity: `(MIT OR Apache-2.0) AND BSD-3-Clause`.

**Deprecated syntax:** The `+` suffix (e.g., `GPL-2.0+`) is deprecated in favor of the `-or-later` naming. Tooling should normalize `GPL-2.0+` to `GPL-2.0-or-later`.

### Common Exceptions (WITH Clause)

Exceptions modify a license's terms, typically to relax specific obligations:

| SPDX Exception ID | Used With | Effect |
|-------------------|-----------|--------|
| Classpath-exception-2.0 | GPL-2.0-only | Allows non-GPL code to link to the licensed library (used by OpenJDK) |
| LLVM-exception | Apache-2.0 | Runtime library exception for the LLVM project |
| GCC-exception-3.1 | GPL-3.0-only | Allows use of GCC runtime libraries without triggering GPL obligations |
| Bison-exception-2.2 | GPL-3.0-only | Output generated by the Bison parser generator is not GPL-covered |
| Font-exception-2.0 | GPL-2.0-only | Embedding GPL-licensed fonts in documents does not trigger GPL |
| Linux-syscall-note | GPL-2.0-only | Linux kernel UAPI headers may be used by non-GPL userspace programs |

**Example:** OpenJDK's runtime is `GPL-2.0-only WITH Classpath-exception-2.0`, meaning Java applications linking to the runtime do not need to be GPL-licensed.

### Usage in Package Manifests

SPDX identifiers are used across ecosystems:

- **npm (package.json):** `"license": "MIT"` or `"license": "(MIT OR Apache-2.0)"`
- **Rust (Cargo.toml):** `license = "MIT OR Apache-2.0"`
- **Java (pom.xml):** Referenced in `<licenses>` block
- **Python (pyproject.toml):** `license = {text = "MIT"}`
- **Go (go.mod):** License typically declared in LICENSE file; SPDX used in SBOM generation

## Product Relevance
- **license-mcp** parses SPDX identifiers from package manifests to resolve license types. It handles expression syntax (`AND`, `OR`, `WITH`), normalizes deprecated notation (`GPL-2.0+` to `GPL-2.0-or-later`), and respects the `-only` vs `-or-later` distinction when evaluating compatibility and risk. Exception identifiers (WITH clause) are factored into risk assessment -- for example, `GPL-2.0-only WITH Classpath-exception-2.0` is classified as lower risk than plain `GPL-2.0-only`.

## Cross-References
- [[license-overview]]
- [[license-copyleft]]
- [[license-compatibility]]
- [[license-risk-classification]]

## Sources
- raw/standards/spdx-license-reference.md
