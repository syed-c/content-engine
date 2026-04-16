'use client'

import Link from 'next/link'

export default function KeywordsImportPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* TopAppBar */}
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)]">
          <div className="flex justify-between items-center px-6 py-4 w-full">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">W</div>
              <span className="font-headline font-black tracking-tighter text-xl text-primary">ContentEngine</span>
            </div>
            <button className="active:scale-95 transition-transform duration-200 hover:opacity-80">
              <span className="material-symbols-outlined text-primary">settings</span>
            </button>
          </div>
        </header>

        <main className="pt-24 pb-40 px-6 max-w-md mx-auto min-h-screen">
          {/* Hero Section */}
          <section className="mb-10">
            <h1 className="font-headline text-5xl font-extrabold text-primary tracking-tighter leading-none mb-4">
              Import Keywords
            </h1>
            <p className="text-secondary text-base leading-relaxed max-w-[90%]">
              Populate your engine via bulk upload or direct connection.
            </p>
          </section>

          {/* Bulk CSV Upload Zone */}
          <section className="mb-8">
            <div className="border-2 border-dashed border-outline/30 p-8 rounded-lg bg-surface-container-low flex flex-col items-center justify-center text-center transition-all hover:bg-surface-container-high group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
              </div>
              <h3 className="font-headline font-bold text-lg mb-1">Bulk CSV Upload</h3>
              <p className="text-sm text-on-surface-variant mb-6 px-4">Drag and drop your export files here or search locally.</p>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-headline font-bold text-sm tracking-tight active:scale-95 transition-all">
                Browse Files
              </button>
            </div>
          </section>

          {/* Google Search Console Card */}
          <section className="mb-8">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <span className="material-symbols-outlined text-blue-600">database</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-primary text-lg">Search Console</h3>
                  <p className="text-xs text-on-secondary-container leading-relaxed">
                    Sync with GSC to identify high-intent, low-hanging fruit keywords automatically.
                  </p>
                </div>
              </div>
              <button className="w-full py-4 border border-primary text-primary rounded-lg font-headline font-bold text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">link</span>
                Connect GSC Account
              </button>
            </div>
          </section>

          {/* AI Insight Card */}
          <section className="mb-12">
            <div className="bg-tertiary-container p-6 rounded-xl relative overflow-hidden">
              {/* AI Sparkle Decorative */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-on-tertiary-container/10 blur-3xl rounded-full"></div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  AI-Enhanced
                </span>
              </div>
              <p className="text-on-tertiary-container font-medium text-sm leading-snug">
                Our semantic clustering engine will automatically group your imported keywords into high-authority silos.
              </p>
            </div>
          </section>
        </main>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-[72px] left-0 w-full px-6 py-4 bg-gradient-to-t from-surface via-surface to-transparent z-40">
          <button className="w-full bg-primary text-on-primary py-5 rounded-lg font-headline font-bold text-base tracking-tight shadow-xl shadow-black/10 active:scale-95 transition-all flex items-center justify-center gap-3">
            Continue to Queue
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>

        {/* BottomNavBar */}
        <nav className="fixed bottom-0 left-0 w-full z-50 pb-safe bg-surface">
          <div className="flex justify-around items-center px-8 py-3 w-full border-t border-outline-variant/10">
            <Link href="/dashboard" className="flex flex-col items-center justify-center text-neutral-400 hover:text-primary transition-colors active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-xl">grid_view</span>
              <span className="font-body text-[10px] font-medium tracking-wide uppercase mt-0.5">Studio</span>
            </Link>
            <Link href="/dashboard/keywords" className="flex flex-col items-center justify-center bg-black text-white rounded-sm px-4 py-1.5 active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <span className="font-body text-[10px] font-medium tracking-wide uppercase mt-0.5">Engine</span>
            </Link>
            <Link href="/dashboard/analytics" className="flex flex-col items-center justify-center text-neutral-400 hover:text-primary transition-colors active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-xl">trending_up</span>
              <span className="font-body text-[10px] font-medium tracking-wide uppercase mt-0.5">Growth</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:flex">
        {/* SideNavBar */}
        <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container flex flex-col p-6 space-y-2 z-50">
          <div className="mb-8 px-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tighter text-primary leading-none">ContentEngine</h2>
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1">AI SEO Engine</p>
              </div>
            </div>
          </div>
          <button className="w-full py-3 px-4 mb-6 bg-primary text-on-primary rounded-lg font-headline font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all scale-95 active:opacity-80">
            <span className="material-symbols-outlined text-sm">add</span>
            New Project
          </button>
          <nav className="flex-1 space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high rounded-lg transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-medium">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </Link>
            <Link href="/dashboard/keywords" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high rounded-lg transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-medium">
              <span className="material-symbols-outlined">folder_open</span>
              Projects
            </Link>
            <Link href="/dashboard/keywords/import" className="flex items-center gap-3 px-4 py-3 bg-white text-primary rounded-lg shadow-sm font-bold transition-transform duration-200 hover:translate-x-1 font-headline text-sm">
              <span className="material-symbols-outlined">key</span>
              Keywords
            </Link>
            <Link href="/dashboard/articles/queue" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high rounded-lg transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-medium">
              <span className="material-symbols-outlined">rate_review</span>
              Review Queue
            </Link>
            <Link href="/dashboard/briefs" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high rounded-lg transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-medium">
              <span className="material-symbols-outlined">folder_open</span>
              Briefs
            </Link>
          </nav>
          <div className="pt-6 mt-auto space-y-1 border-t border-outline-variant/10">
            <button className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high rounded-lg transition-transform font-headline text-sm font-medium w-full">
              <span className="material-symbols-outlined">help_outline</span>
              Support
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high rounded-lg transition-transform font-headline text-sm font-medium w-full">
              <span className="material-symbols-outlined">logout</span>
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 p-12 max-w-7xl">
          {/* Header Section */}
          <header className="mb-16">
            <h1 className="text-6xl font-headline font-extrabold tracking-tighter text-primary mb-4">Import Keywords</h1>
            <p className="text-lg text-secondary font-medium max-w-2xl">Populate your engine via bulk upload or direct connection. AI-driven programmatic indexing starts here.</p>
          </header>

          {/* Bento Layout for Interaction Cards */}
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Bulk CSV Upload: Primary Large Zone */}
            <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-10 shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline-variant/10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary">upload_file</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold">Bulk CSV Upload</h3>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-surface-container-high rounded-full uppercase tracking-widest text-secondary">Recommended</span>
              </div>
              {/* Drag & Drop Zone */}
              <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-16 flex flex-col items-center justify-center bg-surface-container-low/30 hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                </div>
                <p className="text-lg font-headline font-semibold mb-2">Drop your .csv file here</p>
                <p className="text-secondary text-sm mb-8 text-center max-w-xs">Maximize your engine's potential by importing keywords with their respective metrics.</p>
                <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-headline font-bold tracking-tight hover:opacity-90 active:scale-95 transition-all">
                  Browse Files
                </button>
              </div>
              {/* Formatting Instructions */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="bg-surface-container-low p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-sm">tag</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">Column 1</span>
                  </div>
                  <p className="font-headline font-bold">Keyword</p>
                  <p className="text-xs text-secondary mt-1">The primary target phrase.</p>
                </div>
                <div className="bg-surface-container-low p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-sm">bar_chart</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">Column 2</span>
                  </div>
                  <p className="font-headline font-bold">Volume</p>
                  <p className="text-xs text-secondary mt-1">Monthly search frequency.</p>
                </div>
                <div className="bg-surface-container-low p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-sm">speed</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">Column 3</span>
                  </div>
                  <p className="font-headline font-bold">KD</p>
                  <p className="text-xs text-secondary mt-1">Difficulty score (0-100).</p>
                </div>
              </div>
            </section>

            {/* GSC Connection: Secondary Vertical Zone */}
            <section className="col-span-12 lg:col-span-4 space-y-8">
              {/* GSC Card */}
              <div className="bg-primary-container text-on-primary rounded-xl p-8 shadow-2xl relative overflow-hidden">
                {/* Subtle Mesh Gradient */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_100%)]"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 backdrop-blur-md">
                    <span className="material-symbols-outlined text-white">google</span>
                  </div>
                  <h3 className="text-2xl font-headline font-extrabold mb-3 leading-tight">Google Search Console</h3>
                  <p className="text-on-primary-container text-sm leading-relaxed mb-8">
                    Connect GSC to automatically discover "low-hanging fruit" keywords where you're already ranking on pages 2 or 3.
                  </p>
                  <button className="w-full bg-white text-black py-4 rounded-lg font-headline font-bold text-sm hover:bg-gray-100 active:scale-98 transition-all flex items-center justify-center gap-2">
                    Connect GSC Account
                  </button>
                </div>
              </div>

              {/* Intelligence Badge Section */}
              <div className="bg-surface-container rounded-xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-tertiary-fixed-variant">Engine AI Insight</span>
                </div>
                <p className="font-headline text-lg font-bold mb-4 tracking-tight">AI-Enhanced Import</p>
                <p className="text-sm text-secondary leading-relaxed mb-6">
                  Once imported, our model will automatically cluster your keywords by semantic intent and predict conversion potential.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  Active Intelligence
                </div>
              </div>

              {/* Info Block */}
              <div className="p-6 border border-outline-variant/20 rounded-xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-secondary mb-3">Recent Imports</h4>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span className="text-sm font-medium">saas_keywords_v2.csv</span>
                    <span className="text-[10px] font-bold text-secondary">2h ago</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-sm font-medium">competitor_gap_analysis.csv</span>
                    <span className="text-[10px] font-bold text-secondary">Yesterday</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Asymmetrical Footer / Next Steps */}
          <section className="mt-20 flex justify-between items-end">
            <div className="max-w-md">
              <p className="text-xs font-black uppercase tracking-widest text-secondary mb-4">The Next Phase</p>
              <h4 className="text-3xl font-headline font-bold tracking-tighter">Ready to curate?</h4>
              <p className="text-secondary mt-2">After importing, move to the <span className="text-primary font-bold">Review Queue</span> to finalize your programmatic parameters.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 text-sm font-headline font-bold border border-primary/10 rounded-lg hover:bg-surface-container-high transition-colors">Skip for now</button>
              <Link href="/dashboard/articles/queue" className="px-8 py-3 text-sm font-headline font-bold bg-primary text-on-primary rounded-lg hover:opacity-90 transition-all">Continue to Queue</Link>
            </div>
          </section>
        </main>
      </div>
    </main>
  )
}