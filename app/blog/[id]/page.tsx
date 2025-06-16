import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

const blogPosts = {
  "1": {
    title: "Top 10 Tech Skills in Demand in India 2024",
    content: `
      <p>The Indian tech industry continues to evolve rapidly, with new technologies and frameworks emerging constantly. As we move through 2024, certain skills have become particularly valuable for professionals looking to advance their careers.</p>
      
      <h2>1. Artificial Intelligence and Machine Learning</h2>
      <p>AI and ML remain at the forefront of technological innovation. Companies across India are investing heavily in AI-driven solutions, making skills in Python, TensorFlow, and PyTorch extremely valuable.</p>
      
      <h2>2. Cloud Computing</h2>
      <p>With the digital transformation accelerating, cloud skills are in high demand. AWS, Azure, and Google Cloud certifications can significantly boost your career prospects.</p>
      
      <h2>3. Full-Stack Development</h2>
      <p>The ability to work across the entire technology stack remains crucial. React, Node.js, and modern JavaScript frameworks are particularly sought after.</p>
      
      <p>These skills represent just the beginning of what's needed in today's competitive market. Continuous learning and adaptation are key to staying relevant in the Indian tech ecosystem.</p>
    `,
    author: "Priya Sharma",
    date: "2024-01-15",
    category: "Career Tips",
    readTime: "5 min read",
  },
  "2": {
    title: "How to Ace Your Remote Job Interview",
    content: `
      <p>Remote work has become the new normal, and mastering virtual interviews is crucial for career success. Here's your comprehensive guide to excelling in remote job interviews.</p>
      
      <h2>Technical Preparation</h2>
      <p>Ensure your technology is working perfectly. Test your camera, microphone, and internet connection well before the interview. Have backup plans ready.</p>
      
      <h2>Environment Setup</h2>
      <p>Choose a quiet, well-lit space with a professional background. Minimize distractions and inform family members about your interview schedule.</p>
      
      <h2>Communication Skills</h2>
      <p>Maintain eye contact by looking at the camera, not the screen. Speak clearly and at a moderate pace. Use gestures naturally but keep them within the camera frame.</p>
    `,
    author: "Rahul Kumar",
    date: "2024-01-12",
    category: "Interview Tips",
    readTime: "7 min read",
  },
  "3": {
    title: "Salary Negotiation Guide for Indian Job Market",
    content: `
      <p>Negotiating salary can be challenging, especially in the Indian job market where cultural factors play a significant role. This guide will help you navigate these conversations effectively.</p>
      
      <h2>Research Market Rates</h2>
      <p>Before any negotiation, research industry standards for your role, experience level, and location. Use platforms like Glassdoor, PayScale, and AmbitionBox for accurate data.</p>
      
      <h2>Timing is Everything</h2>
      <p>The best time to negotiate is after receiving a job offer but before accepting it. This gives you leverage while showing genuine interest in the role.</p>
      
      <h2>Consider the Complete Package</h2>
      <p>Look beyond base salary. Consider benefits like health insurance, flexible working arrangements, learning opportunities, and career growth prospects.</p>
    `,
    author: "Anjali Patel",
    date: "2024-01-10",
    category: "Salary Guide",
    readTime: "6 min read",
  },
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <article className="container mx-auto py-12 px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>

              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>

      <Footer />
    </div>
  )
}
