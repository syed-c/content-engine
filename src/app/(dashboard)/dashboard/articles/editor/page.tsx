'use client'

import Link from 'next/link'

export default function ArticleEditorPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden pb-32">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 w-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-[10px] font-bold">JD</div>
            <span className="font-headline font-bold tracking-tight text-lg text-primary">ContentEngine.ai</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200">settings</button>
          </div>
        </header>

        <main className="pt-20 px-6">
          {/* Status and Title */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase">Intelligence Active</span>
              <span className="text-on-surface-variant text-[10px] font-semibold tracking-widest uppercase">Draft v2.4</span>
            </div>
            <h1 className="font-headline font-extrabold text-4xl leading-tight tracking-tighter mb-4 text-primary">
              The Future of Programmatic SEO is Intent-Based
            </h1>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-4 py-2 text-xs font-bold rounded-lg active:scale-95 transition-all">Save Draft</button>
              <button className="border border-outline-variant/20 text-on-surface px-4 py-2 text-xs font-bold rounded-lg active:scale-95 transition-all">Preview</button>
            </div>
          </section>

          {/* Editor Section */}
          <section className="space-y-6">
            <div className="relative">
              {/* Sticky Toolbar */}
              <div className="sticky top-16 z-40 bg-surface-container-low/80 backdrop-blur-md py-3 -mx-6 px-6 flex gap-4 overflow-x-auto hide-scrollbar mb-4">
                <button className="p-2 bg-surface-container-lowest rounded-lg flex items-center justify-center min-w-[40px] shadow-sm">
                  <span className="material-symbols-outlined text-xl">format_bold</span>
                </button>
                <button className="p-2 bg-surface-container-lowest rounded-lg flex items-center justify-center min-w-[40px] shadow-sm">
                  <span className="material-symbols-outlined text-xl">format_italic</span>
                </button>
                <button className="p-2 bg-surface-container-lowest rounded-lg flex items-center justify-center min-w-[40px] shadow-sm">
                  <span className="material-symbols-outlined text-xl">link</span>
                </button>
                <button className="p-2 bg-surface-container-lowest rounded-lg flex items-center justify-center min-w-[40px] shadow-sm">
                  <span className="material-symbols-outlined text-xl">format_list_bulleted</span>
                </button>
                <button className="p-2 bg-surface-container-lowest rounded-lg flex items-center justify-center min-w-[40px] shadow-sm">
                  <span className="material-symbols-outlined text-xl">format_h1</span>
                </button>
                <button className="p-2 bg-tertiary-container text-on-tertiary-container rounded-lg flex items-center justify-center min-w-[40px] shadow-sm active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_fix_high</span>
                </button>
              </div>

              {/* Content Blocks */}
              <div className="space-y-8">
                <div className="p-6 bg-surface-container-lowest rounded-xl">
                  <p className="text-on-surface leading-relaxed text-lg">
                    Programmatic SEO has evolved beyond simple template-filling. Today, it's about dynamic context. When we look at search intent in 2024, we see a shift toward high-granularity queries that AI is uniquely equipped to handle.
                  </p>
                </div>

                {/* AI Suggestion Block */}
                <div className="relative group">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-tertiary-container rounded-full"></div>
                  <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-transparent">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded text-[8px] font-black tracking-tighter">AI SUGGESTION</span>
                      <button className="material-symbols-outlined text-on-surface-variant text-sm">refresh</button>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed italic">
                      "The convergence of LLMs and traditional database structures allows for the generation of thousands of landing pages that feel manually curated."
                    </p>
                    <div className="mt-4 flex gap-3">
                      <button className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-fixed-variant">Accept Change</button>
                      <button className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-50">Dismiss</button>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-surface-container-lowest rounded-xl">
                  <p className="text-on-surface leading-relaxed text-lg">
                    By leveraging structured data, ContentEngine.ai allows curators to define the 'vibe' and 'logic' of the content while the engine handles the scale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Intelligence Section */}
          <section className="mt-12 space-y-4">
            <h2 className="font-headline font-bold text-xl tracking-tight mb-6">SEO Intelligence</h2>
            
            {/* SEO Health Score */}
            <div className="p-5 bg-surface-container-low rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-on-primary font-bold text-sm">92</span>
                </div>
                <div>
                  <p className="font-bold text-sm">SEO Health Score</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Optimized</p>
                </div>
              </div>
              <span className="material-symbols-outlined">expand_more</span>
            </div>

            {/* Keyword Density */}
            <div className="p-5 bg-surface-container-low rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold text-sm">Keyword Density</p>
                <span className="material-symbols-outlined text-on-surface-variant">analytics</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-on-surface-variant">Programmatic SEO</span>
                  <span className="text-xs font-bold">2.4%</span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest rounded-full">
                  <div className="h-full bg-primary w-[70%] rounded-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-on-surface-variant">AI Content</span>
                  <span className="text-xs font-bold">1.8%</span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest rounded-full">
                  <div className="h-full bg-primary w-[45%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Schema Markup */}
            <div className="p-5 bg-surface-container-low rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">schema</span>
                <p className="font-bold text-sm">Schema Markup</p>
              </div>
              <span className="text-[10px] font-bold bg-secondary-container px-2 py-1 rounded">READY</span>
            </div>
          </section>

          {/* Publish Button */}
          <div className="mt-12">
            <button className="w-full bg-primary text-on-primary py-5 rounded-lg font-headline font-extrabold text-lg tracking-tight active:scale-[0.98] transition-all shadow-xl">
              Approve & Publish
            </button>
            <p className="text-center text-[10px] text-on-surface-variant mt-4 font-semibold uppercase tracking-widest">Last synced 2 minutes ago</p>
          </div>
        </main>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:block">
        {/* Article Header Section */}
        <div className="px-8 py-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-sm tracking-wider">IN REVIEW</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-sm">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">AI Generated</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tighter leading-[0.95] text-primary">
              The Future of Programmatic SEO: Scale Without Sacrifice
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Content Quality</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-primary">94</span>
                <span className="text-lg font-bold text-secondary">%</span>
              </div>
            </div>
            <div className="h-12 w-[1px] bg-outline-variant/20 hidden md:block"></div>
            <div className="flex gap-3">
              <button className="px-5 py-3 border border-primary font-bold text-sm uppercase tracking-wider hover:bg-surface-container-low transition-colors active:scale-95 duration-200">Save Draft</button>
              <button className="px-5 py-3 bg-primary text-white font-black text-sm uppercase tracking-wider hover:bg-primary-container transition-colors shadow-lg active:scale-95 duration-200">Approve & Publish</button>
            </div>
          </div>
        </div>

        {/* Workspace Layout */}
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-16">
          {/* Editor Canvas */}
          <div className="flex-1 relative">
            {/* Floating Sticky Toolbar */}
            <div className="sticky top-20 z-30 mb-8 flex items-center gap-1 p-1 bg-surface-container-lowest border border-outline-variant/10 shadow-[0_20px_40px_rgba(28,27,27,0.05)] w-fit rounded-lg mx-auto lg:mx-0">
              <button className="p-2 hover:bg-surface-container rounded transition-colors">
                <span className="material-symbols-outlined text-secondary">format_bold</span>
              </button>
              <button className="p-2 hover:bg-surface-container rounded transition-colors">
                <span className="material-symbols-outlined text-secondary">format_italic</span>
              </button>
              <div className="w-[1px] h-4 bg-outline-variant/20 mx-1"></div>
              <button className="p-2 hover:bg-surface-container rounded transition-colors">
                <span className="material-symbols-outlined text-secondary">format_h2</span>
              </button>
              <button className="p-2 hover:bg-surface-container rounded transition-colors">
                <span className="material-symbols-outlined text-secondary">format_h3</span>
              </button>
              <div className="w-[1px] h-4 bg-outline-variant/20 mx-1"></div>
              <button className="p-2 hover:bg-surface-container rounded transition-colors">
                <span className="material-symbols-outlined text-secondary">link</span>
              </button>
              <button className="p-2 hover:bg-surface-container rounded transition-colors">
                <span className="material-symbols-outlined text-secondary">image</span>
              </button>
              <button className="p-2 hover:bg-surface-container rounded transition-colors">
                <span className="material-symbols-outlined text-secondary">format_quote</span>
              </button>
              <div className="w-[1px] h-4 bg-outline-variant/20 mx-1"></div>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-tertiary-container text-on-tertiary-container rounded-sm transition-all hover:brightness-110">
                <span className="material-symbols-outlined text-[18px]">auto_fix</span>
                <span className="text-[11px] font-bold uppercase tracking-widest">Rewrite</span>
              </button>
            </div>

            {/* Editor Body */}
            <div className="prose prose-stone max-w-none prose-headings:font-headline prose-headings:font-black prose-headings:tracking-tighter prose-p:text-secondary prose-p:leading-relaxed prose-p:text-lg">
              <h2 className="text-3xl mb-6">Redefining Content Architecture</h2>
              <p>
                The landscape of digital content is undergoing a seismic shift. No longer is programmatic SEO just about filling spreadsheets with keyword variants and pushing them to a generic template. Today's "The Digital Curator" model demands a higher level of editorial precision. 
              </p>
              <div className="my-10 p-8 bg-surface-container-low rounded-xl border-l-4 border-primary">
                <p className="text-xl italic font-headline text-primary leading-snug m-0">
                  "The key to scaling SEO in 2024 is not volume—it's the intersection of machine efficiency and human-grade aesthetic authority."
                </p>
              </div>
              <p>
                When we talk about Content Engine's approach, we aren't just discussing automation. We are discussing the orchestration of intent. Every paragraph generated by our LLM architecture is cross-referenced against 14 vector dimensions of user search behavior.
              </p>
              <h3 className="text-2xl mt-12 mb-4">Structural Integrity in AI Content</h3>
              <p>
                To maintain the "No-Line" rule even in text, we use white space as a structural element. Paragraphs are kept tight, and transitions are handled through thematic shifts rather than rigid headers alone. This creates a flow that mimics high-end print journalism.
              </p>
              <p>
                Consider the way we handle data visualization. Instead of generic charts, we emphasize the tonal depth of the narrative surrounding the data.
              </p>
            </div>

            {/* Quick Action Floating Button */}
            <button className="fixed bottom-12 right-12 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-transform group">
              <span className="material-symbols-outlined group-hover:rotate-45 transition-transform">add</span>
            </button>
          </div>

          {/* SEO Side Panel */}
          <aside className="w-full lg:w-80 space-y-10">
            {/* Keyword Intelligence Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary">SEO Intelligence</h4>
                <span className="material-symbols-outlined text-secondary text-sm">info</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-surface-container-lowest rounded-lg border-l-2 border-primary">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-primary">Programmatic SEO</span>
                    <span className="text-[10px] font-bold text-secondary">12/15</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-primary"></div>
                  </div>
                  <p className="text-[10px] text-secondary mt-2 uppercase font-medium">Primary Keyword • High Density</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-secondary">Content Engine</span>
                    <span className="text-[10px] font-bold text-secondary">4/8</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-[50%] h-full bg-secondary"></div>
                  </div>
                </div>
                <div className="p-4 bg-surface-container-low rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-secondary">SEO Scalability</span>
                    <span className="text-[10px] font-bold text-secondary">0/5</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-[0%] h-full bg-secondary"></div>
                  </div>
                  <button className="mt-3 text-[10px] font-bold text-on-tertiary-container flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">auto_awesome</span> REGENERATE SECTION
                  </button>
                </div>
              </div>
            </section>

            {/* Meta Data Editor */}
            <section className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary">Meta Architecture</h4>
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-2">Meta Title</label>
                  <textarea className="w-full bg-surface-container-high border-none rounded-sm p-3 text-sm font-medium focus:ring-0 focus:bg-surface-container-highest transition-colors min-h-[60px] resize-none">The Future of Programmatic SEO | ContentEngine AI</textarea>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-2">Meta Description</label>
                  <textarea className="w-full bg-surface-container-high border-none rounded-sm p-3 text-sm leading-relaxed text-secondary focus:ring-0 focus:bg-surface-container-highest transition-colors min-h-[100px] resize-none">Discover why the shift to 'The Digital Curator' model is essential for scaling SEO without losing brand authority or editorial quality in the AI era.</textarea>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                <div>
                  <p className="text-sm font-bold text-primary">JSON-LD Schema</p>
                  <p className="text-[10px] text-secondary">Article & FAQ Structured Data</p>
                </div>
                <button className="w-10 h-5 bg-tertiary-container rounded-full relative flex items-center px-1">
                  <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                </button>
              </div>
            </section>

            {/* AI Insights Bento */}
            <section className="bg-primary-container p-6 rounded-xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-on-tertiary-container">psychology</span>
                <h4 className="text-[10px] font-black uppercase tracking-widest">Engine Insight</h4>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                This article's readability score is top 2% for the target industry. To further improve conversion, consider adding an H3 section about <span className="text-on-tertiary-container font-bold">"Data-Driven Storytelling."</span>
              </p>
              <button className="w-full py-2 bg-on-tertiary-container text-primary font-black text-[10px] uppercase tracking-widest rounded-sm hover:brightness-110 transition-all">
                Apply Suggestion
              </button>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}