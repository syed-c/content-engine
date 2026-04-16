'use client'

import Link from 'next/link'

export default function ContactPage() {
  return (
    <main>
      {/* ==================== MOBILE HERO (Dark) ==================== */}
      <section className="lg:hidden bg-[#121212] pt-24 pb-20 px-8 flex flex-col items-center text-center">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6 border border-white/20">
          Contact
        </span>
        <h1 className="text-4xl font-extrabold text-white tracking-tighter mb-6 leading-tight max-w-sm mx-auto">
          Let's Build the Future of Search
        </h1>
        <p className="text-stone-400 text-lg font-light leading-relaxed max-w-xs mx-auto uppercase text-[10px] tracking-widest">
          Programmatic SEO for brands who refuse to blend into the noise.
        </p>
      </section>

      {/* ==================== DESKTOP HERO ==================== */}
      <section className="hidden lg:flex bg-primary-container min-h-[500px] flex flex-col items-center justify-center pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-tertiary-fixed rounded-full">
              <span className="text-on-tertiary-fixed-variant text-xs font-semibold uppercase tracking-widest">Contact Us</span>
            </div>
          </div>
          <h1 className="text-on-primary text-5xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-[-0.02em] mb-8">
            Let's Build the<br/>Future of Search
          </h1>
          <p className="text-on-primary-container text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto opacity-80">
            Scale your programmatic SEO strategy with AI-driven content that prioritizes authority and human-centric relevance. <Link href="/features" className="underline">Explore our features</Link> or <Link href="/pricing" className="underline">view pricing plans</Link>.
          </p>
        </div>
      </section>

      {/* ==================== MOBILE BODY WITH DIAGONAL ==================== */}
      <div className="lg:hidden bg-[#fcf9f8] relative">
        {/* Diagonal transition */}
        <div className="absolute top-0 left-0 w-full h-12 bg-[#121212]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        {/* Mobile Form Section */}
        <section className="px-8 py-20 relative z-10">
          <div className="mb-12">
            <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest mb-4">Inquiry</span>
            <h2 className="text-3xl font-extrabold tracking-tighter text-on-surface">Send a Brief</h2>
          </div>
          <form className="space-y-8">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Name</label>
              <input className="w-full bg-surface-container-high border-none rounded-sm px-4 py-4 focus:ring-0 focus:bg-surface-container-highest transition-colors font-body text-on-surface" placeholder="Your Name" type="text"/>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Email Address</label>
              <input className="w-full bg-surface-container-high border-none rounded-sm px-4 py-4 focus:ring-0 focus:bg-surface-container-highest transition-colors font-body text-on-surface" placeholder="hello@company.com" type="email"/>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Website URL</label>
              <input className="w-full bg-surface-container-high border-none rounded-sm px-4 py-4 focus:ring-0 focus:bg-surface-container-highest transition-colors font-body text-on-surface" placeholder="https://" type="url"/>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Message</label>
              <textarea className="w-full bg-surface-container-high border-none rounded-sm px-4 py-4 focus:ring-0 focus:bg-surface-container-highest transition-colors font-body text-on-surface" placeholder="How can we help you curate your digital footprint?" rows={4}></textarea>
            </div>
            <button className="w-full bg-primary text-on-primary py-5 rounded-lg font-headline font-bold uppercase tracking-widest text-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-95 transition-transform" type="submit">
              Submit Inquiry
            </button>
          </form>
        </section>

        {/* Separation via tonal shift */}
        <div className="h-px bg-surface-container mx-8"></div>

        {/* Mobile Contact Details */}
        <section className="px-8 py-20 bg-surface-container-low">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tighter text-on-surface">Communication</h2>
          </div>
          <div className="grid gap-12">
            <div className="group">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">General Inquiries</p>
              <a className="text-xl font-headline font-bold text-on-surface hover:opacity-70 transition-opacity" href="mailto:hello@contentengine.ai">hello@contentengine.ai</a>
            </div>
            <div className="group">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Partnerships</p>
              <a className="text-xl font-headline font-bold text-on-surface hover:opacity-70 transition-opacity" href="mailto:partners@contentengine.ai">partners@contentengine.ai</a>
            </div>
            <div className="group">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Support</p>
              <a className="text-xl font-headline font-bold text-on-surface hover:opacity-70 transition-opacity" href="mailto:support@contentengine.ai">support@contentengine.ai</a>
            </div>
          </div>
        </section>

        {/* Mobile Global Hubs */}
        <section className="px-8 py-20 bg-[#fcf9f8]">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tighter text-on-surface">Global Hubs</h2>
          </div>
          <div className="grid gap-12">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-stone-950">apartment</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-1">New York</h3>
                <p className="text-stone-500 font-body leading-relaxed text-sm">
                  250 Hudson Street<br/>
                  Manhattan, NY 10013
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-stone-950">location_city</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-1">London</h3>
                <p className="text-stone-500 font-body leading-relaxed text-sm">
                  18 Leather Lane<br/>
                  Holborn, London EC1N 7SU
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ==================== DESKTOP MAIN CONTENT ==================== */}
      <section className="hidden lg:block bg-surface py-24 px-8 md:px-16 lg:px-32">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Inquiry Form: Matte Black Accents */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-10 md:p-14 rounded-2xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline/5">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-primary font-headline mb-4">Send a Brief</h2>
              <p className="text-on-surface-variant leading-relaxed">Describe your project goals and our strategy team will reach out within 24 hours.</p>
            </div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Name</label>
                  <input className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/10 transition-all outline-none text-on-surface placeholder:text-on-surface-variant/40" placeholder="Jane Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Work Email</label>
                  <input className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/10 transition-all outline-none text-on-surface placeholder:text-on-surface-variant/40" placeholder="jane@company.ai" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Website URL</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/10 transition-all outline-none text-on-surface placeholder:text-on-surface-variant/40" placeholder="https://www.company.com" type="url"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Message</label>
                <textarea className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/10 transition-all outline-none text-on-surface resize-none placeholder:text-on-surface-variant/40" placeholder="Tell us about your SEO objectives..." rows={5}></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-lg font-bold text-base font-headline hover:opacity-95 transition-all flex justify-center items-center gap-3 active:scale-[0.99]" type="submit">
                Submit Inquiry
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </form>
          </div>
          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            {/* Departments */}
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">General Inquiries</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold font-headline text-primary mb-2">hello@contentengine.ai</p>
                <p className="text-on-surface-variant text-sm font-medium">For general information and account setups.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Partnerships</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold font-headline text-primary mb-2">partners@contentengine.ai</p>
                <p className="text-on-surface-variant text-sm font-medium">Integration requests and agency collaborations.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Support</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold font-headline text-primary mb-2">support@contentengine.ai</p>
                <p className="text-on-surface-variant text-sm font-medium">Technical assistance and API documentation help.</p>
              </div>
            </div>
            {/* Locations */}
            <div className="pt-16 border-t border-outline-variant/30 space-y-10">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Global Hubs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <p className="font-bold text-lg font-headline text-primary mb-3">New York</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    245 Park Avenue<br/>
                    Manhattan, NY 10167<br/>
                    United States
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg font-headline text-primary mb-3">London</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    16 Great Chapel St<br/>
                    Soho, London W1F 8FL<br/>
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DESKTOP VISUAL ANCHOR ==================== */}
      <section className="hidden lg:block px-8 pb-24">
        <div className="max-w-[1440px] mx-auto rounded-[2.5rem] h-[400px] overflow-hidden bg-surface-container-high relative flex items-center justify-center">
          <img alt="Subtle topographical background" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQoDOAsiN6N-1NQJ1m79f5A4muZ6GzWKI9RO1oE6e-kYW4r7FDLZdyUgpxDFcNBx5fF3l6tdzs5MgHtpEwu4DuRC5Ll2Gu2No_PRE8srkQ1wDjjgGIh8R-WyOrRS7XwgKl8utIQoZ4YEhcqAB6DjMl1U_p851Dt6_os_C_kW88tsdkD4tvp3kW8F2fAK1U1lZXcEWGEUhTxqveYz2to7qSg-QxCP_Yk2mz5cPZCOslb9qgodnqjuHrE95cMozX4rlkoeEIxdj9OzM"/>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          <div className="relative text-center z-10">
            <p className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-primary">Digital-First. Global-Ready.</p>
          </div>
        </div>
      </section>
    </main>
  )
}