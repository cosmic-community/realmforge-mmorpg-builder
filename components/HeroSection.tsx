import Link from 'next/link'
import ParticleBackground from '@/components/ParticleBackground'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center px-6">
      <ParticleBackground />

      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-forge-primary-glow/30 rotate-45 animate-float" />
      <div
        className="absolute bottom-24 right-16 w-16 h-16 border-2 border-forge-accent/30 rotate-12 animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute top-1/3 right-24 w-10 h-10 border-2 border-forge-primary-glow/20 rounded-full animate-float"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl font-black text-forge-accent text-glow-gold mb-4 tracking-wide">
          REALM FORGE
        </h1>
        <p className="text-lg md:text-xl text-forge-text-muted mb-10 max-w-2xl mx-auto">
          Build Your World. Tell Your Story. A portfolio of 3D world-building, systems engineering, and game
          development craft.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/projects" className="btn-primary px-8 py-3 text-base">
            Enter the Forge
          </Link>
          <Link
            href="/experience"
            className="px-8 py-3 rounded-lg border border-forge-primary-glow text-forge-text font-semibold hover:bg-forge-primary hover:shadow-glow transition-all duration-200"
          >
            View the Quest Log
          </Link>
        </div>
      </div>
    </section>
  )
}