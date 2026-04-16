'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { href: '/dashboard/projects', label: 'Projects', icon: 'folder_copy' },
  { href: '/dashboard/keywords', label: 'Keywords', icon: 'key_visualizer' },
  { href: '/dashboard/articles', label: 'Articles', icon: 'article' },
  { href: '/dashboard/review', label: 'Review Queue', icon: 'rate_review' },
  { href: '/dashboard/analytics', label: 'Analytics', icon: 'analytics' },
  { href: '/dashboard/settings', label: 'Settings', icon: 'settings' },
]

const bottomItems = [
  { href: '/dashboard/help', label: 'Help Center', icon: 'help' },
  { href: '/login', label: 'Logout', icon: 'logout' },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 z-40 bg-surface flex flex-col p-6 gap-y-4">
      {/* Brand Section */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-lg">auto_awesome</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-black tracking-tighter text-primary">ContentEngine</span>
          <span className="text-[10px] font-medium text-secondary uppercase tracking-widest">v2.0 Beta</span>
        </div>
      </div>

      {/* CTA */}
      <button className="w-full py-3 mb-4 bg-primary text-on-primary font-headline font-bold text-sm rounded-lg active:scale-95 transition-all flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-sm">add</span>
        New Project
      </button>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg font-headline text-sm hover:translate-x-1 transition-transform duration-200 group ${
                isActive 
                  ? 'bg-surface-container-lowest text-primary shadow-sm font-bold' 
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer Tabs */}
      <div className="mt-auto space-y-2 pt-6 border-t border-transparent bg-surface-container-low -mx-6 px-6">
        {bottomItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className="flex items-center gap-3 p-3 text-secondary hover:text-primary font-headline text-sm hover:translate-x-1 transition-transform duration-200 group"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  )
}