"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSession } from "next-auth/react"
import { LayoutDashboard, Briefcase, FileText, Users, MessageSquare, Bell, Settings } from "lucide-react"

export function DashboardTabs({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const [activeTab, setActiveTab] = useState("overview")

  const isEmployer = session?.user?.role === "EMPLOYER"

  return (
    <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
      <TabsList className="grid grid-cols-3 md:grid-cols-7 gap-2">
        <TabsTrigger value="overview" className="flex items-center gap-2">
          <LayoutDashboard className="h-4 w-4" />
          <span className="hidden md:inline">Overview</span>
        </TabsTrigger>

        {isEmployer ? (
          <TabsTrigger
            value="jobs"
            className="flex items-center gap-2"
            onClick={() => (window.location.href = "/dashboard/jobs")}
          >
            <Briefcase className="h-4 w-4" />
            <span className="hidden md:inline">Jobs</span>
          </TabsTrigger>
        ) : (
          <TabsTrigger
            value="applications"
            className="flex items-center gap-2"
            onClick={() => (window.location.href = "/dashboard/applications")}
          >
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Applications</span>
          </TabsTrigger>
        )}

        {isEmployer && (
          <TabsTrigger value="candidates" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden md:inline">Candidates</span>
          </TabsTrigger>
        )}

        <TabsTrigger value="messages" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          <span className="hidden md:inline">Messages</span>
        </TabsTrigger>

        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <span className="hidden md:inline">Notifications</span>
        </TabsTrigger>

        <TabsTrigger
          value="settings"
          className="flex items-center gap-2"
          onClick={() => (window.location.href = "/settings")}
        >
          <Settings className="h-4 w-4" />
          <span className="hidden md:inline">Settings</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        {children}
      </TabsContent>

      <TabsContent value="messages" className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <p className="text-gray-500">You have no new messages.</p>
        </div>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <p className="text-gray-500">You have no new notifications.</p>
        </div>
      </TabsContent>

      {isEmployer && (
        <TabsContent value="candidates" className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Candidates</h2>
            <p className="text-gray-500">No candidates have applied to your jobs yet.</p>
          </div>
        </TabsContent>
      )}
    </Tabs>
  )
}
