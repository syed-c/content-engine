'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getUser, signOut } from '@/lib/auth'

interface Workspace {
  id: string
  name: string
  plan: string
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { user } = await getUser()
      if (!user) {
        router.push('/login')
        return
      }
      setUser(user)

      // Fetch workspaces
      try {
        const res = await fetch('/api/workspace', { credentials: 'include' })
        const data = await res.json()
        if (Array.isArray(data)) {
          setWorkspaces(data)
          // If no workspace exists, redirect to create workspace
          if (data.length === 0) {
            router.push('/dashboard/workspace/create')
            return
          }
        }
      } catch (err) {
        console.error('Failed to fetch workspaces:', err)
        // On error, redirect to create workspace
        router.push('/dashboard/workspace/create')
        return
      }

      setLoading(false)
    }

    checkUser()
  }, [router])

  const handleSignOut = async () => {
    await signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="text-xl font-bold text-gray-900">
              ContentEngine
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/dashboard/keywords"
                className="text-gray-600 hover:text-gray-900"
              >
                Keywords
              </Link>
              <Link
                href="/dashboard/articles"
                className="text-gray-600 hover:text-gray-900"
              >
                Articles
              </Link>
              <Link
                href="/dashboard/published"
                className="text-gray-600 hover:text-gray-900"
              >
                Published
              </Link>
              <Link
                href="/dashboard/analytics"
                className="text-gray-600 hover:text-gray-900"
              >
                Analytics
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
              onChange={(e) => {
                if (e.target.value) {
                  window.location.href = `/dashboard?workspace=${e.target.value}`
                }
              }}
            >
              {workspaces.map((ws) => (
                <option key={ws.id} value={ws.id}>
                  {ws.name}
                </option>
              ))}
            </select>
            <button
              onClick={handleSignOut}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
}