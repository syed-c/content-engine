import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { getKeywordData } from '@/lib/seo/dataforseo'

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { article_ids } = body

    if (!article_ids || !Array.isArray(article_ids)) {
      return NextResponse.json({ error: 'article_ids array required' }, { status: 400 })
    }

    const results = []

    for (const article_id of article_ids) {
      // Get article with keyword
      const { data: article } = await supabase
        .from('articles')
        .select(`
          id,
          keywords(keyword),
          workspaces(cms_config)
        `)
        .eq('id', article_id)
        .single()

      if (!article?.keywords?.keyword) continue

      try {
        // Get current rank from DataForSEO
        const keywordData = await getKeywordData(article.keywords.keyword)
        
        // Get last snapshot
        const { data: lastSnapshot } = await supabase
          .from('rank_snapshots')
          .select('position')
          .eq('article_id', article_id)
          .order('captured_at', { ascending: false })
          .limit(1)
          .single()

        const currentPosition = keywordData.position || null
        const previousPosition = lastSnapshot?.position

        // Calculate movement
        let movement = 0
        if (previousPosition && currentPosition) {
          movement = previousPosition - currentPosition // Positive = improvement
        }

        // Save snapshot
        const { data: snapshot } = await supabase
          .from('rank_snapshots')
          .insert({
            article_id,
            keyword_id: article.keywords.id,
            position: currentPosition,
            captured_at: new Date().toISOString()
          })
          .select()
          .single()

        results.push({
          article_id,
          keyword: article.keywords.keyword,
          position: currentPosition,
          movement,
          previous_position: previousPosition,
          snapshot
        })
      } catch (error) {
        results.push({
          article_id,
          keyword: article.keywords.keyword,
          error: 'Failed to fetch rank'
        })
      }
    }

    return NextResponse.json({ success: true, results })
  } catch (error: any) {
    console.error('Error tracking ranks:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const workspaceId = searchParams.get('workspace_id')
    const articleId = searchParams.get('article_id')

    if (!workspaceId && !articleId) {
      return NextResponse.json({ error: 'workspace_id or article_id required' }, { status: 400 })
    }

    let query = supabase
      .from('rank_snapshots')
      .select(`
        id,
        position,
        captured_at,
        articles!inner(
          id,
          workspace_id,
          keywords(keyword)
        )
      `)
      .order('captured_at', { ascending: false })

    if (articleId) {
      query = query.eq('article_id', articleId)
    } else if (workspaceId) {
      query = query.eq('articles.workspace_id', workspaceId)
    }

    const { data, error } = await query.limit(100)

    if (error) throw error

    // Transform data
    const transformed = (data || []).map((s: any) => ({
      article_id: s.articles?.id,
      keyword: s.articles?.keywords?.keyword,
      position: s.position,
      captured_at: s.captured_at
    }))

    return NextResponse.json(transformed)
  } catch (error: any) {
    console.error('Error fetching rank history:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
