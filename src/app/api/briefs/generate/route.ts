import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { generateBrief } from '@/lib/ai/groq'

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { keyword_id, keyword, voice_profile } = body

    if (!keyword_id || !keyword) {
      return NextResponse.json({ error: 'keyword_id and keyword are required' }, { status: 400 })
    }

    await supabase
      .from('keywords')
      .update({ status: 'briefing' })
      .eq('id', keyword_id)

    const { data: serpData } = await supabase
      .from('serp_data')
      .select('*')
      .eq('keyword_id', keyword_id)
      .single()

    const serpSummary = serpData ? `
      Top 10 results average word count: ${serpData.avg_word_count}
      Content type: ${serpData.content_type}
      People Also Ask: ${serpData.paa_json?.join(', ') || 'None'}
      Related searches: ${serpData.related_searches_json?.join(', ') || 'None'}
      Featured snippet: ${serpData.featured_snippet || 'None'}
    ` : ''

    const brandVoice = voice_profile?.tone ? `
      Brand voice: ${voice_profile.tone}
      ${voice_profile.style ? `Style: ${voice_profile.style}` : ''}
    ` : ''

    const prompt = `
Generate a content brief for the keyword "${keyword}".

${serpSummary}
${brandVoice}

Output ONLY valid JSON with this structure:
{
  "h1_variants": ["variant1", "variant2", "variant3"],
  "target_word_count": number,
  "sections": [{"h2": "title", "instruction": "writing instruction", "word_count": number}],
  "primary_keyword": "keyword",
  "secondary_keywords": ["keyword1", "keyword2"],
  "angle": "differentiation angle",
  "cta": "recommended call to action",
  "faq_questions": ["question1", "question2"],
  "internal_links": ["url1", "url2"]
}
`

    const briefJson = await generateBrief(prompt)
    let briefData

    try {
      briefData = JSON.parse(briefJson)
    } catch {
      const jsonMatch = briefJson.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        briefData = JSON.parse(jsonMatch[0])
      } else {
        throw new Error('Failed to parse brief JSON')
      }
    }

    const { data: brief, error: briefError } = await supabase
      .from('briefs')
      .insert({
        keyword_id,
        h1_variants: briefData.h1_variants || [],
        target_word_count: briefData.target_word_count || 1500,
        structure_json: briefData.sections || [],
        primary_keyword: briefData.primary_keyword || keyword,
        secondary_keywords_json: briefData.secondary_keywords || [],
        angle: briefData.angle,
        cta: briefData.cta,
        faq_questions_json: briefData.faq_questions || [],
        internal_links_json: briefData.internal_links || [],
        voice_profile: voice_profile || {}
      })
      .select()
      .single()

    if (briefError) throw briefError

    await supabase
      .from('keywords')
      .update({ status: 'writing' })
      .eq('id', keyword_id)

    return NextResponse.json(brief)
  } catch (error: any) {
    console.error('Error generating brief:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}