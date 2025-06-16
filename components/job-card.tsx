import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { determineJobCategory, getJobImage } from "@/lib/image-manager"
import { ResponsiveImage } from "@/components/ui/responsive-image"
import type { Job } from "@/types/job"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  const { id, title, company, location, type, salary, posted, logo, skills = [] } = job

  // Determine job category for image selection
  const jobCategory = determineJobCategory(title, job.description)

  // Get appropriate image
  const imageUrl = getJobImage(jobCategory, "medium")

  return (
    <Link href={`/jobs/${id}`}>
      <Card className="h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
        <div className="relative h-40 w-full overflow-hidden">
          <ResponsiveImage
            src={imageUrl}
            alt={`${title} at ${company}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          {logo && (
            <div className="absolute bottom-4 left-4 h-12 w-12 overflow-hidden rounded-md bg-white p-1 shadow-sm">
              <ResponsiveImage
                src={logo}
                alt={`${company} logo`}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="outline" className="bg-primary/5 text-xs font-normal">
              {type}
            </Badge>
            <span className="text-xs text-muted-foreground">{posted}</span>
          </div>
          <h3 className="line-clamp-2 mb-1 font-semibold leading-tight">{title}</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            {company} • {location}
          </p>
          <p className="mb-3 text-sm font-medium">{salary}</p>
          <div className="flex flex-wrap gap-1">
            {skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs font-normal">
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge variant="secondary" className="text-xs font-normal">
                +{skills.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
