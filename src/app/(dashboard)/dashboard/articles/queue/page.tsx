'use client'

import Link from 'next/link'

export default function ArticlesQueuePage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* Top Header */}
        <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-md shadow-[0_20px_40px_rgba(28,27,27,0.05)]">
          <div className="flex justify-between items-end px-6 pt-12 pb-6 w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center text-on-primary font-headline font-black text-lg">
                WP
              </div>
              <div className="flex flex-col">
                <span className="text-secondary text-[10px] uppercase tracking-widest leading-none">Workspace</span>
                <span className="font-headline font-black tracking-tighter text-primary">Portfolio</span>
              </div>
            </div>
            <div className="active:scale-95 transition-transform hover:opacity-70">
              <span className="material-symbols-outlined text-primary text-3xl" data-icon="tune">tune</span>
            </div>
          </div>
        </header>

        <main className="pt-36 px-6 max-w-md mx-auto">
          {/* Header */}
          <section className="mb-10">
            <h1 className="font-headline font-black text-5xl tracking-tighter text-primary leading-[0.9] mb-2">
              Articles Queue
            </h1>
            <p className="text-secondary text-sm leading-relaxed max-w-[80%]">
              Approve and publish your programmatic content.
            </p>
          </section>

          {/* Stats Row: Horizontal Scroll */}
          <section className="mb-10 flex overflow-x-auto no-scrollbar gap-4 -mx-6 px-6">
            <div className="min-w-[140px] flex-1 bg-surface-container-lowest p-5 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between h-32">
              <span className="text-secondary font-headline font-bold text-[10px] uppercase tracking-wider">Pending</span>
              <span className="font-headline font-black text-3xl tracking-tighter text-primary">124</span>
            </div>
            <div className="min-w-[140px] flex-1 bg-surface-container-lowest p-5 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between h-32 border-l-4 border-primary">
              <span className="text-secondary font-headline font-bold text-[10px] uppercase tracking-wider">Published</span>
              <span className="font-headline font-black text-3xl tracking-tighter text-primary">42</span>
            </div>
            <div className="min-w-[140px] flex-1 bg-surface-container-lowest p-5 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between h-32">
              <span className="text-secondary font-headline font-bold text-[10px] uppercase tracking-wider">Avg Score</span>
              <span className="font-headline font-black text-3xl tracking-tighter text-primary">94%</span>
            </div>
          </section>

          {/* Content List */}
          <section className="space-y-6">
            {/* Article Card 1 - Ready */}
            <div className="bg-surface-container-low rounded-xl p-6 transition-all active:scale-[0.98]">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 text-[9px] font-headline font-extrabold tracking-widest rounded-sm">
                  READY
                </span>
                <span className="text-on-surface-variant font-headline font-bold text-xs">2,450 words</span>
              </div>
              <h3 className="font-headline font-extrabold text-xl tracking-tight text-primary leading-tight mb-6">
                Best AI Writing Tools for SEO in 2024
              </h3>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between items-end">
                  <span className="font-headline font-bold text-[10px] text-secondary uppercase tracking-tighter">Quality Score</span>
                  <span className="font-headline font-black text-lg text-primary">98/100</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[98%]"></div>
                </div>
              </div>
              <Link href="/dashboard/articles/editor" className="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-sm active:scale-95 transition-transform flex items-center justify-center gap-2">
                Review
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </Link>
            </div>

            {/* Article Card 2 - In Review */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 text-[9px] font-headline font-extrabold tracking-widest rounded-sm">
                  IN REVIEW
                </span>
                <span className="text-on-surface-variant font-headline font-bold text-xs">1,820 words</span>
              </div>
              <h3 className="font-headline font-extrabold text-xl tracking-tight text-primary leading-tight mb-6">
                How to Scale Content with Programmatic Engines
              </h3>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between items-end">
                  <span className="font-headline font-bold text-[10px] text-secondary uppercase tracking-tighter">Quality Score</span>
                  <span className="font-headline font-black text-lg text-primary">82/100</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary-container w-[82%]"></div>
                </div>
              </div>
              <button className="w-full bg-surface-container-highest text-primary font-headline font-bold py-4 rounded-sm active:scale-95 transition-transform">
                View Draft
              </button>
            </div>

            {/* Article Card 3 - Draft */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 text-[9px] font-headline font-extrabold tracking-widest rounded-sm">
                  DRAFT
                </span>
                <span className="text-on-surface-variant font-headline font-bold text-xs">3,100 words</span>
              </div>
              <h3 className="font-headline font-extrabold text-xl tracking-tight text-primary leading-tight mb-6">
                The Future of Autonomic Content Strategy
              </h3>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between items-end">
                  <span className="font-headline font-bold text-[10px] text-secondary uppercase tracking-tighter">Quality Score</span>
                  <span className="font-headline font-black text-lg text-primary">91/100</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[91%]"></div>
                </div>
              </div>
              <button className="w-full bg-surface-container-highest text-primary font-headline font-bold py-4 rounded-sm active:scale-95 transition-transform">
                View Draft
              </button>
            </div>
          </section>
        </main>

        {/* FAB */}
        <div className="fixed bottom-28 right-6 z-50">
          <button className="w-16 h-16 bg-primary text-on-primary rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-3xl" data-icon="auto_awesome" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </button>
        </div>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:block">
        {/* Canvas */}
        <div className="p-10 flex-1 max-w-7xl w-full mx-auto">
          {/* Page Header */}
          <section className="mb-12">
            <h1 className="text-6xl font-extrabold tracking-tighter mb-2">Articles Queue</h1>
            <p className="text-on-surface-variant text-lg font-medium opacity-70">Approve and publish your programmatic content.</p>
          </section>

          {/* Stats Row: Bento Style */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300">
              <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>pending_actions</span>
              <div>
                <div className="text-4xl font-black tracking-tighter">124</div>
                <div className="text-on-secondary-container font-semibold text-sm uppercase tracking-wider">Pending Review</div>
              </div>
            </div>
            <div className="bg-primary text-white p-8 rounded-xl flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300">
              <span className="material-symbols-outlined text-on-primary mb-4">check_circle</span>
              <div>
                <div className="text-4xl font-black tracking-tighter">42</div>
                <div className="text-on-primary-container font-semibold text-sm uppercase tracking-wider">Published Today</div>
              </div>
            </div>
            <div className="bg-tertiary-container text-white p-8 rounded-xl flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-on-tertiary-container opacity-10 rounded-full blur-2xl"></div>
              <span className="material-symbols-outlined text-on-tertiary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <div>
                <div className="text-4xl font-black tracking-tighter">94%</div>
                <div className="text-on-tertiary-container font-semibold text-sm uppercase tracking-wider">Avg. Quality Score</div>
              </div>
            </div>
          </section>

          {/* Articles Table Section */}
          <section className="bg-surface-container-lowest rounded-2xl overflow-hidden">
            <div className="p-8 border-b border-surface-container-low flex justify-between items-center">
              <div className="flex gap-4">
                <button className="bg-surface-container text-primary font-bold px-4 py-2 rounded-lg text-sm">All Articles</button>
                <button className="text-on-surface-variant font-semibold px-4 py-2 rounded-lg text-sm hover:bg-surface-container transition-all">Drafts</button>
                <button className="text-on-surface-variant font-semibold px-4 py-2 rounded-lg text-sm hover:bg-surface-container transition-all">Ready</button>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold border-2 border-primary px-4 py-2 rounded-lg">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Filters
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/30">
                    <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-on-surface-variant">Keyword / Title</th>
                    <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-on-surface-variant text-center">Quality Score</th>
                    <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-on-surface-variant text-center">Word Count</th>
                    <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-on-surface-variant text-center">Status</th>
                    <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">
                  {/* Row 1 */}
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-bold text-lg tracking-tight">Best AI Writing Tools for SEO</div>
                      <div className="text-xs text-on-surface-variant font-mono opacity-60">ID: CE-7291</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden mb-1.5">
                          <div className="bg-tertiary-container h-full" style={{ width: '98%' }}></div>
                        </div>
                        <span className="text-xs font-bold text-on-tertiary-container">98/100</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center font-semibold text-on-surface">2,450</td>
                    <td className="px-8 py-6 text-center">
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">Ready</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 text-on-surface hover:bg-primary hover:text-white transition-all">
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                        <Link href="/dashboard/articles/editor" className="w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 text-on-surface hover:bg-primary hover:text-white transition-all">
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </Link>
                        <button className="px-4 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold text-xs tracking-tight">Publish</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-bold text-lg tracking-tight">Top Programmatic SEO Strategies 2024</div>
                      <div className="text-xs text-on-surface-variant font-mono opacity-60">ID: CE-8822</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden mb-1.5">
                          <div className="bg-primary h-full" style={{ width: '82%' }}></div>
                        </div>
                        <span className="text-xs font-bold text-on-surface-variant">82/100</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center font-semibold text-on-surface">1,820</td>
                    <td className="px-8 py-6 text-center">
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">In Review</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 text-on-surface hover:bg-primary hover:text-white transition-all">
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                        <Link href="/dashboard/articles/editor" className="w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 text-on-surface hover:bg-primary hover:text-white transition-all">
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </Link>
                        <button className="px-4 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold text-xs tracking-tight">Publish</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-bold text-lg tracking-tight">How to Scale Content with AI Models</div>
                      <div className="text-xs text-on-surface-variant font-mono opacity-60">ID: CE-1104</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden mb-1.5">
                          <div className="bg-tertiary-container h-full" style={{ width: '95%' }}></div>
                        </div>
                        <span className="text-xs font-bold text-on-tertiary-container">95/100</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center font-semibold text-on-surface">3,100</td>
                    <td className="px-8 py-6 text-center">
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">Ready</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 text-on-surface hover:bg-primary hover:text-white transition-all">
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                        <Link href="/dashboard/articles/editor" className="w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 text-on-surface hover:bg-primary hover:text-white transition-all">
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </Link>
                        <button className="px-4 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold text-xs tracking-tight">Publish</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-bold text-lg tracking-tight">Automating Metadata for Large Sites</div>
                      <div className="text-xs text-on-surface-variant font-mono opacity-60">ID: CE-5561</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden mb-1.5">
                          <div className="bg-error h-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-xs font-bold text-error">65/100</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center font-semibold text-on-surface">1,120</td>
                    <td className="px-8 py-6 text-center">
                      <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">Draft</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 text-on-surface hover:bg-primary hover:text-white transition-all">
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                        <Link href="/dashboard/articles/editor" className="w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 text-on-surface hover:bg-primary hover:text-white transition-all">
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </Link>
                        <button className="px-4 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold text-xs tracking-tight">Publish</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="p-8 border-t border-surface-container-low flex justify-between items-center text-sm font-semibold">
              <div className="text-on-surface-variant">Showing <span className="text-on-surface">4</span> of 124 articles</div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-lg border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded-lg border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container transition-all">2</button>
                <button className="w-10 h-10 rounded-lg border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container transition-all">3</button>
                <button className="w-10 h-10 rounded-lg border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Contextual FAB */}
        <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-on-primary rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center justify-center scale-95 active:scale-90 transition-all z-50">
          <span className="material-symbols-outlined text-3xl">auto_awesome</span>
        </button>
      </div>
    </main>
  )
}