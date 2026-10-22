// src/App.jsx
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Gradient from './components/GradientCursor'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import UserLog from './pages/UserLog'
import Admin from './pages/Admin'

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
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <Gradient />
        <div className="absolute inset-0 bg-[radial-gradient(#64748b_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-20 dark:opacity-10 pointer-events-none" />
      </div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative z-10 scroll-smooth pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<UserLog />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  )
}