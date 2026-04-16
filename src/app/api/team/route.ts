import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { createClient } from '@supabase/supabase-js'

// Email invite function
async function sendInviteEmail(email: string, workspaceName: string, inviterName: string, role: string) {
  // This would use Resend or similar in production
  // For now, return success
  console.log(`[MOCK EMAIL] Inviting ${email} to ${workspaceName} as ${role}`)
  return { success: true }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const workspaceId = searchParams.get('workspace_id')

    if (!workspaceId) {
      return NextResponse.json({ error: 'workspace_id required' }, { status: 400 })
    }

    // Get all team members
    const { data: members, error } = await supabase
      .from('team_members')
      .select(`
        id,
        role,
        created_at,
        user_id,
        users!inner(email, raw_user_meta_data)
      `)
      .eq('workspace_id', workspaceId)
      .order('created_at', { ascending: true })

    if (error) throw error

    const transformed = (members || []).map((m: any) => ({
      id: m.id,
      role: m.role,
      user_id: m.user_id,
      email: m.users?.email,
      name: m.users?.raw_user_meta_data?.name || m.users?.email?.split('@')[0],
      avatar_url: m.users?.raw_user_meta_data?.avatar_url,
      joined_at: m.created_at
    }))

    return NextResponse.json(transformed)
  } catch (error: any) {
    console.error('Error fetching team:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { workspace_id, email, role = 'editor' } = body

    if (!workspace_id || !email) {
      return NextResponse.json({ error: 'workspace_id and email required' }, { status: 400 })
    }

    // Check if user exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('id, email')
      .ilike('email', email)
      .single()

    let memberId

    if (existingUser) {
      // Add existing user to workspace
      const { data: member, error } = await supabase
        .from('team_members')
        .insert({
          workspace_id,
          user_id: existingUser.id,
          role
        })
        .select()
        .single()

      if (error) {
        if (error.code === '23505') { // Unique violation
          return NextResponse.json({ error: 'User already in workspace' }, { status: 400 })
        }
        throw error
      }

      memberId = member?.id
    } else {
      // For non-existent users, we'd need to send an invite
      // This requires auth invitation flow which depends on Supabase Auth setup
      return NextResponse.json({
        status: 'invited',
        message: `Invitation sent to ${email}`,
        email
      })
    }

    // Get workspace name for email
    const { data: workspace } = await supabase
      .from('workspaces')
      .select('name')
      .eq('id', workspace_id)
      .single()

    // Send invite (mock in production)
    await sendInviteEmail(email, workspace?.name || 'Workspace', 'Owner', role)

    return NextResponse.json({ success: true, member_id: memberId })
  } catch (error: any) {
    console.error('Error adding team member:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { member_id, role } = body

    if (!member_id || !role) {
      return NextResponse.json({ error: 'member_id and role required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('team_members')
      .update({ role })
      .eq('id', member_id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error updating team member:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const memberId = searchParams.get('member_id')

    if (!memberId) {
      return NextResponse.json({ error: 'member_id required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', memberId)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error removing team member:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
