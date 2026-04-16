# ContentEngine.ai

AI-powered programmatic SEO platform — from keyword to published article at scale.

## Features

- **Keyword Management** — Import via CSV, manual entry, or Google Search Console
- **SERP Intelligence** — DataForSEO-powered analysis (keyword data, PAA, competitors)
- **AI Brief Generation** — Multi-pass brief creation from SERP data
- **Multi-Pass Writing** — Section-by-section AI writing for quality
- **Quality Scoring** — Automated 0-100 quality checks
- **Review Queue** — Human-in-the-loop editing before publish (TipTap editor)
- **CMS Publishing** — WordPress, Webflow, Ghost
- **Rank Tracking** — Weekly position monitoring
- **Team Collaboration** — Multi-seat workspaces with RBAC

## Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth + Google OAuth
- **AI:** Groq (Llama 3.3)
- **SEO Data:** DataForSEO API
- **Editor:** TipTap
- **Images:** Unsplash API (optional)

## Getting Started

```bash
git clone https://github.com/syed-c/content-engine.git
cd content-engine
npm install
```

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` — Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key
- `GROQ_API_KEY` — Get from https://console.groq.com/
- `DATAFORSEO_BASE64` — DataForSEO base64 auth (user:pass)

### Supabase Setup

1. Create a Supabase project at https://supabase.com/
2. Run the schema in SQL Editor:
```bash
cat supabase/schema.sql | pbcopy
# Paste in Supabase SQL Editor
```
3. Run migrations:
```bash
cat supabase/migrations/001_add_missing_fields.sql | pbcopy
# Paste in Supabase SQL Editor
```

```bash
npm run dev
```

Visit http://localhost:3000

## Project Structure

```
src/
├── app/
│ ├── (public)/      # Marketing pages
│ ├── (dashboard)/   # Protected dashboard
│ └── api/           # API routes
├── components/      # React components
│ └── ui/            # UI components (TipTapEditor)
├── lib/
│  ├── ai/           # Groq AI functions
│  ├── seo/          # DataForSEO
│  └── supabase/     # DB clients
└── middleware.ts    # Auth protection
```

## API Routes

| Endpoint | Description |
|----------|-------------|
| `/api/keywords` | CRUD for keywords |
| `/api/keywords/import` | CSV import |
| `/api/keywords/gsc` | GSC import |
| `/api/serp/analyze` | SERP analysis |
| `/api/briefs/generate` | AI brief generation |
| `/api/articles/generate` | Article generation |
| `/api/articles/publish` | WordPress publish |
| `/api/articles/export` | HTML/MD export |
| `/api/articles/schedule` | Scheduled publishing |
| `/api/pipeline/run` | Full pipeline (keyword→article) |
| `/api/pipeline/batch` | Batch processing |
| `/api/cms/publish` | Webflow/Ghost publish |
| `/api/analytics/ranks` | Rank tracking |
| `/api/images/unsplash` | Auto-images |
| `/api/team` | Team management |
| `/api/settings/brand-voice` | Brand voice config |
| `/api/settings/cms` | CMS configuration |

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for the full build timeline.

## Pricing

| Plan | Price | Articles/mo | Workspaces |
|------|-------|-------------|------------|
| Starter | $49/mo | 20 | 1 |
| Pro | $149/mo | 100 | 3 |
| Agency | $399/mo | 500 | Unlimited |

---

Built with ❤️ using ContentEngine itself
