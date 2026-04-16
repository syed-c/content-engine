import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    // Check if user already exists
    const { data: existingUser } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('email', email)
      .limit(1)

    if (existingUser && existingUser.length > 0) {
      return NextResponse.json({ error: 'User already exists. Try logging in.' }, { status: 400 })
    }

    // Create user via admin API (bypasses email confirmation)
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm email
      user_metadata: {
        name: name || email.split('@')[0]
      }
    })

    if (authError) {
      console.error('Auth error:', authError)
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    if (!authData.user) {
      return NextResponse.json({ error: 'Failed to create user' }, { status: 400 })
    }

    const userId = authData.user.id

    // Create workspace
    const { data: workspace, error: workspaceError } = await supabaseAdmin
      .from('workspaces')
      .insert({
        owner_id: userId,
        name: name ? `${name}'s Workspace` : 'My Workspace',
        plan: 'starter',
        cms_config: {}
      })
      .select()
      .single()

    if (workspaceError) {
      console.error('Workspace error:', workspaceError)
    }

    // Add team member
    if (workspace) {
      await supabaseAdmin
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