"use client"

import { useEffect, useState } from "react"

export default function ComicHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Comic book style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600"></div>

      {/* Halftone pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Comic book title */}
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <h1 className="text-8xl md:text-9xl font-black text-white mb-4 transform -skew-y-3 leading-none">
            <span className="block text-yellow-400 text-stroke-black">FIND YOUR</span>
            <span className="block text-red-500 text-stroke-black transform skew-y-6">SUPER JOB!</span>
          </h1>
        </div>

        {/* Speech bubble */}
        <div
          className={`relative mt-8 transform transition-all duration-1000 delay-500 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-8 border-black relative max-w-2xl mx-auto transform rotate-1">
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-t-[30px] border-l-transparent border-r-transparent border-t-black"></div>
              <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-t-[24px] border-l-transparent border-r-transparent border-t-white absolute -top-[26px] left-1/2 transform -translate-x-1/2"></div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-black leading-tight">
              {"Join thousands of HEROES finding their dream careers in our EPIC job universe!"}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div
          className={`mt-12 flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-12 py-6 rounded-2xl font-black text-2xl transform hover:scale-110 transition-all duration-200 shadow-2xl hover:shadow-yellow-400/50 border-4 border-black">
            START ADVENTURE!
          </button>
          <button className="bg-transparent border-4 border-white text-white hover:bg-white hover:text-black px-12 py-6 rounded-2xl font-black text-2xl transform hover:scale-110 transition-all duration-200">
            HIRE A HERO!
          </button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-black text-lg transform -rotate-12 border-4 border-black">
            POW!
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <div className="bg-red-500 text-white px-4 py-2 rounded-full font-black text-lg transform rotate-12 border-4 border-black">
            BOOM!
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-500">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-black text-lg transform -rotate-6 border-4 border-black">
            ZAP!
          </div>
        </div>
      </div>
    </div>
  )
}
