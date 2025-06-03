import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/contexts/theme-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JobBoard - Find Your Dream Job | Made by Abhinav",
  description:
    "Discover thousands of job opportunities from top companies worldwide. Built by Abhinav Tiwary with modern React, Next.js, and TypeScript.",
  keywords: "jobs, careers, employment, hiring, job search, Abhinav Tiwary",
  authors: [{ name: "Abhinav Tiwary", url: "https://github.com/abhiii9vvv" }],
  creator: "Abhinav Tiwary",
  openGraph: {
    title: "JobBoard - Find Your Dream Job",
    description: "Discover thousands of job opportunities from top companies worldwide.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobBoard - Find Your Dream Job",
    description: "Discover thousands of job opportunities from top companies worldwide.",
    creator: "@abhinav",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
