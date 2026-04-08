# Gridwork Compliance Wiki — Agent Schema

A Karpathy-style LLM knowledge base for compliance domains. The wiki is the shared knowledge substrate for all Gridwork MCP products. LLMs compile and maintain it — humans browse it.

## Structure

```
wiki/
├── CLAUDE.md          ← You are here. Agent instructions.
├── index.md           ← Auto-maintained table of contents
├── log.md             ← Append-only operation log
├── overview.md        ← Evolving cross-domain synthesis
├── pages/             ← Flat directory of wiki articles (slug-named)
│   ├── gdpr-*.md
│   ├── ai-act-*.md
│   ├── ccpa-*.md
│   ├── license-*.md
│   ├── wcag-*.md
│   └── eaa-*.md
├── raw/               ← Immutable source documents (never modify)
│   ├── regulations/   ← Official regulation texts
│   ├── enforcement/   ← Decisions, fines, rulings
│   ├── updates/       ← Amendments, news, guidance
│   └── standards/     ← ISO, NIST, SPDX, WCAG specs
└── assets/            ← Images, PDFs, attachments
```

## Domains

This wiki covers the compliance domains Gridwork products operate in:

| Domain | Products | Priority |
|--------|----------|----------|
| **GDPR** (+ ePrivacy, EDPB guidelines) | privacy-mcp | High |
| **EU AI Act** (+ implementing acts, GPAI) | aiact-mcp | High |
| **CCPA/CPRA** (+ US state privacy laws) | privacy-mcp | Medium |
| **Software Licensing** (OSS, copyleft, SPDX) | license-mcp | Medium |
| **WCAG / Accessibility** (+ Section 508, EAA, EN 301 549) | siteaudit-mcp | Medium |
| **Web Standards** (SEO, performance, mobile) | siteaudit-mcp | Low |

## Page Conventions

### File naming
- Slug format: `{domain}-{topic}.md` (e.g., `gdpr-legal-bases.md`, `ai-act-annex-iii.md`)
- Use lowercase, hyphens only
- One concept per page — split if a page exceeds ~3000 words

### Page structure
Every wiki page must have this format:

```markdown
# {Title}

> {One-sentence summary of what this page covers}

## Key Points
- Bullet summary of the most important facts

## Detail
{Encyclopedia-style content. Factual, precise, cite article numbers.}

## Product Relevance
Which Gridwork products use this knowledge and how.

## Cross-References
- [[related-page-slug]]
- [[another-page-slug]]

## Sources
- Links to raw/ documents or external authoritative URLs
```

### Writing style
- Encyclopedia tone — factual, not advisory
- Always cite specific article/section numbers
- Include effective dates and deadlines where applicable
- Note enforcement status (enacted, transitional, proposed)
- Prefer precision over completeness — a correct partial page beats an inaccurate complete one

## Operations

### 1. INGEST — Add new knowledge

**Trigger:** New document dropped in `raw/`, or agent directed to ingest a topic.

**Process:**
1. Read the source material in `raw/` or from the directive
2. Identify distinct concepts worth their own pages
3. For each concept:
   - Check if a page already exists → update it with new information
   - If no page exists → create a new page following conventions
4. Update cross-references (`[[backlinks]]`) on all affected pages
5. Update `index.md` with any new pages
6. Append to `log.md`: `[{date}] INGEST: {source} → {pages created/updated}`

**Rules:**
- Never modify files in `raw/` — they are immutable sources
- Merge new info into existing pages rather than creating near-duplicates
- If sources conflict, note the conflict explicitly on the page

### 2. QUERY — Answer questions from wiki knowledge

**Trigger:** Agent or user asks a compliance question.

**Process:**
1. Read `index.md` to identify relevant pages
2. Read the relevant pages
3. Synthesize an answer with citations to specific pages
4. If the answer reveals a gap → note it in the response and optionally create a stub page

**Rules:**
- Always cite which wiki pages informed the answer
- Distinguish between "the wiki says X" and "this isn't covered yet"
- If a good answer emerges, consider filing it back as a new page

### 3. LINT — Health check the wiki

**Trigger:** Scheduled (weekly) or manually requested.

**Process:**
1. Read `index.md` and verify all listed pages exist
2. Scan for:
   - **Orphan pages** — exist in `pages/` but not in `index.md`
   - **Dead links** — `[[references]]` to pages that don't exist
   - **Stale content** — pages referencing deadlines that have passed
   - **Contradictions** — conflicting claims across pages
   - **Gaps** — domains with few or no pages relative to product needs
3. Generate a lint report
4. Append to `log.md`: `[{date}] LINT: {summary of findings}`

### 4. PUBLISH — Generate SEO content from wiki pages

**Trigger:** Manually requested or scheduled.

**Process:**
1. Select wiki pages with high product relevance
2. Rewrite for a web audience (add context, soften encyclopedia tone)
3. Output as HTML-ready content for thegridwork.space guide pages
4. Track which wiki pages have been published in `log.md`

**Rules:**
- Published content is a derivative — the wiki page is the source of truth
- Always include "Last updated" date from the wiki page
- Link back to related Gridwork products

## Integration with Gridwork Products

The wiki's primary value is feeding knowledge into the autonomous agents and MCP products:

### Growth Engine (every 6h)
Before upgrading any scanner, the Growth Engine should:
1. Check relevant wiki pages for recent regulatory changes
2. Verify hardcoded detection rules match current wiki knowledge
3. Use wiki content to expand detection patterns

### SEO Seeder (daily)
Can pull from wiki pages to generate contextual content for report pages.

### Product Scanners
Wiki pages document what each scanner should detect. When a wiki page is updated with new enforcement decisions or regulatory changes, it signals that scanner detection rules may need updating.

## Bootstrap

When first setting up this wiki, run an initial ingest across all four compliance domains to establish the base knowledge. Target: ~40-60 pages covering the core articles, risk frameworks, and compliance requirements that the products already reference.
