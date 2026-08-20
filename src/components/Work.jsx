import Reveal from './Reveal'

const PROJECTS = [
  { name: 'Nova Orbit', tag: 'Product Launch', gradient: 'from-blue/40 via-surface-3 to-surface' },
  { name: 'Ridgeline', tag: 'Brand System', gradient: 'from-teal/30 via-surface-3 to-surface' },
  { name: 'Themis Law', tag: 'Web Platform', gradient: 'from-surface-3 via-blue/20 to-surface' },
  { name: 'Aeva Labs', tag: 'App Design', gradient: 'from-surface-3 via-teal/20 to-surface' },
  { name: 'Halcyon', tag: 'Marketing Site', gradient: 'from-blue/30 via-surface-3 to-surface' },
  { name: 'Profit&Co', tag: 'E-commerce', gradient: 'from-teal/25 via-surface-3 to-surface' },
]

export default function Work() {
  return (
    <section id="work" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal as="h2" className="font-display text-4xl font-semibold tracking-tight text-paper md:text-6xl">
            Selected Work
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm text-muted">
            A handful of the products, brands and platforms we've helped move faster than their category.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal
              as="a"
              key={project.name}
              delay={(i % 3) * 0.08}
              className="group block overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <div className={`aspect-[4/3] w-full bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`} />
              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="font-display text-lg text-paper">{project.name}</h3>
                <span className="text-xs uppercase tracking-widest text-muted">{project.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
