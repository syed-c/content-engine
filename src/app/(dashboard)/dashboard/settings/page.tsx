'use client'

import Link from 'next/link'

export default function SettingsPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* Mobile Version */}
      <div className="lg:hidden pb-32">
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-neutral-950 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-2">
            <span className="font-headline font-extrabold tracking-tighter text-neutral-100 text-lg uppercase">Settings</span>
            <span className="material-symbols-outlined text-neutral-100 scale-75">expand_more</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-neutral-400 text-sm">person</span>
            </div>
          </div>
        </header>

        <main className="relative pt-20 pb-40">
          <div className="px-6 py-8">
            <h2 className="text-5xl font-extrabold tracking-tighter uppercase leading-[0.8] mb-2">Workspace</h2>
            <p className="text-[10px] font-bold tracking-[0.3em] text-on-surface-variant/40 uppercase">System ID: 882-CE</p>
          </div>

          <div className="flex flex-col">
            {/* Personal Info Section */}
            <section className="sticky top-24 w-full bg-surface-container-lowest rounded-t-[2.5rem] px-6 pt-10 pb-20 -mb-10 z-10 shadow-[0_-12px_24px_rgba(0,0,0,0.05)] border-t border-white/20">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black tracking-[0.25em] uppercase text-on-surface-variant/50">Personal Info</h3>
                <span className="material-symbols-outlined text-on-surface-variant/30">fingerprint</span>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 bg-primary-container rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold font-headline leading-tight tracking-tight">Julian Draxler</p>
                    <p className="text-sm font-bold text-on-surface-variant/60 uppercase tracking-widest">Administrator</p>
                  </div>
                </div>
                <div className="bg-surface-container-low/50 p-5 rounded-2xl border border-outline-variant/10">
                  <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-1">Email Node</p>
                  <p className="font-bold text-sm">j.draxler@contentengine.ai</p>
                </div>
              </div>
            </section>

            {/* Preferences Section */}
            <section className="sticky top-24 w-full bg-surface-container-low rounded-t-[2.5rem] px-6 pt-10 pb-20 -mb-10 z-20 shadow-[0_-12px_24px_rgba(0,0,0,0.05)] border-t border-white/20">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black tracking-[0.25em] uppercase text-on-surface-variant/50">Preferences</h3>
                <span className="material-symbols-outlined text-on-surface-variant/30">tune</span>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/60 mb-1">CMS Connection</p>
                      <p className="text-3xl font-extrabold font-headline tracking-tighter italic">Webflow</p>
                    </div>
                    <div className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full border border-green-500/20 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-widest">Live</span>
                    </div>
                  </div>
                  <div className="p-5 bg-white rounded-2xl">
                    <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/60 mb-1">Brand Voice</p>
                    <p className="text-lg font-bold font-headline">Sophisticated Editorial</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-5 bg-white/50 rounded-2xl border border-white">
                    <div className="flex flex-col">
                      <span className="font-extrabold text-sm uppercase tracking-tight">Deploy Sync</span>
                      <span className="text-[10px] font-medium text-on-surface-variant">Instant SEO push</span>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-5 bg-white/50 rounded-2xl border border-white">
                    <div className="flex flex-col">
                      <span className="font-extrabold text-sm uppercase tracking-tight">Intelligence</span>
                      <span className="text-[10px] font-medium text-on-surface-variant">Weekly AI reports</span>
                    </div>
                    <div className="w-12 h-6 bg-neutral-200 rounded-full relative">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Developer Access Section */}
            <section className="sticky top-24 w-full bg-neutral-950 rounded-t-[2.5rem] px-6 pt-10 pb-20 -mb-10 z-30 shadow-[0_-12px_24px_rgba(0,0,0,0.05)] border-t border-white/10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black tracking-[0.25em] uppercase text-neutral-500">Developer Access</h3>
                <span className="material-symbols-outlined text-neutral-700">terminal</span>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-2xl font-black font-headline text-white tracking-tighter uppercase italic">Engine API</h4>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-[9px] font-black uppercase text-neutral-600 tracking-widest">Production Node</span>
                      <span className="material-symbols-outlined text-neutral-600 text-sm">visibility_off</span>
                    </div>
                    <div className="font-mono text-[11px] tracking-widest text-neutral-400 bg-white/5 p-4 rounded-xl border border-white/5">
                      ce_prod_••••••••••••4k9z
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-[9px] font-black uppercase text-neutral-600 tracking-widest">Testing Node</span>
                      <span className="material-symbols-outlined text-neutral-600 text-sm">visibility_off</span>
                    </div>
                    <div className="font-mono text-[11px] tracking-widest text-neutral-400 bg-white/5 p-4 rounded-xl border border-white/5">
                      ce_test_••••••••••••m2v1
                    </div>
                  </div>
                </div>
                <button className="w-full py-5 bg-white text-black text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-neutral-200 transition-colors shadow-lg">
                  Generate New Key
                </button>
              </div>
            </section>

            {/* Billing Section */}
            <section className="sticky top-24 w-full bg-surface-container rounded-t-[2.5rem] px-6 pt-10 pb-20 -mb-10 z-40 shadow-[0_-12px_24px_rgba(0,0,0,0.05)] border-t border-white/20">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black tracking-[0.25em] uppercase text-on-surface-variant/50">Billing</h3>
                <span className="material-symbols-outlined text-on-surface-variant/30">payments</span>
              </div>
              <div className="p-6 bg-white/60 rounded-[2rem] border border-white shadow-sm">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="inline-block px-3 py-1 bg-tertiary text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-3">Pro Plan</span>
                    <h4 className="text-5xl font-black font-headline tracking-tighter leading-none">$490<span className="text-sm font-bold text-on-surface-variant/40 ml-1">/mo</span></h4>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant/40">receipt_long</span>
                </div>
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-sm font-extrabold tracking-tight">
                    <span className="material-symbols-outlined text-lg text-green-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Unlimited Pages
                  </div>
                  <div className="flex items-center gap-3 text-sm font-extrabold tracking-tight">
                    <span className="material-symbols-outlined text-lg text-green-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Brand Mapping
                  </div>
                </div>
                <button className="w-full py-5 border-2 border-black bg-black text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl">
                  Upgrade Now
                </button>
              </div>
            </section>

            {/* Danger Zone Section */}
            <section className="sticky top-24 w-full bg-red-50 rounded-t-[2.5rem] px-6 pt-10 pb-40 z-50 shadow-[0_-12px_24px_rgba(0,0,0,0.05)] border-t border-red-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black tracking-[0.25em] uppercase text-red-900/40">Danger Zone</h3>
                <span className="material-symbols-outlined text-red-900/30">warning</span>
              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-black text-red-900 uppercase tracking-tighter leading-none">Terminate<br/>Workspace</h4>
                <p className="text-[11px] text-red-800/70 leading-relaxed font-bold uppercase tracking-tight">
                  Deleting this workspace will immediately purge all programmatic assets, generated content, and CMS connections. This action cannot be reversed.
                </p>
                <button className="w-full py-5 bg-red-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl shadow-lg shadow-red-200">
                  Delete Workspace
                </button>
              </div>
            </section>
          </div>
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-8 bg-white/80 backdrop-blur-2xl z-50 rounded-t-[2rem] border-t border-neutral-200/30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <Link href="/dashboard" className="flex flex-col items-center justify-center text-neutral-400 hover:text-neutral-950 transition-all">
            <span className="material-symbols-outlined mb-1">leaderboard</span>
            <span className="font-headline text-[10px] font-black uppercase tracking-widest">Metrics</span>
          </Link>
          <Link href="/dashboard/analytics" className="flex flex-col items-center justify-center text-neutral-400 hover:text-neutral-950 transition-all">
            <span className="material-symbols-outlined mb-1">bar_chart</span>
            <span className="font-headline text-[10px] font-black uppercase tracking-widest">Charts</span>
          </Link>
          <Link href="/dashboard/articles" className="flex flex-col items-center justify-center text-neutral-400 hover:text-neutral-950 transition-all">
            <span className="material-symbols-outlined mb-1">list_alt</span>
            <span className="font-headline text-[10px] font-black uppercase tracking-widest">Logs</span>
          </Link>
          <div className="flex flex-col items-center justify-center text-neutral-950 font-bold scale-105">
            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
            <span className="font-headline text-[10px] font-black uppercase tracking-widest">Config</span>
          </div>
        </nav>
      </div>

      {/* Desktop Version */}
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
            <Link href="/dashboard/published" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high hover:pl-2 transition-all duration-300 font-headline font-semibold uppercase tracking-widest text-[11px]">
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
              <span className="text-secondary font-medium hover:text-primary py-1 font-headline tracking-tight cursor-pointer">Dashboard</span>
              <span className="text-secondary font-medium hover:text-primary py-1 font-headline tracking-tight cursor-pointer">Projects</span>
              <span className="text-secondary font-medium hover:text-primary py-1 font-headline tracking-tight cursor-pointer">Strategy</span>
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
          <div className="px-12 lg:px-20 py-12 max-w-7xl mx-auto">
            {/* Header Section */}
            <section className="mb-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-xl">
                  <h1 className="text-7xl md:text-8xl font-black font-headline tracking-tighter text-primary leading-none mb-6">Settings</h1>
                  <p className="text-xl text-on-surface-variant font-light leading-relaxed">
                    Control your digital identity, orchestrate workspace dynamics, and manage the technical heart of your content engine.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">System Online</span>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Primary Settings */}
              <div className="lg:col-span-8 space-y-12">
                {/* Personal Information */}
                <div className="p-8 bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.03)]">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-headline font-extrabold text-2xl tracking-tight text-primary">Personal Information</h3>
                    <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-0.5">Edit Profile</button>
                  </div>
                  <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                    <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center border-4 border-surface">
                      <span className="text-4xl font-black font-headline text-primary-container">JD</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 flex-1">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Full Name</label>
                        <p className="font-medium text-lg text-primary">Julian Draxler</p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Email Address</label>
                        <p className="font-medium text-lg text-primary">julian@contentengine.ai</p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Account Role</label>
                        <p className="font-medium text-lg text-primary">Administrator</p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Timezone</label>
                        <p className="font-medium text-lg text-primary">Europe/Berlin (GMT+1)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workspace Preferences */}
                <div className="space-y-6">
                  <h3 className="font-headline font-extrabold text-2xl tracking-tight text-primary px-2">Workspace Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* CMS Connection */}
                    <div className="p-8 bg-surface-container-low rounded-xl group hover:bg-surface-container transition-colors duration-300 cursor-pointer">
                      <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: '32px' }}>hub</span>
                      <h4 className="font-bold text-lg mb-2">CMS Connection</h4>
                      <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Define where your generated assets are automatically deployed.</p>
                      <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-[14px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                          </div>
                          <span className="text-sm font-semibold">Webflow (Live)</span>
                        </div>
                        <span className="material-symbols-outlined text-stone-400">chevron_right</span>
                      </div>
                    </div>

                    {/* Brand Voice */}
                    <div className="p-8 bg-surface-container-low rounded-xl group hover:bg-surface-container transition-colors duration-300 cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                        <span className="material-symbols-outlined text-primary block" style={{ fontSize: '32px' }}>psychology</span>
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded-sm text-[10px] font-black uppercase tracking-widest">AI Engine</span>
                      </div>
                      <h4 className="font-bold text-lg mb-2">Brand Voice Tone</h4>
                      <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Synchronize AI generation with your specific editorial guidelines.</p>
                      <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg">
                        <span className="text-sm font-semibold">Sophisticated Editorial</span>
                        <span className="material-symbols-outlined text-stone-400">tune</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notification Triggers */}
                <div className="p-8 bg-surface-container-low rounded-xl">
                  <h4 className="font-bold text-lg mb-6">Notification Triggers</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-semibold text-sm">Campaign Completion</p>
                        <p className="text-xs text-on-surface-variant">Notify when bulk programmatic SEO runs are finished.</p>
                      </div>
                      <div className="w-10 h-5 bg-primary rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-semibold text-sm">Token Threshold</p>
                        <p className="text-xs text-on-surface-variant">Alert when workspace usage reaches 90%.</p>
                      </div>
                      <div className="w-10 h-5 bg-surface-container-highest rounded-full relative">
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* API Management */}
                <div className="p-8 bg-primary-container text-white rounded-xl overflow-hidden relative">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-tertiary-container/30 blur-3xl rounded-full"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="material-symbols-outlined text-on-tertiary-container">key</span>
                      <h3 className="font-headline font-extrabold text-2xl tracking-tight">Engine API Keys</h3>
                    </div>
                    <p className="text-on-primary-container mb-8 max-w-lg">Programmatic access for custom integrations. Keep these keys secret and never expose them in client-side code.</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 bg-black/40 p-4 rounded-lg border border-white/5">
                        <div className="flex-1">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-primary-container mb-1">Production Key</p>
                          <code className="text-sm font-mono opacity-80 uppercase tracking-widest">sk_live_••••••••••••••••••••4k2p</code>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-white/10 rounded transition-colors"><span className="material-symbols-outlined text-sm">content_copy</span></button>
                          <button className="p-2 hover:bg-white/10 rounded transition-colors"><span className="material-symbols-outlined text-sm">refresh</span></button>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-black/40 p-4 rounded-lg border border-white/5">
                        <div className="flex-1">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-primary-container mb-1">Testing Key</p>
                          <code className="text-sm font-mono opacity-80 uppercase tracking-widest">sk_test_••••••••••••••••••••9x1a</code>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-white/10 rounded transition-colors"><span className="material-symbols-outlined text-sm">content_copy</span></button>
                          <button className="p-2 hover:bg-white/10 rounded transition-colors"><span className="material-symbols-outlined text-sm">refresh</span></button>
                        </div>
                      </div>
                    </div>
                    <button className="mt-8 text-xs font-bold uppercase tracking-widest text-on-tertiary-container border-b-2 border-on-tertiary-container pb-0.5">Generate New Key</button>
                  </div>
                </div>
              </div>

              {/* Right Column: Sidebar Plan/Support */}
              <div className="lg:col-span-4 space-y-8">
                {/* Plan Overview */}
                <div className="bg-surface-container-high p-8 rounded-xl">
                  <h3 className="font-headline font-black text-xs uppercase tracking-[0.25em] text-stone-400 mb-8">Plan Overview</h3>
                  <div className="mb-8">
                    <h4 className="text-4xl font-black font-headline text-primary mb-1">Pro Plan</h4>
                    <p className="text-sm text-on-surface-variant">Annual Billing cycle</p>
                  </div>
                  <div className="space-y-4 mb-10">
                    <div className="flex justify-between items-center pb-4 border-b border-surface-container-highest">
                      <span className="text-sm font-medium">Articles / mo</span>
                      <span className="text-sm font-bold">500</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-surface-container-highest">
                      <span className="text-sm font-medium">Workspaces</span>
                      <span className="text-sm font-bold">Unlimited</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">AI Models</span>
                      <span className="text-sm font-bold">GPT-4 / Claude 3</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-on-primary py-4 rounded-sm font-headline font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/10">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    Upgrade Subscription
                  </button>
                </div>

                {/* Documentation/Help Card */}
                <div className="bg-surface-container-low p-8 rounded-xl">
                  <h3 className="font-headline font-black text-xs uppercase tracking-[0.25em] text-stone-400 mb-6">Need Assistance?</h3>
                  <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Explore our architectural guides for scaling programmatic SEO or talk to an expert.</p>
                  <div className="space-y-3">
                    <button className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-lg group hover:bg-primary transition-all duration-300 w-full">
                      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">menu_book</span>
                      <span className="text-sm font-bold group-hover:text-white transition-colors">View Docs</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-lg group hover:bg-primary transition-all duration-300 w-full">
                      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">support_agent</span>
                      <span className="text-sm font-bold group-hover:text-white transition-colors">Contact Support</span>
                    </button>
                  </div>
                </div>

                {/* Advanced Action Zone */}
                <div className="pt-8 border-t border-surface-container-high">
                  <h3 className="font-headline font-black text-xs uppercase tracking-[0.25em] text-error mb-4">Danger Zone</h3>
                  <button className="w-full text-left p-4 rounded-lg bg-red-50 text-error hover:bg-error hover:text-white transition-all duration-200">
                    <p className="text-sm font-bold">Delete Workspace</p>
                    <p className="text-[10px] opacity-70">This action is permanent and cannot be undone.</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}