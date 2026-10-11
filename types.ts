export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

export interface CosmicImage {
  url: string
  imgix_url: string
}

export interface Project extends CosmicObject {
  type: 'projects'
  metadata: {
    description?: string
    content?: string
    screenshots?: CosmicImage[]
    tech_stack?: string[]
    live_url?: string
    repo_url?: string
    featured?: boolean
  }
}

export interface Skill extends CosmicObject {
  type: 'skills'
  metadata: {
    category?: string
    proficiency?: number
    icon?: string
  }
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience'
  metadata: {
    company?: string
    role?: string
    location?: string
    start_date?: string
    end_date?: string
    current?: boolean
    description?: string
  }
}

export type SkillCategory = string