-- ContentEngine - Additional Schema Fields
-- Run this in Supabase SQL Editor to add missing fields

-- Add featured_image fields to articles
ALTER TABLE articles 
ADD COLUMN IF NOT EXISTS featured_image_url TEXT,
ADD COLUMN IF NOT EXISTS featured_image_meta JSONB DEFAULT '{}';

-- Add source_data field to keywords (for GSC import data)
ALTER TABLE keywords 
ADD COLUMN IF NOT EXISTS source_data JSONB DEFAULT '{}';

-- Add scheduled_at field to articles for scheduled publishing
ALTER TABLE articles 
ADD COLUMN IF NOT EXISTS scheduled_at TIMESTAMPTZ;

-- Add refresh-related fields
ALTER TABLE articles 
ADD COLUMN IF NOT EXISTS last_refreshed_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS refresh_count INTEGER DEFAULT 0;

-- Create index for scheduled publishing
CREATE INDEX IF NOT EXISTS idx_articles_scheduled 
ON articles(scheduled_at) 
WHERE status = 'approved';

-- Create index for rank tracking
CREATE INDEX IF NOT EXISTS idx_rank_snapshots_keyword_position 
ON rank_snapshots(keyword_id, position);
