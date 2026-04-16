import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { article_ids, scheduled_at, publish_mode = 'publish' } = body

    if (!article_ids || !Array.isArray(article_ids) || !scheduled_at) {
      return NextResponse.json({ error: 'article_ids array and scheduled_at required' }, { status: 400 })
    }

    const scheduledDate = new Date(scheduled_at)
    
    if (isNaN(scheduledDate.getTime())) {
      return NextResponse.json({ error: 'Invalid date format' }, { status: 400 })
    }

    if (scheduledDate <= new Date()) {
      return NextResponse.json({ error: 'Scheduled time must be in the future' }, { status: 400 })
    }

    const results = []

    for (const article_id of article_ids) {
      const { error } = await supabase
        .from('articles')
        .update({ 
          scheduled_at: scheduledDate.toISOString(),
          status: 'approved', // Set to approved, will publish at scheduled time
          updated_at: new Date().toISOString()
        })
        .eq('id', article_id)

      if (error) {
        results.push({ article_id, success: false, error: error.message })
      } else {
        results.push({ article_id, success: true, scheduled_at: scheduledDate.toISOString() })
      }
    }

    const successCount = results.filter((r: any) => r.success).length

    return NextResponse.json({
      success: true,
      scheduled: successCount,
      total: article_ids.length,
      results
    })
  } catch (error: any) {
    console.error('Error scheduling publish:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// Cron job to process scheduled publishes
// This would be called by a cron job (e.g., every 5 minutes)
export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    
    // Check for auth (in production, verify cron secret)
    const cronSecret = request.headers.get('x-cron-secret')
    if (cronSecret && cronSecret !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Find articles ready to publish
    const { data: articles, error } = await supabase
      .from('articles')
      .select('id, scheduled_at, status')
      .lte('scheduled_at', new Date().toISOString())
      .eq('status', 'approved')

    if (error) throw error

    const results = []

    for (const article of articles || []) {
      try {
        // Get workspace CMS config
        const { data: articleData } = await supabase
          .from('articles')
          .select('workspaces(cms_config)')
          .eq('id', article.id)
          .single()

        const cmsConfig = articleData?.workspaces?.cms_config

        if (cmsConfig?.wordpress?.url) {
          // Publish to WordPress (import the function)
          // For now, just update status
          await supabase
            .from('articles')
            .update({ status: 'published', scheduled_at: null })
            .eq('id', article.id)

          results.push({ article_id: article.id, status: 'published' })
        } else {
          // Just mark as published (CMS not connected)
          await supabase
            .from('articles')
            .update({ status: 'published', scheduled_at: null })
            .eq('id', article.id)

          results.push({ article_id: article.id, status: 'published_no_cms' })
        }
      } catch (err) {
        results.push({ article_id: article.id, error: 'Failed to publish' })
      }
    }

    return NextResponse.json({
      processed: results.length,
      results
    })
  } catch (error: any) {
    console.error('Error processing scheduled publishes:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
