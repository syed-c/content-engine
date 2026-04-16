'use client'

import Link from 'next/link'

export default function TeamPage() {
  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* Mobile Version */}
      <div className="lg:hidden pb-32">
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-surface/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(18,18,18,0.05)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-xs font-bold">
              WS
            </div>
            <span className="font-headline font-black tracking-tighter text-primary text-lg">ContentEngine.ai</span>
          </div>
          <div className="flex items-center text-primary">
            <span className="material-symbols-outlined">notifications</span>
          </div>
          <div className="h-[1px] w-full absolute bottom-0 left-0 bg-surface-container-low"></div>
        </header>

        <main className="pt-24 pb-32 px-6">
          {/* Header Section */}
          <section className="mb-10">
            <h1 className="text-[4rem] leading-[0.9] font-black tracking-tighter text-primary mb-8">Team Members</h1>
            <div className="flex flex-col gap-4">
              <div className="relative w-full">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-lg">search</span>
                <input 
                  className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 focus:ring-1 focus:ring-primary/20 transition-all text-sm font-medium" 
                  placeholder="Search team..." 
                  type="text"
                />
              </div>
              <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-xl">person_add</span>
                Invite Member
              </button>
            </div>
          </section>

          {/* Member List */}
          <section className="space-y-4">
            {/* Member Item 1 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary tracking-tight">
                  JS
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm">Julian Schmidt</p>
                  <p className="text-xs text-secondary font-medium">julian@contentengine.ai</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-primary text-on-primary rounded-sm">Admin</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-[10px] text-secondary font-bold uppercase tracking-tight">Active</span>
                </div>
              </div>
            </div>

            {/* Member Item 2 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary tracking-tight">
                  AW
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm">Aria Wong</p>
                  <p className="text-xs text-secondary font-medium">aria@contentengine.ai</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-surface-container-high text-primary rounded-sm">Editor</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-[10px] text-secondary font-bold uppercase tracking-tight">Active</span>
                </div>
              </div>
            </div>

            {/* Member Item 3 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary tracking-tight">
                  MK
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm">Marcus Kane</p>
                  <p className="text-xs text-secondary font-medium">m.kane@contentengine.ai</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-surface-container-high text-primary rounded-sm">Viewer</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span className="text-[10px] text-secondary font-bold uppercase tracking-tight">Pending</span>
                </div>
              </div>
            </div>

            {/* Member Item 4 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary tracking-tight">
                  EL
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm">Elena Lopez</p>
                  <p className="text-xs text-secondary font-medium">elena@contentengine.ai</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-surface-container-high text-primary rounded-sm">Editor</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-[10px] text-secondary font-bold uppercase tracking-tight">Active</span>
                </div>
              </div>
            </div>
          </section>

          {/* Workspace Usage Card */}
          <section className="mt-12 relative">
            <div className="bg-primary text-on-primary p-6 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-primary-container mb-1">Workspace Plan</p>
                    <h3 className="text-2xl font-black tracking-tight">Seats Used</h3>
                  </div>
                  <p className="text-3xl font-black">4 <span className="text-on-primary-container text-xl">/ 10</span></p>
                </div>
                <div className="w-full h-1.5 bg-primary-container rounded-full mb-6">
                  <div className="h-full bg-on-tertiary-container rounded-full w-[40%]"></div>
                </div>
                <a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-tertiary-container hover:opacity-80 transition-opacity" href="#">
                  Upgrade Workspace
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-tertiary-container blur-3xl opacity-40"></div>
            </div>
          </section>
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-white z-50">
          <div className="h-[1px] w-full absolute top-0 left-0 bg-surface-container-low"></div>
          <Link href="/dashboard" className="flex flex-col items-center justify-center text-gray-400 px-4 py-1.5 hover:text-black transition-colors active:scale-90 duration-150">
            <span className="material-symbols-outlined mb-1">auto_awesome</span>
            <span className="font-headline font-medium text-[10px] uppercase tracking-widest">Engine</span>
          </Link>
          <Link href="/dashboard/published" className="flex flex-col items-center justify-center text-gray-400 px-4 py-1.5 hover:text-black transition-colors active:scale-90 duration-150">
            <span className="material-symbols-outlined mb-1">folder_open</span>
            <span className="font-headline font-medium text-[10px] uppercase tracking-widest">Assets</span>
          </Link>
          <Link href="/dashboard/analytics" className="flex flex-col items-center justify-center text-gray-400 px-4 py-1.5 hover:text-black transition-colors active:scale-90 duration-150">
            <span className="material-symbols-outlined mb-1">trending_up</span>
            <span className="font-headline font-medium text-[10px] uppercase tracking-widest">Growth</span>
          </Link>
          <Link href="/dashboard/settings" className="flex flex-col items-center justify-center text-black font-bold bg-surface-container-low rounded-lg px-4 py-1.5 active:scale-90 transition-transform duration-150">
            <span className="material-symbols-outlined mb-1">analytics</span>
            <span className="font-headline font-medium text-[10px] uppercase tracking-widest">Insights</span>
          </Link>
        </nav>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex">
        <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-surface-container-low p-6 space-y-8 z-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div>
              <div className="font-black text-lg tracking-tighter text-primary">ContentEngine</div>
              <div className="text-[10px] uppercase tracking-widest text-secondary font-bold">Enterprise Tier</div>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-secondary font-headline font-semibold text-sm hover:bg-surface-container-high transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined text-lg">dashboard</span>
              Overview
            </Link>
            <Link href="/dashboard/articles" className="flex items-center gap-3 px-3 py-2 text-secondary font-headline font-semibold text-sm hover:bg-surface-container-high transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined text-lg">auto_awesome</span>
              Content Engine
            </Link>
            <button className="flex items-center gap-3 px-3 py-2 text-secondary font-headline font-semibold text-sm hover:bg-surface-container-high transition-all active:scale-[0.98] w-full">
              <span className="material-symbols-outlined text-lg">group</span>
              Team Members
            </button>
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 bg-white text-primary rounded-sm shadow-sm font-headline font-semibold text-sm transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined text-lg">settings</span>
              SEO Settings
            </Link>
            <button className="flex items-center gap-3 px-3 py-2 text-secondary font-headline font-semibold text-sm hover:bg-surface-container-high transition-all active:scale-[0.98] w-full">
              <span className="material-symbols-outlined text-lg">payments</span>
              Billing
            </button>
          </nav>
          <div className="space-y-4 pt-6 border-t border-outline-variant/10">
            <button className="flex items-center gap-3 px-3 py-2 text-secondary font-headline font-semibold text-sm hover:bg-surface-container-high transition-all w-full">
              <span className="material-symbols-outlined text-lg">help</span>
              Help Center
            </button>
            <button className="flex items-center gap-3 px-3 py-2 text-secondary font-headline font-semibold text-sm hover:bg-surface-container-high transition-all w-full">
              <span className="material-symbols-outlined text-lg">logout</span>
              Sign Out
            </button>
            <button className="w-full py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-sm active:scale-95 transition-transform mt-4">
              Upgrade Plan
            </button>
          </div>
        </aside>

        <main className="ml-64 flex flex-col min-h-screen">
          <header className="bg-surface/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(28,27,27,0.05)] fixed top-0 w-full z-40">
            <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1440px] mx-auto">
              <div className="flex items-center gap-8">
                <div className="text-xl font-black tracking-tighter text-primary uppercase font-headline">ContentEngine.ai</div>
                <nav className="hidden md:flex items-center gap-6">
                  <span className="text-secondary font-bold font-headline tracking-tight hover:text-primary cursor-pointer">Dashboard</span>
                  <span className="text-secondary font-bold font-headline tracking-tight hover:text-primary cursor-pointer">Projects</span>
                  <span className="text-secondary font-bold font-headline tracking-tight hover:text-primary cursor-pointer">Analytics</span>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-bold text-secondary hover:text-primary transition-colors">Support</button>
                <button className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-sm active:scale-95 transition-transform">Invite Member</button>
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                  <div className="w-full h-full bg-surface-container-high"></div>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 px-12 py-12 max-w-[1200px] pt-24">
            {/* Header Section */}
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h1 className="text-6xl font-extrabold tracking-tighter text-primary mb-4 leading-none">Team Members</h1>
                <p className="text-lg text-secondary font-medium">Manage access and roles for your workspace.</p>
              </div>
              <div>
                <button className="group flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-bold tracking-tight rounded-sm shadow-xl active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined text-xl">person_add</span>
                  Invite Member
                </button>
              </div>
            </div>

            {/* Team Content Area */}
            <section className="bg-surface-container-low rounded-xl p-2">
              <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-high/30">
                      <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-stone-400 border-b border-surface-container-high/50">Name</th>
                      <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-stone-400 border-b border-surface-container-high/50">Email</th>
                      <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-stone-400 border-b border-surface-container-high/50">Role</th>
                      <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-stone-400 border-b border-surface-container-high/50">Status</th>
                      <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-stone-400 border-b border-surface-container-high/50 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-low">
                    {/* Member Row 1 */}
                    <tr className="hover:bg-surface-container-low/20 transition-colors group">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-xs text-stone-600">JS</div>
                          <div className="font-headline font-bold text-sm text-primary">Julian Schmidt</div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-sm font-medium text-stone-500">julian@contentengine.ai</span>
                      </td>
                      <td className="px-6 py-6">
                        <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer p-0 pr-8">
                          <option selected>Admin</option>
                          <option>Editor</option>
                          <option>Viewer</option>
                        </select>
                      </td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-green-100 text-green-700">Active</span>
                      </td>
                      <td className="px-6 py-6 text-right">
                        <button className="text-stone-300 hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </td>
                    </tr>
                    {/* Member Row 2 */}
                    <tr className="hover:bg-surface-container-low/20 transition-colors">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-xs text-stone-600">AW</div>
                          <div className="font-headline font-bold text-sm text-primary">Aria Wong</div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-sm font-medium text-stone-500">aria.w@contentengine.ai</span>
                      </td>
                      <td className="px-6 py-6">
                        <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer p-0 pr-8">
                          <option>Admin</option>
                          <option selected>Editor</option>
                          <option>Viewer</option>
                        </select>
                      </td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-green-100 text-green-700">Active</span>
                      </td>
                      <td className="px-6 py-6 text-right">
                        <button className="text-stone-300 hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </td>
                    </tr>
                    {/* Member Row 3 (Pending) */}
                    <tr className="hover:bg-surface-container-low/20 transition-colors">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-xs text-stone-400">
                            <span className="material-symbols-outlined text-sm">hourglass_empty</span>
                          </div>
                          <div className="font-headline font-bold text-sm text-stone-400 italic">Invite Sent</div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-sm font-medium text-stone-400">marcus@pixel.flow</span>
                      </td>
                      <td className="px-6 py-6">
                        <select className="bg-transparent border-none text-sm font-bold text-stone-400 focus:ring-0 cursor-pointer p-0 pr-8">
                          <option>Admin</option>
                          <option>Editor</option>
                          <option selected>Viewer</option>
                        </select>
                      </td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-surface-container-high text-stone-500">Pending</span>
                      </td>
                      <td className="px-6 py-6 text-right">
                        <button className="text-stone-300 hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-lg">cancel</span>
                        </button>
                      </td>
                    </tr>
                    {/* Member Row 4 */}
                    <tr className="hover:bg-surface-container-low/20 transition-colors">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-xs text-stone-600">LR</div>
                          <div className="font-headline font-bold text-sm text-primary">Lukas Rossi</div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-sm font-medium text-stone-500">lukas@contentengine.ai</span>
                      </td>
                      <td className="px-6 py-6">
                        <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer p-0 pr-8">
                          <option>Admin</option>
                          <option selected>Editor</option>
                          <option>Viewer</option>
                        </select>
                      </td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-green-100 text-green-700">Active</span>
                      </td>
                      <td className="px-6 py-6 text-right">
                        <button className="text-stone-300 hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Usage Info (Asymmetric Element) */}
            <div className="mt-24 grid grid-cols-12 gap-8">
              <div className="col-span-4 bg-tertiary-container text-on-tertiary-container p-8 rounded-sm">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Workspace Usage</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span>Seats Used</span>
                      <span>4 / 10</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="bg-on-tertiary-container h-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-white/60 leading-relaxed pt-2">
                    You are using 4 of 10 seats in your current Enterprise tier. Add more seats in <a className="text-white underline font-bold" href="#">Billing Settings</a>.
                  </p>
                </div>
              </div>
              <div className="col-span-8 flex flex-col justify-center px-12">
                <h3 className="text-2xl font-black tracking-tight text-primary mb-4">Granular Permissions</h3>
                <p className="text-secondary font-medium leading-relaxed">
                  Control how your team interacts with the Content Engine. Admins have full configuration access, while Editors can only create and manage projects. Viewers are restricted to analytics and reporting tabs.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <footer className="mt-auto px-12 py-8 border-t border-outline-variant/10">
            <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-stone-400">
              <span>ContentEngine.ai © 2024</span>
              <div className="flex gap-6">
                <a className="hover:text-primary" href="#">Privacy Policy</a>
                <a className="hover:text-primary" href="#">Terms of Service</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </main>
  )
}