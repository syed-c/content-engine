'use client'

import Link from 'next/link'

export default function DashboardHeader() {
  return (
    <header className="h-16 px-8 flex justify-between items-center w-full bg-surface/60 backdrop-blur-xl docked full-width top-0 z-50 sticky shadow-[0_20px_40px_rgba(28,27,27,0.05)]">
      {/* Workspace Switcher */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container-high transition-all border border-transparent hover:border-outline-variant/10">
          <div className="w-5 h-5 bg-tertiary-container rounded-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-[10px] text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>layers</span>
          </div>
          <span className="font-headline text-sm font-semibold tracking-tight text-primary">Main Workspace</span>
          <span className="material-symbols-outlined text-sm text-secondary">unfold_more</span>
        </div>
      </div>

      {/* Global Nav Links */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/dashboard" className="text-primary border-b-2 border-primary pb-1 font-headline text-sm tracking-tight font-semibold">Workspace</Link>
        <Link href="/dashboard/analytics" className="text-secondary hover:text-primary transition-colors font-headline text-sm tracking-tight font-semibold">Analytics</Link>
        <Link href="/contact" className="text-secondary hover:text-primary transition-colors font-headline text-sm tracking-tight font-semibold">Support</Link>
      </nav>

      {/* Actions & Profile */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-secondary hover:bg-surface-container-low rounded-lg transition-all scale-95 duration-200 ease-in-out">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-secondary hover:bg-surface-container-low rounded-lg transition-all scale-95 duration-200 ease-in-out">
          <span className="material-symbols-outlined">help</span>
        </button>
        <div className="h-8 w-[1px] bg-outline-variant/20 mx-2"></div>
        <div className="flex items-center gap-3 pl-2">
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-primary leading-none">Alex Rivera</span>
            <span className="text-[10px] text-secondary font-medium">Pro Plan</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant/10">
            <span className="material-symbols-outlined text-on-surface-variant">person</span>
          </div>
        </div>
      </div>
    </header>
  )
}