"use client"

import { useState, useEffect } from "react"
import { Code } from "lucide-react"
import AbhinavModal from "./abhinav-modal"

export default function FloatingCredit() {
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group animate-bounce">
          <button onClick={() => setShowModal(true)} className="flex items-center gap-2">
            <Code size={20} />
            <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Made by Abhinav</span>
          </button>
        </div>
      </div>

      <AbhinavModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
