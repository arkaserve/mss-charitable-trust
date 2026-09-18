import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: 'rgb(245,240,232)' }}
    >
      {/* Logo */}
      <div className="mb-6 opacity-80">
        <Logo size={72} />
      </div>

      {/* 404 number */}
      <div
        className="text-8xl sm:text-9xl font-black leading-none mb-4 select-none"
        style={{ color: 'rgb(212,201,175)', fontFamily: "'Lora', serif" }}
      >
        404
      </div>

      {/* Divider */}
      <div className="w-16 h-0.5 mb-6" style={{ backgroundColor: 'rgb(200,169,110)' }} />

      {/* Heading */}
      <h1
        className="text-2xl sm:text-3xl font-bold mb-3"
        style={{ color: 'rgb(52,40,24)', fontFamily: "'Lora', serif" }}
      >
        Page Not Found
      </h1>

      {/* Sub-text */}
      <p className="text-sm sm:text-base max-w-md leading-relaxed mb-8" style={{ color: 'rgb(107,91,62)' }}>
        The page you're looking for doesn't exist or may have been moved.
        Let's get you back to where it matters — serving those in need.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-full text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'rgb(26,92,56)' }}
        >
          ← Back to Home
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'rgb(232,224,210)', color: 'rgb(82,68,42)', border: '1px solid rgb(212,201,175)' }}
        >
          Contact Us
        </Link>
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs" style={{ color: 'rgb(139,115,85)' }}>
        MSS Charitable Trust · Serving with Compassion
      </p>
    </div>
  )
}
