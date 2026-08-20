import Reveal from './Reveal'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-teal/10 blur-[160px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <Reveal as="h2" className="font-display text-balance text-5xl font-semibold tracking-tight text-paper md:text-7xl">
          Let's build something worth talking about.
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@spafa.digital"
            className="rounded-full bg-teal px-8 py-4 font-display text-sm uppercase tracking-widest text-ink transition-transform hover:scale-105"
          >
            Chat with spafa
          </a>
          <a
            href="#top"
            className="rounded-full border border-line px-8 py-4 font-display text-sm uppercase tracking-widest text-paper transition-colors hover:border-teal hover:text-teal"
          >
            Book a meeting
          </a>
        </Reveal>
      </div>
    </section>
  )
}
