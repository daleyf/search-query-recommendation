# Search Query Recommendation — Browser MVP

This project provides a lightweight **React** application that helps generate complementary search prompts for a given domain. It is intentionally minimal so you can clone the repository, run `npm install`, and start exploring ideas in the browser within minutes.

## ✨ What the MVP Does

- Lets you choose from a small catalog of sample domains.
- Accepts existing prompts so the recommendations avoid duplicates.
- Scores candidate prompts by keyword overlap with the selected domain topics.
- Shows the top matches with a short rationale for each suggestion.

All logic runs locally in the browser using a small TypeScript utility module—no backend or external APIs required.

## 📦 Project Structure

```
├── data/                        # Optional seed data that mirrors the browser catalog
├── frontend/                    # Vite-powered React application
│   ├── src/                     # UI and recommendation logic
│   └── package.json
└── README.md
```

## 🚀 Run the Browser MVP

Requirements: **Node.js 18+** and **npm**.

```bash
# 1. Clone the repository
$ git clone https://github.com/<your-username>/search-query-recommendation.git
$ cd search-query-recommendation

# 2. Install frontend dependencies
$ cd frontend
$ npm install

# 3. Start the development server
$ npm run dev
```

Vite will print a local development URL (typically http://localhost:5173). Open it in your browser to select a domain, paste your existing prompts, and generate ranked recommendations.

To create an optimized build:

```bash
npm run build
```

## 🛠 Customising the Catalog

Open `frontend/src/data/catalog.ts` to edit:

- `domainTopics` for the list of domains and associated keywords.
- `candidatePrompts` for the prompts that can be recommended.
- `sampleUserPrompts` for the pre-filled example prompts in the UI.

The UI will automatically pick up your changes the next time you run the development server.

## 📚 How It Works

1. Load the topics that describe the selected domain.
2. Filter out any candidate prompts that match the existing prompt list.
3. Score the remaining candidates by topic overlap.
4. Return the highest-scoring prompts along with a rationale that lists the overlapping topics.

This keyword-based approach keeps the MVP simple while still providing meaningful, inspectable output.

## 🚧 Limitations

- Relies on a small, hand-curated catalog and topic map.
- Uses keyword overlap instead of richer semantic models.
- Does not persist user input or integrate with external services.

These trade-offs are intentional so the entire experience runs locally without any setup beyond installing Node.js.
