"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, FileText, Eye, Clock, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface Application {
  id: string
  job: {
    id: string
    title: string
    company: string
    location: string
  }
  status: "PENDING" | "REVIEWED" | "ACCEPTED" | "REJECTED"
  created_at: string
}

interface SavedJob {
  id: string
  title: string
  company: string
  location: string
  job_type: string
}

export function JobSeekerDashboard({ userId }: { userId: string }) {
  const [applications, setApplications] = useState<Application[]>([])
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setApplications([
        {
          id: "1",
          job: {
            id: "1",
            title: "Frontend Developer",
            company: "Tech Innovations Inc.",
            location: "San Francisco, CA",
          },
          status: "PENDING",
          created_at: "2024-01-15T00:00:00Z",
        },
        {
          id: "2",
          job: {
            id: "2",
            title: "UX/UI Designer",
            company: "Creative Solutions Ltd.",
            location: "New York, NY",
          },
          status: "REVIEWED",
          created_at: "2024-01-10T00:00:00Z",
        },
        {
          id: "3",
          job: {
            id: "3",
            title: "Marketing Specialist",
            company: "Growth Marketing Co.",
            location: "Austin, TX",
          },
          status: "ACCEPTED",
          created_at: "2024-01-05T00:00:00Z",
        },
      ])

      setSavedJobs([
        {
          id: "4",
          title: "Data Analyst",
          company: "Analytics Pro Inc.",
          location: "Remote",
          job_type: "FULL_TIME",
        },
        {
          id: "5",
          title: "Customer Success Manager",
          company: "SaaS Solutions Ltd.",
          location: "Chicago, IL",
          job_type: "FULL_TIME",
        },
      ])

      setIsLoading(false)
    }, 1000)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "REVIEWED":
        return "bg-blue-500 hover:bg-blue-600"
      case "ACCEPTED":
        return "bg-green-500 hover:bg-green-600"
      case "REJECTED":
        return "bg-red-500 hover:bg-red-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Clock className="h-4 w-4" />
      case "REVIEWED":
        return <Eye className="h-4 w-4" />
      case "ACCEPTED":
        return <CheckCircle className="h-4 w-4" />
      case "REJECTED":
        return <XCircle className="h-4 w-4" />
      default:
        return null
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Loading...</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Please wait while we load your dashboard...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Profile Completion</CardTitle>
            <CardDescription>Complete your profile to increase visibility</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium">70% Complete</span>
                <span className="text-sm text-muted-foreground">7/10</span>
              </div>
              <Progress value={70} className="h-2" />
              <Button variant="outline" size="sm" className="w-full">
                Complete Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Applications</CardTitle>
            <CardDescription>Your job application status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">{applications.length}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">1</p>
                <p className="text-sm text-muted-foreground">Accepted</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4" asChild>
              <Link href="/dashboard/applications">
                <FileText className="mr-2 h-4 w-4" />
                View Applications
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Saved Jobs</CardTitle>
            <CardDescription>Jobs you've bookmarked</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">{savedJobs.length}</p>
                <p className="text-sm text-muted-foreground">Saved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-indigo-600">12</p>
                <p className="text-sm text-muted-foreground">New Jobs</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4" asChild>
              <Link href="/jobs">
                <Briefcase className="mr-2 h-4 w-4" />
                Browse Jobs
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Your most recent job applications</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="accepted">Accepted</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {applications.length > 0 ? (
                  applications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">{application.job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {application.job.company} • {application.job.location}
                        </p>
                      </div>
                      <Badge className={getStatusColor(application.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(application.status)}
                          {application.status}
                        </span>
                      </Badge>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No applications yet.</p>
                )}

                {applications.length > 0 && (
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/applications">View All Applications</Link>
                  </Button>
                )}
              </TabsContent>

              <TabsContent value="pending" className="space-y-4">
                {applications
                  .filter((a) => a.status === "PENDING")
                  .map((application) => (
                    <div key={application.id} className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">{application.job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {application.job.company} • {application.job.location}
                        </p>
                      </div>
                      <Badge className={getStatusColor(application.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(application.status)}
                          {application.status}
                        </span>
                      </Badge>
                    </div>
                  ))}
              </TabsContent>

              <TabsContent value="accepted" className="space-y-4">
                {applications
                  .filter((a) => a.status === "ACCEPTED")
                  .map((application) => (
                    <div key={application.id} className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">{application.job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {application.job.company} • {application.job.location}
                        </p>
                      </div>
                      <Badge className={getStatusColor(application.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(application.status)}
                          {application.status}
                        </span>
                      </Badge>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Saved Jobs</CardTitle>
            <CardDescription>Jobs you've saved for later</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {savedJobs.length > 0 ? (
                savedJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {job.company} • {job.location}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/jobs/${job.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSavedJobs(savedJobs.filter((j) => j.id !== job.id))
                          toast({
                            title: "Job removed",
                            description: "Job has been removed from your saved list",
                          })
                        }}
                      >
                        <XCircle className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No saved jobs yet.</p>
              )}

              {savedJobs.length > 0 && (
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/jobs">Browse More Jobs</Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
