"use client"

import { useJobs } from "@/hooks/use-jobs"
import { JobCard } from "@/components/job-card"
import { JobCardSkeleton } from "@/components/job-card-skeleton"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export function JobListings() {
  const searchParams = useSearchParams()
  const [page, setPage] = useState(1)

  const filters = {
    page,
    search: searchParams.get("search") || "",
    location: searchParams.get("location") || "",
    category: searchParams.get("category") || "",
    job_type: searchParams.get("job_type") || "",
  }

  const { data, isLoading, error } = useJobs(filters)

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Failed to load jobs. Please try again.</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (!data?.jobs.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No jobs found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {data.pagination.totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <Button variant="outline" onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </Button>
          <span className="flex items-center px-4">
            Page {page} of {data.pagination.totalPages}
          </span>
          <Button variant="outline" onClick={() => setPage(page + 1)} disabled={page === data.pagination.totalPages}>
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
