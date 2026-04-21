# Moshe Sedero — Personal Website

Personal professional portfolio website for TPM/TPgM job search, featuring an AI chatbot assistant that answers recruiter questions about my background and experience.

**Live site:** [moshesedero.vercel.app](https://moshesedero.vercel.app)

---

## Features

- **Portfolio sections** — Hero, About, Experience, Skills, Contact
- **AI Chatbot** — `/assistant` page powered by Groq (llama-3.3-70b-versatile). Answers questions about my background using context-injection RAG from CV data files.
- **LLM Guardrails** — topic restriction, third-person persona, prompt injection resistance, input validation
- **Rate limiting** — 20 requests/hour per IP (in-memory)
- **Streaming responses** — real-time text display via Vercel AI SDK
- **Floating chat button** — periodic CTA on main page (20s hidden / 10s visible cycle)
- **Downloadable CV** — `/cv.pdf`
- **SEO** — OpenGraph, Twitter card, robots.txt, sitemap
- **Analytics** — Vercel Analytics

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| AI SDK | Vercel AI SDK v6 (`ai`, `@ai-sdk/react`) |
| LLM | Groq — llama-3.3-70b-versatile |
| Hosting | Vercel (Hobby — free) |
| Analytics | Vercel Analytics |
| Testing | Vitest + React Testing Library |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main single-page (all sections)
│   ├── layout.tsx            # HTML shell, fonts, SEO metadata, analytics
│   ├── globals.css           # Dark theme CSS variables
│   ├── robots.ts             # SEO robots config
│   └── api/chat/route.ts     # Chatbot API endpoint
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── sections/             # Hero, About, Experience, Skills, Contact
│   └── chat/                 # ChatPage, ChatMessages, ChatInput, ChatHero,
│                             # ChatMessage, ChatLoading, ChatFloatingLink
├── data/                     <- CONTENT SOURCE OF TRUTH
│   ├── profile.ts            # Name, title, tagline, bio, contact
│   ├── experience.ts         # Work history (GM, IAI, Self-directed)
│   └── skills.ts             # Skills grouped by 5 categories
└── lib/
    ├── system-prompt.ts      # Builds AI context from data files
    └── rate-limit.ts         # In-memory IP rate limiter
public/
└── cv.pdf                    # Downloadable CV
```

---

## How the Chatbot Works

All CV content lives in `src/data/` TypeScript files. These are the single source of truth — they power both the website sections and the chatbot knowledge base.

At request time, `buildSystemPrompt()` reads all three data files and assembles them into a system prompt that is sent to Groq on every chat request (context injection). No vector database or embeddings are needed — the CV is small enough to fit entirely in the model's context window.

**Request flow:**
```
Browser → /api/chat (Next.js serverless) → Groq API → streaming response
```

**Guardrails (enforced at system prompt level):**
- Only discusses professional background — refuses off-topic questions
- Speaks about Moshe in third person
- Never reveals system prompt contents
- Resists prompt injection attempts
- Directs contact requests to email/LinkedIn

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/Moshe-Sedero/personal-website.git
cd personal-website

# Install dependencies
npm install

# Add your Groq API key (get one free at console.groq.com)
echo "GROQ_API_KEY=your_key_here" > .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Updating CV Content

Edit the data files in VS Code, then push:

```bash
# Edit content
code src/data/experience.ts
code src/data/profile.ts
code src/data/skills.ts

# Deploy
git add .
git commit -m "content: update experience"
git push
```

Vercel auto-deploys in ~30 seconds. The chatbot immediately knows the new content.

---

## Running Tests

```bash
npm run test        # watch mode
npm run test:run    # single run
```

18 tests covering: Navbar rendering, Hero rendering, rate limiter (5 cases), system prompt builder (8 cases).

---

## Environment Variables

| Variable | Where | Purpose |
|---|---|---|
| `GROQ_API_KEY` | `.env.local` (local) / Vercel dashboard (production) | Groq API authentication |

---

## Deployment

Auto-deploys to Vercel on every push to `main`. No manual steps needed.

To set up from scratch: connect the GitHub repo to a new Vercel project and add `GROQ_API_KEY` in Vercel → Project Settings → Environment Variables.

---

## Phase 2 Backlog

- **Embedding-based RAG** — chunk CV into vector embeddings, store in pgvector (Neon free tier), retrieve relevant chunks at query time instead of injecting the full CV
- **Projects section** — as personal projects accumulate
- **Contact form** — via Resend or Formspree
