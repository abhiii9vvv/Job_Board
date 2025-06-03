"use client"

import { MapPin, Clock, DollarSign, Star, ExternalLink, Bookmark, Zap, Users, Building2 } from "lucide-react"
import type { Job } from "@/lib/jobs-data"
import { useState } from "react"
import { useLocalStorage } from "@/lib/hooks/use-local-storage"
import type { Application } from "@/lib/jobs-data"
import AbhinavModal from "./abhinav-modal"
import CompanyReviewsModal from "./company-reviews-modal"

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  const [showModal, setShowModal] = useState(false)
  const [showCompanyModal, setShowCompanyModal] = useState(false)
  const [savedJobs, setSavedJobs] = useLocalStorage<number[]>("savedJobs", [])
  const [applications, setApplications] = useLocalStorage<Application[]>("applications", [])

  const isSaved = savedJobs.includes(job.id)
  const hasApplied = applications.some((app) => app.jobId === job.id)

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700"
      case "Part-time":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700"
      case "Remote":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700"
      case "Contract":
        return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "1 day ago"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return `${Math.ceil(diffDays / 30)} months ago`
  }

  const toggleSaveJob = () => {
    if (isSaved) {
      setSavedJobs(savedJobs.filter((id) => id !== job.id))
    } else {
      setSavedJobs([...savedJobs, job.id])
    }
  }

  const handleApply = () => {
    if (!hasApplied) {
      const newApplication: Application = {
        id: Date.now().toString(),
        jobId: job.id,
        status: "Applied",
        appliedDate: new Date().toISOString(),
        lastUpdate: new Date().toISOString(),
      }
      setApplications([...applications, newApplication])
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-600"}
      />
    ))
  }

  const getLocationIcon = (location: string) => {
    // Indian cities
    if (location.includes("Bangalore")) return "🏙️"
    if (location.includes("Mumbai")) return "🌊"
    if (location.includes("Delhi") || location.includes("Gurgaon") || location.includes("Noida")) return "🏛️"
    if (location.includes("Hyderabad")) return "💎"
    if (location.includes("Pune")) return "🎓"
    if (location.includes("Chennai")) return "🏛️"
    if (location.includes("Mysore")) return "🏰"
    if (location.includes("Remote")) return "🌍"
    // US cities
    if (location.includes("San Francisco")) return "🌉"
    if (location.includes("New York") || location.includes("Brooklyn")) return "🗽"
    if (location.includes("Austin")) return "🎸"
    if (location.includes("Miami")) return "🏖️"
    if (location.includes("Seattle")) return "☕"
    if (location.includes("Cambridge")) return "🎓"
    if (location.includes("Chicago")) return "🏙️"
    if (location.includes("Portland")) return "🌲"
    if (location.includes("Denver")) return "🏔️"
    if (location.includes("Nashville")) return "🎵"
    if (location.includes("Arlington")) return "🏛️"
    if (location.includes("Los Angeles")) return "🌴"
    return "📍"
  }

  const formatSalary = (salary: string) => {
    if (salary.includes("₹")) {
      return salary + " per year"
    }
    return salary
  }

  const getIndianBenefits = (benefits: string[]) => {
    const indianBenefitEmojis: { [key: string]: string } = {
      "Festival Bonuses": "🎉",
      "Festival Celebrations": "🎊",
      "Festival Gifts": "🎁",
      "Food Allowance": "🍽️",
      "Free Meals": "🍛",
      "Biryani Fridays": "🍚",
      "Cab Facility": "🚗",
      "Cab Credits": "🚕",
      "Provident Fund": "💰",
      "Health Insurance": "🏥",
      "Learning Budget": "📚",
      "Gym Access": "💪",
      "Team Outings": "🎯",
      "Product Samples": "💄",
      "Crypto Bonuses": "₿",
      "Stock Options": "📈",
      Equity: "💎",
      "Remote Work": "🏠",
      "Flexible Hours": "⏰",
    }

    return benefits.map((benefit) => ({
      name: benefit,
      emoji: indianBenefitEmojis[benefit] || "✨",
    }))
  }

  const benefitsWithEmojis = getIndianBenefits(job.benefits)

  return (
    <>
      <div
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden group ${
          job.featured ? "ring-2 ring-orange-500 ring-opacity-50" : ""
        }`}
      >
        {(job.featured || job.urgent) && (
          <div
            className={`${
              job.urgent
                ? "bg-gradient-to-r from-red-500 to-orange-500"
                : "bg-gradient-to-r from-orange-500 to-pink-500"
            } text-white text-center py-2 text-sm font-medium flex items-center justify-center gap-2`}
          >
            {job.urgent ? <Zap size={16} /> : <Star size={16} />}
            {job.urgent ? "🚨 Urgent Hiring" : "⭐ Featured Job"}
          </div>
        )}

        {/* Company Image */}
        <div className="h-40 relative overflow-hidden">
          <img
            src={job.companyImage || "/placeholder.svg"}
            alt={`${job.company} office`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-3 right-3">
            <button
              onClick={toggleSaveJob}
              className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                isSaved ? "bg-red-500 text-white" : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
              }`}
            >
              <Bookmark size={16} className={isSaved ? "fill-current" : ""} />
            </button>
          </div>
          {/* Location overlay with emoji */}
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <span>{getLocationIcon(job.location)}</span>
            {job.location}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={job.logo || "/placeholder.svg"}
              alt={`${job.company} logo`}
              className="w-16 h-16 rounded-xl object-cover border-2 border-gray-100 dark:border-gray-600 shadow-sm"
              crossOrigin="anonymous"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-tight">
                  {job.title}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(job.type)} flex-shrink-0`}
                >
                  {job.type}
                </span>
              </div>
              <button
                onClick={() => setShowCompanyModal(true)}
                className="text-gray-600 dark:text-gray-300 font-medium text-lg hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1"
              >
                <Building2 size={16} />
                {job.company}
              </button>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">{renderStars(job.companyRating)}</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{job.companyRating}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{job.experienceLevel}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin size={16} className="text-gray-400" />
              <span className="text-sm font-medium">{job.location}</span>
              {job.remoteOk && (
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
                  🏠 Remote OK
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <DollarSign size={16} className="text-gray-400" />
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                {formatSalary(job.salary)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Clock size={16} className="text-gray-400" />
              <span className="text-sm">{formatDate(job.postedDate)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Users size={16} className="text-gray-400" />
              <span className="text-sm">{job.applicationCount} applicants</span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {job.description}
          </p>

          {/* Skills */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {job.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
              {job.skills.length > 3 && (
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs font-medium">
                  +{job.skills.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Benefits with Indian emojis */}
          {benefitsWithEmojis.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Benefits</h4>
              <div className="flex flex-wrap gap-2">
                {benefitsWithEmojis.slice(0, 2).map((benefit) => (
                  <span
                    key={benefit.name}
                    className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1"
                  >
                    <span>{benefit.emoji}</span>
                    {benefit.name}
                  </span>
                ))}
                {benefitsWithEmojis.length > 2 && (
                  <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-md text-xs font-medium">
                    +{benefitsWithEmojis.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleApply}
              disabled={hasApplied}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                hasApplied
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  : "bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl"
              }`}
            >
              {hasApplied ? "✅ Applied" : "🚀 Apply Now"}
              {!hasApplied && <ExternalLink size={16} />}
            </button>
            <button
              onClick={toggleSaveJob}
              className={`border border-gray-300 dark:border-gray-600 p-3 rounded-lg transition-colors ${
                isSaved
                  ? "text-red-500 border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
                  : "text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500"
              }`}
            >
              <Bookmark size={16} className={isSaved ? "fill-current" : ""} />
            </button>
          </div>

          {/* Made by Abhinav credit */}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <button
              onClick={() => setShowModal(true)}
              className="text-xs text-gray-400 dark:text-gray-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              🇮🇳 Powered by Abhinav's JobBoard
            </button>
          </div>
        </div>
      </div>

      <AbhinavModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <CompanyReviewsModal
        isOpen={showCompanyModal}
        onClose={() => setShowCompanyModal(false)}
        companyName={job.company}
      />
    </>
  )
}
