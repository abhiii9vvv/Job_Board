import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { Job, JobFilters } from "@/types/job"

interface JobsResponse {
  jobs: Job[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export function useJobs(filters: JobFilters = {}) {
  return useQuery<JobsResponse>({
    queryKey: ["jobs", filters],
    queryFn: async () => {
      const params = new URLSearchParams()

      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          params.append(key, value.toString())
        }
      })

      const response = await fetch(`/api/jobs?${params}`)
      if (!response.ok) {
        throw new Error("Failed to fetch jobs")
      }
      return response.json()
    },
  })
}

export function useJob(id: string) {
  return useQuery<Job>({
    queryKey: ["job", id],
    queryFn: async () => {
      const response = await fetch(`/api/jobs/${id}`)
      if (!response.ok) {
        throw new Error("Failed to fetch job")
      }
      return response.json()
    },
    enabled: !!id,
  })
}

export function useCreateJob() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (jobData: Partial<Job>) => {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      })

      if (!response.ok) {
        throw new Error("Failed to create job")
      }

      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] })
    },
  })
}
