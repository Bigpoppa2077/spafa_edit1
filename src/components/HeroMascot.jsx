export default function HeroMascot({ className = '' }) {
  return (
    <div className={`animate-mark-pop pointer-events-none select-none ${className}`} style={{ animationDelay: '0.5s' }}>
      <div className="animate-float">
        <svg viewBox="0 0 240 260" className="block h-auto w-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="botGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-teal)" />
              <stop offset="100%" stopColor="var(--color-blue)" />
            </linearGradient>
          </defs>

          <ellipse cx="120" cy="246" rx="62" ry="9" fill="var(--color-paper)" opacity="0.12" />

          <path
            d="M88 138 L58 226"
            stroke="var(--color-paper)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M152 138 L182 226"
            stroke="var(--color-paper)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <circle cx="58" cy="228" r="11" fill="var(--color-paper)" />
          <circle cx="182" cy="228" r="11" fill="var(--color-paper)" />

          <line x1="120" y1="40" x2="120" y2="14" stroke="var(--color-paper)" strokeWidth="6" strokeLinecap="round" />
          <circle cx="120" cy="12" r="7" fill="var(--color-teal)" />

          <rect x="58" y="38" width="124" height="108" rx="42" fill="url(#botGrad)" />

          <rect x="80" y="76" width="80" height="26" rx="13" fill="var(--color-paper)" />
          <circle cx="104" cy="89" r="5.5" fill="var(--color-teal)" />
          <circle cx="136" cy="89" r="5.5" fill="var(--color-teal)" />
        </svg>
      </div>
    </div>
  )
}
