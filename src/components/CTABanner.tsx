import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { COMPANY } from '@/lib/data'

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-dark/85" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">Ready to Get Started?</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-5 leading-tight">
          Visit Our Showroom<br />or Call Us Today
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Come see our full collection in person at our showroom on Mathura Road, Faridabad — or give us a call
          to discuss your requirements. We&apos;re here to help.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
          >
            <Phone size={16} />
            {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/40 hover:border-gold hover:bg-gold/10 text-white font-medium px-8 py-4 rounded transition-all"
          >
            Get Directions
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
