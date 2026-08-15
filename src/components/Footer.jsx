import { Link } from 'react-router-dom'
import Logo from './Logo'

const quickLinks = [
  { to: '/',            label: 'Home'        },
  { to: '/about',       label: 'About Us'    },
  { to: '/our-work',    label: 'Our Work'    },
  { to: '/impact',      label: 'Our Impact'  },
  { to: '/get-involved',label: 'Get Involved'},
  { to: '/contact',     label: 'Contact Us'  },
]

const programs = [
  'Education Centres',
  'Children Support',
  'Women & Widows',
  'Healthcare & Wellness',
  'Livelihood & Skills',
]

const socials = [
  { label: 'FB',  href: '#' },
  { label: 'IG',  href: '#' },
  { label: 'YT',  href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-deep">

      {/* ── CTA strip ── */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-2">Make A Difference</div>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
              Ready to change a life today?
            </h3>
          </div>
          <Link
            to="/get-involved"
            className="shrink-0 bg-marigold hover:bg-marigold-dark text-white font-bold px-8 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap"
          >
            Donate Now →
          </Link>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo size={44} className="shrink-0" />
              <div>
                <div className="font-bold text-white text-sm whitespace-nowrap">MSS Charitable Trust</div>
                <div className="text-marigold text-xs mt-0.5 font-semibold">Serving Humanity</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A registered charitable organisation working to uplift underprivileged communities
              across Andhra Pradesh through education, healthcare, and empowerment.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-marigold flex items-center justify-center text-white text-xs font-bold transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-marigold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                  >
                    <span className="text-marigold text-xs transition-transform group-hover:translate-x-0.5">→</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-marigold mb-5">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((p, i) => (
                <li key={i}>
                  <Link
                    to="/our-work"
                    className="group flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                  >
                    <span className="text-marigold text-xs transition-transform group-hover:translate-x-0.5">→</span>
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Certifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-marigold mb-5">Get In Touch</h4>
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <span className="shrink-0 mt-0.5">📍</span>
                <span className="text-white/60 text-sm leading-relaxed">Guntur, Andhra Pradesh – 522315</span>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0">📞</span>
                <span className="text-white/60 text-sm">+91 98663 76367</span>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0">✉️</span>
                <span className="text-white/60 text-sm break-all">msscharitabletrust4u@gmail.com</span>
              </div>
            </div>

            {/* Certification badges */}
            <div className="flex flex-wrap gap-2">
              {['12A Registered', '80G Certified', 'Audited Yearly'].map((c, i) => (
                <span
                  key={i}
                  className="text-xs bg-forest text-forest-light px-3 py-1.5 rounded-full border border-forest-light/20 font-semibold"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-white/35 text-xs">© 2024 MSS Charitable Trust. All rights reserved.</span>
          <span className="text-white/35 text-xs">Registered under the Indian Trusts Act, 1882 · Reg. No. MSST/2024</span>
        </div>
      </div>

    </footer>
  )
}
