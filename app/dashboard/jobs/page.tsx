import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmployerJobsManagement } from "@/components/dashboard/employer-jobs-management"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export const metadata = {
  title: "Manage Jobs | Jobify",
  description: "Manage your job listings",
}

export default async function ManageJobsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard/jobs")
  }

  if (session.user.role !== "EMPLOYER") {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6">Manage Jobs</h1>
          <EmployerJobsManagement employerId={session.user.id} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
