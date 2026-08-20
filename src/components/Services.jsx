import Reveal from './Reveal'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useStackProgress } from '../hooks/useStackProgress'

const SERVICES = [
  {
    title: ['Brand', 'Systems'],
    items: ['Identity', 'Typography', 'Color & Motion', 'Tone of Voice', 'Guidelines'],
    copy: "We build brands that hold together across every surface — from a favicon to a billboard — so the story never breaks stride.",
  },
  {
    title: ['Product', 'Engineering'],
    items: ['Web Development', 'App Development', 'UI/UX Design', 'Interactions', 'CMS'],
    copy: 'Our engineers and designers sit in the same room, so what ships matches what was designed — down to the last transition.',
  },
  {
    title: ['Growth', 'Marketing'],
    items: ['Performance Media', 'SEO', 'Social', 'Content', 'Email'],
    copy: "Marketing that's measured, not just made. We build campaigns around the numbers that actually move your business.",
  },
  {
    title: ['Visual', 'Design'],
    items: ['Art Direction', '3D & Motion', 'Photography', 'Illustration', 'Packaging'],
    copy: 'When a static mockup falls short, our visual team builds the world around your product, frame by frame.',
  },
]

function ServiceCard({ service }) {
  return (
    <>
      <h3 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight lg:text-7xl">
        <span className="block text-paper">{service.title[0]}</span>
        <span className="block text-muted">{service.title[1]}</span>
      </h3>

      <div className="mt-8 flex flex-wrap gap-2 md:mt-12">
        {service.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-surface-2 px-4 py-2 text-sm text-paper/80 md:px-6 md:text-base"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="mt-8 max-w-md text-sm leading-relaxed text-muted md:mt-12 md:text-base">{service.copy}</p>
    </>
  )
}

function ServiceStack() {
  const count = SERVICES.length
  const [containerRef, progress] = useStackProgress(count)

  return (
    <div ref={containerRef} className="relative" style={{ height: `${count * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="relative w-full" style={{ height: 'min(70vh, 620px)' }}>
          {SERVICES.map((service, i) => {
            const own = Math.min(Math.max(progress - (i - 1), 0), 1)
            const depth = Math.min(Math.max(progress - i, 0), 3)
            const translate = own < 1 ? (1 - own) * 120 : -depth * 6
            const scale = own < 1 ? 1 : 1 - depth * 0.045

            return (
              <div
                key={service.title.join(' ')}
                className="absolute inset-0 rounded-[3rem] bg-surface px-12 py-16 shadow-2xl shadow-deep/15"
                style={{
                  zIndex: i,
                  transform: `translateY(${translate}%) scale(${scale})`,
                }}
              >
                <ServiceCard service={service} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ServiceFlow() {
  return (
    <div className="flex flex-col gap-6">
      {SERVICES.map((service, i) => (
        <Reveal
          key={service.title.join(' ')}
          delay={i * 0.06}
          animation="animate-card-in"
          className="rounded-[2rem] bg-surface px-6 py-12"
        >
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </div>
  )
}

export default function Services() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <section id="studio" className="border-t border-line px-6 pb-28 pt-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <Reveal as="h2" className="font-display text-4xl font-semibold tracking-tight text-paper md:text-6xl">
            We're a studio built for brands that move first.
          </Reveal>
        </div>

        {isDesktop ? <ServiceStack /> : <ServiceFlow />}
      </div>
    </section>
  )
}
