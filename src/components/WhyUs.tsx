import { FEATURES } from '@/lib/data'

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
              <div className="text-4xl mb-5">{feature.icon}</div>
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
