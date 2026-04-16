import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const workspaceId = searchParams.get('workspace_id')

    let query = supabase
      .from('keyword_lists')
      .select('*, keywords(count)')
      .order('created_at', { ascending: false })

    if (workspaceId) query = query.eq('workspace_id', workspaceId)

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error: any) {
    console.error('Error fetching keyword lists:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { name, workspace_id, source } = body

    if (!name || !workspace_id) {
      return NextResponse.json({ error: 'name and workspace_id are required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('keyword_lists')
      .insert({
        name,
        workspace_id,
        source: source || 'manual'
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    console.error('Error creating keyword list:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}