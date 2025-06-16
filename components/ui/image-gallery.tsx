"use client"

import { useState } from "react"
import { ResponsiveImage } from "./responsive-image"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: string[]
  alt: string
  className?: string
}

export function ImageGallery({ images, alt, className }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <ResponsiveImage
          src={images[selectedIndex]}
          alt={`${alt} - Image ${selectedIndex + 1}`}
          fill
          className="w-full h-full"
          priority={selectedIndex === 0}
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border-2",
                selectedIndex === index ? "border-primary" : "border-transparent hover:border-muted-foreground/50",
              )}
            >
              <ResponsiveImage
                src={image}
                alt={`${alt} - Thumbnail ${index + 1}`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
