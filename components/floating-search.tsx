"use client"

import { Search, MapPin, X } from "lucide-react"
import { useState } from "react"

interface FloatingSearchProps {
  searchTerm: string
  locationTerm: string
  selectedType: string
  onSearchChange: (value: string) => void
  onLocationChange: (value: string) => void
  onTypeChange: (type: string) => void
  mousePosition: { x: number; y: number }
}

export default function FloatingSearch({
  searchTerm,
  locationTerm,
  selectedType,
  onSearchChange,
  onLocationChange,
  onTypeChange,
  mousePosition,
}: FloatingSearchProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const jobTypes = ["All", "Full-time", "Part-time", "Remote", "Contract"]

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
      {/* Main search bubble */}
      <div
        className={`relative transition-all duration-500 ${isExpanded ? "scale-110" : "scale-100"}`}
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translate(-50%, -50%)`,
        }}
      >
        {/* Central search hub */}
        <div className="bg-white/95 backdrop-blur-md rounded-full p-8 shadow-2xl border-8 border-black relative">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-black text-2xl transform hover:scale-110 transition-all duration-200 shadow-lg"
          >
            {isExpanded ? <X size={32} /> : <Search size={32} />}
          </button>
        </div>

        {/* Floating search inputs */}
        {isExpanded && (
          <>
            {/* Job search bubble */}
            <div className="absolute -top-20 -left-40 animate-float">
              <div className="bg-yellow-400 rounded-2xl p-4 shadow-xl border-4 border-black transform -rotate-12">
                <div className="flex items-center gap-2">
                  <Search className="text-black" size={20} />
                  <input
                    type="text"
                    placeholder="Job title..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="bg-transparent placeholder-black text-black font-bold outline-none w-40"
                  />
                </div>
              </div>
            </div>

            {/* Location search bubble */}
            <div className="absolute -top-20 -right-40 animate-float-delayed">
              <div className="bg-blue-400 rounded-2xl p-4 shadow-xl border-4 border-black transform rotate-12">
                <div className="flex items-center gap-2">
                  <MapPin className="text-white" size={20} />
                  <input
                    type="text"
                    placeholder="Location..."
                    value={locationTerm}
                    onChange={(e) => onLocationChange(e.target.value)}
                    className="bg-transparent placeholder-white text-white font-bold outline-none w-40"
                  />
                </div>
              </div>
            </div>

            {/* Filter bubbles */}
            {jobTypes.map((type, index) => {
              const angle = index * 72 * (Math.PI / 180) // 360/5 = 72 degrees
              const radius = 120
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div
                  key={type}
                  className="absolute animate-bounce"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <button
                    onClick={() => onTypeChange(type)}
                    className={`px-4 py-2 rounded-full font-black text-sm border-4 border-black transform hover:scale-110 transition-all duration-200 ${
                      selectedType === type
                        ? "bg-red-500 text-white shadow-lg shadow-red-500/50"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {type}
                  </button>
                </div>
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}
