import { Metadata } from 'next'
import { MapPin, Phone, Clock, Instagram, ExternalLink, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Us | Ambiance Furniture Studio | Faridabad',
  description:
    'Visit Ambiance Furniture Studio at 15/2, Main Mathura Road, Sector 27A, Faridabad. Call us at 098101 64441. Open Mon–Sat: 10AM–7PM.',
}

const socialLinks = [
  { label: 'Instagram', href: COMPANY.social.instagram, icon: Instagram },
  { label: 'Google Maps', href: COMPANY.social.google, icon: ExternalLink },
  { label: 'IndiaMart', href: COMPANY.social.indiamart, icon: ExternalLink },
  { label: 'JustDial', href: COMPANY.social.justdial, icon: ExternalLink },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-80 flex items-end pb-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/60" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">We're Here to Help</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">Get in Touch</h1>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">Visit Us</p>
              <h2 className="font-serif text-4xl text-dark leading-tight mb-4">
                Come See Our<br />Showroom in Person
              </h2>
              <div className="w-12 h-1 bg-gold mb-6" />
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                We&apos;d love to help you find the perfect furniture for your home or office. Visit our showroom
                on Mathura Road, Faridabad — where our entire collection is on display, and our team is ready
                to assist you with custom consultations.
              </p>

              {/* Contact cards */}
              <div className="space-y-4 mb-10">
                <div className="flex gap-4 items-start p-5 bg-cream rounded-xl border border-cream-200">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Address</div>
                    <div className="text-sm text-dark font-medium">{COMPANY.address.line1}</div>
                    <div className="text-sm text-gray-500">{COMPANY.address.line2}</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-cream rounded-xl border border-cream-200">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Phone</div>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-sm text-dark font-medium hover:text-gold transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-cream rounded-xl border border-cream-200">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Working Hours</div>
                    <div className="text-sm text-dark font-medium">{COMPANY.hours}</div>
                    <div className="text-xs text-gray-400 mt-0.5">Sunday: Closed</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-cream rounded-xl border border-cream-200">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Proprietor</div>
                    <div className="text-sm text-dark font-medium">{COMPANY.proprietor}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{COMPANY.group}</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Find Us Online</p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2.5 bg-dark text-white text-sm font-semibold px-4 py-3 rounded-lg hover:opacity-95 hover:-translate-y-0.5 transition-all`}
                      >
                        <Icon size={16} className="flex-shrink-0 text-gold" />
                        {link.label}
                        <ExternalLink size={12} className="ml-auto opacity-70" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-xl border border-cream-200" style={{ height: '450px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.384264!2d77.30898!3d28.38012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc5b3e8a1b1b%3A0x5a5e2e2e2e2e2e2e!2sAmbiance%20Furniture%20Studio%2C%20Mathura%20Rd%2C%20Sector%2027A%2C%20Faridabad!5e0!3m2!1sen!2sin!4v1681000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ambiance Furniture Studio Location Map"
                />
              </div>

              <a
                href={COMPANY.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-dark hover:bg-gold text-white font-semibold py-4 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <MapPin size={16} />
                Open in Google Maps
                <ExternalLink size={14} className="opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry prompt */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl text-dark mb-4">Have a Question or Need a Quote?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            The easiest way to reach us is by phone or by visiting our showroom directly. Our team is happy to
            discuss your requirements, provide quotes, and help you choose the right furniture for your space.
          </p>
          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded transition-all hover:-translate-y-0.5"
          >
            <Phone size={16} />
            Call {COMPANY.phone}
          </a>
        </div>
      </section>
    </>
  )
}
