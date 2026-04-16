'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateWorkspacePage() {
  const router = useRouter()
  const [workspaceName, setWorkspaceName] = useState('')
  const [wpUrl, setWpUrl] = useState('')
  const [wpUsername, setWpUsername] = useState('')
  const [wpAppPassword, setWpAppPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!workspaceName.trim()) {
      setError('Workspace name is required')
      setLoading(false)
      return
    }

    if (!wpUrl.trim()) {
      setError('WordPress site URL is required to publish articles')
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/workspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: workspaceName,
          cms_config: {
            wordpress: {
              url: wpUrl,
              username: wpUsername,
              appPassword: wpAppPassword
            }
          }
        }),
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        setError(data.error || 'Failed to create workspace')
        setLoading(false)
        return
      }

      // Success - go to dashboard
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Your Workspace</h1>
        <p className="text-gray-600 mb-6">Connect your WordPress site to start publishing</p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Workspace Name *
            </label>
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="My SEO Agency"
              required
            />
          </div>

          <div className="border-t pt-4 mt-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">WordPress Integration *</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WordPress Site URL *
              </label>
              <input
                type="text"
                value={wpUrl}
                onChange={(e) => setWpUrl(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://myblog.com"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Your WordPress site where articles will be published</p>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={wpUsername}
                onChange={(e) => setWpUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="admin"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Application Password
              </label>
              <input
                type="password"
                value={wpAppPassword}
                onChange={(e) => setWpAppPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="xxxx xxxx xxxx xxxx"
              />
              <p className="text-xs text-gray-500 mt-1">
                Generate at: WordPress → Users → Profile → Application Passwords
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors mt-6"
          >
            {loading ? 'Creating...' : 'Create Workspace'}
          </button>
        </form>
      </div>
    </div>
  )
}