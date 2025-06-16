"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Eye, PlusCircle, BarChart } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface Job {
  id: string
  title: string
  location: string
  job_type: string
  applications_count: number
  views: number
  is_active: boolean
  created_at: string
}

interface Candidate {
  id: string
  name: string
  job: {
    id: string
    title: string
  }
  status: "PENDING" | "REVIEWED" | "ACCEPTED" | "REJECTED"
  created_at: string
}

export function EmployerDashboard({ userId }: { userId: string }) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setJobs([
        {
          id: "1",
          title: "Senior Frontend Developer",
          location: "San Francisco, CA",
          job_type: "FULL_TIME",
          applications_count: 12,
          views: 245,
          is_active: true,
          created_at: "2024-01-15T00:00:00Z",
        },
        {
          id: "2",
          title: "UX/UI Designer",
          location: "New York, NY",
          job_type: "FULL_TIME",
          applications_count: 8,
          views: 187,
          is_active: true,
          created_at: "2024-01-10T00:00:00Z",
        },
        {
          id: "3",
          title: "Marketing Specialist",
          location: "Austin, TX",
          job_type: "FULL_TIME",
          applications_count: 5,
          views: 120,
          is_active: false,
          created_at: "2024-01-05T00:00:00Z",
        },
      ])

      setCandidates([
        {
          id: "1",
          name: "John Doe",
          job: {
            id: "1",
            title: "Senior Frontend Developer",
          },
          status: "PENDING",
          created_at: "2024-01-18T00:00:00Z",
        },
        {
          id: "2",
          name: "Jane Smith",
          job: {
            id: "1",
            title: "Senior Frontend Developer",
          },
          status: "REVIEWED",
          created_at: "2024-01-17T00:00:00Z",
        },
        {
          id: "3",
          name: "Michael Johnson",
          job: {
            id: "2",
            title: "UX/UI Designer",
          },
          status: "ACCEPTED",
          created_at: "2024-01-16T00:00:00Z",
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

  const totalApplications = jobs.reduce((sum, job) => sum + job.applications_count, 0)
  const totalViews = jobs.reduce((sum, job) => sum + job.views, 0)
  const activeJobs = jobs.filter((job) => job.is_active).length

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Profile Completion</CardTitle>
            <CardDescription>Complete your company profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium">80% Complete</span>
                <span className="text-sm text-muted-foreground">8/10</span>
              </div>
              <Progress value={80} className="h-2" />
              <Button variant="outline" size="sm" className="w-full">
                Complete Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Job Listings</CardTitle>
            <CardDescription>Your active job postings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">{jobs.length}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">{activeJobs}</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4" asChild>
              <Link href="/dashboard/jobs">
                <Briefcase className="mr-2 h-4 w-4" />
                Manage Jobs
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Applications</CardTitle>
            <CardDescription>Candidate applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">{totalApplications}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-indigo-600">{totalViews}</p>
                <p className="text-sm text-muted-foreground">Views</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              <Users className="mr-2 h-4 w-4" />
              View Candidates
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Job Listings</CardTitle>
              <CardDescription>Manage your job postings</CardDescription>
            </div>
            <Button size="sm" asChild>
              <Link href="/dashboard/jobs/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Post Job
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" className="space-y-4">
              <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4">
                {jobs
                  .filter((job) => job.is_active)
                  .map((job) => (
                    <div key={job.id} className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {job.location} • {job.applications_count} applications
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/jobs/${job.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/dashboard/jobs/${job.id}`}>
                            <BarChart className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
              </TabsContent>

              <TabsContent value="all" className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">{job.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">
                          {job.location} • {job.applications_count} applications
                        </p>
                        {!job.is_active && (
                          <Badge variant="outline" className="text-xs">
                            Inactive
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/jobs/${job.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/dashboard/jobs/${job.id}`}>
                          <BarChart className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>

            <Button variant="outline" size="sm" className="w-full mt-4" asChild>
              <Link href="/dashboard/jobs">View All Jobs</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Candidates</CardTitle>
            <CardDescription>Latest job applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">{candidate.name}</h3>
                    <p className="text-sm text-muted-foreground">Applied for {candidate.job.title}</p>
                  </div>
                  <Badge className={getStatusColor(candidate.status)}>{candidate.status}</Badge>
                </div>
              ))}

              <Button variant="outline" size="sm" className="w-full">
                View All Candidates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
