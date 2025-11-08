import { FormEvent, useMemo, useState } from 'react';
import { candidatePrompts, domainTopics, sampleUserPrompts } from './data/catalog';
import { recommendPrompts } from './engine';
import type { Recommendation } from './engine';
import './App.css';

const domainOptions = Object.keys(domainTopics);

const formatSamplePrompts = sampleUserPrompts.join('\n');

function parsePrompts(value: string): string[] {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

export default function App() {
  const [domain, setDomain] = useState<string>(domainOptions[0] ?? '');
  const [userPromptText, setUserPromptText] = useState<string>(formatSamplePrompts);
  const [limit, setLimit] = useState<number>(5);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const existingPrompts = useMemo(() => parsePrompts(userPromptText), [userPromptText]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const recs = recommendPrompts({
      domain,
      existingPrompts,
      limit,
      candidates: candidatePrompts,
      domainTopics,
    });
    setRecommendations(recs);
    setHasSubmitted(true);
  };

  const handleReset = () => {
    setUserPromptText(formatSamplePrompts);
    setDomain(domainOptions[0] ?? '');
    setLimit(5);
    setRecommendations([]);
    setHasSubmitted(false);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Search Query Recommendation</h1>
        <p className="subtitle">
          Provide your existing prompts and choose a domain to discover complementary ideas.
        </p>
      </header>
      <main className="app-main">
        <section className="card form-card">
          <form onSubmit={handleSubmit} className="form-grid">
            <label className="field">
              <span className="field-label">Domain</span>
              <select value={domain} onChange={(event) => setDomain(event.target.value)}>
                {domainOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className="hint">Domains are backed by lightweight topic keywords.</span>
            </label>

            <label className="field">
              <span className="field-label">Existing prompts</span>
              <textarea
                value={userPromptText}
                onChange={(event) => setUserPromptText(event.target.value)}
                rows={6}
                placeholder="Enter one prompt per line"
              />
              <span className="hint">The recommender avoids returning exact duplicates.</span>
            </label>

            <label className="field inline">
              <span className="field-label">Number of suggestions</span>
              <input
                type="number"
                min={1}
                max={10}
                value={limit}
                onChange={(event) => setLimit(Number(event.target.value) || 1)}
              />
            </label>

            <div className="actions">
              <button type="submit" className="primary">
                Get recommendations
              </button>
              <button type="button" className="secondary" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </section>

        <section className="card results-card">
          <h2>Recommended prompts</h2>
          {recommendations.length > 0 ? (
            <ol className="recommendation-list">
              {recommendations.map((recommendation) => (
                <li key={recommendation.prompt} className="recommendation-item">
                  <div className="prompt-text">{recommendation.prompt}</div>
                  <div className="prompt-meta">
                    <span className="score">Score: {recommendation.score.toFixed(2)}</span>
                    <span className="rationale">{recommendation.rationale}</span>
                  </div>
                </li>
              ))}
            </ol>
          ) : hasSubmitted ? (
            <p className="empty-state">No recommendations found. Try adjusting the prompts or domain.</p>
          ) : (
            <p className="empty-state">Run the recommender to see suggested prompts here.</p>
          )}
        </section>
      </main>
      <footer className="app-footer">
        <p>
          This MVP mirrors the CLI workflow entirely in the browser using the same lightweight scoring logic.
        </p>
      </footer>
    </div>
  );
}
