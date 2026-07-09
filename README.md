# Aryan Bansal — Portfolio

A personal portfolio site for **Aryan Bansal**, an AI/ML Engineer (final-year
CS student) specializing in retrieval-augmented generation, applied NLP, and
full-stack systems.

**Suggested repo name:** `aryan-bansal-ai-ml-portfolio`

## Overview

- **Role classification:** AI/ML Engineer (entry-level / rising junior),
  based on flagship work in RAG pipelines (FAISS + LLM orchestration),
  Amazon ML Summer School selection, and an AI-focused internship —
  layered on top of solid full-stack and backend systems experience.
- **Design direction:** dark, technical, GitHub-inspired UI with a signature
  animated "retrieval trace" in the hero that replays a real query from the
  Telecom RAG project — showing retrieval + generation as the visual thesis
  of the whole page. Dual accent colors (`retrieve` teal / `generate` amber)
  echo the two halves of a RAG pipeline throughout the UI.
- **Sections:** Hero, About, Featured Work (Projects), Experience, Skills &
  Achievements, Contact.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- Plain React (no external UI libraries) — fully self-contained
- Dark mode by default, fully responsive, keyboard-focus visible,
  `prefers-reduced-motion` respected

## Project structure

```
aryan-portfolio/
├── app/
│   ├── layout.js        # Root layout + metadata
│   ├── page.js           # Composes all sections
│   └── globals.css       # Fonts, tokens, base styles
├── components/
│   ├── Nav.js
│   ├── Hero.js
│   ├── RetrievalTrace.js # Signature animated hero widget
│   ├── About.js
│   ├── Projects.js
│   ├── Experience.js
│   ├── Skills.js
│   └── Contact.js
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
```

## Local setup

Requires Node.js 18.18+.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm run start
```

No environment variables are required — the site has no backend or CMS
dependency; content lives directly in the components.

## Editing content

All copy lives inline in the component files under `components/` as plain
JS arrays/objects (e.g. `FEATURED` in `Projects.js`, `ROLES` in
`Experience.js`, `GROUPS` in `Skills.js`) — update those to change content
without touching layout markup.
# Aryanbansal
