"use client"

import { X, Linkedin, Github, Code, Heart } from "lucide-react"

interface AbhinavModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AbhinavModal({ isOpen, onClose }: AbhinavModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Code className="text-white" size={32} />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Made with <Heart className="inline text-red-500" size={20} /> by
          </h2>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Abhinav Tiwary
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Full Stack Developer passionate about creating amazing web experiences. This job board showcases modern
            React development with Next.js and Tailwind CSS.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/abhinav-tiwary-791a63302/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/abhiii9vvv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">Built with React, Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
