'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSupabase } from '@/components/providers/SupabaseProvider'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { supabase } = useSupabase()
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name
        }
      }
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <main className="min-h-screen bg-surface flex flex-col pt-16 lg:pt-0">
      {/* ==================== MOBILE CONTENT ==================== */}
      <div className="lg:hidden flex-grow flex flex-col px-6 pb-24">
        {/* Hero Section */}
        <section className="mt-8 mb-12 max-w-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold tracking-widest uppercase mb-6">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            Encrypted Node
          </div>
          <h1 className="text-5xl font-black font-headline tracking-tighter leading-[0.9] text-primary mb-4">
            Join the <br/>Engine.
          </h1>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-[80%]">
            Start your autonomous SEO journey. Experience the next generation of programmatic content creation.
          </p>
        </section>

        {/* Register Card */}
        <section className="w-full">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline-variant/10">
            <form onSubmit={handleRegister} className="space-y-8">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs">
                  {error}
                </div>
              )}
              <div className="space-y-6">
                <div className="relative group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Legal Name</label>
                  <input 
                    className="w-full bg-surface-container-high border-none rounded-lg py-4 px-4 text-on-surface placeholder:text-on-surface/30 focus:ring-1 focus:ring-on-surface/10 transition-all outline-none" 
                    placeholder="Identity Label" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Network Email</label>
                  <input 
                    className="w-full bg-surface-container-high border-none rounded-lg py-4 px-4 text-on-surface placeholder:text-on-surface/30 focus:ring-1 focus:ring-on-surface/10 transition-all outline-none" 
                    placeholder="node@contentengine.ai" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Security Key</label>
                  <input 
                    className="w-full bg-surface-container-high border-none rounded-lg py-4 px-4 text-on-surface placeholder:text-on-surface/30 focus:ring-1 focus:ring-on-surface/10 transition-all outline-none" 
                    placeholder="••••••••" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              </div>
              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-on-primary py-5 rounded-lg font-headline font-bold flex justify-between items-center px-6 active:scale-[0.98] transition-all group disabled:opacity-50"
                >
                  <span className="tracking-tight uppercase">{loading ? 'Creating...' : 'Initialize Account'}</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </form>
            <div className="mt-8 text-center">
              <Link href="/login" className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/2 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#2d1b69] to-[#1a1035]"></div>
          <div className="relative z-10 flex flex-col justify-between h-full p-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>dataset</span>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tighter text-white">ContentEngine.ai</h1>
                <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Programmatic SEO</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-headline font-extrabold text-white leading-tight">
                Start Publishing<br/>at Scale
              </h2>
              <p className="text-white/70 font-body text-lg max-w-md">
                Join the AI-native programmatic SEO platform. Generate briefs, write articles, and publish to your CMS automatically.
              </p>
            </div>
            <p className="text-white/40 text-sm font-label font-bold uppercase tracking-widest">© 2026 ContentEngine.ai</p>
          </div>
        </aside>

        {/* Register Form */}
        <div className="w-1/2 flex items-center justify-center p-12">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-headline font-extrabold text-primary">Create account</h3>
              <p className="text-on-primary-container font-body mt-2">Start your programmatic SEO journey</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant/20 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant/20 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant/20 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary text-white font-headline font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>

            <p className="text-center text-sm text-on-primary-container">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-bold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}