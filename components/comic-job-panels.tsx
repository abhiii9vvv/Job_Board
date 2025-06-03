"use client"

import { MapPin, Clock, DollarSign, Star, Zap } from "lucide-react"
import type { Job } from "@/lib/jobs-data"

interface ComicJobPanelsProps {
  jobs: Job[]
}

export default function ComicJobPanels({ jobs }: ComicJobPanelsProps) {
  const getPanelStyle = (index: number) => {
    const styles = [
      "col-span-2 row-span-2", // Large panel
      "col-span-1 row-span-1", // Small panel
      "col-span-1 row-span-2", // Tall panel
      "col-span-2 row-span-1", // Wide panel
    ]
    return styles[index % styles.length]
  }

  const getPanelColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "from-green-400 to-emerald-600"
      case "Part-time":
        return "from-yellow-400 to-orange-500"
      case "Remote":
        return "from-blue-400 to-cyan-600"
      case "Contract":
        return "from-purple-400 to-pink-600"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  const getComicEffect = (index: number) => {
    const effects = ["POW!", "BOOM!", "ZAP!", "BANG!", "WOW!", "EPIC!", "HERO!", "WIN!"]
    return effects[index % effects.length]
  }

  if (jobs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-8 border-black transform rotate-1 max-w-md mx-auto">
            <h3 className="text-4xl font-black text-black mb-4">OH NO!</h3>
            <p className="text-xl font-bold text-gray-700">No heroes found for this quest!</p>
            <div className="mt-6">
              <div className="bg-red-500 text-white px-6 py-3 rounded-full font-black text-lg transform -rotate-3 border-4 border-black inline-block">
                TRY AGAIN!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-black text-white mb-4 transform -skew-x-12">
          <span className="text-yellow-400">HERO</span> <span className="text-red-500">OPPORTUNITIES</span>
        </h2>
        <p className="text-2xl font-bold text-white/80">Choose your adventure!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        {jobs.map((job, index) => (
          <div key={job.id} className={`${getPanelStyle(index)} group cursor-pointer`}>
            <div
              className={`h-full bg-gradient-to-br ${getPanelColor(job.type)} rounded-3xl p-6 shadow-2xl border-8 border-black transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Comic effect badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-black text-sm border-4 border-black transform rotate-12 animate-pulse">
                {getComicEffect(index)}
              </div>

              {/* Job content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    className="w-12 h-12 rounded-xl border-4 border-black shadow-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-black text-lg leading-tight mb-1 group-hover:text-yellow-300 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-white/90 font-bold text-sm">{job.company}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin size={16} />
                    <span className="font-bold">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <DollarSign size={16} />
                    <span className="font-bold">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Clock size={16} />
                    <span className="font-bold">{Math.floor(Math.random() * 7) + 1} days ago</span>
                  </div>
                </div>

                <p className="text-white/80 text-sm font-medium mb-4 line-clamp-3">{job.description}</p>

                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-xl font-black text-sm transform hover:scale-105 transition-all duration-200 border-4 border-black">
                    APPLY NOW!
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-xl border-4 border-black transform hover:scale-105 transition-all duration-200">
                    <Star size={16} />
                  </button>
                </div>
              </div>

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4">
                  <Zap size={24} className="text-white animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Star size={20} className="text-white animate-spin" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load more section */}
      <div className="text-center mt-16">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-8 border-black transform -rotate-1 inline-block">
          <h3 className="text-3xl font-black text-black mb-4">WANT MORE ADVENTURES?</h3>
          <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-black text-xl transform hover:scale-110 transition-all duration-200 shadow-lg border-4 border-black">
            LOAD MORE HEROES!
          </button>
        </div>
      </div>
    </div>
  )
}
