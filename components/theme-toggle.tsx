"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/contexts/theme-context"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={20} className="text-gray-600" /> : <Sun size={20} className="text-yellow-400" />}
    </button>
  )
}
