'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/data'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-dark shadow-2xl shadow-black/30'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-end gap-6 px-8 py-2 text-xs text-gray-400 border-b border-white/5">
        <a
          href={`tel:${COMPANY.phone}`}
          className="flex items-center gap-1.5 hover:text-gold transition-colors"
        >
          <Phone size={11} />
          {COMPANY.phone}
        </a>
        <span className="text-white/20">|</span>
        <span>{COMPANY.hours}</span>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-lg text-white font-semibold tracking-wide">
            Ambiance <span className="text-gold">Furniture Studio</span>
          </span>
          <span className="text-[10px] text-gray-400 tracking-[0.18em] uppercase">{COMPANY.group}</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors gold-underline ${
                pathname === link.href ? 'text-gold' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
        >
          Get a Quote
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium tracking-widest uppercase py-2 border-b border-white/5 ${
                pathname === link.href ? 'text-gold' : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 text-gold text-sm font-semibold mt-2"
          >
            <Phone size={14} />
            {COMPANY.phone}
          </a>
        </div>
      )}
    </header>
  )
}
