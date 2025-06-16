import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "JobBoard - Find Your Dream Job in India",
    template: "%s | JobBoard",
  },
  description:
    "Job Searching Just Got Easy. Use JobBoard to find your dream job with top Indian companies and startups.",
  keywords: [
    "jobs",
    "career",
    "employment",
    "hiring",
    "job search",
    "job board",
    "recruitment",
    "remote work",
    "india jobs",
  ],
  authors: [{ name: "Abhinav Tiwary", url: "https://github.com/abhiii9vvv" }],
  creator: "Abhinav Tiwary",
  publisher: "JobBoard",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jobboard.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JobBoard - Find Your Dream Job in India",
    description: "Job Searching Just Got Easy. Use JobBoard to find your dream job with top Indian companies.",
    url: "https://jobboard.vercel.app",
    siteName: "JobBoard",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JobBoard - Find Your Dream Job",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobBoard - Find Your Dream Job in India",
    description: "Job Searching Just Got Easy. Use JobBoard to find your dream job in India.",
    images: ["/twitter-image.jpg"],
    creator: "@jobboard",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5E5CFF" />
      </head>
      <body className={inter.className}>
        <Suspense>
          <Providers>
            {children}
            <Toaster />
          </Providers>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}
