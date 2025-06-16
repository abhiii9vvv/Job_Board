import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompanyProfile } from "@/components/companies/company-profile"
import { notFound } from "next/navigation"

interface CompanyPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CompanyPageProps) {
  // In a real app, you would fetch company data here
  const companyName = params.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  return {
    title: `${companyName} | Jobify`,
    description: `Learn about ${companyName} and explore their job opportunities`,
  }
}

export default function CompanyPage({ params }: CompanyPageProps) {
  // In a real app, you would fetch company data here
  const companies = [
    {
      slug: "tech-innovations-inc",
      name: "Tech Innovations Inc.",
      logo: "/images/logos/tech-innovations.png",
      description: "A leading technology company focused on innovation and digital transformation.",
      website: "https://techinnovations.com",
      location: "San Francisco, CA",
      size: "500-1000 employees",
      founded: "2010",
      industry: "Technology",
      jobs: [
        {
          id: "1",
          title: "Senior Frontend Developer",
          location: "San Francisco, CA",
          job_type: "FULL_TIME",
          salary_min: 120000,
          salary_max: 160000,
          created_at: "2024-01-15T00:00:00Z",
        },
        {
          id: "3",
          title: "Marketing Specialist",
          location: "Austin, TX",
          job_type: "FULL_TIME",
          salary_min: 55000,
          salary_max: 75000,
          created_at: "2024-01-05T00:00:00Z",
        },
      ],
    },
    {
      slug: "creative-solutions-ltd",
      name: "Creative Solutions Ltd.",
      logo: "/images/logos/creative-solutions.png",
      description: "A creative agency specializing in design and user experience.",
      website: "https://creativesolutions.com",
      location: "New York, NY",
      size: "50-100 employees",
      founded: "2015",
      industry: "Design & Creative",
      jobs: [
        {
          id: "2",
          title: "UX/UI Designer",
          location: "New York, NY",
          job_type: "FULL_TIME",
          salary_min: 80000,
          salary_max: 110000,
          created_at: "2024-01-10T00:00:00Z",
        },
      ],
    },
  ]

  const company = companies.find((c) => c.slug === params.slug)

  if (!company) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <CompanyProfile company={company} />
      </main>

      <Footer />
    </div>
  )
}
