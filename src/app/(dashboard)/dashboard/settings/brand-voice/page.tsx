'use client'

import Link from 'next/link'

export default function BrandVoicePage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* Mobile Version */}
      <div className="lg:hidden pb-32">
        {/* Header (TopAppBar) */}
        <header className="bg-surface flex justify-between items-center w-full px-6 py-4 h-16 fixed top-0 z-50">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">menu</span>
            <span className="font-headline font-bold tracking-tight text-xl text-primary tracking-tighter">ContentEngine.ai</span>
          </div>
          <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
            <span className="material-symbols-outlined text-on-primary text-sm">person</span>
          </div>
        </header>

        <main className="pt-16 pb-28 px-6">
          {/* Hero/Banner Section */}
          <section className="mt-8 mb-10 py-10 bg-primary rounded-xl px-6">
            <h1 className="font-headline font-extrabold text-5xl text-on-primary leading-none tracking-tighter">
              Brand<br/>Voice
            </h1>
            <p className="mt-4 text-on-primary-container font-medium text-sm max-w-[80%]">
              Define the DNA of your programmatic content.
            </p>
          </section>

          {/* Active Configuration */}
          <section className="mb-8">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline-variant/10">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Current Profile</span>
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  AI MANAGED
                </span>
              </div>
              <h2 className="font-headline font-bold text-2xl tracking-tight text-primary">Sophisticated Editorial</h2>
            </div>
          </section>

          {/* Editorial Style Description */}
          <section className="mb-8">
            <div className="bg-surface-container-low p-6 rounded-xl">
              <label className="block font-headline font-bold text-lg mb-4">Voice Rules</label>
              <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20 min-h-[120px]">
                <p className="text-sm leading-relaxed text-on-surface-variant italic">
                  "Maintain a high-level formal tone that remains engaging. Avoid industry jargon. Prioritize clarity over complexity. Use short, punchy sentences for impact."
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="text-primary font-bold text-xs flex items-center gap-1 uppercase tracking-tighter">
                  Edit Rules <span className="material-symbols-outlined text-sm">edit</span>
                </button>
              </div>
            </div>
          </section>

          {/* Dynamic Constraints (Asymmetric Grid) */}
          <section className="mb-8 grid grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary mb-3">uppercase</span>
              <h3 className="font-headline font-bold text-sm mb-2 leading-tight">Always Capitalize</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-surface-container-highest px-2 py-1 rounded-sm font-medium">Web3</span>
                <span className="text-[10px] bg-surface-container-highest px-2 py-1 rounded-sm font-medium">SaaS</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10">
              <span className="material-symbols-outlined text-error mb-3">block</span>
              <h3 className="font-headline font-bold text-sm mb-2 leading-tight">Never Mention</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-error-container text-on-error-container px-2 py-1 rounded-sm font-medium">Competitor-X</span>
              </div>
            </div>
          </section>

          {/* Sample Output Preview */}
          <section className="mb-10">
            <div className="bg-primary-container p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-on-tertiary-container/10 blur-[50px] rounded-full"></div>
              <h3 className="font-headline font-bold text-on-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-on-tertiary-container">auto_awesome</span>
                Engine Transformation
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="opacity-50">
                  <span className="text-[10px] text-on-primary/60 uppercase font-bold block mb-1">Standard Output</span>
                  <p className="text-xs text-on-primary leading-relaxed">Our tool helps you make more money by writing SEO articles fast.</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] text-on-tertiary-container uppercase font-bold block mb-1">Engine Output</span>
                  <p className="text-sm text-on-primary leading-relaxed font-medium">Scale your revenue through programmatic precision. High-impact editorial at the speed of thought.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Save Action */}
          <section className="mb-6">
            <button className="w-full bg-primary text-on-primary py-5 rounded-lg font-headline font-extrabold text-lg flex items-center justify-center gap-3 active:scale-95 transition-transform duration-150">
              Save Profile
              <span className="material-symbols-outlined">check_circle</span>
            </button>
          </section>
        </main>

        {/* BottomNavBar */}
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/60 backdrop-blur-xl z-50 border-t border-black/5 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
          <Link href="/dashboard/articles/editor" className="flex flex-col items-center justify-center text-gray-400 transition-all duration-300 hover:text-black">
            <span className="material-symbols-outlined">edit_note</span>
            <span className="font-headline text-[10px] font-medium tracking-wide uppercase mt-1">Studio</span>
          </Link>
          <Link href="/dashboard" className="flex flex-col items-center justify-center text-gray-400 transition-all duration-300 hover:text-black">
            <span className="material-symbols-outlined">psychology</span>
            <span className="font-headline text-[10px] font-medium tracking-wide uppercase mt-1">Engine</span>
          </Link>
          <Link href="/dashboard/published" className="flex flex-col items-center justify-center text-gray-400 transition-all duration-300 hover:text-black">
            <span className="material-symbols-outlined">folder_open</span>
            <span className="font-headline text-[10px] font-medium tracking-wide uppercase mt-1">Assets</span>
          </Link>
          <Link href="/dashboard/settings" className="flex flex-col items-center justify-center text-primary scale-110 transition-transform">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>tune</span>
            <span className="font-headline text-[10px] font-medium tracking-wide uppercase mt-1">Settings</span>
          </Link>
        </nav>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex">
        <aside className="h-screen w-64 fixed left-0 top-0 bg-surface flex flex-col py-8 px-6 gap-y-4 border-none z-50">
          <div className="mb-8">
            <h1 className="text-lg font-black tracking-tighter text-primary uppercase">ContentEngine</h1>
            <p className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase">Programmatic SEO</p>
          </div>
          <nav className="flex-1 space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-black transition-all translate-x-1 duration-150 font-medium text-sm">
              <span className="material-symbols-outlined text-lg">dashboard</span>
              Dashboard
            </Link>
            <Link href="/dashboard/keywords" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-black transition-all translate-x-1 duration-150 font-medium text-sm">
              <span className="material-symbols-outlined text-lg">key</span>
              Keywords
            </Link>
            <Link href="/dashboard/briefs" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-black transition-all translate-x-1 duration-150 font-medium text-sm">
              <span className="material-symbols-outlined text-lg">description</span>
              Briefs
            </Link>
            <Link href="/dashboard/articles" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-black transition-all translate-x-1 duration-150 font-medium text-sm">
              <span className="material-symbols-outlined text-lg">article</span>
              Articles
            </Link>
            <Link href="/dashboard/analytics" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-black transition-all translate-x-1 duration-150 font-medium text-sm">
              <span className="material-symbols-outlined text-lg">analytics</span>
              Analytics
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-primary font-extrabold border-r-4 border-primary transition-all translate-x-1 duration-150 text-sm">
              <span className="material-symbols-outlined text-lg">settings</span>
              Settings
            </Link>
          </nav>
          <div className="mt-auto pt-8 flex flex-col gap-y-2 border-t border-surface-container">
            <button className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-black transition-all text-sm font-medium">
              <span className="material-symbols-outlined text-lg">help</span>
              Help
            </button>
            <button className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-black transition-all text-sm font-medium">
              <span className="material-symbols-outlined text-lg">logout</span>
              Logout
            </button>
          </div>
        </aside>

        <main className="ml-64 min-h-screen p-12">
          {/* Header Section */}
          <header className="max-w-4xl mb-16">
            <h2 className="font-headline text-6xl font-extrabold tracking-tighter text-primary mb-4">Brand Voice</h2>
            <p className="text-xl font-light text-on-surface-variant max-w-2xl leading-relaxed">
              Synchronize AI generation with your specific editorial guidelines.
            </p>
          </header>

          <div className="grid grid-cols-12 gap-12">
            {/* Left Column: Settings Form */}
            <div className="col-span-12 lg:col-span-8 space-y-12">
              {/* Active Profile Card */}
              <section className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_20px_40px_rgba(28,27,27,0.03)] flex justify-between items-center">
                <div>
                  <p className="text-[10px] tracking-widest font-bold text-gray-400 uppercase mb-1">Active Configuration</p>
                  <h3 className="text-2xl font-bold tracking-tight">Current Profile: <span className="text-primary">Sophisticated Editorial</span></h3>
                </div>
                <div className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-sm text-[10px] font-black tracking-tighter uppercase">
                  AI Managed
                </div>
              </section>

              {/* Editor Section */}
              <section className="space-y-10">
                <div className="space-y-4">
                  <label className="block text-sm font-bold tracking-tight text-on-surface uppercase">Editorial Style Description</label>
                  <textarea 
                    className="w-full bg-surface-container-high border-none rounded-lg p-6 focus:ring-0 focus:bg-surface-container-highest transition-colors text-on-surface placeholder:text-gray-400 text-lg leading-relaxed" 
                    rows={5}
                    defaultValue="Formal yet engaging, avoids jargon, focuses on authoritative insights"
                  />
                  <p className="text-xs text-gray-500 italic">Provide high-level context on how the AI should frame its narrative voice.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="block text-sm font-bold tracking-tight text-on-surface uppercase">Always capitalize</label>
                    <input 
                      className="w-full bg-surface-container-high border-none rounded-lg px-6 py-4 focus:ring-0 focus:bg-surface-container-highest transition-colors" 
                      type="text" 
                      defaultValue="ContentEngine, SEO"
                    />
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-surface-container px-2 py-1 text-[10px] font-bold text-gray-600 rounded">CONTENTENGINE</span>
                      <span className="bg-surface-container px-2 py-1 text-[10px] font-bold text-gray-600 rounded">SEO</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-bold tracking-tight text-on-surface uppercase">Competitors to never mention</label>
                    <input 
                      className="w-full bg-surface-container-high border-none rounded-lg px-6 py-4 focus:ring-0 focus:bg-surface-container-highest transition-colors" 
                      placeholder="Enter brand names..." 
                      type="text"
                    />
                  </div>
                </div>

                <button className="bg-primary hover:bg-primary-container text-on-primary px-12 py-5 rounded-lg text-sm font-black tracking-widest uppercase transition-all flex items-center gap-3">
                  Save Profile
                  <span className="material-symbols-outlined text-sm">save</span>
                </button>
              </section>
            </div>

            {/* Right Column: Contextual Preview */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-12 space-y-8">
                {/* Preview Box */}
                <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-on-tertiary-fixed-variant">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-on-tertiary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    <h4 className="text-[10px] font-black tracking-[0.2em] text-on-tertiary-fixed-variant uppercase">Sample Output Preview</h4>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                      <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-tighter text-[10px]">Standard Generation</p>
                      <p className="text-sm italic text-gray-500">"We use a tool for search engine work to grow brands fast."</p>
                    </div>
                    <div className="p-6 bg-tertiary-container rounded-lg shadow-xl shadow-on-tertiary-container/10">
                      <p className="text-sm font-medium text-on-tertiary/60 mb-2 uppercase tracking-tighter text-[10px]">Sophisticated Editorial (Active)</p>
                      <p className="text-lg text-on-tertiary font-headline leading-snug">
                        "Leveraging <span className="underline decoration-on-tertiary-container">ContentEngine</span> ensures your <span className="underline decoration-on-tertiary-container">SEO</span> performance remains authoritative and insight-driven."
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-outline-variant/20">
                    <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Intelligence Badge</h5>
                    <div className="inline-flex items-center gap-2 bg-tertiary-fixed px-3 py-1.5 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-on-tertiary-fixed-variant animate-pulse"></div>
                      <span className="text-[10px] font-black text-on-tertiary-fixed-variant uppercase">Editorial Engine Active</span>
                    </div>
                  </div>
                </div>

                {/* Usage Tips */}
                <div className="px-8 space-y-4">
                  <h4 className="text-[10px] font-black tracking-widest text-primary uppercase">Editorial Logic</h4>
                  <ul className="space-y-3 text-xs text-on-surface-variant font-medium leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">01</span>
                      Define personas, not just grammar.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">02</span>
                      Use the "Always Capitalize" field for proprietary tech names.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">03</span>
                      Voice updates apply instantly to all new drafts.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}