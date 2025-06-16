import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Briefcase, Users } from "lucide-react"

export default function CompaniesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <section className="bg-indigo-600 py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Discover Top Companies</h1>
            <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row shadow-lg">
              <div className="flex-1 flex items-center px-3 mb-2 md:mb-0">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Company name or industry"
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <div className="flex-1 flex items-center px-3 border-t md:border-t-0 md:border-l border-gray-200 mb-2 md:mb-0">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <input type="text" placeholder="City or location" className="w-full outline-none text-gray-700" />
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700">Search Companies</Button>
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
                  {/* Industry */}
                  <div>
                    <h3 className="font-medium mb-3">Industry</h3>
                    <div className="space-y-2">
                      {["IT Services", "Software", "E-commerce", "Finance", "Healthcare", "Education"].map(
                        (industry) => (
                          <div key={industry} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`industry-${industry}`}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`industry-${industry}`} className="ml-2 text-sm text-gray-700">
                              {industry}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Company Size */}
                  <div>
                    <h3 className="font-medium mb-3">Company Size</h3>
                    <div className="space-y-2">
                      {["1-50", "51-200", "201-500", "501-1000", "1000+"].map((size) => (
                        <div key={size} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`size-${size}`}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`size-${size}`} className="ml-2 text-sm text-gray-700">
                            {size} employees
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

            {/* Company Listings */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Showing 1-10 of 120 companies</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="text-sm border rounded-md p-1">
                    <option>Most Relevant</option>
                    <option>Alphabetical</option>
                    <option>Most Jobs</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {companies.map((company) => (
                  <Card key={company.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                          <Image src={company.logo || "/placeholder.svg"} alt={company.name} width={40} height={40} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{company.name}</h3>
                          <div className="flex flex-wrap text-gray-500 text-sm gap-y-1 gap-x-4 mb-3">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {company.industry}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {company.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {company.size}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-indigo-600">{company.openJobs} open positions</span>
                            <Link href={`/companies/${company.id}`}>
                              <Button variant="outline" size="sm">
                                View Profile
                              </Button>
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
const companies = [
  {
    id: "tcs",
    name: "Tata Consultancy Services",
    logo: "/placeholder.svg?height=40&width=40",
    industry: "IT Services",
    location: "Mumbai",
    size: "400,000+ employees",
    openJobs: 1245,
  },
  {
    id: "infosys",
    name: "Infosys Limited",
    logo: "/placeholder.svg?height=40&width=40",
    industry: "IT Services",
    location: "Bangalore",
    size: "250,000+ employees",
    openJobs: 987,
  },
  {
    id: "wipro",
    name: "Wipro Limited",
    logo: "/placeholder.svg?height=40&width=40",
    industry: "IT Services",
    location: "Bangalore",
    size: "200,000+ employees",
    openJobs: 756,
  },
  {
    id: "hcl",
    name: "HCL Technologies",
    logo: "/placeholder.svg?height=40&width=40",
    industry: "IT Services",
    location: "Noida",
    size: "150,000+ employees",
    openJobs: 632,
  },
  {
    id: "tech-mahindra",
    name: "Tech Mahindra",
    logo: "/placeholder.svg?height=40&width=40",
    industry: "IT Services",
    location: "Pune",
    size: "125,000+ employees",
    openJobs: 521,
  },
  {
    id: "flipkart",
    name: "Flipkart",
    logo: "/placeholder.svg?height=40&width=40",
    industry: "E-commerce",
    location: "Bangalore",
    size: "10,000+ employees",
    openJobs: 342,
  },
]
