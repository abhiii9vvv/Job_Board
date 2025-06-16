"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Calendar, Globe, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Job {
  id: string
  title: string
  location: string
  job_type: string
  salary_min: number
  salary_max: number
  created_at: string
}

interface Company {
  slug: string
  name: string
  logo: string
  description: string
  website: string
  location: string
  size: string
  founded: string
  industry: string
  jobs: Job[]
}

interface CompanyProfileProps {
  company: Company
}

export function CompanyProfile({ company }: CompanyProfileProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Company Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              {company.logo ? (
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={80}
                  height={80}
                  className="rounded"
                />
              ) : (
                <div className="w-20 h-20 bg-indigo-100 rounded flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold text-2xl">{company.name.charAt(0)}</span>
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">{company.industry}</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" asChild>
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    <Briefcase className="mr-2 h-4 w-4" />
                    View Jobs ({company.jobs.length})
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 text-indigo-500" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4 text-indigo-500" />
                  <span>{company.size}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4 text-indigo-500" />
                  <span>Founded {company.founded}</span>
                </div>
              </div>

              <p className="text-gray-600 max-w-3xl">{company.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>About {company.name}</CardTitle>
                <CardDescription>Learn more about our company and culture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p>
                    {company.name} is a leading company in the {company.industry.toLowerCase()} industry. Founded in{" "}
                    {company.founded}, we have grown to become a trusted partner for businesses worldwide. Our team of{" "}
                    {company.size.toLowerCase()} is dedicated to delivering exceptional results and driving innovation
                    in everything we do.
                  </p>

                  <h4>Our Mission</h4>
                  <p>
                    We strive to create innovative solutions that make a positive impact on our clients and the
                    communities we serve. Our commitment to excellence and continuous improvement drives us to push the
                    boundaries of what's possible.
                  </p>

                  <h4>Why Work With Us?</h4>
                  <ul>
                    <li>Competitive compensation and benefits</li>
                    <li>Flexible work arrangements</li>
                    <li>Professional development opportunities</li>
                    <li>Collaborative and inclusive culture</li>
                    <li>Cutting-edge technology and tools</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Open Positions</CardTitle>
                <CardDescription>Join our team and make an impact</CardDescription>
              </CardHeader>
              <CardContent>
                {company.jobs.length > 0 ? (
                  <div className="space-y-4">
                    {company.jobs.map((job) => (
                      <div key={job.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <Badge className="bg-green-500 hover:bg-green-600">{job.job_type.replace("_", " ")}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span>
                            ${job.salary_min?.toLocaleString()} - ${job.salary_max?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" asChild>
                            <Link href={`/jobs/${job.id}`}>View Details</Link>
                          </Button>
                          <Button size="sm" variant="outline">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No open positions at the moment. Check back later!</p>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Company Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Industry</h4>
                    <p className="text-gray-600">{company.industry}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Company Size</h4>
                    <p className="text-gray-600">{company.size}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Founded</h4>
                    <p className="text-gray-600">{company.founded}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600">{company.location}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Website</h4>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {company.website}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Similar Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm font-semibold">TC</span>
                    </div>
                    <div>
                      <p className="font-medium">TechCorp Solutions</p>
                      <p className="text-sm text-gray-500">Technology • 15 jobs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm font-semibold">DS</span>
                    </div>
                    <div>
                      <p className="font-medium">Digital Systems Inc.</p>
                      <p className="text-sm text-gray-500">Technology • 8 jobs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm font-semibold">IS</span>
                    </div>
                    <div>
                      <p className="font-medium">Innovation Studios</p>
                      <p className="text-sm text-gray-500">Technology • 12 jobs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
