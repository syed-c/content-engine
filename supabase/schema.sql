-- ContentEngine Database Schema - Updated
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- CORE TABLES
-- ============================================

-- Workspaces (one per client/website)
CREATE TABLE IF NOT EXISTS workspaces (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  plan TEXT DEFAULT 'starter' CHECK (plan IN ('starter', 'pro', 'agency')),
  owner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  brand_voice JSONB DEFAULT '{}',
  cms_config JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Team Members (per-workspace RBAC)
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role TEXT DEFAULT 'editor' CHECK (role IN ('admin', 'editor', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(workspace_id, user_id)
);

-- Keyword Lists (groups keywords for batch processing)
CREATE TABLE IF NOT EXISTS keyword_lists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  source TEXT DEFAULT 'manual' CHECK (source IN ('csv', 'gsc', 'manual')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Keywords
CREATE TABLE IF NOT EXISTS keywords (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  list_id UUID REFERENCES keyword_lists(id) ON DELETE CASCADE,
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE NOT NULL,
  keyword TEXT NOT NULL,
  target_url TEXT,
  priority INTEGER DEFAULT 1,
  volume INTEGER DEFAULT 0,
  difficulty INTEGER DEFAULT 0,
  intent TEXT DEFAULT 'informational',
  status TEXT DEFAULT 'queued' CHECK (status IN ('queued', 'analyzing', 'briefing', 'writing', 'review', 'published', 'failed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- SERP Data (cached for 7 days)
CREATE TABLE IF NOT EXISTS serp_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  keyword_id UUID REFERENCES keywords(id) ON DELETE CASCADE NOT NULL,
  top10_json JSONB DEFAULT '[]',
  paa_json JSONB DEFAULT '[]',
  avg_word_count INTEGER DEFAULT 0,
  content_type TEXT DEFAULT 'guide',
  related_searches_json JSONB DEFAULT '[]',
  featured_snippet TEXT,
  captured_at TIMESTAMPTZ DEFAULT NOW()
);

-- Briefs
CREATE TABLE IF NOT EXISTS briefs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  keyword_id UUID REFERENCES keywords(id) ON DELETE CASCADE NOT NULL,
  h1_variants JSONB DEFAULT '[]',
  target_word_count INTEGER DEFAULT 0,
  structure_json JSONB DEFAULT '[]',
  primary_keyword TEXT,
  secondary_keywords_json JSONB DEFAULT '[]',
  angle TEXT,
  cta TEXT,
  faq_questions_json JSONB DEFAULT '[]',
  internal_links_json JSONB DEFAULT '[]',
  voice_profile JSONB DEFAULT '{}',
  approved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Articles
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brief_id UUID REFERENCES briefs(id) ON DELETE CASCADE NOT NULL,
  keyword_id UUID REFERENCES keywords(id) ON DELETE CASCADE NOT NULL,
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE NOT NULL,
  sections_json JSONB DEFAULT '[]',
  assembled_html TEXT,
  meta_title TEXT,
  meta_desc TEXT,
  schema_json JSONB DEFAULT '{}',
  quality_score INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'in_review', 'approved', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Publish Events (audit trail)
CREATE TABLE IF NOT EXISTS publish_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE NOT NULL,
  cms_type TEXT NOT NULL,
  cms_post_id TEXT,
  cms_url TEXT,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  error_message TEXT
);

-- Rank Snapshots (weekly)
CREATE TABLE IF NOT EXISTS rank_snapshots (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE NOT NULL,
  keyword_id UUID REFERENCES keywords(id) ON DELETE CASCADE NOT NULL,
  position INTEGER,
  captured_at TIMESTAMPTZ DEFAULT NOW()
);

-- Refresh Queue
CREATE TABLE IF NOT EXISTS refresh_queue (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE NOT NULL,
  trigger_reason TEXT,
  queued_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed'))
);

-- Credit Ledger
CREATE TABLE IF NOT EXISTS credit_ledger (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE NOT NULL,
  event_type TEXT NOT NULL,
  credits_delta INTEGER NOT NULL,
  article_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- AUTO-CREATE DEFAULT WORKSPACE & TEAM MEMBER TRIGGER
-- ============================================

-- Drop existing function and trigger if exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  workspace_id UUID;
BEGIN
  -- Create default workspace
  INSERT INTO workspaces (name, owner_id, plan)
  VALUES (COALESCE(NEW.raw_user_meta_data->>'name', 'My Workspace'), NEW.id, 'starter')
  RETURNING id INTO workspace_id;
  
  -- Add owner as admin in team_members
  INSERT INTO team_members (workspace_id, user_id, role)
  VALUES (workspace_id, NEW.id, 'admin');
  
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log error but don't fail the signup
  RAISE WARNING 'handle_new_user error: %', SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- ROW-LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE keyword_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE keywords ENABLE ROW LEVEL SECURITY;
ALTER TABLE serp_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE briefs ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE publish_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE rank_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE refresh_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE credit_ledger ENABLE ROW LEVEL SECURITY;

-- Workspaces: owner can access
CREATE POLICY "Owners can access their workspaces" ON workspaces
  FOR ALL USING (auth.uid() = owner_id);

-- Team members: can access their workspaces
CREATE POLICY "Team members can access workspaces" ON workspaces
  FOR ALL USING (
    id IN (SELECT workspace_id FROM team_members WHERE user_id = auth.uid())
  );

-- Keywords: workspace members
CREATE POLICY "Team can access keywords" ON keywords
  FOR ALL USING (
    workspace_id IN (SELECT workspace_id FROM team_members WHERE user_id = auth.uid())
  );

-- Keyword lists: workspace members
CREATE POLICY "Team can access keyword lists" ON keyword_lists
  FOR ALL USING (
    workspace_id IN (SELECT workspace_id FROM team_members WHERE user_id = auth.uid())
  );

-- SERP data: via keywords
CREATE POLICY "Team can access serp data" ON serp_data
  FOR ALL USING (
    keyword_id IN (SELECT id FROM keywords WHERE workspace_id IN (SELECT workspace_id FROM team_members WHERE user_id = auth.uid()))
  );

-- Briefs: via keywords
CREATE POLICY "Team can access briefs" ON briefs
  FOR ALL USING (
    keyword_id IN (SELECT id FROM keywords WHERE workspace_id IN (SELECT workspace_id FROM team_members WHERE user_id = auth.uid()))
  );

-- Articles: workspace members
CREATE POLICY "Team can access articles" ON articles
  FOR ALL USING (
    workspace_id IN (SELECT workspace_id FROM team_members WHERE user_id = auth.uid())
  );

-- Publish events: via articles
CREATE POLICY "Team can access publish events" ON publish_events
  FOR ALL USING (
    article_id IN (SELECT id FROM articles WHERE workspace_id IN (SELECT workspace_id FROM team_members WHERE user_id = auth.uid()))
  );

-- Rank snapshots: via articles
CREATE POLICY "Team can access rank snapshots" ON rank_snapshots
  FOR ALL USING (
    article_id IN (SELECT id FROM articles WHERE workspace_id IN (SELECT workspace_id FROM team_members WHERE user_id = auth.uid()))
  );

-- Refresh queue: via articles
CREATE POLICY "Team can access refresh queue" ON refresh_queue
  FOR ALL USING (
    article_id IN (SELECT id FROM articles WHERE workspace_id IN (SELECT workspace_id FROM team_members WHERE user_id = auth.uid()))
  );

-- Credit ledger: workspace members
CREATE POLICY "Team can access credit ledger" ON credit_ledger
  FOR ALL USING (
    workspace_id IN (SELECT workspace_id FROM team_members WHERE user_id = auth.uid())
  );

-- Team members: themselves
CREATE POLICY "Users can manage their team memberships" ON team_members
  FOR ALL USING (auth.uid() = user_id);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_keywords_workspace ON keywords(workspace_id);
CREATE INDEX IF NOT EXISTS idx_keywords_status ON keywords(status);
CREATE INDEX IF NOT EXISTS idx_keywords_list ON keywords(list_id);
CREATE INDEX IF NOT EXISTS idx_articles_workspace ON articles(workspace_id);
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_briefs_keyword ON briefs(keyword_id);
CREATE INDEX IF NOT EXISTS idx_serp_data_keyword ON serp_data(keyword_id);
CREATE INDEX IF NOT EXISTS idx_rank_snapshots_article ON rank_snapshots(article_id);
CREATE INDEX IF NOT EXISTS idx_rank_snapshots_captured ON rank_snapshots(captured_at);
CREATE INDEX IF NOT EXISTS idx_publish_events_article ON publish_events(article_id);
CREATE INDEX IF NOT EXISTS idx_credit_ledger_workspace ON credit_ledger(workspace_id);