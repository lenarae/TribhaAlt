// src/pages/Admin.jsx
import { useState } from 'react'
import { ShieldAlert, CheckCircle, Clock, Eye, EyeOff } from 'lucide-react'

const INITIAL_CLIENT_REQUESTS = [
  {
    id: 1,
    clientName: 'Alex Morgan',
    email: 'alex@company.com',
    service: 'Brand Strategy & Identity',
    status: 'In Progress',
    privateData: 'API Key: sk_live_998248239048, Client Secret: sec_882',
    date: '2026-10-20',
  },
  {
    id: 2,
    clientName: 'Jordan Lee',
    email: 'jordan@startup.io',
    service: 'Web Development',
    status: 'Completed',
    privateData: 'Stripe Account ID: acct_1N00832',
    date: '2026-10-21',
  },
]

export default function Admin() {
  const [requests, setRequests] = useState(INITIAL_CLIENT_REQUESTS)
  const [visiblePrivateId, setVisiblePrivateId] = useState(null)

  const toggleStatus = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? { ...req, status: req.status === 'Completed' ? 'In Progress' : 'Completed' }
          : req
      )
    )
  }

  const toggleShowPrivate = (id) => {
    setVisiblePrivateId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Admin Management Dashboard
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Review service requests, verify task completion, and access private client data.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-[#7650E8]">
          <ShieldAlert size={14} /> Admin Privileges Enabled
        </span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#171A27]">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50/50 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
            <tr>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Requested Service</th>
              <th className="px-6 py-4">Private Data</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-white/10">
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5">
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {req.clientName}
                  </div>
                  <div className="text-xs text-slate-500">{req.email}</div>
                </td>
                <td className="px-6 py-4 font-medium">{req.service}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-600 dark:text-slate-300">
                      {visiblePrivateId === req.id ? req.privateData : '••••••••••••••••'}
                    </span>
                    <button
                      onClick={() => toggleShowPrivate(req.id)}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
                    >
                      {visiblePrivateId === req.id ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      req.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {req.status === 'Completed' ? (
                      <CheckCircle size={12} />
                    ) : (
                      <Clock size={12} />
                    )}
                    {req.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => toggleStatus(req.id)}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-100 dark:border-white/20 dark:hover:bg-white/10"
                  >
                    Mark as {req.status === 'Completed' ? 'Pending' : 'Done'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}