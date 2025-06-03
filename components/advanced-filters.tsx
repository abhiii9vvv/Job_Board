"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Sliders } from "lucide-react"

interface AdvancedFiltersProps {
  filters: {
    type: string
    experience: string
    industry: string
    companySize: string
    salaryMin: number
    salaryMax: number
    remoteOnly: boolean
  }
  onFiltersChange: (filters: any) => void
}

export default function AdvancedFilters({ filters, onFiltersChange }: AdvancedFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const jobTypes = ["All", "Full-time", "Part-time", "Remote", "Contract"]
  const experienceLevels = ["All", "Entry", "Mid", "Senior", "Executive"]
  const industries = ["All", "Technology", "Design", "Marketing", "Finance", "Healthcare"]
  const companySizes = ["All", "Startup", "Small", "Medium", "Large", "Enterprise"]

  const updateFilter = (key: string, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left group"
        >
          <div className="flex items-center gap-2">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
              <Sliders className="text-orange-600 dark:text-orange-400" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              Advanced Filters
            </h3>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full transition-colors group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30">
            {isExpanded ? (
              <ChevronUp
                size={18}
                className="text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400"
              />
            ) : (
              <ChevronDown
                size={18}
                className="text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400"
              />
            )}
          </div>
        </button>

        {isExpanded && (
          <div className="mt-6 space-y-6 animate-in fade-in">
            {/* Job Type */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded text-orange-600 dark:text-orange-400 text-xs">
                  01
                </span>
                Job Type
              </h4>
              <div className="space-y-2">
                {jobTypes.map((type) => (
                  <label key={type} className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="jobType"
                      value={type}
                      checked={filters.type === type}
                      onChange={() => updateFilter("type", type)}
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700"
                    />
                    <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded text-orange-600 dark:text-orange-400 text-xs">
                  02
                </span>
                Experience Level
              </h4>
              <select
                value={filters.experience}
                onChange={(e) => updateFilter("experience", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
              >
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Industry */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded text-orange-600 dark:text-orange-400 text-xs">
                  03
                </span>
                Industry
              </h4>
              <select
                value={filters.industry}
                onChange={(e) => updateFilter("industry", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Company Size */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded text-orange-600 dark:text-orange-400 text-xs">
                  04
                </span>
                Company Size
              </h4>
              <select
                value={filters.companySize}
                onChange={(e) => updateFilter("companySize", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
              >
                {companySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Salary Range */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded text-orange-600 dark:text-orange-400 text-xs">
                  05
                </span>
                Salary Range
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Min Salary</label>
                  <input
                    type="number"
                    value={filters.salaryMin}
                    onChange={(e) => updateFilter("salaryMin", Number.parseInt(e.target.value) || 0)}
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Max Salary</label>
                  <input
                    type="number"
                    value={filters.salaryMax}
                    onChange={(e) => updateFilter("salaryMax", Number.parseInt(e.target.value) || 300000)}
                    placeholder="300000"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  />
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                ${filters.salaryMin.toLocaleString()} - ${filters.salaryMax.toLocaleString()}
              </div>
            </div>

            {/* Remote Only */}
            <div>
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.remoteOnly}
                  onChange={(e) => updateFilter("remoteOnly", e.target.checked)}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Remote jobs only
                </span>
              </label>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() =>
                onFiltersChange({
                  type: "All",
                  experience: "All",
                  industry: "All",
                  companySize: "All",
                  salaryMin: 0,
                  salaryMax: 300000,
                  remoteOnly: false,
                })
              }
              className="w-full py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors bg-gray-50 dark:bg-gray-700/50 hover:bg-orange-50 dark:hover:bg-orange-900/10 rounded-lg mt-4"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
