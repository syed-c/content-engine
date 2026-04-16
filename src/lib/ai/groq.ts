const API_KEY = process.env.GROQ_API_KEY
const BASE_URL = 'https://api.groq.com/openai/v1'
const MODEL = 'llama-3.3-70b-versatile'

async function chatCompletion(messages: { role: 'system' | 'user' | 'assistant'; content: string }[]) {
  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.7,
      max_tokens: 4096
    })
  })
  
  if (!response.ok) {
    throw new Error(`Groq API error: ${response.status}`)
  }
  
  const data = await response.json()
  return data.choices[0]?.message?.content || ''
}

export async function generateWithAI(messages: { role: 'system' | 'user' | 'assistant'; content: string }[]) {
  return chatCompletion(messages)
}

export async function generateBrief(prompt: string): Promise<string> {
  const messages = [
    {
      role: 'system' as const,
      content: `You are an expert SEO content strategist. Generate detailed content briefs based on SERP analysis data. 
Output ONLY valid JSON format:
{
  "h1_variants": ["variant1", "variant2", "variant3"],
  "target_word_count": number,
  "sections": [{"h2": "title", "instruction": "writing instruction", "word_count": number}],
  "primary_keyword": "keyword",
  "secondary_keywords": ["keyword1", "keyword2"],
  "angle": "differentiation angle",
  "cta": "recommended call to action",
  "faq_questions": ["question1", "question2"],
  "internal_links": ["url1", "url2"]
}`
    },
    {
      role: 'user' as const,
      content: prompt
    }
  ]
  
  return chatCompletion(messages)
}

export async function generateArticleSection(
  instruction: string,
  context: string,
  keywords: string[],
  avoidPhrases: string[] = []
): Promise<string> {
  const messages = [
    {
      role: 'system' as const,
      content: `You are an expert SEO content writer. Write high-quality, engaging content that naturally incorporates keywords.
- Write in the requested style
- Avoid repeating phrases: ${avoidPhrases.join(', ')}
- Include keywords naturally: ${keywords.join(', ')}
- Output ONLY the content, no explanations, no markdown formatting`
    },
    {
      role: 'user' as const,
      content: `Context: ${context}\n\nInstruction: ${instruction}`
    }
  ]
  
  return chatCompletion(messages)
}

export async function generateIntro(
  keyword: string,
  context: string
): Promise<string> {
  const messages = [
    {
      role: 'system' as const,
      content: `Write a compelling introduction (150-200 words) for an article about "${keyword}".
- Include keyword in first sentence
- Hook-driven opener
- Preview what the article covers
- Output ONLY the content, no markdown`
    },
    {
      role: 'user' as const,
      content: `Article sections:\n${context}`
    }
  ]
  
  return chatCompletion(messages)
}

export async function generateFAQ(
  questions: string[],
  context: string
): Promise<string> {
  const messages = [
    {
      role: 'system' as const,
      content: `Write concise answers (40-80 words each) for FAQ questions. 
- Output as HTML with <h3> for questions and <p> for answers
- Keep answers direct and informative
- Output ONLY the HTML, no markdown`
    },
    {
      role: 'user' as const,
      content: `Questions:\n${questions.join('\n')}\n\nArticle context:\n${context}`
    }
  ]
  
  return chatCompletion(messages)
}

export async function generateConclusion(
  keyword: string,
  cta: string,
  context: string
): Promise<string> {
  const messages = [
    {
      role: 'system' as const,
      content: `Write a conclusion (150-200 words) for an article about "${keyword}".
- Summarize key points
- Include CTA: ${cta}
- Avoid repeating phrases from the introduction
- Output ONLY the content, no markdown`
    },
    {
      role: 'user' as const,
      content: `Article content:\n${context}`
    }
  ]
  
  return chatCompletion(messages)
}

export async function generateMetaContent(content: string, keyword: string, type: 'title' | 'description'): Promise<string> {
  const messages = [
    {
      role: 'system' as const,
      content: type === 'title' 
        ? 'Generate SEO title (max 60 chars). Include keyword naturally. Output ONLY the title.' 
        : 'Generate meta description (max 160 chars). Include keyword naturally and a CTA. Output ONLY the description.'
    },
    {
      role: 'user' as const,
      content: `Keyword: ${keyword}\n\nArticle preview:\n${content.slice(0, 500)}`
    }
  ]
  
  return chatCompletion(messages)
}