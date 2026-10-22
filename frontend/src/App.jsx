import { useState, useEffect } from 'react'
import Gradient from './components/GradientCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="relative min-h-screen w-full bg-[#F8F9FC] text-slate-950 transition-colors duration-300 dark:bg-[#10121B] dark:text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <Gradient />
        <div className="absolute inset-0 bg-[radial-gradient(#64748b_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-20 dark:opacity-10" />
      </div>

      {/* Fixed Navbar */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative z-10 scroll-smooth pt-15">
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  )
}