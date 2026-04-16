import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const workspaceId = searchParams.get('workspace_id')
    const status = searchParams.get('status')

    let query = supabase
      .from('articles')
      .select('*, briefs(h1_variants, primary_keyword, target_word_count), keywords(keyword, volume)')
      .order('created_at', { ascending: false })

    if (workspaceId) query = query.eq('workspace_id', workspaceId)
    if (status) query = query.eq('status', status)

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error: any) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { brief_id, keyword_id, workspace_id, status, quality_score } = body

    if (!brief_id || !keyword_id || !workspace_id) {
      return NextResponse.json({ error: 'brief_id, keyword_id, and workspace_id are required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('articles')
      .insert({
        brief_id,
        keyword_id,
        workspace_id,
        status: status || 'draft',
        quality_score: quality_score || 0
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    console.error('Error creating article:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { id, ...updates } = body

    if (!id) {
      return NextResponse.json({ error: 'Article ID is required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('articles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Error updating article:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}