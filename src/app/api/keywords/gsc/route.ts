import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

// Google Search Console API integration
// Note: Requires OAuth2 setup with Google API Console
const GSC_API_BASE = 'https://searchconsole.googleapis.com/v1'

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const workspaceId = searchParams.get('workspace_id')
    const listId = searchParams.get('list_id')

    if (!workspaceId) {
      return NextResponse.json({ error: 'workspace_id required' }, { status: 400 })
    }

    // This would typically use OAuth tokens stored per workspace
    // For now, return instructions for setup
    return NextResponse.json({
      status: 'not_configured',
      message: 'GSC integration requires OAuth2 setup',
      instructions: [
        '1. Go to Google Cloud Console',
        '2. Enable Search Console API',
        '3. Create OAuth2 credentials',
        '4. Store tokens in workspace settings'
      ]
    })
  } catch (error: any) {
    console.error('Error with GSC:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// Mock GSC data for demo - in production, replace with actual GSC API calls
async function fetchGSCData(accessToken: string, siteUrl: string, startDate: string, endDate: string) {
  // This is a placeholder for actual GSC API integration
  // In production: POST to {GSC_API_BASE}/searchAnalytics/query
  
  // Return mock data structure
  return {
    queries: [
      { keyword: 'example keyword 1', clicks: 150, impressions: 5000, ctr: 0.03, position: 12 },
      { keyword: 'example keyword 2', clicks: 89, impressions: 3200, ctr: 0.028, position: 15 },
      { keyword: 'example keyword 3', clicks: 67, impressions: 2100, ctr: 0.032, position: 18 },
    ]
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { workspace_id, list_id, access_token, site_url, start_date, end_date, min_impressions, max_position } = body

    if (!workspace_id || !site_url) {
      return NextResponse.json({ error: 'workspace_id and site_url required' }, { status: 400 })
    }

    // Default date range: last 28 days
    const startDate = start_date || new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    const endDate = end_date || new Date().toISOString().split('T')[0]
    const minImpressions = min_impressions || 100
    const maxPosition = max_position || 20 // Only "low hanging fruit"

    // Fetch GSC data
    const gscData = await fetchGSCData(access_token, site_url, startDate, endDate)

    // Filter and transform keywords
    const keywordsToImport = gscData.queries
      .filter((q: any) => q.impressions >= minImpressions && q.position <= maxPosition)
      .map((q: any) => ({
        keyword: q.keyword,
        list_id,
        workspace_id,
        volume: q.impressions,
        difficulty: Math.round((1 - q.ctr) * 100), // Rough estimate
        intent: q.position <= 3 ? 'high' : q.position <= 10 ? 'medium' : 'low',
        target_url: site_url,
        status: 'queued',
        source_data: {
          clicks: q.clicks,
          impressions: q.impressions,
          ctr: q.ctr,
          position: q.position,
          source: 'gsc'
        }
      }))

    if (keywordsToImport.length === 0) {
      return NextResponse.json({ 
        message: 'No keywords found matching criteria',
        imported: 0 
      })
    }

    // Bulk insert keywords
    const { data, error } = await supabase
      .from('keywords')
      .insert(keywordsToImport)
      .select()

    if (error) throw error

    return NextResponse.json({
      success: true,
      imported: data.length,
      keywords: data
    })
  } catch (error: any) {
    console.error('Error importing from GSC:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
