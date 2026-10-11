import type { Metadata } from 'next'
import ExperienceCard from '@/components/ExperienceCard'
import { getWorkExperience } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Experience | RealmForge',
  description: 'The quest log of a career spent building digital realms.',
}

export default async function ExperiencePage() {
  const experience = await getWorkExperience()

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-forge-accent text-glow-gold mb-4">
          Quest Log
        </h1>
        <p className="text-forge-text-muted max-w-2xl mx-auto">
          Chapters of a professional journey, forged one role at a time.
        </p>
      </div>

      {experience.length === 0 ? (
        <p className="text-center text-forge-text-muted">No experience entries found yet. Check back soon.</p>
      ) : (
        <div className="space-y-6">
          {experience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      )}
    </div>
  )
}