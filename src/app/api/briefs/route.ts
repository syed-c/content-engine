import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const keywordId = searchParams.get('keyword_id')

    let query = supabase
      .from('briefs')
      .select('*')
      .order('created_at', { ascending: false })

    if (keywordId) query = query.eq('keyword_id', keywordId)

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error: any) {
    console.error('Error fetching briefs:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { 
      keyword_id, h1_variants, target_word_count, structure_json, 
      primary_keyword, secondary_keywords_json, angle, cta, 
      faq_questions_json, internal_links_json, voice_profile 
    } = body

    if (!keyword_id) {
      return NextResponse.json({ error: 'keyword_id is required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('briefs')
      .insert({
        keyword_id,
        h1_variants: h1_variants || [],
        target_word_count: target_word_count || 1500,
        structure_json: structure_json || [],
        primary_keyword,
        secondary_keywords_json: secondary_keywords_json || [],
        angle,
        cta,
        faq_questions_json: faq_questions_json || [],
        internal_links_json: internal_links_json || [],
        voice_profile: voice_profile || {}
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    console.error('Error creating brief:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { id, approved_at, ...updates } = body

    if (!id) {
      return NextResponse.json({ error: 'Brief ID is required' }, { status: 400 })
    }

    const updateData: any = { ...updates, updated_at: new Date().toISOString() }
    if (approved_at) {
      updateData.approved_at = new Date().toISOString()
    }

    const { data, error } = await supabase
      .from('briefs')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Error updating brief:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}