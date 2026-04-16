'use client'

import Link from 'next/link'

export default function BillingPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* Mobile Version */}
      <div className="lg:hidden pb-32">
        {/* Top App Bar */}
        <header className="w-full top-0 sticky bg-surface z-50">
          <div className="flex justify-between items-center px-6 py-4 w-full bg-surface-container-low transition-colors duration-300">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">grid_view</span>
              <span className="font-headline font-black tracking-tighter text-xl text-primary">ContentEngine.ai</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden active:scale-95 duration-150">
              <span className="material-symbols-outlined text-on-secondary-container text-sm">person</span>
            </div>
          </div>
        </header>

        <main className="overflow-x-hidden">
          {/* Header Banner */}
          <section className="bg-primary-container w-full relative z-10" style={{ transform: 'skewY(-3deg)', marginTop: '-2rem', paddingTop: '5rem', paddingBottom: '3rem' }}>
            <div style={{ transform: 'skewY(3deg)' }} className="px-8">
              <h1 className="font-headline font-black text-6xl tracking-tighter text-white leading-none">BILLING</h1>
              <p className="text-on-primary-container font-medium mt-2 tracking-wide uppercase text-xs">Manage your subscription & usage</p>
            </div>
          </section>

          {/* Main Content Canvas */}
          <div className="px-6 -mt-4 relative z-20 space-y-6 pb-32">
            {/* Active Plan Card */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.03)] flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold px-2 py-0.5 rounded-sm mb-2 uppercase tracking-widest">Active Plan</span>
                  <h2 className="font-headline font-extrabold text-4xl tracking-tight text-primary">Pro Plan</h2>
                </div>
                <div className="text-right">
                  <p className="font-headline font-bold text-2xl text-primary">$149<span className="text-sm font-medium text-secondary">/mo</span></p>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">event_repeat</span>
                  <span className="text-sm font-medium">Next renewal</span>
                </div>
                <span className="font-bold text-sm">Oct 24, 2023</span>
              </div>
            </div>

            {/* Credits Tracker */}
            <section className="bg-surface-container-low p-8 rounded-xl space-y-6">
              <div className="flex justify-between items-end">
                <h3 className="font-headline font-bold text-xl uppercase tracking-tight">Article Credits</h3>
                <div className="text-right">
                  <span className="font-black text-2xl">64</span>
                  <span className="text-secondary font-medium text-sm">/ 100 used</span>
                </div>
              </div>
              <div className="h-4 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[64%] rounded-full"></div>
              </div>
              <button className="w-full py-4 bg-tertiary-container text-on-tertiary-container font-headline font-bold uppercase tracking-widest text-sm rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg" style={{ boxShadow: '0 4px 14px 0 rgba(28, 0, 98, 0.2)' }}>
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                Buy Top-Up
              </button>
            </section>

            {/* Payment Method */}
            <section className="space-y-4">
              <h3 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-secondary px-2">Payment Method</h3>
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-on-background rounded flex items-center justify-center">
                    <span className="text-[10px] text-white font-black italic">VISA</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">•••• 4242</p>
                    <p className="text-[11px] text-secondary uppercase font-medium">Expires 12/26</p>
                  </div>
                </div>
              </div>
              <button className="text-xs font-bold uppercase tracking-widest px-4 py-2 bg-surface-container-high rounded hover:bg-surface-container-highest transition-colors">Update</button>
            </section>

            {/* Invoice History */}
            <section className="space-y-4">
              <h3 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-secondary px-2">Invoice History</h3>
              <div className="space-y-2">
                {/* Invoice Item */}
                <div className="bg-surface-container-lowest p-5 rounded-lg flex items-center justify-between transition-colors hover:bg-white group">
                  <div className="flex flex-col">
                    <span className="text-xs text-secondary font-medium">Sep 24, 2023</span>
                    <span className="font-bold text-sm">$149.00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Paid</span>
                    <button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">picture_as_pdf</button>
                  </div>
                </div>
                {/* Invoice Item */}
                <div className="bg-surface-container-lowest p-5 rounded-lg flex items-center justify-between transition-colors hover:bg-white group">
                  <div className="flex flex-col">
                    <span className="text-xs text-secondary font-medium">Aug 24, 2023</span>
                    <span className="font-bold text-sm">$149.00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Paid</span>
                    <button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">picture_as_pdf</button>
                  </div>
                </div>
                {/* Invoice Item */}
                <div className="bg-surface-container-lowest p-5 rounded-lg flex items-center justify-between transition-colors hover:bg-white group">
                  <div className="flex flex-col">
                    <span className="text-xs text-secondary font-medium">Jul 24, 2023</span>
                    <span className="font-bold text-sm">$149.00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Paid</span>
                    <button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">picture_as_pdf</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Bottom Nav Bar */}
        <nav className="fixed bottom-0 w-full z-50 rounded-t-xl bg-surface/60 backdrop-blur-xl border-t border-black/5 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] h-20 flex justify-around items-center px-4">
          <Link href="/dashboard" className="flex flex-col items-center justify-center text-gray-400 hover:text-black transition-all active:scale-90 duration-200">
            <span className="material-symbols-outlined text-2xl">bolt</span>
            <span className="font-headline font-medium text-[11px] uppercase tracking-widest mt-1">Engine</span>
          </Link>
          <Link href="/dashboard/published" className="flex flex-col items-center justify-center text-gray-400 hover:text-black transition-all active:scale-90 duration-200">
            <span className="material-symbols-outlined text-2xl">database</span>
            <span className="font-headline font-medium text-[11px] uppercase tracking-widest mt-1">Assets</span>
          </Link>
          <Link href="/dashboard/analytics" className="flex flex-col items-center justify-center text-gray-400 hover:text-black transition-all active:scale-90 duration-200">
            <span className="material-symbols-outlined text-2xl">trending_up</span>
            <span className="font-headline font-medium text-[11px] uppercase tracking-widest mt-1">Growth</span>
          </Link>
          <Link href="/dashboard/settings" className="flex flex-col items-center justify-center text-black scale-110 font-bold active:scale-90 duration-200">
            <span className="material-symbols-outlined text-2xl">settings</span>
            <span className="font-headline font-medium text-[11px] uppercase tracking-widest mt-1">Settings</span>
          </Link>
        </nav>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex">
        <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-surface-container-low p-4 gap-2 z-40">
          <div className="mb-8 px-2 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <div>
              <p className="text-lg font-bold text-primary leading-tight">Acme Corp</p>
              <p className="text-xs text-primary/70">Pro Workspace</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1 flex-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 text-primary/70 hover:bg-white/40 transition-all duration-200 cursor-pointer active:scale-[0.97]">
              <span className="material-symbols-outlined text-xl">dashboard</span>
              <span className="font-medium text-sm">Dashboard</span>
            </Link>
            <Link href="/dashboard/published" className="flex items-center gap-3 px-4 py-2.5 text-primary/70 hover:bg-white/40 transition-all duration-200 cursor-pointer active:scale-[0.97]">
              <span className="material-symbols-outlined text-xl">folder_copy</span>
              <span className="font-medium text-sm">Projects</span>
            </Link>
            <Link href="/dashboard/articles" className="flex items-center gap-3 px-4 py-2.5 text-primary/70 hover:bg-white/40 transition-all duration-200 cursor-pointer active:scale-[0.97]">
              <span className="material-symbols-outlined text-xl">auto_awesome</span>
              <span className="font-medium text-sm">SEO Engine</span>
            </Link>
            <Link href="/dashboard/analytics" className="flex items-center gap-3 px-4 py-2.5 text-primary/70 hover:bg-white/40 transition-all duration-200 cursor-pointer active:scale-[0.97]">
              <span className="material-symbols-outlined text-xl">insights</span>
              <span className="font-medium text-sm">Analytics</span>
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-2.5 bg-white text-primary rounded-lg font-bold shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.97]">
              <span className="material-symbols-outlined text-xl">settings</span>
              <span className="font-medium text-sm">Settings</span>
            </Link>
          </nav>
          <div className="mt-auto pt-6 border-t border-outline-variant/10">
            <div className="mb-4 px-4 py-4 bg-tertiary-fixed rounded-xl">
              <p className="text-[10px] font-bold uppercase tracking-wider text-on-tertiary-fixed-variant mb-1">Current Tier</p>
              <p className="text-sm font-bold text-on-tertiary-fixed mb-3">Pro Plan</p>
              <button className="w-full py-2 bg-primary text-on-primary text-xs font-bold rounded hover:opacity-90 transition-opacity">Upgrade Plan</button>
            </div>
            <Link href="/dashboard/settings/billing" className="flex items-center gap-3 px-4 py-2 text-primary font-bold hover:bg-white/40 transition-all duration-200">
              <span className="material-symbols-outlined text-xl">payments</span>
              <span className="font-medium text-sm">Billing</span>
            </Link>
            <button className="flex items-center gap-3 px-4 py-2 text-error/70 hover:bg-error/5 transition-all duration-200 w-full">
              <span className="material-symbols-outlined text-xl">logout</span>
              <span className="font-medium text-sm">Log Out</span>
            </button>
          </div>
        </aside>

        <main className="ml-64 min-h-screen">
          <header className="bg-surface/60 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_20px_40px_rgba(28,27,27,0.05)] flex justify-between items-center w-full px-8 h-16">
            <div className="flex items-center gap-8">
              <span className="text-xl font-black text-primary tracking-tighter font-headline">ContentEngine.ai</span>
              <nav className="hidden md:flex gap-6">
                <span className="text-primary/60 font-headline font-bold tracking-tight hover:text-primary transition-colors duration-200 cursor-pointer">Docs</span>
                <span className="text-primary/60 font-headline font-bold tracking-tight hover:text-primary transition-colors duration-200 cursor-pointer">Support</span>
                <span className="text-primary/60 font-headline font-bold tracking-tight hover:text-primary transition-colors duration-200 cursor-pointer">Community</span>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-on-surface hover:bg-surface-container transition-colors rounded-full">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-on-surface hover:bg-surface-container transition-colors rounded-full">
                <span className="material-symbols-outlined">help</span>
              </button>
              <div className="w-8 h-8 rounded-full overflow-hidden ml-2 bg-surface-container-highest">
                <div className="w-full h-full bg-secondary-container"></div>
              </div>
            </div>
          </header>

          <div className="p-8 lg:p-12 max-w-6xl mx-auto pt-24">
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-primary mb-2">Billing & Subscription</h1>
              <p className="text-secondary text-lg">Manage your workspace economy and article production cycles.</p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Plan Overview (Main Card) */}
              <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] border border-outline-variant/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-tertiary-fixed text-on-tertiary-fixed mb-3">ACTIVE PLAN</span>
                    <h2 className="text-3xl font-bold tracking-tight">Pro Plan</h2>
                    <p className="text-secondary mt-1">Next renewal on Oct 12, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-black tracking-tighter">$149<span className="text-lg font-normal text-secondary">/mo</span></p>
                    <button className="mt-4 px-6 py-2 bg-primary text-on-primary font-bold text-sm rounded shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all">Change Plan</button>
                  </div>
                </div>
                {/* Credit Progress Bar */}
                <div className="pt-8 border-t border-outline-variant/10">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="font-bold text-lg">Article Credits</h3>
                      <p className="text-sm text-secondary">Credits reset in 18 days</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black">64</span>
                      <span className="text-secondary text-sm font-medium">/ 100 articles</span>
                    </div>
                  </div>
                  <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '64%' }}></div>
                  </div>
                </div>
              </div>

              {/* Payment Method (Side Card) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Payment Method</h3>
                  <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-lg">
                    <div className="w-12 h-8 bg-on-background rounded flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold">VISA</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">Visa ending in 4242</p>
                      <p className="text-xs text-secondary">Expires 12/26</p>
                    </div>
                    <a className="text-xs font-bold underline hover:text-primary transition-colors" href="#">Update</a>
                  </div>
                </div>

                {/* Top-Up Packs */}
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Credit Top-Ups</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-transparent hover:border-tertiary-container/30 transition-all cursor-pointer">
                      <div>
                        <p className="font-bold text-sm">Growth Pack</p>
                        <p className="text-xs text-secondary">50 Credits</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm">$90</p>
                        <span className="text-[10px] text-on-tertiary-container font-bold opacity-0 group-hover:opacity-100 transition-opacity">ADD</span>
                      </div>
                    </div>
                    <div className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-transparent hover:border-tertiary-container/30 transition-all cursor-pointer">
                      <div>
                        <p className="font-bold text-sm">Scale Pack</p>
                        <p className="text-xs text-secondary">200 Credits</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm">$280</p>
                        <span className="text-[10px] text-on-tertiary-container font-bold opacity-0 group-hover:opacity-100 transition-opacity">ADD</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-3 border border-primary text-primary font-bold text-sm rounded hover:bg-primary hover:text-on-primary transition-all">Buy Top-Up</button>
                </div>
              </div>
            </div>

            {/* Invoice History (Full Width) */}
            <div className="lg:col-span-12 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold tracking-tight">Invoice History</h3>
                <button className="text-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                  Filter
                </button>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant/10">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-secondary">Date</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-secondary">Invoice ID</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-secondary">Amount</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-secondary">Status</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-secondary text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/5">
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-6 py-5 text-sm font-medium">Sep 12, 2023</td>
                      <td className="px-6 py-5 text-sm text-secondary font-mono">INV-92841</td>
                      <td className="px-6 py-5 text-sm font-bold">$149.00</td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800">PAID</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="inline-flex items-center gap-1 text-sm font-bold hover:text-on-tertiary-container transition-colors">
                          <span className="material-symbols-outlined text-lg">download</span>
                          Download PDF
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-6 py-5 text-sm font-medium">Aug 12, 2023</td>
                      <td className="px-6 py-5 text-sm text-secondary font-mono">INV-81722</td>
                      <td className="px-6 py-5 text-sm font-bold">$149.00</td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800">PAID</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="inline-flex items-center gap-1 text-sm font-bold hover:text-on-tertiary-container transition-colors">
                          <span className="material-symbols-outlined text-lg">download</span>
                          Download PDF
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-6 py-5 text-sm font-medium">Jul 12, 2023</td>
                      <td className="px-6 py-5 text-sm text-secondary font-mono">INV-70613</td>
                      <td className="px-6 py-5 text-sm font-bold">$149.00</td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800">PAID</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="inline-flex items-center gap-1 text-sm font-bold hover:text-on-tertiary-container transition-colors">
                          <span className="material-symbols-outlined text-lg">download</span>
                          Download PDF
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-6 py-4 bg-surface-container-low/30 border-t border-outline-variant/10 text-center">
                  <button className="text-sm font-bold text-secondary hover:text-primary transition-colors">View All Invoices</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}