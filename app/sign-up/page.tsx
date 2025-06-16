import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Briefcase, User } from "lucide-react"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
              <p className="text-gray-600">Join JobBoard to find your dream job</p>
            </div>

            <Tabs defaultValue="jobseeker" className="mb-8">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="jobseeker" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Job Seeker
                </TabsTrigger>
                <TabsTrigger value="employer" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Employer
                </TabsTrigger>
              </TabsList>

              <TabsContent value="jobseeker">
                <form>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>

                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" required />
                    </div>

                    <div>
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" required />
                    </div>

                    <div className="flex items-center">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                        I agree to the{" "}
                        <Link href="/terms" className="text-indigo-600 hover:text-indigo-800">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-indigo-600 hover:text-indigo-800">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="employer">
                <form>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" placeholder="Acme Inc." required />
                    </div>

                    <div>
                      <Label htmlFor="company-email">Company Email</Label>
                      <Input id="company-email" type="email" placeholder="hr@acme.com" required />
                    </div>

                    <div>
                      <Label htmlFor="company-password">Password</Label>
                      <Input id="company-password" type="password" required />
                    </div>

                    <div>
                      <Label htmlFor="company-confirm-password">Confirm Password</Label>
                      <Input id="company-confirm-password" type="password" required />
                    </div>

                    <div className="flex items-center">
                      <input
                        id="company-terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        required
                      />
                      <label htmlFor="company-terms" className="ml-2 text-sm text-gray-700">
                        I agree to the{" "}
                        <Link href="/terms" className="text-indigo-600 hover:text-indigo-800">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-indigo-600 hover:text-indigo-800">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <Button type="submit" className="w-full">
                      Create Employer Account
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
