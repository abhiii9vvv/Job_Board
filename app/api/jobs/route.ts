import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { z } from "zod"

const jobSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(1, "Description is required"),
  requirements: z.array(z.string()).optional(),
  salary_min: z.number().optional(),
  salary_max: z.number().optional(),
  job_type: z.enum(["FULL_TIME", "PART_TIME", "FREELANCE", "CONTRACT"]),
  experience_level: z.enum(["ENTRY", "MID", "SENIOR", "EXECUTIVE"]),
  category: z.string().min(1, "Category is required"),
  company_logo: z.string().optional(),
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const search = searchParams.get("search") || ""
    const location = searchParams.get("location") || ""
    const category = searchParams.get("category") || ""
    const jobType = searchParams.get("job_type") || ""

    let query = supabaseAdmin
      .from("jobs")
      .select("*", { count: "exact" })
      .eq("is_active", true)
      .order("created_at", { ascending: false })

    if (search) {
      query = query.or(`title.ilike.%${search}%,company.ilike.%${search}%,description.ilike.%${search}%`)
    }

    if (location) {
      query = query.ilike("location", `%${location}%`)
    }

    if (category) {
      query = query.eq("category", category)
    }

    if (jobType) {
      query = query.eq("job_type", jobType)
    }

    const from = (page - 1) * limit
    const to = from + limit - 1

    const { data: jobs, error, count } = await query.range(from, to)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      jobs,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "EMPLOYER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = jobSchema.parse(body)

    const { data: job, error } = await supabaseAdmin
      .from("jobs")
      .insert({
        ...validatedData,
        employer_id: session.user.id,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(job, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
