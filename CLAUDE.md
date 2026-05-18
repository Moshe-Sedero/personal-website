# Personal Website - Claude Code Instructions

## Project Overview
Personal portfolio site for Moshe Sedero with an integrated AI chatbot assistant.
- **Live URL:** https://moshesedero.vercel.app
- **GitHub repo:** Moshe-Sedero/personal-website
- **Hosting:** Vercel (auto-deploys on push to main)

## Tech Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS with CSS custom properties
- motion/react (v12) for animations
- Vercel AI SDK + Groq (LLaMA 3.3 70B) for the chatbot
- @iconify/react for skill icons

## Key File Paths
- **All site content (edit here for copy changes):** `src/data/` - profile.ts, experience.ts, skills.ts, projects.ts, presentations.ts, education.ts
- **Chatbot knowledge base:** `src/lib/system-prompt.ts` (reads from data/ files automatically)
- **Page layout and section order:** `src/app/page.tsx`
- **Global styles + CSS variables:** `src/app/globals.css`
- **Public assets (images, PDFs):** `public/`

## Design Tokens
- **Accent green:** `#14b840` — use `var(--accent)`, never hardcode `#22c55e`
- **Muted variants:** `var(--accent-40/50/60)` defined in globals.css
- **Background:** `var(--background)` = `#0a0a0a`
- **Card background:** `var(--card)` = `#111111`
- **Muted text:** `var(--muted)` = `#6b7280`
- **Border:** `var(--border)` = `#1f2937`

## Component Patterns
- **TiltCard** (`src/components/TiltCard.tsx`) - wrap any card with hover tilt effect
- **AnimatedSection** (`src/components/AnimatedSection.tsx`) - scroll-in fade wrapper
- **StatsRow** (`src/components/StatsRow.tsx`) - animated stats in hero

## Verification Command
Always run before committing:
```
npm run build
```
A clean build with no TypeScript errors is required before pushing.

## Content Update Workflow
All visible website text comes from `src/data/` files.
The chatbot automatically picks up any changes to those files - no separate update needed.
Never hardcode content in components - always put it in the data files.

## Style Conventions
- No em-dashes (-) anywhere - use regular hyphens (-) instead
- No hardcoded color values - always use CSS variables
- No new dependencies without flagging explicitly first
- Server components by default; add "use client" only when interactivity is needed

## Current Section Order (page.tsx)
Hero - About - Skills - Experience - Education - Projects - TalkToAI - Presentations - Contact - Footer

## Pending / Known Deferrals
- Contact form (not yet implemented - links only for now)
- Stats row items 3 and 4 (user deciding replacements)
- More project cards (layout to be discussed before adding)
- Chatbot reply formatting improvements (visual quality of AI responses)
