'use client'

import Link from 'next/link'

export default function WorkspacePage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-24">
        {/* TopAppBar */}
        <header className="w-full top-0 sticky bg-surface z-50 flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">grid_view</span>
            <span className="text-xl font-black uppercase tracking-tighter text-primary font-headline">ContentEngine.ai</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20">
            <span className="text-[10px] font-bold">UP</span>
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="px-6 pt-8 pb-12 space-y-12">
          {/* Hero Section */}
          <section className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-extrabold tracking-tight leading-[0.95] text-primary">
                Select<br/>Workspace
              </h1>
              <p className="text-on-surface-variant text-base max-w-[280px] font-medium leading-relaxed">
                Access your active programmatic SEO nodes.
              </p>
            </div>
            <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-headline font-bold flex items-center justify-center gap-2 active:scale-95 transition-all duration-150">
              <span className="material-symbols-outlined">add</span>
              New Workspace
            </button>
          </section>

          {/* System Performance Bento Style */}
          <section className="grid grid-cols-2 gap-3">
            <div className="col-span-2 bg-surface-container-low p-5 rounded-xl space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">System Uptime</span>
                <span className="text-[11px] font-bold px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded">LIVE</span>
              </div>
              <div className="text-4xl font-black tracking-tighter">99.8%</div>
              <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[99.8%]"></div>
              </div>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Latency</span>
              <div className="text-xl font-bold">24ms</div>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Req/hr</span>
              <div className="text-xl font-bold">12.4k</div>
            </div>
          </section>

          {/* Workspace Cards */}
          <section className="space-y-4">
            {/* Workspace Card 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl space-y-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold tracking-tight">Production_Alpha</h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">Enterprise</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Active</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">settings</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-y border-outline-variant/10 py-4">
                <div>
                  <div className="text-2xl font-bold">42.8k</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Articles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1.2M</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Keywords</div>
                </div>
              </div>
              <Link href="/dashboard" className="w-full bg-primary-container text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary active:scale-95 transition-all">
                Enter Workspace
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Workspace Card 2 */}
            <div className="bg-surface-container-low p-6 rounded-xl space-y-6 opacity-80">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold tracking-tight">Global_Marketing_HQ</h3>
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">Pro Plan</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Maintenance</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-y border-outline-variant/10 py-4">
                <div>
                  <div className="text-2xl font-bold text-on-surface-variant">12.1k</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Articles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-on-surface-variant">340k</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Keywords</div>
                </div>
              </div>
              <button className="w-full bg-surface-container-highest text-on-surface py-4 rounded-lg font-bold flex items-center justify-center gap-2 active:scale-95 transition-all">
                Enter Workspace
                <span className="material-symbols-outlined text-sm">lock</span>
              </button>
            </div>
          </section>

          {/* Intelligence Badge / Extra context */}
          <section className="flex justify-center pt-4">
            <div className="flex items-center gap-2 bg-tertiary-fixed px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <span className="text-[11px] font-bold text-on-tertiary-fixed-variant uppercase tracking-widest">AI Engine Pulse: Optimal</span>
            </div>
          </section>
        </main>

        {/* BottomNavBar */}
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-surface/60 backdrop-blur-xl z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
          <Link href="/dashboard" className="flex flex-col items-center justify-center text-primary bg-surface-container rounded-lg px-3 py-1.5 transition-transform">
            <span className="material-symbols-outlined">bolt</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest">Engine</span>
          </Link>
          <Link href="/dashboard/keywords" className="flex flex-col items-center justify-center text-secondary px-3 py-1.5 hover:text-primary transition-all">
            <span className="material-symbols-outlined">folder_open</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest">Assets</span>
          </Link>
          <Link href="/dashboard/analytics" className="flex flex-col items-center justify-center text-secondary px-3 py-1.5 hover:text-primary transition-all">
            <span className="material-symbols-outlined">trending_up</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest">Growth</span>
          </Link>
          <button className="flex flex-col items-center justify-center text-secondary px-3 py-1.5 hover:text-primary transition-all">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest">Insights</span>
          </button>
        </nav>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:flex">
        {/* Sidebar (Engine Mono-Chrome Style) */}
        <aside className="h-screen w-72 flex flex-col fixed left-0 top-0 bg-surface-container py-8 px-6 space-y-8 z-40">
          <div className="flex items-center space-x-3 px-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-sm">token</span>
            </div>
            <span className="text-lg font-black tracking-widest uppercase text-primary">Main Hub</span>
          </div>
          <nav className="flex-grow space-y-2">
            {/* Active State: Dashboard */}
            <Link href="/dashboard" className="flex items-center space-x-4 px-4 py-3 rounded-lg bg-black/5 text-primary font-bold hover:translate-x-1 transition-transform duration-200">
              <span className="material-symbols-outlined">grid_view</span>
              <span className="font-body text-sm font-medium">Dashboard</span>
            </Link>
            <Link href="/dashboard/workspace" className="flex items-center space-x-4 px-4 py-3 rounded-lg text-secondary hover:translate-x-1 transition-transform duration-200">
              <span className="material-symbols-outlined">workspaces</span>
              <span className="font-body text-sm font-medium">Workspaces</span>
            </Link>
            <button className="flex items-center space-x-4 px-4 py-3 rounded-lg text-secondary hover:translate-x-1 transition-transform duration-200 w-full">
              <span className="material-symbols-outlined">layers</span>
              <span className="font-body text-sm font-medium">Projects</span>
            </button>
            <button className="flex items-center space-x-4 px-4 py-3 rounded-lg text-secondary hover:translate-x-1 transition-transform duration-200 w-full">
              <span className="material-symbols-outlined">bolt</span>
              <span className="font-body text-sm font-medium">Automation</span>
            </button>
            <button className="flex items-center space-x-4 px-4 py-3 rounded-lg text-secondary hover:translate-x-1 transition-transform duration-200 w-full">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-body text-sm font-medium">Settings</span>
            </button>
          </nav>
          <div className="space-y-4 pt-8">
            <button className="w-full bg-primary text-on-primary py-3 rounded-lg text-sm font-bold tracking-tight hover:opacity-90 transition-opacity">
              New Workspace
            </button>
            <div className="space-y-1">
              <button className="flex items-center space-x-4 px-4 py-2 text-secondary hover:translate-x-1 transition-transform duration-200 w-full">
                <span className="material-symbols-outlined text-sm">headset_mic</span>
                <span className="text-xs font-medium">Support</span>
              </button>
              <button className="flex items-center space-x-4 px-4 py-2 text-secondary hover:translate-x-1 transition-transform duration-200 w-full">
                <span className="material-symbols-outlined text-sm">inventory_2</span>
                <span className="text-xs font-medium">Archive</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Top Navigation Bar */}
        <header className="fixed top-0 left-72 right-0 bg-surface/60 backdrop-blur-xl flex justify-between items-center px-8 h-20 z-30 shadow-[0_20px_40px_rgba(28,27,27,0.05)]">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 bg-surface-container-low px-4 py-2 rounded-full hover:bg-black/5 transition-colors">
              <span className="text-sm font-semibold tracking-tight font-headline">Production_Alpha</span>
              <span className="material-symbols-outlined text-sm">unfold_more</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/15">
              <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7xrsN46gZOV08xYI8-YXCX4oqxq68F6RQc7woC_O2Gtu8QRQ4GD0voCuqyBGgrGyasH0T0sR0bvzfNtkjyo2mQMpidLZ0WAI43uMIH4PG4vez90lS8i9Gsaz-54tf105R-3MRGOsWr8Obf8yDHoAa7Qvg9tEFwQj0xFIoKFFsm6ML5JhSo3zDy0qDsVfnLzrhz_FbECsqIiAA_pPNTFmCOyw3ljO3g4ByM4vTlBDorG-MYrjFgFk9Djhbp7UqB9tD6fITDYVfdUY"/>
            </div>
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="ml-72 pt-32 px-12 pb-24">
          {/* Section: Page Header */}
          <section className="mb-16 flex justify-between items-end">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 text-primary leading-[0.9] font-headline">
                Select <br/>Workspace
              </h1>
              <p className="text-lg text-on-surface-variant font-medium">
                Access your active programmatic SEO nodes.
              </p>
            </div>
            <div className="pb-2">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold flex items-center space-x-2 hover:opacity-90 active:scale-95 transition-all">
                <span className="material-symbols-outlined">add</span>
                <span>New Workspace</span>
              </button>
            </div>
          </section>

          {/* Section: Workspace Grid (Bento Style) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Card 1: Production_Alpha */}
            <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-10 flex flex-col justify-between shadow-[0_20px_40px_rgba(28,27,27,0.02)] transition-transform hover:scale-[1.01]">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-3xl font-bold tracking-tight">Production_Alpha</h2>
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-sm">AI Active</span>
                  </div>
                  <p className="text-on-surface-variant">Enterprise Plan</p>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-700"></span>
                  <span>Active</span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="space-y-1">
                  <span className="text-4xl font-extrabold tracking-tighter">12.4k</span>
                  <span className="text-sm font-medium text-on-surface-variant block uppercase tracking-wider">Articles Generated</span>
                </div>
                <Link href="/dashboard" className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all">
                  Enter Workspace
                </Link>
              </div>
            </div>

            {/* Card 2: Global_Marketing_HQ */}
            <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between transition-transform hover:scale-[1.01]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <h2 className="text-xl font-bold tracking-tight">Global_Marketing_HQ</h2>
                  <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    <span>Active</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant mb-6">Pro Plan</p>
                <div className="space-y-1">
                  <span className="text-2xl font-extrabold tracking-tighter">2.8k</span>
                  <span className="text-[10px] font-bold text-on-surface-variant block uppercase tracking-widest">Articles</span>
                </div>
              </div>
              <button className="mt-12 w-full bg-white border border-outline-variant/20 py-3 rounded-lg font-bold text-sm hover:bg-black/5 transition-colors">
                Enter Workspace
              </button>
            </div>

            {/* Card 3: Beta_Sandbox */}
            <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between transition-transform hover:scale-[1.01]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <h2 className="text-xl font-bold tracking-tight">Beta_Sandbox</h2>
                  <div className="flex items-center space-x-2 bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded-full text-[10px] font-bold">
                    <span>Maintenance</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant mb-6">Starter Plan</p>
                <div className="space-y-1">
                  <span className="text-2xl font-extrabold tracking-tighter">42</span>
                  <span className="text-[10px] font-bold text-on-surface-variant block uppercase tracking-widest">Articles</span>
                </div>
              </div>
              <button className="mt-12 w-full bg-white/50 border border-outline-variant/10 text-on-surface-variant/50 py-3 rounded-lg font-bold text-sm cursor-not-allowed">
                Access Paused
              </button>
            </div>

            {/* Add Workspace Ghost Card */}
            <div className="lg:col-span-8 border-2 border-dashed border-outline-variant/20 rounded-xl p-10 flex items-center justify-center group hover:bg-surface-container-low transition-colors cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">add_circle</span>
                </div>
                <p className="font-bold text-on-surface-variant">Create another node</p>
                <p className="text-xs text-outline">Scale your SEO architecture</p>
              </div>
            </div>
          </section>

          {/* Section: System Health (Bottom Tonal Shift) */}
          <section className="mt-24 p-12 bg-surface-container-low rounded-2xl flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-tertiary-fixed-variant mb-2 block">System Performance</span>
              <h3 className="text-3xl font-bold tracking-tight">Nodes running at 99.8%</h3>
              <p className="text-on-surface-variant text-sm mt-1">Global delivery networks are optimized and indexed.</p>
            </div>
            <div className="flex space-x-4">
              <div className="text-center px-6 border-r border-outline-variant/20">
                <p className="text-2xl font-bold">42ms</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase">Latency</p>
              </div>
              <div className="text-center px-6">
                <p className="text-2xl font-bold">1.2M</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase">Req/Hr</p>
              </div>
            </div>
          </section>
        </main>

        {/* FAB: Help Trigger */}
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-tertiary-container text-on-tertiary shadow-[0_10px_30px_rgba(28,0,98,0.3)] rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-95">
          <span className="material-symbols-outlined">smart_toy</span>
        </button>
      </div>
    </main>
  )
}