import { getUnsplashImage, getPlaceholderImage, getOptimizedImageSize } from "./image-utils"

// Curated, tested Unsplash image IDs for different job categories
const categoryImageIds: Record<string, string[]> = {
  "software-development": [
    "photo-1498050108023-c5249f4df085", // Code on screen
    "photo-1555066931-4365d14bab8c", // Developer workspace
    "photo-1517694712202-14dd9538aa97", // Team coding
    "photo-1607799279861-4dd421887fb3", // Modern office coding
    "photo-1573495627361-d9b87960b28d", // Programming setup
  ],
  design: [
    "photo-1561070791-2526d30994b5", // UI/UX design
    "photo-1581291518857-4e27b48ff24e", // Design tools
    "photo-1508921340878-ba53e1f016ec", // Creative workspace
    "photo-1626785774573-4b799315345d", // Design sketches
    "photo-1613979727271-5d4bbd75d7e3", // Digital design
  ],
  marketing: [
    "photo-1551434678-e076c223a692", // Marketing meeting
    "photo-1552664730-d307ca884978", // Strategy session
    "photo-1542744173-8e7e53415bb0", // Marketing team
    "photo-1557804506-669a67965ba0", // Digital marketing
    "photo-1553877522-43269d4ea984", // Marketing analytics
  ],
  sales: [
    "photo-1556745757-8d76bdb6984b", // Sales meeting
    "photo-1556740738-b6a63e27c4df", // Business handshake
    "photo-1556155092-490a1ba16284", // Sales presentation
    "photo-1573497620053-ea5300f94f21", // Client meeting
    "photo-1560250097-0b93528c311a", // Sales team
  ],
  finance: [
    "photo-1554224155-6726b3ff858f", // Financial charts
    "photo-1611974789855-9c2a0a7236a3", // Finance meeting
    "photo-1460925895917-afdab827c52f", // Data analysis
    "photo-1579532537598-459ecdaf39cc", // Financial planning
    "photo-1454165804606-c3d57bc86b40", // Business finance
  ],
  "data-science": [
    "photo-1551288049-bebda4e38f71", // Data visualization
    "photo-1518186285589-2f7649de83e0", // Analytics dashboard
    "photo-1551434678-e076c223a692", // Data analysis
    "photo-1504868584819-f8e8b4b6d7e3", // Machine learning
    "photo-1509228627152-72ae9ae6848d", // Data science
  ],
  other: [
    "photo-1522071820081-009f0129c71c", // Professional meeting
    "photo-1551434678-e076c223a692", // Team collaboration
    "photo-1486312338219-ce68d2c6f44d", // Office work
    "photo-1568992687947-868a62a9f521", // Business team
    "photo-1552581234-26160f608093", // Modern office
  ],
}

// Company office image IDs (tested and working)
const officeImageIds = [
  "photo-1497366754035-f200968a6e72", // Modern office
  "photo-1497215728101-856f4ea42174", // Open office
  "photo-1604328698692-f76ea9498e76", // Collaborative space
  "photo-1497366811353-6870744d04b2", // Tech office
  "photo-1524758631624-e2822e304c36", // Creative workspace
  "photo-1556761175-5973dc0f32e7", // Modern workplace
  "photo-1564069114553-7215e1ff1890", // Office interior
  "photo-1604328471151-b82f131d2730", // Business office
]

export type JobCategory = keyof typeof categoryImageIds
export type ImageSize = "thumbnail" | "card" | "hero" | "gallery"

/**
 * Get a job category image with proper optimization
 */
export function getJobImage(category = "other", size: ImageSize = "card", index?: number): string {
  const validCategory = (categoryImageIds[category] ? category : "other") as JobCategory
  const imageIds = categoryImageIds[validCategory]

  // Get specific image or random one
  const imageId =
    typeof index === "number" && index < imageIds.length
      ? imageIds[index]
      : imageIds[Math.floor(Math.random() * imageIds.length)]

  const { width, height, quality } = getOptimizedImageSize(size)

  try {
    return getUnsplashImage(imageId, width, height, quality)
  } catch {
    return getPlaceholderImage("job", width, height)
  }
}

/**
 * Get a company office image
 */
export function getCompanyOfficeImage(size: ImageSize = "card", index?: number): string {
  const imageId =
    typeof index === "number" && index < officeImageIds.length
      ? officeImageIds[index]
      : officeImageIds[Math.floor(Math.random() * officeImageIds.length)]

  const { width, height, quality } = getOptimizedImageSize(size)

  try {
    return getUnsplashImage(imageId, width, height, quality)
  } catch {
    return getPlaceholderImage("office", width, height)
  }
}

/**
 * Get multiple images for a category
 */
export function getJobCategoryImages(category = "other", size: ImageSize = "card", count = 3): string[] {
  const validCategory = (categoryImageIds[category] ? category : "other") as JobCategory
  const imageIds = categoryImageIds[validCategory]

  const selectedIndices = new Set<number>()
  while (selectedIndices.size < Math.min(count, imageIds.length)) {
    selectedIndices.add(Math.floor(Math.random() * imageIds.length))
  }

  const { width, height, quality } = getOptimizedImageSize(size)

  return Array.from(selectedIndices).map((index) => {
    try {
      return getUnsplashImage(imageIds[index], width, height, quality)
    } catch {
      return getPlaceholderImage("job", width, height)
    }
  })
}

/**
 * Get multiple company office images
 */
export function getCompanyOfficeImages(size: ImageSize = "card", count = 3): string[] {
  const selectedIndices = new Set<number>()
  while (selectedIndices.size < Math.min(count, officeImageIds.length)) {
    selectedIndices.add(Math.floor(Math.random() * officeImageIds.length))
  }

  const { width, height, quality } = getOptimizedImageSize(size)

  return Array.from(selectedIndices).map((index) => {
    try {
      return getUnsplashImage(officeImageIds[index], width, height, quality)
    } catch {
      return getPlaceholderImage("office", width, height)
    }
  })
}

/**
 * Determine job category from title and description
 */
export function determineJobCategory(title: string, description?: string): string {
  const titleLower = title.toLowerCase()
  const descLower = description?.toLowerCase() || ""

  if (
    titleLower.includes("developer") ||
    titleLower.includes("engineer") ||
    titleLower.includes("programmer") ||
    titleLower.includes("software") ||
    descLower.includes("javascript") ||
    descLower.includes("python") ||
    descLower.includes("react")
  ) {
    return "software-development"
  }

  if (
    titleLower.includes("design") ||
    titleLower.includes("ux") ||
    titleLower.includes("ui") ||
    descLower.includes("figma") ||
    descLower.includes("photoshop")
  ) {
    return "design"
  }

  if (
    titleLower.includes("market") ||
    titleLower.includes("seo") ||
    titleLower.includes("content") ||
    descLower.includes("campaign")
  ) {
    return "marketing"
  }

  if (titleLower.includes("sales") || titleLower.includes("account") || descLower.includes("revenue")) {
    return "sales"
  }

  if (titleLower.includes("financ") || titleLower.includes("account") || descLower.includes("budget")) {
    return "finance"
  }

  if (titleLower.includes("data") || titleLower.includes("analyst") || descLower.includes("analytics")) {
    return "data-science"
  }

  return "other"
}
