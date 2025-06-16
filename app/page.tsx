import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, Building, Users, Clock, ChevronRight } from "lucide-react"
import { ResponsiveImage } from "@/components/ui/responsive-image"
import { getUnsplashImage, getCompanyLogo } from "@/lib/image-utils"
import { JobSearch } from "@/components/job-search"

export default function HomePage() {
  const heroImageSrc = getUnsplashImage("photo-1519389950473-47ba0cfaee5d", 800, 600, 80)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Job</h1>
                <p className="text-xl mb-8 text-indigo-100">
                  Connect with top companies and startups. Over 250,000+ jobs available.
                </p>
                <JobSearch />
              </div>
              <div className="md:w-1/2 md:pl-10">
                <ResponsiveImage
                  src={heroImageSrc}
                  alt="Job search illustration"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <Briefcase className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">250,000+</p>
                  <p className="text-gray-600">Active Jobs</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <Building className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50,000+</p>
                  <p className="text-gray-600">Companies</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1M+</p>
                  <p className="text-gray-600">Job Seekers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Job Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Explore jobs in the most in-demand sectors</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/jobs?category=${category.slug}`}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} jobs</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Jobs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Handpicked opportunities from top companies</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <ResponsiveImage
                          src={getCompanyLogo(job.company)}
                          alt={job.company}
                          width={30}
                          height={30}
                          fallbackType="company"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-gray-500">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">{job.type}</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.experience}
                    </div>
                    <Link href={`/jobs/${job.id}`}>
                      <Button
                        variant="outline"
                        className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/jobs">
                <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all flex items-center gap-2">
                  Browse All Jobs
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Companies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Top Companies Hiring</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Leading organizations that trust JobBoard for their hiring needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow min-h-[80px]" // Added min-h for consistent height
                >
                  <span className="text-center font-semibold text-gray-800 text-sm">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Job?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Create your profile now and get noticed by top employers</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 shadow-md transition-all">
                  Create Account
                </Button>
              </Link>
              <Link href="/jobs">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-indigo-500 transition-colors shadow-md"
                >
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Sample data (kept for context, but logos are now dynamically fetched)
const categories = [
  {
    name: "Technology",
    slug: "technology",
    count: "12,568",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Finance",
    slug: "finance",
    count: "5,786",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Marketing",
    slug: "marketing",
    count: "3,942",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    count: "2,835",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    name: "Education",
    slug: "education",
    count: "1,975",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
  {
    name: "Design",
    slug: "design",
    count: "1,562",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  {
    name: "Sales",
    slug: "sales",
    count: "1,346",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    name: "Customer Service",
    slug: "customer-service",
    count: "1,158",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
]

const featuredJobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Tata Consultancy Services",
    type: "Full-time",
    location: "Bangalore",
    experience: "3-5 years",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Infosys",
    type: "Full-time",
    location: "Hyderabad",
    experience: "5-7 years",
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Wipro",
    type: "Full-time",
    location: "Pune",
    experience: "2-4 years",
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "HCL Technologies",
    type: "Full-time",
    location: "Gurgaon",
    experience: "3-6 years",
  },
  {
    id: "5",
    title: "Frontend Developer",
    company: "Tech Mahindra",
    type: "Full-time",
    location: "Noida",
    experience: "2-4 years",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "Cognizant",
    type: "Full-time",
    location: "Chennai",
    experience: "4-6 years",
  },
]

const companies = [
  { name: "Tata Consultancy Services" },
  { name: "Infosys" },
  { name: "Wipro" },
  { name: "HCL Technologies" },
  { name: "Tech Mahindra" },
  { name: "Cognizant" },
  { name: "Amazon India" },
  { name: "PhonePe" },
  { name: "Swiggy" },
  { name: "Zomato" },
  { name: "Paytm" },
  { name: "Flipkart" },
]
