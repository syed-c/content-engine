'use client'

import Link from 'next/link'

export default function PublishedPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      <div className="lg:hidden pb-32">
        <header className="sticky top-0 z-50 w-full flex justify-between items-center px-6 py-4 bg-surface-container">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">
              UP
            </div>
            <h1 className="font-headline font-black text-xl tracking-tighter text-primary">Workspace</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:opacity-80 transition-opacity active:scale-95 duration-150">
              <span className="material-symbols-outlined text-primary">notifications</span>
            </button>
          </div>
        </header>

        <div className="px-6 py-8 space-y-8">
          <section className="space-y-6">
            <div>
              <h2 className="text-4xl font-black tracking-tight leading-none mb-2">Published Articles</h2>
              <p className="text-on-surface-variant font-medium">Programmatic SEO Control Center</p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-primary text-on-primary py-4 px-6 rounded-lg font-headline font-bold tracking-tight text-sm active:scale-95 duration-150 transition-all shadow-lg">
                Create New Asset
              </button>
              <button className="bg-surface-container-lowest border border-outline-variant/20 text-on-surface py-4 px-4 rounded-lg active:scale-95 duration-150 transition-all">
                <span className="material-symbols-outlined">ios_share</span>
              </button>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-primary text-on-primary p-6 rounded-xl flex flex-col justify-between aspect-[2/1]">
              <span className="text-xs uppercase tracking-widest opacity-60 font-bold">Total Live Assets</span>
              <div className="flex items-end justify-between">
                <span className="text-5xl font-black tracking-tighter">12,482</span>
                <span className="material-symbols-outlined text-4xl opacity-20">cloud_done</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-xl space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Avg. Daily</span>
              <div className="text-2xl font-black tracking-tight">452</div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-xl space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">SEO Health</span>
              <div className="text-2xl font-black tracking-tight text-[#4723be]">98.4%</div>
            </div>
          </section>

          <section>
            <div className="bg-tertiary-container text-on-tertiary-container p-6 rounded-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Curator Intelligence</span>
                </div>
                <p className="text-xl font-bold leading-tight">Programmatic indexing has increased by 24% this week.</p>
                <button className="text-sm font-black border-b-2 border-on-tertiary-container pb-1">Review Indexing Map</button>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-on-tertiary-container opacity-10 rounded-full blur-2xl"></div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-black tracking-tight">Recent Deployments</h3>
              <span className="text-xs font-bold text-on-surface-variant">See all</span>
            </div>
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">language</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm leading-snug">The Future of AI in SaaS</div>
                    <div className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1 font-medium">Published to Webflow</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-[#4723be]">99.2</div>
                  <div className="text-[9px] uppercase tracking-tighter opacity-40">Score</div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">shopping_cart</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm leading-snug">E-commerce Trends 2024</div>
                    <div className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1 font-medium">Published to Shopify</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-[#4723be]">97.8</div>
                  <div className="text-[9px] uppercase tracking-tighter opacity-40">Score</div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">description</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm leading-snug">Scaling Content Operations</div>
                    <div className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1 font-medium">Published to WordPress</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-[#4723be]">98.5</div>
                  <div className="text-[9px] uppercase tracking-tighter opacity-40">Score</div>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-12">
            <div className="bg-surface-container-high/50 p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="material-symbols-outlined text-on-surface-variant">sync</span>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-on-tertiary-container rounded-full"></div>
                </div>
                <span className="text-xs font-bold tracking-tight text-on-surface-variant uppercase">Sync Engine Active</span>
              </div>
              <span className="text-[10px] font-medium text-on-surface-variant/60">Last sync: 2m ago</span>
            </div>
          </section>
        </div>

        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-8 bg-surface/80 backdrop-blur-xl z-50 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
          <button className="flex flex-col items-center justify-center text-primary opacity-100 hover:text-primary active:scale-90 duration-200 ease-out">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>article</span>
            <span className="font-headline text-[10px] uppercase tracking-widest font-medium mt-1">Library</span>
          </button>
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
              <span className="text-primary font-bold border-b-2 border-primary py-1 font-headline tracking-tight">Articles</span>
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
          <div className="px-12 py-12 max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="font-headline font-black text-6xl md:text-7xl tracking-tighter text-primary leading-none mb-4">
                  Published Articles
                </h1>
                <p className="font-body text-xl text-secondary max-w-xl font-light">
                  Manage and monitor your live programmatic assets with surgical precision.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-surface-container-high font-headline font-bold text-sm tracking-tight rounded-lg hover:bg-surface-container-highest transition-colors">
                  Export Report
                </button>
                <button className="px-6 py-3 bg-primary text-on-primary font-headline font-bold text-sm tracking-tight rounded-lg hover:opacity-90 transition-opacity">
                  Create New Asset
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
                <span className="material-symbols-outlined text-3xl mb-8">rocket_launch</span>
                <div>
                  <p className="font-headline font-semibold text-[11px] uppercase tracking-widest text-secondary mb-1">Total Live Assets</p>
                  <h3 className="font-headline font-black text-5xl tracking-tighter">12,482</h3>
                </div>
              </div>
              <div className="bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between">
                <span className="material-symbols-outlined text-3xl mb-8">calendar_today</span>
                <div>
                  <p className="font-headline font-semibold text-[11px] uppercase tracking-widest opacity-60 mb-1">Avg. Daily Published</p>
                  <h3 className="font-headline font-black text-5xl tracking-tighter">452</h3>
                </div>
              </div>
              <div className="bg-tertiary-container text-on-tertiary-container p-8 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  <div className="bg-on-tertiary-container/10 px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter">AI Optimized</div>
                </div>
                <div>
                  <p className="font-headline font-semibold text-[11px] uppercase tracking-widest opacity-70 mb-1">SEO Health Score</p>
                  <h3 className="font-headline font-black text-5xl tracking-tighter">98.4<span className="text-2xl font-medium">%</span></h3>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-2 shadow-sm border border-outline-variant/10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-4 px-4">
                  <thead>
                    <tr className="text-secondary">
                      <th className="pb-4 font-headline font-bold text-[11px] uppercase tracking-widest pl-4">Article Title</th>
                      <th className="pb-4 font-headline font-bold text-[11px] uppercase tracking-widest">Published Date</th>
                      <th className="pb-4 font-headline font-bold text-[11px] uppercase tracking-widest text-center">CMS</th>
                      <th className="pb-4 font-headline font-bold text-[11px] uppercase tracking-widest text-center">SEO Score</th>
                      <th className="pb-4 font-headline font-bold text-[11px] uppercase tracking-widest pr-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="font-body">
                    <tr className="bg-surface-container-low/40 hover:bg-surface-container-low transition-colors group">
                      <td className="py-6 pl-4 rounded-l-lg">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary tracking-tight text-lg">The Future of Generative UI in 2024</span>
                          <span className="text-xs text-secondary font-mono tracking-tighter">ID: CE-90210-AX</span>
                        </div>
                      </td>
                      <td className="py-6"><span className="text-sm font-medium">Oct 12, 2023</span></td>
                      <td className="py-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded text-xs font-bold tracking-tight">
                          <span className="material-symbols-outlined text-base">language</span>
                          Webflow
                        </div>
                      </td>
                      <td className="py-6 text-center">
                        <div className="inline-flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="font-black text-primary">98</span>
                        </div>
                      </td>
                      <td className="py-6 pr-4 rounded-r-lg text-right">
                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-white rounded transition-colors"><span className="material-symbols-outlined text-lg">monitoring</span></button>
                          <button className="p-2 hover:bg-white rounded transition-colors"><span className="material-symbols-outlined text-lg">refresh</span></button>
                          <button className="p-2 hover:bg-white rounded transition-colors"><span className="material-symbols-outlined text-lg">open_in_new</span></button>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-surface-container-low/40 hover:bg-surface-container-low transition-colors group">
                      <td className="py-6 pl-4 rounded-l-lg">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary tracking-tight text-lg">Scaling SaaS Infrastructure with AI</span>
                          <span className="text-xs text-secondary font-mono tracking-tighter">ID: CE-88321-BK</span>
                        </div>
                      </td>
                      <td className="py-6"><span className="text-sm font-medium">Oct 11, 2023</span></td>
                      <td className="py-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded text-xs font-bold tracking-tight">
                          <span className="material-symbols-outlined text-base">apps</span>
                          WordPress
                        </div>
                      </td>
                      <td className="py-6 text-center">
                        <div className="inline-flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="font-black text-primary">94</span>
                        </div>
                      </td>
                      <td className="py-6 pr-4 rounded-r-lg text-right">
                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-white rounded transition-colors"><span className="material-symbols-outlined text-lg">monitoring</span></button>
                          <button className="p-2 hover:bg-white rounded transition-colors"><span className="material-symbols-outlined text-lg">refresh</span></button>
                          <button className="p-2 hover:bg-white rounded transition-colors"><span className="material-symbols-outlined text-lg">open_in_new</span></button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between p-6 mt-4 border-t border-black/5">
                <span className="text-xs font-headline font-bold uppercase tracking-widest text-secondary">Showing 1-2 of 12,482 assets</span>
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-headline font-bold text-sm">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high font-headline font-bold text-sm">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-8 bg-tertiary-fixed text-on-tertiary-fixed p-12 rounded-2xl flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <span className="material-symbols-outlined text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </div>
                <div className="relative z-10">
                  <span className="font-headline font-black text-[10px] uppercase tracking-[0.2em] mb-4 block">Curator Intelligence</span>
                  <h2 className="font-headline font-black text-4xl tracking-tight mb-6 max-w-lg">Programmatic indexing has increased by 24% this week.</h2>
                  <p className="font-body text-lg opacity-80 max-w-md mb-8">Based on current crawl rates, we recommend focusing on Core Web Vitals for your next 500 articles.</p>
                  <button className="px-8 py-3 bg-on-tertiary-fixed text-tertiary-fixed font-headline font-black text-xs uppercase tracking-widest rounded-lg">Apply Recommendation</button>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 bg-surface-container-highest p-12 rounded-2xl flex flex-col justify-center items-center text-center">
                <span className="material-symbols-outlined text-6xl mb-6 text-primary">hub</span>
                <h4 className="font-headline font-black text-xl mb-2">Sync Engine</h4>
                <p className="font-body text-sm text-secondary mb-6">Last sync completed 4 mins ago.</p>
                <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="w-full h-full bg-primary origin-left scale-x-75"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}