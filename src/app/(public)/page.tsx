'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <main>
      {/* ==================== HERO ==================== */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-40 overflow-hidden bg-black">
        <div className="absolute inset-0 hero-mesh-gradient"></div>
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-tertiary-fixed-dim text-xs font-bold tracking-wider uppercase mb-6 lg:mb-8 border border-white/5">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              Programmatic SEO Platform
            </div>
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-7xl md:text-6xl tracking-tighter text-white leading-[0.95] lg:leading-[0.9] mb-6 lg:mb-8">
              From Keyword to Published Article in Minutes
            </h1>
            <p className="text-lg lg:text-xl md:text-xl text-white/60 max-w-xl font-light leading-relaxed mb-8 lg:mb-12">
              Automate your complete SEO content pipeline. Enter a keyword, get a fully published, schema-marked article on your CMS. Just $1.49 per article with under 5 minutes of human review.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="bg-white text-black px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-headline font-bold text-base lg:text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all text-center">
                Start Free Trial
              </Link>
              <button className="border-2 border-white/20 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-headline font-bold text-base lg:text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">play_circle</span> Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block lg:col-span-5 relative flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full opacity-10 mesh-grid"></div>
              <div className="relative w-full aspect-square max-w-xs lg:max-w-md">
                <div className="absolute inset-0 border border-white/5 rounded-full orbital-rotate"></div>
                <div className="absolute inset-8 border border-white/5 rounded-full orbital-rotate-reverse"></div>
                <div className="absolute inset-16 border border-white/5 rounded-full orbital-rotate"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#866cfe] rounded-full shadow-[0_0_15px_#866cfe]"></div>
                <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-2 h-2 bg-[#4723be] rounded-full shadow-[0_0_15px_#4723be]"></div>
                <div className="absolute top-1/3 left-0 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 lg:w-24 h-16 lg:h-24 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center group hover:border-[#866cfe] transition-colors duration-700 cursor-pointer">
                    <span className="material-symbols-outlined text-2xl lg:text-4xl text-white group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                  </div>
                </div>
                <div className="absolute top-6 lg:top-10 right-0 glass-panel border border-white/10 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-[9px] lg:text-[10px] text-white/80 font-bold tracking-widest uppercase animate-bounce" style={{ animationDuration: '3s' }}>
                  SERP Analysis
                </div>
                <div className="absolute bottom-12 lg:bottom-20 left-2 lg:left-4 glass-panel border border-white/10 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-[9px] lg:text-[10px] text-white/80 font-bold tracking-widest uppercase animate-bounce" style={{ animationDuration: '4s' }}>
                  Multi-Pass AI
                </div>
                <div className="absolute top-1/2 -right-4 lg:-right-8 glass-panel border border-white/10 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-[9px] lg:text-[10px] text-white/80 font-bold tracking-widest uppercase animate-bounce" style={{ animationDuration: '5s' }}>
                  One-Click Publish
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUSTED BY ==================== */}
      <section className="py-12 lg:py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-secondary/60 mb-8 lg:mb-10">Powering Leading SEO Agencies & In-House Teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-40 grayscale contrast-125">
            <span className="text-lg lg:text-2xl font-black tracking-tighter">STRATOS</span>
            <span className="text-lg lg:text-2xl font-black tracking-tighter">VELOCITY.AI</span>
            <span className="text-lg lg:text-2xl font-black tracking-tighter">LINKFLOW</span>
            <span className="text-lg lg:text-2xl font-black tracking-tighter">GROWTH_HQ</span>
            <span className="text-lg lg:text-2xl font-black tracking-tighter">SEO_LABS</span>
          </div>
        </div>
      </section>

      {/* ==================== THE PIPELINE ==================== */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 lg:mb-20">
            <h2 className="font-headline font-extrabold text-3xl lg:text-5xl tracking-tight mb-3 lg:mb-4">The Complete Pipeline</h2>
            <p className="text-secondary text-base lg:text-lg max-w-2xl">Every step from keyword to published article — fully automated with human review gate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
            <div className="group p-6 lg:p-8 rounded-xl bg-surface-container transition-all hover:bg-surface-container-high">
              <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-lg bg-primary flex items-center justify-center text-on-primary mb-6 lg:mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-lg lg:text-xl">search</span>
              </div>
              <div className="text-xs font-bold text-on-tertiary-fixed-variant mb-2">STEP 01</div>
              <h3 className="font-headline font-bold text-lg lg:text-xl mb-3 lg:mb-4">SERP Analysis</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Real-time SERP data, competitor angles, PAA questions, and content type detection.</p>
            </div>
            <div className="group p-6 lg:p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 transition-all hover:shadow-xl">
              <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-lg bg-on-tertiary-container flex items-center justify-center text-on-primary mb-6 lg:mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-lg lg:text-xl">description</span>
              </div>
              <div className="text-xs font-bold text-on-tertiary-fixed-variant mb-2">STEP 02</div>
              <h3 className="font-headline font-bold text-lg lg:text-xl mb-3 lg:mb-4">AI Brief Generation</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Data-backed outlines with H2 structure, keyword targets, and differentiation strategy.</p>
            </div>
            <div className="group p-6 lg:p-8 rounded-xl bg-surface-container transition-all hover:bg-surface-container-high">
              <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-lg bg-primary flex items-center justify-center text-on-primary mb-6 lg:mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-lg lg:text-xl">edit_note</span>
              </div>
              <div className="text-xs font-bold text-on-tertiary-fixed-variant mb-2">STEP 03</div>
              <h3 className="font-headline font-bold text-lg lg:text-xl mb-3 lg:mb-4">Multi-Pass Writing</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Each section is written as a separate AI call for superior quality, coherence, and on-page SEO optimization.</p>
            </div>
            <div className="group p-6 lg:p-8 rounded-xl bg-primary-container text-on-primary transition-all hover:scale-[1.02]">
              <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-6 lg:mb-8">
                <span className="material-symbols-outlined text-lg lg:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <div className="text-xs font-bold text-on-tertiary-container mb-2">STEP 04</div>
              <h3 className="font-headline font-bold text-lg lg:text-xl mb-3 lg:mb-4">One-Click Publish</h3>
              <p className="text-on-primary-container text-sm leading-relaxed opacity-80">Direct publish to WordPress, Webflow, Ghost, or Shopify. Schema auto-injected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SAVINGS ==================== */}
      <section className="py-16 lg:py-24 bg-primary text-on-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-headline font-black text-3xl lg:text-6xl tracking-tight mb-3 lg:mb-4">$1.49 Per Article</h2>
              <p className="text-base lg:text-xl text-on-primary-container/70 mb-6 lg:mb-8 max-w-lg">95%+ cheaper than traditional content production. Same quality. Fully automated.</p>
              <div className="inline-block px-5 lg:px-6 py-3 lg:py-4 bg-on-tertiary-container rounded-xl">
                <div className="text-xs lg:text-sm font-bold uppercase tracking-widest text-white/60 mb-1">Your ROI</div>
                <div className="text-2xl lg:text-3xl font-black text-white">Save $33,500 per 1,000 articles</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-4 lg:mb-6">Traditional Agency</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl lg:text-4xl font-headline font-black">$35.00</span>
                  <span className="text-white/40 text-sm">/article</span>
                </div>
                <p className="text-xs lg:text-sm text-white/60">Writer + Editor + CMS entry + 2-3 weeks turnaround</p>
              </div>
              <div className="p-6 lg:p-8 rounded-2xl bg-white text-black border-4 border-on-tertiary-container shadow-2xl scale-100 lg:scale-105">
                <div className="text-xs font-black uppercase tracking-widest text-black/40 mb-4 lg:mb-6">ContentEngine</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl lg:text-4xl font-headline font-black text-primary">$1.49</span>
                  <span className="text-black/40 text-sm">/article</span>
                </div>
                <p className="text-xs lg:text-sm text-black/60 font-bold">Full pipeline + Publish + Rank tracking</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/[0.02] -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="py-20 lg:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="font-headline font-extrabold text-3xl lg:text-5xl tracking-tight mb-3 lg:mb-4">Enterprise-Grade SEO Automation</h2>
            <p className="text-secondary text-base lg:text-lg">Everything you need to scale content production without sacrificing quality.</p>
            <Link href="/features" className="inline-flex items-center gap-2 mt-4 text-primary font-bold hover:underline">
              Explore all features <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-8 lg:p-10 rounded-xl flex flex-col justify-between min-h-[260px] lg:min-h-[300px]">
              <div>
                <div className="text-on-tertiary-fixed-variant mb-4"><span className="material-symbols-outlined text-3xl lg:text-4xl">person_search</span></div>
                <h3 className="font-headline font-bold text-xl lg:text-2xl mb-2">Human in the Loop</h3>
                <p className="text-on-surface-variant text-sm max-w-md">Review every brief, edit any section, and approve before publish. You maintain editorial control while automation handles the heavy lifting.</p>
              </div>
              <div className="flex gap-2 mt-6 lg:mt-8">
                <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold uppercase">Control</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold uppercase">Quality</span>
              </div>
            </div>
            <div className="bg-primary-container p-8 lg:p-10 rounded-xl text-on-primary min-h-[260px] lg:min-h-[300px]">
              <div className="mb-4"><span className="material-symbols-outlined text-3xl lg:text-4xl text-on-tertiary-container">monitoring</span></div>
              <h3 className="font-headline font-bold text-xl lg:text-2xl mb-2">Rank Tracking</h3>
              <p className="text-on-primary-container/80 text-sm">Weekly position monitoring with decay alerts. Auto-refresh underperforming content when rankings drop.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-xl min-h-[260px] lg:min-h-[300px]">
              <div className="mb-4 text-primary"><span className="material-symbols-outlined text-3xl lg:text-4xl">verified</span></div>
              <h3 className="font-headline font-bold text-xl lg:text-2xl mb-2">EEAT Signals</h3>
              <p className="text-on-surface-variant text-sm">Auto-injected expert citations, source citations, and schema markup designed for Google's quality guidelines.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-xl min-h-[260px] lg:min-h-[300px] md:col-span-2">
              <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-center">
                <div className="flex-1">
                  <div className="mb-4 text-primary"><span className="material-symbols-outlined text-3xl lg:text-4xl">hub</span></div>
                  <h3 className="font-headline font-bold text-xl lg:text-2xl mb-2">Smart Internal Linking</h3>
                  <p className="text-on-surface-variant text-sm">Automatically suggests and injects contextual internal links from your existing content to boost site authority.</p>
                </div>
                <div className="w-full md:w-48 lg:w-64 aspect-video bg-surface-container rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover mix-blend-overlay"
                    alt="internal linking"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGq42NwmH07RauzD7OShLhav5DzkIOR1kfIIu-reEKhF6Zf8Od0dLMAdyvZEsYb4a6RIXmHOWK8nJWWeCM7Vk921fgv8_4ZWo2UknM2RWZztQypskCtzrLmGqJU4ma_teOFSgHvkEpefhPMHMGPoUGEND4kuaDJr21ixw8lwmwvSUMiAXL3j3sP36eMRRvYeg5zjkm1WjtxmgyafRgBTMUisAxepc9oDsOE3DLOfGcNsYfZw4RRnUEBwBQWVwQsZhjoyJWGG5Fl5A"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CMS INTEGRATIONS ==================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="font-headline font-extrabold text-3xl lg:text-4xl tracking-tight mb-3 lg:mb-4">Publishes Directly to Your CMS</h2>
            <p className="text-secondary text-base lg:text-lg">One-click integration with the platforms you already use.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-3 px-6 py-4 bg-surface-container rounded-xl">
              <span className="material-symbols-outlined text-2xl text-[#21759b]">language</span>
              <span className="font-headline font-bold">WordPress</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-surface-container rounded-xl">
              <span className="material-symbols-outlined text-2xl text-[#4353ff]">web</span>
              <span className="font-headline font-bold">Webflow</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-surface-container rounded-xl">
              <span className="material-symbols-outlined text-2xl text-[#738a94]">article</span>
              <span className="font-headline font-bold">Ghost</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-surface-container rounded-xl">
              <span className="material-symbols-outlined text-2xl text-[#96bf48]">shopping_bag</span>
              <span className="font-headline font-bold">Shopify</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="font-headline font-extrabold text-3xl lg:text-5xl tracking-tight mb-3 lg:mb-4">Simple, Scalable Pricing</h2>
            <p className="text-secondary text-base lg:text-lg">Predictable costs. No hidden fees. Scale as you grow.</p>
            <Link href="/pricing" className="inline-flex items-center gap-2 mt-4 text-primary font-bold hover:underline">
              View full pricing details <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="p-8 lg:p-10 rounded-xl bg-surface-container-low flex flex-col">
              <div className="text-lg font-bold mb-2">Starter</div>
              <div className="text-4xl lg:text-5xl font-headline font-black mb-4 lg:mb-6">$49<span className="text-lg font-normal text-secondary">/mo</span></div>
              <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> 20 Articles/mo</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> 1 Workspace</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> 1 Team Seat</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> WordPress Only</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> Basic SEO Schema</li>
              </ul>
              <Link href="/register?plan=starter" className="w-full py-3 lg:py-4 border-2 border-primary rounded-lg font-headline font-bold hover:bg-primary hover:text-on-primary transition-all text-center">
                Get Started
              </Link>
            </div>

            <div className="p-8 lg:p-10 rounded-xl bg-primary-container text-on-primary flex flex-col relative lg:scale-105 shadow-2xl">
              <div className="absolute -top-4 lg:right-10 right-8 bg-on-tertiary-container text-white px-3 lg:px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">Most Popular</div>
              <div className="text-lg font-bold mb-2">Pro</div>
              <div className="text-4xl lg:text-5xl font-headline font-black mb-4 lg:mb-6">$149<span className="text-lg font-normal text-on-primary-container">/mo</span></div>
              <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> 100 Articles/mo</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> 3 Workspaces / 3 Seats</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> WP + Webflow + Ghost</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Rank Tracking</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Auto Content Refresh</li>
              </ul>
              <Link href="/register?plan=pro" className="w-full py-3 lg:py-4 bg-surface-container-lowest text-primary rounded-lg font-headline font-bold hover:bg-opacity-90 transition-all text-center">
                Get Started
              </Link>
            </div>

            <div className="p-8 lg:p-10 rounded-xl bg-surface-container-low flex flex-col">
              <div className="text-lg font-bold mb-2">Agency</div>
              <div className="text-4xl lg:text-5xl font-headline font-black mb-4 lg:mb-6">$399<span className="text-lg font-normal text-secondary">/mo</span></div>
              <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> 500 Articles/mo</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> Unlimited Workspaces</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> 10 Team Seats</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> All CMS + Contentful</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> AI Image Generation</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-on-tertiary-container text-lg">check_circle</span> API Access</li>
              </ul>
              <Link href="/contact" className="w-full py-3 lg:py-4 border-2 border-primary rounded-lg font-headline font-bold hover:bg-primary hover:text-on-primary transition-all text-center">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-headline font-extrabold text-3xl lg:text-4xl mb-10 lg:mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            <div className="p-5 lg:p-6 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer group transition-all">
              <div className="flex justify-between items-center">
                <span className="font-bold text-base lg:text-lg">Will Google penalize AI-generated content?</span>
                <span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
              </div>
              <div className="mt-3 lg:mt-4 text-on-surface-variant text-sm hidden group-hover:block">
                No. Our multi-pass writing engine produces content indistinguishable from human-written articles. Combined with the mandatory human review gate and EEAT signal injection, your content meets Google's quality guidelines. <Link href="/features" className="text-primary underline">Learn about our quality system</Link>.
              </div>
            </div>
            <div className="p-5 lg:p-6 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer group transition-all">
              <div className="flex justify-between items-center">
                <span className="font-bold text-base lg:text-lg">How does direct CMS publishing work?</span>
                <span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
              </div>
              <div className="mt-3 lg:mt-4 text-on-surface-variant text-sm hidden group-hover:block">
                Connect your CMS via API. On approval, content publishes instantly with meta tags, schema markup, and featured images automatically applied. We support WordPress, Webflow, Ghost, and Shopify. <Link href="/features" className="text-primary underline">See all integrations</Link>.
              </div>
            </div>
            <div className="p-5 lg:p-6 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer group transition-all">
              <div className="flex justify-between items-center">
                <span className="font-bold text-base lg:text-lg">What SERP data powers each article?</span>
                <span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
              </div>
              <div className="mt-3 lg:mt-4 text-on-surface-variant text-sm hidden group-hover:block">
                Every brief is built on real-time SERP analysis: top 10 rankings, People Also Ask questions, content type detection, word count benchmarks, and competitor angle analysis. This data drives the entire writing process. <Link href="/features" className="text-primary underline">Learn about SERP intelligence</Link>.
              </div>
            </div>
            <div className="p-5 lg:p-6 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer group transition-all">
              <div className="flex justify-between items-center">
                <span className="font-bold text-base lg:text-lg">Can I import keywords from Google Search Console?</span>
                <span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
              </div>
              <div className="mt-3 lg:mt-4 text-on-surface-variant text-sm hidden group-hover:block">
                Yes. Connect GSC via OAuth to automatically import keywords with high impressions but low rankings. These "low-hanging fruit" opportunities are prioritized for content creation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 lg:py-32 overflow-hidden bg-primary relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 border border-white/10">
            <span className="w-5 h-5 bg-[#866cfe] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </span>
            <span className="text-white/80 text-xs font-bold tracking-wider uppercase">Powered by ContentEngine</span>
          </div>
          <h2 className="font-headline font-black text-3xl lg:text-6xl md:text-5xl text-on-primary tracking-tight mb-6 lg:mb-8">Ready to Scale?</h2>
          <p className="text-lg lg:text-xl text-on-primary-container/70 mb-10 lg:mb-12 max-w-2xl mx-auto">Join 200+ SEO teams publishing thousands of articles monthly with ContentEngine.</p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <Link href="/register" className="bg-surface-container-lowest text-primary px-8 lg:px-10 py-4 lg:py-5 rounded-lg font-headline font-black text-lg lg:text-xl hover:scale-105 transition-transform text-center">
              Start Free Trial
            </Link>
            <Link href="/contact" className="bg-primary border border-on-primary-container text-on-primary px-8 lg:px-10 py-4 lg:py-5 rounded-lg font-headline font-black text-lg lg:text-xl hover:bg-white/10 transition-all text-center">
              Talk to an SEO Specialist
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] border border-on-tertiary-container rounded-full animate-ping duration-[4000ms]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] border border-on-tertiary-container rounded-full animate-ping duration-[5000ms]"></div>
        </div>
      </section>
    </main>
  )
}