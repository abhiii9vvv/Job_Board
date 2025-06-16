import { test, expect } from "@playwright/test"

test.describe("Homepage", () => {
  test("should display the main heading", async ({ page }) => {
    await page.goto("/")

    await expect(page.getByRole("heading", { name: /Get The Right Job You Deserve/i })).toBeVisible()
  })

  test("should have working search form", async ({ page }) => {
    await page.goto("/")

    await page.fill('input[placeholder*="Job title"]', "developer")
    await page.fill('input[placeholder*="City"]', "San Francisco")
    await page.click('button:has-text("Search Jobs")')

    await expect(page).toHaveURL(/\/jobs/)
  })

  test("should navigate to jobs page", async ({ page }) => {
    await page.goto("/")

    await page.click("text=Find More Jobs")
    await expect(page).toHaveURL("/jobs")
  })
})
