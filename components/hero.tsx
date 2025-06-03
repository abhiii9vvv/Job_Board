"use client"

import type React from "react"

import { useState, useEffect } from "react"
import AbhinavModal from "./abhinav-modal"
import { ChevronRight, Search, MapPin, Briefcase } from "lucide-react"

export default function Hero() {
  const [showModal, setShowModal] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [locationQuery, setLocationQuery] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery, "in", locationQuery)
  }

  return (
    <>
      <div className="relative bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Modern office workspace"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 via-cyan-600/80 to-blue-600/80"></div>
        </div>

        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative">
          <div className="text-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Find Your Dream Job in
                <span className="block text-cyan-300">India & Beyond 🇮🇳</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                Discover opportunities from Bangalore to San Francisco, from Indian startups to global tech giants. Your
                next career move awaits in the world's largest democracy and beyond.
              </p>
            </div>

            {/* Hero search form */}
            <div
              className={`max-w-4xl mx-auto mb-10 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <form
                onSubmit={handleSearch}
                className="bg-white/10 backdrop-blur-md p-3 rounded-xl flex flex-col md:flex-row gap-3"
              >
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-300" size={20} />
                  <input
                    type="text"
                    placeholder="Job title, skills or company"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/20 text-white placeholder-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 border border-white/30"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-300" size={20} />
                  <input
                    type="text"
                    placeholder="City, state or remote"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/20 text-white placeholder-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 border border-white/30"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap transform hover:scale-105 active:scale-95"
                >
                  <Briefcase size={20} />
                  <span className="hidden sm:inline">Find Jobs</span>
                </button>
              </form>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <button className="group bg-white text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Browse All Jobs
                <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Post a Job
                <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div
              className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <button
                onClick={() => setShowModal(true)}
                className="text-cyan-200 hover:text-white text-sm underline transition-colors"
              >
                Crafted with 💖 by Abhinav Tiwary
              </button>
            </div>
          </div>

          {/* Featured Locations with Indian Cities */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {[
              { city: "🏙️ Bangalore", jobs: "2,847 jobs" },
              { city: "🌊 Mumbai", jobs: "1,956 jobs" },
              { city: "🏛️ Delhi NCR", jobs: "1,634 jobs" },
              { city: "🌍 Remote", jobs: "4,521 jobs" },
            ].map((location, index) => (
              <div
                key={location.city}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-white">{location.city}</h3>
                <p className="text-cyan-200 text-sm">{location.jobs}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AbhinavModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
