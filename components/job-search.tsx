"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function JobSearch() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (searchTerm) params.set("search", searchTerm)
    if (location) params.set("location", location)
    if (category) params.set("category", category)

    router.push(`/jobs?${params.toString()}`)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Job title, keywords, or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 w-full" // Added w-full and pr-4
          />
        </div>

        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="City, state, or remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 pr-4 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 w-full" // Added w-full and pr-4
          />
        </div>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-48 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="IT & Software Development">Technology</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Design & Creative">Design</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Human Resources">Human Resources</SelectItem>
            <SelectItem value="Customer Service">Customer Support</SelectItem>
            <SelectItem value="Operations">Operations</SelectItem>
            <SelectItem value="Healthcare">Healthcare</SelectItem>
            <SelectItem value="Sales">Sales</SelectItem>
            <SelectItem value="Education">Education</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" className="h-12 px-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
          Search Jobs
        </Button>
      </form>
    </div>
  )
}
