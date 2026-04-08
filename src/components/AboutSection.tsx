import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { COMPANY } from '@/lib/data'

const highlights = [
  'In-house manufacturing in a 2,000 sq. m. factory',
  'Traditional craftsmanship refined over 40 years',
  '100% quality-checked before every delivery',
  'Custom furniture tailored to your exact needs',
]

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image stack */}
          <div className="relative hidden lg:block">
            <div className="relative h-[560px] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=900&q=80"
                alt="Ambiance Furniture Studio workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-gold flex flex-col items-center justify-center text-center shadow-2xl shadow-gold/30 z-10">
              <span className="font-serif text-5xl text-white font-bold leading-none">40+</span>
              <span className="text-white/80 text-xs uppercase tracking-widest mt-1">Years in<br/>Business</span>
            </div>
            {/* Second image card */}
            <div className="absolute -bottom-4 -left-4 w-48 h-36 rounded-lg overflow-hidden shadow-xl border-4 border-white z-10">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
                alt="Ambiance Furniture craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark leading-tight mb-4">
              Four Decades of<br />
              <em className="text-gold italic">Furniture Excellence</em>
            </h2>
            <div className="w-12 h-1 bg-gold mb-6" />

            <p className="text-gray-500 leading-relaxed mb-4">
              <strong className="text-dark">Ambiance Furniture Studio</strong> — a unit of the{' '}
              <strong className="text-dark">Aar Key Group</strong> — has been a trusted name in the furniture
              industry for more than 40 years. Led by proprietor{' '}
              <strong className="text-dark">{COMPANY.proprietor}</strong>, we have grown from a small workshop
              into a sizable manufacturer and retailer operating from our{' '}
              <strong className="text-dark">2,000 sq. m. factory and warehousing facility</strong> on Mathura
              Road, Faridabad.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We uphold strong business principles focused on quality and attending to the specific needs of every
              buyer. Our traditional craftsmanship — refined over four generations of skilled artisans — combined
              with modern equipment ensures that each and every piece we produce stands apart.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-dark hover:bg-dark-700 text-white font-semibold px-7 py-3.5 rounded transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
