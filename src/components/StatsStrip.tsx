import { STATS } from '@/lib/data'

export default function StatsStrip() {
  return (
    <section className="bg-dark-800 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-10 px-4 text-center ${
                i < STATS.length - 1 ? 'border-r border-white/5' : ''
              }`}
            >
              <span className="font-serif text-4xl text-gold font-bold mb-1">{stat.value}</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
