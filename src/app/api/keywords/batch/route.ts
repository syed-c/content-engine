import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { keyword_ids, workspace_id } = body

    if (!workspace_id || !keyword_ids || !Array.isArray(keyword_ids)) {
      return NextResponse.json({ error: 'workspace_id and keyword_ids array are required' }, { status: 400 })
    }

    const { data: keywords, error: keywordsError } = await supabase
      .from('keywords')
      .select('id, keyword')
      .in('id', keyword_ids)
      .eq('status', 'queued')

    if (keywordsError) throw keywordsError

    const results = []

    for (const kw of keywords || []) {
      try {
        results.push({
          keyword_id: kw.id,
          keyword: kw.keyword,
          status: 'processing'
        })
      } catch (err) {
        results.push({
          keyword_id: kw.id,
          keyword: kw.keyword,
          status: 'failed',
          error: (err as Error).message
        })
      }
    }

    return NextResponse.json({ 
      queued: results.filter((r: any) => r.status === 'processing').length,
      results 
    })
  } catch (error: any) {
    console.error('Error batch processing keywords:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}