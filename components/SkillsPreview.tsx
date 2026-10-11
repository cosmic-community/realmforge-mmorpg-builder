import type { Skill } from '@/types'
import SkillCard from '@/components/SkillCard'

export default function SkillsPreview({ skills }: { skills: Skill[] }) {
  if (!skills || skills.length === 0) {
    return <p className="text-center text-forge-text-muted">No skills found yet. Check back soon.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  )
}