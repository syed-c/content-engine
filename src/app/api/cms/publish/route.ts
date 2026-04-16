import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

// Webflow API functions
async function publishToWebflow(config: any, article: any) {
  const { siteId, collectionId, apiToken } = config
  
  const payload = {
    fields: {
      name: article.meta_title || article.briefs?.h1_variants?.[0] || 'Untitled',
      slug: (article.meta_title || 'article').toLowerCase().replace(/\s+/g, '-').slice(0, 50),
      content: article.assembled_html || '',
      seoTitle: article.meta_title || '',
      seoDescription: article.meta_desc || ''
    }
  }

  const response = await fetch(
    `https://api.webflow.com/v2/sites/${siteId}/collections/${collectionId}/items`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  )

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Webflow API error: ${response.status} - ${error}`)
  }

  return response.json()
}

// Ghost API functions  
async function publishToGhost(config: any, article: any) {
  const { url, adminKey } = config
  
  const payload = {
    posts: [{
      title: article.meta_title || article.briefs?.h1_variants?.[0] || 'Untitled',
      html: article.assembled_html || '',
      meta_title: article.meta_title || '',
      meta_description: article.meta_desc || '',
      tags: (article.briefs?.secondary_keywords_json || []).map((k: string) => ({ name: k })),
      feature_image: article.featured_image_url || null,
      status: 'draft'
    }]
  }

  const response = await fetch(`${url}/ghost/api/admin/posts/`, {
    method: 'POST',
    headers: {
      'Authorization': `Ghost ${adminKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Ghost API error: ${response.status} - ${error}`)
  }

  return response.json()
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { article_id, cms_type, publish_mode = 'draft' } = body

    if (!article_id || !cms_type) {
      return NextResponse.json({ error: 'article_id and cms_type required' }, { status: 400 })
    }

    // Get article
    const { data: article, error } = await supabase
      .from('articles')
      .select(`
        *,
        keywords(keyword, target_url),
        briefs(h1_variants, primary_keyword, secondary_keywords_json, cta, faq_questions_json),
        workspaces(cms_config)
      `)
      .eq('id', article_id)
      .single()

    if (error || !article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    const cmsConfig = article.workspaces?.cms_config
    let result

    switch (cms_type) {
      case 'webflow':
        if (!cmsConfig?.siteId || !cmsConfig?.collectionId || !cmsConfig?.apiToken) {
          return NextResponse.json({ error: 'Webflow not configured' }, { status: 400 })
        }
        result = await publishToWebflow(cmsConfig, article)
        break
        
      case 'ghost':
        if (!cmsConfig?.url || !cmsConfig?.adminKey) {
          return NextResponse.json({ error: 'Ghost not configured' }, { status: 400 })
        }
        result = await publishToGhost(cmsConfig, article)
        break
        
      default:
        return NextResponse.json({ error: `Unsupported CMS: ${cms_type}` }, { status: 400 })
    }

    // Record publish event
    await supabase.from('publish_events').insert({
      article_id,
      cms_type,
      cms_post_id: result.id?.toString() || result.posts?.[0]?.id?.toString(),
      cms_url: result.url || result.link || null,
      published_at: new Date().toISOString()
    })

    // Update article status
    await supabase
      .from('articles')
      .update({ 
        status: publish_mode === 'publish' ? 'published' : 'in_review',
        updated_at: new Date().toISOString()
      })
      .eq('id', article_id)

    return NextResponse.json({ success: true, result })
  } catch (error: any) {
    console.error('Error publishing to CMS:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
