'use client'

import Link from 'next/link'

export default function AddKeywordPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* TopAppBar */}
        <header className="bg-surface fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 shadow-none">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-headline font-black text-xs">W</div>
            <h1 className="font-headline text-2xl font-bold tracking-tighter text-primary">Workspace</h1>
          </div>
          <button className="hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200">
            <span className="material-symbols-outlined text-primary">apps</span>
          </button>
        </header>

        <main className="pt-24 px-6 max-w-md mx-auto">
          {/* Hero Title: Asymmetric Layout */}
          <section className="mb-10">
            <div className="flex flex-col gap-2">
              <span className="text-tertiary-fixed-dim bg-tertiary-container w-fit px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">New Entry</span>
              <h2 className="font-headline font-extrabold text-5xl tracking-tighter leading-[0.9] text-primary">Add New <br/>Keyword</h2>
            </div>
          </section>

          {/* Form Section */}
          <section className="space-y-8">
            <div className="space-y-6">
              {/* Primary Keyword */}
              <div className="group">
                <label className="font-body text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Primary Keyword</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg px-5 py-4 font-body text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-outline-variant transition-all outline-none" placeholder="e.g. Programmatic SEO Guide" type="text"/>
              </div>

              {/* Target URL */}
              <div className="group">
                <label className="font-body text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Target URL</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg px-5 py-4 font-body text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-outline-variant transition-all outline-none" placeholder="https://contentengine.ai/blog/" type="url"/>
              </div>

              {/* Priority Selector */}
              <div>
                <label className="font-body text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">Processing Priority</label>
                <div className="grid grid-cols-3 gap-3">
                  <button className="bg-surface-container-low hover:bg-surface-container-highest border border-transparent transition-all rounded-lg py-3 flex flex-col items-center gap-1 active:scale-95">
                    <span className="text-[10px] font-bold">LOW</span>
                  </button>
                  <button className="bg-primary text-on-primary rounded-lg py-3 flex flex-col items-center gap-1 active:scale-95">
                    <span className="text-[10px] font-bold">STANDARD</span>
                  </button>
                  <button className="bg-surface-container-low hover:bg-surface-container-highest border border-transparent transition-all rounded-lg py-3 flex flex-col items-center gap-1 active:scale-95">
                    <span className="text-[10px] font-bold">URGENT</span>
                  </button>
                </div>
              </div>
            </div>

            {/* AI Cards: Tonal Layering */}
            <div className="space-y-4">
              {/* AI Curator Logic */}
              <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-on-tertiary-container shadow-[0_0_15px_rgba(134,108,254,0.15)]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-on-tertiary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  <span className="font-body text-[11px] font-bold text-on-tertiary-fixed-variant uppercase tracking-wider">AI Curator Logic</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                  Engine will analyze top 10 SERP results to map semantic clusters before generating programmatic draft.
                </p>
              </div>

              {/* Processing Tip */}
              <div className="bg-surface-container-highest p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-on-surface text-lg">lightbulb</span>
                  <span className="font-body text-[11px] font-bold text-on-surface uppercase tracking-wider">Processing Tip</span>
                </div>
                <p className="text-sm text-on-secondary-container leading-relaxed font-body italic">
                  "Long-tail keywords with clear intent yield 40% higher curator accuracy."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="w-full bg-primary text-on-primary font-headline font-bold py-5 rounded-lg flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-xl shadow-primary/10">
                Add to Engine
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </button>
            </div>
          </section>
        </main>

        {/* BottomNavBar */}
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/10 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] rounded-t-2xl">
          <Link href="/dashboard" className="flex flex-col items-center justify-center text-secondary px-4 py-2 hover:opacity-80 transition-opacity active:scale-90 duration-150">
            <span className="material-symbols-outlined">psychology</span>
            <span className="font-body text-[10px] font-semibold uppercase tracking-widest mt-1">Engine</span>
          </Link>
          <Link href="/dashboard/keywords" className="flex flex-col items-center justify-center bg-primary text-white rounded-xl px-4 py-2 active:scale-90 duration-150">
            <span className="material-symbols-outlined">folder_open</span>
            <span className="font-body text-[10px] font-semibold uppercase tracking-widest mt-1">Assets</span>
          </Link>
          <Link href="/dashboard/analytics" className="flex flex-col items-center justify-center text-secondary px-4 py-2 hover:opacity-80 transition-opacity active:scale-90 duration-150">
            <span className="material-symbols-outlined">query_stats</span>
            <span className="font-body text-[10px] font-semibold uppercase tracking-widest mt-1">Growth</span>
          </Link>
          <button className="flex flex-col items-center justify-center text-secondary px-4 py-2 hover:opacity-80 transition-opacity active:scale-90 duration-150">
            <span className="material-symbols-outlined">settings_input_component</span>
            <span className="font-body text-[10px] font-semibold uppercase tracking-widest mt-1">System</span>
          </button>
        </nav>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:flex">
        {/* Sidebar Shell */}
        <aside className="fixed left-0 h-screen w-64 bg-surface-container flex flex-col p-6 gap-2 z-50">
          <div className="mb-10 px-2">
            <h1 className="text-xl font-black tracking-tighter text-primary">ContentEngine</h1>
            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">AI Curator</p>
          </div>
          <nav className="flex-1 space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-high transition-all font-headline text-sm font-medium translate-x-1 duration-300">
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span>Dashboard</span>
            </Link>
            <Link href="/dashboard/keywords" className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-high transition-all font-headline text-sm font-medium translate-x-1 duration-300">
              <span className="material-symbols-outlined text-[20px]">folder_open</span>
              <span>Projects</span>
            </Link>
            <Link href="/dashboard/keywords" className="flex items-center gap-3 px-3 py-2 bg-white text-primary rounded-lg shadow-sm font-headline text-sm font-semibold translate-x-1 duration-300">
              <span className="material-symbols-outlined text-[20px]">key</span>
              <span>Keywords</span>
            </Link>
            <Link href="/dashboard/articles/queue" className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-high transition-all font-headline text-sm font-medium translate-x-1 duration-300">
              <span className="material-symbols-outlined text-[20px]">rate_review</span>
              <span>Review Queue</span>
            </Link>
            <Link href="/dashboard/briefs" className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-high transition-all font-headline text-sm font-medium translate-x-1 duration-300">
              <span className="material-symbols-outlined text-[20px]">folder_open</span>
              <span>Briefs</span>
            </Link>
          </nav>
          <div className="mt-auto">
            <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-headline text-sm font-bold tracking-tight hover:opacity-90 transition-opacity">
              New Project
            </button>
          </div>
        </aside>

        {/* Main Content Wrapper */}
        <div className="ml-64 flex flex-col min-h-screen">
          {/* TopAppBar */}
          <header className="sticky top-0 w-full bg-surface/60 backdrop-blur-xl flex items-center justify-between px-8 h-16 z-40 shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors">search</span>
                <input className="bg-surface-container-high border-none text-sm rounded-full pl-10 pr-4 py-1.5 focus:ring-1 focus:ring-outline-variant w-64 transition-all font-body" placeholder="Search keywords..." type="text"/>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <button className="text-secondary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="text-secondary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">bolt</span>
                </button>
              </div>
              <div className="h-8 w-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/10">
                <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKyqe6tM3cPtEwbLs31uPKCvvFprZ6KtqskGFUc_gGcGO2XCVli6JApJidlW6oGc9gA73ayYX9SygNK-QuPeZ_91v4ncrp9NQ5AC-kcIoiiP9QEFGxiMG865eoRe1T9ME1lXWKwTfPYo3oY-_HqubbU9_tOgw61AEdNJ0MAmE_iWt6AG3--s4xeVv4-OvANJRXefhHOxgq-kInuyuG8yQWtZaGIhZwo2OS6Z-5Dek8Nkz68QrNd58d-OuRV1cKrVvPyn8Oamf0_ng"/>
              </div>
            </div>
          </header>

          {/* Page Canvas */}
          <main className="flex-1 p-12 lg:p-24 max-w-7xl mx-auto w-full">
            {/* Header Section (Asymmetric Intent) */}
            <div className="mb-16 max-w-2xl">
              <nav className="flex gap-2 text-xs font-bold uppercase tracking-widest text-secondary mb-6 font-headline">
                <Link href="/dashboard/keywords" className="hover:text-primary transition-colors">Keywords</Link>
                <span>/</span>
                <span className="text-primary">Add New</span>
              </nav>
              <h2 className="text-6xl font-headline font-extrabold tracking-tighter text-primary leading-[0.9] mb-6">
                Add New Keyword
              </h2>
              <p className="text-lg text-secondary font-medium max-w-lg leading-relaxed">
                Add a single keyword to your engine for autonomous processing. Our curator will handle the clustering and intent mapping.
              </p>
            </div>

            {/* Form Container (Surface Layering) */}
            <div className="grid grid-cols-12 gap-12">
              <div className="col-span-12 lg:col-span-7">
                <div className="bg-surface-container-low rounded-xl p-8 lg:p-12">
                  <form className="space-y-10">
                    {/* Input: Keyword */}
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-secondary font-headline">Primary Keyword</label>
                      <input className="w-full bg-white border-none text-xl font-medium p-4 rounded-lg focus:ring-2 focus:ring-primary/10 placeholder:text-outline-variant transition-all font-headline" placeholder="e.g. programmatic seo strategy" type="text"/>
                    </div>

                    {/* Input: Target URL */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-black uppercase tracking-widest text-secondary font-headline">Target URL</label>
                        <span className="text-[10px] font-bold text-secondary uppercase">Optional</span>
                      </div>
                      <input className="w-full bg-white border-none text-base font-medium p-4 rounded-lg focus:ring-2 focus:ring-primary/10 placeholder:text-outline-variant transition-all" placeholder="https://example.com/blog/programmatic-seo" type="url"/>
                    </div>

                    {/* Input: Priority Selection */}
                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest text-secondary font-headline">Processing Priority</label>
                      <div className="grid grid-cols-3 gap-4">
                        <label className="relative group cursor-pointer">
                          <input className="sr-only peer" name="priority" type="radio" value="low"/>
                          <div className="p-4 bg-white rounded-lg border-2 border-transparent peer-checked:border-primary transition-all text-center">
                            <span className="block text-sm font-bold font-headline text-secondary group-hover:text-primary/60 peer-checked:text-primary">Low</span>
                          </div>
                        </label>
                        <label className="relative group cursor-pointer">
                          <input className="sr-only peer" name="priority" type="radio" value="standard" defaultChecked/>
                          <div className="p-4 bg-white rounded-lg border-2 border-transparent peer-checked:border-primary transition-all text-center">
                            <span className="block text-sm font-bold font-headline text-secondary group-hover:text-primary/60 peer-checked:text-primary">Standard</span>
                          </div>
                        </label>
                        <label className="relative group cursor-pointer">
                          <input className="sr-only peer" name="priority" type="radio" value="high"/>
                          <div className="p-4 bg-white rounded-lg border-2 border-transparent peer-checked:border-primary transition-all text-center">
                            <span className="block text-sm font-bold font-headline text-secondary group-hover:text-primary/60 peer-checked:text-primary">Urgent</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Form Action */}
                    <div className="pt-6">
                      <button className="w-full bg-primary text-on-primary text-lg font-bold tracking-tight py-5 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 font-headline" type="submit">
                        <span>Add to Engine</span>
                        <span className="material-symbols-outlined text-[20px]">bolt</span>
                      </button>
                      <p className="text-center text-[10px] text-secondary mt-4 uppercase font-bold tracking-widest">
                        Approx. processing time: 2-4 minutes
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Info Sidebar (Bento-style) */}
              <div className="col-span-12 lg:col-span-5 space-y-6">
                <div className="bg-surface-container-highest/30 p-8 rounded-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-8 bg-tertiary-fixed rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-tertiary-fixed text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-on-tertiary-fixed-variant font-headline">AI Curator Logic</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-primary mb-4 font-headline">Autonomous Context Detection</h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    Once added, the engine will automatically scrape top SERP results for this keyword, identify semantic gaps in your existing content, and draft a topical cluster map.
                  </p>
                </div>
                <div className="bg-primary p-8 rounded-xl text-white">
                  <h3 className="text-xs font-black uppercase tracking-widest text-secondary mb-6 font-headline">Processing Tip</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <p className="text-sm text-secondary font-medium">Use broad "seed" keywords for better clustering results.</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <p className="text-sm text-secondary font-medium">Optional URL helps the AI align with your existing tone.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  )
}