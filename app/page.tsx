import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import SkillsPreview from '@/components/SkillsPreview'
import ExperienceCard from '@/components/ExperienceCard'
import { getFeaturedProjects, getSkills, getWorkExperience } from '@/lib/cosmic'

export default async function HomePage() {
  const [projects, skills, experience] = await Promise.all([
    getFeaturedProjects(),
    getSkills(),
    getWorkExperience(),
  ])

  const latestExperience = experience.slice(0, 2)

  return (
    <>
      <HeroSection />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-forge-accent text-glow-gold mb-3">
            Featured Projects
          </h2>
          <p className="text-forge-text-muted max-w-2xl mx-auto">
            Worlds forged in code. A glimpse into the realms I&apos;ve built.
          </p>
        </div>
        <FeaturedProjects projects={projects} />
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 rounded-lg border border-forge-accent text-forge-accent font-semibold hover:bg-forge-accent hover:text-forge-bg transition-colors duration-200"
          >
            View All Projects
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-forge-surface/50 border-y border-forge-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-forge-accent text-glow-gold mb-3">
              Arsenal of Skills
            </h2>
            <p className="text-forge-text-muted max-w-2xl mx-auto">
              Tools and technologies wielded to craft digital realms.
            </p>
          </div>
          <SkillsPreview skills={skills.slice(0, 8)} />
          <div className="text-center mt-10">
            <Link
              href="/skills"
              className="inline-block px-8 py-3 rounded-lg border border-forge-primary-glow text-forge-text font-semibold hover:bg-forge-primary hover:shadow-glow transition-all duration-200"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {latestExperience.length > 0 && (
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-forge-accent text-glow-gold mb-3">
              Quest Log
            </h2>
            <p className="text-forge-text-muted max-w-2xl mx-auto">
              Recent chapters of my professional journey.
            </p>
          </div>
          <div className="space-y-6">
            {latestExperience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/experience"
              className="inline-block px-8 py-3 rounded-lg border border-forge-primary-glow text-forge-text font-semibold hover:bg-forge-primary hover:shadow-glow transition-all duration-200"
            >
              View Full Experience
            </Link>
          </div>
        </section>
      )}
    </>
  )
}