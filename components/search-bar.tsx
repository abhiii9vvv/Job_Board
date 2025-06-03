"use client"

import { Search, MapPin, Filter } from "lucide-react"

interface SearchBarProps {
  searchTerm: string
  locationTerm: string
  onSearchChange: (value: string) => void
  onLocationChange: (value: string) => void
}

export default function SearchBar({ searchTerm, locationTerm, onSearchChange, onLocationChange }: SearchBarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl -mt-12 relative z-10 max-w-5xl mx-auto border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-orange-200/20 dark:hover:shadow-orange-500/10">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
          />
        </div>
        <div className="flex-1 relative">
          <MapPin
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
            size={20}
          />
          <input
            type="text"
            placeholder="City, state, or remote"
            value={locationTerm}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 w-full lg:w-auto">
            Search Jobs
          </button>
          <button className="border border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 p-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
            <Filter size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
