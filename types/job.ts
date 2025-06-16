export interface Job {
  id: string
  title: string
  company: string
  location: string
  description: string
  requirements: string[]
  salary_min: number | null
  salary_max: number | null
  job_type: "FULL_TIME" | "PART_TIME" | "FREELANCE" | "CONTRACT"
  experience_level: "ENTRY" | "MID" | "SENIOR" | "EXECUTIVE"
  category: string
  company_logo: string | null
  is_featured: boolean
  is_active: boolean
  created_at: string
  updated_at: string
  employer_id: string
}

export interface JobFilters {
  page?: number
  limit?: number
  search?: string
  location?: string
  category?: string
  job_type?: string
}
