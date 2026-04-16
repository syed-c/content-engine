import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const workspaceId = searchParams.get('workspace_id')
    const listId = searchParams.get('list_id')
    const status = searchParams.get('status')

    let query = supabase
      .from('keywords')
      .select('*, keyword_lists(name)')
      .order('created_at', { ascending: false })

    if (workspaceId) query = query.eq('workspace_id', workspaceId)
    if (listId) query = query.eq('list_id', listId)
    if (status) query = query.eq('status', status)

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error: any) {
    console.error('Error fetching keywords:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { keyword, list_id, workspace_id, target_url, priority, volume, difficulty, intent } = body

    if (!keyword || !workspace_id) {
      return NextResponse.json({ error: 'Keyword and workspace_id are required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('keywords')
      .insert({
        keyword,
        list_id,
        workspace_id,
        target_url,
        priority,
        volume: volume || 0,
        difficulty: difficulty || 0,
        intent: intent || 'informational',
        status: 'queued'
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    console.error('Error creating keyword:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { id, ...updates } = body

    if (!id) {
      return NextResponse.json({ error: 'Keyword ID is required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('keywords')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Error updating keyword:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Keyword ID is required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('keywords')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting keyword:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}