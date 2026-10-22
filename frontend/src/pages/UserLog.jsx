// src/pages/UserLog.jsx
import { useState } from 'react'
import { CheckCircle2, Circle, Shield, Clock } from 'lucide-react'

const AVAILABLE_SERVICES = [
  'Brand Strategy & Identity',
  'UI/UX Design',
  'Web Development',
  'Digital Marketing',
  'SEO & Content Optimization',
]

export default function UserLog() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    privateNotes: '',
  })

  const [selectedServices, setSelectedServices] = useState([])
  const [userTasks, setUserTasks] = useState([])

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedServices.length === 0) return

    const newTasks = selectedServices.map((service) => ({
      id: Date.now() + Math.random(),
      service,
      completed: false,
      dateAdded: new Date().toLocaleDateString(),
    }))

    setUserTasks((prev) => [...prev, ...newTasks])
    setSelectedServices([])
  }

  const toggleTaskCompletion = (taskId) => {
    setUserTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        User Portal & Service Tracker
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Select the services you need, store private notes, and manage completion.
      </p>

      {/* Service Selection Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#171A27]"
      >
        <h2 className="text-xl font-semibold mb-4">1. Personal Information</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 dark:border-white/20"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 dark:border-white/20"
              placeholder="jane@example.com"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1 flex items-center gap-1.5">
            <Shield size={16} className="text-[#7650E8]" /> Private Notes / Requirements
          </label>
          <textarea
            rows={3}
            value={formData.privateNotes}
            onChange={(e) => setFormData({ ...formData, privateNotes: e.target.value })}
            className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 dark:border-white/20"
            placeholder="Add confidential project specs, credentials, or private details..."
          />
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Select Services Requested</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {AVAILABLE_SERVICES.map((service) => {
            const isSelected = selectedServices.includes(service)
            return (
              <button
                type="button"
                key={service}
                onClick={() => handleServiceToggle(service)}
                className={`flex items-center justify-between rounded-xl border p-4 text-left font-medium transition-all ${
                  isSelected
                    ? 'border-[#4775E8] bg-[#4775E8]/10 text-[#385FC7] dark:text-[#A9BAFF]'
                    : 'border-slate-200 hover:border-slate-300 dark:border-white/10'
                }`}
              >
                <span>{service}</span>
                {isSelected ? (
                  <CheckCircle2 size={18} className="text-[#4775E8]" />
                ) : (
                  <Circle size={18} className="text-slate-400" />
                )}
              </button>
            )
          })}
        </div>

        <button
          type="submit"
          disabled={selectedServices.length === 0}
          className="mt-6 w-full rounded-xl bg-[#4775E8] py-3.5 font-semibold text-white transition-all hover:bg-[#385FC7] disabled:opacity-50"
        >
          Add Services to My Dashboard
        </button>
      </form>

      {/* Task Tracker */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-[#171A27]">
        <h2 className="text-xl font-semibold mb-4">My Service Progress</h2>
        {userTasks.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No services requested yet. Select options above to track your orders.
          </p>
        ) : (
          <div className="space-y-3">
            {userTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between rounded-xl border border-slate-200/80 p-4 dark:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <button onClick={() => toggleTaskCompletion(task.id)}>
                    {task.completed ? (
                      <CheckCircle2 className="text-emerald-500" size={22} />
                    ) : (
                      <Clock className="text-amber-500" size={22} />
                    )}
                  </button>
                  <span
                    className={`font-medium ${
                      task.completed ? 'line-through text-slate-400' : ''
                    }`}
                  >
                    {task.service}
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {task.completed ? 'Completed' : 'In Progress'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}