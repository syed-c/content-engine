import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    
    const supabase = createClient(supabaseUrl, anonKey)

    // Regular signup (not admin)
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || email.split('@')[0]
        }
      }
    })

    if (authError) {
      // If email already exists, try to sign in instead
      if (authError.message.includes('already been registered')) {
        return NextResponse.json({ 
          error: 'User already exists. Please try logging in instead.' 
        }, { status: 400 })
      }
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    if (!authData.user) {
      return NextResponse.json({ error: 'Failed to create user. Please try again.' }, { status: 400 })
    }

    const userId = authData.user.id

    // Create workspace using service role (if available) or skip it for now
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY
    
    if (serviceKey) {
      const adminSupabase = createClient(supabaseUrl, serviceKey)
      
      try {
        await adminSupabase
          .from('workspaces')
          .insert({
            owner_id: userId,
            name: name ? `${name}'s Workspace` : 'My Workspace',
            plan: 'starter',
            cms_config: {}
          })
      } catch (wsErr) {
        console.log('Workspace creation skipped:', wsErr)
      }
    }

    return NextResponse.json({ 
      success: true, 
      user: authData.user,
      message: 'Account created! Please check your email to confirm.'
    })
  } catch (error: any) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}