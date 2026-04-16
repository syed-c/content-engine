'use client'

import Link from 'next/link'

export default function CMSPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* Mobile Version */}
      <div className="lg:hidden pb-32">
        {/* TopAppBar */}
        <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-surface flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary transition-colors hover:bg-neutral-100 p-2 rounded-lg">grid_view</span>
            <h1 className="text-xl font-black tracking-tighter text-primary uppercase font-headline">ContentEngine.ai</h1>
          </div>
          <div className="flex items-center">
            <span className="material-symbols-outlined text-primary transition-colors hover:bg-neutral-100 p-2 rounded-lg">account_circle</span>
          </div>
        </header>

        <main className="px-6 py-8">
          {/* CMS Connections Header */}
          <section className="mb-12 relative">
            <div className="bg-primary text-on-primary p-8 -mx-6 mb-8" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }}>
              <h2 className="text-4xl font-headline font-extrabold tracking-tighter leading-none mb-2">CMS CONNECTIONS</h2>
              <p className="text-on-primary-container text-sm font-medium tracking-wide">WORKSPACE: PRODUCTION_ALPHA</p>
            </div>
          </section>

          {/* Connected Platforms List */}
          <section className="space-y-4 mb-12">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase mb-6">Active Ecosystems</h3>
            
            {/* WordPress Card (Active) */}
            <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between transition-all duration-150 active:scale-95 border border-black/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-on-primary">article</span>
                </div>
                <div>
                  <p className="font-headline font-extrabold text-lg leading-none">WordPress</p>
                  <p className="text-xs text-outline font-medium mt-1">v6.4.2 Production</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] px-2 py-1 rounded font-black tracking-wider uppercase">Active</span>
              </div>
            </div>

            {/* Webflow Card (Inactive) */}
            <div className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between transition-all duration-150 active:scale-95">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-on-surface-variant">webhook</span>
                </div>
                <div>
                  <p className="font-headline font-extrabold text-lg leading-none opacity-50">Webflow</p>
                  <p className="text-xs text-outline font-medium mt-1">Pending Sync</p>
                </div>
              </div>
              <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 rounded font-black tracking-wider uppercase">Not Connected</span>
            </div>
          </section>

          {/* Connection Setup Form */}
          <section>
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase mb-6">New Integration</h3>
            <div className="bg-primary p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <div className="mb-8">
                <h4 className="text-on-primary font-headline font-extrabold text-2xl tracking-tight leading-tight">Connection Setup</h4>
                <p className="text-on-primary-container text-xs mt-2 font-medium opacity-80">Link your engine to external CMS endpoints.</p>
              </div>
              <form className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-on-primary-container uppercase tracking-widest ml-1">Platform Selection</label>
                  <div className="relative">
                    <select className="w-full bg-primary-container border-none text-on-primary text-sm py-4 px-4 rounded-lg appearance-none focus:ring-1 focus:ring-on-primary/20">
                      <option>Select Engine Destination</option>
                      <option>Shopify Hydrogen</option>
                      <option>Custom API Headless</option>
                      <option>Ghost CMS</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-primary-container pointer-events-none">unfold_more</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-on-primary-container uppercase tracking-widest ml-1">Site URL</label>
                  <input className="w-full bg-primary-container border-none text-on-primary text-sm py-4 px-4 rounded-lg focus:ring-1 focus:ring-on-primary/20 placeholder:text-on-primary-container/40" placeholder="https://api.yourdomain.com" type="text"/>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-on-primary-container uppercase tracking-widest ml-1">API Key</label>
                  <div className="relative">
                    <input className="w-full bg-primary-container border-none text-on-primary text-sm py-4 px-4 rounded-lg focus:ring-1 focus:ring-on-primary/20" type="password" defaultValue="••••••••••••••••"/>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-primary-container cursor-pointer">visibility_off</span>
                  </div>
                </div>
                <button className="w-full bg-on-primary text-primary font-headline font-black text-sm uppercase py-5 rounded-lg tracking-widest transition-transform active:scale-95 mt-4" type="button">
                  Establish Link
                </button>
              </form>
            </div>
          </section>
        </main>

        {/* BottomNavBar */}
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-8 px-4 bg-surface/80 backdrop-blur-2xl z-50 border-t border-black/5 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
          <Link href="/dashboard/published" className="flex flex-col items-center justify-center text-gray-400 opacity-60 hover:opacity-100 transition-opacity active:scale-90 transition-transform">
            <span className="material-symbols-outlined">folder_open</span>
            <span className="font-headline text-[11px] uppercase tracking-widest font-bold mt-1">Projects</span>
          </Link>
          <Link href="/dashboard/keywords" className="flex flex-col items-center justify-center text-gray-400 opacity-60 hover:opacity-100 transition-opacity active:scale-90 transition-transform">
            <span className="material-symbols-outlined">query_stats</span>
            <span className="font-headline text-[11px] uppercase tracking-widest font-bold mt-1">Keywords</span>
          </Link>
          <Link href="/dashboard/articles" className="flex flex-col items-center justify-center text-gray-400 opacity-60 hover:opacity-100 transition-opacity active:scale-90 transition-transform">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="font-headline text-[11px] uppercase tracking-widest font-bold mt-1">AI Studio</span>
          </Link>
          <Link href="/dashboard/settings" className="flex flex-col items-center justify-center text-primary opacity-100 hover:opacity-100 transition-opacity active:scale-90 transition-transform">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-headline text-[11px] uppercase tracking-widest font-bold mt-1">Settings</span>
          </Link>
        </nav>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex">
        <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col p-4 space-y-2 z-40">
          <div className="mb-8 px-2 pt-4">
            <h1 className="font-headline font-extrabold text-primary text-xl tracking-tighter">ContentEngine.ai</h1>
            <div className="mt-6">
              <h2 className="font-body text-xs font-bold uppercase tracking-widest text-gray-400">Settings</h2>
              <p className="text-[10px] text-gray-500 mt-1">Manage Integrations</p>
            </div>
          </div>
          <nav className="flex-grow space-y-1">
            <Link href="/dashboard/settings" className="flex items-center space-x-3 px-3 py-2.5 text-gray-400 hover:bg-white/50 transition-all duration-300 font-body text-sm font-medium">
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span>Overview</span>
            </Link>
            <Link href="/dashboard/settings/cms" className="flex items-center space-x-3 px-3 py-2.5 bg-white text-primary rounded-lg shadow-sm font-semibold transition-all duration-300 font-body text-sm">
              <span className="material-symbols-outlined text-[20px]">hub</span>
              <span>CMS Connections</span>
            </Link>
            <Link href="/dashboard/settings/brand-voice" className="flex items-center space-x-3 px-3 py-2.5 text-gray-400 hover:bg-white/50 transition-all duration-300 font-body text-sm font-medium">
              <span className="material-symbols-outlined text-[20px]">vpn_key</span>
              <span>API Keys</span>
            </Link>
            <Link href="/dashboard/settings/team" className="flex items-center space-x-3 px-3 py-2.5 text-gray-400 hover:bg-white/50 transition-all duration-300 font-body text-sm font-medium">
              <span className="material-symbols-outlined text-[20px]">group</span>
              <span>Team</span>
            </Link>
            <Link href="/dashboard/settings/billing" className="flex items-center space-x-3 px-3 py-2.5 text-gray-400 hover:bg-white/50 transition-all duration-300 font-body text-sm font-medium">
              <span className="material-symbols-outlined text-[20px]">payments</span>
              <span>Billing</span>
            </Link>
          </nav>
          <div className="pt-4 mt-4 border-t border-outline-variant/10 space-y-1">
            <button className="flex items-center space-x-3 px-3 py-2 text-gray-400 font-body text-xs font-medium hover:bg-white/50 transition-all">
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              <span>Documentation</span>
            </button>
            <button className="flex items-center space-x-3 px-3 py-2 text-gray-400 font-body text-xs font-medium hover:bg-white/50 transition-all">
              <span className="material-symbols-outlined text-[18px]">contact_support</span>
              <span>Support</span>
            </button>
          </div>
        </aside>

        <main className="ml-64 pt-16 min-h-screen">
          <div className="max-w-6xl mx-auto p-12">
            {/* Hero Title Section */}
            <div className="grid grid-cols-12 gap-8 mb-16 items-end">
              <div className="col-span-12 md:col-span-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-sm">Intelligence Active</span>
                </div>
                <h2 className="text-6xl font-headline font-black tracking-tighter text-primary leading-none">CMS Connections</h2>
                <p className="mt-6 text-lg text-secondary max-w-xl font-body leading-relaxed">
                  Orchestrate your programmatic SEO deployment by bridging ContentEngine.ai with your digital ecosystem. Managed, verified, and ready for scale.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 flex justify-end">
                <div className="text-right">
                  <div className="text-4xl font-headline font-black text-primary-container">02</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">Active Endpoints</div>
                </div>
              </div>
            </div>

            {/* Section 1: Connected Platforms */}
            <div className="mb-20">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 px-1">Connected Platforms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* WordPress Card */}
                <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 shadow-sm group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-3 bg-surface-container-high rounded-lg">
                      <span className="material-symbols-outlined text-3xl">article</span>
                    </div>
                    <span className="flex items-center space-x-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      <span>Active</span>
                    </span>
                  </div>
                  <h4 className="text-2xl font-headline font-bold tracking-tight mb-2">WordPress</h4>
                  <p className="text-sm text-secondary font-medium mb-6">blog.contentengine.ai</p>
                  <div className="flex items-center space-x-4">
                    <button className="text-xs font-bold text-primary border-b-2 border-primary pb-1">Manage</button>
                    <button className="text-xs font-bold text-gray-400 hover:text-error transition-colors">Disconnect</button>
                  </div>
                </div>

                {/* Webflow Card */}
                <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 shadow-sm group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-3 bg-surface-container-high rounded-lg">
                      <span className="material-symbols-outlined text-3xl">web</span>
                    </div>
                    <span className="flex items-center space-x-1 bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                      <span>Not Connected</span>
                    </span>
                  </div>
                  <h4 className="text-2xl font-headline font-bold tracking-tight mb-2 text-gray-400">Webflow</h4>
                  <p className="text-sm text-gray-300 font-medium mb-6">Waiting for authorization...</p>
                  <div className="flex items-center space-x-4">
                    <button className="text-xs font-bold text-primary border-b-2 border-primary pb-1">Setup</button>
                  </div>
                </div>

                {/* Add New Card */}
                <div className="bg-surface-container-low p-8 rounded-xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container-high transition-colors">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-gray-400">add</span>
                  </div>
                  <span className="text-sm font-bold text-gray-500">Add Integration</span>
                </div>
              </div>
            </div>

            {/* Section 2: Connection Setup */}
            <section className="bg-surface-container-low rounded-2xl overflow-hidden">
              <div className="grid grid-cols-12">
                {/* Left Rail: Instructions */}
                <div className="col-span-12 lg:col-span-4 bg-primary p-12 text-white">
                  <h3 className="text-3xl font-headline font-black tracking-tighter mb-6">Connection Setup</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                    Securely link your CMS instance to begin automating content flows. We recommend using dedicated Application Passwords for enhanced security.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start space-x-4">
                      <span className="text-[10px] font-bold bg-gray-800 w-5 h-5 flex items-center justify-center rounded-full mt-1">01</span>
                      <span className="text-xs text-gray-300 uppercase tracking-widest font-bold">Select Platform</span>
                    </li>
                    <li className="flex items-start space-x-4">
                      <span className="text-[10px] font-bold bg-gray-800 w-5 h-5 flex items-center justify-center rounded-full mt-1">02</span>
                      <span className="text-xs text-gray-300 uppercase tracking-widest font-bold">Domain Handshake</span>
                    </li>
                    <li className="flex items-start space-x-4">
                      <span className="text-[10px] font-bold bg-gray-800 w-5 h-5 flex items-center justify-center rounded-full mt-1">03</span>
                      <span className="text-xs text-gray-300 uppercase tracking-widest font-bold">Key Validation</span>
                    </li>
                  </ul>
                </div>

                {/* Right Rail: Form */}
                <div className="col-span-12 lg:col-span-8 p-12 bg-white">
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Platform Selection</label>
                        <div className="relative">
                          <select className="w-full bg-surface-container-low border-none rounded-lg p-4 font-body text-sm focus:ring-2 focus:ring-primary/5 appearance-none">
                            <option>WordPress</option>
                            <option>Webflow</option>
                            <option>Shopify</option>
                            <option>Custom API</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">unfold_more</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Site URL</label>
                        <input className="w-full bg-surface-container-low border-none rounded-lg p-4 font-body text-sm focus:ring-2 focus:ring-primary/5" placeholder="https://your-domain.com" type="text"/>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">API Key / Application Password</label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low border-none rounded-lg p-4 font-body text-sm focus:ring-2 focus:ring-primary/5 pr-12" type="password" defaultValue="••••••••••••••••••••••••"/>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400">visibility</span>
                      </div>
                      <p className="text-[10px] text-gray-400 italic mt-2">Stored using AES-256 encryption.</p>
                    </div>
                    <div className="pt-8 flex items-center justify-between border-t border-gray-100">
                      <button className="flex items-center space-x-2 text-primary font-bold text-sm group" type="button">
                        <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform duration-500">sync</span>
                        <span>Test Connection</span>
                      </button>
                      <button className="bg-primary text-white px-8 py-4 rounded-lg font-headline font-black text-sm tracking-tight hover:scale-[0.98] transition-transform" type="submit">
                        Establish Link
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            {/* Bottom Note */}
            <div className="mt-12 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
                Proprietary Connection Engine v4.2 // Security Protocol TLS 1.3
              </p>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}