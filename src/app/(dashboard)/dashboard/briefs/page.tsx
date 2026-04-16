'use client'

import Link from 'next/link'

export default function BriefsPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* TopAppBar */}
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] flex items-center justify-between px-6 py-6 w-full">
          <div className="flex items-center gap-3 active:scale-95 duration-200 transition-all">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white overflow-hidden">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
            </div>
            <span className="text-xl font-black tracking-[-0.04em] text-primary font-headline">ContentEngine</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-primary hover:opacity-70 transition-all active:scale-95 duration-200" data-icon="settings">settings</button>
          </div>
        </header>

        <main className="pt-28 px-6 space-y-8">
          {/* Header Section */}
          <section className="space-y-1">
            <h1 className="text-4xl font-extrabold font-headline tracking-tighter text-primary">Briefs Queue</h1>
            <p className="text-on-surface-variant font-medium">Manage pending AI-generated structures.</p>
          </section>

          {/* High-Impact Stats Bento */}
          <section className="grid grid-cols-2 gap-3">
            <div className="col-span-2 bg-primary p-6 rounded-xl text-on-primary flex flex-col justify-between h-40 shadow-lg">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Pending Briefs</span>
                <span className="material-symbols-outlined opacity-60" data-icon="pending_actions">pending_actions</span>
              </div>
              <div className="text-6xl font-black font-headline tracking-tight">24</div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-xl flex flex-col justify-between h-32">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Avg. Time</span>
              <div className="text-2xl font-bold font-headline">1.2<span className="text-sm opacity-50">min</span></div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-xl flex flex-col justify-between h-32">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></div>
                <div className="text-2xl font-bold font-headline tracking-tight">Active</div>
              </div>
            </div>
          </section>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
            <button className="bg-primary text-on-primary px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">All Briefs</button>
            <button className="bg-surface-container-high text-on-surface px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">High Priority</button>
            <button className="bg-surface-container-high text-on-surface px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">Review Needed</button>
          </div>

          {/* Vertical List of Briefs */}
          <section className="space-y-4">
            {/* Brief Item 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tight">AI Engine v4</span>
                    <span className="text-[10px] text-on-surface-variant font-medium">2m ago</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline tracking-tight">How to scale SaaS with SEO</h3>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Quality</span>
                  <div className="w-12 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="bg-tertiary-container h-full w-[94%]"></div>
                  </div>
                  <span className="text-xs font-bold mt-1 text-on-tertiary-fixed-variant">94%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 py-2 border-y border-outline-variant/10">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase">Keyword</p>
                  <p className="text-sm font-semibold tracking-tight">SaaS Growth Strategies</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase">Primary Topic</p>
                  <p className="text-sm font-semibold tracking-tight">Programmatic SEO</p>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Link href="/dashboard/briefs/editor" className="flex-1 bg-primary text-on-primary py-3 rounded-lg text-xs font-bold hover:opacity-90 active:scale-[0.98] transition-all text-center">Review Brief</Link>
                <button className="w-12 h-12 bg-surface-container-high text-on-surface flex items-center justify-center rounded-lg active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined" data-icon="refresh">refresh</span>
                </button>
              </div>
            </div>

            {/* Brief Item 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tight">Legacy Engine</span>
                    <span className="text-[10px] text-on-surface-variant font-medium">15m ago</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline tracking-tight">Top 10 Crypto Wallets 2024</h3>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Quality</span>
                  <div className="w-12 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="bg-error h-full w-[62%]"></div>
                  </div>
                  <span className="text-xs font-bold mt-1 text-error">62%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 py-2 border-y border-outline-variant/10">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase">Keyword</p>
                  <p className="text-sm font-semibold tracking-tight">Crypto Security</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase">Primary Topic</p>
                  <p className="text-sm font-semibold tracking-tight">Blockchain Tech</p>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Link href="/dashboard/briefs/editor" className="flex-1 bg-primary text-on-primary py-3 rounded-lg text-xs font-bold hover:opacity-90 active:scale-[0.98] transition-all text-center">Review Brief</Link>
                <button className="w-12 h-12 bg-surface-container-high text-on-surface flex items-center justify-center rounded-lg active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined" data-icon="refresh">refresh</span>
                </button>
              </div>
            </div>

            {/* Brief Item 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tight">AI Engine v4</span>
                    <span className="text-[10px] text-on-surface-variant font-medium">1h ago</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline tracking-tight">Future of Remote Work Culture</h3>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Quality</span>
                  <div className="w-12 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="bg-tertiary-container h-full w-[88%]"></div>
                  </div>
                  <span className="text-xs font-bold mt-1 text-on-tertiary-fixed-variant">88%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 py-2 border-y border-outline-variant/10">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase">Keyword</p>
                  <p className="text-sm font-semibold tracking-tight">Remote Work Trends</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase">Primary Topic</p>
                  <p className="text-sm font-semibold tracking-tight">HR Tech</p>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Link href="/dashboard/briefs/editor" className="flex-1 bg-primary text-on-primary py-3 rounded-lg text-xs font-bold hover:opacity-90 active:scale-[0.98] transition-all text-center">Review Brief</Link>
                <button className="w-12 h-12 bg-surface-container-high text-on-surface flex items-center justify-center rounded-lg active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined" data-icon="refresh">refresh</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:block">
        {/* Canvas */}
        <div className="pt-32 pb-16 px-12 max-w-7xl mx-auto">
          {/* Header Section */}
          <section className="mb-16">
            <h2 className="text-6xl font-headline font-extrabold tracking-tighter text-primary mb-4">Review Queue</h2>
            <p className="text-xl text-secondary font-light max-w-2xl">Approve and refine AI-generated briefs before production.</p>
          </section>

          {/* Stats Row: Bento Style */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
              <span className="font-headline font-bold uppercase text-[10px] tracking-widest text-secondary">Pending Briefs</span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-headline font-black tracking-tighter">14</span>
                <span className="text-emerald-600 text-sm font-bold">+2 today</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
              <span className="font-headline font-bold uppercase text-[10px] tracking-widest text-secondary">Avg. Generation Time</span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-headline font-black tracking-tighter">42<span className="text-2xl">s</span></span>
                <span className="text-secondary text-sm font-bold">-5s optimize</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
              <span className="font-headline font-bold uppercase text-[10px] tracking-widest text-secondary">Queue Status</span>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"></div>
                <span className="text-2xl font-headline font-bold tracking-tight">Active</span>
              </div>
            </div>
          </section>

          {/* Data Table Section */}
          <section className="bg-surface-container-lowest rounded-xl overflow-hidden">
            <div className="px-8 py-6 flex justify-between items-center border-b border-transparent">
              <h3 className="font-headline font-black text-sm uppercase tracking-widest">Awaiting Review</h3>
              <div className="flex gap-2">
                <div className="bg-surface-container-high px-3 py-1.5 rounded flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">search</span>
                  <input className="bg-transparent border-none p-0 text-xs focus:ring-0 w-32 placeholder:text-secondary" placeholder="Filter keywords..." type="text"/>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-8 py-4 font-headline font-bold uppercase text-[10px] tracking-widest text-secondary">Keyword</th>
                    <th className="px-8 py-4 font-headline font-bold uppercase text-[10px] tracking-widest text-secondary">Primary Topic</th>
                    <th className="px-8 py-4 font-headline font-bold uppercase text-[10px] tracking-widest text-secondary">Word Target</th>
                    <th className="px-8 py-4 font-headline font-bold uppercase text-[10px] tracking-widest text-secondary">AI Quality</th>
                    <th className="px-8 py-4 font-headline font-bold uppercase text-[10px] tracking-widest text-secondary text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y-0">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-8 py-6">
                      <span className="font-headline font-bold text-primary text-sm">sustainable architecture trends 2024</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm text-secondary">Green Building Tech</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="font-mono text-xs text-secondary tracking-tighter">2,500</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1 bg-secondary/20 rounded-full max-w-[60px]">
                          <div className="h-full bg-primary rounded-full" style={{ width: '94%' }}></div>
                        </div>
                        <span className="font-headline font-black text-xs">94</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right space-x-2">
                      <Link href="/dashboard/briefs/editor" className="bg-primary text-white px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:scale-95 transition-all inline-block">Review</Link>
                      <button className="bg-transparent border border-secondary/20 text-primary px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-surface-container-high transition-all">Regenerate</button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-8 py-6">
                      <span className="font-headline font-bold text-primary text-sm">remote work ergonomic setups</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm text-secondary">Home Office Wellness</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="font-mono text-xs text-secondary tracking-tighter">1,200</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1 bg-secondary/20 rounded-full max-w-[60px]">
                          <div className="h-full bg-primary rounded-full" style={{ width: '82%' }}></div>
                        </div>
                        <span className="font-headline font-black text-xs">82</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right space-x-2">
                      <Link href="/dashboard/briefs/editor" className="bg-primary text-white px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:scale-95 transition-all inline-block">Review</Link>
                      <button className="bg-transparent border border-secondary/20 text-primary px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-surface-container-high transition-all">Regenerate</button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-8 py-6">
                      <span className="font-headline font-bold text-primary text-sm">ai-native saas design principles</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm text-secondary">UX Design</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="font-mono text-xs text-secondary tracking-tighter">3,000</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1 bg-secondary/20 rounded-full max-w-[60px]">
                          <div className="h-full bg-primary rounded-full" style={{ width: '98%' }}></div>
                        </div>
                        <span className="font-headline font-black text-xs">98</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right space-x-2">
                      <Link href="/dashboard/briefs/editor" className="bg-primary text-white px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:scale-95 transition-all inline-block">Review</Link>
                      <button className="bg-transparent border border-secondary/20 text-primary px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-surface-container-high transition-all">Regenerate</button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-8 py-6">
                      <span className="font-headline font-bold text-primary text-sm">minimalist lifestyle guide 2024</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm text-secondary">Lifestyle &amp; Travel</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="font-mono text-xs text-secondary tracking-tighter">1,800</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1 bg-secondary/20 rounded-full max-w-[60px]">
                          <div className="h-full bg-primary rounded-full" style={{ width: '71%' }}></div>
                        </div>
                        <span className="font-headline font-black text-xs">71</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right space-x-2">
                      <Link href="/dashboard/briefs/editor" className="bg-primary text-white px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:scale-95 transition-all inline-block">Review</Link>
                      <button className="bg-transparent border border-secondary/20 text-primary px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-surface-container-high transition-all">Regenerate</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-8 py-6 bg-surface-container-low flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Showing 4 of 14 Briefs</span>
              <div className="flex gap-4">
                <button className="text-secondary hover:text-primary transition-all">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="text-primary transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </section>

          {/* Secondary Actions: Bulk & Filters */}
          <div className="mt-12 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="bg-tertiary-container text-on-tertiary-container px-6 py-3 rounded shadow-[0_0_15px_rgba(28,0,98,0.2)] font-headline font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                Bulk Approve All High Score
              </button>
            </div>
            <div className="flex items-center gap-4 text-secondary font-headline font-bold text-[10px] uppercase tracking-widest">
              <span>Export Queue:</span>
              <button className="hover:text-primary transition-colors underline decoration-2 underline-offset-4">CSV</button>
              <button className="hover:text-primary transition-colors underline decoration-2 underline-offset-4">PDF</button>
              <button className="hover:text-primary transition-colors underline decoration-2 underline-offset-4">JSON</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}