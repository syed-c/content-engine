import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const getSupabaseAdmin = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  
  return createClient(supabaseUrl, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const supabaseAdmin = getSupabaseAdmin()

    // Sign in using admin to bypass email confirmation check
    const { data: authData, error: authError } = await supabaseAdmin.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      // If email not confirmed, try to auto-confirm and retry
      if (authError.message === 'Email not confirmed') {
        return NextResponse.json({ 
          error: 'Please check your email to confirm account, or try logging in again.' 
        }, { status: 401 })
      }
      return NextResponse.json({ error: authError.message }, { status: 401 })
    }

    if (!authData?.user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const userId = authData.user.id

    // Check for workspace
    const { data: workspaces, error: wsCheckError } = await supabaseAdmin
      .from('workspaces')
      .select('*')
      .eq('owner_id', userId)
      .limit(1)

    let workspace = workspaces?.[0]

    // Auto-create workspace if none exists
    if (!workspace) {
      const { data: newWorkspace, error: wsError } = await supabaseAdmin
        .from('workspaces')
        .insert({
          owner_id: userId,
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