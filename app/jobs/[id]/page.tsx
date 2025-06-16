import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MapPin, Calendar, Clock, DollarSign, Share2, Bookmark, ArrowLeft, Users, Globe, Briefcase } from "lucide-react"
import { notFound } from "next/navigation"
import { getJobById, getSimilarJobs } from "@/lib/jobs-data"
import { determineJobCategory, getCompanyOfficeImages, getJobImage } from "@/lib/image-manager"
import { ResponsiveImage } from "@/components/ui/responsive-image"
import { ImageGallery } from "@/components/ui/image-gallery"

export default async function JobDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const job = await getJobById(params.id)

  if (!job) {
    notFound()
  }

  const similarJobs = await getSimilarJobs(job)

  // Determine job category for image selection
  const jobCategory = determineJobCategory(job.title, job.description)

  // Get appropriate images
  const mainImageUrl = getJobImage(jobCategory, "large")
  const companyImages = getCompanyOfficeImages("medium", 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Link href="/jobs" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Link>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Re-enabled main job image */}
              <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center p-3">
                <ResponsiveImage
                  src={mainImageUrl}
                  alt={`${job.title} at ${job.company}`}
                  width={60}
                  height={60}
                  className="object-contain"
                  fallbackType="job" // Ensure fallback type is set
                />
              </div>
              {job.logo && (
                <div className="h-16 w-16 overflow-hidden rounded-md border bg-white p-2">
                  <ResponsiveImage
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                    fallbackType="company" // Ensure fallback type is set
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-xl text-gray-700">{job.company}</p>
                      <Badge variant="secondary">{job.category}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Bookmark className="h-4 w-4" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <DollarSign className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm font-medium">Salary</span>
                    </div>
                    <span className="font-semibold">{job.salary}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Clock className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm font-medium">Experience</span>
                    </div>
                    <span className="font-semibold">{job.experience}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Briefcase className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm font-medium">Job Type</span>
                    </div>
                    <span className="font-semibold">{job.type}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Users className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm font-medium">Company Size</span>
                    </div>
                    <span className="font-semibold">{job.companySize}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Required Skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Save Job
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href={job.companyWebsite || "#"} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      Company Website
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Job Description</h2>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>

              {/* Re-enabled Work Environment section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Work Environment</h2>
                <ImageGallery images={companyImages} alt={`${job.company} office`} className="mb-4" />
                <p className="text-gray-700">
                  Join our dynamic team at {job.company} where innovation meets collaboration. Our modern office spaces
                  are designed to foster creativity and productivity.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
                <p className="text-gray-700 mb-6">
                  Ready to join {job.company}? Submit your application through our secure online portal. Make sure your
                  resume highlights relevant experience and skills that match our requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-600 text-sm font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Submit Your Application</h4>
                      <p className="text-gray-600">
                        Click "Apply Now" and fill out the application form with your details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-600 text-sm font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Initial Screening</h4>
                      <p className="text-gray-600">
                        Our HR team will review your application and contact you within 3-5 business days.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-600 text-sm font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Interview Process</h4>
                      <p className="text-gray-600">Technical and cultural fit interviews with our team members.</p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 mt-6">
                  Apply for this position
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Company Information</h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                    <ResponsiveImage
                      src={job.logo || "/placeholder.svg?height=48&width=48"}
                      alt={job.company}
                      width={48}
                      height={48}
                      className="object-contain"
                      fallbackType="company" // Ensure fallback type is set
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{job.company}</h3>
                    <p className="text-gray-600">{job.companySize}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{job.companyDescription}</p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/companies/${job.company.toLowerCase().replace(/\s+/g, "-")}`}>
                      View Company Profile
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={job.companyWebsite || "#"} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      Visit Website
                    </Link>
                  </Button>
                </div>
              </div>

              {similarJobs.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Similar Jobs</h2>
                  <div className="space-y-4">
                    {similarJobs.map((similarJob) => (
                      <Link
                        key={similarJob.id}
                        href={`/jobs/${similarJob.id}`}
                        className="block border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-semibold mb-1">{similarJob.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {similarJob.company} • {similarJob.location}
                        </p>
                        <p className="text-indigo-600 font-medium">{similarJob.salary}</p>
                      </Link>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href="/jobs">View All Jobs</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
