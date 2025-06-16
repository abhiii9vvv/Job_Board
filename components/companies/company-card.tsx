import Link from "next/link"
import Image from "next/image"
import { MapPin, Users, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

interface CompanyCardProps {
  company: Company
}

export function CompanyCard({ company }: CompanyCardProps) {
  const companySlug = company.name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")

  return (
    <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-all duration-300 group">
      <div className="flex gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
          {company.logo ? (
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              width={48}
              height={48}
              className="rounded"
            />
          ) : (
            <div className="w-12 h-12 bg-indigo-100 rounded flex items-center justify-center">
              <span className="text-indigo-600 font-semibold text-lg">{company.name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-indigo-600 transition-colors">{company.name}</h3>
          <Badge variant="outline" className="mb-2">
            {company.industry}
          </Badge>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{company.description}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>{company.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Users className="h-4 w-4" />
          <span>{company.size}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Briefcase className="h-4 w-4" />
          <span>{company.jobCount} open positions</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Link href={`/companies/${companySlug}`} className="flex-1">
          <Button variant="outline" className="w-full group-hover:border-indigo-600 group-hover:text-indigo-600">
            View Company
          </Button>
        </Link>
        <Link href={`/jobs?company=${encodeURIComponent(company.name)}`}>
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
            View Jobs
          </Button>
        </Link>
      </div>
    </div>
  )
}
