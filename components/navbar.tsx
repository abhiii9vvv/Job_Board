"use client"

import { useState, useEffect } from "react"
import { Menu, X, Briefcase } from "lucide-react"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest("#mobile-menu") && !target.closest("#menu-button")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg transition-transform group-hover:scale-110">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">JobBoard</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">by Abhinav</p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/jobs"
                className="text-gray-500 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Jobs
              </Link>
              <Link
                href="/companies"
                className="text-gray-500 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Companies
              </Link>
              <Link
                href="/salaries"
                className="text-gray-500 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Salaries
              </Link>
              <Link
                href="/about"
                className="text-gray-500 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/signin"
                className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/post-job"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm hover:shadow-md"
              >
                Post a Job
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <button
                id="menu-button"
                onClick={() => setIsMenuOpen(true)}
                className="ml-2 p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden" aria-hidden="true" />}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-gradient-to-b from-teal-900 to-gray-900 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto p-6 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">JobBoard</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-orange-300 py-3 text-lg font-medium transition-colors border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="text-gray-300 hover:text-orange-300 py-3 text-lg font-medium transition-colors border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link
              href="/companies"
              className="text-gray-300 hover:text-orange-300 py-3 text-lg font-medium transition-colors border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Companies
            </Link>
            <Link
              href="/salaries"
              className="text-gray-300 hover:text-orange-300 py-3 text-lg font-medium transition-colors border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Salaries
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-orange-300 py-3 text-lg font-medium transition-colors border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>

          <div className="mt-auto pt-6 space-y-4">
            <Link
              href="/signin"
              className="block w-full text-center text-white hover:text-orange-300 py-3 text-lg font-medium transition-colors border border-white/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/post-job"
              className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-lg font-medium transition-colors rounded-md shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
