import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigationType } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import DonateModal from './components/DonateModal'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import PhotoGallery from './pages/PhotoGallery'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'

function ScrollToTop() {
  const { pathname, key } = useLocation()
  const navType = useNavigationType()

  // Save scroll position for the current history entry on every scroll
  useEffect(() => {
    const save = () => sessionStorage.setItem(`scroll:${key}`, String(window.scrollY))
    window.addEventListener('scroll', save, { passive: true })
    return () => window.removeEventListener('scroll', save)
  }, [key])

  // On navigation: restore saved position (back/forward) or go to top (new page)
  useEffect(() => {
    if (navType === 'POP') {
      const saved = sessionStorage.getItem(`scroll:${key}`)
      if (saved !== null) {
        // Wait one frame for React to finish rendering before restoring
        requestAnimationFrame(() => window.scrollTo(0, parseInt(saved, 10)))
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, key, navType])

  return null
}

function Layout() {
  const [donateOpen, setDonateOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = (donateOpen || navOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [donateOpen, navOpen])

  const openDonate = () => { setDonateOpen(true); setNavOpen(false) }

  return (
    <>
      <ScrollToTop />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} openDonate={openDonate} />
      <main>
        <Routes>
          <Route path="/"          element={<Home openDonate={openDonate} />} />
          <Route path="/about"     element={<AboutUs />} />
          <Route path="/our-work"  element={<OurWork />} />
          <Route path="/gallery"   element={<PhotoGallery />} />
          <Route path="/get-involved" element={<GetInvolved openDonate={openDonate} />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use"   element={<TermsOfUse />} />
          {/* Fallback */}
          <Route path="*"               element={<Home openDonate={openDonate} />} />
        </Routes>
      </main>
      <Footer />
      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
      <Link
        to="/get-involved"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 bg-marigold hover:bg-marigold-dark text-white font-bold text-sm px-5 py-3.5 rounded-full shadow-xl transition-colors duration-200 min-h-[48px] touch-manipulation"
        aria-label="Donate"
      >
        Donate Now ↑
      </Link>
    </>
  )
}

export default function App() {
  useEffect(() => {
    // Disable browser's own scroll restoration — we handle it manually
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
