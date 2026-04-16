'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/features', label: 'Features', icon: 'auto_awesome' },
  { href: '/pricing', label: 'Pricing', icon: 'payments' },
  { href: '/about', label: 'About', icon: 'info' },
  { href: '/contact', label: 'Contact', icon: 'mail' },
]

export default function MobileBottomNav() {
  const pathname = usePathname()
  const isPublicPage = !pathname.startsWith('/dashboard') && !pathname.startsWith('/app')
  const isAuthPage = pathname === '/login' || pathname === '/register'

  if (!isPublicPage || isAuthPage) return null

  return (
    <nav className="lg:hidden fixed bottom-0 w-full z-50 rounded-t-3xl bg-white border-t border-outline-variant/10 flex justify-around items-center h-20 px-4 pb-4 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link 
            key={item.href} 
            href={item.href}
            className={`flex flex-col items-center justify-center active:scale-90 duration-200 ${
              isActive ? 'text-primary' : 'text-neutral-400'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-headline text-[8px] uppercase tracking-widest font-bold mt-1">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}