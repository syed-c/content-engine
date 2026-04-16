'use client'

import Link from 'next/link'

export default function PricingPage() {
  return (
    <main>
      {/* ==================== MOBILE HERO ==================== */}
      <section className="lg:hidden bg-[#121212] pt-32 pb-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6 border border-white/20">
            Transparent Plans
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tighter mb-6 leading-tight">Simple, Transparent Pricing</h1>
          <p className="text-neutral-400 text-lg font-light leading-relaxed mb-10">
            Bespoke programmatic SEO solutions for brands that demand authority. Choose a plan that fuels your growth without hidden complexities.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <span className="text-xs font-medium text-white">Monthly</span>
            <div className="w-12 h-6 bg-white/10 rounded-full p-1 flex items-center border border-white/20">
              <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-neutral-400">Annual</span>
              <span className="bg-white text-black text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Save 20%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DESKTOP HERO ==================== */}
      <section className="hidden lg:flex bg-[#121212] pt-48 pb-32 px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-white/20">
            Transparent Plans
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-8 text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Bespoke programmatic SEO solutions for brands that demand authority. Choose a plan that fuels your growth without hidden complexities.
          </p>
          <div className="flex items-center gap-6 justify-center">
            <span className="text-sm font-medium text-white">Monthly</span>
            <div className="w-14 h-7 bg-white/10 rounded-full p-1 flex items-center cursor-pointer border border-white/20">
              <div className="w-5 h-5 bg-white rounded-full shadow-sm ml-auto"></div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-neutral-400">Annual</span>
              <span className="bg-white text-black text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider">Save 20%</span>
            </div>
          </div>
          <Link href="/features" className="mt-8 inline-block text-white/60 text-sm hover:text-white transition-colors">
            View all features <span className="material-symbols-outlined text-sm align-middle">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ==================== MOBILE PRICING TIERS ==================== */}
      <div className="lg:hidden py-16 px-6 space-y-8 bg-surface-container-low relative">
        <div className="absolute top-0 left-0 w-full h-12 bg-[#121212]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        {/* Starter */}
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm transition-shadow relative z-10">
          <h3 className="text-2xl font-bold mb-2">Starter</h3>
          <p className="text-on-surface-variant text-sm mb-6">For individuals and niche sites.</p>
          <div className="mb-8">
            <span className="text-4xl font-extrabold tracking-tighter">$49</span>
            <span className="text-on-surface-variant text-lg">/mo</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>20 AI Articles /mo</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>1 Workspace</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>1 Team Seat</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>Basic CMS Export</span>
            </li>
          </ul>
          <Link href="/register" className="block w-full py-4 bg-surface-container-high text-on-surface font-bold rounded-lg hover:bg-surface-container-highest transition-colors text-center">Get Started</Link>
        </div>
        
        {/* Pro (Featured) */}
        <div className="bg-primary text-on-primary p-8 rounded-xl shadow-2xl relative border border-white/10">
          <div className="absolute -top-3 right-6 bg-white text-black px-4 py-1 rounded text-[10px] font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-neutral-400 text-sm mb-6">Scaling programmatic machines.</p>
          <div className="mb-8">
            <span className="text-4xl font-extrabold tracking-tighter">$149</span>
            <span className="text-neutral-400 text-lg">/mo</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-on-primary text-lg">verified</span>
              <span>100 AI Articles /mo</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-on-primary text-lg">verified</span>
              <span>5 Workspaces</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-on-primary text-lg">verified</span>
              <span>3 Team Seats</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-on-primary text-lg">verified</span>
              <span>Advanced CMS (Headless)</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-on-primary text-lg">verified</span>
              <span>AI Image Generation</span>
            </li>
          </ul>
          <Link href="/register" className="block w-full py-4 bg-white text-black font-bold rounded-lg hover:opacity-90 transition-opacity text-center">Get Started</Link>
        </div>
        
        {/* Agency */}
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm transition-shadow relative z-10">
          <h3 className="text-2xl font-bold mb-2">Agency</h3>
          <p className="text-on-surface-variant text-sm mb-6">Unlimited potential for enterprise.</p>
          <div className="mb-8">
            <span className="text-4xl font-extrabold tracking-tighter">$399</span>
            <span className="text-on-surface-variant text-lg">/mo</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>500 AI Articles /mo</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>Unlimited Workspaces</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>10 Team Seats</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>Custom CMS Connectors</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>White-label Options</span>
            </li>
          </ul>
          <Link href="/register" className="block w-full py-4 bg-surface-container-high text-on-surface font-bold rounded-lg hover:bg-surface-container-highest transition-colors text-center">Get Started</Link>
        </div>
      </div>

      {/* ==================== DESKTOP PRICING CARDS ==================== */}
      <section className="hidden lg:block bg-surface-container-low py-32 px-8 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-[#121212] clip-path-[polygon(0_0,100%_0,100%_100%,0_0)]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col h-full hover:shadow-[0_20px_40px_rgba(28,27,27,0.05)] transition-shadow duration-500 border border-outline-variant/10">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-on-surface-variant text-sm mb-8">For individuals and niche sites.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold tracking-tighter">$49</span>
              <span className="text-on-surface-variant text-lg">/mo</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                20 AI Articles /mo
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                1 Workspace
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                1 Team Seat
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                Basic CMS Export
              </li>
            </ul>
            <Link href="/register" className="block w-full py-4 bg-surface-container-high text-on-surface font-bold rounded-lg hover:bg-surface-container-highest transition-colors text-center">Get Started</Link>
          </div>
          
          {/* Pro */}
          <div className="bg-primary text-on-primary p-10 rounded-xl flex flex-col h-full shadow-2xl relative transform scale-105 z-10 border border-white/10">
            <div className="absolute -top-4 right-8 bg-white text-black px-4 py-1 rounded text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-neutral-400 text-sm mb-8">Scaling programmatic machines.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold tracking-tighter">$149</span>
              <span className="text-neutral-400 text-lg">/mo</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-on-primary text-lg">verified</span>
                100 AI Articles /mo
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-on-primary text-lg">verified</span>
                5 Workspaces
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-on-primary text-lg">verified</span>
                3 Team Seats
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-on-primary text-lg">verified</span>
                Advanced CMS (Headless)
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-on-primary text-lg">verified</span>
                AI Image Generation
              </li>
            </ul>
            <Link href="/register" className="block w-full py-4 bg-on-primary text-primary font-bold rounded-lg hover:opacity-90 transition-opacity text-center">Get Started</Link>
          </div>
          
          {/* Agency */}
          <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col h-full hover:shadow-[0_20px_40px_rgba(28,27,27,0.05)] transition-shadow duration-500 border border-outline-variant/10">
            <h3 className="text-2xl font-bold mb-2">Agency</h3>
            <p className="text-on-surface-variant text-sm mb-8">Unlimited potential for enterprise.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold tracking-tighter">$399</span>
              <span className="text-on-surface-variant text-lg">/mo</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                500 AI Articles /mo
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                Unlimited Workspaces
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                10 Team Seats
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                Custom CMS Connectors
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                White-label Options
              </li>
            </ul>
            <Link href="/register" className="block w-full py-4 bg-surface-container-high text-on-surface font-bold rounded-lg hover:bg-surface-container-highest transition-colors text-center">Get Started</Link>
          </div>
        </div>
      </section>

      {/* ==================== MOBILE FEATURE COMPARISON ==================== */}
      <section className="lg:hidden py-20 px-6 bg-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Compare Features</h2>
          <p className="text-on-surface-variant text-sm">Dive deep into our plan capabilities.</p>
        </div>
        <div className="space-y-4 max-w-lg mx-auto">
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden p-5">
            <div className="font-bold text-base mb-3">Rank Tracking</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-on-surface-variant">Starter</span><span className="font-semibold">50 Keywords</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Pro</span><span className="font-semibold">500 Keywords</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Agency</span><span className="font-bold text-primary uppercase text-[10px] tracking-widest">Unlimited</span></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden p-5">
            <div className="font-bold text-base mb-3">Auto Refresh</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-on-surface-variant">Starter</span><span className="text-neutral-300">—</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Pro</span><span className="material-symbols-outlined text-primary">check_circle</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Agency</span><span className="material-symbols-outlined text-primary">check_circle</span></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden p-5">
            <div className="font-bold text-base mb-3">AI Image Generation</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-on-surface-variant">Starter</span><span className="text-neutral-300">—</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Pro</span><span>Standard</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Agency</span><span>Premium HD</span></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden p-5">
            <div className="font-bold text-base mb-3">Topical Clusters</div>
            <p className="text-sm font-bold text-primary">Available on all plans</p>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden p-5">
            <div className="font-bold text-base mb-3">White-label Reports</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-on-surface-variant">Starter</span><span className="text-neutral-300">—</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Pro</span><span className="text-neutral-300">—</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Agency</span><span className="material-symbols-outlined text-primary">check_circle</span></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden p-5">
            <div className="font-bold text-base mb-3">API Access</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-on-surface-variant">Starter / Pro</span><span className="text-neutral-300">—</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Agency</span><span className="font-bold text-primary uppercase text-[10px] tracking-widest">Full Access</span></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden p-5">
            <div className="font-bold text-base mb-3">Competitor Gap</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-on-surface-variant">Starter</span><span className="text-neutral-300">—</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Pro</span><span>Basic</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Agency</span><span>Advanced</span></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden p-5">
            <div className="font-bold text-base mb-3">Custom Templates</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-on-surface-variant">Starter</span><span className="text-neutral-300">—</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Pro</span><span>3 Templates</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Agency</span><span className="font-bold text-primary uppercase text-[10px] tracking-widest">Unlimited</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DESKTOP FEATURE COMPARISON ==================== */}
      <section className="hidden lg:block py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-20 text-left">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/20">
                <th className="py-6 px-4 text-sm font-bold uppercase tracking-widest text-on-surface-variant">Core Features</th>
                <th className="py-6 px-4 text-sm font-bold uppercase tracking-widest text-on-surface-variant">Starter</th>
                <th className="py-6 px-4 text-sm font-bold uppercase tracking-widest text-on-surface-variant">Pro</th>
                <th className="py-6 px-4 text-sm font-bold uppercase tracking-widest text-on-surface-variant">Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              <tr>
                <td className="py-6 px-4 font-medium">Rank Tracking</td>
                <td className="py-6 px-4 text-sm">50 Keywords</td>
                <td className="py-6 px-4 text-sm">500 Keywords</td>
                <td className="py-6 px-4 text-sm">Unlimited</td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-medium">Auto Refresh</td>
                <td className="py-6 px-4 text-sm text-on-surface-variant">—</td>
                <td className="py-6 px-4 text-sm"><span className="material-symbols-outlined">check</span></td>
                <td className="py-6 px-4 text-sm"><span className="material-symbols-outlined">check</span></td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-medium">AI Image Gen</td>
                <td className="py-6 px-4 text-sm text-on-surface-variant">—</td>
                <td className="py-6 px-4 text-sm">Standard</td>
                <td className="py-6 px-4 text-sm">Premium HD</td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-medium">Topical Clusters</td>
                <td className="py-6 px-4 text-sm"><span className="material-symbols-outlined">check</span></td>
                <td className="py-6 px-4 text-sm"><span className="material-symbols-outlined">check</span></td>
                <td className="py-6 px-4 text-sm"><span className="material-symbols-outlined">check</span></td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-medium">Competitor Gap</td>
                <td className="py-6 px-4 text-sm text-on-surface-variant">—</td>
                <td className="py-6 px-4 text-sm">Basic</td>
                <td className="py-6 px-4 text-sm">Advanced</td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-medium">White-label Reports</td>
                <td className="py-6 px-4 text-sm text-on-surface-variant">—</td>
                <td className="py-6 px-4 text-sm text-on-surface-variant">—</td>
                <td className="py-6 px-4 text-sm"><span className="material-symbols-outlined">check</span></td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-medium">API Access</td>
                <td className="py-6 px-4 text-sm text-on-surface-variant">—</td>
                <td className="py-6 px-4 text-sm text-on-surface-variant">—</td>
                <td className="py-6 px-4 text-sm"><span className="material-symbols-outlined">check</span></td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-medium">Custom Templates</td>
                <td className="py-6 px-4 text-sm text-on-surface-variant">—</td>
                <td className="py-6 px-4 text-sm">3 Templates</td>
                <td className="py-6 px-4 text-sm">Unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ==================== MOBILE CREDIT TOP-UP ==================== */}
      <section className="lg:hidden py-20 px-6 bg-surface-container-low">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Article Credit Top-Up Packs</h2>
          <p className="text-on-surface-variant text-sm max-w-sm mx-auto">Need more volume this month? Add extra article credits anytime.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/10 group hover:border-primary transition-all">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3 block">Starter Pack</span>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-extrabold">+50 Credits</div>
                <div className="text-lg font-medium text-neutral-500">$99</div>
              </div>
              <button className="px-5 py-2.5 bg-primary text-on-primary rounded-lg font-bold text-xs active:scale-95 transition-transform">Buy Credits</button>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/10 group hover:border-primary transition-all">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3 block">Growth Pack</span>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-extrabold">+150 Credits</div>
                <div className="text-lg font-medium text-neutral-500">$249</div>
              </div>
              <button className="px-5 py-2.5 bg-primary text-on-primary rounded-lg font-bold text-xs active:scale-95 transition-transform">Buy Credits</button>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/10 group hover:border-primary transition-all">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3 block">Scale Pack</span>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-extrabold">+500 Credits</div>
                <div className="text-lg font-medium text-neutral-500">$699</div>
              </div>
              <button className="px-5 py-2.5 bg-primary text-on-primary rounded-lg font-bold text-xs active:scale-95 transition-transform">Buy Credits</button>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/10 group hover:border-primary transition-all border-l-4 border-primary">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3 block">Agency Pack</span>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-extrabold">+1500 Credits</div>
                <div className="text-lg font-medium text-neutral-500">$1,499</div>
              </div>
              <button className="px-5 py-2.5 bg-primary text-on-primary rounded-lg font-bold text-xs active:scale-95 transition-transform">Buy Credits</button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DESKTOP CREDIT TOP-UP ==================== */}
      <section className="hidden lg:block bg-surface py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Article Credit Top-Up Packs</h2>
            <p className="text-on-surface-variant max-w-2xl">Need more volume this month? Add extra article credits anytime without changing your monthly subscription plan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 group hover:border-primary transition-all">
              <span className="text-xs font-bold text-tertiary-container uppercase tracking-widest mb-4 block">Starter Pack</span>
              <div className="text-3xl font-extrabold mb-4">+50 Credits</div>
              <div className="text-xl font-medium mb-6">$99</div>
              <button className="w-full py-3 bg-primary text-on-primary rounded font-bold text-sm">Buy Credits</button>
            </div>
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 group hover:border-primary transition-all">
              <span className="text-xs font-bold text-tertiary-container uppercase tracking-widest mb-4 block">Growth Pack</span>
              <div className="text-3xl font-extrabold mb-4">+150 Credits</div>
              <div className="text-xl font-medium mb-6">$249</div>
              <button className="w-full py-3 bg-primary text-on-primary rounded font-bold text-sm">Buy Credits</button>
            </div>
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 group hover:border-primary transition-all">
              <span className="text-xs font-bold text-tertiary-container uppercase tracking-widest mb-4 block">Scale Pack</span>
              <div className="text-3xl font-extrabold mb-4">+500 Credits</div>
              <div className="text-xl font-medium mb-6">$699</div>
              <button className="w-full py-3 bg-primary text-on-primary rounded font-bold text-sm">Buy Credits</button>
            </div>
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 group hover:border-primary transition-all">
              <span className="text-xs font-bold text-tertiary-container uppercase tracking-widest mb-4 block">Agency Pack</span>
              <div className="text-3xl font-extrabold mb-4">+1500 Credits</div>
              <div className="text-xl font-medium mb-6">$1,499</div>
              <button className="w-full py-3 bg-primary text-on-primary rounded font-bold text-sm">Buy Credits</button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MOBILE FAQ ==================== */}
      <section className="lg:hidden py-20 px-6 bg-surface">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-10 max-w-lg mx-auto">
          <div>
            <h4 className="font-bold text-base mb-3">How does billing work?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">We bill monthly or annually in advance. You can cancel at any time, and you'll maintain access to your plan until the end of the current billing cycle.</p>
          </div>
          <div>
            <h4 className="font-bold text-base mb-3">What happens to unused credits?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Monthly subscription credits expire at the end of the billing cycle. Top-up credits, however, never expire and roll over indefinitely.</p>
          </div>
          <div>
            <h4 className="font-bold text-base mb-3">Can I upgrade my plan mid-month?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Yes, you can upgrade at any time. We'll prorate the difference for the remainder of your billing cycle and add your new credits immediately.</p>
          </div>
          <div>
            <h4 className="font-bold text-base mb-3">Do you offer custom enterprise plans?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Absolutely. For high-volume needs exceeding 5,000 articles per month, please contact our sales team for bespoke pricing and dedicated infrastructure.</p>
          </div>
          <div>
            <h4 className="font-bold text-base mb-3">What are "Topical Clusters"?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Our AI analyzes your niche to build semantically linked content groups, which helps search engines understand your site as a topical authority.</p>
          </div>
          <div>
            <h4 className="font-bold text-base mb-3">Is there a free trial available?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">We provide a demo environment and 5 complimentary credits to test our quality before committing to a paid subscription.</p>
          </div>
        </div>
      </section>

      {/* ==================== DESKTOP FAQ ==================== */}
      <section className="hidden lg:block py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-20 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            <div>
              <h4 className="font-bold text-lg mb-4">How does billing work?</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">We bill monthly or annually in advance. You can cancel at any time, and you'll maintain access to your plan until the end of the current billing cycle. <Link href="/contact" className="text-primary underline">Contact us</Link> for billing inquiries.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">What happens to unused credits?</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Monthly subscription credits expire at the end of the billing cycle. Top-up credits, however, never expire and roll over indefinitely. This ensures you never lose value.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Can I upgrade my plan mid-month?</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Yes, you can upgrade at any time. We'll prorate the difference for the remainder of your billing cycle and add your new credits immediately. Upgrading unlocks more workspaces, team seats, and advanced features.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Do you offer custom enterprise plans?</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Absolutely. For high-volume needs exceeding 5,000 articles per month, please <Link href="/contact" className="text-primary underline">contact our sales team</Link> for bespoke pricing and dedicated infrastructure.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">What are "Topical Clusters"?</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Our AI analyzes your niche to build semantically linked content groups, which helps search engines understand your site as a topical authority. <Link href="/features" className="text-primary underline">Learn more about this feature</Link>.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Is there a free trial available?</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">We provide a demo environment and 5 complimentary credits to test our quality before committing to a paid subscription. No credit card required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MOBILE CTA ==================== */}
      <section className="lg:hidden py-20 px-6 bg-surface">
        <div className="bg-[#121212] border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden">
          <h2 className="text-3xl font-extrabold text-white tracking-tighter mb-6">Ready to scale?</h2>
          <p className="text-neutral-400 text-sm mb-10 leading-relaxed">Join 500+ SEO agencies and modern brands automating their authority with ContentEngine.ai</p>
          <div className="flex flex-col gap-4">
            <Link href="/register" className="block w-full py-4 bg-white text-black font-bold rounded-lg text-base text-center active:scale-95 transition-transform">Start Your Trial</Link>
            <button className="w-full py-4 bg-transparent text-white border border-white/20 font-bold rounded-lg text-base active:scale-95 transition-transform">Book a Demo</button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
        </div>
      </section>

      {/* ==================== DESKTOP CTA ==================== */}
      <section className="hidden lg:block py-32 px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-[#121212] border border-white/10 rounded-3xl p-16 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-8">Ready to scale?</h2>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto mb-12">Join 500+ SEO agencies and modern brands automating their authority with ContentEngine.ai</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 bg-white text-black font-bold rounded-lg text-lg hover:opacity-90 transition-opacity text-center">Start Your Trial</Link>
            <Link href="/contact" className="px-8 py-4 bg-transparent text-white border border-white/20 font-bold rounded-lg text-lg hover:bg-white/5 transition-colors text-center">Book a Demo</Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]"></div>
      </section>
    </main>
  )
}