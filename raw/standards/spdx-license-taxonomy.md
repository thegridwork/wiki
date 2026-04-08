# SPDX License List — Taxonomy for Software License Compliance
## Source: https://spdx.org/licenses/ (SPDX Specification v2.3+)

### License Categories by Copyleft Strength

#### Strong Copyleft (Viral)
Derivative works must use the same license. Source code must be provided.

| SPDX ID | Name | Key Obligation |
|---------|------|----------------|
| GPL-2.0-only | GNU General Public License v2 | Distribute source of derivative works under GPL-2.0 |
| GPL-2.0-or-later | GNU GPL v2 or later | Same, with option to use later GPL versions |
| GPL-3.0-only | GNU General Public License v3 | GPL-2.0 + anti-tivoization + patent grant + no additional restrictions |
| GPL-3.0-or-later | GNU GPL v3 or later | Same, with option to use later GPL versions |
| AGPL-3.0-only | GNU Affero GPL v3 | GPL-3.0 + network use = distribution (SaaS trigger) |
| AGPL-3.0-or-later | GNU Affero GPL v3+ | Same with later version option |
| SSPL-1.0 | Server Side Public License v1 | AGPL-like + must open-source entire service stack (not OSI-approved) |
| EUPL-1.2 | European Union Public License v1.2 | Copyleft + broad compatibility list (compatible with GPL, LGPL, AGPL, MPL, etc.) |
| OSL-3.0 | Open Software License v3 | Copyleft + patent grant + network use trigger |
| CPAL-1.0 | Common Public Attribution License | Copyleft + attribution in UI required |

#### Weak Copyleft
Copyleft applies to modified files/library only, not to the larger work that links against it.

| SPDX ID | Name | Key Obligation |
|---------|------|----------------|
| LGPL-2.1-only | GNU Lesser GPL v2.1 | Library modifications must be LGPL; linking permitted without copyleft |
| LGPL-2.1-or-later | GNU Lesser GPL v2.1+ | Same with later version option |
| LGPL-3.0-only | GNU Lesser GPL v3 | LGPL-2.1 + GPL-3.0 terms for modifications |
| LGPL-3.0-or-later | GNU Lesser GPL v3+ | Same with later version option |
| MPL-2.0 | Mozilla Public License v2 | File-level copyleft; modified files must be MPL; new files can be any license |
| EPL-1.0 | Eclipse Public License v1 | Module-level copyleft; patent grant; choice of law (NY) |
| EPL-2.0 | Eclipse Public License v2 | EPL-1.0 updated; secondary license option (GPL-2.0) |
| CDDL-1.0 | Common Development and Distribution License | File-level copyleft; incompatible with GPL |
| CECILL-2.1 | CeCILL Free Software License v2.1 | French law copyleft; GPL-compatible |

#### Permissive
Minimal restrictions. Usually: retain copyright notice and license text.

| SPDX ID | Name | Key Obligation |
|---------|------|----------------|
| MIT | MIT License | Include copyright + license text |
| ISC | ISC License | Simplified MIT-equivalent |
| BSD-2-Clause | BSD 2-Clause "Simplified" | Include copyright in source and binary |
| BSD-3-Clause | BSD 3-Clause "New" | BSD-2-Clause + no endorsement clause |
| Apache-2.0 | Apache License v2 | Include copyright + license + NOTICE file + patent grant |
| Artistic-2.0 | Artistic License v2 | Modified versions must be clearly marked |
| Zlib | zlib License | Don't misrepresent origin; mark modifications |
| PostgreSQL | PostgreSQL License | Include copyright |
| NCSA | University of Illinois/NCSA License | Include copyright |
| BSL-1.0 | Boost Software License v1 | Include license in source; not required in binary |
| Ruby | Ruby License | Include copyright |

#### Public Domain / No Restrictions
| SPDX ID | Name | Notes |
|---------|------|-------|
| Unlicense | The Unlicense | Explicit public domain dedication + fallback license |
| CC0-1.0 | CC0 1.0 Universal | Public domain dedication (Creative Commons) |
| WTFPL | Do What The F*ck You Want To PL | Effectively public domain (not recommended for serious use) |
| 0BSD | BSD Zero Clause License | No requirements at all |

#### Source-Available / Proprietary-Adjacent
| SPDX ID | Name | Notes |
|---------|------|-------|
| BUSL-1.1 | Business Source License v1.1 | Proprietary for N years, then converts to open source (change license + change date) |
| Elastic-2.0 | Elastic License v2 | Permissive-ish but prohibits managed service offering |
| — | Commons Clause | Addendum to any license; prohibits "selling" the software |
| — | PolyForm Noncommercial | Permits non-commercial use only |
| — | PolyForm Shield | Permits use but not competition |

### Compatibility Matrix (Key Relationships)

```
                    Can be combined with →
                MIT   Apache  LGPL  MPL   GPL-2  GPL-3  AGPL-3
MIT              ✓     ✓       ✓     ✓     ✓      ✓      ✓
Apache-2.0       ✓     ✓       ✓     ✓     ✗*     ✓      ✓
LGPL-2.1         ✓     ✓       ✓     ✓     ✓      ✗†     ✗†
LGPL-3.0         ✓     ✓       ✓     ✓     ✗      ✓      ✓
MPL-2.0          ✓     ✓       ✓     ✓     ✓      ✓      ✓
GPL-2.0-only     ✓     ✗*      ✓     ✓     ✓      ✗      ✗
GPL-3.0-only     ✓     ✓       ✗†    ✓     ✗      ✓      ✓
AGPL-3.0-only    ✓     ✓       ✗†    ✓     ✗      ✓      ✓

* Apache-2.0 has patent retaliation clause incompatible with GPL-2.0
† LGPL-2.1 is not forward-compatible with GPL-3.0 (use "or later" clause)
```

### Common Detection Patterns (for MCP scanners)

**Package.json license field values:**
- `"MIT"`, `"ISC"`, `"BSD-3-Clause"` — permissive, low risk
- `"Apache-2.0"` — permissive with patent grant
- `"GPL-3.0"`, `"AGPL-3.0"` — copyleft, requires attention
- `"UNLICENSED"` — proprietary (no license granted)
- `"SEE LICENSE IN <filename>"` — custom, must read file

**License file patterns:**
- `LICENSE`, `LICENSE.md`, `LICENSE.txt`, `LICENCE`, `COPYING`
- `NOTICE` (Apache-2.0 projects)
- `AUTHORS`, `CONTRIBUTORS`
