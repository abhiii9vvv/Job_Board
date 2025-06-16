"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      content:
        "Without Jobify i'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite believe the service level that they offer!",
      author: {
        name: "John Doe",
        avatar: "/images/testimonial-1.jpg",
        initials: "JD",
      },
    },
    {
      id: 2,
      content:
        "Jobify completely transformed my job search experience. I found my dream position within two weeks of signing up!",
      author: {
        name: "Sarah Miller",
        avatar: "/images/testimonial-2.jpg",
        initials: "SM",
      },
    },
    {
      id: 3,
      content:
        "The personalized job recommendations were spot on. I'm now working at a company that perfectly matches my skills and values.",
      author: {
        name: "Michael Chen",
        avatar: "/images/testimonial-3.jpg",
        initials: "MC",
      },
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
        onClick={prevTestimonial}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 text-center">
        <p className="text-lg mb-8">{testimonials[currentIndex].content}</p>
      </div>

      <div className="flex justify-center -mt-6">
        <Avatar className="h-12 w-12 border-4 border-indigo-100 bg-indigo-600">
          <AvatarImage
            src={testimonials[currentIndex].author.avatar || "/placeholder.svg"}
            alt={testimonials[currentIndex].author.name}
          />
          <AvatarFallback>{testimonials[currentIndex].author.initials}</AvatarFallback>
        </Avatar>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
        onClick={nextTestimonial}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  )
}
