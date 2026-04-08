import { WIKI_ARTICLES, type WikiArticle } from "./wiki-data.js";

/**
 * Simple text search across wiki articles.
 * Scores by: title match (10), summary match (5), key points match (3), content match (1).
 */
export function searchWiki(
  query: string,
  options: { domain?: string; limit?: number } = {}
): { article: WikiArticle; score: number; matchContext: string }[] {
  const { domain, limit = 10 } = options;
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  let articles = WIKI_ARTICLES;
  if (domain) {
    articles = articles.filter(
      (a) => a.domain.toLowerCase() === domain.toLowerCase()
    );
  }

  const results = articles
    .map((article) => {
      let score = 0;
      const titleLower = article.title.toLowerCase();
      const summaryLower = article.summary.toLowerCase();
      const keyPointsLower = article.keyPoints.toLowerCase();
      const contentLower = article.content.toLowerCase();

      for (const term of terms) {
        if (titleLower.includes(term)) score += 10;
        if (summaryLower.includes(term)) score += 5;
        if (keyPointsLower.includes(term)) score += 3;
        if (contentLower.includes(term)) score += 1;
      }

      // Extract match context — first content line containing any term
      let matchContext = "";
      if (score > 0) {
        const lines = article.content.split("\n");
        for (const line of lines) {
          const lineLower = line.toLowerCase();
          if (
            terms.some((t) => lineLower.includes(t)) &&
            !line.startsWith("#") &&
            !line.startsWith(">") &&
            line.trim().length > 20
          ) {
            matchContext = line.trim().slice(0, 200);
            break;
          }
        }
      }

      return { article, score, matchContext };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return results;
}

/**
 * Get a single article by slug.
 */
export function getArticle(slug: string): WikiArticle | undefined {
  return WIKI_ARTICLES.find((a) => a.slug === slug);
}

/**
 * List all articles, optionally filtered by domain.
 */
export function listArticles(domain?: string): WikiArticle[] {
  if (domain) {
    return WIKI_ARTICLES.filter(
      (a) => a.domain.toLowerCase() === domain.toLowerCase()
    );
  }
  return WIKI_ARTICLES;
}

/**
 * Find articles that reference a specific article (backlinks).
 */
export function getBacklinks(slug: string): WikiArticle[] {
  return WIKI_ARTICLES.filter((a) => a.crossRefs.includes(slug));
}

/**
 * Answer a compliance question by finding and synthesizing relevant articles.
 */
export function queryRegulation(question: string): string {
  const results = searchWiki(question, { limit: 5 });

  if (results.length === 0) {
    return `No wiki articles found matching: "${question}"\n\nAvailable domains: ${WIKI_ARTICLES.map((a) => a.domain)
      .filter((v, i, a) => a.indexOf(v) === i)
      .join(", ")}`;
  }

  let response = `## Relevant Articles\n\n`;
  response += `Found ${results.length} articles matching your query.\n\n`;

  for (const { article, score } of results) {
    response += `### ${article.title}\n`;
    response += `**Domain:** ${article.domain} | **Relevance:** ${score} | **Slug:** ${article.slug}\n\n`;
    response += `> ${article.summary}\n\n`;
    response += `${article.keyPoints}\n\n`;
    if (article.crossRefs.length > 0) {
      response += `**See also:** ${article.crossRefs.map((r) => `[[${r}]]`).join(", ")}\n\n`;
    }
    response += `---\n\n`;
  }

  return response;
}
