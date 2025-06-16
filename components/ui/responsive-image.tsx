"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { getPlaceholderImage } from "@/lib/image-utils"

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  fill?: boolean
  fallbackType?: "job" | "office" | "company" | "avatar"
}

export function ResponsiveImage({
  src,
  alt,
  width = 400,
  height = 300,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75,
  fill = false,
  fallbackType = "job",
  ...props
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    // Set fallback image
    const fallbackSrc = getPlaceholderImage(fallbackType, width, height)
    setImageSrc(fallbackSrc)
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div
          className="absolute inset-0 bg-muted animate-pulse rounded"
          style={{ width: fill ? "100%" : width, height: fill ? "100%" : height }}
        />
      )}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          fill ? "object-cover" : "",
        )}
        sizes={sizes}
        quality={quality}
        priority={priority}
        fill={fill}
        onLoad={handleLoadingComplete}
        onError={handleError}
        {...props}
      />
    </div>
  )
}
