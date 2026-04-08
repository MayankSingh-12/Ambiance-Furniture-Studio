import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  title: string
  category: string
  description: string
  image: string
  features: string[]
}

export default function ProductCard({ title, category, description, image, features }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-cream-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute top-4 left-4 bg-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-dark mb-2 group-hover:text-gold transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>

        {/* Features */}
        <ul className="grid grid-cols-2 gap-1 mb-5">
          {features.map((f) => (
            <li key={f} className="text-xs text-gray-400 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <button className="flex items-center gap-2 text-gold text-sm font-semibold group-hover:gap-3 transition-all">
          Enquire Now <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}
