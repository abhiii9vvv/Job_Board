"use client"

import "@testing-library/jest-dom"
import jest from "jest"

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return ""
  },
}))

// Mock next-auth
jest.mock("next-auth/react", () => ({
  useSession() {
    return { data: null, status: "unauthenticated" }
  },
  signIn: jest.fn(),
  signOut: jest.fn(),
}))
