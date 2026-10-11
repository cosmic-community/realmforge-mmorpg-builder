import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-forge-border bg-forge-surface/50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-cinzel text-lg font-bold text-forge-accent mb-2">REALM FORGE</h3>
          <p className="text-sm text-forge-text-muted">
            Build Your World. Tell Your Story. A developer portfolio showcasing projects, skills, and experience.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-forge-text mb-3 uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/projects" className="text-sm text-forge-text-muted hover:text-forge-accent transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/skills" className="text-sm text-forge-text-muted hover:text-forge-accent transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/experience" className="text-sm text-forge-text-muted hover:text-forge-accent transition-colors">
                Experience
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-forge-text mb-3 uppercase tracking-wider">Powered By</h4>
          <p className="text-sm text-forge-text-muted">
            Content managed with{' '}
            <a
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forge-accent hover:underline"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-forge-border py-6 text-center text-xs text-forge-text-muted">
        © {year} Realm Forge. All rights reserved.
      </div>
    </footer>
  )
}