import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-cinzel text-6xl font-bold text-forge-accent text-glow-gold mb-4">404</h1>
      <p className="text-forge-text-muted mb-8 max-w-md">
        This realm has not been forged yet, or the path you sought has crumbled into the void.
      </p>
      <Link href="/" className="btn-primary px-8 py-3">
        Return to the Forge
      </Link>
    </div>
  )
}