import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const workspaceId = searchParams.get('workspace_id')

    if (!workspaceId) {
      return NextResponse.json({ error: 'workspace_id required' }, { status: 400 })
    }

    const { data: workspace } = await supabase
      .from('workspaces')
      .select('brand_voice')
      .eq('id', workspaceId)
      .single()

    return NextResponse.json(workspace?.brand_voice || {})
  } catch (error: any) {
    console.error('Error fetching brand voice:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { workspace_id, brand_voice } = body

    if (!workspace_id || !brand_voice) {
      return NextResponse.json({ error: 'workspace_id and brand_voice required' }, { status: 400 })
    }

    // Validate brand_voice has required fields
    const validatedVoice = {
      tone: brand_voice.tone || 'professional',
      style: brand_voice.style || '',
      topics_to_avoid: brand_voice.topics_to_avoid || [],
      custom_instructions: brand_voice.custom_instructions || '',
      example_phrases: brand_voice.example_phrases || []
    }

    const { error } = await supabase
      .from('workspaces')
      .update({ 
        brand_voice: validatedVoice,
        updated_at: new Date().toISOString() 
      })
      .eq('id', workspace_id)

    if (error) throw error

    return NextResponse.json({ success: true, brand_voice: validatedVoice })
  } catch (error: any) {
    console.error('Error saving brand voice:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
