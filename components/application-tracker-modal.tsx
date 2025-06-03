"use client"
import { X, FileText, Clock, CheckCircle, XCircle, Award } from "lucide-react"
import { useLocalStorage } from "@/lib/hooks/use-local-storage"
import type { Application } from "@/lib/jobs-data"
import { jobsData } from "@/lib/jobs-data"

interface ApplicationTrackerModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplicationTrackerModal({ isOpen, onClose }: ApplicationTrackerModalProps) {
  const [applications, setApplications] = useLocalStorage<Application[]>("applications", [])

  const getStatusIcon = (status: Application["status"]) => {
    switch (status) {
      case "Applied":
        return <FileText className="text-blue-500" size={20} />
      case "Reviewing":
        return <Clock className="text-yellow-500" size={20} />
      case "Interview":
        return <Award className="text-purple-500" size={20} />
      case "Rejected":
        return <XCircle className="text-red-500" size={20} />
      case "Offer":
        return <CheckCircle className="text-green-500" size={20} />
    }
  }

  const getStatusColor = (status: Application["status"]) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Reviewing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Interview":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "Rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "Offer":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    }
  }

  const getJobDetails = (jobId: number) => {
    return jobsData.find((job) => job.id === jobId)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Application Tracker</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6">
          {applications.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Applications Yet</h3>
              <p className="text-gray-500 dark:text-gray-400">Start applying to jobs and track your progress here!</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {["Applied", "Reviewing", "Interview", "Rejected", "Offer"].map((status) => {
                  const count = applications.filter((app) => app.status === status).length
                  return (
                    <div key={status} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex justify-center mb-2">{getStatusIcon(status as Application["status"])}</div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{count}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{status}</p>
                    </div>
                  )
                })}
              </div>

              <div className="space-y-3">
                {applications.map((application) => {
                  const job = getJobDetails(application.jobId)
                  if (!job) return null

                  return (
                    <div
                      key={application.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <img
                            src={job.logo || "/placeholder.svg"}
                            alt={`${job.company} logo`}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-500">{job.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}
                          >
                            {getStatusIcon(application.status)}
                            {application.status}
                          </span>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Applied {new Date(application.appliedDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
