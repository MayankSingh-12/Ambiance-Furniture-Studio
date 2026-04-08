'use client'

import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=85')",
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 px-6 max-w-5xl mx-auto pt-28 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold/50 text-gold text-xs font-semibold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8 backdrop-blur-sm bg-gold/5">
          <Star size={11} fill="currentColor" />
          Est. 40+ Years · Faridabad, Haryana
          <Star size={11} fill="currentColor" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Crafting Furniture
          <br />
          of{' '}
          <em className="text-gold not-italic italic">Distinction</em>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Manufacturing and retailing premium handcrafted furniture — direct from our{' '}
          <span className="text-white font-medium">2,000 sq. m. factory</span> in Faridabad to your home.
          Traditional craftsmanship, modern excellence.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
          >
            Explore Collection
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/40 hover:border-gold text-white hover:bg-gold/10 font-medium px-8 py-4 rounded transition-all"
          >
            Visit Our Showroom
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {[
            { val: '40+', label: 'Years Experience' },
            { val: '2,000', label: 'Sq. Mt. Factory' },
            { val: '7+', label: 'Product Categories' },
            { val: '★ 5.0', label: 'Customer Rating' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-serif text-2xl md:text-3xl text-gold font-bold">{item.val}</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}
