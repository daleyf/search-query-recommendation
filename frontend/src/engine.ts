import type { CandidatePrompt, DomainTopics } from './data/catalog';

export interface Recommendation {
  prompt: string;
  score: number;
  rationale: string;
}

export interface RecommendOptions {
  domain: string;
  existingPrompts: string[];
  limit?: number;
  candidates: CandidatePrompt[];
  domainTopics: DomainTopics;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .join(' ');
}

export function recommendPrompts({
  domain,
  existingPrompts,
  limit = 5,
  candidates,
  domainTopics,
}: RecommendOptions): Recommendation[] {
  const normalizedDomain = domain.toLowerCase();
  const topics = domainTopics[normalizedDomain] ?? domainTopics['default'] ?? [];
  const topicSet = new Set(topics.map((topic) => topic.toLowerCase()));

  const normalizedExisting = new Set(
    existingPrompts.map(normalize).filter((value) => value.length > 0)
  );

  const scored: Recommendation[] = [];

  for (const entry of candidates) {
    const prompt = entry.prompt.trim();
    const normalizedPrompt = normalize(prompt);
    if (!prompt || normalizedExisting.has(normalizedPrompt)) {
      continue;
    }

    const tags = (entry.tags ?? []).map((tag) => tag.toLowerCase());
    const overlap = new Set(tags.filter((tag) => topicSet.has(tag)));
    if (overlap.size === 0) {
      continue;
    }

    const score = overlap.size / Math.sqrt(tags.length || 1);
    const rationale = `Matches domain topics: ${Array.from(overlap).sort().join(', ')}`;

    scored.push({ prompt, score, rationale });
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.prompt.localeCompare(b.prompt);
  });

  return scored.slice(0, limit);
}
