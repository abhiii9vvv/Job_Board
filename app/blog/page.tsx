import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "1",
    title: "Top 10 Tech Skills in Demand in India 2024",
    excerpt: "Discover the most sought-after technical skills that Indian companies are looking for in 2024.",
    author: "Priya Sharma",
    date: "2024-01-15",
    category: "Career Tips",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "How to Ace Your Remote Job Interview",
    excerpt: "Essential tips and strategies to succeed in virtual interviews and land your dream remote job.",
    author: "Rahul Kumar",
    date: "2024-01-12",
    category: "Interview Tips",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Salary Negotiation Guide for Indian Job Market",
    excerpt: "Learn effective strategies to negotiate better compensation packages in the Indian job market.",
    author: "Anjali Patel",
    date: "2024-01-10",
    category: "Salary Guide",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get expert advice, industry insights, and career tips to accelerate your professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
