"use client"

import { useState } from "react"
import { X, Star, Building, Users, Calendar, MapPin, Globe } from "lucide-react"
import { companiesData } from "@/lib/jobs-data"

interface CompanyReviewsModalProps {
  isOpen: boolean
  onClose: () => void
  companyName?: string
}

interface Review {
  id: string
  rating: number
  title: string
  pros: string
  cons: string
  author: string
  position: string
  date: string
  recommend: boolean
}

const sampleReviews: Review[] = [
  {
    id: "1",
    rating: 4.5,
    title: "Amazing office culture and beautiful workspace",
    pros: "Stunning office views, excellent work-life balance, supportive management, great benefits, modern equipment, free gourmet lunch",
    cons: "Sometimes fast-paced environment can be stressful, parking can be expensive in downtown area",
    author: "Current Employee",
    position: "Software Engineer",
    date: "2024-01-10",
    recommend: true,
  },
  {
    id: "2",
    rating: 4.0,
    title: "Great company with beautiful office space",
    pros: "Competitive salary, modern office with great views, flexible working hours, good team collaboration, excellent location",
    cons: "Limited career advancement opportunities, could improve communication between departments",
    author: "Former Employee",
    position: "Product Manager",
    date: "2023-12-15",
    recommend: true,
  },
  {
    id: "3",
    rating: 4.8,
    title: "Best office I've ever worked in!",
    pros: "Incredible office design, innovative projects, smart colleagues, good learning environment, amazing city location",
    cons: "High expectations, sometimes unclear requirements, work can be demanding during crunch time",
    author: "Current Employee",
    position: "UX Designer",
    date: "2023-11-20",
    recommend: true,
  },
]

export default function CompanyReviewsModal({ isOpen, onClose, companyName }: CompanyReviewsModalProps) {
  const [selectedCompany, setSelectedCompany] = useState(companyName || "")

  const company = companiesData.find((c) => c.name === selectedCompany)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
    ))
  }

  const getLocationEmoji = (location: string) => {
    if (location.includes("San Francisco")) return "🌉"
    if (location.includes("Brooklyn")) return "🗽"
    if (location.includes("Austin")) return "🎸"
    return "📍"
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Company Reviews</h2>
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Company</label>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">Choose a company</option>
              {companiesData.map((company) => (
                <option key={company.id} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>

          {company ? (
            <div className="space-y-6">
              {/* Company Overview with Real Photos */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>
                </div>

                <div className="flex items-start gap-6 relative">
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className="w-20 h-20 rounded-xl object-cover border-4 border-white shadow-lg"
                    crossOrigin="anonymous"
                  />
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{company.name}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        {renderStars(company.rating)}
                        <span className="ml-2 font-semibold text-gray-900 dark:text-white text-lg">
                          {company.rating}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">({company.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{company.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                        <Users className="text-blue-500" size={16} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{company.size}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                        <Building className="text-green-500" size={16} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{company.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                        <Calendar className="text-purple-500" size={16} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Founded {company.founded}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                        <MapPin className="text-orange-500" size={16} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-1">
                          {getLocationEmoji(company.headquarters)}
                          {company.headquarters}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        <Globe size={16} />
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Star className="text-yellow-400" size={20} />
                  Employee Reviews
                </h4>
                {sampleReviews.map((review) => (
                  <div
                    key={review.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {renderStars(review.rating)}
                          <span className="font-semibold text-gray-900 dark:text-white">{review.rating}</span>
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">{review.title}</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {review.author} - {review.position} • {new Date(review.date).toLocaleDateString()}
                        </p>
                      </div>
                      {review.recommend && (
                        <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium">
                          ✓ Recommends
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h6 className="font-medium text-green-700 dark:text-green-400 mb-2 flex items-center gap-1">
                          ✓ Pros
                        </h6>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{review.pros}</p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h6 className="font-medium text-red-700 dark:text-red-400 mb-2 flex items-center gap-1">
                          ⚠ Cons
                        </h6>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{review.cons}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Review CTA */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Share Your Experience</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Help others by sharing your experience working at {company.name}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Write a Review
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Building className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Select a Company</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Choose a company to view reviews, ratings, and office photos.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
