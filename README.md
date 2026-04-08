# gridwork-wiki

Compliance knowledge base MCP server — query GDPR, EU AI Act, CCPA/CPRA, software licensing, and web accessibility regulations.

33 compiled articles covering 5 compliance domains, ~39,000 words of structured regulatory knowledge.

## Install

```bash
npx gridwork-wiki
```

### Claude Desktop

```json
{
  "mcpServers": {
    "gridwork-wiki": {
      "command": "npx",
      "args": ["-y", "gridwork-wiki"]
    }
  }
}
```

## Tools

| Tool | Description |
|------|-------------|
| `query_regulation` | Ask a compliance question, get relevant articles with key points |
| `search_wiki` | Keyword search with domain filtering and relevance scoring |
| `get_article` | Read full article content by slug |
| `list_articles` | Browse all articles by domain |
| `check_compliance` | Describe your system, get applicable regulations |
| `wiki_stats` | Knowledge base statistics |

## Domains

| Domain | Articles | Covers |
|--------|----------|--------|
| GDPR | 10 | Data protection, consent, transfers, enforcement, cookies |
| EU AI Act | 8 | Risk classification, prohibited practices, GPAI, compliance |
| CCPA/CPRA | 4 | Consumer rights, sensitive data, business obligations |
| US Privacy | 2 | State privacy law landscape and comparison |
| Software Licensing | 5 | Copyleft, compatibility, risk classification, SPDX |
| Web Accessibility | 4 | WCAG 2.1, common violations, EAA |

## Examples

**Ask a compliance question:**
> "What consent is needed for cookies under GDPR?"

**Check your system:**
> "SaaS app using OpenAI API processing EU user data"

**Search for specific topics:**
> Search "AGPL network use" in Software Licensing domain

## Part of Gridwork

A suite of compliance tools for the autonomous web.

- [gridwork-siteaudit](https://www.npmjs.com/package/gridwork-siteaudit) — Website audits
- [gridwork-aiact](https://www.npmjs.com/package/gridwork-aiact) — EU AI Act scanner
- [gridwork-privacy](https://www.npmjs.com/package/gridwork-privacy) — Privacy scanner
- [gridwork-license](https://www.npmjs.com/package/gridwork-license) — License compliance

## License

MIT
