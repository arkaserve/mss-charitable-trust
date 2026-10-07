import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-end w-full"
      style={{ minHeight: '92vh' }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
        }}
      />

      {/* Dark overlay — same warm-brown tint as JWF */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(52,34,14,0.72)' }}
        aria-hidden="true"
      />

      {/* Content — left-aligned like JWF */}
      <div className="relative z-10 w-full max-w-4xl px-5 sm:px-8 lg:px-16 pb-20 sm:pb-28">

        {/* Eyebrow label */}
        <div
          className="text-xs font-bold uppercase tracking-widest mb-5"
          style={{ color: 'rgb(200,169,110)' }}
        >
          Nonprofit · India
        </div>

        {/* Main heading */}
        <h1
          className="font-black text-white leading-tight mb-5"
          style={{
            fontFamily: "'Lora', serif",
            fontSize: 'clamp(2.2rem, 6vw, 4.2rem)',
            textShadow: '0 2px 20px rgba(0,0,0,0.35)',
          }}
        >
          Welcome to MSS<br />Charitable Trust
        </h1>

        {/* Gold subtitle */}
        <div
          className="text-xl sm:text-2xl font-semibold mb-5"
          style={{ color: 'rgb(200,169,110)', fontFamily: "'Lora', serif" }}
        >
          We Care for People
        </div>

        {/* Description */}
        <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
          Join MSS Charitable Trust in creating lasting change for those in need.
          Discover volunteer opportunities that uplift and transform lives across
          India.
        </p>

        {/* CTA Buttons — JWF rounded-lg style, not pill */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-lg transition-opacity hover:opacity-90 min-h-[52px] touch-manipulation"
            style={{ backgroundColor: 'rgb(200,169,110)', color: 'rgb(52,34,14)' }}
          >
            Get Involved Today
          </Link>
          <Link
            to="/our-work"
            className="inline-flex items-center justify-center font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-lg transition-colors hover:bg-white/10 min-h-[52px] touch-manipulation"
            style={{ border: '2px solid rgb(200,169,110)', color: 'white' }}
          >
            Learn About Our Initiatives
          </Link>
        </div>
      </div>
    </section>
  )
}
