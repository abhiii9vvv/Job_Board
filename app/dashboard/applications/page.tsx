import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobSeekerApplications } from "@/components/dashboard/job-seeker-applications"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export const metadata = {
  title: "My Applications | Jobify",
  description: "Manage your job applications",
}

export default async function ApplicationsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard/applications")
  }

  if (session.user.role !== "JOB_SEEKER") {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6">My Applications</h1>
          <JobSeekerApplications userId={session.user.id} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
