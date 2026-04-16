'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const productLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/integrations', label: 'Integrations' },
]

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const resourcesLinks = [
  { href: '/docs', label: 'Documentation' },
  { href: '/guides', label: 'Guides' },
  { href: '/api', label: 'API Reference' },
  { href: '/status', label: 'System Status' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
]

export default function Footer() {
  const pathname = usePathname()
  const isPublicPage = !pathname.startsWith('/dashboard') && !pathname.startsWith('/app')
  const isAuthPage = pathname === '/login' || pathname === '/register'

  if (!isPublicPage || isAuthPage) return null

  return (
    <footer className="w-full py-12 lg:py-16 bg-slate-50 text-slate-900 font-body text-sm leading-relaxed">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Desktop Footer */}
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <div className="text-lg font-black tracking-tighter text-slate-900">ContentEngine<span className="text-primary">.ai</span></div>
            </div>
            <p className="text-slate-500 mb-6 max-w-xs">The AI-native programmatic SEO platform. From keyword to published article — fully automated.</p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-slate-900 transition-colors">public</span>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-slate-900 transition-colors">hub</span>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-slate-900 transition-colors">analytics</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="lg:hidden flex flex-col items-start space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-white text-base" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <span className="font-manrope font-bold text-lg">ContentEngine<span className="text-primary">.ai</span></span>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full">
            <div>
              <h4 className="font-bold mb-3">Product</h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-500 hover:text-black transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-500 hover:text-black transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-500 hover:text-black transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-6 border-t border-outline-variant/20 w-full">
            <p className="text-gray-500">© 2024 ContentEngine.ai. All rights reserved.</p>
          </div>
        </div>

        {/* Desktop Copyright */}
        <div className="hidden lg:flex mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-slate-200 flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">© 2024 ContentEngine.ai. All rights reserved.</p>
          <div className="flex gap-8 text-slate-500">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-slate-900 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}