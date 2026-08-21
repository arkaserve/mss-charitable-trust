import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85',
    pos: 'center 25%',
    headline: 'MSS — Serving the Underprivileged across Andhra Pradesh',
  },
  {
    bg: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=85',
    pos: 'center 30%',
    headline: 'Educate a Child, Change a Community Forever.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=85',
    pos: 'center 35%',
    headline: 'Support Our Healthcare Programme for Rural Communities.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=85',
    pos: 'center 30%',
    headline: 'Every Rupee You Give Changes a Life.',
  },
]

export default function Hero({ openDonate }) {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setCur(c => (c - 1 + slides.length) % slides.length)
  const next = () => setCur(c => (c + 1) % slides.length)

  return (
    <div className="w-full">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-headline { animation: fadeUp 0.65s ease both; }
      `}</style>

      <section
        className="relative overflow-hidden flex flex-col justify-end w-full"
        style={{ height: '100vh', minHeight: 560 }}
      >
        {/* Background slides */}
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${s.bg}')`,
              backgroundSize: 'cover',
              backgroundPosition: s.pos,
              opacity: i === cur ? 1 : 0,
            }}
          />
        ))}

        {/* Gradient overlay — dark at bottom where text sits, photo clearly visible at top */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to top, rgba(8,34,24,0.95) 0%, rgba(8,34,24,0.70) 28%, rgba(8,34,24,0.20) 60%, rgba(8,34,24,0.04) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 border border-white/40 text-white flex items-center justify-center transition-all backdrop-blur-sm"
          aria-label="Previous slide"
          style={{ fontSize: 28, lineHeight: 1 }}
        >
          ‹
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 border border-white/40 text-white flex items-center justify-center transition-all backdrop-blur-sm"
          aria-label="Next slide"
          style={{ fontSize: 28, lineHeight: 1 }}
        >
          ›
        </button>

        {/* Content */}
        <div className="relative z-20 w-full px-5 sm:px-10 pb-24 sm:pb-40">
          <h1
            key={cur}
            className="hero-headline text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 sm:mb-8 max-w-4xl"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.45)' }}
          >
            {slides[cur].headline}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={openDonate}
              className="inline-flex items-center justify-center gap-3 bg-forest hover:bg-forest-dark text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-colors min-h-[52px] touch-manipulation"
            >
              Donate Now
              <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center text-sm">
                →
              </span>
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/40 bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full backdrop-blur-sm transition-colors min-h-[52px] touch-manipulation"
            >
              Contact Now
              <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center text-sm">
                ✉
              </span>
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === cur ? 'w-8 bg-white' : 'w-2 bg-white/35 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
