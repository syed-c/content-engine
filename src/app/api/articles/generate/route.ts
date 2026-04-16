import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { generateArticleSection, generateIntro, generateFAQ, generateConclusion, generateMetaContent } from '@/lib/ai/groq'

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { brief_id, keyword_id, workspace_id } = body

    if (!brief_id || !keyword_id || !workspace_id) {
      return NextResponse.json({ error: 'brief_id, keyword_id, and workspace_id are required' }, { status: 400 })
    }

    const { data: brief, error: briefError } = await supabase
      .from('briefs')
      .select('*')
      .eq('id', brief_id)
      .single()

    if (briefError || !brief) throw new Error('Brief not found')

    const { data: keyword, error: keywordError } = await supabase
      .from('keywords')
      .select('keyword')
      .eq('id', keyword_id)
      .single()

    if (keywordError || !keyword) throw new Error('Keyword not found')

    const { data: serpData } = await supabase
      .from('serp_data')
      .select('paa_json, featured_snippet')
      .eq('keyword_id', keyword_id)
      .single()

    const primaryKeyword = brief.primary_keyword || keyword.keyword
    const secondaryKeywords = brief.secondary_keywords_json || []
    const sections = brief.structure_json || []
    const faqQuestions = brief.faq_questions_json || []
    const cta = brief.cta || 'Contact us for more information'

    const sectionsContent: { h2: string; content: string }[] = []
    const avoidPhrases: string[] = []

    for (const section of sections) {
      const sectionContent = await generateArticleSection(
        section.instruction,
        sectionsContent.map(s => s.content).join('\n\n'),
        [primaryKeyword, ...secondaryKeywords],
        avoidPhrases
      )

      sectionsContent.push({
        h2: section.h2,
        content: sectionContent
      })

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
      author: {
        '@type': 'Person',
        name: 'ContentEngine'
      },
      datePublished: new Date().toISOString()
    }

    if (faqQuestions.length > 0) {
      (schemaJson as any).mainEntity = faqQuestions.map((q: string, i: number) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faqHtml.match(new RegExp(`<p>(.*?)</p>`, 'g'))?.[i]?.replace(/<[^>]*>/g, '') || ''
        }
      }))
    }

    const { data: article, error: articleError } = await supabase
      .from('articles')
      .insert({
        brief_id,
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

    await supabase
      .from('keywords')
      .update({ status: 'review' })
      .eq('id', keyword_id)

    return NextResponse.json(article)
  } catch (error: any) {
    console.error('Error generating article:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

function calculateQualityScore(html: string, keyword: string, sectionsCount: number, faqCount: number): number {
  let score = 50

  const wordCount = html.split(/\s+/).length
  if (wordCount >= 800) score += 10
  if (wordCount >= 1500) score += 10

  const keywordLower = keyword.toLowerCase()
  const contentLower = html.toLowerCase()
  
  const first100Words = html.split(/\s+/).slice(0, 100).join(' ').toLowerCase()
  if (first100Words.includes(keywordLower)) score += 10

  const keywordDensity = (contentLower.match(new RegExp(keywordLower, 'g')) || []).length / (wordCount / 100)
  if (keywordDensity >= 0.8 && keywordDensity <= 1.8) score += 10
  else if (keywordDensity > 0.5 && keywordDensity < 2.5) score += 5

  if (sectionsCount >= 3) score += 10
  if (faqCount >= 3) score += 5

  const hasH1 = html.includes('<h1')
  const hasH2 = html.includes('<h2')
  if (hasH1 && hasH2) score += 5

  return Math.min(100, score)
}