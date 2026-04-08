import { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'
import { PRODUCTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Our Products | Ambiance Furniture Studio | Faridabad',
  description:
    'Explore Ambiance Furniture Studio\'s full range: designer sofas, wall units, dining sets, beds, office furniture, modular kitchens & custom wooden pieces — crafted in Faridabad.',
}

const categories = ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end pb-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/60" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Our Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">Our Product Range</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">Handcrafted with Pride</p>
          <h2 className="font-serif text-3xl md:text-4xl text-dark mb-4">
            Furniture for Every Room, Every Need
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mb-5" />
          <p className="text-gray-500 leading-relaxed">
            Every piece in our collection is manufactured in-house at our 2,000 sq. m. factory in Faridabad,
            using premium materials and traditional craftsmanship refined over 40+ years. From statement
            sofas to fully custom bespoke pieces — we have something for every home and office.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Category labels */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border cursor-default select-none ${
                  cat === 'All'
                    ? 'bg-gold text-white border-gold'
                    : 'bg-white text-gray-500 border-cream-200 hover:border-gold hover:text-gold transition-colors'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom orders */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <div className="inline-block text-4xl mb-5">🎨</div>
          <h2 className="font-serif text-3xl md:text-4xl text-dark mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
            We specialise in fully bespoke, made-to-measure furniture. Bring us your ideas, sketches, or
            references — and our artisans will craft exactly what you need, to your exact dimensions, style,
            and material preferences.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded transition-all hover:-translate-y-0.5"
          >
            Enquire About Custom Furniture
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
