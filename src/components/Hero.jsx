
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import logo from '../assets/images/logo.svg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#F8F9FC] text-slate-950 transition-colors duration-300 dark:bg-[#10121B] dark:text-white"
    >
      {/* Brand-coloured background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#4775E8]/15 blur-3xl dark:bg-[#4775E8]/15" />

        <div className="absolute -bottom-40 -left-32 h-[25rem] w-[25rem] rounded-full bg-[#7650E8]/15 blur-3xl dark:bg-[#7650E8]/15" />

        <div className="absolute left-[45%] top-[35%] h-64 w-64 rounded-full bg-[#55C96B]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(#64748b_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-20 dark:opacity-10" />
      </div>

      {/* Reduced top padding: hero sits closer to navbar */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-10 lg:pb-24 lg:pt-12">

        {/* Hero text */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4775E8]/25 bg-[#4775E8]/[0.07] px-4 py-2 text-sm font-medium text-[#385FC7] dark:border-[#829AFF]/25 dark:bg-[#829AFF]/[0.08] dark:text-[#A9BAFF]">
            <Sparkles size={16} />
            Strategy meets creativity
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            We turn bold ideas into{' '}
            <span className="relative inline-block bg-gradient-to-r from-[#4775E8] via-[#7650E8] to-[#55A96A] bg-clip-text text-transparent">
              digital growth.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-[#4775E8] via-[#7650E8] to-[#55C96B]"
              />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            Creative thinking, smart strategy, and digital experiences
            that help ambitious brands get noticed, connect with people,
            and move forward.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#4775E8] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-1 hover:bg-[#385FC7] hover:shadow-blue-500/30"
            >
              Start a project
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-4 text-sm font-semibold transition-all duration-200 hover:border-[#7650E8] hover:bg-[#7650E8]/5 dark:border-white/20 dark:hover:border-[#A994FF] dark:hover:bg-[#7650E8]/10"
            >
              Explore services
              <ArrowDown size={17} />
            </a>
          </div>

          {/* Brand principles */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-slate-200 pt-6 dark:border-white/10">
            <div>
              <p className="text-xl font-semibold tracking-tight">Creative</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Ideas that stand out
              </p>
            </div>

            <div className="h-9 w-px bg-slate-200 dark:bg-white/15" />

            <div>
              <p className="text-xl font-semibold tracking-tight">Strategic</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Decisions with purpose
              </p>
            </div>

            <div className="h-9 w-px bg-slate-200 dark:bg-white/15" />

            <div>
              <p className="text-xl font-semibold tracking-tight">Digital</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Built for connection
              </p>
            </div>
          </div>
        </div>

        {/* Brand illustration */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-2xl shadow-slate-900/5 sm:p-6 dark:border-white/10 dark:bg-[#171A27] dark:shadow-black/20">

            {/* Coloured ambient lighting */}
            <div className="absolute -right-[15%] -top-[10%] h-64 w-64 rounded-full bg-[#4775E8]/25 blur-3xl dark:bg-[#4775E8]/25" />

            <div className="absolute -bottom-[5%] -left-[10%] h-64 w-64 rounded-full bg-[#7650E8]/20 blur-3xl dark:bg-[#7650E8]/25" />

            <div className="absolute right-[10%] top-[40%] h-40 w-40 rounded-full bg-[#55C96B]/10 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/60 p-4 backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-[#10121B]/50">

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  The big picture
                </span>

                <Sparkles size={20} className="text-[#7650E8] dark:text-[#A994FF]" />
              </div>

              {/* Logo centrepiece */}
              <div className="relative flex items-center justify-center py-10">
                <div className="absolute h-56 w-56 rounded-full border border-[#4775E8]/20 sm:h-64 sm:w-64" />

                <div className="absolute h-44 w-44 rounded-full border border-[#7650E8]/30 sm:h-52 sm:w-52" />

                <div className="absolute h-32 w-32 rounded-full border border-[#55C96B]/40 sm:h-40 sm:w-40" />

                <div className="relative flex min-h-36 w-full max-w-[280px] rotate-[-3deg] items-center justify-center rounded-3xl border border-slate-200/80 bg-white/90 px-4 py-8 shadow-xl shadow-slate-900/5 transition-transform duration-500 hover:rotate-0 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20">
                  <img
                    src={logo}
                    alt="Tribha Digital Solutions logo"
                    className="h-auto w-full max-w-[250px] object-contain"
                  />
                </div>

                {/* Floating brand labels */}
                <div className="absolute left-0 top-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg dark:border-white/10 dark:bg-[#202332]/95">
                  <span className="block text-xs text-slate-500 dark:text-slate-400">
                    Think
                  </span>
                  <span className="text-sm font-semibold">Different.</span>
                </div>

                <div className="absolute bottom-3 right-0 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg dark:border-white/10 dark:bg-[#202332]/95">
                  <span className="block text-xs text-slate-500 dark:text-slate-400">
                    Create
                  </span>
                  <span className="text-sm font-semibold">Impact.</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-5 dark:border-white/10">
                <div>
                  <p className="text-sm font-semibold">Ideas into action</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    One project at a time
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4775E8] via-[#7650E8] to-[#55C96B] text-white shadow-lg shadow-blue-500/20">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </div>

          {/* Floating note */}
          <div className="absolute -bottom-4 -left-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:-left-6 dark:border-white/10 dark:bg-[#202332]">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Our mindset
            </p>
            <p className="mt-1 font-semibold">Make it meaningful.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
