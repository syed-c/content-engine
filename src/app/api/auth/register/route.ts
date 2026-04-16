import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const getSupabaseAdmin = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY
  
  if (!serviceKey) {
    throw new Error('Missing service role key')
  }
  
  return createClient(supabaseUrl, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

export async function POST(request: NextRequest) {
  let supabaseAdmin: any
  
  try {
    const body = await request.json()
    const { email, password, name } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    try {
      supabaseAdmin = getSupabaseAdmin()
    } catch (envError: any) {
      console.error('Env error:', envError)
      return NextResponse.json({ error: 'Server configuration error: ' + envError.message }, { status: 500 })
    }

    // Create user via admin API
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
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
    let workspace: any = null
    try {
      const { data: wsData, error: wsError } = await supabaseAdmin
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
        console.error('Workspace error:', wsError)
      } else {
        workspace = wsData
        
        // Add team member
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
    } catch (wsErr: any) {
      console.error('Workspace insert error:', wsErr)
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