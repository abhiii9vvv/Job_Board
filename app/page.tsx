"use client"

import { useState, useMemo, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SearchBar from "@/components/search-bar"
import AdvancedFilters from "@/components/advanced-filters"
import JobList from "@/components/job-list"
import FloatingCredit from "@/components/floating-credit"
import AbhinavModal from "@/components/abhinav-modal"
import { jobsData } from "@/lib/jobs-data"
import { Linkedin, Github, Heart, Code, TrendingUp, Users, Building, MapPin, Briefcase, Zap } from "lucide-react"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationTerm, setLocationTerm] = useState("")
  const [showAbhinavModal, setShowAbhinavModal] = useState(false)
  const [animateStats, setAnimateStats] = useState(false)
  const [filters, setFilters] = useState({
    type: "All",
    experience: "All",
    industry: "All",
    companySize: "All",
    salaryMin: 0,
    salaryMax: 300000,
    remoteOnly: false,
  })

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimateStats(true)
  }, [])

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesLocation = locationTerm === "" || job.location.toLowerCase().includes(locationTerm.toLowerCase())

      const matchesType = filters.type === "All" || job.type === filters.type
      const matchesExperience = filters.experience === "All" || job.experienceLevel === filters.experience
      const matchesIndustry = filters.industry === "All" || job.industry === filters.industry
      const matchesCompanySize = filters.companySize === "All" || job.companySize === filters.companySize
      const matchesSalary = job.salaryMin >= filters.salaryMin && job.salaryMax <= filters.salaryMax
      const matchesRemote = !filters.remoteOnly || job.remoteOk

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesExperience &&
        matchesIndustry &&
        matchesCompanySize &&
        matchesSalary &&
        matchesRemote
      )
    })
  }, [searchTerm, locationTerm, filters])

  // Count Indian and US jobs
  const indianJobs = jobsData.filter((job) => job.location.includes("India")).length
  const usJobs = jobsData.filter((job) => !job.location.includes("India")).length

  const stats = {
    totalJobs: jobsData.length,
    companies: new Set(jobsData.map((job) => job.company)).size,
    remoteJobs: jobsData.filter((job) => job.remoteOk).length,
    avgSalary: Math.round(
      jobsData.reduce((sum, job) => sum + (job.salaryMin + job.salaryMax) / 2, 0) / jobsData.length,
    ),
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <Hero />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBar
          searchTerm={searchTerm}
          locationTerm={locationTerm}
          onSearchChange={setSearchTerm}
          onLocationChange={setLocationTerm}
        />

        {/* Featured Categories */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Explore <span className="text-teal-600 dark:text-teal-400">Opportunities</span> Across India
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/20 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-teal-200 dark:border-teal-800">
              <div className="bg-teal-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Tech</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">4,500+ jobs</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-100 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/20 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-cyan-200 dark:border-cyan-800">
              <div className="bg-cyan-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Finance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">2,300+ jobs</p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-blue-200 dark:border-blue-800">
              <div className="bg-blue-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Marketing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">1,800+ jobs</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/20 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-indigo-200 dark:border-indigo-800">
              <div className="bg-indigo-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">1,200+ jobs</p>
            </div>
          </div>
        </div>

        {/* Stats Section with animation */}
        <div className="mt-12 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-teal-100 dark:bg-teal-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="text-teal-600 dark:text-teal-400" size={20} />
                  </div>
                  <div
                    className={`text-3xl font-bold text-gray-900 dark:text-white mb-1 ${animateStats ? "animate-count" : ""}`}
                  >
                    {indianJobs}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Jobs in India</p>
                </div>
              </div>

              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Building className="text-cyan-600 dark:text-cyan-400" size={20} />
                  </div>
                  <div
                    className={`text-3xl font-bold text-gray-900 dark:text-white mb-1 ${animateStats ? "animate-count" : ""}`}
                  >
                    {stats.companies}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Companies</p>
                </div>
              </div>

              <div className="p-6 md:p-8 border-r border-gray-100 dark:border-gray-700">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div
                    className={`text-3xl font-bold text-gray-900 dark:text-white mb-1 ${animateStats ? "animate-count" : ""}`}
                  >
                    {stats.remoteJobs}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Remote Jobs</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="text-indigo-600 dark:text-indigo-400" size={20} />
                  </div>
                  <div
                    className={`text-3xl font-bold text-gray-900 dark:text-white mb-1 ${animateStats ? "animate-count" : ""}`}
                  >
                    {usJobs}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Global Jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <AdvancedFilters filters={filters} onFiltersChange={setFilters} />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"} Found
              </h2>
              <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white w-full sm:w-auto">
                <option>Most Recent</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
                <option>Most Relevant</option>
              </select>
            </div>
            <JobList jobs={filteredJobs} />
          </div>
        </div>

        <div className="mt-16 text-center pb-12">
          <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
            Load More Jobs
          </button>
        </div>
      </div>

      {/* Footer with updated theme */}
      <footer className="bg-gradient-to-r from-teal-900 to-cyan-900 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">JobBoard</h3>
              <p className="text-teal-200 mb-6 leading-relaxed">
                Find your dream job with the best companies across India and beyond. Built with modern technologies and
                designed for the best user experience.
              </p>
              <div className="bg-teal-950/50 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-teal-200 mb-3">
                  <Heart className="inline text-red-400 mr-1" size={16} />
                  Made with passion by
                </p>
                <button
                  onClick={() => setShowAbhinavModal(true)}
                  className="text-teal-300 hover:text-teal-100 font-semibold text-lg transition-colors"
                >
                  Abhinav Tiwary
                </button>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://www.linkedin.com/in/abhinav-tiwary-791a63302/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:text-teal-100 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/abhiii9vvv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:text-teal-100 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-teal-200">For Job Seekers</h4>
              <ul className="space-y-3 text-teal-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Salary Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-teal-200">For Employers</h4>
              <ul className="space-y-3 text-teal-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Employer Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-teal-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-teal-300 text-sm">&copy; 2024 JobBoard by Abhinav Tiwary. All rights reserved.</p>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <Code className="text-teal-400" size={16} />
                <span className="text-teal-300 text-sm">Built with React, Next.js & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <FloatingCredit />
      <AbhinavModal isOpen={showAbhinavModal} onClose={() => setShowAbhinavModal(false)} />
    </div>
  )
}
