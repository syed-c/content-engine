import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const supabase = createServerClient()

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || email.split('@')[0],
        },
      },
    })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    if (!authData.user) {
      return NextResponse.json({ error: 'Failed to create user' }, { status: 400 })
    }

    const userId = authData.user.id

    const { data: workspace, error: workspaceError } = await supabase
      .from('workspaces')
      .insert({
        owner_id: userId,
        name: name ? `${name}'s Workspace` : 'My Workspace',
        plan: 'starter',
        cms_config: {}
      })
      .select()
      .single()

    if (workspace) {
      await supabase
        .from('team_members')
        .insert({
          workspace_id: workspace.id,
          user_id: userId,
          email,
          name: name || email.split('@')[0],
          role: 'admin'
        })
    }

    return NextResponse.json({ 
      success: true, 
      user: authData.user,
      workspace: workspace
    })
  } catch (error: any) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
