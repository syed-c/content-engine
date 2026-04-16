import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { withAuth, validateBody, checkRateLimit } from '@/lib/api-utils'

export async function GET(request: NextRequest) {
  // Check rate limit
  const rateKey = `workspace:${request.headers.get('x-forwarded-for') || 'unknown'}`
  if (!checkRateLimit(rateKey, 50, 60000)) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  // Authenticate
  const auth = await withAuth(request)
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  const { user, supabase } = auth

  try {
    const { searchParams } = new URL(request.url)

    let query = supabase
      .from('workspaces')
      .select('*, team_members(*)')
      .order('created_at', { ascending: false })

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error: any) {
    console.error('Error fetching workspaces:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  // Check rate limit
  const rateKey = `workspace:${request.headers.get('x-forwarded-for') || 'unknown'}`
  if (!checkRateLimit(rateKey, 20, 60000)) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  // Authenticate
  const auth = await withAuth(request)
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  const { user, supabase } = auth
  const body = await request.json()

  // Validate input
  const validated = validateBody<{ name: string; plan?: string }>(body, ['name'])
  if (!validated) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 })
  }

  const { name, plan } = validated

  try {
    // Create workspace
    const { data, error } = await supabase
      .from('workspaces')
      .insert({
        name,
        owner_id: user.id,
        plan: plan || 'starter'
      })
      .select()
      .single()

    if (error) throw error

    // Add owner as admin
    await supabase
      .from('team_members')
      .insert({
        workspace_id: data.id,
        user_id: user.id,
        role: 'admin'
      })

    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    console.error('Error creating workspace:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  // Authenticate
  const auth = await withAuth(request)
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  const { supabase } = auth
  const body = await request.json()

  // Validate input
  const validated = validateBody<{ id: string }>(body, ['id'])
  if (!validated) {
    return NextResponse.json({ error: 'Workspace ID is required' }, { status: 400 })
  }

  const { id, ...updates } = validated

  try {
    const { data, error } = await supabase
      .from('workspaces')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Error updating workspace:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
