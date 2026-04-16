import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function PUT(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { workspace_id, cms_type, config } = body

    if (!workspace_id || !cms_type || !config) {
      return NextResponse.json({ error: 'workspace_id, cms_type, and config required' }, { status: 400 })
    }

    // Get current workspace config
    const { data: workspace } = await supabase
      .from('workspaces')
      .select('cms_config')
      .eq('id', workspace_id)
      .single()

    const currentConfig = workspace?.cms_config || {}

    // Update or add CMS config
    const newConfig = {
      ...currentConfig,
      [cms_type]: config
    }

    const { error } = await supabase
      .from('workspaces')
      .update({ cms_config: newConfig, updated_at: new Date().toISOString() })
      .eq('id', workspace_id)

    if (error) throw error

    return NextResponse.json({ success: true, cms_type })
  } catch (error: any) {
    console.error('Error saving CMS config:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

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
      .select('cms_config')
      .eq('id', workspaceId)
      .single()

    const config = workspace?.cms_config || {}

    // Return config status (not secrets)
    return NextResponse.json({
      wordpress: {
        configured: !!(config.wordpress?.url && config.wordpress?.username),
        url: config.wordpress?.url || null
      },
      webflow: {
        configured: !!(config.webflow?.siteId && config.webflow?.apiToken),
        siteId: config.webflow?.siteId || null
      },
      ghost: {
        configured: !!(config.ghost?.url && config.ghost?.adminKey),
        url: config.ghost?.url || null
      }
    })
  } catch (error: any) {
    console.error('Error fetching CMS config:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
