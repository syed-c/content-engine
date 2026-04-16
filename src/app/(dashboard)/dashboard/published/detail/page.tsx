'use client'

import Link from 'next/link'

export default function PublishDetailPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* Mobile Version */}
      <div className="lg:hidden pb-32">
        <header className="sticky top-0 z-50 w-full flex justify-between items-center px-6 py-4 bg-surface/60 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <button className="hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-primary">arrow_back</span>
            </button>
            <h1 className="font-headline font-black text-xl tracking-tighter text-primary">Publish Details</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant/10">
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>
            <button className="hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-primary">notifications</span>
            </button>
          </div>
        </header>

        <main className="pt-24 px-6 space-y-10">
          {/* Hero Section: Article Title & Status */}
          <section className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  Optimized
                </span>
              </div>
              <h2 className="font-headline text-4xl font-extrabold tracking-tighter leading-[0.95] text-primary">
                The Future of Generative UI in 2024
              </h2>
            </div>
            <button className="w-full bg-primary text-on-primary py-5 rounded-lg font-headline font-extrabold text-lg flex justify-between items-center px-6 transition-transform active:scale-95 duration-200">
              View Live
              <span className="material-symbols-outlined">north_east</span>
            </button>
          </section>

          {/* Analytics Bento Module */}
          <section className="grid grid-cols-2 gap-3">
            <div className="col-span-2 bg-surface-container-low p-6 rounded-xl flex flex-col justify-between aspect-[2/1]">
              <p className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Impressions</p>
              <div className="flex items-end justify-between">
                <span className="font-headline text-6xl font-extrabold tracking-tighter">12.5k</span>
                <span className="bg-tertiary-container text-on-tertiary-container px-2 py-1 rounded text-[10px] font-bold mb-2">+12%</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between aspect-square border border-outline-variant/10">
              <p className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Pos.</p>
              <span className="font-headline text-5xl font-extrabold tracking-tighter text-primary">#14</span>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between aspect-square border border-outline-variant/10">
              <p className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">CTR</p>
              <span className="font-headline text-5xl font-extrabold tracking-tighter text-primary">3.2%</span>
            </div>
          </section>

          {/* Integration Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-xs font-black uppercase tracking-[0.2em] text-on-primary-container">Integrations</h3>
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            </div>
            <div className="bg-surface-container p-6 rounded-xl space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-white text-3xl">grid_view</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg text-primary tracking-tight">WEBFLOW</h4>
                    <p className="text-xs font-medium text-on-surface-variant tracking-wide">Sync Status: SYNCED</p>
                  </div>
                </div>
                <button className="bg-tertiary-container text-on-tertiary-container px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-opacity active:scale-95 duration-200">
                  Sync Now
                </button>
              </div>
              <div className="space-y-4">
                <p className="font-label text-[10px] font-bold uppercase tracking-widest text-on-primary-container">Fields Synced</p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-lg">
                    <span className="text-sm font-semibold tracking-tight">Title</span>
                    <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-lg">
                    <span className="text-sm font-semibold tracking-tight">Rich Text</span>
                    <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-lg opacity-50">
                    <span className="text-sm font-semibold tracking-tight">Canonical URL</span>
                    <span className="material-symbols-outlined text-on-surface-variant">circle</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Secondary Details */}
          <section className="space-y-4">
            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Revision History</h5>
                <span className="material-symbols-outlined text-sm">history</span>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-[2px] bg-tertiary-container/20 relative">
                    <div className="absolute top-0 -left-[3px] w-2 h-2 rounded-full bg-tertiary-container"></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Auto-optimization completed</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-medium">Today, 2:45 PM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-[2px] bg-tertiary-container/20 relative">
                    <div className="absolute top-0 -left-[3px] w-2 h-2 rounded-full bg-primary/20"></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface-variant">Initial crawl & indexing</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-medium">Yesterday, 9:12 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Bottom Navigation Shell */}
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-8 bg-surface/80 backdrop-blur-xl z-50 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
          <Link href="/dashboard/published" className="flex flex-col items-center justify-center text-secondary hover:text-primary active:scale-90 duration-200 ease-out">
            <span className="material-symbols-outlined">article</span>
            <span className="font-headline text-[10px] uppercase tracking-widest font-medium mt-1">Library</span>
          </Link>
          <Link href="/dashboard/articles/editor" className="flex flex-col items-center justify-center text-secondary hover:text-primary active:scale-90 duration-200 ease-out">
            <span className="material-symbols-outlined">edit_note</span>
            <span className="font-headline text-[10px] uppercase tracking-widest font-medium mt-1">Drafts</span>
          </Link>
          <Link href="/dashboard/analytics" className="flex flex-col items-center justify-center text-secondary hover:text-primary active:scale-90 duration-200 ease-out">
            <span className="material-symbols-outlined">query_stats</span>
            <span className="font-headline text-[10px] uppercase tracking-widest font-medium mt-1">Insights</span>
          </Link>
          <Link href="/dashboard" className="flex flex-col items-center justify-center text-secondary hover:text-primary active:scale-90 duration-200 ease-out">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="font-headline text-[10px] uppercase tracking-widest font-medium mt-1">Engine</span>
          </Link>
        </nav>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex">
        <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container flex flex-col p-6 pt-24 z-40">
          <div className="mb-12">
            <h2 className="font-headline font-black text-lg tracking-tighter text-primary">ContentEngine</h2>
            <p className="font-headline font-semibold uppercase tracking-widest text-[11px] text-secondary">Digital Curator</p>
          </div>
          <nav className="flex-1 space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high hover:pl-2 transition-all duration-300 font-headline font-semibold uppercase tracking-widest text-[11px]">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </Link>
            <Link href="/dashboard/published" className="flex items-center gap-3 px-4 py-3 bg-white text-primary rounded-sm shadow-sm hover:pl-2 transition-all duration-300 font-headline font-semibold uppercase tracking-widest text-[11px]">
              <span className="material-symbols-outlined">description</span>
              Content Library
            </Link>
            <button className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high hover:pl-2 transition-all duration-300 font-headline font-semibold uppercase tracking-widest text-[11px] w-full">
              <span className="material-symbols-outlined">auto_mode</span>
              Programmatic Rules
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high hover:pl-2 transition-all duration-300 font-headline font-semibold uppercase tracking-widest text-[11px] w-full">
              <span className="material-symbols-outlined">sync_alt</span>
              CMS Sync
            </button>
            <Link href="/dashboard/analytics" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high hover:pl-2 transition-all duration-300 font-headline font-semibold uppercase tracking-widest text-[11px]">
              <span className="material-symbols-outlined">analytics</span>
              Analytics
            </Link>
          </nav>
          <div className="mt-auto pt-8 border-t border-black/5 space-y-2">
            <button className="w-full bg-primary text-on-primary py-3 rounded-sm font-headline font-bold text-[11px] uppercase tracking-widest mb-6 active:scale-95 duration-100">
              New Campaign
            </button>
            <button className="flex items-center gap-3 px-4 py-2 text-secondary hover:bg-surface-container-high hover:pl-2 transition-all duration-300 font-headline font-semibold uppercase tracking-widest text-[11px] w-full">
              <span className="material-symbols-outlined">settings</span>
              Settings
            </button>
            <button className="flex items-center gap-3 px-4 py-2 text-secondary hover:bg-surface-container-high hover:pl-2 transition-all duration-300 font-headline font-semibold uppercase tracking-widest text-[11px] w-full">
              <span className="material-symbols-outlined">help</span>
              Support
            </button>
          </div>
        </aside>

        <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-8 pl-64">
            <span className="font-headline text-xl font-black tracking-tighter text-primary">ContentEngine.ai</span>
            <div className="hidden md:flex items-center gap-6">
              <span className="text-secondary font-medium hover:text-primary py-1 font-headline tracking-tight cursor-pointer">Articles</span>
              <span className="text-secondary font-medium hover:text-primary py-1 font-headline tracking-tight cursor-pointer">Keywords</span>
              <span className="text-secondary font-medium hover:text-primary py-1 font-headline tracking-tight cursor-pointer">Queue</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-primary cursor-pointer hover:scale-110 duration-200">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-primary cursor-pointer hover:scale-110 duration-200">
              <span className="material-symbols-outlined">auto_awesome</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/15 flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-xs">person</span>
            </div>
          </div>
        </header>

        <main className="pl-64 pt-24 min-h-screen">
          <div className="px-12 py-12 space-y-16 max-w-7xl mx-auto">
            {/* Hero Section: Header & Actions */}
            <section className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-2xl">
                <h1 className="text-6xl font-extrabold font-headline tracking-tighter text-primary leading-none mb-4">Publish Details</h1>
                <p className="text-secondary text-lg max-w-md font-light">Live asset configuration and CMS synchronization metadata.</p>
              </div>
              <div className="pb-1">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-sm font-headline font-bold text-sm tracking-tighter flex items-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                  View Live Article <span className="material-symbols-outlined">open_in_new</span>
                </button>
              </div>
            </section>

            {/* Grid Layout for Modules */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Asset Overview: Large Asymmetric Card */}
              <div className="lg:col-span-8 bg-surface-container-lowest p-10 rounded-lg shadow-[0_20px_40px_rgba(28,27,27,0.03)]">
                <div className="mb-12">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 block mb-2">Primary Asset</span>
                  <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-primary mb-2">The Future of Generative UI in 2024</h2>
                  <div className="flex items-center gap-4 text-stone-400">
                    <span className="text-sm font-medium">/blog/generative-ui-2024</span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                    <span className="text-sm font-medium">Oct 12, 2023</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-2">Primary Keyword</p>
                    <p className="text-xl font-headline font-bold text-primary">Generative UI</p>
                  </div>
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-2">Content Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tertiary-container shadow-[0_0_8px_#866cfe]"></div>
                      <span className="text-xl font-headline font-bold text-primary">Optimized</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Preview: Compact Metric Stack */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-primary text-on-primary p-8 rounded-lg flex flex-col justify-between h-full min-h-[300px]">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-8">Analytics (30d)</p>
                    <div className="space-y-8">
                      <div>
                        <p className="text-stone-500 text-xs mb-1">Current Position</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-headline font-black tracking-tighter">#14</span>
                          <span className="text-on-tertiary-container flex items-center text-xs font-bold bg-tertiary-container/20 px-2 py-0.5 rounded-sm">
                            <span className="material-symbols-outlined text-[14px]">north</span> +2
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-stone-500 text-xs mb-1">Impressions</p>
                          <p className="text-2xl font-headline font-bold">12,482</p>
                        </div>
                        <div>
                          <p className="text-stone-500 text-xs mb-1">Avg. CTR</p>
                          <p className="text-2xl font-headline font-bold">3.2%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10 mt-6">
                  <a className="text-[10px] uppercase tracking-widest font-bold hover:underline" href="#">Deep Analytics Report</a>
                </div>
              </div>
            </div>

            {/* CMS Sync Module: Full Width Integration View */}
            <div className="lg:col-span-12 bg-surface-container-low p-10 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="flex-1 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_sync</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Integration Status</p>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-headline font-extrabold text-primary uppercase">Webflow</h3>
                        <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                          <span className="text-[10px] font-bold text-emerald-600 uppercase">Synced</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-2">Collection</p>
                    <p className="text-sm font-bold text-primary font-headline">Blog Posts</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-2">Connection ID</p>
                    <p className="text-sm font-bold text-stone-600 font-mono tracking-tighter">WF-90210-AX</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-2">Last Sync</p>
                    <p className="text-sm font-bold text-primary font-headline">2 mins ago</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-80 bg-white p-6 rounded-lg shadow-sm mt-8">
                <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-4">Fields Synced</p>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between group">
                    <span className="text-xs font-medium text-stone-600">Title</span>
                    <span className="material-symbols-outlined text-[14px] text-emerald-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-600">Rich Text</span>
                    <span className="material-symbols-outlined text-[14px] text-emerald-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-600">Meta Title</span>
                    <span className="material-symbols-outlined text-[14px] text-emerald-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-600">Meta Description</span>
                    <span className="material-symbols-outlined text-[14px] text-emerald-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-600">JSON-LD Schema</span>
                    <span className="material-symbols-outlined text-[14px] text-emerald-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-stone-100 flex justify-center">
                  <button className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                    Sync Now <span className="material-symbols-outlined text-[14px]">refresh</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Intelligence Badge Section (Footer CTA) */}
            <section className="mt-24 py-12 flex justify-between items-center border-t border-stone-100">
              <div className="flex items-center gap-4">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase">Intelligence Badge</span>
                <p className="text-xs text-stone-400">Content generated and maintained by ContentEngine.ai</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-surface-container-high text-primary px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all hover:bg-stone-200">Re-generate</button>
                <button className="bg-primary text-on-primary px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all hover:opacity-80">Edit Article</button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </main>
  )
}