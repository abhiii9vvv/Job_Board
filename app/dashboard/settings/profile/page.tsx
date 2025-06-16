"use client"

import { useState, useEffect, useTransition } from "react" // Added useTransition
import { updateContactDetails } from "./actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ProfileSettingsPage() {
  const [isPending, startTransition] = useTransition() // Replaces isPending from useActionState
  const [formState, setFormState] = useState<{ success: boolean; message: string } | null>(null) // Replaces state from useActionState
  const { toast } = useToast()

  useEffect(() => {
    if (formState?.message) {
      // Use formState here
      toast({
        title: formState.success ? "Success" : "Error",
        description: formState.message,
        variant: formState.success ? "default" : "destructive",
      })
    }
  }, [formState, toast])

  // Simulate fetching current user data (replace with actual fetch from DB)
  const currentUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  }

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await updateContactDetails(formData)
      setFormState(result) // Update formState with the result
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Update Contact Details</CardTitle>
            <CardDescription>Manage your personal contact information.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit} className="space-y-6">
              {" "}
              {/* Changed action prop to handleSubmit */}
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" type="text" defaultValue={currentUser.name} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" defaultValue={currentUser.email} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" defaultValue={currentUser.phone} />
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
