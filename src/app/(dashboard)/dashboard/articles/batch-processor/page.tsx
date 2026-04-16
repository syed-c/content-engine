'use client'

export default function BatchProcessorPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* Top Header */}
        <header className="w-full sticky top-0 z-50 bg-surface flex justify-between items-center px-6 py-6 w-full">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary" data-icon="grid_view">grid_view</span>
            <h1 className="text-2xl font-black tracking-tighter text-primary font-headline">ContentEngine.ai</h1>
          </div>
          <span className="material-symbols-outlined text-primary text-2xl" data-icon="account_circle">account_circle</span>
        </header>

        <main className="px-6 pt-4 pb-32 max-w-screen-md mx-auto">
          {/* Hero Header */}
          <section className="mb-12">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-tertiary-container">Pipeline Status: Ready</span>
            </div>
            <h2 className="text-5xl font-black font-headline tracking-tighter leading-none mb-4">Run Pipeline</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-[80%]">Orchestrate multi-threaded content generation with precision authority.</p>
          </section>

          {/* Model Selection */}
          <section className="mb-10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Model Selection</h3>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex justify-between items-center group active:scale-[0.98] transition-transform">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-bold font-headline tracking-tight">Engine v2.4 Pro</span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] px-2 py-0.5 rounded-sm font-bold">LATEST</span>
                </div>
                <p className="text-xs text-secondary">Optimized for high-authority SEO patterns</p>
              </div>
              <span className="material-symbols-outlined text-primary" data-icon="expand_more">expand_more</span>
            </div>
          </section>

          {/* Processing Mode */}
          <section className="mb-10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Processing Mode</h3>
            <div className="space-y-3 relative">
              {/* Active Card */}
              <div className="bg-primary text-white p-6 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/20 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <span className="material-symbols-outlined" data-icon="bolt" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    <span className="material-symbols-outlined text-on-tertiary-container" data-icon="check_circle" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <h4 className="text-lg font-bold font-headline tracking-tight">Multi-Pass Authority</h4>
                  <p className="text-xs text-on-primary-container mt-1">3x deep research + semantic verification</p>
                </div>
              </div>
              {/* Inactive Card */}
              <div className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant/20 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="material-symbols-outlined text-secondary" data-icon="speed">speed</span>
                </div>
                <h4 className="text-lg font-bold font-headline tracking-tight">Fast Draft</h4>
                <p className="text-xs text-on-surface-variant mt-1">Rapid generation with single-pass logic</p>
              </div>
            </div>
          </section>

          {/* Concurrency Slider */}
          <section className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Concurrency Control</h3>
              <span className="text-3xl font-black font-headline tracking-tighter">16<span className="text-sm font-medium tracking-normal text-on-surface-variant ml-1">threads</span></span>
            </div>
            <div className="relative h-12 flex items-center">
              <div className="absolute w-full h-1 bg-surface-container-highest rounded-full"></div>
              <div className="absolute w-2/3 h-1 bg-primary rounded-full"></div>
              <div className="absolute left-2/3 -translate-x-1/2 w-8 h-8 bg-white border-[6px] border-primary rounded-full shadow-lg"></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[10px] font-bold text-outline">1</span>
              <span className="text-[10px] font-bold text-outline">32</span>
            </div>
          </section>

          {/* Real-time Queue */}
          <section className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Active Queue (4)</h3>
              <span className="text-[10px] font-bold text-on-tertiary-container underline underline-offset-4">Clear All</span>
            </div>
            <div className="space-y-6">
              {/* Queue Item 1 */}
              <div className="relative">
                <div className="flex justify-between items-start mb-2">
                  <div className="max-w-[70%]">
                    <h5 className="text-sm font-bold leading-tight">Future of Decentralized Identity 2024</h5>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">Asset ID: CE-9921-X</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-sm">78%</span>
                </div>
                <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[78%]"></div>
                </div>
              </div>
              {/* Queue Item 2 */}
              <div className="relative opacity-60">
                <div className="flex justify-between items-start mb-2">
                  <div className="max-w-[70%]">
                    <h5 className="text-sm font-bold leading-tight">Sustainability in Urban Tech</h5>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">Asset ID: CE-8842-Y</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-surface-container-highest text-on-surface-variant rounded-sm">PENDING</span>
                </div>
                <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-0"></div>
                </div>
              </div>
              {/* Queue Item 3 */}
              <div className="relative opacity-60">
                <div className="flex justify-between items-start mb-2">
                  <div className="max-w-[70%]">
                    <h5 className="text-sm font-bold leading-tight">The AI-Native Consumer Experience</h5>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">Asset ID: CE-7731-Z</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-surface-container-highest text-on-surface-variant rounded-sm">PENDING</span>
                </div>
                <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-0"></div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FAB Action */}
        <div className="fixed bottom-28 right-6 z-40">
          <button className="bg-primary text-white flex items-center gap-3 px-8 py-5 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-xl" data-icon="rocket_launch">rocket_launch</span>
            <span className="font-headline font-extrabold text-sm tracking-tight">EXECUTE PIPELINE</span>
          </button>
        </div>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:block">
        {/* Main Content Canvas */}
        <main className="p-12 min-h-screen">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-on-surface-variant font-headline font-bold tracking-[0.2em] uppercase text-xs mb-4">Batch Article Processor</p>
                <h2 className="text-6xl font-black font-headline tracking-tighter text-primary leading-[0.9] mb-6">Run Programmatic Pipeline</h2>
                <p className="text-lg text-on-surface-variant font-body leading-relaxed">Initialize the multi-pass generation engine for your selected keyword sets. Our high-concurrency model ensures maximum authority and speed.</p>
              </div>
              <div>
                <button className="group flex items-center gap-4 bg-primary text-on-primary px-8 py-5 rounded-sm font-headline font-extrabold text-xl tracking-tighter hover:bg-primary-container transition-all">
                  <span className="material-symbols-outlined text-3xl" data-icon="bolt" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  Run Pipeline
                </button>
              </div>
            </div>
          </section>

          {/* Configuration Bento Grid */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            {/* Pipeline Model Config */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-low p-10 rounded-xl">
              <div className="flex items-center gap-3 mb-10">
                <span className="material-symbols-outlined text-on-tertiary-fixed-variant" data-icon="memory">memory</span>
                <h3 className="text-2xl font-black font-headline tracking-tighter">Pipeline Model</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Model Selection */}
                <div className="space-y-6">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Model Selection</label>
                  <div className="space-y-3">
                    <div className="p-4 bg-surface-container-lowest border-2 border-primary rounded-sm flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-headline font-extrabold text-primary">Engine v2.4 Pro</p>
                        <p className="text-[10px] text-on-surface-variant">Optimized for LSI &amp; Semantic Depth</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-4 border-primary bg-primary"></div>
                    </div>
                    <div className="p-4 bg-surface-container-lowest hover:bg-surface-container-high transition-colors rounded-sm flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-headline font-extrabold text-primary">Legacy Engine</p>
                        <p className="text-[10px] text-on-surface-variant">Basic NLP Processing</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-outline"></div>
                    </div>
                  </div>
                </div>
                {/* Processing Mode */}
                <div className="space-y-6">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Processing Mode</label>
                  <div className="flex flex-col gap-3">
                    <button className="w-full text-left p-4 bg-surface-container-lowest hover:bg-surface-container-high transition-colors rounded-sm">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="material-symbols-outlined text-sm" data-icon="speed">speed</span>
                        <p className="font-headline font-extrabold text-primary">Fast Draft</p>
                      </div>
                      <p className="text-[10px] text-on-surface-variant ml-7">30s per article. One-pass generation.</p>
                    </button>
                    <button className="w-full text-left p-4 bg-tertiary-fixed border-2 border-on-tertiary-fixed-variant rounded-sm">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="material-symbols-outlined text-sm text-on-tertiary-fixed-variant" data-icon="auto_fix">auto_fix</span>
                        <p className="font-headline font-extrabold text-on-tertiary-fixed-variant">Multi-Pass Authority</p>
                      </div>
                      <p className="text-[10px] text-on-tertiary-fixed-variant opacity-70 ml-7">3min per article. AI self-editing enabled.</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-outline-variant/10">
                <div className="flex justify-between items-center mb-6">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Concurrency Limit</label>
                  <span className="text-xl font-black font-headline">08 Threads</span>
                </div>
                <div className="relative w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[80%] bg-primary"></div>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-[10px] font-bold text-on-surface-variant">1</span>
                  <span className="text-[10px] font-bold text-on-surface-variant">10</span>
                </div>
              </div>
            </div>

            {/* AI Intelligence Badge Module */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
              <div className="bg-primary p-10 rounded-xl text-on-primary relative overflow-hidden h-full flex flex-col justify-end">
                <span className="material-symbols-outlined text-8xl absolute -top-4 -right-4 opacity-10" data-icon="neurology">neurology</span>
                <div className="relative z-10">
                  <div className="inline-flex items-center px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-sm mb-6">
                    <span className="material-symbols-outlined text-xs mr-2" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-[10px] font-black uppercase tracking-tighter">AI Core Active</span>
                  </div>
                  <h4 className="text-3xl font-black font-headline tracking-tighter mb-4 leading-none">Contextual Enrichment</h4>
                  <p className="text-sm opacity-60 leading-relaxed font-body">The multi-pass engine cross-references keywords across 40+ semantic data points to ensure search intent alignment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Status Queue */}
          <section className="bg-surface-container-lowest p-10 rounded-xl">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface" data-icon="list_alt">list_alt</span>
                <h3 className="text-2xl font-black font-headline tracking-tighter">Real-time Processing Queue</h3>
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> 4 Active
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-outline"></span> 12 Pending
                </span>
              </div>
            </div>
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-container">
                    <th className="py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Article Title</th>
                    <th className="py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Keywords</th>
                    <th className="py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                    <th className="py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Progress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {/* Active Item */}
                  <tr>
                    <td className="py-6">
                      <p className="font-headline font-bold text-sm tracking-tight">Best Sustainable Minimalist Furniture 2024</p>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">ID: ART-90312</p>
                    </td>
                    <td className="py-6">
                      <div className="flex gap-2">
                        <span className="text-[10px] px-2 py-0.5 bg-surface-container text-on-surface rounded-sm">#minimalism</span>
                        <span className="text-[10px] px-2 py-0.5 bg-surface-container text-on-surface rounded-sm">#eco-friendly</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center gap-2 text-on-tertiary-fixed-variant">
                        <span className="material-symbols-outlined text-sm" data-icon="sync" style={{ fontVariationSettings: "'FILL' 0" }}>sync</span>
                        <span className="text-xs font-black uppercase tracking-tighter">Pass 2: Semantic Loop</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="w-32 h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-on-tertiary-container"></div>
                      </div>
                    </td>
                  </tr>
                  {/* Completed Item */}
                  <tr>
                    <td className="py-6">
                      <p className="font-headline font-bold text-sm tracking-tight">How to Build a Programmatic SEO Pipeline</p>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">ID: ART-90311</p>
                    </td>
                    <td className="py-6">
                      <div className="flex gap-2">
                        <span className="text-[10px] px-2 py-0.5 bg-surface-container text-on-surface rounded-sm">#pSEO</span>
                        <span className="text-[10px] px-2 py-0.5 bg-surface-container text-on-surface rounded-sm">#AI-content</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-sm" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-xs font-black uppercase tracking-tighter">Completed</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="w-32 h-1.5 bg-primary rounded-full"></div>
                    </td>
                  </tr>
                  {/* Pending Item */}
                  <tr className="opacity-40">
                    <td className="py-6">
                      <p className="font-headline font-bold text-sm tracking-tight">Understanding LLM Temperature for Copywriting</p>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">ID: ART-90310</p>
                    </td>
                    <td className="py-6">
                      <div className="flex gap-2">
                        <span className="text-[10px] px-2 py-0.5 bg-surface-container text-on-surface rounded-sm">#LLM</span>
                        <span className="text-[10px] px-2 py-0.5 bg-surface-container text-on-surface rounded-sm">#tech-writing</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm" data-icon="pause_circle">pause_circle</span>
                        <span className="text-xs font-black uppercase tracking-tighter">Queued</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="w-32 h-1.5 bg-surface-container rounded-full"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </main>
  )
}