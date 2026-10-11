import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-forge-border bg-forge-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-cinzel text-xl font-bold text-forge-accent text-glow-gold tracking-wider">
          REALM FORGE
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-forge-text-muted hover:text-forge-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/projects"
          className="hidden md:inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-forge-primary to-indigo-600 text-white text-sm font-semibold hover:shadow-glow transition-all duration-200"
        >
          Enter the Forge
        </Link>
      </div>
      <nav className="md:hidden flex items-center justify-center gap-6 pb-4 px-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-medium text-forge-text-muted hover:text-forge-accent transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}