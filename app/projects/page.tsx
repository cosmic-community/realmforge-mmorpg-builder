import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Projects | RealmForge',
  description: 'Explore worlds forged in code — a showcase of projects.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-forge-accent text-glow-gold mb-4">
          The Project Codex
        </h1>
        <p className="text-forge-text-muted max-w-2xl mx-auto">
          A chronicle of realms built, systems engineered, and problems solved.
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="text-center text-forge-text-muted">No projects found yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}