import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { to: '/',            label: 'Home',        end: true },
  { to: '/about',       label: 'About Us'              },
  { to: '/our-work',    label: 'Our Work'              },
  { to: '/gallery',     label: 'Photo Gallery'         },
  { to: '/get-involved',label: 'Get Involved'          },
  { to: '/contact',     label: 'Contact'               },
]

export default function Nav({ navOpen, setNavOpen, openDonate }) {
  const close = () => setNavOpen(false)

  return (
    <>
      {/* ── Main nav ── */}
      <nav className="sticky top-0 z-50 bg-forest-deep shadow-md">
        <div className="w-full px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" onClick={close} className="flex items-center gap-3 shrink-0">
            <Logo size={52} className="shrink-0" />
            <div className="font-black text-base sm:text-lg text-white whitespace-nowrap">MSS Charitable Trust</div>
          </Link>

          {/* Desktop nav links — visible only on lg+ */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-bold text-sm border-b-2 border-marigold pb-0.5'
                    : 'text-sm text-white/75 hover:text-white transition-colors pb-0.5 border-b-2 border-transparent'
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/get-involved"
              className="bg-marigold hover:bg-marigold-dark text-white text-sm font-bold px-5 py-2 rounded-full transition-colors ml-1 whitespace-nowrap"
            >
              Donate Now
            </NavLink>
          </div>

          {/* Hamburger — visible on mobile & tablet (< lg) */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 items-center rounded hover:bg-white/10 transition-colors"
            onClick={() => setNavOpen(!navOpen)}
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${navOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${navOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${navOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile/Tablet slide-in drawer ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 z-50 bg-forest-deep flex flex-col transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <Logo size={36} />
            <span className="text-white font-bold text-sm whitespace-nowrap">MSS Charitable Trust</span>
          </div>
          <button
            onClick={close}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto py-4">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={close}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-4 text-base font-semibold border-l-4 transition-colors ${
                  isActive
                    ? 'border-marigold text-white bg-white/10'
                    : 'border-transparent text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Drawer footer */}
        <div className="px-6 pb-8 pt-4 border-t border-white/10 shrink-0 space-y-3">
          <NavLink
            to="/get-involved"
            onClick={close}
            className="w-full bg-marigold hover:bg-marigold-dark text-white font-bold text-sm py-3.5 rounded-full transition-colors min-h-[48px] touch-manipulation text-center block"
          >
            Donate Now
          </NavLink>
          <div className="space-y-1.5 pt-2 text-xs text-white/50">
            <div>📞 +91 98663 76367</div>
            <div>✉️ msscharitabletrust4u@gmail.com</div>
            <div className="pt-1 text-white/35">Reg. No. MSST/2024</div>
          </div>
        </div>
      </div>
    </>
  )
}
