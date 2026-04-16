import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { getSERPData, getKeywordData } from '@/lib/seo/dataforseo'
import { generateBrief, generateArticleSection, generateIntro, generateFAQ, generateConclusion, generateMetaContent } from '@/lib/ai/groq'

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { keyword_id, workspace_id, voice_profile } = body

    if (!keyword_id || !workspace_id) {
      return NextResponse.json({ error: 'keyword_id and workspace_id are required' }, { status: 400 })
    }

    const { data: keyword, error: keywordError } = await supabase
      .from('keywords')
      .select('keyword, target_url')
      .eq('id', keyword_id)
      .single()

    if (keywordError || !keyword) throw new Error('Keyword not found')

    await supabase.from('keywords').update({ status: 'analyzing' }).eq('id', keyword_id)

    const serpData = await getSERPData(keyword.keyword)
    const keywordData = await getKeywordData(keyword.keyword)

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

    const serpSummary = `
      Top 10 results average word count: ${serpData.avg_word_count}
      Content type: ${serpData.content_type}
      People Also Ask: ${serpData.people_also_ask?.join(', ') || 'None'}
      Featured snippet: ${serpData.featured_snippet || 'None'}
    `

    const brandVoice = voice_profile?.tone ? `\nBrand voice: ${voice_profile.tone}` : ''

    const briefPrompt = `
Generate a content brief for the keyword "${keyword.keyword}".

${serpSummary}${brandVoice}

Output ONLY valid JSON:
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

    const briefJson = await generateBrief(briefPrompt)
    let briefData

    try {
      briefData = JSON.parse(briefJson)
    } catch {
      const jsonMatch = briefJson.match(/\{[\s\S]*\}/)
      if (jsonMatch) briefData = JSON.parse(jsonMatch[0])
      else throw new Error('Failed to parse brief JSON')
    }

    const { data: brief, error: briefError } = await supabase
      .from('briefs')
      .insert({
        keyword_id,
        h1_variants: briefData.h1_variants || [],
        target_word_count: briefData.target_word_count || 1500,
        structure_json: briefData.sections || [],
        primary_keyword: briefData.primary_keyword || keyword.keyword,
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

    await supabase.from('keywords').update({ status: 'writing', volume: keywordData.volume, difficulty: keywordData.difficulty }).eq('id', keyword_id)

    const primaryKeyword = briefData.primary_keyword || keyword.keyword
    const secondaryKeywords = briefData.secondary_keywords || []
    const sections = briefData.sections || []
    const faqQuestions = briefData.faq_questions || []
    const cta = briefData.cta || 'Contact us for more information'

    const sectionsContent: { h2: string; content: string }[] = []
    const avoidPhrases: string[] = []

    for (const section of sections) {
      const sectionContent = await generateArticleSection(
        section.instruction,
        sectionsContent.map(s => s.content).join('\n\n'),
        [primaryKeyword, ...secondaryKeywords],
        avoidPhrases
      )

      sectionsContent.push({ h2: section.h2, content: sectionContent })

      const phrases = sectionContent.split(/[.!?]/).slice(0, 2)
      avoidPhrases.push(...phrases.filter(p => p.length > 20))
    }

    const intro = await generateIntro(
      primaryKeyword,
      sectionsContent.map(s => `${s.h2}: ${s.content.slice(0, 200)}`).join('\n')
    )

    const faqHtml = faqQuestions.length > 0
      ? await generateFAQ(faqQuestions, sectionsContent.map(s => s.content).join('\n'))
      : ''

    const conclusion = await generateConclusion(
      primaryKeyword,
      cta,
      sectionsContent.map(s => s.content).join('\n\n')
    )

    let fullHtml = `<h1>${brief.h1_variants?.[0] || primaryKeyword}</h1>\n\n`
    fullHtml += `<p>${intro}</p>\n\n`

    for (const section of sectionsContent) {
      fullHtml += `<h2>${section.h2}</h2>\n<p>${section.content}</p>\n\n`
    }

    if (faqHtml) {
      fullHtml += `<h2>Frequently Asked Questions</h2>\n${faqHtml}\n\n`
    }

    fullHtml += `<h2>Conclusion</h2>\n<p>${conclusion}</p>`

    const metaTitle = await generateMetaContent(fullHtml, primaryKeyword, 'title')
    const metaDesc = await generateMetaContent(fullHtml, primaryKeyword, 'description')

    const qualityScore = calculateQualityScore(fullHtml, primaryKeyword, sections.length, faqQuestions.length)

    const schemaJson = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: metaTitle,
      description: metaDesc,
      datePublished: new Date().toISOString()
    }

    const { data: article, error: articleError } = await supabase
      .from('articles')
      .insert({
        brief_id: brief.id,
        keyword_id,
        workspace_id,
        sections_json: sectionsContent,
        assembled_html: fullHtml,
        meta_title: metaTitle.slice(0, 60),
        meta_desc: metaDesc.slice(0, 160),
        schema_json: schemaJson,
        quality_score: qualityScore,
        status: 'in_review'
      })
      .select()
      .single()

    if (articleError) throw articleError

    await supabase.from('keywords').update({ status: 'review' }).eq('id', keyword_id)

    return NextResponse.json({
      article,
      brief,
      serp_data: storedSerp,
      quality_score: qualityScore
    })
  } catch (error: any) {
    console.error('Error in pipeline:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

function calculateQualityScore(html: string, keyword: string, sectionsCount: number, faqCount: number): number {
  let score = 50
  const wordCount = html.split(/\s+/).length
  if (wordCount >= 800) score += 10
  if (wordCount >= 1500) score += 10

  const keywordLower = keyword.toLowerCase()
  const first100Words = html.split(/\s+/).slice(0, 100).join(' ').toLowerCase()
  if (first100Words.includes(keywordLower)) score += 10

  const contentLower = html.toLowerCase()
  const keywordDensity = (contentLower.match(new RegExp(keywordLower, 'g')) || []).length / (wordCount / 100)
  if (keywordDensity >= 0.8 && keywordDensity <= 1.8) score += 10

  if (sectionsCount >= 3) score += 10
  if (faqCount >= 3) score += 5

  const hasH1 = html.includes('<h1')
  const hasH2 = html.includes('<h2')
  if (hasH1 && hasH2) score += 5

  return Math.min(100, score)
}