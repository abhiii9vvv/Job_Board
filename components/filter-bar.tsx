"use client"

interface FilterBarProps {
  selectedType: string
  onTypeChange: (type: string) => void
  jobCount: number
}

export default function FilterBar({ selectedType, onTypeChange, jobCount }: FilterBarProps) {
  const jobTypes = ["All", "Full-time", "Part-time", "Remote", "Contract"]

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Jobs</h3>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Job Type</h4>
          <div className="space-y-2">
            {jobTypes.map((type) => (
              <label key={type} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="jobType"
                  value={type}
                  checked={selectedType === type}
                  onChange={() => onTypeChange(type)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            <span className="font-medium">{jobCount}</span> {jobCount === 1 ? "job" : "jobs"} found
          </div>
        </div>
      </div>
    </div>
  )
}
