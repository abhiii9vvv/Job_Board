"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, TrendingUp, Calculator, Headphones, Users, Building, Stethoscope } from "lucide-react"

const categories = [
  {
    name: "IT & Software Development",
    count: "45,000+ jobs",
    icon: Code,
    href: "/jobs?category=IT%20%26%20Software%20Development",
  },
  {
    name: "Design & Creative",
    count: "12,000+ jobs",
    icon: Palette,
    href: "/jobs?category=Design%20%26%20Creative",
  },
  {
    name: "Marketing & Digital",
    count: "18,000+ jobs",
    icon: TrendingUp,
    href: "/jobs?category=Marketing%20%26%20Digital",
  },
  {
    name: "Finance & Accounting",
    count: "15,000+ jobs",
    icon: Calculator,
    href: "/jobs?category=Finance%20%26%20Accounting",
  },
  {
    name: "Customer Support",
    count: "8,000+ jobs",
    icon: Headphones,
    href: "/jobs?category=Customer%20Support",
  },
  {
    name: "Human Resources",
    count: "6,000+ jobs",
    icon: Users,
    href: "/jobs?category=Human%20Resources",
  },
  {
    name: "Business & Consulting",
    count: "10,000+ jobs",
    icon: Building,
    href: "/jobs?category=Business%20%26%20Consulting",
  },
  {
    name: "Healthcare",
    count: "7,000+ jobs",
    icon: Stethoscope,
    href: "/jobs?category=Healthcare",
  },
]

export function JobCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Jobs by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore opportunities across various industries and find the perfect role that matches your skills and
            interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.name} href={category.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
