"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Upload, FileText, CheckCircle } from "lucide-react"

export function UploadCVSection() {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const { toast } = useToast()

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or Word document.",
        variant: "destructive",
      })
      return
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    try {
      // Simulate upload
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setUploadedFile(file.name)
      toast({
        title: "Success!",
        description: "Your CV has been uploaded successfully.",
      })
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Upload Your CV and Get Discovered</h2>
              <p className="text-gray-600 mb-6">
                Let top Indian companies find you! Upload your CV and get matched with relevant job opportunities. Our
                AI-powered system will connect you with the right employers.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Get discovered by top recruiters
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  AI-powered job matching
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Secure and confidential
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-center">
                {uploadedFile ? (
                  <div className="space-y-4">
                    <FileText className="h-16 w-16 text-green-500 mx-auto" />
                    <h3 className="text-lg font-semibold text-gray-900">CV Uploaded Successfully!</h3>
                    <p className="text-gray-600">{uploadedFile}</p>
                    <Button
                      onClick={() => {
                        setUploadedFile(null)
                        const input = document.getElementById("cv-upload") as HTMLInputElement
                        if (input) input.value = ""
                      }}
                      variant="outline"
                    >
                      Upload Different CV
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="h-16 w-16 text-gray-400 mx-auto" />
                    <h3 className="text-lg font-semibold text-gray-900">Upload Your CV</h3>
                    <p className="text-gray-600">Drag and drop your CV here, or click to browse</p>
                    <div className="relative">
                      <input
                        id="cv-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        disabled={isUploading}
                      />
                      <Button disabled={isUploading} className="bg-indigo-600 hover:bg-indigo-700">
                        {isUploading ? "Uploading..." : "Choose File"}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
