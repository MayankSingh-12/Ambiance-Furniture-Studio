import Link from 'next/link'
import { MapPin, Phone, Clock, Instagram, ExternalLink } from 'lucide-react'
import { COMPANY, PRODUCTS } from '@/lib/data'

export default function Footer() {
  const productCategories = [...new Set(PRODUCTS.map((p) => p.category))]

  return (
    <footer className="bg-dark text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <h3 className="font-serif text-xl text-white mb-1">
            Ambiance <span className="text-gold">Furniture Studio</span>
          </h3>
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">{COMPANY.group}</p>
          <p className="text-sm leading-relaxed text-gray-400 mb-6">
            Crafting furniture of distinction for over 40 years. Quality, craftsmanship, and customer care — from our factory to your home.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href={COMPANY.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold transition-colors flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram size={16} className="text-white" />
            </a>
            <a
              href={COMPANY.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold transition-colors flex items-center justify-center text-white text-xs font-bold"
              aria-label="Google Maps"
            >
              G
            </a>
            <a
              href={COMPANY.social.indiamart}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold transition-colors flex items-center justify-center text-white text-xs font-bold"
              aria-label="IndiaMart"
            >
              IM
            </a>
            <a
              href={COMPANY.social.justdial}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold transition-colors flex items-center justify-center text-white text-xs font-bold"
              aria-label="JustDial"
            >
              JD
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/products', label: 'Our Products' },
              { href: '/contact', label: 'Contact Us' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-gold transition-colors"
                >
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Product Categories</h4>
          <ul className="space-y-2.5">
            {productCategories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/products`}
                  className="text-sm text-gray-400 hover:text-gold transition-colors"
                >
                  → {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
              <span className="text-sm leading-relaxed">
                {COMPANY.address.line1},<br />
                {COMPANY.address.line2}
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={15} className="text-gold flex-shrink-0" />
              <a href={`tel:${COMPANY.phone}`} className="text-sm hover:text-gold transition-colors">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Clock size={15} className="text-gold flex-shrink-0" />
              <span className="text-sm">{COMPANY.hours}</span>
            </li>
          </ul>

          <a
            href={COMPANY.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-xs text-gold border border-gold/30 hover:bg-gold/10 transition-colors px-3 py-2 rounded"
          >
            <ExternalLink size={12} />
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Ambiance Furniture Studio — {COMPANY.group}. All rights reserved.</p>
        <p>Proprietor: {COMPANY.proprietor} · Faridabad, Haryana</p>
      </div>
    </footer>
  )
}
