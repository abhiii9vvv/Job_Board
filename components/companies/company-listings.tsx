"use client"

import { useState, useEffect } from "react"
import { CompanyCard } from "@/components/companies/company-card"
import { CompanyCardSkeleton } from "@/components/companies/company-card-skeleton"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

interface Company {
  id: string
  name: string
  logo: string | null
  description: string
  location: string
  industry: string
  size: string
  jobCount: number
}

export function CompanyListings() {
  const searchParams = useSearchParams()
  const [companies, setCompanies] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      const mockCompanies = [
        {
          id: "1",
          name: "Tata Consultancy Services",
          logo: "/images/logos/tcs.svg",
          description:
            "A leading global IT services, consulting and business solutions organization with 500,000+ employees worldwide.",
          location: "Mumbai, Maharashtra",
          industry: "Information Technology",
          size: "500,000+ employees",
          jobCount: 2847,
        },
        {
          id: "2",
          name: "Infosys Limited",
          logo: "/images/logos/infosys.svg",
          description:
            "A global leader in next-generation digital services and consulting, helping enterprises reimagine their businesses.",
          location: "Bangalore, Karnataka",
          industry: "Information Technology",
          size: "250,000+ employees",
          jobCount: 1923,
        },
        {
          id: "3",
          name: "Wipro Limited",
          logo: "/images/logos/wipro.svg",
          description:
            "A leading technology services and consulting company focused on building innovative solutions for digital transformation.",
          location: "Bangalore, Karnataka",
          industry: "Information Technology",
          size: "200,000+ employees",
          jobCount: 1456,
        },
        {
          id: "4",
          name: "HCL Technologies",
          logo: "/images/logos/hcl.svg",
          description:
            "A next-generation global technology company helping enterprises reimagine their businesses for the digital age.",
          location: "Noida, Uttar Pradesh",
          industry: "Information Technology",
          size: "150,000+ employees",
          jobCount: 1234,
        },
        {
          id: "5",
          name: "Tech Mahindra",
          logo: "/images/logos/tech-mahindra.svg",
          description:
            "A leading provider of digital transformation, consulting and business re-engineering services and solutions.",
          location: "Pune, Maharashtra",
          industry: "Information Technology",
          size: "125,000+ employees",
          jobCount: 987,
        },
        {
          id: "6",
          name: "Flipkart",
          logo: "/images/logos/flipkart.svg",
          description:
            "India's leading e-commerce marketplace offering a wide range of products with innovative technology solutions.",
          location: "Bangalore, Karnataka",
          industry: "E-commerce",
          size: "50,000+ employees",
          jobCount: 756,
        },
        {
          id: "7",
          name: "Amazon India",
          logo: "/images/logos/amazon.png",
          description:
            "The Indian subsidiary of Amazon, providing e-commerce, cloud computing, and digital streaming services.",
          location: "Bangalore, Karnataka",
          industry: "E-commerce & Cloud",
          size: "100,000+ employees",
          jobCount: 1567,
        },
        {
          id: "8",
          name: "Paytm",
          logo: "/images/logos/paytm.svg",
          description: "India's leading digital payments and financial services company serving 350+ million users.",
          location: "Noida, Uttar Pradesh",
          industry: "Fintech",
          size: "10,000+ employees",
          jobCount: 432,
        },
        {
          id: "9",
          name: "Zomato",
          logo: "/images/logos/zomato.svg",
          description:
            "India's largest food delivery platform connecting millions of customers with restaurants across 1000+ cities.",
          location: "Gurugram, Haryana",
          industry: "Food Technology",
          size: "5,000+ employees",
          jobCount: 298,
        },
        {
          id: "10",
          name: "Swiggy",
          logo: "/images/logos/swiggy.png",
          description:
            "India's leading on-demand delivery platform for food, groceries, and essentials across 500+ cities.",
          location: "Bangalore, Karnataka",
          industry: "Food Technology",
          size: "5,000+ employees",
          jobCount: 345,
        },
        {
          id: "11",
          name: "PhonePe",
          logo: "/images/logos/phonepe.png",
          description:
            "India's leading digital payments platform with 400+ million registered users and innovative fintech solutions.",
          location: "Bangalore, Karnataka",
          industry: "Fintech",
          size: "3,000+ employees",
          jobCount: 234,
        },
        {
          id: "12",
          name: "Razorpay",
          logo: "/images/logos/razorpay.png",
          description:
            "India's leading payment gateway and financial services company powering digital payments for businesses.",
          location: "Bangalore, Karnataka",
          industry: "Fintech",
          size: "2,000+ employees",
          jobCount: 187,
        },
        {
          id: "13",
          name: "BYJU'S",
          logo: "/images/logos/byjus.png",
          description:
            "The world's leading edtech company providing personalized learning experiences for students globally.",
          location: "Bangalore, Karnataka",
          industry: "Education Technology",
          size: "15,000+ employees",
          jobCount: 456,
        },
        {
          id: "14",
          name: "Ola",
          logo: "/images/logos/ola.png",
          description:
            "India's largest mobility platform providing ride-hailing, food delivery, and financial services.",
          location: "Bangalore, Karnataka",
          industry: "Transportation",
          size: "5,000+ employees",
          jobCount: 289,
        },
        {
          id: "15",
          name: "Freshworks",
          logo: "/images/logos/freshworks.png",
          description: "A leading SaaS company providing customer experience software for businesses worldwide.",
          location: "Chennai, Tamil Nadu",
          industry: "Software as a Service",
          size: "4,000+ employees",
          jobCount: 312,
        },
        {
          id: "16",
          name: "Zoho Corporation",
          logo: "/images/logos/zoho.png",
          description:
            "A leading software development company offering a comprehensive suite of business applications.",
          location: "Chennai, Tamil Nadu",
          industry: "Software as a Service",
          size: "12,000+ employees",
          jobCount: 567,
        },
      ]

      setCompanies(mockCompanies)
      setIsLoading(false)
    }, 1000)
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <CompanyCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (!companies.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No companies found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Top Companies in India</h2>
        <p className="text-gray-600">Discover career opportunities with India's leading employers</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" onClick={() => setPage(page + 1)}>
          Load More Companies
        </Button>
      </div>
    </div>
  )
}
