# 🧠 Telepathic Engineer Take-Home — Search Query Recommendation Engine

A **Notion-inspired web app** that helps content and SEO managers discover **new, high-potential search prompts** relevant to their company’s domain — automatically recommending the top 5 missing prompts that users *should* be tracking.

---

## 🚀 Overview

This project is a take-home assessment for the **Telepathic Engineer** role.  
It demonstrates:

- Modern, product-quality frontend development (React + TypeScript + TailwindCSS)
- Clean UX/UI design inspired by **Notion**
- Practical **recommendation logic** powered by embeddings and domain analysis
- Clear, modular code organization

---

## 🧩 Core Features

| Feature | Description |
|----------|-------------|
| **Prompt Upload** | Upload or paste a list of up to 20 search prompts (via CSV or textarea). |
| **Domain Input** | Enter a domain like `itstelepathic.com`. Input validated with regex. |
| **Recommendation Engine** | Analyzes the domain (scraped or stubbed), compares existing prompts, and recommends 5 new relevant ones. |
| **Notion-Style UI** | Minimalist, responsive, accessible design matching Notion’s visual polish. |
| **Output Display** | Clean list/table of recommended prompts with optional “why” reasoning. |

---

## 🧠 Recommendation Logic

The **recommendation engine** is implemented as a modular service under `/src/lib/recommendation.ts`.  
Here’s how it works conceptually:

1. **Domain Analysis**  
   - Fetches or simulates content for the entered domain.  
   - Uses basic NLP (TF-IDF or embeddings) to extract key topics.

2. **Prompt Embedding Comparison**  
   - Encodes both uploaded and candidate prompts using OpenAI or local embeddings.  
   - Computes cosine similarity between user prompts and relevant domain topics.

3. **Filtering + Ranking**  
   - Removes duplicates or near-matches from the user’s existing list.  
   - Ranks remaining candidates by semantic relevance + uniqueness.  
   - Returns **top 5 prompts** with short “why” explanations (e.g., *“high relevance to CRM use-cases”*).

> For local/offline mode, a stub dataset (`/data/sample_prompts.json`) simulates this behavior without network calls.

---

## 🧱 Tech Stack

- **Frontend:** React + TypeScript + Vite  
- **Styling:** TailwindCSS (Notion-inspired theme)  
- **Backend (optional):** Express / Supabase (for persistence)  
- **AI/NLP:** OpenAI Embeddings API or simulated stub  
- **Testing:** Playwright / Vitest  
- **Deployment:** Vercel (one-click deploy)

---

## 🧰 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/telepathic-recommendation-engine.git
cd telepathic-recommendation-engine
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the dev server
```bash
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 🧪 Testing

To run unit or E2E tests:
```bash
npm run test
# or
npm run test:e2e
```

---

## ⚙️ Configuration

If using embeddings:
1. Create a `.env` file in the project root.
2. Add:
   ```
   OPENAI_API_KEY=your_key_here
   ```
3. The app automatically falls back to stubbed logic if no key is provided.

---

## 🧭 Trade-Offs & Design Decisions

- **Domain scraping** is simulated for consistency and local testing speed.
- **Embedding logic** is modular — can switch between stubbed, OpenAI, or custom model.
- **Minimal backend** — chosen to focus on UX, not infra complexity.
- **Notion-inspired polish** prioritized over extensive backend integration.

---

## 🌐 Deployment

To deploy via [Vercel](https://vercel.com/):

```bash
npm run build
vercel deploy
```

You can also host via Netlify or your own server.

---

## 📊 Example Workflow

1. User enters domain `itstelepathic.com`.  
2. Uploads prompt list:
   ```
   Best CRMs of 2025
   What CRM should I use for my early stage startup?
   How does Salesforce compare to alternatives?
   ```
3. Clicks **“Get Recommendations.”**
4. App outputs:
   ```
   Recommended Prompts:
   1. “Top lightweight CRM tools for startups”
   2. “Affordable CRM platforms for SMBs”
   3. “Best AI-powered CRM systems”
   4. “Alternatives to HubSpot for small teams”
   5. “How to migrate CRM data without downtime”
   ```

---

## 🧑‍💻 Author Notes

- Built with speed, polish, and modularity in mind.  
- Recommendation engine easily swappable for production-grade vector search.  
- Can extend to track competitor domains or historical query analytics.

---

## 🏁 Deliverables

- ✅ GitHub repo with full source  
- ✅ README (this document)  
- ✅ (Optional) Live demo link: *coming soon via Vercel*

---

## 📈 Future Improvements

- Supabase integration for saving user sessions  
- Real-time search-volume insights via SerpAPI  
- Multi-domain comparison and prompt clustering  
- AI-powered copy suggestions per recommended prompt

---

**Made with ❤️ by [Your Name]**  
*Telepathic Take-Home Submission — November 2025*
```
