import { FEATURES } from '@/lib/data'

function Icon({ name, className }: { name: string; className?: string }) {
  const base = `inline-block ${className ?? ''}`.trim()
  switch (name) {
    case 'materials':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 11h18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'expertise':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2l2.6 5.3L20 8.2l-4 3.5L17 18l-5-2.6L7 18l1-6.3L4 8.2l5.4-.9L12 2z" stroke="currentColor" strokeWidth="1" fill="currentColor" />
        </svg>
      )
    case 'manufacturing':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 13h18v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 13V8l4-2v7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'design':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 21l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="7" cy="17" r="1.2" fill="currentColor" />
        </svg>
      )
    case 'service':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 12h6l2 6 4-10 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )
    case 'warehousing':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 9l9-4 9 4v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    default:
      return <span className={base} />
  }
}

export default function WhyUs() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -left-32 top-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">Why Choose Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            Built on Trust, Quality
            <br />& <em className="text-gold italic">Experience</em>
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group bg-white/3 border border-white/8 rounded-xl p-8 hover:bg-gold/8 hover:border-gold/30 transition-all duration-300"
            >
              <div>
                <Icon name={feature.icon} className="w-10 h-10 mb-5 text-gold group-hover:text-gold" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
