
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('tribha-theme')

    if (savedTheme) {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme

    localStorage.setItem('tribha-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />

        {/* We will build these sections next. */}
        <section
          id="services"
          className="bg-neutral-50 px-5 py-24 text-center dark:bg-neutral-900"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-300">
            What we do
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Good ideas deserve great execution.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-neutral-600 dark:text-neutral-400">
            Our services section is the next component we'll develop.
          </p>
        </section>

        <section
          id="about"
          className="bg-white px-5 py-20 text-center dark:bg-neutral-950"
        >
          <h2 className="text-3xl font-semibold">About the agency</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            A dedicated section for the agency story is coming next.
          </p>
        </section>

        <section
          id="work"
          className="bg-neutral-50 px-5 py-20 text-center dark:bg-neutral-900"
        >
          <h2 className="text-3xl font-semibold">Selected work</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            We'll add interactive project cards here.
          </p>
        </section>

        <section
          id="contact"
          className="bg-white px-5 py-20 text-center dark:bg-neutral-950"
        >
          <h2 className="text-3xl font-semibold">Let's create something.</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Our contact form will go here.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
