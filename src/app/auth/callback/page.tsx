'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check for error in URL
    const error = searchParams.get('error')
    if (error) {
      console.error('Auth error:', error)
      router.push('/login?error=' + encodeURIComponent(error))
      return
    }

    // If no error, redirect to dashboard
    // The actual session is set by Supabase auth handler
    router.push('/dashboard')
  }, [router, searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4" />
        <p className="text-gray-600">Completing sign in...</p>
      </div>
    </div>
  )
}