import HeroMascot from './HeroMascot'

const TAGLINE = ['Ideas,', 'engineered', 'into', 'digital', 'momentum.']

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:px-10">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-blue/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[28rem] w-[28rem] rounded-full bg-teal/10 blur-[140px]" />

      <div className="relative">
        <div className="overflow-hidden">
          <h1 className="font-display animate-mark-in select-none text-[43vw] font-bold leading-[0.82] tracking-tighter text-paper">
            spafa
          </h1>
        </div>

        <HeroMascot className="absolute -bottom-2 right-[6%] z-20 w-[26vw] sm:right-[10%] sm:w-[22vw] md:right-[14%] md:w-[19vw] lg:right-[18%] lg:w-[15vw]" />

        <div className="mt-5 flex flex-wrap gap-x-3 sm:mt-7 md:ml-2">
          {TAGLINE.map((word, i) => (
            <span key={word} className="overflow-hidden pb-1">
              <span
                className="inline-block animate-word-in text-xl text-muted sm:text-2xl md:text-3xl"
                style={{ animationDelay: `${0.75 + i * 0.08}s` }}
              >
                {word}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-20 flex items-end justify-between gap-6 sm:mt-28">
        <p className="max-w-sm animate-fade-in text-sm text-muted" style={{ animationDelay: '1.3s' }}>
          A digital studio for brands that refuse to blend in. Strategy, product and story, built as one.
        </p>
        <a
          href="#work"
          className="group flex animate-fade-in flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted transition-colors hover:text-teal"
          style={{ animationDelay: '1.3s' }}
        >
          Scroll
          <span className="h-12 w-px bg-line transition-colors group-hover:bg-teal" />
        </a>
      </div>
    </section>
  )
}
