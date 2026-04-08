import Link from 'next/link'
import { Star, ExternalLink } from 'lucide-react'
import { REVIEWS, COMPANY } from '@/lib/data'

export default function Reviews() {
  return (
    <section className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">Customer Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark leading-tight mb-4">
            What Our Clients Say
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mb-5" />
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Real feedback from real customers who trusted us to furnish their homes and offices.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 font-serif text-6xl text-gold/15 leading-none select-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed italic mb-5 relative z-10">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-dark text-sm">{review.name}</div>
                  <div className="text-xs text-gray-400">
                    {review.source} · {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={COMPANY.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold border-b border-gold/40 hover:border-gold text-sm font-semibold pb-0.5 transition-colors"
          >
            Read all reviews on Google
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
