"use client"

import { useState } from "react"
import { X, DollarSign, TrendingUp, MapPin } from "lucide-react"
import { jobsData } from "@/lib/jobs-data"

interface SalaryComparisonModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SalaryComparisonModal({ isOpen, onClose }: SalaryComparisonModalProps) {
  const [selectedRole, setSelectedRole] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")

  const roles = [...new Set(jobsData.map((job) => job.title))]
  const locations = [...new Set(jobsData.map((job) => job.location))]

  const getSalaryData = () => {
    let filteredJobs = jobsData

    if (selectedRole) {
      filteredJobs = filteredJobs.filter((job) => job.title.includes(selectedRole))
    }

    if (selectedLocation) {
      filteredJobs = filteredJobs.filter((job) => job.location.includes(selectedLocation))
    }

    if (filteredJobs.length === 0) return null

    const salaries = filteredJobs.map((job) => ({
      min: job.salaryMin,
      max: job.salaryMax,
      avg: (job.salaryMin + job.salaryMax) / 2,
    }))

    const avgMin = salaries.reduce((sum, s) => sum + s.min, 0) / salaries.length
    const avgMax = salaries.reduce((sum, s) => sum + s.max, 0) / salaries.length
    const avgSalary = salaries.reduce((sum, s) => sum + s.avg, 0) / salaries.length

    return {
      count: filteredJobs.length,
      avgMin: Math.round(avgMin),
      avgMax: Math.round(avgMax),
      avgSalary: Math.round(avgSalary),
      jobs: filteredJobs,
    }
  }

  const salaryData = getSalaryData()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DollarSign className="text-green-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Salary Comparison</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Role</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">All Roles</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {salaryData ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign size={24} />
                    <h3 className="text-lg font-semibold">Average Salary</h3>
                  </div>
                  <p className="text-3xl font-bold">${salaryData.avgSalary.toLocaleString()}</p>
                  <p className="text-green-100 text-sm">Based on {salaryData.count} jobs</p>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp size={24} />
                    <h3 className="text-lg font-semibold">Salary Range</h3>
                  </div>
                  <p className="text-2xl font-bold">
                    ${salaryData.avgMin.toLocaleString()} - ${salaryData.avgMax.toLocaleString()}
                  </p>
                  <p className="text-blue-100 text-sm">Average range</p>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={24} />
                    <h3 className="text-lg font-semibold">Market Data</h3>
                  </div>
                  <p className="text-3xl font-bold">{salaryData.count}</p>
                  <p className="text-purple-100 text-sm">Available positions</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Salary Breakdown</h3>
                <div className="space-y-3">
                  {salaryData.jobs.slice(0, 5).map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{job.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {job.company} • {job.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900 dark:text-white">{job.salary}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{job.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <DollarSign className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500 dark:text-gray-400">
                No salary data available for the selected criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
