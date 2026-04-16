

**PRODUCT REQUIREMENTS DOCUMENT**

**Programmatic SEO Content Engine**

*Brief-to-Published at Scale — Advanced Edition*

| Version | 1.0 — Initial PRD |
| :---- | :---- |
| **Status** | Ready for Development |
| **Date** | April 2026 |
| **Product** | ContentEngine.ai (working title) |
| **Prepared by** | Product Team |

# **1\. Executive Summary**

ContentEngine is an AI-native programmatic SEO platform that takes a keyword — and returns a fully published, schema-marked, internally linked article live on the user's CMS. Every step between keyword research and hitting Publish is automated, supervised by a lightweight human review gate, and measurably optimised against real SERP data. No competitor closes this full loop today.

| Problem | SEO agencies and in-house teams spend 4–12 hours producing a single optimised article — brief, writing, editing, on-page SEO, schema, images, CMS upload, internal links. At 50 articles per month per client this is unsustainable. Existing tools solve one piece. No tool owns the whole pipeline. |
| :---- | :---- |

| Solution | ContentEngine automates the complete pipeline: SERP analysis → AI brief → multi-pass article writing → on-page SEO enrichment → human review queue → one-click CMS publish → weekly rank tracking → auto content refresh. Cost per published article: \~$0.15. Time per article for the human: under 5 minutes. |
| :---- | :---- |

### **Target KPIs at 18 Months**

| Metric | Month 12 Target | Month 18 Target |
| :---- | :---- | :---- |
| MRR | $14,800 | $38,000 |
| Paying customers | 225 | 450+ |
| Articles published / mo | 50,000 | 200,000+ |
| Gross margin | 72% | 78% |
| Avg articles/customer/mo | 220 | 440 |
| NPS | 45+ | 55+ |

# **2\. Problem Space & Market Opportunity**

## **2.1  The Core Pain**

A content agency managing 20 SEO clients needs to publish 400–1,000 articles per month to move the needle for all of them. The bottleneck is not creativity — it is the mechanical, repeatable, time-consuming production pipeline that must be executed identically for every article. Agencies solve this today by hiring junior writers or offshore teams, spending $15–40 per article with zero consistency in on-page SEO execution.

## **2.2  Why Existing Tools Fail**

| Tool | Price/mo | What it does | Critical gap |
| :---- | :---- | :---- | :---- |
| Surfer SEO | $89 | SERP briefs only | No writing, no CMS publish |
| Jasper | $99 | AI writing only | No SERP data, no publish |
| Frase | $45 | Brief \+ basic AI write | No CMS publish, weak multi-pass writing |
| Content at Scale | $250 | Bulk AI writing | No SERP brief, poor quality, no publish |
| Writesonic | $99 | Generic AI writing | No SEO data, no pipeline |
| ContentEngine | $49+ | Full pipeline: brief→write→publish | Nothing missing |

## **2.3  Total Addressable Market**

Global SEO industry revenue exceeds $80B annually. SaaS tooling captures roughly 8% of that spend (\~$6.4B). The content production subset — tools that help create and publish SEO content — is the fastest-growing segment, driven by AI adoption. The SEO software market (Mordor Intelligence) is projected at $3.8B by 2027 with a 15.6% CAGR. ContentEngine targets the $1.2B segment of agencies and in-house teams spending on content production tooling.

## **2.4  Target Customer Profiles**

**ICP 1 — Digital Marketing Agency (Primary)**

10–150 person agencies managing SEO for 5–50 clients. Content production is their highest labour cost. They need consistent, scalable output that doesn't require a senior editor on every article. Decision maker: Head of SEO or Operations Director. Willingness to pay: $150–$500/mo per client they run through the tool.

**ICP 2 — In-house SEO / Content Team at SaaS or E-commerce**

Teams of 2–8 at companies generating $5M–$100M revenue where organic search is a primary growth channel. They have a keyword strategy but lack writing bandwidth to execute it. Decision maker: Head of Content or VP Marketing. WTP: $150–$399/mo for the team.

**ICP 3 — Solo SEO Consultant**

Freelance SEO practitioners managing 3–15 clients independently. Time is their only constraint. A tool that eliminates 80% of production time is existentially valuable. WTP: $49–$149/mo.

# **3\. Product Vision & Principles**

## **3.1  Vision Statement**

| *"Give any marketer the power to publish 100 perfectly optimised, human-reviewed articles per month — without hiring a writer."* |
| :---: |

## **3.2  Guiding Principles**

* SERP-first, not prompt-first. Every article is built on real ranking data, not invented structure.

* Human in the loop, not human out of the loop. The tool accelerates editors, it does not replace editorial judgement.

* Output quality over output speed. Multi-pass section writing beats single-pass bulk generation every time.

* Dogfood publicly. ContentEngine's own blog is run entirely on the product. Every post carries a 'Written with ContentEngine' badge.

* Measure what ranks, not what looks good. Post-publish rank tracking closes the feedback loop from keyword to outcome.

# **4\. System Architecture**

## **4.1  High-Level Architecture Overview**

ContentEngine is structured as three distinct layers: the Ingestion Layer (keyword input and SERP intelligence), the Generation Layer (AI brief and multi-pass article writing), and the Delivery Layer (human review, CMS publishing, and post-publish tracking). These layers communicate via an asynchronous job queue (Inngest) to prevent timeout failures on long-running pipelines.

### **Core Architecture Stack**

| Layer | Technology | Responsibility |
| :---- | :---- | :---- |
| Frontend | Next.js 14 (App Router) on Vercel | Dashboard, review queue, editor, analytics |
| API Layer | Next.js API Routes \+ Edge Functions | Auth, webhook handling, CMS connectors |
| Job Queue | Inngest (durable functions) | Long-running AI pipelines, batch jobs, retries |
| Database | Supabase Postgres | All application data with RLS for multi-tenancy |
| File Storage | Supabase Storage | Brand logos, imported assets, draft exports |
| Auth | Supabase Auth \+ OAuth | Google SSO, email/password, team invite flow |
| AI Engine | Claude API (claude-sonnet-4-6) | Brief generation, multi-pass article writing |
| SEO Data | DataForSEO API | SERP analysis, keyword suggestions, rank tracking |
| Editor | TipTap (headless rich text) | Article review queue inline editing |
| Email | Resend | Batch ready, rank alerts, team notifications |
| Payments | Stripe (subscriptions \+ usage) | Plan billing \+ article credit top-ups |
| Images | Unsplash API \+ DALL-E 3 (paid) | Auto featured images by article topic |

## 

## 

## 

## **4.2  The Generation Pipeline (Detailed)**

| Critical | The pipeline is an Inngest durable function. Each step is independently retriable. A 50-article batch takes 12–25 minutes of wall-clock time. This MUST be a background job from day 1 — not a serverless function call. |
| :---- | :---- |

| Step 1 | Keyword intake User inputs keyword(s) via CSV, manual entry, or GSC import. System validates, deduplicates, and enqueues each keyword as an individual pipeline job. Concurrency limit: 3 simultaneous per workspace to respect Claude API rate limits. |
| :---: | :---- |

| Step 2 | SERP intelligence DataForSEO SERP API: fetches top 10 organic results for the keyword. Extracts: avg word count, heading depth, content type (guide / listicle / comparison / tool page), People Also Ask questions, related searches, and Featured Snippet if present. Cost: \~$0.003/keyword. |
| :---: | :---- |

| Step 3 | Competitor content analysis For each of the top 3 ranking URLs: fetch the page HTML, strip navigation/boilerplate, extract H2/H3 structure and approximate section lengths. AI summarises what angles each competitor takes and what questions they answer. This informs the brief's differentiation angle. |
| :---: | :---- |

| Step 4 | Brief generation Claude receives: keyword, volume, difficulty, intent classification, SERP summary, competitor angles, user's brand voice profile, and target word count. Outputs: recommended H1 (3 variants), H2/H3 structure with section-by-section writing instructions, primary \+ secondary keywords to include, recommended CTA, word count per section, and angle vs competitors. Brief is stored and shown to user before writing begins. |
| :---: | :---- |

| Step 5 | Multi-pass article writing Each section is written as a separate Claude API call. The prompt for each call includes: the full brief, all previously written sections (for continuity), the specific section instruction, keyword density target, and a 'do not repeat' list of phrases used in prior sections. Introduction, each H2 body section, FAQ block, and conclusion are generated independently then assembled into the full article. |
| :---: | :---- |

| Step 6 | On-page SEO enrichment Post-assembly automated layer: (1) verify primary keyword appears in first 100 words and last paragraph, (2) generate meta title under 60 chars with keyword, (3) generate meta description under 160 chars with CTA, (4) inject FAQ schema as JSON-LD, (5) suggest 3–5 internal links from user's existing published URLs (via sitemap or manually added URL list), (6) calculate keyword density and flag if outside 0.8–1.8% range. |
| :---: | :---- |

| Step 7 | Quality scoring Automated quality score (0–100) computed before human review: readability (Flesch-Kincaid), word count vs target, keyword density, heading ratio, meta length compliance, internal link count, FAQ presence, schema validity. Score shown in review queue. Articles below 65 are flagged red. |
| :---: | :---- |

| Step 8 | Human review queue Editor receives email: 'Your 20 articles are ready.' Opens queue. Sees article, brief it was written against, quality score, and keyword data. Can: edit any section inline via TipTap, regenerate any individual section, approve, or reject with a reason. Batch approve available for trusted high-scoring batches. |
| :---: | :---- |

| Step 9 | CMS publish On approval: system publishes to connected CMS (WordPress / Webflow / Ghost / Shopify Blog). Sets slug, category, tags, meta title, meta description, JSON-LD schema, and featured image (Unsplash auto-select or DALL-E generated on Agency plan). Supports publish-now or scheduled date. |
| :---: | :---- |

| Step 10 | Rank tracking \+ refresh loop Weekly: DataForSEO checks keyword position for every published article. Dashboard shows rank movement over time. Trigger rule: if an article drops more than 5 positions from its peak ranking AND is over 90 days old AND was previously ranking in positions 1–20, it is added to the 'refresh queue'. Refresh re-runs steps 2–6 with updated SERP data and rewrites underperforming sections only. |
| :---: | :---- |

# **5\. Feature Specifications**

## **5.1  Keyword & Project Management**

### **Keyword Lists**

* Import via CSV (columns: keyword, optional target URL, optional priority)

* Google Search Console import: OAuth connect, pull queries with impressions \> 100 and position \> 8 (low-hanging fruit filter)

* Keyword discovery: enter a seed topic \+ optional competitor domain → system returns 50 related keyword suggestions with volume, difficulty, and intent from DataForSEO

* Manual tagging: group keywords into clusters (e.g., 'top of funnel', 'product pages', 'comparison')

* Bulk status view: keyword → brief status → article status → publish status → rank position

### **Projects & Workspaces**

* Each workspace maps to one website / client

* Agency plan: unlimited workspaces, each with their own CMS connections, brand voice, and keyword lists

* Team members can be invited per workspace with roles: Admin, Editor, Viewer

* Workspace-level brand voice: writing tone (formal/conversational/technical), brand name, product names to always capitalise, competitor names to never mention

## **5.2  SERP Intelligence Module**

This module is what differentiates ContentEngine from every writing-only tool. It runs before the AI sees the keyword.

### **SERP Data Points Collected per Keyword**

| Data point | How it's used |
| :---- | :---- |
| Avg word count (top 10\) | Sets target word count for the article brief |
| Dominant content type | Determines article format: listicle, guide, comparison, tool page, definition |
| Heading structure patterns | H2/H3 depth and naming conventions inform brief structure |
| People Also Ask questions | Mapped directly to FAQ schema section at article bottom |
| Featured Snippet presence | If snippet exists: article is structured to win it (40-word direct answer in first H2) |
| Top 3 competitor angles | Brief instructs AI to take a differentiated angle vs these |
| Search intent classification | Informational / Commercial / Transactional — affects CTA recommendation |
| Related searches | Added as secondary keywords in brief |

## **5.3  AI Brief Engine**

The brief is the contract between the SERP data and the writing engine. It is always shown to the user before writing begins. Editing the brief before generating the article is explicitly encouraged.

### **Brief Contents**

* Title: 3 H1 variants ranked by click-through potential

* Target word count with per-section breakdown

* H2 structure with section-level writing instruction (e.g., 'Compare X vs Y with a summary table. 250 words.')

* Primary keyword \+ 4–6 secondary keywords (LSI) to include naturally

* Angle directive: what to say differently than the top 3 competitors

* Featured Snippet targeting: exact answer to include verbatim in first H2 if snippet opportunity detected

* CTA recommendation based on search intent (informational → email capture, commercial → demo/trial, transactional → product link)

* FAQ questions (from PAA) to answer at article end

* Internal link suggestions: up to 5 URLs from user's existing content that are contextually relevant

| Advanced | Brand voice injection: each workspace can define a tone profile (3–5 sentences describing writing style, vocabulary preferences, and topics to avoid). This is appended to every Claude brief prompt automatically. |
| :---- | :---- |

## **5.4  Multi-Pass Article Writing Engine**

The architectural decision that produces better output than all competitors. No single-prompt generation.

| Pass 1 *Introduction* | Written last actually — after all body sections are complete. Receives the full article as context to ensure the intro accurately reflects what follows. Target: 150–200 words, keyword in first sentence, hook-driven opener. |
| :---- | :---- |

| Pass 2–N *Body sections (per H2)* | Each H2 is a separate API call. Receives: full brief, all previously written sections, specific section instruction from brief, 'do not repeat' phrases, and a continuity note (e.g., 'Previous section defined X — this section should build on that by explaining Y'). This is the core quality driver. |
| :---- | :---- |

| Pass N+1 *FAQ block* | Receives the full article \+ PAA questions from brief. Writes concise 40–80 word answers per question. Structured as HTML-ready FAQ with schema markup pre-applied. |
| :---- | :---- |

| Pass N+2 *Conclusion \+ CTA* | Receives full article \+ CTA recommendation from brief. 150–200 word summary with clear next step for the reader. Avoids repeating phrases from the introduction. |
| :---- | :---- |

| Pass N+3 *Meta \+ schema* | Separate focused pass: generates meta title, meta description, and full JSON-LD schema (Article \+ FAQ). Runs against the final assembled article for accuracy. |
| :---- | :---- |

## **5.5  CMS Integration Specifications**

| CMS | Auth method | Priority | Fields mapped |
| :---- | :---- | :---- | :---- |
| WordPress | Application Password \+ REST API | P0 (MVP) | Title, content, slug, category, tags, meta title, meta description, featured image, custom fields (Yoast/RankMath) |
| Webflow | API Token \+ CMS API v2 | P1 | Name, slug, rich text body, SEO title, SEO description, featured image, collection fields |
| Ghost | Admin API \+ JWT auth | P1 | Title, HTML content, feature image, meta title, meta description, tags, canonical URL |
| Shopify Blog | Admin API \+ OAuth | P2 | Title, body HTML, author, tags, meta description, published at |
| Contentful | Content Management API | P2 | Rich text field mapping to user-defined content model |
| Export (HTML/MD) | Download only | P0 (MVP) | Full HTML article \+ meta block, or Markdown with frontmatter |

## 

## 

## **5.6  Advanced Features (Phase 2–3)**

### **Topical Authority Cluster Builder**

Input: a pillar topic (e.g., 'email marketing'). Output: a recommended cluster of 15–40 articles (pillar page \+ supporting posts) with internal linking architecture pre-mapped. Cluster is generated using DataForSEO keyword grouping and semantic clustering. User approves the cluster structure before running the pipeline on the full set.

### **Competitor Content Gap Analysis**

Input: up to 5 competitor domains. System fetches their sitemap, analyses their published content via DataForSEO, identifies keyword clusters they rank for that the user does not, and generates a prioritised 'content gap' keyword list sorted by difficulty × volume. Pre-populates a new keyword list ready for one-click pipeline execution.

### **Content Decay Detection**

Weekly automated check: any article that ranked in positions 1–15 for 30+ consecutive days and has since dropped more than 8 positions triggers a decay alert. User receives Slack/email notification. Article is added to refresh queue with a pre-filled refresh brief showing what changed in the SERP since the article was published (new competitors, new PAA questions, new content type dominance).

### **EEAT Signal Injection**

For YMYL (health, finance, legal) topics: additional prompt layer that instructs the AI to include: author credentials placeholder, publication date mention, primary source citations (AI suggests 2–3 authoritative domains to link to), and a disclaimer block. Workspace-level setting: enable EEAT mode for all articles or per-article.

### **Custom Prompt Templates**

Agency plan feature: create reusable prompt templates per content type. Example: a 'SaaS comparison page template' with specific instructions for feature tables, pricing comparisons, and verdict sections. Applied as an overlay on top of the standard brief for designated content types.

### **AI Image Generation (DALL-E 3 Integration)**

Agency plan feature: for each article, AI generates a custom featured image prompt based on the article topic. DALL-E 3 generates a photorealistic or illustrated image. Style can be set per workspace (photographic / flat illustration / infographic style). Images are stored in Supabase Storage and auto-attached to the CMS publish.

# **6\. Database Schema (Core Tables)**

## **6.1  Primary Entities**

| Table | Key fields | Notes |
| :---- | :---- | :---- |
| workspaces | id, name, plan, owner\_id, brand\_voice, cms\_config | One per client / website. RLS: members only |
| keyword\_lists | id, workspace\_id, name, source (csv/gsc/manual) | Groups keywords for batch processing |
| keywords | id, list\_id, keyword, volume, difficulty, intent, status | Status: queued/briefing/writing/review/published |
| serp\_data | id, keyword\_id, top10\_json, paa\_json, avg\_wc, content\_type, captured\_at | Cached for 7 days before re-fetch |
| briefs | id, keyword\_id, h1\_variants, structure\_json, voice\_profile, approved\_at | Editable before article generation begins |
| articles | id, brief\_id, sections\_json, assembled\_html, meta\_title, meta\_desc, schema\_json, quality\_score, status | Status: draft/in\_review/approved/published |
| publish\_events | id, article\_id, cms\_type, cms\_post\_id, published\_at, slug | Audit trail for every CMS publish |
| rank\_snapshots | id, article\_id, keyword\_id, position, captured\_at | Weekly snapshots, drives rank chart |
| refresh\_queue | id, article\_id, trigger\_reason, queued\_at, status | Feeds the content decay refresh pipeline |
| team\_members | id, workspace\_id, user\_id, role (admin/editor/viewer) | Per-workspace RBAC |
| credit\_ledger | id, workspace\_id, event\_type, credits\_delta, article\_id, created\_at | Full audit trail for all credit usage |

# **7\. Pricing & Monetisation Model**

## **7.1  Subscription Plans**

|  | Starter | Pro | Agency |
| :---- | :---- | :---- | :---- |
| Price | $49/mo | $149/mo | $399/mo |
| Articles included/mo | 20 | 100 | 500 |
| Workspaces | 1 | 3 | Unlimited |
| Team seats | 1 | 3 | 10 |
| CMS integrations | WordPress only | WP \+ Webflow \+ Ghost | All \+ Contentful |
| Rank tracking | No | Yes | Yes |
| Auto content refresh | No | Yes | Yes |
| AI image gen (DALL-E) | No | No | Yes |
| Topical cluster builder | No | Yes | Yes |
| Competitor gap analysis | No | No | Yes |
| White-label reports | No | No | Yes |
| API access | No | No | Yes |
| Custom prompt templates | No | No | Yes |
| Overage rate | $2.40/article | $1.80/article | $1.20/article |

## **7.2  Article Credit Top-Up Packs**

Available to all plans when monthly allowance is exhausted. Charged separately to the subscription. Stripe usage-based billing.

| Pack | Credits | Price | Cost/article |
| :---- | :---- | :---- | :---- |
| Starter pack | 10 articles | $24 | $2.40 |
| Growth pack | 50 articles | $90 | $1.80 |
| Scale pack | 200 articles | $280 | $1.40 |
| Agency pack | 500 articles | $600 | $1.20 |

## **7.3  Unit Economics**

| Cost component | Per article | Notes |
| :---- | :---- | :---- |
| Claude API (Sonnet 4, \~6k tokens total) | $0.08 | Multi-pass: 5–7 API calls per article |
| DataForSEO SERP analysis | $0.03 | 10 results \+ PAA \+ related searches |
| DataForSEO competitor fetch (3 URLs) | $0.02 | Content extraction per competitor page |
| Unsplash image (free tier) | $0.00 | Free API, auto-selected |
| Infrastructure (Vercel \+ Supabase \+ Inngest) | $0.01 | Amortised at 50k articles/mo |
| Total COGS per article | $0.14 | Rounds to $0.15 with buffer |
| Revenue per article (Starter included) | $2.45 | $49 ÷ 20 articles |
| Gross margin (Starter plan) | \~94% | COGS $0.15 vs $2.45 revenue |
| Revenue per article (Pro included) | $1.49 | $149 ÷ 100 articles |
| Gross margin (Pro plan) | \~90% | Remains excellent at scale |

# **8\. SEO Strategy & Go-to-Market**

## **8.1  Organic SEO — Own Site Strategy**

| Dogfooding | ContentEngine's own blog is built entirely using the product. 200 articles published in the first 90 days. Every post carries a 'Written with ContentEngine' badge linking to the homepage. The site is both a product demo and the primary SEO acquisition channel. |
| :---- | :---- |

### **Target Keyword Clusters**

| Keyword | Volume/mo | KD | Page type |
| :---- | :---- | :---- | :---- |
| SEO content brief generator free | 5,600 | Low | Free tool (entry point) |
| programmatic SEO tool | 3,400 | Low | Homepage / LP |
| AI article writer that publishes to WordPress | 3,300 | Low | Feature landing page |
| bulk article generator SEO | 4,100 | Low | Blog / LP |
| Jasper alternative for agencies | 3,100 | Low | Comparison page |
| Surfer SEO alternative | 4,800 | Medium | Comparison page |
| content at scale alternative | 1,900 | Low | Comparison page |
| how to produce 100 SEO articles per month | 6,200 | Medium | Blog cornerstone |
| AI content writing for SEO agencies | 2,800 | Low | Agency LP |
| Webflow content publishing automation | 1,400 | Low | CMS-specific LP |

## **8.2  Launch Sequence**

1. Week 1–2: Build waitlist landing page. Collect 500+ emails before launch via Product Hunt pre-launch, Twitter/X SEO community, and r/SEO Reddit post.

2. Week 3–4: Private beta with 20 hand-picked agencies. Collect testimonials, case studies, and bug reports. Document '10 articles published in 30 minutes' as hero demo.

3. Month 2: Public launch on Product Hunt. 'Show HN' post on Hacker News. Full SEO site live with 50 published blog posts (dogfooded).

4. Month 2–3: LinkedIn content series: 'How we published 200 SEO articles in 90 days using our own tool'. Screenshots of rank growth. Agency Facebook groups outreach.

5. Month 3–6: Outbound to SEO agencies via personalised cold email (dogfood the outbound AI agent idea from our other tools list). Target: agencies spending $300+/mo on content tools.

6. Month 6+: Affiliate program. $50 per referred paying customer. Targeted at SEO YouTubers and newsletter writers with 5k–50k audiences.

# **9\. Development Roadmap**

| Phase | Timeline | Deliverables |
| :---- | :---- | :---- |
| Phase 0 | Weeks 1–2 | Project scaffold: Next.js \+ Supabase \+ Inngest setup. Auth flow. Basic workspace creation. Stripe integration skeleton. |
| Phase 1 — MVP | Weeks 3–8 | Keyword CSV import. DataForSEO SERP analysis. AI brief generation. Multi-pass article writing engine. Quality score. TipTap review queue. WordPress publish. HTML/MD export. Meta \+ FAQ schema generation. |
| Phase 2 — Growth | Weeks 9–14 | GSC keyword import. Webflow \+ Ghost CMS. Rank tracking dashboard. Brand voice settings per workspace. Batch processing (20+ articles). Unsplash auto-images. Team seats \+ permissions. Scheduled publish. |
| Phase 3 — Agency | Weeks 15–22 | Unlimited workspaces. Topical cluster builder. Competitor content gap analysis. Content decay alerts \+ auto refresh. DALL-E image generation. White-label reports. Custom prompt templates. Shopify Blog \+ Contentful. |
| Phase 4 — Platform | Weeks 23–30 | Public API. Zapier integration. Internal auto-linking engine (crawls published URLs and suggests links on publish). EEAT mode. AI-to-human escalation rules. Analytics dashboard (traffic vs rank correlation). |

# **10\. Risks & Mitigations**

| Risk | Description | Severity | Mitigation |
| :---- | :---- | :---- | :---- |
| Google AI content penalty | Google devalues AI-generated content algorithmically | High | Human review gate is mandatory. Quality score minimum enforced. EEAT signals injected for YMYL. Dogfood blog demonstrates real ranking results. |
| Claude API cost increase | Anthropic raises claude-sonnet pricing | Medium | Cost is already \<$0.15/article. 2× increase still leaves 80%+ gross margin. Multi-provider fallback (OpenAI GPT-4o) in Phase 2\. |
| DataForSEO rate limits | High-volume users exhaust API quotas | Medium | Per-workspace concurrency limits. Aggressive SERP caching (7-day TTL). Pre-negotiated volume tier with DataForSEO at 10k+ queries/day. |
| CMS API breaking changes | WordPress / Webflow change their APIs | Low | Versioned API wrappers. Automated CI test suite pings all CMS connections nightly. User notified within 2 hours of any integration failure. |
| Job queue timeout failures | Long article batches fail mid-pipeline | High | Inngest durable functions — each step independently retriable. Failed jobs auto-retry 3× before alerting user. Partial completion preserved. |
| Content quality regression | Claude output quality drops after model updates | Medium | Quality score catches regressions before publish. Sample 5% of batches for human audit. Lock to specific model version in production. |
| Competitor replication | Surfer/Jasper ship full pipeline | Medium | 12–18 month execution head start. Switching cost from accumulated data (rank history, brand voice, content library) is high. Speed to agency market is the moat. |

# **11\. Success Metrics & OKRs**

## **Q1 Objectives (Months 1–3)**

* Objective: Ship a working MVP and validate core pipeline quality

* KR1: 20 beta agency users publishing at least 5 articles each through the tool

* KR2: Average article quality score above 72/100 without human editing

* KR3: Average end-to-end pipeline time (keyword → review queue) under 8 minutes

* KR4: Zero production pipeline failures due to timeout — all jobs complete via Inngest

## **Q2 Objectives (Months 4–6)**

* Objective: Reach $3,000 MRR and establish SEO acquisition flywheel

* KR1: 60+ paying customers across all plans

* KR2: Own blog at 8,000+ monthly organic visitors via dogfooded content

* KR3: WordPress, Webflow, and Ghost all live and stable (\>99.5% publish success rate)

* KR4: 3 published agency case studies showing measurable organic traffic lift

## **Q3–Q4 Objectives (Months 7–12)**

* Objective: Cross $15,000 MRR and build agency plan as primary revenue driver

* KR1: 225+ paying customers, 30%+ on Agency plan

* KR2: 50,000+ articles published through the platform total

* KR3: Topical cluster builder launched and used by 40%+ of Pro/Agency customers

* KR4: Gross margin maintained above 80% as article volume scales

* KR5: NPS above 45

# **12\. Appendix**

## **A. Glossary**

| Term | Definition |
| :---- | :---- |
| SERP | Search Engine Results Page — the page Google returns for a search query |
| PAA | People Also Ask — the expandable question boxes Google shows in search results |
| KD | Keyword Difficulty — a 0–100 score estimating how hard it is to rank for a keyword |
| EEAT | Experience, Expertise, Authoritativeness, Trustworthiness — Google's quality signals |
| JSON-LD | A structured data format used to add schema markup to HTML pages for Google rich results |
| Topical authority | The concept of owning a topic in Google's eyes by covering it comprehensively across many pages |
| Durable function | A background job that survives failures and can resume from the last completed step (Inngest) |
| RLS | Row-Level Security — Supabase/Postgres feature that restricts data access at the database level |
| Multi-pass generation | Writing technique where each article section is a separate AI API call for quality and coherence |
| Content decay | The gradual loss of search rankings for a published article as competitors improve or SERP evolves |

## **B. Tool Cost Summary (Monthly at 10,000 Articles)**

| Service | Est. monthly cost | Notes |
| :---- | :---- | :---- |
| Claude API (Sonnet 4\) | $800 | 10k articles × $0.08 avg |
| DataForSEO (SERP \+ rank) | $500 | 10k SERP \+ 10k weekly rank checks |
| Vercel (Pro) | $20 | Stays cheap until 100k+ req/day |
| Supabase (Pro) | $25 | Free until 500MB DB |
| Inngest (Pro) | $100 | Job runs \+ concurrency |
| Resend | $20 | Email notifications |
| Stripe fees | \~2.9% of MRR | Transaction cost |
| Total infra (excl Stripe) | \~$1,465/mo | At 10k articles/mo output |

At 10,000 articles/month, if average revenue per article is $1.65 (blended across plans), gross revenue is $16,500/mo on $1,465 infra \= 91% gross margin before Stripe fees. This is what makes the business exceptionally scalable — COGS grow linearly with usage but revenue grows faster due to plan tiering.