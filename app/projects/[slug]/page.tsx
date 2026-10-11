// app/projects/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getMetafieldValue } from '@/lib/cosmic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) {
    return { title: 'Project Not Found | RealmForge' }
  }
  return {
    title: `${project.title} | RealmForge`,
    description: project.metadata?.description || `Details for ${project.title}`,
    other: {
      'cosmic-context': JSON.stringify({ object_id: project.id, object_type: project.type }),
    },
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const screenshots = project.metadata?.screenshots || []
  const techStack = project.metadata?.tech_stack || []

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <Link href="/projects" className="text-forge-accent hover:text-glow-gold text-sm font-medium mb-8 inline-block">
        ← Back to Codex
      </Link>

      <div className="mb-8">
        {project.metadata?.featured && (
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider rounded-full bg-forge-accent/20 text-forge-accent border border-forge-accent/40">
            Featured
          </span>
        )}
        <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-forge-text mb-4">{project.title}</h1>
        {project.metadata?.description && (
          <p className="text-xl text-forge-text-muted">{project.metadata.description}</p>
        )}
      </div>

      {screenshots.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {screenshots.map((shot, index) => (
            <img
              key={index}
              src={`${shot.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
              alt={`${project.title} screenshot ${index + 1}`}
              width={600}
              height={400}
              className="rounded-xl border border-forge-border w-full h-64 object-cover"
            />
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-10">
        {project.metadata?.live_url && (
          <a href={project.metadata.live_url} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Live World →
          </a>
        )}
        {project.metadata?.repo_url && (
          <a
            href={project.metadata.repo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-forge-primary-glow text-forge-text font-semibold hover:bg-forge-primary hover:shadow-glow transition-all duration-200"
          >
            View Source
          </a>
        )}
      </div>

      {techStack.length > 0 && (
        <div className="mb-10">
          <h2 className="font-cinzel text-xl text-forge-accent mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full bg-forge-surface-elevated border border-forge-border text-sm text-forge-text"
              >
                {getMetafieldValue(tech)}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.metadata?.content && (
        <div className="glass-panel p-8">
          <h2 className="font-cinzel text-xl text-forge-accent mb-4">About This Project</h2>
          <div
            className="text-forge-text-muted leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: project.metadata.content }}
          />
        </div>
      )}
    </div>
  )
}