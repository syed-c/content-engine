'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', label: 'Engine', icon: 'bolt' },
  { href: '/dashboard/projects', label: 'Assets', icon: 'folder_copy' },
  { href: '/dashboard/analytics', label: 'Growth', icon: 'trending_up' },
  { href: '/dashboard/keywords', label: 'Insights', icon: 'query_stats' },
]

export default function AdminBottomNav() {
  const pathname = usePathname()

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/60 backdrop-blur-xl shadow-[0_-10px_30px_rgba(0,0,0,0.03)] z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link 
            key={item.href} 
            href={item.href}
            className={`flex flex-col items-center justify-center px-4 py-1 transition-transform active:scale-90 ${
              isActive 
                ? 'bg-primary text-white' 
                : 'text-secondary hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-lg">{item.icon}</span>
            <span className="font-manrope text-[10px] font-semibold tracking-widest uppercase mt-1">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}