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
    const { email, password, name } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const supabaseAdmin = getSupabaseAdmin()

    // Create user with admin API (auto-confirms email)
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

    if (!authData?.user) {
      return NextResponse.json({ error: 'Failed to create user' }, { status: 400 })
    }

    const userId = authData.user.id

    // Create workspace
    const { data: workspace, error: wsError } = await supabaseAdmin
      .from('workspaces')
      .insert({
        owner_id: userId,
        name: name ? `${name}'s Workspace` : 'My Workspace',
        plan: 'starter',
        cms_config: {}
      })
      .select()
      .single()

    if (wsError) {
      console.log('Workspace creation error:', wsError)
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