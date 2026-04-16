import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { list_id, workspace_id, keywords } = body

    if (!workspace_id || !keywords || !Array.isArray(keywords)) {
      return NextResponse.json({ error: 'workspace_id and keywords array are required' }, { status: 400 })
    }

    const keywordsData = keywords.map((kw: string | { keyword: string; target_url?: string; priority?: number }) => {
      if (typeof kw === 'string') {
        return { keyword: kw, list_id, workspace_id, status: 'queued' }
      }
      return {
        keyword: kw.keyword,
        target_url: kw.target_url,
        priority: kw.priority || 1,
        list_id,
        workspace_id,
        status: 'queued'
      }
    })

    const { data, error } = await supabase
      .from('keywords')
      .insert(keywordsData)
      .select()

    if (error) throw error

    return NextResponse.json({ 
      imported: data.length,
      keywords: data 
    }, { status: 201 })
  } catch (error: any) {
    console.error('Error importing keywords:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}