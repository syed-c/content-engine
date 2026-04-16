import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

interface WordPressConfig {
  url: string
  username: string
  password: string
}

async function publishToWordPress(config: WordPressConfig, article: any) {
  const { url, username, password } = config
  
  // Build the article content
  let content = article.assembled_html || ''
  
  // Add featured image if available
  const featuredImage = article.featured_image_url
  
  // Prepare WP REST API payload
  const wpData: any = {
    title: article.meta_title || article.briefs?.h1_variants?.[0] || 'Untitled',
    content: content,
    status: 'draft', // Publish as draft first for review
  }

  if (article.meta_desc) {
    wpData.excerpt = { raw: article.meta_desc }
  }

  // Add custom fields for Yoast/RankMath
  if (article.meta_title) {
    wpData.meta = {
      _yoast_wpseo_title: article.meta_title,
      _yoast_wpseo_metadesc: article.meta_desc,
      _yoast_wpseo_focuskw: article.briefs?.primary_keyword
    }
  }

  // Add featured image
  if (featuredImage) {
    wpData.featured_media = featuredImage
  }

  // Make the API call
  const response = await fetch(`${url}/wp-json/wp/v2/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
    },
    body: JSON.stringify(wpData)
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`WordPress API error: ${response.status} - ${error}`)
  }

  const post = await response.json()
  
  // If schema exists, add it as custom field
  if (article.schema_json) {
    await fetch(`${url}/wp-json/wp/v2/posts/${post.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
      },
      body: JSON.stringify({
        meta: {
          _yoast_wpseo_schema: JSON.stringify(article.schema_json)
        }
      })
    })
  }

  return post
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { article_id, publish_mode = 'draft', scheduled_at } = body

    if (!article_id) {
      return NextResponse.json({ error: 'article_id is required' }, { status: 400 })
    }

    // Get article with related data
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

    // Get workspace CMS config
    const cmsConfig = article.workspaces?.cms_config as WordPressConfig | undefined
    
    if (!cmsConfig?.url || !cmsConfig?.username || !cmsConfig?.password) {
      return NextResponse.json({ 
        error: 'WordPress not configured. Please configure CMS in settings.' 
      }, { status: 400 })
    }

    // Publish to WordPress
    const wpPost = await publishToWordPress(cmsConfig, article)

    // Record publish event
    const { data: publishEvent, error: publishError } = await supabase
      .from('publish_events')
      .insert({
        article_id,
        cms_type: 'wordpress',
        cms_post_id: wpPost.id.toString(),
        cms_url: `${cmsConfig.url}/?p=${wpPost.id}`,
        published_at: scheduled_at || new Date().toISOString()
      })
      .select()
      .single()

    if (publishError) {
      console.error('Error recording publish event:', publishError)
    }

    // Update article status
    await supabase
      .from('articles')
      .update({ 
        status: publish_mode === 'publish' ? 'published' : 'in_review',
        updated_at: new Date().toISOString()
      })
      .eq('id', article_id)

    return NextResponse.json({
      success: true,
      post_id: wpPost.id,
      post_url: wpPost.link,
      publish_event: publishEvent
    })
  } catch (error: any) {
    console.error('Error publishing to WordPress:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const workspaceId = searchParams.get('workspace_id')

    if (!workspaceId) {
      return NextResponse.json({ error: 'workspace_id is required' }, { status: 400 })
    }

    // Get WP config status
    const { data: workspace } = await supabase
      .from('workspaces')
      .select('cms_config')
      .eq('id', workspaceId)
      .single()

    const wpConfig = workspace?.cms_config as WordPressConfig | undefined
    
    return NextResponse.json({
      configured: !!(wpConfig?.url && wpConfig?.username && wpConfig?.password),
      url: wpConfig?.url || null
    })
  } catch (error: any) {
    console.error('Error checking WP config:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
