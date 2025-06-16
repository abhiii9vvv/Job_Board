"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Edit, Trash2, MoreVertical, Search, PlusCircle, ArrowUpDown, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { formatDistanceToNow } from "date-fns"

interface Job {
  id: string
  title: string
  company: string
  location: string
  job_type: string
  applications_count: number
  views: number
  is_active: boolean
  created_at: string
}

export function EmployerJobsManagement({ employerId }: { employerId: string }) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const { toast } = useToast()

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      const mockJobs = [
        {
          id: "1",
          title: "Senior Frontend Developer",
          company: "Tech Innovations Inc.",
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
          company: "Creative Solutions Ltd.",
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
          company: "Growth Marketing Co.",
          location: "Austin, TX",
          job_type: "FULL_TIME",
          applications_count: 5,
          views: 120,
          is_active: false,
          created_at: "2024-01-05T00:00:00Z",
        },
        {
          id: "4",
          title: "Data Analyst",
          company: "Analytics Pro Inc.",
          location: "Remote",
          job_type: "FULL_TIME",
          applications_count: 3,
          views: 98,
          is_active: true,
          created_at: "2024-01-03T00:00:00Z",
        },
        {
          id: "5",
          title: "Customer Success Manager",
          company: "SaaS Solutions Ltd.",
          location: "Chicago, IL",
          job_type: "FULL_TIME",
          applications_count: 7,
          views: 156,
          is_active: true,
          created_at: "2024-01-01T00:00:00Z",
        },
      ]

      setJobs(mockJobs)
      setFilteredJobs(mockJobs)
      setIsLoading(false)
    }, 1000)
  }, [employerId])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredJobs(jobs)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = jobs.filter(
        (job) => job.title.toLowerCase().includes(query) || job.location.toLowerCase().includes(query),
      )
      setFilteredJobs(filtered)
    }
  }, [searchQuery, jobs])

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }

    const sorted = [...filteredJobs].sort((a: any, b: any) => {
      if (column === "created_at") {
        return sortDirection === "asc"
          ? new Date(a[column]).getTime() - new Date(b[column]).getTime()
          : new Date(b[column]).getTime() - new Date(a[column]).getTime()
      }

      if (typeof a[column] === "number") {
        return sortDirection === "asc" ? a[column] - b[column] : b[column] - a[column]
      }

      if (typeof a[column] === "boolean") {
        return sortDirection === "asc"
          ? a[column] === b[column]
            ? 0
            : a[column]
              ? -1
              : 1
          : a[column] === b[column]
            ? 0
            : a[column]
              ? 1
              : -1
      }

      return sortDirection === "asc" ? a[column].localeCompare(b[column]) : b[column].localeCompare(a[column])
    })

    setFilteredJobs(sorted)
  }

  const toggleJobStatus = (jobId: string) => {
    setJobs(jobs.map((job) => (job.id === jobId ? { ...job, is_active: !job.is_active } : job)))

    setFilteredJobs(filteredJobs.map((job) => (job.id === jobId ? { ...job, is_active: !job.is_active } : job)))

    const job = jobs.find((j) => j.id === jobId)
    const newStatus = !job?.is_active

    toast({
      title: `Job ${newStatus ? "activated" : "deactivated"}`,
      description: `"${job?.title}" has been ${newStatus ? "activated" : "deactivated"}.`,
    })
  }

  const deleteJob = (jobId: string) => {
    const job = jobs.find((j) => j.id === jobId)

    setJobs(jobs.filter((job) => job.id !== jobId))
    setFilteredJobs(filteredJobs.filter((job) => job.id !== jobId))

    toast({
      title: "Job deleted",
      description: `"${job?.title}" has been deleted.`,
    })
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading...</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please wait while we load your jobs...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle>Job Listings</CardTitle>
            <CardDescription>Manage your job postings</CardDescription>
          </div>
          <Button asChild>
            <Link href="/dashboard/jobs/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Post New Job
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">
                    <Button variant="ghost" className="p-0 h-auto font-medium" onClick={() => handleSort("title")}>
                      Job Title
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    <Button variant="ghost" className="p-0 h-auto font-medium" onClick={() => handleSort("location")}>
                      Location
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("applications_count")}
                    >
                      Applications
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    <Button variant="ghost" className="p-0 h-auto font-medium" onClick={() => handleSort("views")}>
                      Views
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-center">
                    <Button variant="ghost" className="p-0 h-auto font-medium" onClick={() => handleSort("is_active")}>
                      Status
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    <Button variant="ghost" className="p-0 h-auto font-medium" onClick={() => handleSort("created_at")}>
                      Posted
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div>{job.title}</div>
                          <div className="text-sm text-muted-foreground md:hidden">{job.location}</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{job.location}</TableCell>
                      <TableCell className="hidden md:table-cell text-center">{job.applications_count}</TableCell>
                      <TableCell className="hidden md:table-cell text-center">{job.views}</TableCell>
                      <TableCell className="text-center">
                        {job.is_active ? (
                          <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                        ) : (
                          <Badge variant="outline">Inactive</Badge>
                        )}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/jobs/${job.id}`}>
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/dashboard/jobs/${job.id}/edit`}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => toggleJobStatus(job.id)}>
                              {job.is_active ? (
                                <>
                                  <XCircle className="mr-2 h-4 w-4" />
                                  Deactivate
                                </>
                              ) : (
                                <>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Activate
                                </>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-600 focus:text-red-600"
                              onClick={() => deleteJob(job.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                      No jobs found. Try adjusting your search or post a new job.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
