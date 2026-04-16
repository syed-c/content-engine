'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AuthBottomNav() {
  const pathname = usePathname()
  const isLogin = pathname === '/login'
  const isRegister = pathname === '/register'

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-center gap-12 items-center px-8 pb-6 bg-transparent pointer-events-none">
      <div className="flex gap-8 items-center pointer-events-auto px-6 py-2 rounded-full bg-surface/80 backdrop-blur-xl">
        <Link 
          href="/login" 
          className={`rounded-full p-4 active:scale-90 duration-300 ease-out transition-transform ${
            isLogin 
              ? 'bg-[#121212] text-white' 
              : 'text-[#121212]/40 hover:bg-surface-container-high'
          }`}
        >
          <span className="material-symbols-outlined block">fingerprint</span>
        </Link>
        <Link 
          href="/register" 
          className={`rounded-full p-4 active:scale-90 duration-300 ease-out transition-transform ${
            isRegister 
              ? 'bg-[#121212] text-white' 
              : 'text-[#121212]/40 hover:bg-surface-container-high'
          }`}
        >
          <span className="material-symbols-outlined block">person_add</span>
        </Link>
      </div>
    </nav>
  )
}