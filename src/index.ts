#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  searchWiki,
  getArticle,
  listArticles,
  queryRegulation,
  getBacklinks,
} from "./search.js";
import { WIKI_STATS, WIKI_DOMAINS } from "./wiki-data.js";

const server = new McpServer({
  name: "@gridwork/wiki",
  version: "1.0.0",
});

// ═══════════════════════════════════════════════════════════
// Tool: query_regulation
// ═══════════════════════════════════════════════════════════

server.tool(
  "query_regulation",
  "Ask a compliance question and get answers from the knowledge base. Searches across GDPR, EU AI Act, CCPA/CPRA, software licensing, and web accessibility articles. Returns relevant articles with key points and cross-references.",
  {
    question: z
      .string()
      .describe(
        "The compliance question to answer (e.g., 'What are the GDPR legal bases for processing?', 'When does the AI Act apply to my chatbot?', 'Is AGPL compatible with MIT?')"
      ),
  },
  async ({ question }) => {
    try {
      const result = queryRegulation(question);
      return { content: [{ type: "text", text: result }] };
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Query failed: ${msg}` }],
        isError: true,
      };
    }
  }
);

// ═══════════════════════════════════════════════════════════
// Tool: search_wiki
// ═══════════════════════════════════════════════════════════

server.tool(
  "search_wiki",
  "Search the compliance wiki for articles matching keywords. Returns ranked results with relevance scores and match context. Filter by domain for targeted searches.",
  {
    query: z.string().describe("Search keywords"),
    domain: z
      .enum(["GDPR", "EU AI Act", "CCPA/CPRA", "US Privacy", "Software Licensing", "Web Accessibility"])
      .optional()
      .describe("Filter results to a specific compliance domain"),
    limit: z
      .number()
      .min(1)
      .max(33)
      .default(10)
      .describe("Maximum number of results to return"),
  },
  async ({ query, domain, limit }) => {
    try {
      const results = searchWiki(query, { domain, limit });

      if (results.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No results for "${query}"${domain ? ` in ${domain}` : ""}. Available domains: ${WIKI_DOMAINS.join(", ")}`,
            },
          ],
        };
      }

      const output = results
        .map(
          (r, i) =>
            `${i + 1}. **${r.article.title}** (${r.article.domain})\n   Score: ${r.score} | Slug: ${r.article.slug}\n   > ${r.article.summary}\n   ${r.matchContext ? `Match: ...${r.matchContext}...` : ""}`
        )
        .join("\n\n");

      return {
        content: [
          {
            type: "text",
            text: `## Search Results for "${query}"\n\n${results.length} articles found.\n\n${output}`,
          },
        ],
      };
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Search failed: ${msg}` }],
        isError: true,
      };
    }
  }
);

// ═══════════════════════════════════════════════════════════
// Tool: get_article
// ═══════════════════════════════════════════════════════════

server.tool(
  "get_article",
  "Read the full content of a specific wiki article by its slug. Use search_wiki first to find relevant slugs, then get_article to read the full content.",
  {
    slug: z
      .string()
      .describe(
        "Article slug (e.g., 'gdpr-legal-bases', 'ai-act-risk-classification', 'license-copyleft')"
      ),
  },
  async ({ slug }) => {
    try {
      const article = getArticle(slug);
      if (!article) {
        const suggestions = searchWiki(slug.replace(/-/g, " "), { limit: 3 });
        const hint =
          suggestions.length > 0
            ? `\n\nDid you mean: ${suggestions.map((s) => s.article.slug).join(", ")}?`
            : "";
        return {
          content: [
            { type: "text", text: `Article not found: "${slug}"${hint}` },
          ],
        };
      }

      return { content: [{ type: "text", text: article.content }] };
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Failed to get article: ${msg}` }],
        isError: true,
      };
    }
  }
);

// ═══════════════════════════════════════════════════════════
// Tool: list_articles
// ═══════════════════════════════════════════════════════════

server.tool(
  "list_articles",
  "List all wiki articles, optionally filtered by compliance domain. Returns title, slug, summary, and domain for each article.",
  {
    domain: z
      .enum(["GDPR", "EU AI Act", "CCPA/CPRA", "US Privacy", "Software Licensing", "Web Accessibility"])
      .optional()
      .describe("Filter to a specific domain, or omit for all articles"),
  },
  async ({ domain }) => {
    try {
      const articles = listArticles(domain);

      const grouped: Record<string, typeof articles> = {};
      for (const a of articles) {
        if (!grouped[a.domain]) grouped[a.domain] = [];
        grouped[a.domain].push(a);
      }

      let output = `## Compliance Wiki — ${domain || "All Domains"}\n\n`;
      output += `${articles.length} articles across ${Object.keys(grouped).length} domain(s).\n\n`;

      for (const [dom, arts] of Object.entries(grouped)) {
        output += `### ${dom} (${arts.length})\n\n`;
        for (const a of arts) {
          output += `- **${a.title}** (\`${a.slug}\`)\n  ${a.summary}\n`;
        }
        output += "\n";
      }

      return { content: [{ type: "text", text: output }] };
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `List failed: ${msg}` }],
        isError: true,
      };
    }
  }
);

// ═══════════════════════════════════════════════════════════
// Tool: check_compliance
// ═══════════════════════════════════════════════════════════

server.tool(
  "check_compliance",
  "Quick compliance check — describe your system or situation and get relevant regulatory requirements. Combines search across all domains to identify which regulations apply.",
  {
    description: z
      .string()
      .describe(
        "Describe your system, product, or situation (e.g., 'SaaS app using OpenAI API that processes EU user data', 'React app with Google Analytics deployed in California')"
      ),
  },
  async ({ description }) => {
    try {
      // Search across multiple angles
      const directResults = searchWiki(description, { limit: 8 });

      // Extract unique domains that matched
      const matchedDomains = [
        ...new Set(directResults.map((r) => r.article.domain)),
      ];

      let output = `## Compliance Check\n\n`;
      output += `**Your description:** ${description}\n\n`;
      output += `**Potentially relevant domains:** ${matchedDomains.join(", ") || "None identified"}\n\n`;

      if (directResults.length === 0) {
        output += `No specific regulatory articles matched. Try rephrasing with specific terms like "GDPR", "AI Act", "CCPA", "license", or "accessibility".\n`;
      } else {
        output += `### Relevant Regulations\n\n`;
        for (const { article, score } of directResults) {
          output += `- **${article.title}** (${article.domain}) — relevance: ${score}\n`;
          output += `  ${article.summary}\n`;
          output += `  → Read full: \`get_article("${article.slug}")\`\n\n`;
        }
      }

      output += `\n### Wiki Stats\n`;
      output += `${WIKI_STATS.totalArticles} articles | ${WIKI_STATS.totalWords.toLocaleString()} words | ${WIKI_STATS.domains.map((d) => `${d.name}: ${d.count}`).join(", ")}\n`;

      return { content: [{ type: "text", text: output }] };
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Check failed: ${msg}` }],
        isError: true,
      };
    }
  }
);

// ═══════════════════════════════════════════════════════════
// Tool: wiki_stats
// ═══════════════════════════════════════════════════════════

server.tool(
  "wiki_stats",
  "Get statistics about the compliance knowledge base — article counts, word counts, domains covered, and generation date.",
  {},
  async () => {
    let output = `## Gridwork Compliance Wiki\n\n`;
    output += `A curated knowledge base covering compliance regulations for software teams.\n\n`;
    output += `| Metric | Value |\n|--------|-------|\n`;
    output += `| Total articles | ${WIKI_STATS.totalArticles} |\n`;
    output += `| Total words | ${WIKI_STATS.totalWords.toLocaleString()} |\n`;
    output += `| Last compiled | ${WIKI_STATS.generatedAt} |\n\n`;
    output += `### Domains\n\n`;
    for (const d of WIKI_STATS.domains) {
      output += `- **${d.name}**: ${d.count} articles\n`;
    }
    output += `\n### Available Tools\n\n`;
    output += `- \`query_regulation\` — Ask a compliance question\n`;
    output += `- \`search_wiki\` — Keyword search with domain filtering\n`;
    output += `- \`get_article\` — Read full article by slug\n`;
    output += `- \`list_articles\` — Browse all articles by domain\n`;
    output += `- \`check_compliance\` — Describe your system, get relevant regulations\n`;
    return { content: [{ type: "text", text: output }] };
  }
);

// ═══════════════════════════════════════════════════════════
// Start
// ═══════════════════════════════════════════════════════════

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Server failed to start:", error);
  process.exit(1);
});
