import { ArrowDown, ArrowUpRight, Zap, CircleCheckBig } from 'lucide-react'
import logo from '../assets/images/logo1.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] -mt-12 scroll-mt-12 items-center bg-transparent pt-0 text-slate-950 transition-colors duration-300 sm:mt-0 sm:scroll-mt-24 sm:pt-0 dark:text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-6 pt-0 sm:px-8 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-10 lg:py-16 2xl:max-w-[1536px] 2xl:gap-20 2xl:px-12 2xl:py-20">
        
        {/* Main Content Side */}
        <div className="flex flex-col items-start text-left sm:items-center sm:text-center lg:items-start lg:text-left">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#4775E8]/25 bg-[#4775E8]/[0.07] px-3.5 py-1.5 text-xs font-medium text-[#385FC7] sm:mb-6 sm:px-4 sm:py-2 sm:text-sm 2xl:px-6 2xl:py-3 2xl:text-lg dark:border-[#829AFF]/25 dark:bg-[#829AFF]/[0.08] dark:text-[#A9BAFF]">
            <CircleCheckBig size={15} className="shrink-0 2xl:h-5 2xl:w-5" />
            <span>Strategy meets creativity</span>
          </div>

          <h1 className="max-w-3xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] xs:text-4xl sm:text-5xl sm:leading-[1.08] lg:text-6xl xl:text-7xl 2xl:max-w-4xl 2xl:text-8xl 2xl:leading-[1.05]">
            We turn bold ideas into{' '}
            <span className="relative inline-block bg-gradient-to-r from-[#4775E8] via-[#7650E8] to-[#55C96B] bg-clip-text text-transparent">
              digital growth.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-[#4775E8] via-[#7650E8] to-[#55C96B]"
              />
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg 2xl:mt-8 2xl:max-w-2xl 2xl:text-2xl 2xl:leading-10 dark:text-slate-300">
            Creative thinking, smart strategy, and digital experiences
            that help ambitious brands get noticed, connect with people,
            and move forward.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4 2xl:mt-10 2xl:gap-6">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#4775E8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#385FC7] hover:shadow-blue-500/30 sm:w-auto sm:py-4 2xl:px-9 2xl:py-5 2xl:text-xl"
            >
              <span>Start a project</span>
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 2xl:h-6 2xl:w-6"
              />
            </a>

            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:border-[#7650E8] hover:bg-[#7650E8]/5 sm:w-auto sm:py-4 2xl:px-9 2xl:py-5 2xl:text-xl dark:border-white/20 dark:hover:border-[#A994FF] dark:hover:bg-[#7650E8]/10"
            >
              <span>Explore services</span>
              <ArrowDown size={17} className="2xl:h-6 2xl:w-6" />
            </a>
          </div>

          <div className="hidden sm:mt-10 sm:flex sm:w-auto sm:items-center sm:justify-center sm:gap-x-6 sm:border-t sm:border-slate-200/80 sm:pt-6 2xl:mt-12 2xl:gap-x-10 2xl:pt-8 dark:border-white/10">
            <div>
              <p className="text-xl font-bold tracking-tight 2xl:text-3xl">Creative</p>
              <p className="mt-0.5 text-xs text-slate-500 2xl:mt-1 2xl:text-base dark:text-slate-400">
                Ideas that stand out
              </p>
            </div>

            <div className="h-9 w-px bg-slate-200 2xl:h-12 dark:bg-white/15" />

            <div>
              <p className="text-xl font-bold tracking-tight 2xl:text-3xl">Strategic</p>
              <p className="mt-0.5 text-xs text-slate-500 2xl:mt-1 2xl:text-base dark:text-slate-400">
                Decisions with purpose
              </p>
            </div>

            <div className="h-9 w-px bg-slate-200 2xl:h-12 dark:bg-white/15" />

            <div>
              <p className="text-xl font-bold tracking-tight 2xl:text-3xl">Digital</p>
              <p className="mt-0.5 text-xs text-slate-500 2xl:mt-1 2xl:text-base dark:text-slate-400">
                Built for connection
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-lg lg:block 2xl:max-w-2xl">
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-900/5 2xl:p-8 dark:border-white/10 dark:bg-[#171A27] dark:shadow-black/20">
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-xl 2xl:p-8 dark:border-white/10 dark:bg-[#10121B]/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 2xl:text-base dark:text-slate-400">
                  The big picture
                </span>

                <Zap size={20} className="text-[#7650E8] 2xl:h-7 2xl:w-7 dark:text-[#A994FF]" />
              </div>

              <div className="relative flex items-center justify-center py-10 2xl:py-14">
                <div className="absolute h-56 w-56 rounded-full border border-[#4775E8]/20 sm:h-64 sm:w-64 2xl:h-80 2xl:w-80" />
                <div className="absolute h-44 w-44 rounded-full border border-[#7650E8]/30 sm:h-52 sm:w-52 2xl:h-64 2xl:w-64" />
                <div className="absolute h-32 w-32 rounded-full border border-[#55C96B]/40 sm:h-40 sm:w-40 2xl:h-52 2xl:w-52" />

                <div className="relative flex min-h-36 w-full max-w-[280px] rotate-[-3deg] items-center justify-center rounded-3xl border border-slate-200/80 bg-white/90 px-4 py-8 shadow-xl shadow-slate-900/5 transition-transform duration-500 hover:rotate-0 2xl:max-w-[340px] 2xl:py-10 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20">
                  <img
                    src={logo}
                    alt="Tribha Digital Solutions logo"
                    className="h-auto w-full max-w-[100px] object-contain 2xl:max-w-[140px]"
                  />
                </div>

                <div className="absolute left-0 top-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg 2xl:px-5 2xl:py-4 dark:border-white/10 dark:bg-[#202332]/95">
                  <span className="block text-xs text-slate-500 2xl:text-sm dark:text-slate-400">
                    Think
                  </span>
                  <span className="text-sm font-semibold 2xl:text-lg">Different.</span>
                </div>

                <div className="absolute bottom-3 right-0 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg 2xl:px-5 2xl:py-4 dark:border-white/10 dark:bg-[#202332]/95">
                  <span className="block text-xs text-slate-500 2xl:text-sm dark:text-slate-400">
                    Create
                  </span>
                  <span className="text-sm font-semibold 2xl:text-lg">Impact.</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-5 dark:border-white/10">
                <div>
                  <p className="text-sm font-semibold 2xl:text-lg">Ideas into action</p>
                  <br></br>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4775E8] via-[#7650E8] to-[#55C96B] text-white shadow-lg shadow-blue-500/20 2xl:h-14 2xl:w-14 2xl:rounded-2xl">
                  <ArrowUpRight size={20} className="2xl:h-7 2xl:w-7" />
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-6 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl transition-transform duration-300 hover:-translate-y-1 2xl:px-6 2xl:py-5 dark:border-white/10 dark:bg-[#202332]">
            <p className="text-xs text-slate-500 2xl:text-base dark:text-slate-400">
              Our mindset
            </p>
            <p className="mt-1 font-semibold 2xl:text-xl">Make it meaningful.</p>
          </div>
        </div>

      </div>
    </section>
  )
}