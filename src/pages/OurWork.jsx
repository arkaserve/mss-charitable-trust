import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const subNav = [
  { href: '#education', label: 'Education Support' },
  { href: '#healthcare',label: 'Healthcare Camps'  },
]

const programs = [
  {
    id: 'education',
    title: 'Education Support',
    accent: '#1A5C38',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    quote: '"An educated child is a village transformed. When we invest in one child\'s future, we invest in the future of an entire family — and every generation that follows."',
    items: [
      { label: 'Scholarships for orphans & the poorest', desc: 'We provide scholarships exclusively to orphaned children and families in extreme poverty — those who have no other means of support for their child\'s education.' },
      { label: 'School kits distribution',               desc: 'Books, bags, uniforms, and stationery given before every academic year.' },
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare Camps',
    img: 'https://images.unsplash.com/photo-1551601651-09492b5468b6?auto=format&fit=crop&w=900&q=80',
    subPrograms: [
      {
        eyebrow: 'Early Detection and Prevention of Diseases',
        title: 'Free Medical Camps',
        desc: 'We conduct free medical camps in villages and underserved areas, bringing qualified doctors and diagnostic equipment directly to communities who cannot afford healthcare.',
        img: 'https://images.unsplash.com/photo-1551601651-09492b5468b6?auto=format&fit=crop&w=900&q=80',
        items: [
          'Blood pressure, Diabetes & BMI screening',
          'General physician consultations',
          'Free medicines distribution',
          'Specialist referrals for critical cases',
          'Vision and hearing tests',
        ],
      },
      {
        eyebrow: 'Empowering Communities with Health Knowledge',
        title: 'Health Awareness Programs',
        desc: 'Our health awareness programmes educate communities about preventive healthcare, hygiene, and nutrition — empowering people to take charge of their own health.',
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
        items: [
          'Hygiene and sanitation education',
          'Nutrition and diet counselling',
          'Disease prevention workshops',
          'Maternal and child health awareness',
          'School health education drives',
        ],
      },
    ],
  },
]

export default function OurWork() {
  const [activeId, setActiveId] = useState('education')

  useEffect(() => {
    const ids = subNav.map(s => s.href.replace('#', ''))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative flex flex-col justify-end overflow-hidden" style={{ height: 145 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,34,24,0.96) 0%, rgba(8,34,24,0.65) 50%, rgba(8,34,24,0.2) 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 pb-8 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight mb-2 whitespace-nowrap" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            What We Do
          </h1>
        </div>
      </div>

      {/* ── Sub-nav ── */}
      <div className="sticky top-16 z-30 bg-forest-deep border-b border-white/10 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-0 min-w-max">
            {subNav.map(s => {
              const id = s.href.replace('#', '')
              const isActive = activeId === id
              return (
                <button
                  key={s.href}
                  onClick={() => {
                    const el = document.getElementById(id)
                    if (!el) return
                    const top = el.getBoundingClientRect().top + window.scrollY - 110
                    window.scrollTo({ top, behavior: 'smooth' })
                    setActiveId(id)
                  }}
                  className={`text-xs font-semibold uppercase tracking-wider py-2.5 px-5 border-b-2 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-white border-marigold'
                      : 'text-white/55 border-transparent hover:text-white hover:border-marigold'
                  }`}
                >
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Program Sections ── */}
      {programs.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`py-12 scroll-mt-28 ${i % 2 === 0 ? 'bg-cream' : 'bg-white'}`}
        >
          <div className="max-w-6xl mx-auto px-6">
            {p.subPrograms ? (
              /* ── Sub-program cards layout (Healthcare) ── */
              <div>
                <div className="space-y-6">
                  {p.subPrograms.map((sp, k) => (
                    <div key={k} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                      <div className={`flex flex-col lg:flex-row ${k % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <img
                          src={sp.img}
                          alt={sp.title}
                          className="w-full lg:w-5/12 object-cover shrink-0"
                          style={{ height: 260 }}
                        />
                        <div className="p-6 flex flex-col justify-between flex-1">
                          <div>
                            <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#CB7D0B' }}>{sp.eyebrow}</div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Lora', serif" }}>{sp.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{sp.desc}</p>
                            <ul className="space-y-2">
                              {sp.items.map((item, m) => (
                                <li key={m} className="flex items-start gap-2 text-sm text-gray-700">
                                  <span className="mt-1 shrink-0" style={{ color: '#CB7D0B' }}>●</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5">
                            <span className="inline-block text-white text-xs font-semibold px-4 py-1.5 rounded-full" style={{ backgroundColor: '#1A3A2A' }}>
                              MSS Charitable Trust Initiative
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
              {p.quote && (
                <div className="mb-8 py-6 px-8 rounded-2xl text-center relative overflow-hidden" style={{ backgroundColor: 'rgb(232,224,210)', border: '1px solid rgb(212,201,175)' }}>
                  <div className="text-6xl leading-none mb-2 opacity-20 select-none" style={{ color: 'rgb(82,68,42)', fontFamily: "'Lora', serif" }}>"</div>
                  <p className="text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto -mt-4" style={{ color: 'rgb(60,48,28)', fontFamily: "'Lora', serif" }}>
                    {p.quote.replace(/^"|"$/g, '')}
                  </p>
                  <div className="mt-4 text-xs font-bold uppercase tracking-widest" style={{ color: 'rgb(139,115,85)' }}>— MSS Charitable Trust</div>
                </div>
              )}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>

              {/* Image side */}
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full rounded-xl shadow-xl object-cover"
                  style={{ height: 340 }}
                />
              </div>

              {/* Content side */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                  {p.title}
                </h2>
                {p.intro && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic border-l-4 border-forest/20 pl-4">
                    {p.intro}
                  </p>
                )}
                <div className="space-y-3">
                  {p.items.map((item, j) => (
                    <div key={j} className="flex gap-3 bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white font-black text-xs" style={{ backgroundColor: p.accent }}>
                        {j + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">{item.label}</div>
                        <div className="text-gray-400 text-sm leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

              </>
            )}
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <div className="py-16 px-6 text-center" style={{ backgroundColor: 'rgb(82,68,42)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Ready to make a difference?
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'rgb(212,185,140)' }}>
            Contact us to discuss how your support can be directed to the cause closest to your heart.
            We respond within 24 hours on working days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'rgb(200,169,110)', color: 'white' }}
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </>
  )
}
