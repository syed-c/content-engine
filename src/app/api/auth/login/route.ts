import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const supabase = createServerClient()

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 401 })
    }

    if (!authData.user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const { data: workspaces } = await supabase
      .from('workspaces')
      .select('*')
      .eq('owner_id', authData.user.id)
      .limit(1)

    let workspace = workspaces?.[0]

    if (!workspace) {
      const { data: newWorkspace } = await supabase
        .from('workspaces')
        .insert({
          owner_id: authData.user.id,
          name: 'My Workspace',
          plan: 'starter',
          cms_config: {}
        })
        .select()
        .single()

      if (newWorkspace) workspace = newWorkspace
    }

    return NextResponse.json({ 
      success: true, 
      user: authData.user,
      workspace: workspace
    })
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
