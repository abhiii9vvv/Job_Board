// Image utility functions with proper fallbacks and optimization

export interface ImageConfig {
  src: string
  alt: string
  width?: number
  height?: number
  quality?: number
  priority?: boolean
}

// Company logo mappings with reliable sources
export const companyLogos: Record<string, string> = {
  "tata-consultancy-services": "https://logo.clearbit.com/tcs.com",
  infosys: "https://logo.clearbit.com/infosys.com", // Existing entry
  "infosys-limited": "https://logo.clearbit.com/infosys.com", // Added for "Infosys Limited"
  wipro: "https://logo.clearbit.com/wipro.com",
  "hcl-technologies": "https://logo.clearbit.com/hcltech.com",
  "tech-mahindra": "https://logo.clearbit.com/techmahindra.com",
  flipkart: "https://logo.clearbit.com/flipkart.com",
  zomato: "https://logo.clearbit.com/zomato.com",
  paytm: "https://logo.clearbit.com/paytm.com",
  swiggy: "https://logo.clearbit.com/swiggy.com", // Added for "Swiggy"
  "amazon-india": "https://logo.clearbit.com/amazon.in", // Added for "Amazon India"
  phonepe: "https://logo.clearbit.com/phonepe.com", // Added for "PhonePe"
  airbnb: "https://logo.clearbit.com/airbnb.com",
  discord: "https://logo.clearbit.com/discord.com",
  dropbox: "https://logo.clearbit.com/dropbox.com",
  slack: "https://logo.clearbit.com/slack.com",
  walmart: "https://logo.clearbit.com/walmart.com",
  google: "https://logo.clearbit.com/google.com",
  microsoft: "https://logo.clearbit.com/microsoft.com",
  amazon: "https://logo.clearbit.com/amazon.com",
  apple: "https://logo.clearbit.com/apple.com",
  meta: "https://logo.clearbit.com/meta.com",
  netflix: "https://logo.clearbit.com/netflix.com",
  uber: "https://logo.clearbit.com/uber.com",
}

// Optimized placeholder images using a reliable service
export const placeholderImages = {
  avatar: "https://ui-avatars.com/api/?name=User&background=6366f1&color=fff&size=128",
  company: "https://ui-avatars.com/api/?name=Company&background=e5e7eb&color=374151&size=128",
  job: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&auto=format&q=75",
  office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop&auto=format&q=75",
}

// Get company logo with fallback
export function getCompanyLogo(companyName: string, size = 64): string {
  const normalizedName = companyName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")

  // Use direct mapping if available
  if (companyLogos[normalizedName]) {
    return companyLogos[normalizedName]
  }

  // Fallback to UI-Avatars if no direct mapping
  return getCompanyLogoFallback(companyName, size)
}

export function getCompanyLogoFallback(companyName: string, size = 64): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    companyName,
  )}&background=e5e7eb&color=374151&size=${size}`
}

// Get optimized Unsplash image
export function getUnsplashImage(imageId: string, width = 800, height = 600, quality = 75): string {
  return `https://images.unsplash.com/${imageId}?w=${width}&h=${height}&fit=crop&auto=format&q=${quality}`
}

// Get placeholder image
export function getPlaceholderImage(type: keyof typeof placeholderImages = "job", width = 400, height = 300): string {
  const baseUrl = placeholderImages[type]
  if (type === "job" || type === "office") {
    return baseUrl.replace(/w=\d+&h=\d+/, `w=${width}&h=${height}`)
  }
  return baseUrl.replace(/size=\d+/, `size=${Math.max(width, height)}`)
}

// Validate image URL
export async function validateImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" })
    return response.ok && response.headers.get("content-type")?.startsWith("image/") === true
  } catch {
    return false
  }
}

// Get image with fallback chain
export function getImageWithFallback(
  primaryUrl: string | undefined,
  fallbackType: keyof typeof placeholderImages = "job",
  width = 400,
  height = 300,
): string {
  if (primaryUrl && primaryUrl !== "/placeholder.svg" && !primaryUrl.includes("placeholder")) {
    return primaryUrl
  }
  return getPlaceholderImage(fallbackType, width, height)
}

// Optimize image size based on usage
export function getOptimizedImageSize(usage: "thumbnail" | "card" | "hero" | "gallery") {
  const sizes = {
    thumbnail: { width: 150, height: 150, quality: 70 },
    card: { width: 400, height: 300, quality: 75 },
    hero: { width: 1200, height: 600, quality: 80 },
    gallery: { width: 800, height: 600, quality: 75 },
  }
  return sizes[usage]
}
