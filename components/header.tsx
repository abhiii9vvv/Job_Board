"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Briefcase } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <div className="ml-2.5 text-xl font-bold text-gray-900">
              JobBoard
              <span className="text-indigo-600">.</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-gray-700 hover:text-indigo-600">
              {item.name}
            </Link>
          ))}
          <Link href="/auth/signin">
            <Button variant="outline" className="rounded-md border-indigo-600 text-indigo-600 hover:bg-indigo-50">
              Login
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="rounded-md bg-indigo-600 hover:bg-indigo-700 shadow-sm">Sign Up</Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex items-center mt-4 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <div className="ml-2.5 text-xl font-bold text-gray-900">
                JobBoard
                <span className="text-indigo-600">.</span>
              </div>
            </div>
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/auth/signin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                    Login
                  </Button>
                </Link>
                <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 shadow-sm">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
