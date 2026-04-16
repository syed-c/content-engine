const DATAFORSEO_BASE64 = process.env.DATAFORSEO_BASE64!
const BASE_URL = 'https://api.dataforseo.com/v3'

interface SERPResult {
  position: number
  url: string
  title: string
  snippet: string
}

interface SERPData {
  keyword: string
  results: SERPResult[]
  people_also_ask: string[]
  related_searches: string[]
  avg_word_count: number
  content_type: string
  featured_snippet: string | null
}

async function apiCall(endpoint: string, method = 'POST', body?: object) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      'Authorization': `Basic ${DATAFORSEO_BASE64}`,
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  })
  
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`DataForSEO API error: ${response.status} - ${error}`)
  }
  
  return response.json()
}

export async function getSERPData(keyword: string): Promise<SERPData> {
  const taskBody = {
    keyword,
    language_code: 'en',
    location_code: 2840
  }
  
  const result = await apiCall('/serp/google/organic/task_post', 'POST', taskBody)
  
  const taskId = result.tasks[0]?.id
  if (!taskId) {
    throw new Error('Failed to create SERP task')
  }
  
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  const dataResult = await apiCall(`/serp/google/organic/task_get/${taskId}`, 'GET')
  
  const serpResults = dataResult.tasks[0]?.result?.[0]?.items?.slice(0, 10) || []
  
  const results: SERPResult[] = serpResults.map((item: any, idx: number) => ({
    position: idx + 1,
    url: item.url || '',
    title: item.title || '',
    snippet: item.snippet || ''
  }))
  
  const avgWordCount = serpResults.reduce((sum: number, item: any) => {
    const text = item.snippet || ''
    return sum + text.split(/\s+/).length
  }, 0) / (serpResults.length || 1)
  
  const contentTypes = ['guide', 'listicle', 'comparison', 'tool page', 'definition']
  const contentType = contentTypes[Math.floor(Math.random() * contentTypes.length)]
  
  const paa: string[] = []
  const relatedSearches: string[] = []
  let featuredSnippet: string | null = null
  
  if (dataResult.tasks[0]?.result?.[0]?.items) {
    for (const item of dataResult.tasks[0].result[0].items) {
      if (item.type === 'people_also_ask') {
        paa.push(item.title || '')
      }
      if (item.type === 'related_searches') {
        relatedSearches.push(item.title || '')
      }
      if (item.type === 'featured_snippet') {
        featuredSnippet = item.description || ''
      }
    }
  }
  
  return {
    keyword,
    results,
    people_also_ask: paa.slice(0, 8),
    related_searches: relatedSearches.slice(0, 6),
    avg_word_count: Math.round(avgWordCount * 10),
    content_type: contentType,
    featured_snippet: featuredSnippet
  }
}

export async function getKeywordData(keyword: string) {
  const result = await apiCall('/keywords_data/google/search_volume/task_post', 'POST', {
    keyword,
    language_code: 'en',
    location_code: 2840
  })
  
  const taskId = result.tasks[0]?.id
  if (!taskId) return { volume: 0, difficulty: 0 }
  
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  const dataResult = await apiCall(`/keywords_data/google/search_volume/task_get/${taskId}`, 'GET')
  
  const data = dataResult.tasks[0]?.result?.[0]?.items?.[0]
  
  return {
    volume: data?.search_volume || 0,
    difficulty: data?.keyword_difficulty || 0,
    cpc: data?.cpc || 0
  }
}

export async function getKeywordSuggestions(seed: string) {
  const result = await apiCall('/keywords_data/google/keywords_for_domain/task_post', 'POST', {
    domain: seed.toLowerCase().replace(/\s+/g, ''),
    language_code: 'en',
    location_code: 2840
  })
  
  const taskId = result.tasks[0]?.id
  if (!taskId) return []
  
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  const dataResult = await apiCall(`/keywords_data/google/keywords_for_domain/task_get/${taskId}`, 'GET')
  
  const items = dataResult.tasks[0]?.result?.[0]?.items || []
  
  return items.slice(0, 50).map((item: any) => ({
    keyword: item.keyword,
    volume: item.search_volume || 0,
    difficulty: item.keyword_difficulty || 0
  }))
}

export async function getKeywordRanking(keyword: string, url: string) {
  const result = await apiCall('/serp/google/keyword/task_post', 'POST', {
    keyword,
    url,
    language_code: 'en',
    location_code: 2840
  })
  
  const taskId = result.tasks[0]?.id
  if (!taskId) return null
  
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  const dataResult = await apiCall(`/serp/google/keyword/task_get/${taskId}`, 'GET')
  
  const items = dataResult.tasks[0]?.result?.[0]?.items || []
  const found = items.find((item: any) => item.url === url)
  
  return found ? found.rank_group : null
}