'use client'

import Link from 'next/link'

export default function DashboardPage() {
  return (
    <main className="flex-1 bg-surface">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pt-20 pb-32 px-6">
        {/* Status Indicator */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2 px-3 py-1 bg-tertiary-fixed rounded-full">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-fixed-variant animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-fixed-variant">Intelligence Active</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">All Nodes Optimal</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-[3.5rem] leading-[0.9] font-black tracking-tighter text-primary mb-4">
            Curating the<br/>future of SEO.
          </h1>
          <p className="text-on-surface-variant max-w-[80%] text-sm leading-relaxed">
            Autonomous programmatic systems for high-authority content generation and index optimization.
          </p>
        </section>

        {/* Key Metrics Bento */}
        <div className="grid grid-cols-1 gap-4 mb-12">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.03)] border border-outline-variant/10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">Total Indexed Pages</p>
                <h2 className="text-4xl font-extrabold tracking-tighter">48,291</h2>
              </div>
              <div className="bg-tertiary-fixed p-2 rounded-lg">
                <span className="material-symbols-outlined text-on-tertiary-fixed">trending_up</span>
              </div>
            </div>
            <div className="h-16 w-full flex items-end gap-1">
              <div className="flex-1 bg-zinc-100 h-1/4 rounded-sm"></div>
              <div className="flex-1 bg-zinc-100 h-2/4 rounded-sm"></div>
              <div className="flex-1 bg-zinc-100 h-1/3 rounded-sm"></div>
              <div className="flex-1 bg-zinc-100 h-2/3 rounded-sm"></div>
              <div className="flex-1 bg-zinc-100 h-3/4 rounded-sm"></div>
              <div className="flex-1 bg-zinc-100 h-1/2 rounded-sm"></div>
              <div className="flex-1 bg-primary h-full rounded-sm"></div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs font-bold text-on-tertiary-fixed-variant">+12.4%</span>
              <span className="text-xs text-secondary">vs last 30 days</span>
            </div>
          </div>
        </div>

        {/* Active Projects */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-manrope font-bold uppercase tracking-widest text-xs">Active Projects</h3>
            <span className="text-[10px] font-bold text-secondary">2 TOTAL</span>
          </div>
          <div className="space-y-4">
            {/* Project Card 1 */}
            <Link href="/dashboard/projects" className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined">flowsheet</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">SaaS Flow Redesign</h4>
                  <p className="text-xs text-on-surface-variant">8.4k pages generated</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">chevron_right</span>
            </Link>
            {/* Project Card 2 */}
            <Link href="/dashboard/projects" className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high text-primary flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined">folder_managed</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">E-comm Directory</h4>
                  <p className="text-xs text-on-surface-variant">39.2k pages generated</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">chevron_right</span>
            </Link>
          </div>
        </section>

        {/* New Project Action */}
        <section>
          <button className="w-full py-5 bg-primary text-on-primary rounded-lg flex items-center justify-center gap-3 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-lg">add</span>
            <span className="font-manrope font-extrabold uppercase tracking-widest text-xs">Initialize New Project</span>
          </button>
        </section>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:block p-12">
        {/* Welcome Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex justify-between items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-widest rounded">Intelligence Active</span>
              </div>
              <h1 className="text-6xl font-headline font-extrabold tracking-tighter text-primary leading-[0.9] mb-6">
                Curating the future of SEO.
              </h1>
              <p className="text-lg text-secondary font-body max-w-lg leading-relaxed">
                Your engine is currently processing 1,240 keywords across 4 active workspaces. Insights are refreshed in real-time.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-sm font-headline font-bold text-primary">System Status</span>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-bold text-green-700">All Nodes Optimal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Dashboard */}
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
          {/* Main Stats Card */}
          <div className="col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(28,27,27,0.02)] border border-outline-variant/10 flex flex-col justify-between min-h-[320px]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-secondary font-headline font-semibold text-xs uppercase tracking-widest mb-1">Total Indexed Pages</h3>
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-headline font-extrabold text-primary tracking-tighter">48,291</span>
                  <span className="text-green-600 text-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">trending_up</span>
                    +12.4%
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors text-xs font-bold">Week</button>
                <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-bold">Month</button>
              </div>
            </div>
            {/* Bar Chart */}
            <div className="flex items-end gap-2 h-32 pt-8">
              <div className="flex-1 bg-surface-container-low rounded-sm h-[30%] hover:h-[80%] transition-all duration-500 cursor-pointer"></div>
              <div className="flex-1 bg-surface-container-low rounded-sm h-[45%] hover:h-[80%] transition-all duration-500 cursor-pointer"></div>
              <div className="flex-1 bg-surface-container-low rounded-sm h-[35%] hover:h-[80%] transition-all duration-500 cursor-pointer"></div>
              <div className="flex-1 bg-primary rounded-sm h-[70%] hover:h-[90%] transition-all duration-500 cursor-pointer"></div>
              <div className="flex-1 bg-surface-container-low rounded-sm h-[55%] hover:h-[80%] transition-all duration-500 cursor-pointer"></div>
              <div className="flex-1 bg-surface-container-low rounded-sm h-[40%] hover:h-[80%] transition-all duration-500 cursor-pointer"></div>
              <div className="flex-1 bg-surface-container-low rounded-sm h-[60%] hover:h-[80%] transition-all duration-500 cursor-pointer"></div>
              <div className="flex-1 bg-surface-container-low rounded-sm h-[50%] hover:h-[80%] transition-all duration-500 cursor-pointer"></div>
            </div>
          </div>

          {/* AI Insights Side Card */}
          <div className="col-span-4 bg-tertiary-container text-white rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-on-tertiary-container/30 blur-[60px] rounded-full group-hover:bg-on-tertiary-container/50 transition-all duration-700"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-on-tertiary-container/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <h3 className="text-xl font-headline font-bold leading-tight mb-3">Keyword Opportunity Detected</h3>
              <p className="text-on-tertiary-container text-sm leading-relaxed mb-6 opacity-80">
                We found 12 high-intent keywords in the "FinTech" niche with low difficulty.
              </p>
            </div>
            <button className="relative z-10 w-full py-3 bg-white text-tertiary-container font-headline font-black text-xs uppercase tracking-widest rounded-lg hover:bg-tertiary-fixed transition-colors">
              Generate Report
            </button>
          </div>

          {/* Project List Area */}
          <div className="col-span-12 mt-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-headline font-extrabold tracking-tight">Active Projects</h2>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-secondary text-sm">search</span>
                  <input className="bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary/10 w-64 placeholder:text-secondary" placeholder="Filter projects..." type="text"/>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">sort</span>
                  Sort by Latest
                </button>
              </div>
            </div>

            {/* Card Row */}
            <div className="grid grid-cols-3 gap-6">
              {/* Project Card 1 */}
              <Link href="/dashboard/projects" className="group bg-surface-container-low hover:bg-surface-container-lowest hover:shadow-xl hover:shadow-black/[0.02] p-6 rounded-xl transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-primary">language</span>
                  </div>
                  <span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[9px] font-bold uppercase tracking-tighter rounded">In Progress</span>
                </div>
                <h4 className="font-headline font-bold text-lg mb-1 group-hover:translate-x-1 transition-transform">SaaS Flow Redesign</h4>
                <p className="text-secondary text-xs mb-6">Last updated 2 hours ago</p>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/5">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-surface-container-low"></div>
                    <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-surface-container-low"></div>
                  </div>
                  <span className="text-[10px] font-bold text-secondary">24 ARTICLES</span>
                </div>
              </Link>

              {/* Project Card 2 */}
              <Link href="/dashboard/projects" className="group bg-surface-container-low hover:bg-surface-container-lowest hover:shadow-xl hover:shadow-black/[0.02] p-6 rounded-xl transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-primary">shopping_bag</span>
                  </div>
                  <span className="px-2 py-1 bg-surface-container-high text-secondary text-[9px] font-bold uppercase tracking-tighter rounded">Queued</span>
                </div>
                <h4 className="font-headline font-bold text-lg mb-1 group-hover:translate-x-1 transition-transform">E-comm Directory</h4>
                <p className="text-secondary text-xs mb-6">Last updated 1 day ago</p>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/5">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-surface-container-low"></div>
                  </div>
                  <span className="text-[10px] font-bold text-secondary">1.2K ARTICLES</span>
                </div>
              </Link>

              {/* New Project Card */}
              <Link href="/dashboard/new" className="group bg-surface-container-low hover:bg-surface-container-lowest hover:shadow-xl hover:shadow-black/[0.02] p-6 rounded-xl transition-all duration-300 cursor-pointer border-2 border-dashed border-outline-variant/20 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary">add_circle</span>
                </div>
                <span className="font-headline font-bold text-secondary">Start New Engine</span>
                <p className="text-[10px] text-secondary mt-1 uppercase tracking-widest">Connect Domain</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}