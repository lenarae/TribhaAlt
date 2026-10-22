import { WandSparkles, Users } from 'lucide-react'
import teamImage from '../assets/images/team.jpg'

export default function About() {
  return (
    <section
        className="relative flex min-h-[calc(100vh-6rem)] -mt-12 scroll-mt-28 items-center bg-transparent pt-0 pb-4 text-slate-950 transition-colors duration-300 sm:mt-0 sm:py-16 dark:text-white"
    >
      <div id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-10">
        
        {/* Left Side: Clean Arch Image Layout — Hidden on mobile, visible on Tablet & Desktop */}
        <div className="relative mx-auto hidden w-full max-w-[380px] items-center justify-center md:flex">
          
          <div className="pointer-events-none absolute -inset-5 rounded-t-full rounded-b-[2.5rem] border border-indigo-200/60 dark:border-indigo-500/20" />

          <div className="absolute -left-5 top-12 z-20 h-10 w-10 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 shadow-md sm:-left-7 sm:h-12 sm:w-12" />

          <div className="absolute -bottom-2 -left-4 z-20 h-12 w-12 rounded-full border-2 border-[#55C96B] sm:-left-6 sm:h-14 sm:w-14" />

          <div className="relative z-10 aspect-[4/4.8] w-full overflow-hidden rounded-t-full rounded-b-3xl bg-white p-2 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-100 dark:bg-slate-900/80 dark:ring-white/10 dark:shadow-black/50">
            <div className="h-full w-full overflow-hidden rounded-t-full rounded-b-2xl">
              <img
                src={teamImage}
                alt="Tribha Team"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="absolute -top-3 left-4 z-30 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:text-white">
            <span className="h-2 w-2 rounded-full bg-[#55C96B] animate-pulse" />
            <WandSparkles size={14} className="text-[#4775E8]" />
            <span>Digital Wizards</span>
          </div>

          <div className="absolute -bottom-4 -right-2 z-30 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 pr-5 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-[#7650E8] dark:bg-purple-950/60 dark:text-purple-300">
              <Users size={20} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                Collaborative
              </span>
              <span className="text-xs font-bold tracking-tight text-slate-900 sm:text-sm dark:text-white">
                Wild Thinkers
              </span>
            </div>
          </div>

        </div>

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#55C96B]/30 bg-[#55C96B]/[0.08] px-4 py-2 text-sm font-medium text-[#2E8B42] dark:border-[#55C96B]/30 dark:bg-[#55C96B]/[0.1] dark:text-[#6EE785]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#55C96B]" />
            Who we are?
          </div>

          <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.04em] xs:text-4xl sm:text-5xl lg:text-6xl">
            Hello! We are{' '}
            <span className="bg-gradient-to-r from-[#4775E8] via-[#7650E8] to-[#55C96B] bg-clip-text text-transparent">
              TRIBHA!
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 xs:text-base sm:mt-6 sm:text-lg sm:leading-8 dark:text-slate-300">
            TRIBHA was established with the objective to enable organizations to maximize the capabilities of digital marketing technologies, thereby facilitating the expansion of their digital footprint. Our organization consists of dedicated digital marketing professionals who are committed to delivering comprehensive digital marketing solutions to businesses seeking to enhance their market position.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600 xs:text-base sm:text-lg sm:leading-8 dark:text-slate-300">
            As creative thinkers and strategic communicators, we bring bold ideas together with data-driven engagement to build genuine, lasting connections between brands and their ideal audience. If you're looking for a dedicated team to transform your digital presence and lead a high-impact marketing strategy, you’ve come to the right place.
          </p>

        </div>

      </div>
    </section>
  )
}