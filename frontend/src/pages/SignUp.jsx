// src/pages/SignUp.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle signup logic here
    console.log('Signing up with:', name, email, password)
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-slate-800/80 dark:bg-[#181B28]/80">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Create an Account
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Get started with your free account today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 dark:border-slate-700 dark:text-white dark:focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 dark:border-slate-700 dark:text-white dark:focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 dark:border-slate-700 dark:text-white dark:focus:border-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 active:scale-[0.99]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}