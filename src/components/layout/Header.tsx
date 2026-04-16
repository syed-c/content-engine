'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const isPublicPage = !pathname.startsWith('/dashboard') && !pathname.startsWith('/app')
  const isAuthPage = pathname === '/login' || pathname === '/register'

  if (!isPublicPage || isAuthPage) return null

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] hidden lg:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
              <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">ContentEngine<span className="text-primary">.ai</span></span>
          </Link>
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-headline font-medium tracking-tight transition-colors duration-300 ${
                  pathname === link.href 
                    ? 'text-slate-900 font-bold border-b-2 border-slate-900' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/login" className="font-headline font-medium tracking-tight text-slate-500 hover:text-slate-900 transition-colors">
              Login
            </Link>
            <Link href="/register" className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-headline font-bold scale-95 active:scale-90 transition-transform">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden bg-[#fcf9f8]/80 backdrop-blur-xl text-[#121212] font-manrope tracking-tight font-bold fixed top-0 w-full z-50 shadow-[0_20px_40px_rgba(28,27,27,0.05)]">
        <div className="flex justify-between items-center px-6 h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-base" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <span className="text-lg font-extrabold tracking-tighter text-[#121212]">ContentEngine<span className="text-primary">.ai</span></span>
          </Link>
          <Link href="/register" className="bg-primary text-on-primary px-4 py-2 rounded-lg font-headline font-bold text-sm active:scale-95 transition-transform">
            Get Started
          </Link>
        </div>
      </header>
    </>
  )
}