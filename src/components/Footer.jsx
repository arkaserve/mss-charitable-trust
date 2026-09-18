import { Link } from 'react-router-dom'


const quickLinks = [
  { to: '/',             label: 'Home'        },
  { to: '/about',        label: 'About Us'    },
  { to: '/our-work',     label: 'Our Work'    },
  { to: '/gallery',      label: 'Photo Gallery'},
  { to: '/get-involved', label: 'Get Involved'},
  { to: '/contact',      label: 'Contact Us'  },
]

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">

        {/* Trust name — large centered heading */}
        <h2
          className="font-bold text-3xl md:text-4xl mb-10 text-center"
          style={{ fontFamily: "'Lora', serif", color: '#1A5C38' }}
        >
          MSS Charitable Trust (India)
        </h2>

        {/* Nav links with dot separators */}
        <div className="flex flex-wrap justify-center items-center mb-10">
          {quickLinks.map((l, i) => (
            <span key={l.to} className="flex items-center">
              <Link
                to={l.to}
                className="text-base font-medium px-3 transition-colors hover:opacity-80"
                style={{ color: '#4A7C59' }}
              >
                {l.label}
              </Link>
              {i < quickLinks.length - 1 && (
                <span className="text-sm select-none" style={{ color: '#CB7D0B' }}>·</span>
              )}
            </span>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center items-center gap-5 mb-10">
          <a href="#" aria-label="Facebook" className="transition-colors hover:opacity-70" style={{ color: '#1A5C38' }}>
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Instagram" className="transition-colors hover:opacity-70" style={{ color: '#1A5C38' }}>
            <InstagramIcon />
          </a>
          <a href="#" aria-label="YouTube" className="transition-colors hover:opacity-70" style={{ color: '#1A5C38' }}>
            <YouTubeIcon />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm mb-4" style={{ color: '#7A9E89' }}>
          © 2024 MSS Charitable Trust. All rights reserved.
        </p>

        {/* Privacy & Terms */}
        <div className="flex justify-center items-center gap-2">
          <Link
            to="/privacy-policy"
            className="text-sm hover:underline"
            style={{ color: '#CB7D0B' }}
          >
            Privacy Policy
          </Link>
          <span className="text-sm" style={{ color: '#CB7D0B' }}>·</span>
          <Link
            to="/terms-of-use"
            className="text-sm hover:underline"
            style={{ color: '#CB7D0B' }}
          >
            Terms of Use
          </Link>
        </div>

      </div>
    </footer>
  )
}
