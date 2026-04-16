'use client'

import Link from 'next/link'

export default function KeywordsDetailPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* TopAppBar */}
        <header className="fixed top-0 w-full z-50 bg-primary text-white h-16 flex items-center px-6 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary font-black text-xs">CE</div>
            <span className="font-headline font-bold tracking-tight text-xl">ContentEngine.ai</span>
          </div>
          <button className="active:scale-95 duration-200 transition-opacity hover:opacity-80">
            <span className="material-symbols-outlined text-white">settings</span>
          </button>
        </header>

        <main className="pt-24 pb-32 px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-body font-medium uppercase tracking-[0.1em] text-on-primary-container">Keywords</span>
            <span className="material-symbols-outlined text-[12px] text-on-primary-container">chevron_right</span>
            <span className="text-[10px] font-body font-medium uppercase tracking-[0.1em] text-on-surface">List Detail</span>
          </nav>

          {/* Title */}
          <h1 className="font-headline font-extrabold text-[40px] leading-[0.95] tracking-tighter mb-8 max-w-[280px]">
            SaaS Competitors - Q2
          </h1>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-12">
            <div className="bg-surface-container-lowest p-5 rounded-xl flex flex-col justify-between h-32 border border-outline-variant/10">
              <span className="text-[10px] font-body font-medium uppercase tracking-wider text-secondary">List Health</span>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-headline font-bold tracking-tight">94%</span>
                <span className="material-symbols-outlined text-on-tertiary-container text-sm mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-xl flex flex-col justify-between h-32">
              <span className="text-[10px] font-body font-medium uppercase tracking-wider text-secondary">Total Keywords</span>
              <span className="text-3xl font-headline font-bold tracking-tight">1,248</span>
            </div>
            <div className="bg-surface-container-low p-5 rounded-xl flex flex-col justify-between h-32">
              <span className="text-[10px] font-body font-medium uppercase tracking-wider text-secondary">Avg Difficulty</span>
              <span className="text-3xl font-headline font-bold tracking-tight">62</span>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl flex flex-col justify-between h-32 border border-outline-variant/10">
              <span className="text-[10px] font-body font-medium uppercase tracking-wider text-secondary">Potential Traffic</span>
              <span className="text-3xl font-headline font-bold tracking-tight">45.2k</span>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-2 mb-8">
            <div className="relative flex-1">
              <input className="w-full bg-surface-container-high border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/10 font-body" placeholder="Search keywords..." type="text"/>
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-sm">search</span>
            </div>
            <button className="bg-surface-container-high p-3 rounded-xl active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-on-surface">tune</span>
            </button>
            <button className="bg-surface-container-high p-3 rounded-xl active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-on-surface">swap_vert</span>
            </button>
          </div>

          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline font-bold text-lg">Active Queue</h2>
            <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">AI Curated</span>
          </div>

          {/* Keyword List Detail (Mobile Optimized Card Table) */}
          <div className="flex flex-col space-y-4 mb-12">
            {/* Card Item 1 */}
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/5">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col gap-1">
                  <span className="font-headline font-bold text-base leading-tight">CRM automations for SMBs</span>
                  <span className="text-[11px] font-medium text-secondary/60 tracking-wide uppercase">Topic: Enterprise SaaS</span>
                </div>
                <div className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded">ACTIVE</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1 w-full max-w-[120px]">
                  <div className="flex justify-between items-center text-[10px] font-bold text-secondary uppercase tracking-tighter">
                    <span>Difficulty</span>
                    <span>78%</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-20">more_horiz</span>
              </div>
            </div>

            {/* Card Item 2 */}
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/5">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col gap-1">
                  <span className="font-headline font-bold text-base leading-tight">Headless CMS comparison</span>
                  <span className="text-[11px] font-medium text-secondary/60 tracking-wide uppercase">Topic: Content Infra</span>
                </div>
                <div className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold px-2 py-1 rounded">PROCESSING</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1 w-full max-w-[120px]">
                  <div className="flex justify-between items-center text-[10px] font-bold text-secondary uppercase tracking-tighter">
                    <span>Difficulty</span>
                    <span>42%</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-20">more_horiz</span>
              </div>
            </div>

            {/* Card Item 3 */}
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/5">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col gap-1">
                  <span className="font-headline font-bold text-base leading-tight">B2B marketing trends 2024</span>
                  <span className="text-[11px] font-medium text-secondary/60 tracking-wide uppercase">Topic: Strategy</span>
                </div>
                <div className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded">ACTIVE</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1 w-full max-w-[120px]">
                  <div className="flex justify-between items-center text-[10px] font-bold text-secondary uppercase tracking-tighter">
                    <span>Difficulty</span>
                    <span>91%</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '91%' }}></div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-20">more_horiz</span>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-6 py-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant/20 disabled:opacity-30" disabled={true}>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="font-headline font-bold text-sm">01</span>
              <span className="text-secondary text-xs">of 24</span>
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant/20 active:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </main>

        {/* BottomNavBar */}
        <nav className="fixed bottom-0 w-full z-50 bg-primary/60 backdrop-blur-xl h-20 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] pb-safe">
          <div className="flex justify-around items-center h-full px-4 w-full">
            <Link href="/dashboard" className="flex flex-col items-center justify-center text-[#c4c7c7] px-4 py-1.5 active:scale-90 transition-transform duration-150">
              <span className="material-symbols-outlined mb-1">bolt</span>
              <span className="font-body text-[11px] font-medium tracking-wide uppercase">Engine</span>
            </Link>
            <Link href="/dashboard/keywords" className="flex flex-col items-center justify-center text-white bg-[#1c1b1b] rounded-xl px-4 py-1.5 active:scale-90 transition-transform duration-150">
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>folder_open</span>
              <span className="font-body text-[11px] font-medium tracking-wide uppercase">Assets</span>
            </Link>
            <Link href="/dashboard/analytics" className="flex flex-col items-center justify-center text-[#c4c7c7] px-4 py-1.5 active:scale-90 transition-transform duration-150">
              <span className="material-symbols-outlined mb-1">trending_up</span>
              <span className="font-body text-[11px] font-medium tracking-wide uppercase">Growth</span>
            </Link>
            <button className="flex flex-col items-center justify-center text-[#c4c7c7] px-4 py-1.5 active:scale-90 transition-transform duration-150">
              <span className="material-symbols-outlined mb-1">settings_input_component</span>
              <span className="font-body text-[11px] font-medium tracking-wide uppercase">System</span>
            </button>
          </div>
        </nav>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:flex">
        {/* SideNavBar */}
        <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-surface-container z-40">
          <div className="font-black tracking-tighter text-2xl px-4 py-6 text-primary">ContentEngine</div>
          <div className="px-4 mb-4">
            <div className="text-[10px] uppercase tracking-widest text-on-primary-container font-bold mb-4 opacity-50">Main Menu</div>
          </div>
          <nav className="flex flex-col h-full py-4 space-y-2">
            <Link href="/dashboard" className="text-secondary hover:bg-surface-container-high mx-2 my-1 rounded-lg flex items-center px-4 py-2.5 transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-medium">
              <span className="material-symbols-outlined mr-3">dashboard</span>
              Dashboard
            </Link>
            <Link href="/dashboard/keywords" className="text-secondary hover:bg-surface-container-high mx-2 my-1 rounded-lg flex items-center px-4 py-2.5 transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-medium">
              <span className="material-symbols-outlined mr-3">folder_open</span>
              Projects
            </Link>
            <Link href="/dashboard/keywords" className="bg-white text-primary rounded-lg mx-2 my-1 shadow-sm flex items-center px-4 py-2.5 transition-transform duration-200 font-headline text-sm font-medium">
              <span className="material-symbols-outlined mr-3">key</span>
              Keywords
            </Link>
            <Link href="/dashboard/articles/queue" className="text-secondary hover:bg-surface-container-high mx-2 my-1 rounded-lg flex items-center px-4 py-2.5 transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-medium">
              <span className="material-symbols-outlined mr-3">queue_play_next</span>
              Review Queue
            </Link>
            <Link href="/dashboard/briefs" className="text-secondary hover:bg-surface-container-high mx-2 my-1 rounded-lg flex items-center px-4 py-2.5 transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-medium">
              <span className="material-symbols-outlined mr-3">folder_open</span>
              Briefs
            </Link>
            <div className="mt-auto pb-4">
              <div className="px-4 py-4">
                <button className="w-full bg-primary text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest active:scale-95 transition-all">New Project</button>
              </div>
              <button className="flex items-center gap-3 px-4 py-2 text-secondary hover:bg-surface-container-high mx-2 my-1 rounded-lg font-headline text-xs font-medium w-full">
                <span className="material-symbols-outlined mr-3 text-lg">help</span>
                Help
              </button>
              <button className="flex items-center gap-3 px-4 py-2 text-secondary hover:bg-surface-container-high mx-2 my-1 rounded-lg font-headline text-xs font-medium w-full">
                <span className="material-symbols-outlined mr-3 text-lg">contact_support</span>
                Support
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="ml-64 min-h-screen">
          {/* TopNavBar */}
          <header className="bg-surface/60 backdrop-blur-xl text-primary font-headline tracking-tight shadow-[0_20px_40px_rgba(28,27,27,0.05)] flex justify-between items-center px-8 h-16 w-full z-50 sticky top-0">
            <div className="flex items-center space-x-8">
              <div className="flex space-x-6 h-full items-center">
                <Link href="/dashboard/keywords" className="text-primary font-semibold border-b-2 border-primary h-16 flex items-center hover:text-primary transition-colors duration-200">Workspace Alpha</Link>
                <span className="text-secondary font-medium h-16 flex items-center cursor-pointer">Workspace Beta</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="material-symbols-outlined text-xl">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-surface"></span>
              </div>
              <div className="h-8 w-8 rounded-full overflow-hidden bg-surface-container">
                <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiCUZ5wi8CfqA7nloYUPe9m7MBr-WdHr2HQLV0xPas8L5fIuie5r1caJ_VujTiWeTVDTx-52MwxmVZGZ-TMJyp4-NNAq6Sz7FWnVB8htriP2bGkmhtdUn6QYGmN3b21tgyCJryNclY5s1AST8HLQ-e1pSw1Ef08FwEQV0Be0YA-osum289o0THsB3zreuu2BHbUx4C2VrYULdtPpsetTIhynn3fQxa9Tx27lOIGUgxHg6R4YsNEdf2nlEW7rx4_S0UHM3-jicxzy8"/>
              </div>
            </div>
          </header>

          {/* Content Canvas */}
          <div className="p-12 max-w-7xl mx-auto space-y-12">
            {/* Breadcrumbs & Header Section */}
            <section className="space-y-6">
              <nav className="flex text-xs font-medium text-on-primary-container tracking-wider uppercase">
                <Link href="/dashboard/keywords" className="hover:text-primary">Keywords</Link>
                <span className="mx-3 opacity-30">/</span>
                <span className="text-primary">List Detail</span>
              </nav>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <h1 className="text-6xl font-headline font-extrabold tracking-tighter mb-4">SaaS Competitors - Q2</h1>
                  <p className="text-on-primary-container text-lg leading-relaxed font-body">Deep analytical intelligence on mid-market competitor landscape. Curated programmatic SEO targets for high-intent conversion queries.</p>
                </div>
                <div className="flex space-x-4">
                  <button className="px-6 py-3 rounded-sm border border-outline-variant font-headline font-bold text-xs uppercase tracking-widest hover:bg-surface-container-low transition-colors">Export CSV</button>
                  <button className="px-6 py-3 rounded-sm bg-primary text-white font-headline font-bold text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all">Start Automation</button>
                </div>
              </div>
            </section>

            {/* Bento Stats Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline-variant/10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-tertiary-fixed p-2 rounded-lg text-on-tertiary-fixed">
                    <span className="material-symbols-outlined">monitor_heart</span>
                  </div>
                </div>
                <div className="text-4xl font-headline font-extrabold tracking-tighter mb-1">94%</div>
                <div className="text-xs uppercase tracking-widest font-bold text-on-primary-container opacity-60">List Health</div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline-variant/10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-surface-container-high p-2 rounded-lg text-on-surface">
                    <span className="material-symbols-outlined">data_exploration</span>
                  </div>
                  <div className="flex items-center text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                    12%
                  </div>
                </div>
                <div className="text-4xl font-headline font-extrabold tracking-tighter mb-1">1,248</div>
                <div className="text-xs uppercase tracking-widest font-bold text-on-primary-container opacity-60">Total Keywords</div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline-variant/10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-surface-container-high p-2 rounded-lg text-on-surface">
                    <span className="material-symbols-outlined">signal_cellular_alt</span>
                  </div>
                  <div className="px-2 py-1 bg-yellow-50 text-yellow-700 text-[10px] font-black uppercase tracking-tighter rounded">Medium</div>
                </div>
                <div className="text-4xl font-headline font-extrabold tracking-tighter mb-1">62</div>
                <div className="text-xs uppercase tracking-widest font-bold text-on-primary-container opacity-60">Avg. Difficulty</div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline-variant/10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-surface-container-high p-2 rounded-lg text-on-surface">
                    <span className="material-symbols-outlined">rocket_launch</span>
                  </div>
                </div>
                <div className="text-4xl font-headline font-extrabold tracking-tighter mb-1">45.2k</div>
                <div className="text-xs uppercase tracking-widest font-bold text-on-primary-container opacity-60">Potential Traffic</div>
              </div>
            </section>

            {/* Main Data Table Section */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-headline font-extrabold tracking-tight">Active Keyword Queue</h2>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-surface-container-high rounded-lg text-sm font-medium hover:bg-surface-container-highest transition-colors">
                    <span className="material-symbols-outlined text-lg">filter_list</span>
                    <span>Filter</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-surface-container-high rounded-lg text-sm font-medium hover:bg-surface-container-highest transition-colors">
                    <span className="material-symbols-outlined text-lg">sort</span>
                    <span>Sort</span>
                  </button>
                </div>
              </div>
              <div className="overflow-hidden bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/50">
                      <th className="px-6 py-5 w-12">
                        <input className="rounded-sm border-outline-variant focus:ring-primary text-primary" type="checkbox"/>
                      </th>
                      <th className="px-6 py-5 text-[10px] uppercase tracking-widest font-bold text-on-primary-container opacity-60">Keyword</th>
                      <th className="px-6 py-5 text-[10px] uppercase tracking-widest font-bold text-on-primary-container opacity-60">Search Volume</th>
                      <th className="px-6 py-5 text-[10px] uppercase tracking-widest font-bold text-on-primary-container opacity-60">KD%</th>
                      <th className="px-6 py-5 text-[10px] uppercase tracking-widest font-bold text-on-primary-container opacity-60">Position</th>
                      <th className="px-6 py-5 text-[10px] uppercase tracking-widest font-bold text-on-primary-container opacity-60">Status</th>
                      <th className="px-6 py-5 text-[10px] uppercase tracking-widest font-bold text-on-primary-container opacity-60">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {/* Row 1 */}
                    <tr className="hover:bg-surface-container-low/30 transition-colors group">
                      <td className="px-6 py-6">
                        <input className="rounded-sm border-outline-variant focus:ring-primary text-primary" type="checkbox"/>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-sm tracking-tight mb-1">best saas analytics for mid-market</span>
                          <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 bg-surface-container-high w-fit rounded-full text-on-primary-container">Competitive Intel</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 font-body text-sm">12,400</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <span className="text-sm font-bold mr-2">72</span>
                          <div className="w-16 h-1 bg-surface-container-high rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full" style={{ width: '72%' }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-sm font-headline font-bold">14</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center px-2 py-1 rounded bg-tertiary-container/10 border border-tertiary-container/20 w-fit">
                          <div className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse mr-2"></div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-on-tertiary-container">WRITING</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-surface-container-low/30 transition-colors group">
                      <td className="px-6 py-6">
                        <input className="rounded-sm border-outline-variant focus:ring-primary text-primary" type="checkbox"/>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-sm tracking-tight mb-1">programmatic seo strategy 2024</span>
                          <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 bg-surface-container-high w-fit rounded-full text-on-primary-container">Hub Page</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 font-body text-sm">5,200</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <span className="text-sm font-bold mr-2">45</span>
                          <div className="w-16 h-1 bg-surface-container-high rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-sm opacity-30">—</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center px-2 py-1 rounded bg-surface-container-high border border-outline-variant/30 w-fit">
                          <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">BRIEFING</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-surface-container-low/30 transition-colors group">
                      <td className="px-6 py-6">
                        <input className="rounded-sm border-outline-variant focus:ring-primary text-primary" type="checkbox"/>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-sm tracking-tight mb-1">software comparison</span>
                          <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 bg-surface-container-high w-fit rounded-full text-on-primary-container">Product Comparison</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 font-body text-sm">8,900</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <span className="text-sm font-bold mr-2">81</span>
                          <div className="w-16 h-1 bg-surface-container-high rounded-full overflow-hidden">
                            <div className="bg-red-700 h-full" style={{ width: '81%' }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-sm font-headline font-bold">42</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center px-2 py-1 rounded bg-green-50 border border-green-200 w-fit">
                          <span className="text-[10px] font-black uppercase tracking-widest text-green-700">PUBLISHED</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* Pagination Footer */}
                <div className="px-8 py-6 bg-surface-container-low/30 flex items-center justify-between">
                  <span className="text-xs font-medium text-on-primary-container opacity-60">Showing 1-4 of 1,248 keywords</span>
                  <div className="flex items-center space-x-1">
                    <button className="p-2 rounded-lg hover:bg-surface-container-high disabled:opacity-30" disabled={true}>
                      <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold">1</button>
                    <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-xs font-bold">2</button>
                    <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-xs font-bold">3</button>
                    <span className="px-2 opacity-30 text-xs">...</span>
                    <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-xs font-bold">42</button>
                    <button className="p-2 rounded-lg hover:bg-surface-container-high">
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Intelligence Badge Float */}
          <div className="fixed bottom-8 right-8">
            <div className="flex items-center space-x-3 px-4 py-2 bg-tertiary-fixed text-on-tertiary-fixed font-bold text-[10px] uppercase tracking-widest rounded-full shadow-lg border border-on-tertiary-fixed/10">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <span>AI Engine Processing 12 Drafts</span>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}