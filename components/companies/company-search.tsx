"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Building } from "lucide-react"

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Manufacturing",
  "Consulting",
  "Media & Entertainment",
]

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees",
]

export function CompanySearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [location, setLocation] = useState(searchParams.get("location") || "")
  const [industry, setIndustry] = useState(searchParams.get("industry") || "All Industries")
  const [size, setSize] = useState(searchParams.get("size") || "All Sizes")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (location) params.set("location", location)
    if (industry && industry !== "All Industries") params.set("industry", industry)
    if (size && size !== "All Sizes") params.set("size", size)

    router.push(`/companies?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col md:flex-row gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Company name or keyword"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-0 h-12 pl-10 rounded-xl focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="City, state, or remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-0 h-12 pl-10 rounded-xl focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <div className="flex-1 relative">
          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger className="border-0 h-12 pl-10 rounded-xl focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Choose industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Industries">All Industries</SelectItem>
              {industries.map((ind) => (
                <SelectItem key={ind} value={ind}>
                  {ind}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="h-12 px-8 rounded-xl bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap">
          Search Companies
        </Button>
      </div>
    </form>
  )
}
