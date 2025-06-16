import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs"
import { JobSeekerDashboard } from "@/components/dashboard/job-seeker-dashboard"
import { EmployerDashboard } from "@/components/dashboard/employer-dashboard"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export const metadata = {
  title: "Dashboard | Jobify",
  description: "Manage your job applications and listings",
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

          <DashboardTabs>
            {session.user.role === "EMPLOYER" ? (
              <EmployerDashboard userId={session.user.id} />
            ) : (
              <JobSeekerDashboard userId={session.user.id} />
            )}
          </DashboardTabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
