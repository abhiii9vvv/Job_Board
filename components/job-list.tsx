"use client"

import type { Job } from "@/lib/jobs-data"
import JobCard from "./job-card"

interface JobListProps {
  jobs: Job[]
}

export default function JobList({ jobs }: JobListProps) {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-white rounded-xl p-12 shadow-sm border max-w-md mx-auto">
          <div className="text-gray-400 mb-6">
            <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">No jobs found</h3>
          <p className="text-gray-500 leading-relaxed">
            Try adjusting your search criteria or filters to find more opportunities.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}
