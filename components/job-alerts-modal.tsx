"use client"

import type React from "react"

import { useState } from "react"
import { X, Bell, Plus } from "lucide-react"
import { useLocalStorage } from "@/lib/hooks/use-local-storage"
import type { JobAlert } from "@/lib/jobs-data"

interface JobAlertsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function JobAlertsModal({ isOpen, onClose }: JobAlertsModalProps) {
  const [alerts, setAlerts] = useLocalStorage<JobAlert[]>("jobAlerts", [])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "All",
    salaryMin: 0,
    salaryMax: 200000,
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newAlert: JobAlert = {
      id: Date.now().toString(),
      title: formData.title,
      location: formData.location,
      type: formData.type,
      salaryMin: formData.salaryMin,
      salaryMax: formData.salaryMax,
      keywords: formData.title.split(" ").filter(Boolean),
      email: formData.email,
      active: true,
      createdAt: new Date().toISOString(),
    }
    setAlerts([...alerts, newAlert])
    setFormData({ title: "", location: "", type: "All", salaryMin: 0, salaryMax: 200000, email: "" })
    setShowForm(false)
  }

  const toggleAlert = (id: string) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, active: !alert.active } : alert)))
  }

  const deleteAlert = (id: string) => {
    setAlerts(alerts.filter((alert) => alert.id !== id))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Job Alerts</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6">
          {!showForm ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Your Alerts</h3>
                <button
                  onClick={() => setShowForm(true)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <Plus size={16} />
                  Create Alert
                </button>
              </div>

              {alerts.length === 0 ? (
                <div className="text-center py-8">
                  <Bell className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 dark:text-gray-400">No job alerts yet. Create one to get notified!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">{alert.title || "Any Title"}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {alert.location || "Any Location"} • {alert.type} • ${alert.salaryMin.toLocaleString()} - $
                          {alert.salaryMax.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleAlert(alert.id)}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            alert.active
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {alert.active ? "Active" : "Paused"}
                        </button>
                        <button
                          onClick={() => deleteAlert(alert.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create Job Alert</h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Frontend Developer"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. San Francisco, CA"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="All">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Remote">Remote</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Min Salary</label>
                  <input
                    type="number"
                    value={formData.salaryMin}
                    onChange={(e) => setFormData({ ...formData, salaryMin: Number.parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Max Salary</label>
                  <input
                    type="number"
                    value={formData.salaryMax}
                    onChange={(e) => setFormData({ ...formData, salaryMax: Number.parseInt(e.target.value) || 200000 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Create Alert
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
