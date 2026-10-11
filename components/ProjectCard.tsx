import Link from 'next/link'
import type { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProjectCard({ project }: { project: Project }) {
  if (!project) {
    return null
  }

  const screenshot = project.metadata?.screenshots?.[0]
  const techStack = project.metadata?.tech_stack || []

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group glass-panel overflow-hidden hover:border-forge-accent/50 hover:shadow-glow-gold transition-all duration-200 flex flex-col"
    >
      <div className="relative h-48 w-full overflow-hidden bg-forge-surface-elevated">
        {screenshot ? (
          <img
            src={`${screenshot.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={project.title}
            width={400}
            height={250}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-forge-text-muted text-sm">
            No preview available
          </div>
        )}
        {project.metadata?.featured && (
          <span className="absolute top-3 right-3 px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-forge-accent/90 text-forge-bg">
            Featured
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-cinzel text-lg font-semibold text-forge-text mb-2 group-hover:text-forge-accent transition-colors">
          {project.title}
        </h3>
        {project.metadata?.description && (
          <p className="text-sm text-forge-text-muted mb-4 flex-1">{project.metadata.description}</p>
        )}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-md bg-forge-surface-elevated border border-forge-border text-xs text-forge-text-muted"
              >
                {getMetafieldValue(tech)}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}