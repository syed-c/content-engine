import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

// Unsplash API integration
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY
const UNSPLASH_API_BASE = 'https://api.unsplash.com'

async function searchUnsplashImages(query: string, count: number = 1) {
  if (!UNSPLASH_ACCESS_KEY) {
    throw new Error('Unsplash API key not configured')
  }

  const response = await fetch(
    `${UNSPLASH_API_BASE}/search/photos?query=${encodeURIComponent(query)}&per_page=${count}`,
    {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    }
  )

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.status}`)
  }

  const data = await response.json()
  return data.results || []
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { keyword, article_id, workspace_id } = body

    if (!keyword) {
      return NextResponse.json({ error: 'keyword required' }, { status: 400 })
    }

    // Search Unsplash for relevant image
    const images = await searchUnsplashImages(keyword, 5)

    if (images.length === 0) {
      return NextResponse.json({ error: 'No images found' }, { status: 404 })
    }

    // Select best image (first one)
    const selectedImage = images[0]

    const imageData = {
      url: selectedImage.urls?.regular || selectedImage.urls?.full,
      thumb_url: selectedImage.urls?.thumb,
      alt_description: selectedImage.alt_description || keyword,
      photographer: selectedImage.user?.name,
      photographer_url: selectedImage.user?.links?.html,
      unsplash_id: selectedImage.id,
      download_url: selectedImage.urls?.regular
    }

    // Optionally save to article
    if (article_id) {
      await supabase
        .from('articles')
        .update({ 
          featured_image_url: imageData.url,
          featured_image_meta: imageData,
          updated_at: new Date().toISOString()
        })
        .eq('id', article_id)
    }

    return NextResponse.json({
      success: true,
      image: imageData,
      alternatives: images.slice(1).map((img: any) => ({
        id: img.id,
        url: img.urls?.regular,
        thumb_url: img.urls?.thumb,
        alt_description: img.alt_description
      }))
    })
  } catch (error: any) {
    console.error('Error fetching Unsplash image:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// Batch get images for multiple articles
export async function PUT(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    const { article_keywords } = body // Array of { article_id, keyword }

    if (!article_keywords || !Array.isArray(article_keywords)) {
      return NextResponse.json({ error: 'article_keywords array required' }, { status: 400 })
    }

    const results = []

    for (const { article_id, keyword } of article_keywords) {
      try {
        const images = await searchUnsplashImages(keyword, 1)
        
        if (images.length > 0) {
          const img = images[0]
          const imageData = {
            url: img.urls?.regular,
            thumb_url: img.urls?.thumb,
            alt_description: img.alt_description || keyword,
            photographer: img.user?.name,
            unsplash_id: img.id
          }

          await supabase
            .from('articles')
            .update({ 
              featured_image_url: imageData.url,
              featured_image_meta: imageData,
              updated_at: new Date().toISOString()
            })
            .eq('id', article_id)

          results.push({ article_id, success: true, image: imageData })
        } else {
          results.push({ article_id, success: false, error: 'No image found' })
        }
      } catch (error) {
        results.push({ article_id, success: false, error: 'Failed to fetch' })
      }
    }

    return NextResponse.json({ success: true, results })
  } catch (error: any) {
    console.error('Error in batch image fetch:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
