import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import { COMPANY } from '@/lib/data'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'About Us | Ambiance Furniture Studio | Faridabad',
  description:
    'Learn about Ambiance Furniture Studio — 40+ years of premium furniture craftsmanship in Faridabad, Haryana. A unit of Aar Key Group led by proprietor Mr. Rakesh Hans.',
}

const milestones = [
  { year: '1980s', event: 'Ambiance Furniture Studio is founded in Faridabad, Haryana, beginning with traditional handcrafted wooden furniture.' },
  { year: '1990s', event: 'Expansion into upholstered furniture, adding designer sofas and wall units to the product range, growing the client base significantly.' },
  { year: '2000s', event: 'Investment in modern machinery and equipment while maintaining traditional craftsmanship — the best of both worlds.' },
  { year: '2010s', event: 'Registration as Aar Key Group and further expansion into office furniture and modular kitchens, serving commercial clients.' },
  { year: 'Today', event: 'Operating from a 2,000 sq. m. factory and warehouse, Ambiance Furniture Studio continues to serve homes and offices across Faridabad and the NCR region.' },
]

const values = [
  { title: 'Quality Above All', description: 'Every piece of furniture leaves our factory only after rigorous quality checks. We never compromise on the materials, finishes, or structural integrity of our work.' },
  { title: 'Customer First', description: 'We attend closely to the specific needs of every buyer — from understanding their space to recommending the right materials and designs.' },
  { title: 'Traditional Craftsmanship', description: 'Our artisans carry forward techniques honed over generations, blending traditional joinery methods with modern equipment for results that last decades.' },
  { title: 'Honest Business', description: 'We maintain strong business principals — transparent pricing, reliable delivery timelines, and a commitment to standing behind every product we sell.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end pb-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/60" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">About Ambiance Furniture Studio</h1>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">Who We Are</p>
              <h2 className="font-serif text-4xl text-dark leading-tight mb-4">
                Faridabad's Premier<br />Furniture Manufacturer
              </h2>
              <div className="w-12 h-1 bg-gold mb-6" />

              <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
                <p>
                  <strong className="text-dark">Ambiance Furniture Studio</strong>, a unit of the{' '}
                  <strong className="text-dark">Aar Key Group</strong>, has been involved in the furniture industry for
                  more than 40 years. Led by proprietor{' '}
                  <strong className="text-dark">{COMPANY.proprietor}</strong>, we have grown to be a sizable player in
                  this field, manufacturing our own designs in our{' '}
                  <strong className="text-dark">2,000 sq. meter factory and warehousing premises</strong> on Main
                  Mathura Road, Faridabad.
                </p>
                <p>
                  We maintain strong business principals on making quality products and attending to the specific needs
                  of our buyers. This coupled with our knowledge of traditional craftsmanship, honed to perfection over
                  the years and our modern equipment, enable us to make each and every piece of furniture of
                  distinction.
                </p>
                <p>
                  As a company in the business for more than 40 years, and with heavy investments in production
                  facilities, you can be assured that we take our business seriously and will always continue to provide
                  our customers with the best furniture pieces for years to come.
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  'Manufacturer, retailer & exporter of premium furniture',
                  'Own 2,000 sq. m. factory in Faridabad, Haryana',
                  'Complete in-house production — no outsourcing',
                  'Serving homes and offices across NCR for 40+ years',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="relative h-72 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80"
                  alt="Ambiance Furniture Studio showroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gold/8 border border-gold/20 rounded-xl p-6 text-center">
                  <div className="font-serif text-4xl text-gold font-bold mb-1">40+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Years in Business</div>
                </div>
                <div className="bg-dark/5 border border-dark/10 rounded-xl p-6 text-center">
                  <div className="font-serif text-4xl text-dark font-bold mb-1">2K</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Sq. Mt. Factory</div>
                </div>
                <div className="bg-dark/5 border border-dark/10 rounded-xl p-6 text-center">
                  <div className="font-serif text-4xl text-dark font-bold mb-1">7+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Product Categories</div>
                </div>
                <div className="bg-gold/8 border border-gold/20 rounded-xl p-6 text-center">
                  <div className="font-serif text-4xl text-gold font-bold mb-1">★5</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Foundation</p>
            <h2 className="font-serif text-4xl text-dark mb-4">Our Core Values</h2>
            <div className="w-12 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
                <h3 className="font-serif text-xl text-dark mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Journey</p>
            <h2 className="font-serif text-4xl text-dark mb-4">Four Decades of Growth</h2>
            <div className="w-12 h-1 bg-gold mx-auto" />
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gold/20" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 items-start relative">
                  <div className="w-32 flex-shrink-0 text-right">
                    <span className="font-serif text-gold font-bold text-lg">{m.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-[62px] top-1.5 w-3 h-3 rounded-full bg-gold border-2 border-white shadow" />
                  <div className="flex-1 bg-cream rounded-xl p-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
