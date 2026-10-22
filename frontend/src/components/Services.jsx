import {
  Sparkles,
  ArrowUpRight,
  Palette,
  Megaphone,
  Code2,
  Bot,
  Search,
  DollarSign,
  Share2,
  ShoppingCart,
  Layout,
  Globe,
  Smartphone,
  Cpu,
  Zap,
  BarChart2,
  CheckCircle2,
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'branding',
      title: 'Branding',
      tagline: 'Identity & Visual Craft',
      description: 'Crafting memorable, distinct visual identities that captivate audiences and express your core values.',
      accentGradient: 'from-[#4775E8] to-[#7650E8]',
      badgeBg: 'border-[#4775E8]/30 bg-[#4775E8]/[0.08] text-[#4775E8] dark:text-[#829AFF]',
      icon: Palette,
      items: [
        { label: 'Logo Designing', icon: Sparkles },
        { label: 'Graphic Designing', icon: Palette },
        { label: 'Content Creation', icon: Zap },
        { label: 'Label Designing', icon: CheckCircle2 },
      ],
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      tagline: 'Growth & Reach',
      description: 'Data-backed campaigns and strategic marketing solutions to boost your online presence and conversion.',
      accentGradient: 'from-[#7650E8] to-[#A994FF]',
      badgeBg: 'border-[#7650E8]/30 bg-[#7650E8]/[0.08] text-[#7650E8] dark:text-[#A994FF]',
      icon: Megaphone,
      items: [
        { label: 'SEO Optimization', icon: Search },
        { label: 'PPC Advertising', icon: DollarSign },
        { label: 'Social Media Marketing', icon: Share2 },
        { label: 'E-Commerce Growth', icon: ShoppingCart },
      ],
    },
    {
      id: 'web-app',
      title: 'Web & App Development',
      tagline: 'Engineering & Experience',
      description: 'Scalable, modern, and lightning-fast digital applications engineered for high performance and sleek UX.',
      accentGradient: 'from-[#55C96B] to-[#4775E8]',
      badgeBg: 'border-[#55C96B]/30 bg-[#55C96B]/[0.08] text-[#2E8B42] dark:text-[#6EE785]',
      icon: Code2,
      items: [
        { label: 'UI/UX Designing', icon: Layout },
        { label: 'Web Development', icon: Globe },
        { label: 'Mobile App Development', icon: Smartphone },
        { label: 'E-Commerce Apps', icon: ShoppingCart },
      ],
    },
    {
      id: 'ai-genai',
      title: 'AI & GenAI Solutions',
      tagline: 'Automation & Intelligence',
      description: 'Integrating intelligent agents, predictive analytics, and automated workflows into your brand ecosystem.',
      accentGradient: 'from-[#4775E8] via-[#7650E8] to-[#55C96B]',
      badgeBg: 'border-[#4775E8]/30 bg-[#4775E8]/[0.08] text-[#4775E8] dark:text-[#A994FF]',
      icon: Bot,
      items: [
        { label: 'AI Chatbots', icon: Bot },
        { label: 'Insights & Automation', icon: Cpu },
        { label: 'Marketing Intelligence', icon: BarChart2 },
        { label: 'Visual Intelligence', icon: Sparkles },
      ],
    },
  ]

  return (
    <section
        className="relative flex min-h-[calc(100vh-6rem)] mt-6 scroll-mt-28 items-center bg-transparent pt-0 pb-10 text-slate-950 transition-colors duration-300 md:-mt-8 sm:py-16 dark:text-white"
    >
      <div id="services" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4775E8]/25 bg-[#4775E8]/[0.07] px-3.5 py-1.5 text-xs font-medium text-[#385FC7] sm:px-4 sm:py-2 sm:text-sm dark:border-[#829AFF]/25 dark:bg-[#829AFF]/[0.08] dark:text-[#A9BAFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#55C96B]" />
              What we can do for you
            </div>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.04em] xs:text-4xl sm:text-5xl lg:text-6xl">
              We've got the{' '}
              <span className="bg-gradient-to-r from-[#4775E8] via-[#7650E8] to-[#55C96B] bg-clip-text text-transparent md:whitespace-nowrap">
                wizardry in
              </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 xs:text-base sm:mt-4 sm:text-lg sm:leading-8 dark:text-slate-300">
              Whether you're aiming to flaunt your brand to the entire galaxy or reach targeted customers, we're your trusty sidekick!
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-xs font-semibold transition-all duration-200 hover:border-[#4775E8] hover:bg-[#4775E8]/5 sm:px-6 sm:py-3.5 sm:text-sm dark:border-white/20 dark:hover:border-[#829AFF] dark:hover:bg-[#4775E8]/10"
          >
            Custom Requirement?
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-[18px] sm:w-[18px]" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2">
          {services.map((service) => {
            const MainIcon = service.icon
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-8 dark:border-white/10 dark:bg-[#171A27]/70 dark:shadow-black/30"
              >
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${service.accentGradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15 dark:group-hover:opacity-20`}
                />

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold sm:text-xs ${service.badgeBg}`}>
                      {service.tagline}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 text-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
                      <MainIcon size={20} className="sm:h-[22px] sm:w-[22px]" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight sm:mt-6 sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-6 text-slate-600 xs:text-sm sm:mt-3 sm:text-base dark:text-slate-300">
                    {service.description}
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-2.5 border-t border-slate-200/85 pt-5 sm:mt-6 sm:grid-cols-2 sm:gap-3 sm:pt-6 dark:border-white/10">
                    {service.items.map((item, idx) => {
                      const SubIcon = item.icon
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white/85 p-2.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors group-hover:border-slate-200 sm:p-2.5 sm:text-xs dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-slate-200 dark:group-hover:border-white/10"
                        >
                          <SubIcon size={14} className="shrink-0 text-[#7650E8] sm:h-[15px] sm:w-[15px] dark:text-[#A994FF]" />
                          <span className="truncate">{item.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-200/80 pt-4 sm:mt-8 sm:pt-5 dark:border-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs dark:text-slate-500">
                    Explore Details
                  </span>

                  <a
                    href="#contact"
                    className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${service.accentGradient} text-white shadow-md transition-transform group-hover:scale-105 sm:h-10 sm:w-10`}
                  >
                    <ArrowUpRight size={18} className="sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}