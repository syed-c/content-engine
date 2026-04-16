'use client'

import Link from 'next/link'

export default function CreateWorkspacePage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* TopAppBar */}
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-surface-container">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined text-sm">workspaces</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-primary font-headline">ContentEngine</span>
          </div>
          <button className="text-primary hover:opacity-80 transition-opacity active:scale-90 transition-transform">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </header>

        <main className="mt-24 px-6">
          {/* Hero Section */}
          <section className="mb-12">
            <h1 className="font-headline text-5xl font-extrabold tracking-tight text-primary leading-[1.1] mb-2">Initialize New Node</h1>
            <p className="text-secondary font-medium tracking-wide">Scaling your SEO architecture</p>
          </section>

          {/* Form Section 1: Identity */}
          <section className="mb-10 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container">01 Identity</span>
              <div className="h-[1px] flex-grow bg-outline-variant opacity-20"></div>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-tighter text-secondary">Workspace Name</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 focus:ring-1 focus:ring-primary/20 text-on-surface font-body font-medium placeholder:text-outline" placeholder="e.g. Project Nebula" type="text"/>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-tighter text-secondary">Primary Domain</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 focus:ring-1 focus:ring-primary/20 text-on-surface font-body font-medium placeholder:text-outline" placeholder="nebula-seo.ai" type="url"/>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-tighter text-secondary">Brand Voice</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-surface-container-high border-none rounded-lg px-4 py-3.5 focus:ring-1 focus:ring-primary/20 text-on-surface font-body font-medium">
                    <option>Editorial Authority</option>
                    <option>Technical Precision</option>
                    <option>Gen-Z Conversational</option>
                    <option>Minimalist Abstract</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">unfold_more</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Resource Allocation */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container">02 Resource Allocation</span>
              <div className="h-[1px] flex-grow bg-outline-variant opacity-20"></div>
            </div>
            <div className="space-y-4">
              {/* Plan Card: Starter */}
              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-outline-variant/10 flex justify-between items-center group active:scale-95 transition-transform">
                <div>
                  <h3 className="font-bold text-primary font-headline">Starter</h3>
                  <p className="text-xs text-secondary">5,000 AI Pages / Month</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-primary">$49</p>
                  <p className="text-[9px] uppercase tracking-widest text-outline">Per Node</p>
                </div>
              </div>

              {/* Plan Card: Pro (Active) */}
              <div className="p-5 rounded-xl bg-primary text-on-primary shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex justify-between items-center relative overflow-hidden active:scale-95 transition-transform">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold font-headline">Pro</h3>
                    <span className="bg-tertiary-container text-[8px] px-1.5 py-0.5 rounded text-on-tertiary-container font-black uppercase">Popular</span>
                  </div>
                  <p className="text-xs opacity-70">25,000 AI Pages / Month</p>
                </div>
                <div className="text-right relative z-10">
                  <p className="text-sm font-black">$199</p>
                  <p className="text-[9px] uppercase tracking-widest opacity-50">Per Node</p>
                </div>
                {/* Subtle AI Glow Texture */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-tertiary-container rounded-full blur-[40px] opacity-40"></div>
              </div>

              {/* Plan Card: Agency */}
              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-outline-variant/10 flex justify-between items-center active:scale-95 transition-transform">
                <div>
                  <h3 className="font-bold text-primary font-headline">Agency</h3>
                  <p className="text-xs text-secondary">Unlimited Infrastructure</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-primary">$599</p>
                  <p className="text-[9px] uppercase tracking-widest text-outline">Per Node</p>
                </div>
              </div>
            </div>
          </section>

          {/* Insight Card */}
          <section className="mb-12">
            <div className="bg-tertiary-container p-6 rounded-xl relative overflow-hidden">
              <div className="flex gap-4 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-on-tertiary-container/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                </div>
                <div>
                  <h4 className="text-on-tertiary-container font-bold text-sm mb-1">Rapid Deployment</h4>
                  <p className="text-on-tertiary-container/70 text-xs leading-relaxed">System architecture will be live in 2-4 minutes. Content generation protocols initiate immediately upon node validation.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Action */}
          <div className="pb-10">
            <button className="w-full bg-primary text-on-primary py-5 rounded-lg font-headline font-black tracking-widest text-sm shadow-xl active:scale-95 transition-transform">
              INITIALIZE WORKSPACE
            </button>
            <p className="text-center text-[10px] text-outline mt-4 uppercase tracking-[0.2em] font-semibold">Ready for immediate scale</p>
          </div>
        </main>

        {/* BottomNavBar */}
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-surface/60 backdrop-blur-xl shadow-[0_-20px_40px_rgba(28,27,27,0.05)]">
          <Link href="/dashboard" className="flex flex-col items-center justify-center text-secondary hover:text-primary transition-colors scale-95 active:scale-90 transition-transform">
            <span className="material-symbols-outlined">bolt</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest mt-1">Engine</span>
          </Link>
          <Link href="/dashboard/workspace" className="flex flex-col items-center justify-center text-primary bg-surface-container rounded-xl px-3 py-1.5 scale-95 active:scale-90 transition-transform">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest mt-1">Assets</span>
          </Link>
          <Link href="/dashboard/analytics" className="flex flex-col items-center justify-center text-secondary hover:text-primary transition-colors scale-95 active:scale-90 transition-transform">
            <span className="material-symbols-outlined">trending_up</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest mt-1">Growth</span>
          </Link>
          <button className="flex flex-col items-center justify-center text-secondary hover:text-primary transition-colors scale-95 active:scale-90 transition-transform">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest mt-1">Insights</span>
          </button>
        </nav>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:flex">
        {/* Sidebar Component (SideNavBar) */}
        <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-surface border-r border-outline-variant/10 p-6 gap-y-2 z-50">
          <div className="text-lg font-black tracking-tighter mb-8 font-headline uppercase">ContentEngine.ai</div>
          <div className="flex items-center gap-3 px-3 py-4 mb-6 bg-surface-container rounded-lg">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold">W</div>
            <div className="flex flex-col">
              <span className="text-xs font-bold leading-tight uppercase tracking-widest">Workspace</span>
              <span className="text-[10px] text-secondary">Digital Curator</span>
            </div>
          </div>
          <nav className="flex-1 flex flex-col gap-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 p-3 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-all duration-200">
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span className="font-body text-sm">Dashboard</span>
            </Link>
            <Link href="/dashboard/workspace" className="flex items-center gap-3 p-3 bg-white text-primary font-bold rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[20px]">folder_copy</span>
              <span className="font-body text-sm">Projects</span>
            </Link>
            <Link href="/dashboard/keywords" className="flex items-center gap-3 p-3 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-all duration-200">
              <span className="material-symbols-outlined text-[20px]">key_visualizer</span>
              <span className="font-body text-sm">Keywords</span>
            </Link>
            <Link href="/dashboard/articles/queue" className="flex items-center gap-3 p-3 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-all duration-200">
              <span className="material-symbols-outlined text-[20px]">rate_review</span>
              <span className="font-body text-sm">Review Queue</span>
            </Link>
            <button className="flex items-center gap-3 p-3 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-all duration-200 w-full">
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span className="font-body text-sm">Settings</span>
            </button>
          </nav>
          <div className="mt-auto pt-6 border-t border-outline-variant/10 flex flex-col gap-y-1">
            <button className="flex items-center gap-3 p-3 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-all duration-200 w-full">
              <span className="material-symbols-outlined text-[20px]">help</span>
              <span className="font-body text-sm">Support</span>
            </button>
            <button className="flex items-center gap-3 p-3 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-all duration-200 w-full">
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span className="font-body text-sm">Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <main className="ml-64 min-h-screen">
          {/* TopAppBar */}
          <header className="w-full h-16 sticky top-0 z-40 bg-surface flex justify-between items-center px-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">System / Node / Initialization</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined">apps</span>
              </button>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzvcbZy9B7uv5FKTNCi3uMAUaYEFwyaI-mwarFtKQ9pMkyLt4RTY5BA5UurWfPZaODVMogwaXJgxdjGar_JFn3_gVYn6pUt-aQoprtzSvxzG-JRfB4hOEkLo623UtBWRQu12hxSYn6mzoHeZrgPs4asP6PhLqTgo2cdF4LcQEKaCZ4sAcfas7-4VRBIadF0oSnNP2BpHa0M4aCL2UIa1bIy-V83gknbE9GTFbNJAN37JyTVZ2fNPad0TYgX-4SQ95QEk4XXYrkpuE"/>
              </div>
            </div>
          </header>

          <div className="max-w-5xl mx-auto px-12 py-16">
            {/* Header Section with Asymmetric Layout */}
            <div className="grid grid-cols-12 gap-8 mb-16">
              <div className="col-span-12 md:col-span-8">
                <h1 className="text-6xl font-black tracking-tighter leading-none mb-4 uppercase font-headline">Create New Workspace</h1>
                <p className="text-xl text-secondary font-light">Initialize a new programmatic SEO node.</p>
              </div>
            </div>

            {/* Form & Side Info Section */}
            <div className="grid grid-cols-12 gap-12">
              <div className="col-span-12 md:col-span-7">
                <div className="space-y-10">
                  {/* Step 1: Identity */}
                  <section>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-secondary">01 / Identity</label>
                    <div className="space-y-6">
                      <div className="relative">
                        <label className="block text-sm font-bold mb-2">Workspace Name</label>
                        <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary focus:bg-surface-container-high transition-all outline-none font-body" placeholder="e.g., Global Marketing HQ" type="text"/>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-bold mb-2">Primary Domain</label>
                        <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary focus:bg-surface-container-high transition-all outline-none font-body" placeholder="domain.com" type="text"/>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-bold mb-2">Brand Voice Profile</label>
                        <select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary focus:bg-surface-container-high transition-all outline-none appearance-none font-body">
                          <option>Authority &amp; Academic</option>
                          <option>Gen-Z Minimalist</option>
                          <option>SaaS Technical</option>
                          <option>Lifestyle Editorial</option>
                        </select>
                      </div>
                    </div>
                  </section>

                  {/* Step 2: Resource Allocation */}
                  <section>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-secondary">02 / Resource Allocation</label>
                    <div className="grid grid-cols-3 gap-4">
                      <label className="cursor-pointer group">
                        <input className="sr-only peer" name="plan" type="radio"/>
                        <div className="h-full p-6 bg-surface-container-low rounded-xl border border-transparent peer-checked:border-primary peer-checked:bg-white transition-all">
                          <div className="text-xs font-bold uppercase mb-4 text-secondary">Starter</div>
                          <div className="text-2xl font-black">$49</div>
                          <div className="text-[10px] text-secondary mt-1">/month</div>
                        </div>
                      </label>
                      <label className="cursor-pointer group">
                        <input className="sr-only peer" name="plan" type="radio" defaultChecked/>
                        <div className="h-full p-6 bg-surface-container-low rounded-xl border border-transparent peer-checked:border-primary peer-checked:bg-white transition-all">
                          <div className="text-xs font-bold uppercase mb-4 text-secondary">Pro</div>
                          <div className="text-2xl font-black">$199</div>
                          <div className="text-[10px] text-secondary mt-1">/month</div>
                        </div>
                      </label>
                      <label className="cursor-pointer group">
                        <input className="sr-only peer" name="plan" type="radio"/>
                        <div className="h-full p-6 bg-surface-container-low rounded-xl border border-transparent peer-checked:border-primary peer-checked:bg-white transition-all">
                          <div className="text-xs font-bold uppercase mb-4 text-secondary">Agency</div>
                          <div className="text-2xl font-black">$499</div>
                          <div className="text-[10px] text-secondary mt-1">/month</div>
                        </div>
                      </label>
                    </div>
                  </section>

                  {/* CTA Section */}
                  <div className="pt-6">
                    <button className="w-full bg-primary text-on-primary py-6 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all group">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                      <span className="font-headline font-extrabold uppercase tracking-widest text-lg">Initialize Workspace</span>
                    </button>
                    <p className="text-center mt-4 text-xs text-secondary">By initializing, you agree to the Node Usage Policy.</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Context Column */}
              <div className="col-span-12 md:col-span-4 md:col-start-9">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden group">
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse shadow-[0_0_8px_#866cfe]"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Initialization Status</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 tracking-tight">Rapid Deployment</h3>
                      <p className="text-sm text-secondary leading-relaxed">
                        New nodes are typically live within <span className="text-primary font-bold">2-4 minutes</span>. Our distributed edge network begins indexing your brand voice immediately upon activation.
                      </p>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-5">
                      <span className="material-symbols-outlined text-9xl">speed</span>
                    </div>
                  </div>
                  <div className="p-8 border border-outline-variant/20 rounded-2xl">
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Prerequisites</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-xs mt-0.5">check_circle</span>
                        <span className="text-xs text-secondary leading-tight">Verified primary domain ownership or subdomain access.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-xs mt-0.5">check_circle</span>
                        <span className="text-xs text-secondary leading-tight">Minimum 5 seed keywords for initial vector mapping.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-xs mt-0.5">check_circle</span>
                        <span className="text-xs text-secondary leading-tight">API endpoint configuration for CMS integration.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}