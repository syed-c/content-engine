'use client'

import Link from 'next/link'

export default function AnalyticsPage() {
  return (
    <main className="flex-1 bg-surface">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32 px-6">
        {/* Metrics Section */}
        <section className="grid grid-cols-2 gap-4 mt-20">
          <div className="bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between aspect-square">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Rank Position</span>
            <div>
              <div className="text-4xl font-extrabold tracking-tighter">#4.2</div>
              <div className="flex items-center text-xs font-bold text-on-tertiary-container mt-1">
                <span className="material-symbols-outlined text-sm mr-1">arrow_upward</span>
                12%
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between aspect-square">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Avg. CTR</span>
            <div>
              <div className="text-4xl font-extrabold tracking-tighter">8.9%</div>
              <div className="flex items-center text-xs font-bold text-on-tertiary-container mt-1">
                <span className="material-symbols-outlined text-sm mr-1">add</span>
                0.4%
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between aspect-square">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Impressions</span>
            <div>
              <div className="text-4xl font-extrabold tracking-tighter">1.2M</div>
              <div className="flex items-center text-xs font-bold text-on-tertiary-container mt-1">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                44k
              </div>
            </div>
          </div>
          <div className="bg-primary p-6 rounded-lg flex flex-col justify-between aspect-square text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Growth Score</span>
            <div>
              <div className="text-4xl font-extrabold tracking-tighter">92</div>
              <div className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-tertiary-container text-on-tertiary-container text-[10px] font-black uppercase mt-2">
                Top 1%
              </div>
            </div>
          </div>
        </section>

        {/* Chart Section */}
        <section className="space-y-6 mt-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-tighter">Ranking Progress</h2>
              <p className="text-xs text-on-surface-variant font-medium mt-1">Indexed pages over period</p>
            </div>
            <div className="flex bg-surface-container rounded-lg p-1">
              <button className="px-3 py-1 text-[10px] font-bold uppercase rounded-sm transition-all text-on-surface-variant">Weekly</button>
              <button className="px-3 py-1 text-[10px] font-bold uppercase rounded-sm bg-surface-container-lowest shadow-sm">Monthly</button>
            </div>
          </div>
          <div className="w-full h-48 flex items-end justify-between px-2 pt-4">
            <div className="w-3 bg-surface-container-highest rounded-t-full h-[30%]"></div>
            <div className="w-3 bg-surface-container-highest rounded-t-full h-[45%]"></div>
            <div className="w-3 bg-surface-container-highest rounded-t-full h-[40%]"></div>
            <div className="w-3 bg-surface-container-highest rounded-t-full h-[60%]"></div>
            <div className="w-3 bg-primary rounded-t-full h-[75%]"></div>
            <div className="w-3 bg-primary rounded-t-full h-[85%]"></div>
            <div className="w-3 bg-primary rounded-t-full h-[95%]"></div>
            <div className="w-3 bg-surface-container-highest rounded-t-full h-[70%]"></div>
            <div className="w-3 bg-surface-container-highest rounded-t-full h-[80%]"></div>
          </div>
          <div className="flex justify-between px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </section>

        {/* AI Insight */}
        <section className="bg-tertiary-container p-8 rounded-lg relative overflow-hidden mt-8">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-on-tertiary-container/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded-[4px] text-[10px] font-black uppercase tracking-widest">Intelligence Badge</span>
            </div>
            <h3 className="text-white text-xl font-extrabold tracking-tight leading-tight">Your 'Organic Search' pillar is under-indexing for long-tail queries.</h3>
            <p className="text-on-tertiary-container/80 text-sm font-medium leading-relaxed">Recommendation: Deploy 12 programmatic SEO sub-pages targeting "sustainable enterprise architecture" clusters.</p>
            <button className="mt-4 bg-white text-black py-4 px-6 rounded-lg text-xs font-black uppercase tracking-widest hover:opacity-90 active:scale-[0.98] transition-all">Execute Cluster</button>
          </div>
        </section>

        {/* Top Keywords */}
        <section className="space-y-6 mt-8 pb-12">
          <h2 className="text-2xl font-black tracking-tighter">Top Keywords</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
              <div className="flex flex-col">
                <span className="font-bold text-sm">enterprise pSEO engine</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">8.4k volume</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-black">#1</span>
                  <span className="text-[10px] font-bold text-on-tertiary-container uppercase tracking-tight">+3 spots</span>
                </div>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
              <div className="flex flex-col">
                <span className="font-bold text-sm">ai content curator tool</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">12.1k volume</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-black">#4</span>
                  <span className="text-[10px] font-bold text-on-tertiary-container uppercase tracking-tight">+12 spots</span>
                </div>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
              <div className="flex flex-col">
                <span className="font-bold text-sm">automated saas seo</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">3.2k volume</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-black">#2</span>
                  <span className="text-[10px] font-bold text-error uppercase tracking-tight">-1 spot</span>
                </div>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:block p-10 pb-12">
        {/* Header Section */}
        <header className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold tracking-tighter leading-none mb-4">Rankings Performance</h1>
            <p className="text-on-surface-variant font-medium leading-relaxed max-w-lg">Deep dive into your programmatic SEO velocity. Real-time indexation and position tracking for automated content clusters.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-low px-6 py-4 rounded-xl flex flex-col gap-1 border border-outline-variant/15">
              <span className="text-[10px] uppercase font-black tracking-widest text-secondary">Date Range</span>
              <span className="font-bold flex items-center gap-2">Last 90 Days <span className="material-symbols-outlined text-sm">expand_more</span></span>
            </div>
          </div>
        </header>

        {/* Impact Cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.03)] border border-outline-variant/5">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-secondary">vertical_align_center</span>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded font-bold">+2.4</span>
            </div>
            <div className="text-3xl font-black tracking-tighter mb-1">#14.2</div>
            <div className="text-xs uppercase font-bold text-secondary tracking-widest">Rank Position</div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.03)] border border-outline-variant/5">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-secondary">ads_click</span>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded font-bold">+0.8%</span>
            </div>
            <div className="text-3xl font-black tracking-tighter mb-1">4.2%</div>
            <div className="text-xs uppercase font-bold text-secondary tracking-widest">Avg. CTR</div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.03)] border border-outline-variant/5">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-secondary">visibility</span>
              <span className="text-[10px] bg-red-100 text-red-700 px-2 py-1 rounded font-bold">-12%</span>
            </div>
            <div className="text-3xl font-black tracking-tighter mb-1">1.2M</div>
            <div className="text-xs uppercase font-bold text-secondary tracking-widest">Impressions</div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.03)] border border-outline-variant/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-container/5 rounded-full -mr-8 -mt-8"></div>
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <span className="text-[10px] bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded font-bold">AI CALC</span>
            </div>
            <div className="text-3xl font-black tracking-tighter mb-1">94</div>
            <div className="text-xs uppercase font-bold text-secondary tracking-widest">Growth Score</div>
          </div>
        </section>

        {/* Main Analytics & AI Recommendation */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)]">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold tracking-tight">Ranking Progress</h3>
                <p className="text-xs text-secondary font-medium">INDEXED PAGES OVER TIME</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold border border-primary rounded">WEEKLY</button>
                <button className="px-3 py-1 text-[10px] font-bold text-secondary">MONTHLY</button>
              </div>
            </div>
            <div className="h-64 w-full flex items-end gap-2 relative">
              <div className="flex-1 bg-surface-container h-1/2 rounded-t-sm transition-all hover:h-3/4"></div>
              <div className="flex-1 bg-surface-container h-[55%] rounded-t-sm"></div>
              <div className="flex-1 bg-surface-container h-[48%] rounded-t-sm"></div>
              <div className="flex-1 bg-primary h-[65%] rounded-t-sm"></div>
              <div className="flex-1 bg-surface-container h-[58%] rounded-t-sm"></div>
              <div className="flex-1 bg-surface-container h-[72%] rounded-t-sm"></div>
              <div className="flex-1 bg-surface-container h-[68%] rounded-t-sm"></div>
              <div className="flex-1 bg-surface-container h-[82%] rounded-t-sm"></div>
              <div className="flex-1 bg-primary h-[78%] rounded-t-sm"></div>
              <div className="flex-1 bg-surface-container h-[85%] rounded-t-sm"></div>
              <div className="flex-1 bg-surface-container h-[92%] rounded-t-sm"></div>
              <div className="flex-1 bg-surface-container h-[88%] rounded-t-sm"></div>
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-black text-gray-300 uppercase tracking-widest">
              <span>Oct 14</span>
              <span>Nov 01</span>
              <span>Nov 15</span>
              <span>Dec 01</span>
              <span>Dec 15</span>
              <span>Today</span>
            </div>
          </div>

          {/* AI Insight Card */}
          <div className="bg-tertiary-container p-8 rounded-xl shadow-xl flex flex-col text-white relative group">
            <div className="absolute top-4 right-4 animate-pulse">
              <span className="w-2 h-2 bg-on-tertiary-container rounded-full block"></span>
            </div>
            <div className="mb-8">
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-sm text-[10px] font-black tracking-widest uppercase">Intelligence Badge</span>
            </div>
            <h3 className="text-2xl font-black tracking-tighter mb-4 leading-tight">Curator Recommendation</h3>
            <p className="text-on-tertiary-container text-sm leading-relaxed mb-8">
              Your <span className="text-white font-bold italic">"Cloud Solutions"</span> cluster is showing 14% higher engagement but plateaued ranking. Increase semantic density in H2 tags to trigger snippet elevation.
            </p>
            <div className="mt-auto">
              <button className="w-full bg-surface-container-lowest text-primary py-4 rounded-lg font-black tracking-tighter hover:bg-opacity-90 transition-all uppercase flex items-center justify-center gap-2">
                Execute Optimization
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
              </button>
            </div>
          </div>
        </section>

        {/* Data Grid: Top Performing Keywords */}
        <section className="bg-surface-container-low p-10 rounded-xl">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-black tracking-tighter uppercase">Top Performing Keywords</h3>
            <div className="flex gap-4 items-center">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-sm">search</span>
                <input className="bg-surface-container-highest border-none rounded-lg text-xs py-2 pl-10 pr-4 w-64 focus:ring-1 focus:ring-primary/20" placeholder="Filter terms..." type="text"/>
              </div>
              <span className="material-symbols-outlined text-secondary cursor-pointer">filter_list</span>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
              <thead>
                <tr className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">
                  <th className="pb-4 px-4">Keyword Entity</th>
                  <th className="pb-4 px-4 text-center">Current Position</th>
                  <th className="pb-4 px-4 text-center">30D Delta</th>
                  <th className="pb-4 px-4 text-right">Search Volume</th>
                  <th className="pb-4 px-4 text-right">Potential Value</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="bg-surface-container-lowest group hover:shadow-lg transition-all">
                  <td className="py-6 px-4 rounded-l-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-bold tracking-tight">ai programmatic seo strategy</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <span className="bg-primary text-on-primary px-2 py-1 rounded text-xs font-black">#2</span>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <span className="text-green-600 flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">trending_up</span> +14
                    </span>
                  </td>
                  <td className="py-6 px-4 text-right font-bold">12.4k</td>
                  <td className="py-6 px-4 rounded-r-xl text-right">
                    <span className="text-on-surface-variant font-black tracking-tighter">$4,200</span>
                  </td>
                </tr>
                <tr className="bg-surface-container-lowest group hover:shadow-lg transition-all">
                  <td className="py-6 px-4 rounded-l-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-bold tracking-tight">content engine pricing guide</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <span className="bg-primary text-on-primary px-2 py-1 rounded text-xs font-black">#4</span>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <span className="text-green-600 flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">trending_up</span> +3
                    </span>
                  </td>
                  <td className="py-6 px-4 text-right font-bold">8.1k</td>
                  <td className="py-6 px-4 rounded-r-xl text-right">
                    <span className="text-on-surface-variant font-black tracking-tighter">$2,150</span>
                  </td>
                </tr>
                <tr className="bg-surface-container-lowest group hover:shadow-lg transition-all">
                  <td className="py-6 px-4 rounded-l-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="font-bold tracking-tight">automated blog generator ai</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <span className="bg-primary text-on-primary px-2 py-1 rounded text-xs font-black">#11</span>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <span className="text-red-500 flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">trending_down</span> -2
                    </span>
                  </td>
                  <td className="py-6 px-4 text-right font-bold">45k</td>
                  <td className="py-6 px-4 rounded-r-xl text-right">
                    <span className="text-on-surface-variant font-black tracking-tighter">$11,800</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors">
              View Full Inventory
              <span className="material-symbols-outlined text-xs transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}