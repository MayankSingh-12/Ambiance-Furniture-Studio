import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductCard from './ProductCard'
import { PRODUCTS } from '@/lib/data'

export default function ProductsSection() {
  const featured = PRODUCTS.slice(0, 6)

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">What We Make</p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark leading-tight mb-4">
            Our Product Range
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            From statement sofas to solid wooden furniture, every piece is crafted with care, built to last, and delivered with pride.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border-2 border-dark hover:border-gold hover:bg-gold hover:text-white text-dark font-semibold px-8 py-3.5 rounded transition-all"
          >
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
