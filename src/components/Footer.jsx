const SOCIALS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'X', href: '#' },
]

const LINKS = [
  { label: 'Studio', href: '#studio' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-2xl font-semibold text-paper">
              spafa<span className="text-teal">.</span>
            </p>
            <p className="mt-2 text-sm text-muted">Independent digital studio.</p>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="self-start rounded-full border border-line px-5 py-2 font-display text-xs uppercase tracking-widest text-muted transition-colors hover:border-teal hover:text-teal md:self-end"
          >
            Go up
          </button>
        </div>

        <div className="flex flex-col gap-6 border-t border-line pt-8 text-xs uppercase tracking-widest text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} spafa digital</p>

          <nav className="flex gap-6">
            {LINKS.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-paper">
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="flex gap-6">
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} className="transition-colors hover:text-paper">
                {social.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
