import { render, screen } from "@testing-library/react"
import { JobCard } from "@/components/job-card"
import type { Job } from "@/types/job"

const mockJob: Job = {
  id: "1",
  title: "Frontend Developer",
  company: "Tech Corp",
  location: "San Francisco, CA",
  description: "Great job opportunity",
  requirements: ["React", "TypeScript"],
  salary_min: 80000,
  salary_max: 120000,
  job_type: "FULL_TIME",
  experience_level: "MID",
  category: "Design & Development",
  company_logo: null,
  is_featured: false,
  is_active: true,
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-01-01T00:00:00Z",
  employer_id: "employer-1",
}

describe("JobCard", () => {
  it("renders job information correctly", () => {
    render(<JobCard job={mockJob} />)

    expect(screen.getByText("Frontend Developer")).toBeInTheDocument()
    expect(screen.getByText("Tech Corp")).toBeInTheDocument()
    expect(screen.getByText("San Francisco, CA")).toBeInTheDocument()
    expect(screen.getByText("FULL TIME")).toBeInTheDocument()
  })

  it("displays salary range when provided", () => {
    render(<JobCard job={mockJob} />)

    expect(screen.getByText("$80,000 - $120,000")).toBeInTheDocument()
  })

  it("shows featured badge for featured jobs", () => {
    const featuredJob = { ...mockJob, is_featured: true }
    render(<JobCard job={featuredJob} />)

    expect(screen.getByText("Featured")).toBeInTheDocument()
  })
})
