import type { Metadata } from 'next'
import SkillCard from '@/components/SkillCard'
import { getSkills, getMetafieldValue } from '@/lib/cosmic'
import type { Skill } from '@/types'

export const metadata: Metadata = {
  title: 'Skills | RealmForge',
  description: 'The arsenal of tools and technologies wielded in the forge.',
}

function groupByCategory(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce((acc, skill) => {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)
}

export default async function SkillsPage() {
  const skills = await getSkills()
  const grouped = groupByCategory(skills)
  const categories = Object.keys(grouped)

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-forge-accent text-glow-gold mb-4">
          Arsenal of Skills
        </h1>
        <p className="text-forge-text-muted max-w-2xl mx-auto">
          Enchantments, tools, and languages mastered through countless builds.
        </p>
      </div>

      {categories.length === 0 ? (
        <p className="text-center text-forge-text-muted">No skills found yet. Check back soon.</p>
      ) : (
        categories
          .filter((category) => {
            const items = grouped[category]
            return items && items.length > 0
          })
          .map((category) => {
            const items = grouped[category]
            if (!items || items.length === 0) {
              return null
            }
            return (
              <div key={category} className="mb-14">
                <h2 className="font-cinzel text-2xl text-forge-text mb-6 border-b border-forge-border pb-3">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )
          })
      )}
    </div>
  )
}