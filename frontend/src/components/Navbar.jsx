import { useState, useEffect, useRef } from 'react'
import {
  ChevronDown,
  Menu,
  Moon,
  Sun,
  X,
  Palette,
  Megaphone,
  Code2,
  Bot,
} from 'lucide-react'

import logo from '../assets/images/logo1.png'

const serviceItems = [
  { label: 'Branding', href: '#services', icon: Palette, desc: 'Logo, Graphic & Label Design' },
  { label: 'Digital Marketing', href: '#services', icon: Megaphone, desc: 'SEO, PPC & Social Media' },
  { label: 'Web & App Development', href: '#services', icon: Code2, desc: 'UI/UX, Web & Mobile Apps' },
  { label: 'AI & GenAI Solutions', href: '#services', icon: Bot, desc: 'Chatbots & Smart Insights' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
    setServicesDropdownOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2.5 py-1.5 sm:px-8 sm:py-4">
      <div
        className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-full px-3.5 py-2 max-[375px]:pb-2.5 sm:px-5 sm:py-3 transition-all duration-300 ${
          scrolled
            ? 'border border-slate-200/80 bg-white/70 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#10121B]/70 dark:shadow-black/30'
            : 'border border-slate-200/40 bg-white/40 backdrop-blur-md dark:border-white/10 dark:bg-[#10121B]/40'
        }`}
      >

        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Tribha Digital Solutions home"
          className="group flex items-center gap-2 sm:gap-3"
        >
          <img
            src={logo}
            alt="Tribha Logo"
            aria-hidden="true"
            className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
          />
          <span className="text-xs font-bold tracking-tight text-slate-900 transition-colors group-hover:text-[#4775E8] xs:text-sm sm:text-lg lg:text-xl dark:text-white dark:group-hover:text-[#A994FF]">
            Tribha Digital Solutions
          </span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 xl:flex">
          <a
            href="#home"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-[#829AFF]/10 dark:hover:text-[#829AFF]"
          >
            Home
          </a>

          <a
            href="#services"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-[#829AFF]/10 dark:hover:text-[#829AFF]"
          >
            Services
          </a>

          <a
            href="#about"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-[#829AFF]/10 dark:hover:text-[#829AFF]"
          >
            About
          </a>
          <a
            href="#work"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-[#829AFF]/10 dark:hover:text-[#829AFF]"
          >
            Our Work
          </a>
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-[#829AFF]/10 dark:hover:text-[#829AFF]"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-[#4775E8]/10 hover:text-[#4775E8] sm:h-9 sm:w-9 dark:border-white/15 dark:bg-white/5 dark:text-[#B5A0FF] dark:hover:bg-[#829AFF]/10"
          >
            {theme === 'dark' ? <Sun size={15} className="sm:h-[17px] sm:w-[17px]" /> : <Moon size={15} className="sm:h-[17px] sm:w-[17px]" />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-800 shadow-sm xl:hidden sm:h-9 sm:w-9 dark:border-white/15 dark:bg-white/5 dark:text-white"
          >
            {menuOpen ? <X size={16} className="sm:h-[18px] sm:w-[18px]" /> : <Menu size={16} className="sm:h-[18px] sm:w-[18px]" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-2 rounded-2xl border border-slate-200/80 bg-white/95 p-3.5 shadow-2xl backdrop-blur-2xl xl:hidden sm:p-5 dark:border-white/10 dark:bg-[#10121B]/95">
          <div className="flex flex-col gap-1">
            <a
              href="#home"
              onClick={closeMenu}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-white/5"
            >
              Home
            </a>

            <div className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-[#A994FF]"
              >
                <span className="font-semibold">Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    mobileServicesOpen ? 'rotate-180 text-[#4775E8]' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 flex flex-col gap-1 border-t border-slate-200/60 pt-1.5 dark:border-white/10">
                  {serviceItems.map((s, idx) => {
                    const Icon = s.icon
                    return (
                      <a
                        key={idx}
                        href={s.href}
                        onClick={closeMenu}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-300 dark:hover:bg-white/5"
                      >
                        <Icon size={14} className="text-[#4775E8] dark:text-[#A994FF]" />
                        <span>{s.label}</span>
                      </a>
                    )
                  })}
                </div>
              )}
            </div>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-white/5"
            >
              About
            </a>
            <a
              href="#work"
              onClick={closeMenu}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-white/5"
            >
              Our Work
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-white/5"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}