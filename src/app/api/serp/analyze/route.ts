import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { getSERPData, getKeywordData } from '@/lib/seo/dataforseo'

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { keyword_id, keyword } = body

    if (!keyword_id || !keyword) {
      return NextResponse.json({ error: 'keyword_id and keyword are required' }, { status: 400 })
    }

    await supabase
      .from('keywords')
      .update({ status: 'analyzing' })
      .eq('id', keyword_id)

    const serpData = await getSERPData(keyword)
    const keywordData = await getKeywordData(keyword)

    const { data: storedSerp, error: serpError } = await supabase
      .from('serp_data')
      .insert({
        keyword_id,
        top10_json: serpData.results,
        paa_json: serpData.people_also_ask,
        avg_word_count: serpData.avg_word_count,
        content_type: serpData.content_type,
        related_searches_json: serpData.related_searches,
        featured_snippet: serpData.featured_snippet
      })
      .select()
      .single()

    if (serpError) throw serpError

    await supabase
      .from('keywords')
      .update({ 
        status: 'briefing',
        volume: keywordData.volume,
        difficulty: keywordData.difficulty
      })
      .eq('id', keyword_id)

    return NextResponse.json({
      serp_data: storedSerp,
      keyword_data: keywordData
    })
  } catch (error: any) {
    console.error('Error analyzing SERP:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}