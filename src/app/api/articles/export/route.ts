import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const articleId = searchParams.get('article_id')
    const format = searchParams.get('format') || 'html' // html or markdown

    if (!articleId) {
      return NextResponse.json({ error: 'article_id is required' }, { status: 400 })
    }

    const { data: article, error } = await supabase
      .from('articles')
      .select(`
        *,
        keywords(keyword),
        briefs(h1_variants, primary_keyword, secondary_keywords_json, cta, faq_questions_json)
      `)
      .eq('id', articleId)
      .single()

    if (error || !article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    let content = ''
    const filename = `${article.keywords?.keyword || 'article'}-${article.id.slice(0, 8)}`

    if (format === 'markdown') {
      // Convert HTML to Markdown with frontmatter
      const frontmatter = `---
title: "${article.meta_title || article.briefs?.h1_variants?.[0] || ''}"
description: "${article.meta_desc || ''}"
keywords: ${JSON.stringify([article.briefs?.primary_keyword, ...(article.briefs?.secondary_keywords_json || [])])}
date: ${article.created_at}
---

`
      let html = article.assembled_html || ''
      
      // Basic HTML to Markdown conversion
      html = html.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
      html = html.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
      html = html.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
      html = html.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
      html = html.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
      html = html.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
      html = html.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
      html = html.replace(/<ul[^>]*>(.*?)<\/ul>/gi, '$1')
      html = html.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
      html = html.replace(/<[^>]+>/g, '') // Remove remaining tags
      html = html.replace(/&nbsp;/g, ' ')
      html = html.replace(/&amp;/g, '&')
      html = html.replace(/&lt;/g, '<')
      html = html.replace(/&gt;/g, '>')
      
      content = frontmatter + html.trim()
    } else {
      // HTML format with meta tags
      const metaTags = `
<!-- SEO Meta -->
<title>${article.meta_title || ''}</title>
<meta name="description" content="${article.meta_desc || ''}">
<meta name="keywords" content="${[article.briefs?.primary_keyword, ...(article.briefs?.secondary_keywords_json || [])].join(', ')}">

`
      content = metaTags + (article.assembled_html || '')
    }

    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': format === 'markdown' ? 'text/markdown' : 'text/html',
        'Content-Disposition': `attachment; filename="${filename}.${format === 'markdown' ? 'md' : 'html'}"`
      }
    })
  } catch (error: any) {
    console.error('Error exporting article:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
