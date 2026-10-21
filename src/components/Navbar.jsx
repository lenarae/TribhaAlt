
import { useState } from 'react'
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'

import logo from '../assets/images/logo.svg'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 font-sans backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#10121B]/90">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Brand logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center"
          aria-label="Tribha Digital Solutions home"
        >
          <img
            src={logo}
            alt="Tribha Digital Solutions"
            className="h-auto w-[175px] transition-opacity duration-300 group-hover:opacity-80 sm:w-[200px]"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#4775E8] dark:text-slate-300 dark:hover:text-[#829AFF]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme toggle and actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-[#4775E8]/40 hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:border-white/15 dark:bg-white/5 dark:text-[#B5A0FF] dark:hover:border-[#829AFF]/50 dark:hover:bg-[#829AFF]/10"
          >
            {theme === 'dark' ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#4775E8] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#385FC7] sm:inline-flex"
          >
            Let's talk
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 transition-colors hover:bg-slate-100 lg:hidden dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden dark:border-white/10 dark:bg-[#10121B]"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#4775E8]/10 hover:text-[#4775E8] dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-[#B5A0FF]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#4775E8] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#385FC7]"
            >
              Let's talk
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
