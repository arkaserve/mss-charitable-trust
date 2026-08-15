import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import DonateModal from './components/DonateModal'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import OurImpact from './pages/OurImpact'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
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
          <Route path="/impact"    element={<OurImpact />} />
          <Route path="/get-involved" element={<GetInvolved openDonate={openDonate} />} />
          <Route path="/contact"   element={<Contact />} />
          {/* Fallback */}
          <Route path="*"          element={<Home openDonate={openDonate} />} />
        </Routes>
      </main>
      <Footer />
      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
      {!donateOpen && (
        <button
          onClick={openDonate}
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 bg-marigold hover:bg-marigold-dark text-white font-bold text-sm px-5 py-3.5 rounded-full shadow-xl transition-colors duration-200 min-h-[48px] touch-manipulation"
          aria-label="Open donation panel"
        >
          Donate Now ↑
        </button>
      )}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
