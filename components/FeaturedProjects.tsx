import type { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return <p className="text-center text-forge-text-muted">No projects found yet. Check back soon.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}