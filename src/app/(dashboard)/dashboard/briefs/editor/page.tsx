'use client'

export default function BriefEditorPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* TopAppBar Section */}
        <header className="sticky top-0 w-full z-50 bg-surface flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-4">
            <button className="active:scale-95 transition-transform duration-200 text-primary">
              <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
            </button>
            <h1 className="font-headline font-extrabold tracking-tighter uppercase text-primary text-lg">Brief Editor</h1>
          </div>
          <button className="active:scale-95 transition-transform duration-200 text-primary">
            <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
          </button>
        </header>

        <main className="pb-32 px-6 pt-8 space-y-12">
          {/* Hero Section: Keyword & Score */}
          <section className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">Focus Keyword</span>
              <div className="bg-primary text-on-primary px-3 py-1 text-sm font-black rounded-lg flex items-center gap-1">
                <span className="material-symbols-outlined text-xs" data-icon="auto_awesome" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                94%
              </div>
            </div>
            <h2 className="font-headline font-extrabold text-5xl leading-[0.95] tracking-tighter uppercase">
              SAAS<br/>GROWTH<br/>STRATEGIES
            </h2>
          </section>

          {/* Primary H1 Card */}
          <section className="bg-primary-container p-8 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <span className="material-symbols-outlined text-on-primary text-6xl" data-icon="format_quote">format_quote</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-primary-container mb-4 block">Optimized H1 Headline</span>
            <p className="font-headline font-extrabold text-2xl text-on-primary leading-tight tracking-tight">
              The Architecture of Scale: Why Programmatic Content is Decoupling SaaS Growth from Headcount.
            </p>
          </section>

          {/* Brief Structure List */}
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-headline font-extrabold text-xl uppercase tracking-tighter">Brief Structure</h3>
              <span className="text-[10px] font-bold text-outline uppercase">3 Sections Generated</span>
            </div>
            <div className="space-y-6">
              {/* Section 01 */}
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15">
                <div className="flex items-start gap-4 mb-6">
                  <span className="font-headline font-extrabold text-4xl text-outline-variant/40">01</span>
                  <div className="flex-1">
                    <h4 className="font-headline font-bold text-lg leading-snug">The Unit Economics of Scalable Content</h4>
                    <span className="inline-flex items-center mt-2 px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed text-[9px] font-bold uppercase tracking-wider rounded">AI Curated</span>
                  </div>
                  <span className="material-symbols-outlined text-outline" data-icon="expand_more">expand_more</span>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-outline block">Writing Instructions</label>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                    Focus on the CAC/LTV ratio shifts when moving from manual to AI-native workflows. Use data points regarding the reduction in per-page production cost from $200 to &lt;$1.
                  </p>
                </div>
              </div>

              {/* Section 02 */}
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-headline font-extrabold text-4xl text-outline-variant/40">02</span>
                  <div className="flex-1">
                    <h4 className="font-headline font-bold text-lg leading-snug">Technical SEO Scaffolding</h4>
                  </div>
                  <span className="material-symbols-outlined text-outline" data-icon="expand_more">expand_more</span>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-outline block">Writing Instructions</label>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                    Detail the importance of internal linking structures and schema markup for high-volume page clusters. Avoid generic advice; prioritize crawl budget optimization.
                  </p>
                </div>
              </div>

              {/* Section 03 */}
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-headline font-extrabold text-4xl text-outline-variant/40">03</span>
                  <div className="flex-1">
                    <h4 className="font-headline font-bold text-lg leading-snug">Conversion Hooks in Auto-Content</h4>
                  </div>
                  <span className="material-symbols-outlined text-outline" data-icon="expand_more">expand_more</span>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-outline block">Writing Instructions</label>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                    Integrate contextual CTA placement rules. Explain how to map intent modifiers to specific product features within the programmatic template.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* New Section: Target Audience (Asymmetric Pattern) */}
          <section className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="h-[1px] bg-outline-variant/20 mb-8"></div>
            </div>
            <div className="col-span-5">
              <h3 className="font-headline font-black text-xs uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr] h-full flex items-center justify-center border-r border-outline-variant/20 py-4">Audience Archetype</h3>
            </div>
            <div className="col-span-7 space-y-6">
              <div className="space-y-2">
                <h5 className="font-bold text-sm">Growth Engineers</h5>
                <p className="text-xs text-on-surface-variant">Prioritizing automation, API connectivity, and high-frequency deployment.</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-bold text-sm">SEO Strategists</h5>
                <p className="text-xs text-on-surface-variant">Focused on topical authority and long-tail keyword dominance.</p>
              </div>
            </div>
          </section>
        </main>

        {/* Fixed Action Bar */}
        <div className="fixed bottom-24 left-0 w-full px-6 flex flex-col gap-3 z-40">
          <button className="w-full bg-primary text-on-primary py-5 rounded-lg font-headline font-extrabold uppercase tracking-widest text-sm shadow-xl active:scale-[0.98] transition-transform">
            Generate Full Draft
          </button>
          <button className="w-full bg-surface-container-lowest border border-outline text-primary py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-sm" data-icon="refresh">refresh</span>
            Regenerate Brief
          </button>
        </div>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:block">
        {/* Editor Canvas */}
        <div className="flex-grow px-12 py-12 max-w-6xl mx-auto w-full">
          {/* Section 1: Header Section */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b-0">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-sm text-[10px] font-headline font-black uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm" data-icon="auto_awesome" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                AI Generated Brief
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tight uppercase leading-none text-primary">SaaS Growth Strategies</h2>
              <p className="text-secondary font-medium tracking-tight text-xl">Target Keyword: <span className="text-primary underline underline-offset-4 decoration-2">saas-growth-strategies-2024</span></p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-[80px] font-black leading-none tracking-tighter text-primary">94<span className="text-3xl text-secondary">%</span></div>
              <div className="text-[10px] font-headline font-black uppercase tracking-[0.2em] text-secondary">AI Quality Score</div>
            </div>
          </section>

          {/* Section 2: Title Editor */}
          <section className="mb-24 bg-surface-container-low p-12 rounded-sm border-l-8 border-primary">
            <label className="block text-[10px] font-headline font-black uppercase tracking-[0.3em] text-secondary mb-6">Primary H1 Headline</label>
            <input 
              className="w-full bg-transparent border-none p-0 text-4xl md:text-5xl font-headline font-extrabold tracking-tight focus:ring-0 text-primary placeholder-secondary" 
              type="text" 
              value="How to Scale SaaS with Programmatic SEO"
            />
          </section>

          {/* Section 3: Structure Editor */}
          <section className="space-y-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter">Brief Structure</h3>
              <button className="flex items-center gap-2 text-[10px] font-headline font-bold uppercase tracking-widest border border-primary px-4 py-2 hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                Add Section
              </button>
            </div>

            {/* Draggable Items Simulation */}
            <div className="space-y-6">
              {/* Section Card 1 */}
              <div className="group bg-surface-container-lowest p-8 rounded-sm hover:shadow-[20px_0_40px_rgba(0,0,0,0.03)] transition-all">
                <div className="flex items-start gap-6">
                  <div className="mt-2 cursor-grab active:cursor-grabbing text-secondary hover:text-primary">
                    <span className="material-symbols-outlined" data-icon="drag_indicator">drag_indicator</span>
                  </div>
                  <div className="flex-grow space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-secondary">01</span>
                      <input 
                        className="flex-grow bg-transparent border-none p-0 text-xl font-bold tracking-tight focus:ring-0" 
                        type="text" 
                        value="The Unit Economics of Scalable Content"
                      />
                      <span className="text-[10px] font-headline font-bold text-secondary uppercase tracking-widest px-2 py-1 bg-surface-container rounded-sm">H2</span>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-sm">
                      <label className="block text-[10px] font-headline font-black uppercase tracking-widest text-secondary mb-2">Writing Instructions</label>
                      <textarea 
                        className="w-full bg-transparent border-none p-0 text-sm font-medium leading-relaxed focus:ring-0 resize-none" 
                        rows={2}
                        defaultValue="Focus on unit economics and multi-pass writing benefits. Connect LTV to organic acquisition costs."
                      />
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-error transition-all">
                    <span className="material-symbols-outlined" data-icon="delete">delete</span>
                  </button>
                </div>
              </div>

              {/* Section Card 2 */}
              <div className="group bg-surface-container-lowest p-8 rounded-sm hover:shadow-[20px_0_40px_rgba(0,0,0,0.03)] transition-all">
                <div className="flex items-start gap-6">
                  <div className="mt-2 cursor-grab active:cursor-grabbing text-secondary hover:text-primary">
                    <span className="material-symbols-outlined" data-icon="drag_indicator">drag_indicator</span>
                  </div>
                  <div className="flex-grow space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-secondary">02</span>
                      <input 
                        className="flex-grow bg-transparent border-none p-0 text-xl font-bold tracking-tight focus:ring-0" 
                        type="text" 
                        value="Architecting Data Layers for Programmatic Engines"
                      />
                      <span className="text-[10px] font-headline font-bold text-secondary uppercase tracking-widest px-2 py-1 bg-surface-container rounded-sm">H2</span>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-sm">
                      <label className="block text-[10px] font-headline font-black uppercase tracking-widest text-secondary mb-2">Writing Instructions</label>
                      <textarea 
                        className="w-full bg-transparent border-none p-0 text-sm font-medium leading-relaxed focus:ring-0 resize-none" 
                        rows={2}
                        defaultValue="Explain technical requirements for headless CMS integration. Use a professional, authoritative tone."
                      />
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-error transition-all">
                    <span className="material-symbols-outlined" data-icon="delete">delete</span>
                  </button>
                </div>
              </div>

              {/* Section Card 3 */}
              <div className="group bg-surface-container-lowest p-8 rounded-sm hover:shadow-[20px_0_40px_rgba(0,0,0,0.03)] transition-all">
                <div className="flex items-start gap-6">
                  <div className="mt-2 cursor-grab active:cursor-grabbing text-secondary hover:text-primary">
                    <span className="material-symbols-outlined" data-icon="drag_indicator">drag_indicator</span>
                  </div>
                  <div className="flex-grow space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-secondary">03</span>
                      <input 
                        className="flex-grow bg-transparent border-none p-0 text-xl font-bold tracking-tight focus:ring-0" 
                        type="text" 
                        value="Case Study: From 0 to 1M Organic"
                      />
                      <span className="text-[10px] font-headline font-bold text-secondary uppercase tracking-widest px-2 py-1 bg-surface-container rounded-sm">H3</span>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-sm">
                      <label className="block text-[10px] font-headline font-black uppercase tracking-widest text-secondary mb-2">Writing Instructions</label>
                      <textarea 
                        className="w-full bg-transparent border-none p-0 text-sm font-medium leading-relaxed focus:ring-0 resize-none" 
                        rows={2}
                        defaultValue="Refer to the 'Project Alpha' results. Emphasize speed to market and keyword cluster dominance."
                      />
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-error transition-all">
                    <span className="material-symbols-outlined" data-icon="delete">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Spacer for Action Bar */}
          <div className="h-40"></div>
        </div>

        {/* Section 4: Fixed Action Bar */}
        <footer className="fixed bottom-0 left-64 right-0 bg-white/80 backdrop-blur-xl border-t border-surface-container-highest px-12 py-6 flex items-center justify-between z-40">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-headline font-black uppercase tracking-widest text-secondary">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold">Auto-saved 2m ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-8 py-3 bg-surface-container text-primary font-headline font-bold text-xs uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
              Regenerate Brief
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-primary text-primary font-headline font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
              Save Changes
            </button>
            <button className="px-10 py-3 bg-primary text-on-primary font-headline font-bold text-xs uppercase tracking-widest shadow-xl flex items-center gap-3 group">
              Generate Full Draft
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
        </footer>
      </div>
    </main>
  )
}