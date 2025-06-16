export interface Database {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: string
          title: string
          company: string
          location: string
          description: string
          requirements: string[]
          salary_min: number | null
          salary_max: number | null
          job_type: "FULL_TIME" | "PART_TIME" | "FREELANCE" | "CONTRACT"
          experience_level: "ENTRY" | "MID" | "SENIOR" | "EXECUTIVE"
          category: string
          company_logo: string | null
          is_featured: boolean
          is_active: boolean
          created_at: string
          updated_at: string
          employer_id: string
        }
        Insert: {
          id?: string
          title: string
          company: string
          location: string
          description: string
          requirements?: string[]
          salary_min?: number | null
          salary_max?: number | null
          job_type: "FULL_TIME" | "PART_TIME" | "FREELANCE" | "CONTRACT"
          experience_level: "ENTRY" | "MID" | "SENIOR" | "EXECUTIVE"
          category: string
          company_logo?: string | null
          is_featured?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
          employer_id: string
        }
        Update: {
          id?: string
          title?: string
          company?: string
          location?: string
          description?: string
          requirements?: string[]
          salary_min?: number | null
          salary_max?: number | null
          job_type?: "FULL_TIME" | "PART_TIME" | "FREELANCE" | "CONTRACT"
          experience_level?: "ENTRY" | "MID" | "SENIOR" | "EXECUTIVE"
          category?: string
          company_logo?: string | null
          is_featured?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
          employer_id?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          name: string
          password: string | null
          role: "JOB_SEEKER" | "EMPLOYER" | "ADMIN"
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          password?: string | null
          role?: "JOB_SEEKER" | "EMPLOYER" | "ADMIN"
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          password?: string | null
          role?: "JOB_SEEKER" | "EMPLOYER" | "ADMIN"
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      applications: {
        Row: {
          id: string
          job_id: string
          user_id: string
          status: "PENDING" | "REVIEWED" | "ACCEPTED" | "REJECTED"
          cover_letter: string | null
          resume_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          job_id: string
          user_id: string
          status?: "PENDING" | "REVIEWED" | "ACCEPTED" | "REJECTED"
          cover_letter?: string | null
          resume_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          job_id?: string
          user_id?: string
          status?: "PENDING" | "REVIEWED" | "ACCEPTED" | "REJECTED"
          cover_letter?: string | null
          resume_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
