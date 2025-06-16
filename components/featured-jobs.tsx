"use client"

import { useJobs } from "@/hooks/use-jobs"
import { JobCard } from "@/components/job-card"
import { JobCardSkeleton } from "@/components/job-card-skeleton"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturedJobs() {
  const { data, isLoading, error } = useJobs({ limit: 6 })

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Failed to load featured jobs.</p>
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

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.jobs.slice(0, 6).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/jobs">
          <Button variant="outline" className="rounded-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
            Find More Jobs
          </Button>
        </Link>
      </div>
    </div>
  )
}
