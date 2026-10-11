import type { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

function formatDate(dateString?: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return dateString
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function ExperienceCard({ experience }: { experience: WorkExperience }) {
  if (!experience) {
    return null
  }

  const role = getMetafieldValue(experience.metadata?.role) || experience.title
  const company = getMetafieldValue(experience.metadata?.company)
  const location = getMetafieldValue(experience.metadata?.location)
  const isCurrent = Boolean(experience.metadata?.current)
  const startDate = formatDate(experience.metadata?.start_date)
  const endDate = isCurrent ? 'Present' : formatDate(experience.metadata?.end_date)

  return (
    <div className="glass-panel p-6 border-l-4 border-l-forge-accent">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="font-cinzel text-lg font-semibold text-forge-text">{role}</h3>
          {company && <p className="text-forge-accent font-medium">{company}</p>}
        </div>
        <div className="text-right">
          <p className="text-sm text-forge-text-muted">
            {startDate} {startDate && '—'} {endDate}
          </p>
          {location && <p className="text-xs text-forge-text-muted">{location}</p>}
        </div>
      </div>
      {experience.metadata?.description && (
        <p className="text-sm text-forge-text-muted mt-3 leading-relaxed">{experience.metadata.description}</p>
      )}
      {isCurrent && (
        <span className="inline-block mt-3 px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-forge-success/20 text-forge-success border border-forge-success/40">
          Current
        </span>
      )}
    </div>
  )
}