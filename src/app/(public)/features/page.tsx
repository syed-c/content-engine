'use client'

import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <main>
      {/* ==================== MOBILE HERO ==================== */}
      <section className="lg:hidden bg-[#121212] pt-32 pb-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6 border border-white/20">
            Capabilities
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tighter mb-6 leading-tight">The Engine.</h1>
          <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-xs mx-auto">
            Precision-engineered programmatic SEO for high-growth digital assets.
          </p>
        </div>
      </section>

      {/* ==================== DESKTOP HERO ==================== */}
      <section className="hidden lg:flex bg-[#121212] pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <span className="inline-block border border-white/10 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] text-white/40 mb-8 font-label">The Future of Content Execution</span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-10 font-headline">
            Architected for the <br/>Modern SEO Era
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            A complete, autonomous content pipeline built on real SERP data. Move beyond keywords to market dominance.
          </p>
        </div>
      </section>

      {/* ==================== MOBILE CORE FEATURES ==================== */}
      <div className="lg:hidden py-16 px-6 space-y-8 bg-surface-container-low relative">
        <div className="absolute top-0 left-0 w-full h-12 bg-[#121212]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        {/* SERP Intelligence */}
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm relative z-10">
          <div className="w-12 h-12 bg-[#121212] flex items-center justify-center rounded-lg mb-6">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>query_stats</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-tight">SERP Intelligence</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Reverse-engineer intent. Our engine scans live search results to map the semantic clusters your competitors are missing.
          </p>
        </div>
        
        {/* AI Brief Engine */}
        <div className="bg-primary text-on-primary p-8 rounded-xl shadow-2xl relative z-10 border border-white/10">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg mb-6">
            <span className="material-symbols-outlined text-black" style={{ fontSize: '24px' }}>architecture</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-tight">AI Brief Engine</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Automate the blueprint. Generate structured content outlines that satisfy both user intent and algorithmic requirements.
          </p>
        </div>
        
        {/* Multi-Pass Writing */}
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm relative z-10">
          <div className="w-12 h-12 bg-[#121212] flex items-center justify-center rounded-lg mb-6">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>rebase_edit</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-tight">Multi-Pass Writing</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Refinement at scale. Each paragraph undergoes multiple AI passes for tone consistency, fact-checking, and narrative flow.
          </p>
        </div>
        
        {/* CMS Publishing */}
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm relative z-10">
          <div className="w-12 h-12 bg-[#121212] flex items-center justify-center rounded-lg mb-6">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>publish</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-tight">CMS Publishing</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Native integrations with Webflow, WordPress, and Shopify for seamless, automated content delivery at scale.
          </p>
        </div>
      </div>

      {/* ==================== DESKTOP CORE FEATURES ==================== */}
      <section className="hidden lg:block bg-surface py-32 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10">
            {/* SERP Intelligence */}
            <div className="bg-surface-container-lowest p-12 md:p-16 flex flex-col justify-between aspect-square md:aspect-auto">
              <div>
                <span className="material-symbols-outlined text-4xl mb-8 text-primary">data_exploration</span>
                <h3 className="text-3xl font-black tracking-tighter mb-6 font-headline">SERP Intelligence</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-sm">
                  Automated extraction of Top 10 results, People Also Ask (PAA), and featured snippets. Our engine understands search intent by analyzing the winning patterns of your competitors in real-time.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold tracking-wider uppercase">Real-time Analysis</span>
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold tracking-wider uppercase">Intent Mapping</span>
              </div>
            </div>
            
            {/* AI Brief Engine */}
            <div className="bg-surface-container-low p-12 md:p-16 flex flex-col justify-between aspect-square md:aspect-auto">
              <div>
                <span className="material-symbols-outlined text-4xl mb-8 text-primary">auto_awesome_motion</span>
                <h3 className="text-3xl font-black tracking-tighter mb-6 font-headline">AI Brief Engine</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-sm">
                  Transform raw SERP data into structured, editable briefs. We map the semantic gap between what's ranking and what's missing, ensuring your content is architected to win.
                </p>
              </div>
              <div className="mt-12">
                <div className="bg-surface-container-lowest h-24 w-full rounded-xl border border-outline-variant/10 flex items-center px-6 gap-4 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-tertiary shadow-[0_0_8px_#866cfe]"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-1.5 w-1/2 bg-on-surface-variant/10 rounded"></div>
                    <div className="h-1.5 w-3/4 bg-on-surface-variant/5 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Multi-Pass Writing */}
            <div className="bg-surface-container-low p-12 md:p-16 flex flex-col justify-between aspect-square md:aspect-auto">
              <div>
                <span className="material-symbols-outlined text-4xl mb-8 text-primary">history_edu</span>
                <h3 className="text-3xl font-black tracking-tighter mb-6 font-headline">Multi-Pass Writing</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-sm">
                  We don't just prompt and pray. Our section-by-section generation uses recursive refinement to maintain human-grade quality, technical accuracy, and consistent brand voice across 5,000+ words.
                </p>
              </div>
              <div className="mt-12">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">01</div>
                  <div className="w-8 h-8 rounded-lg bg-primary/40 flex items-center justify-center text-white text-xs font-bold">02</div>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-white text-xs font-bold">03</div>
                </div>
              </div>
            </div>
            
            {/* CMS Publishing */}
            <div className="bg-surface-container-lowest p-12 md:p-16 flex flex-col justify-between aspect-square md:aspect-auto">
              <div>
                <span className="material-symbols-outlined text-4xl mb-8 text-primary">dynamic_feed</span>
                <h3 className="text-3xl font-black tracking-tighter mb-6 font-headline">CMS Publishing</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-sm">
                  One-click synchronization to WordPress, Webflow, and Ghost. Manage your entire content fleet from a single command center with native image optimization and internal linking.
                </p>
              </div>
              <div className="mt-12 flex gap-8 grayscale opacity-40">
                <span className="font-black tracking-tight text-xs uppercase">WordPress</span>
                <span className="font-black tracking-tight text-xs uppercase">Webflow</span>
                <span className="font-black tracking-tight text-xs uppercase">Ghost</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MOBILE ADVANCED CAPABILITIES ==================== */}
      <section className="lg:hidden py-20 px-6 bg-surface">
        <h2 className="text-3xl font-extrabold tracking-tighter mb-12">Engine Efficiency.</h2>
        <div className="space-y-10">
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-[#121212]">savings</span>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">95% Operational Savings</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Eliminate the high cost of manual editorial oversight without sacrificing quality or brand voice.</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-[#121212]">clinical_notes</span>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Human-in-the-loop Protocol</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Built-in approval workflows ensure AI outputs meet the highest standards of expertise and authority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MOBILE ADVANCED CARDS ==================== */}
      <section className="lg:hidden py-12 px-6 bg-surface-container-low">
        <div className="space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
            <h4 className="text-lg font-bold tracking-tight mb-3">Topical Authority Cluster Builder</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Map your entire industry. Our AI identifies semantic gaps and builds content clusters that force search engines to recognize you as the niche leader.</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
            <h4 className="text-lg font-bold tracking-tight mb-3">Content Decay Detection</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Don't lose your rankings. We monitor your live URLs and automatically suggest or trigger refreshes when data becomes stale or competitors leapfrog.</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
            <h4 className="text-lg font-bold tracking-tight mb-3">Competitor Gap Analysis</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Reverse engineer exactly why your competitors rank. We analyze their structure, entity density, and content depth to give you an unfair advantage.</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
            <h4 className="text-lg font-bold tracking-tight mb-3">EEAT Signal Injection</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">For YMYL topics, we inject author credentials, source citations, and disclaimer blocks to meet Google's quality guidelines.</p>
          </div>
        </div>
      </section>

      {/* ==================== DESKTOP ADVANCED CAPABILITIES ==================== */}
      <section className="hidden lg:block bg-surface-container-low py-32 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black tracking-tighter leading-tight mb-8 font-headline">Advanced <br/>Capabilities</h2>
            <p className="text-on-surface-variant font-light text-lg">Beyond standard SEO. We build the infrastructure for programmatic dominance.</p>
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 text-sm font-bold text-primary">
                <span className="material-symbols-outlined text-xl">check_circle</span>
                95% Operational Savings
              </div>
              <div className="flex items-center gap-4 text-sm font-bold text-primary">
                <span className="material-symbols-outlined text-xl">check_circle</span>
                Human-in-the-loop Protocol
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline/5 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-black tracking-tight mb-4 font-headline">Topical Authority Cluster Builder</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Map your entire industry. Our AI identifies semantic gaps and builds content clusters that force search engines to recognize you as the niche leader.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline/5 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-black tracking-tight mb-4 font-headline">Content Decay Detection</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Don't lose your rankings. We monitor your live URLs and automatically suggest or trigger refreshes when data becomes stale or competitors leapfrog.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline/5 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-black tracking-tight mb-4 font-headline">Competitor Gap Analysis</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Reverse engineer exactly why your competitors rank. We analyze their structure, entity density, and content depth to give you an unfair advantage.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline/5 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-black tracking-tight mb-4 font-headline">EEAT Signal Injection</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">For YMYL topics, we inject author credentials, source citations, and disclaimer blocks to meet Google's quality guidelines for health, finance, and legal content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MOBILE STATS ==================== */}
      <section className="lg:hidden py-20 px-6 bg-surface-container-low border-y border-outline-variant/10">
        <div className="flex flex-col gap-16 text-center">
          <div>
            <div className="text-6xl font-black tracking-tighter text-primary">95%</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mt-3">Cost Reduction</div>
          </div>
          <div className="w-12 h-[1px] bg-outline-variant/30 mx-auto"></div>
          <div>
            <div className="text-6xl font-black tracking-tighter text-primary">2.4x</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mt-3">Average CTR Improvement</div>
          </div>
        </div>
      </section>

      {/* ==================== DESKTOP STATS ==================== */}
      <section className="hidden lg:block py-32 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-12">The Engine Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="text-7xl font-black tracking-tighter text-primary font-headline">95%</div>
              <p className="text-on-surface-variant uppercase text-xs font-bold tracking-widest">Cost reduction vs agency</p>
            </div>
            <div className="space-y-4">
              <div className="text-7xl font-black tracking-tighter text-primary font-headline">2.4x</div>
              <p className="text-on-surface-variant uppercase text-xs font-bold tracking-widest">Average CTR Improvement</p>
            </div>
          </div>
          <div className="mt-24 p-12 bg-primary rounded-2xl text-white text-left flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            <div className="flex-1">
              <h3 className="text-2xl font-black tracking-tight mb-4 italic font-headline">Human-in-the-loop Philosophy</h3>
              <p className="text-white/60 leading-relaxed font-light">We believe AI is a multiplier, not a replacement. Our platform provides the industrial scaffolding while leaving you in total creative control. One editor can now do the work of a 20-person newsroom.</p>
            </div>
            <div className="text-5xl font-thin text-white/10 hidden md:block select-none tracking-widest font-headline">ARCHITECTURE</div>
          </div>
        </div>
      </section>

      {/* ==================== MOBILE ARCHITECTURE ==================== */}
      <section className="lg:hidden py-20 px-6 bg-surface">
        <div className="bg-[#121212] border border-white/10 rounded-3xl p-10 text-left relative overflow-hidden">
          <h2 className="text-2xl font-extrabold text-white tracking-tighter mb-6 relative z-10">Human-in-the-loop Philosophy</h2>
          <p className="text-neutral-400 text-sm leading-relaxed mb-8 relative z-10">
            We don't believe in "set and forget." Our architecture is built to augment human creativity, not replace it. The engine handles the heavy lifting—data extraction, formatting, and drafting—while your editors provide the strategic nuance and final polish.
          </p>
          <div className="flex items-center gap-3 text-white text-[10px] font-bold tracking-[0.15em] uppercase relative z-10">
            <span className="material-symbols-outlined text-lg">verified_user</span>
            The Quality Standard
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        </div>
      </section>

      {/* ==================== MOBILE CTA ==================== */}
      <section className="lg:hidden py-20 px-6 text-center bg-surface">
        <h2 className="text-3xl font-extrabold tracking-tighter leading-tight mb-8">Ready to dominate search?</h2>
        <Link href="/register" className="block w-full py-4 bg-primary text-white font-bold tracking-tight rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98] duration-150 shadow-lg text-lg">
          Start Your Engine Free
        </Link>
        <p className="mt-6 text-on-surface-variant text-xs font-medium opacity-60">No credit card required. 14-day full access trial.</p>
      </section>

      {/* ==================== DESKTOP CTA ==================== */}
      <section className="hidden lg:block bg-primary pt-32 pb-24 px-8 text-center border-t border-white/5">
        <div className="max-w-[960px] mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full mb-8 border border-white/10">
            <span className="w-6 h-6 bg-[#866cfe] rounded-lg flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </span>
            <span className="text-white/80 text-xs font-bold tracking-wider uppercase">The Engine That Powers 200+ SEO Teams</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-12 font-headline">Ready to dominate <br/>the search results?</h2>
          <Link href="/register" className="inline-block bg-white text-black px-12 py-5 rounded-lg text-lg font-bold tracking-tight hover:bg-surface-container-high transition-colors mb-24">
            Start Your Engine Free
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left mb-24">
            <div className="flex flex-col gap-4">
              <span className="text-white text-xs font-bold uppercase tracking-widest">Platform</span>
              <Link href="/features" className="text-white/40 text-sm hover:text-white transition-colors">Features</Link>
              <Link href="/pricing" className="text-white/40 text-sm hover:text-white transition-colors">Pricing</Link>
              <span className="text-white/40 text-sm cursor-pointer">API</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white text-xs font-bold uppercase tracking-widest">Company</span>
              <Link href="/about" className="text-white/40 text-sm hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-white/40 text-sm hover:text-white transition-colors">Contact</Link>
              <span className="text-white/40 text-sm cursor-pointer">Careers</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white text-xs font-bold uppercase tracking-widest">Legal</span>
              <span className="text-white/40 text-sm cursor-pointer">Privacy</span>
              <span className="text-white/40 text-sm cursor-pointer">Terms</span>
              <span className="text-white/40 text-sm cursor-pointer">Security</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white text-xs font-bold uppercase tracking-widest">Resources</span>
              <span className="text-white/40 text-sm cursor-pointer">Docs</span>
              <span className="text-white/40 text-sm cursor-pointer">Guides</span>
              <span className="text-white/40 text-sm cursor-pointer">Blog</span>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-white text-xl font-bold tracking-tighter font-headline">ContentEngine.ai</span>
            <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium">© 2024 The Digital Curator. All rights reserved.</p>
          </div>
        </div>
      </section>
    </main>
  )
}