import { Link } from 'react-router-dom'

export default function CTABand() {
  return (
    <div className="bg-forest py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-4">
          Be the Reason Someone Smiles Today
        </h2>
        <p className="text-white/70 mb-10 text-sm max-w-lg mx-auto leading-relaxed">
          Your support makes every meal, every scholarship, every health check-up possible.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="bg-white text-forest font-bold px-8 py-3.5 rounded text-sm hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
          <Link
            to="/get-involved"
            className="border border-white/50 text-white font-bold px-8 py-3.5 rounded text-sm hover:bg-white/10 transition-colors"
          >
            Donate Now →
          </Link>
        </div>
      </div>
    </div>
  )
}
