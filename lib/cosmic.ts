import { createBucketClient } from '@cosmicjs/sdk'
import type { Project, Skill, WorkExperience } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export function getDateValue(item: {
  published_at?: string | null
  modified_at?: string | null
  created_at?: string | null
}): number {
  const raw = item.published_at || item.modified_at || item.created_at
  const time = raw ? Date.parse(raw) : NaN
  return Number.isNaN(time) ? 0 : time
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'projects' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    return response.objects as Project[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch projects')
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects()
  const featured = projects.filter((p) => p.metadata?.featured)
  return featured.length > 0 ? featured.slice(0, 3) : projects.slice(0, 3)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'projects', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    return response.object as Project
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch project')
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'skills' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Skill[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch skills')
  }
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'work-experience' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const experience = response.objects as WorkExperience[]
    return experience.sort((a, b) => {
      const dateA = a.metadata?.start_date ? Date.parse(a.metadata.start_date) : 0
      const dateB = b.metadata?.start_date ? Date.parse(b.metadata.start_date) : 0
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch work experience')
  }
}