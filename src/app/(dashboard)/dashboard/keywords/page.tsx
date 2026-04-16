'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Keyword {
  id: string
  keyword: string
  status: string
  volume: number
  difficulty: number
  intent: string
  target_url: string
  created_at: string
}

export default function KeywordsPage() {
  const router = useRouter()
  const [keywords, setKeywords] = useState<Keyword[]>([])
  const [loading, setLoading] = useState(true)
  const [showAdd, setShowAdd] = useState(false)
  const [newKeyword, setNewKeyword] = useState('')
  const [targetUrl, setTargetUrl] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchKeywords()
  }, [])

  const fetchKeywords = async () => {
    try {
      const res = await fetch('/api/keywords')
      const data = await res.json()
      if (Array.isArray(data)) {
        setKeywords(data)
      }
    } catch (err) {
      console.error('Failed to fetch keywords:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddKeyword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newKeyword.trim()) return

    setSaving(true)
    try {
      const res = await fetch('/api/keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          keyword: newKeyword,
          target_url: targetUrl,
          workspace_id: 'auto'
        }),
      })

      if (res.ok) {
        const data = await res.json()
        setKeywords([data, ...keywords])
        setNewKeyword('')
        setTargetUrl('')
        setShowAdd(false)
      }
    } catch (err) {
      console.error('Failed to add keyword:', err)
    } finally {
      setSaving(false)
    }
  }

  const generateBrief = async (keywordId: string) => {
    try {
      const res = await fetch('/api/briefs/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword_id: keywordId }),
      })

      if (res.ok) {
        router.push(`/dashboard/briefs?keyword_id=${keywordId}`)
      }
    } catch (err) {
      console.error('Failed to generate brief:', err)
    }
  }

  return (
    <main className="flex-1 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Keywords</h1>
            <p className="text-gray-600 text-sm">Add target keywords to generate content</p>
          </div>
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90"
          >
            + Add Keyword
          </button>
        </div>
      </header>

      {/* Add Keyword Form */}
      {showAdd && (
        <div className="bg-white border-b border-gray-200 p-6">
          <form onSubmit={handleAddKeyword} className="max-w-2xl flex gap-4">
            <input
              type="text"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              placeholder="Enter keyword (e.g., best CRM software)"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder="Target URL (optional)"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              disabled={saving || !newKeyword}
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50"
            >
              {saving ? 'Adding...' : 'Add'}
            </button>
          </form>
        </div>
      )}

      {/* Keywords List */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : keywords.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-500 mb-4">No keywords yet</p>
              <button
                onClick={() => setShowAdd(true)}
                className="text-primary font-medium hover:underline"
              >
                Add your first keyword
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Keyword</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Target URL</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Status</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {keywords.map((kw) => (
                    <tr key={kw.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        {kw.keyword}
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {kw.target_url || '-'}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          kw.status === 'published' ? 'bg-green-100 text-green-800' :
                          kw.status === 'brief_generated' ? 'bg-blue-100 text-blue-800' :
                          kw.status === 'briefing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {kw.status || 'queued'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {kw.status === 'queued' && (
                          <button
                            onClick={() => generateBrief(kw.id)}
                            className="text-primary text-sm font-medium hover:underline"
                          >
                            Generate Brief →
                          </button>
                        )}
                        {kw.status === 'brief_generated' && (
                          <button
                            onClick={() => router.push(`/dashboard/articles?keyword_id=${kw.id}`)}
                            className="text-primary text-sm font-medium hover:underline"
                          >
                            Generate Article →
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}