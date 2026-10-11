import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function SkillCard({ skill }: { skill: Skill }) {
  if (!skill) {
    return null
  }

  const proficiency = typeof skill.metadata?.proficiency === 'number' ? skill.metadata.proficiency : 0
  const icon = getMetafieldValue(skill.metadata?.icon) || '⚔️'

  return (
    <div className="glass-panel p-5 hover:border-forge-primary-glow/50 transition-colors duration-200">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-semibold text-forge-text">{skill.title}</h3>
      </div>
      <div className="w-full h-2 bg-forge-surface-elevated rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-forge-primary to-forge-accent rounded-full"
          style={{ width: `${Math.min(Math.max(proficiency, 0), 100)}%` }}
        />
      </div>
      <p className="text-xs text-forge-text-muted mt-2">{proficiency}% Mastery</p>
    </div>
  )
}