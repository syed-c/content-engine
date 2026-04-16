'use client'

import Link from 'next/link'

export default function KeywordsPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* TopAppBar */}
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-headline font-extrabold text-xs">
              W
            </div>
            <span className="font-headline font-extrabold tracking-tighter uppercase text-primary text-sm">Workspace</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-primary">bubble_chart</span>
            </button>
          </div>
        </header>

        <main className="pt-24 px-6 space-y-12">
          {/* Headline Section */}
          <section className="space-y-2">
            <h1 className="font-headline font-extrabold text-5xl tracking-tighter text-primary leading-none">
              Keywords<br/>Overview
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-tertiary-container shadow-[0_0_8px_#866cfe]"></div>
              <span className="font-label text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Live Engine Analytics</span>
            </div>
          </section>

          {/* High-Impact Metric Cards (Asymmetric Layout) */}
          <section className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
              <span className="font-label text-[10px] font-bold tracking-widest uppercase text-on-surface-variant block mb-1">Total Keywords</span>
              <div className="flex items-baseline gap-2">
                <span className="font-headline font-extrabold text-4xl tracking-tighter">12,482</span>
                <span className="font-label text-sm font-bold text-tertiary-container">+12%</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl">
              <span className="font-label text-[10px] font-bold tracking-widest uppercase text-on-surface-variant block mb-1">Avg. Position</span>
              <span className="font-headline font-extrabold text-3xl tracking-tighter">14.2</span>
            </div>
            <div className="bg-primary text-on-primary p-6 rounded-xl">
              <span className="font-label text-[10px] font-bold tracking-widest uppercase text-on-primary/60 block mb-1">Total Volume</span>
              <span className="font-headline font-extrabold text-3xl tracking-tighter">2.4M</span>
            </div>
          </section>

          {/* Active Keyword List */}
          <section className="space-y-6">
            <div className="flex justify-between items-end">
              <h2 className="font-headline font-bold text-xl tracking-tight">Active Engine</h2>
              <span className="font-label text-[10px] font-bold uppercase text-outline underline decoration-2 underline-offset-4">Filter By Volume</span>
            </div>
            <div className="space-y-4">
              {/* Keyword Item 1 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl flex justify-between items-center group active:scale-[0.98] transition-transform cursor-pointer">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-body font-bold text-sm tracking-tight">best ai writing tools 2024</span>
                    <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant font-label text-[8px] font-black uppercase rounded-full">AI GEN</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">
                    <span>Vol: 45.2k</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                    <span>Pos: #3</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
              </div>

              {/* Keyword Item 2 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl flex justify-between items-center group active:scale-[0.98] transition-transform cursor-pointer">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-body font-bold text-sm tracking-tight">programmatic seo strategy</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">
                    <span>Vol: 12.8k</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                    <span>Pos: #12</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
              </div>

              {/* Keyword Item 3 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl flex justify-between items-center group active:scale-[0.98] transition-transform cursor-pointer">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-body font-bold text-sm tracking-tight">ai driven content curation</span>
                    <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant font-label text-[8px] font-black uppercase rounded-full">AI GEN</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">
                    <span>Vol: 8.4k</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                    <span>Pos: #1</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
              </div>

              {/* Keyword Item 4 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl flex justify-between items-center group active:scale-[0.98] transition-transform cursor-pointer">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-body font-bold text-sm tracking-tight">headless cms for seo</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">
                    <span>Vol: 5.1k</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                    <span>Pos: #24</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
              </div>
            </div>
          </section>
        </main>

        {/* Floating Action Button */}
        <button className="fixed bottom-28 right-6 w-14 h-14 bg-tertiary-container rounded-full flex items-center justify-center shadow-[0_12px_24px_rgba(28,0,98,0.3)] active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-on-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
        </button>

        {/* BottomNavBar */}
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-surface/60 backdrop-blur-2xl rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
          <Link href="/dashboard" className="flex flex-col items-center justify-center text-[#c4c7c7] px-4 py-2 hover:text-[#121212] transition-colors">
            <span className="material-symbols-outlined text-2xl mb-1">grid_view</span>
            <span className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase">Studio</span>
          </Link>
          <Link href="/dashboard/keywords" className="flex flex-col items-center justify-center text-[#121212] bg-surface-container rounded-xl px-4 py-2">
            <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase">Engine</span>
          </Link>
          <Link href="/dashboard/analytics" className="flex flex-col items-center justify-center text-[#c4c7c7] px-4 py-2 hover:text-[#121212] transition-colors">
            <span className="material-symbols-outlined text-2xl mb-1">trending_up</span>
            <span className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase">Growth</span>
          </Link>
          <button className="flex flex-col items-center justify-center text-[#c4c7c7] px-4 py-2 hover:text-[#121212] transition-colors">
            <span className="material-symbols-outlined text-2xl mb-1">settings</span>
            <span className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase">System</span>
          </button>
        </nav>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:flex">
        {/* SideNavBar */}
        <aside className="flex flex-col h-screen w-64 p-6 bg-surface font-headline tracking-tight sticky top-0 border-r border-outline-variant/10">
          <div className="mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>dataset</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter text-black">ContentEngine.ai</h1>
              <p className="text-[10px] uppercase tracking-widest text-on-primary-container font-bold">Programmatic SEO</p>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-surface-container/50 transition-colors rounded-lg">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm">Dashboard</span>
            </Link>
            <Link href="/dashboard/keywords" className="flex items-center gap-3 px-4 py-3 bg-surface-container text-primary font-semibold rounded-lg scale-95 duration-150">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>key_visualizer</span>
              <span className="text-sm">Keywords</span>
            </Link>
            <Link href="/dashboard/articles/queue" className="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-surface-container/50 transition-colors rounded-lg">
              <span className="material-symbols-outlined">rate_review</span>
              <span className="text-sm">Review Queue</span>
            </Link>
            <Link href="/dashboard/briefs" className="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-surface-container/50 transition-colors rounded-lg">
              <span className="material-symbols-outlined">folder_open</span>
              <span className="text-sm">Briefs</span>
            </Link>
          </nav>
          <button className="mt-auto w-full py-3 bg-primary text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined text-sm">add</span>
            <span className="text-sm">New Project</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* TopNavBar */}
          <header className="flex justify-between items-center w-full px-8 h-16 sticky top-0 z-40 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/10">
            <div className="flex items-center gap-8">
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-outline text-lg">search</span>
                <input className="bg-surface-container-high/50 border-none rounded-lg py-1.5 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary focus:bg-surface-container-highest transition-all font-body" placeholder="Search workspace..." type="text"/>
              </div>
              <nav className="hidden md:flex items-center gap-6 font-headline text-sm">
                <Link href="/dashboard/analytics" className="text-secondary hover:text-primary transition-all">Analytics</Link>
                <span className="text-secondary hover:text-primary transition-all cursor-pointer">Engine Status</span>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg tracking-tight uppercase">Upgrade</button>
              <button className="text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">help</span>
              </button>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/15">
                <img alt="User Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGe56VvJ_DxvdsVj4NKRNhmoac7MB5IMFGNcUbNeNdF0dY51HH1t8tdVjpF4FCOQJNRCIMiEYrZJW9WY2Nic0S8mq2vf822Dnr1ndns53dXkRFzDX9kjytkFNV7nT_A5i-2ox8yBqQgMEMrQmIPfSYlxgo6HC--ZOXUFTSbKjiWKfoL2P5mVj0XDS9BynNuqyAUzGdhFnqWPLJxbCWcl6jQvZHU8BySJIic0NsLFw9LVACd6AOt4ILEbZ9gUfK1yTstPyDApTNzws"/>
              </div>
            </div>
          </header>

          {/* Canvas */}
          <div className="p-10 space-y-12">
            {/* Page Title & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-1">
                <h2 className="text-5xl font-headline font-extrabold tracking-tighter">Keywords Overview</h2>
                <p className="text-on-primary-container font-body">Manage and monitor your programmatic semantic architecture.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/10 cursor-pointer hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-sm text-outline mr-2">filter_list</span>
                  <span className="text-xs font-bold font-headline uppercase tracking-wider">Filters</span>
                </div>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-headline font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all">
                  <span className="material-symbols-outlined text-base">add_circle</span>
                  Add Keywords
                </button>
              </div>
            </div>

            {/* Stats Summary Row - Bento Style */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-start">
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-on-primary-container">Total Keywords</p>
                  <span className="material-symbols-outlined text-primary/20">key</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-headline font-extrabold">12,482</h3>
                  <span className="text-xs font-bold text-green-600">+12%</span>
                </div>
                <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4"></div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-start">
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-on-primary-container">Avg. Position</p>
                  <span className="material-symbols-outlined text-primary/20">show_chart</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-headline font-extrabold">14.2</h3>
                  <span className="text-xs font-bold text-green-600">↑ 2.4</span>
                </div>
                <div className="flex gap-1 items-end h-8">
                  <div className="w-full bg-surface-container h-1/2"></div>
                  <div className="w-full bg-surface-container h-2/3"></div>
                  <div className="w-full bg-primary h-3/4"></div>
                  <div className="w-full bg-primary h-full"></div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-start">
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-on-primary-container">Total Volume</p>
                  <span className="material-symbols-outlined text-primary/20">groups</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-headline font-extrabold">2.4M</h3>
                  <span className="text-xs font-bold text-secondary">Stable</span>
                </div>
                <div className="flex gap-1 items-end h-8">
                  <div className="w-full bg-primary h-4/5"></div>
                  <div className="w-full bg-primary h-4/5"></div>
                  <div className="w-full bg-primary h-4/5"></div>
                  <div className="w-full bg-primary h-4/5"></div>
                </div>
              </div>
              <div className="bg-primary text-white p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-start">
                  <p className="text-xs font-headline font-bold uppercase tracking-widest opacity-60">Ranking Progress</p>
                  <span className="material-symbols-outlined opacity-60">trending_up</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-headline font-extrabold">+420</h3>
                  <span className="text-xs font-bold text-green-400">New Wins</span>
                </div>
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Keywords Data Table Section */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="p-6 flex items-center justify-between border-b border-outline-variant/10">
                <h4 className="font-headline font-extrabold text-lg">Active Keyword List</h4>
                <div className="flex gap-4">
                  <div className="text-xs font-bold py-1 px-3 bg-surface-container rounded-full cursor-pointer hover:bg-surface-container-high transition-colors">Export CSV</div>
                  <div className="text-xs font-bold py-1 px-3 bg-surface-container rounded-full cursor-pointer hover:bg-surface-container-high transition-colors">Bulk Actions</div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[11px] font-headline font-bold uppercase tracking-widest text-on-primary-container border-b border-outline-variant/5">
                      <th className="px-8 py-5">Keyword</th>
                      <th className="px-6 py-5">Search Volume</th>
                      <th className="px-6 py-5">KD %</th>
                      <th className="px-6 py-5">Position</th>
                      <th className="px-6 py-5">Target URL</th>
                      <th className="px-6 py-5">Status</th>
                      <th className="px-8 py-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-body divide-y divide-outline-variant/5">
                    {/* Row 1 */}
                    <tr className="hover:bg-white/50 transition-colors group">
                      <td className="px-8 py-6 font-semibold text-primary">best ai writing tools 2024</td>
                      <td className="px-6 py-6 font-medium">42,500</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[78%]"></div>
                          </div>
                          <span className="text-xs font-bold">78</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-1">
                          <span className="font-bold">4</span>
                          <span className="material-symbols-outlined text-green-500 text-xs">arrow_drop_up</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-secondary truncate max-w-[200px]">/blog/ai-writing-tools</td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">Published</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-secondary hover:text-primary">more_horiz</span></button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-white/50 transition-colors group">
                      <td className="px-8 py-6 font-semibold text-primary">programmatic seo strategy</td>
                      <td className="px-6 py-6 font-medium">12,100</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 w-[42%]"></div>
                          </div>
                          <span className="text-xs font-bold">42</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-1 text-secondary">
                          <span className="font-bold">12</span>
                          <span className="text-[10px]">--</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-secondary truncate max-w-[200px]">/guides/programmatic-seo</td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-wider">Writing</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-secondary hover:text-primary">more_horiz</span></button>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-white/50 transition-colors group">
                      <td className="px-8 py-6 font-semibold text-primary">headless cms for seo</td>
                      <td className="px-6 py-6 font-medium">8,900</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[24%]"></div>
                          </div>
                          <span className="text-xs font-bold">24</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-1">
                          <span className="font-bold">8</span>
                          <span className="material-symbols-outlined text-red-500 text-xs">arrow_drop_down</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-secondary truncate max-w-[200px]">/blog/cms-comparison</td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider">Queued</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-secondary hover:text-primary">more_horiz</span></button>
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-white/50 transition-colors group">
                      <td className="px-8 py-6 font-semibold text-primary">semantic web structure 101</td>
                      <td className="px-6 py-6 font-medium">3,200</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[12%]"></div>
                          </div>
                          <span className="text-xs font-bold">12</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-1 text-secondary font-bold">--</div>
                      </td>
                      <td className="px-6 py-6 text-secondary truncate max-w-[200px]">/basics/semantic-web</td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-200 text-stone-600 text-[10px] font-bold uppercase tracking-wider">Briefing</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-secondary hover:text-primary">more_horiz</span></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-6 flex items-center justify-between bg-surface-container-lowest border-t border-outline-variant/10 font-headline">
                <p className="text-xs font-bold text-on-primary-container">Showing 1-10 of 12,482 keywords</p>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-all">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-xs">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 font-bold text-xs hover:bg-surface-container-high">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 font-bold text-xs hover:bg-surface-container-high">3</button>
                  <span className="px-2 text-secondary">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 font-bold text-xs hover:bg-surface-container-high">1248</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-all">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Intelligence Accent Section */}
            <div className="p-8 rounded-2xl bg-tertiary-container relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container via-transparent to-on-tertiary-container/20 opacity-50"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/20 border border-tertiary-fixed/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
                    <span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">AI Intelligence Engine Active</span>
                  </div>
                  <h5 className="text-3xl font-headline font-extrabold text-white leading-tight">Ready to generate content for <br/>4,200 identified low-KD keywords?</h5>
                </div>
                <button className="whitespace-nowrap px-8 py-4 bg-on-tertiary-container text-tertiary-container font-headline font-extrabold rounded-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(134,108,254,0.4)]">
                  Start Bulk Generation
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}