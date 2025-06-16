import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Briefcase, Clock } from "lucide-react"

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <section className="bg-indigo-600 py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Find Your Dream Job</h1>
            <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row shadow-lg">
              <div className="flex-1 flex items-center px-3 mb-2 md:mb-0">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <div className="flex-1 flex items-center px-3 border-t md:border-t-0 md:border-l border-gray-200 mb-2 md:mb-0">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <input type="text" placeholder="City or location" className="w-full outline-none text-gray-700" />
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700">Search Jobs</Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-8 px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" className="text-indigo-600">
                    Clear All
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Job Type */}
                  <div>
                    <h3 className="font-medium mb-3">Job Type</h3>
                    <div className="space-y-2">
                      {["Full-time", "Part-time", "Contract", "Internship", "Remote"].map((type) => (
                        <div key={type} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`type-${type}`}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <h3 className="font-medium mb-3">Experience Level</h3>
                    <div className="space-y-2">
                      {["Entry Level", "Mid Level", "Senior Level", "Manager", "Director"].map((level) => (
                        <div key={level} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`level-${level}`}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`level-${level}`} className="ml-2 text-sm text-gray-700">
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Salary Range */}
                  <div>
                    <h3 className="font-medium mb-3">Salary Range</h3>
                    <div className="space-y-2">
                      {[
                        "₹0 - ₹3,00,000",
                        "₹3,00,000 - ₹6,00,000",
                        "₹6,00,000 - ₹10,00,000",
                        "₹10,00,000 - ₹15,00,000",
                        "₹15,00,000+",
                      ].map((range) => (
                        <div key={range} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`salary-${range}`}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`salary-${range}`} className="ml-2 text-sm text-gray-700">
                            {range}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="font-medium mb-3">Location</h3>
                    <div className="space-y-2">
                      {["Bangalore", "Mumbai", "Delhi NCR", "Hyderabad", "Chennai", "Pune"].map((city) => (
                        <div key={city} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`city-${city}`}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`city-${city}`} className="ml-2 text-sm text-gray-700">
                            {city}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Showing 1-10 of 256 jobs</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="text-sm border rounded-md p-1">
                    <option>Most Relevant</option>
                    <option>Newest</option>
                    <option>Highest Salary</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                          <Image src={job.logo || "/placeholder.svg"} alt={job.company} width={30} height={30} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{job.title}</h3>
                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                              <Badge variant="outline">{job.type}</Badge>
                              {job.isNew && <Badge className="bg-green-500">New</Badge>}
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center text-gray-500 text-sm gap-y-1 md:gap-x-4">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.company}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.posted}
                            </div>
                          </div>
                          <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between">
                            <div className="text-gray-700 mb-2 md:mb-0">
                              <span className="font-medium">{job.salary}</span> • {job.experience} experience
                            </div>
                            <Link href={`/jobs/${job.id}`}>
                              <Button variant="outline">View Details</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-indigo-50">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Sample data
const jobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TCS",
    logo: "/placeholder.svg?height=30&width=30",
    type: "Full-time",
    location: "Bangalore",
    salary: "₹18-24 LPA",
    experience: "3-5 years",
    posted: "2 days ago",
    isNew: true,
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Infosys",
    logo: "/placeholder.svg?height=30&width=30",
    type: "Full-time",
    location: "Hyderabad",
    salary: "₹20-28 LPA",
    experience: "5-7 years",
    posted: "3 days ago",
    isNew: true,
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Wipro",
    logo: "/placeholder.svg?height=30&width=30",
    type: "Full-time",
    location: "Pune",
    salary: "₹12-18 LPA",
    experience: "2-4 years",
    posted: "1 week ago",
    isNew: false,
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "HCL Technologies",
    logo: "/placeholder.svg?height=30&width=30",
    type: "Full-time",
    location: "Gurgaon",
    salary: "₹16-22 LPA",
    experience: "3-6 years",
    posted: "2 weeks ago",
    isNew: false,
  },
  {
    id: "5",
    title: "Frontend Developer",
    company: "Tech Mahindra",
    logo: "/placeholder.svg?height=30&width=30",
    type: "Full-time",
    location: "Noida",
    salary: "₹10-15 LPA",
    experience: "2-4 years",
    posted: "3 weeks ago",
    isNew: false,
  },
]
