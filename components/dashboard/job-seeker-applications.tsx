"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Trash2, MoreVertical, Search, ArrowUpDown, Clock, CheckCircle, XCircle, FileText } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { formatDistanceToNow } from "date-fns"

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

export function JobSeekerApplications({ userId }: { userId: string }) {
  const [applications, setApplications] = useState<Application[]>([])
  const [filteredApplications, setFilteredApplications] = useState<Application[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const { toast } = useToast()

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      const mockApplications = [
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
        {
          id: "4",
          job: {
            id: "4",
            title: "Data Analyst",
            company: "Analytics Pro Inc.",
            location: "Remote",
          },
          status: "REJECTED",
          created_at: "2024-01-03T00:00:00Z",
        },
        {
          id: "5",
          job: {
            id: "5",
            title: "Customer Success Manager",
            company: "SaaS Solutions Ltd.",
            location: "Chicago, IL",
          },
          status: "PENDING",
          created_at: "2024-01-01T00:00:00Z",
        },
      ]

      setApplications(mockApplications)
      setFilteredApplications(mockApplications)
      setIsLoading(false)
    }, 1000)
  }, [userId])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredApplications(applications)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = applications.filter(
        (app) =>
          app.job.title.toLowerCase().includes(query) ||
          app.job.company.toLowerCase().includes(query) ||
          app.job.location.toLowerCase().includes(query),
      )
      setFilteredApplications(filtered)
    }
  }, [searchQuery, applications])

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }

    const sorted = [...filteredApplications].sort((a: any, b: any) => {
      if (column === "created_at") {
        return sortDirection === "asc"
          ? new Date(a[column]).getTime() - new Date(b[column]).getTime()
          : new Date(b[column]).getTime() - new Date(a[column]).getTime()
      }

      if (column === "job.title") {
        return sortDirection === "asc" ? a.job.title.localeCompare(b.job.title) : b.job.title.localeCompare(a.job.title)
      }

      if (column === "job.company") {
        return sortDirection === "asc"
          ? a.job.company.localeCompare(b.job.company)
          : b.job.company.localeCompare(a.job.company)
      }

      return sortDirection === "asc" ? a[column].localeCompare(b[column]) : b[column].localeCompare(a[column])
    })

    setFilteredApplications(sorted)
  }

  const deleteApplication = (applicationId: string) => {
    const application = applications.find((a) => a.id === applicationId)

    setApplications(applications.filter((app) => app.id !== applicationId))
    setFilteredApplications(filteredApplications.filter((app) => app.id !== applicationId))

    toast({
      title: "Application withdrawn",
      description: `Your application for "${application?.job.title}" has been withdrawn.`,
    })
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
      <Card>
        <CardHeader>
          <CardTitle>Loading...</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please wait while we load your applications...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Job Applications</CardTitle>
          <CardDescription>Track the status of your job applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search applications..."
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
                    <Button variant="ghost" className="p-0 h-auto font-medium" onClick={() => handleSort("job.title")}>
                      Job Title
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("job.company")}
                    >
                      Company
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("job.location")}
                    >
                      Location
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-center">
                    <Button variant="ghost" className="p-0 h-auto font-medium" onClick={() => handleSort("status")}>
                      Status
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    <Button variant="ghost" className="p-0 h-auto font-medium" onClick={() => handleSort("created_at")}>
                      Applied
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div>{application.job.title}</div>
                          <div className="text-sm text-muted-foreground md:hidden">{application.job.company}</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{application.job.company}</TableCell>
                      <TableCell className="hidden md:table-cell">{application.job.location}</TableCell>
                      <TableCell className="text-center">
                        <Badge className={getStatusColor(application.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(application.status)}
                            {application.status}
                          </span>
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
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
                              <Link href={`/jobs/${application.job.id}`}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Job
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/dashboard/applications/${application.id}`}>
                                <FileText className="mr-2 h-4 w-4" />
                                View Application
                              </Link>
                            </DropdownMenuItem>
                            {application.status === "PENDING" && (
                              <DropdownMenuItem
                                className="text-red-600 focus:text-red-600"
                                onClick={() => deleteApplication(application.id)}
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Withdraw
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                      No applications found. Try adjusting your search or apply for jobs.
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
