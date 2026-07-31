# DarviLabs

Company website for DarviLabs — a software engineering firm that builds systems businesses run on.

Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Scripts

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `npm run dev`       | Start development server       |
| `npm run build`     | Production build               |
| `npm start`         | Start production server        |
| `npm run lint`      | Run Biome lint                 |
| `npm run format`    | Format code with Biome         |
| `npm run check`     | Full Biome check (lint+format) |

## Project Structure

```
app/
├── (home)/             → Home page and partials
├── about/              → About page
├── blogs/              → Blog index + detail
├── case-studies/       → Case study detail
├── contact/            → Contact page
├── data/               → Static page data
├── portfolio/          → Portfolio / work overview
├── process/            → Process page
└── services/           → Services index + detail

components/
├── shared/             → Reusable UI components
├── ui/                 → shadcn/ui primitives
└── forms/              → Form field components

hooks/                  → Data fetching and animation hooks
lib/                    → Utilities and API client
types/                  → Shared TypeScript types
data/                   → Static navigation data
```

## Tech Stack

| Layer        | Choice                        |
| ------------ | ----------------------------- |
| Framework    | Next.js 16 (App Router)       |
| UI           | React 19                      |
| Styling      | Tailwind CSS v4               |
| Language     | TypeScript (strict)           |
| Animation    | Framer Motion                 |
| Icons        | Lucide React + React Icons    |
| Linting      | Biome                         |
| Fonts        | Outfit + Urbanist (Google)    |
