'use client'

import Link from 'next/link'

export default function RankDetailPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* Top Navigation */}
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] h-20 flex justify-between items-center px-6">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/analytics" className="active:scale-95 transition-transform p-2 bg-surface-container-low rounded-sm">
              <span className="material-symbols-outlined text-primary" data-icon="arrow_back">arrow_back</span>
            </Link>
            <h1 className="font-headline font-bold tracking-tight text-xl text-primary">Rank Details</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" data-icon="search">search</span>
          </div>
        </header>

        <main className="pt-24 px-6 space-y-8">
          {/* Hero Metrics: High-impact Typography */}
          <section className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {/* Primary Metric */}
              <div className="bg-primary-container p-8 rounded-lg shadow-sm flex flex-col justify-between aspect-video">
                <span className="text-on-primary-container font-medium text-xs uppercase tracking-widest">Current Rank</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline font-black text-7xl text-white tracking-tighter">#4</span>
                  <span className="text-on-tertiary-container text-sm font-bold">+2 pos</span>
                </div>
              </div>
              {/* Secondary Metrics Bento */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/15">
                  <span className="text-secondary text-[10px] uppercase tracking-widest font-bold">Avg. CTR</span>
                  <div className="font-headline font-extrabold text-3xl mt-2 text-primary">18.4%</div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/15">
                  <span className="text-secondary text-[10px] uppercase tracking-widest font-bold">Impressions</span>
                  <div className="font-headline font-extrabold text-3xl mt-2 text-primary">142K</div>
                </div>
              </div>
            </div>
          </section>

          {/* Keyword Display */}
          <section>
            <h2 className="font-headline font-extrabold text-2xl text-primary tracking-tight">ai programmatic seo strategy</h2>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
                Live Position
              </span>
              <span className="text-xs text-secondary font-medium tracking-tight">14 mins ago</span>
            </div>
          </section>

          {/* Visual Trajectory: Ranking History */}
          <section className="space-y-4">
            <div className="flex justify-between items-end">
              <h2 className="font-headline font-bold text-lg">Ranking History</h2>
              <span className="text-secondary text-[10px] uppercase tracking-widest font-bold">Last 90 Days</span>
            </div>
            <div className="bg-surface-container-low h-48 w-full rounded-lg relative overflow-hidden flex items-end p-4">
              {/* SVG Chart Mockup */}
              <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 400 100">
                <path d="M0,80 Q50,75 100,60 T200,40 T300,45 T400,10" fill="none" stroke="#000000" strokeWidth="3"></path>
                <path d="M0,80 Q50,75 100,60 T200,40 T300,45 T400,10 V100 H0 Z" fill="url(#chartGradientMobile)" opacity="0.1"></path>
                <defs>
                  <linearGradient id="chartGradientMobile" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#000000"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
              {/* Grid Lines */}
              <div className="absolute inset-0 grid grid-rows-4 pointer-events-none opacity-5 px-4 py-4">
                <div className="border-t border-black"></div>
                <div className="border-t border-black"></div>
                <div className="border-t border-black"></div>
                <div className="border-t border-black"></div>
              </div>
            </div>
          </section>

          {/* Historical Snapshots: List View */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-headline font-bold text-lg">Recent Snapshots</h2>
              <span className="material-symbols-outlined text-secondary" data-icon="filter_list">filter_list</span>
            </div>
            <div className="space-y-4">
              {/* List Item 1 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/15">
                <div className="flex flex-col">
                  <span className="font-headline font-bold text-primary">#4</span>
                  <span className="text-secondary text-xs">Today, 08:30 AM</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">22.4K vol</div>
                  <div className="text-[10px] text-on-tertiary-container font-black uppercase">+1.2%</div>
                </div>
              </div>
              {/* List Item 2 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/15">
                <div className="flex flex-col">
                  <span className="font-headline font-bold text-primary">#5</span>
                  <span className="text-secondary text-xs">Oct 24, 2023</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">21.8K vol</div>
                  <div className="text-[10px] text-secondary font-black uppercase">No Change</div>
                </div>
              </div>
              {/* List Item 3 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/15">
                <div className="flex flex-col">
                  <span className="font-headline font-bold text-primary">#6</span>
                  <span className="text-secondary text-xs">Oct 22, 2023</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">18.2K vol</div>
                  <div className="text-[10px] text-error font-black uppercase">-3.1%</div>
                </div>
              </div>
              {/* List Item 4 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/15">
                <div className="flex flex-col">
                  <span className="font-headline font-bold text-primary">#4</span>
                  <span className="text-secondary text-xs">Oct 20, 2023</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">20.1K vol</div>
                  <div className="text-[10px] text-on-tertiary-container font-black uppercase">+0.8%</div>
                </div>
              </div>
            </div>
            {/* View More Button */}
            <button className="w-full py-4 rounded-sm border border-black/10 text-xs font-bold uppercase tracking-widest text-primary active:bg-surface-container-low transition-colors">
              Load Full History
            </button>
          </section>
        </main>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:block">
        {/* PAGE CANVAS */}
        <div className="pt-32 pb-16 px-8 max-w-7xl mx-auto space-y-12">
          {/* HEADER SECTION */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Link className="text-sm font-semibold text-secondary hover:text-primary flex items-center gap-1" href="/dashboard/analytics">
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span>
                  Keywords
                </Link>
                <span className="text-outline-variant">/</span>
                <span className="text-sm font-semibold text-outline">Analytics</span>
              </div>
              <h2 className="text-5xl font-black font-headline tracking-tighter text-primary uppercase">ai programmatic seo strategy</h2>
              <div className="flex items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
                  Live Position
                </span>
                <span className="text-xs text-secondary font-medium tracking-tight">Last updated: 14 mins ago</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-high rounded-sm text-xs font-bold uppercase tracking-tighter hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-sm" data-icon="refresh">refresh</span>
                Force Re-scan
              </button>
            </div>
          </section>

          {/* PERFORMANCE ROW */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Current Rank Card */}
            <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Current Rank</p>
                <div className="flex items-baseline gap-4">
                  <h3 className="text-7xl font-black font-headline tracking-tighter">#4</h3>
                  <div className="flex items-center text-green-600 font-bold">
                    <span className="material-symbols-outlined text-lg" data-icon="trending_up">trending_up</span>
                    <span className="text-sm">+12</span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant font-medium">vs 30 days ago</p>
              </div>
              <div className="absolute -right-4 -bottom-4 text-primary/5 select-none transition-transform group-hover:scale-110 duration-500">
                <span className="material-symbols-outlined text-9xl" data-icon="military_tech" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
              </div>
            </div>

            {/* Avg CTR Card */}
            <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Avg. CTR</p>
                <div className="flex items-baseline gap-4">
                  <h3 className="text-7xl font-black font-headline tracking-tighter">18.4%</h3>
                  <div className="flex items-center text-primary/40 font-bold">
                    <span className="text-sm">STABLE</span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant font-medium">Above industry avg (4.2%)</p>
              </div>
              <div className="absolute -right-4 -bottom-4 text-primary/5 select-none transition-transform group-hover:scale-110 duration-500">
                <span className="material-symbols-outlined text-9xl" data-icon="ads_click" style={{ fontVariationSettings: "'FILL' 1" }}>ads_click</span>
              </div>
            </div>

            {/* Total Impressions Card */}
            <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Total Impressions</p>
                <div className="flex items-baseline gap-4">
                  <h3 className="text-7xl font-black font-headline tracking-tighter">142K</h3>
                  <div className="flex items-center text-green-600 font-bold">
                    <span className="material-symbols-outlined text-lg" data-icon="trending_up">trending_up</span>
                    <span className="text-sm">+4.2%</span>
                  </div>
                </div>
                <div className="h-1 bg-surface-container-highest rounded-full w-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4"></div>
                </div>
              </div>
            </div>
          </section>

          {/* CHART SECTION */}
          <section className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.02)]">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h4 className="text-2xl font-black font-headline tracking-tight uppercase">Ranking History</h4>
                <p className="text-sm text-secondary">Visibility trajectory for the last 90 days</p>
              </div>
              <div className="flex bg-surface-container-low p-1 rounded-sm">
                <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary">30D</button>
                <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest bg-white shadow-sm rounded-sm text-primary">90D</button>
                <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary">1Y</button>
              </div>
            </div>
            {/* Mockup Chart */}
            <div className="h-80 w-full relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between py-2">
                <div className="w-full border-t border-outline-variant/10"></div>
                <div className="w-full border-t border-outline-variant/10"></div>
                <div className="w-full border-t border-outline-variant/10"></div>
                <div className="w-full border-t border-outline-variant/10"></div>
                <div className="w-full border-t border-outline-variant/20"></div>
              </div>
              {/* SVG Chart Path */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 100">
                <path d="M 0 80 Q 150 75, 300 40 T 600 35 T 1000 15" fill="none" stroke="#000000" strokeWidth="3"></path>
                <circle cx="0" cy="80" fill="#000000" r="4"></circle>
                <circle cx="300" cy="40" fill="#000000" r="4"></circle>
                <circle cx="600" cy="35" fill="#000000" r="4"></circle>
                <circle cx="1000" cy="15" fill="#000000" r="4"></circle>
                {/* Gradient Fill */}
                <path d="M 0 80 Q 150 75, 300 40 T 600 35 T 1000 15 V 100 H 0 Z" fill="url(#chartGradient)" opacity="0.05"></path>
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#000000"></stop>
                    <stop offset="100%" stopColor="#ffffff"></stop>
                  </linearGradient>
                </defs>
              </svg>
              {/* Chart Tooltip Interaction Point */}
              <div className="absolute left-[30%] top-[40%] group">
                <div className="w-px h-60 bg-black/20 absolute bottom-0 left-0"></div>
                <div className="absolute -top-16 -left-16 bg-primary text-white p-3 rounded-lg text-xs whitespace-nowrap shadow-xl scale-0 group-hover:scale-100 transition-transform origin-bottom">
                  <p className="font-bold">Oct 12, 2023</p>
                  <p className="opacity-70">Rank: #14</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/40">
              <span>July</span>
              <span>August</span>
              <span>September</span>
              <span>October</span>
            </div>
          </section>

          {/* DATA TABLE: Historical Snapshots */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-black font-headline tracking-tight uppercase">Historical Snapshots</h4>
              <span className="text-xs font-medium text-secondary">Showing last 12 verification cycles</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/10">
                    <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 px-4">Date Checked</th>
                    <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 px-4">Rank</th>
                    <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 px-4">Vol at Check</th>
                    <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 px-4">Snippet</th>
                    <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 px-4 text-right">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="py-5 px-4 font-semibold text-sm">Oct 24, 2023</td>
                    <td className="py-5 px-4">
                      <span className="px-2 py-1 bg-primary text-white text-xs font-bold rounded-sm">#4</span>
                    </td>
                    <td className="py-5 px-4 text-sm font-medium">12.4K / mo</td>
                    <td className="py-5 px-4">
                      <span className="material-symbols-outlined text-green-600" data-icon="check_circle">check_circle</span>
                    </td>
                    <td className="py-5 px-4 text-right">
                      <span className="text-green-600 font-bold text-xs">+2</span>
                    </td>
                  </tr>
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="py-5 px-4 font-semibold text-sm">Oct 20, 2023</td>
                    <td className="py-5 px-4">
                      <span className="px-2 py-1 bg-surface-container-highest text-primary text-xs font-bold rounded-sm">#6</span>
                    </td>
                    <td className="py-5 px-4 text-sm font-medium">12.2K / mo</td>
                    <td className="py-5 px-4">
                      <span className="material-symbols-outlined text-outline-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
                    </td>
                    <td className="py-5 px-4 text-right">
                      <span className="text-green-600 font-bold text-xs">+8</span>
                    </td>
                  </tr>
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="py-5 px-4 font-semibold text-sm">Oct 14, 2023</td>
                    <td className="py-5 px-4">
                      <span className="px-2 py-1 bg-surface-container-highest text-primary text-xs font-bold rounded-sm">#14</span>
                    </td>
                    <td className="py-5 px-4 text-sm font-medium">11.9K / mo</td>
                    <td className="py-5 px-4">
                      <span className="material-symbols-outlined text-outline-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
                    </td>
                    <td className="py-5 px-4 text-right">
                      <span className="text-error font-bold text-xs">-2</span>
                    </td>
                  </tr>
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="py-5 px-4 font-semibold text-sm">Oct 08, 2023</td>
                    <td className="py-5 px-4">
                      <span className="px-2 py-1 bg-surface-container-highest text-primary text-xs font-bold rounded-sm">#12</span>
                    </td>
                    <td className="py-5 px-4 text-sm font-medium">11.8K / mo</td>
                    <td className="py-5 px-4">
                      <span className="material-symbols-outlined text-outline-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
                    </td>
                    <td className="py-5 px-4 text-right">
                      <span className="text-primary/40 font-bold text-xs">--</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-6 flex justify-center">
              <button className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:opacity-60 transition-opacity">
                Load Full History
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}