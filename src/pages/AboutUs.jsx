import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const subNav = [
  { href: '#in-memory',      label: 'In Memory'        },
  { href: '#who-we-are',     label: 'Founders'         },
  { href: '#our-story',      label: 'Our Story'        },
  { href: '#vision-mission', label: 'Vision & Mission' },
  { href: '#our-approach',   label: 'Our Approach'     },
  { href: '#our-values',     label: 'Our Values'       },
]


const approach = [
  { step: '01', title: 'Identify Genuine Needs',      desc: 'We work with local volunteers and village leaders to find families who truly need help — not just those who know how to ask.' },
  { step: '02', title: 'Verify Beneficiaries',         desc: 'Before any support is given, we personally visit homes, check documents, and speak to community members.' },
  { step: '03', title: 'Provide Appropriate Support', desc: 'We match support to the need — education, healthcare, livelihood, or emergency relief. No one-size-fits-all response.' },
  { step: '04', title: 'Track Impact',                 desc: 'We follow up at 3, 6, and 12 months to measure whether the support created lasting change in every beneficiary\'s life.' },
]

const values = [
  { icon: '❤️', title: 'Compassion',   desc: 'Empathy for those we serve — their dignity always comes first.' },
  { icon: '🤝', title: 'Integrity',    desc: 'We do what we say and account for every rupee entrusted to us.' },
  { icon: '🔍', title: 'Transparency', desc: 'Open books, published outcomes, no hidden costs or overheads.' },
  { icon: '⚖️', title: 'Equality',     desc: 'No discrimination by caste, religion, or region — need is our only criterion.' },
  { icon: '🌟', title: 'Dignity',      desc: 'Support is given respectfully — never as charity that diminishes a person.' },
  { icon: '🌱', title: 'Service',      desc: 'We serve without expectation — because giving is its own reward.' },
]


export default function AboutUs() {
  const [activeId, setActiveId] = useState('in-memory')

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
            backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=85')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,34,24,0.96) 0%, rgba(8,34,24,0.65) 45%, rgba(8,34,24,0.25) 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-8 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight mb-2 whitespace-nowrap" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            About MSS Charitable Trust
          </h1>
          <p className="text-white/75 text-sm max-w-2xl leading-relaxed">
            MSS Charitable Trust is a registered non-profit working at the grassroots to uplift orphans,
            widows, and underserved communities across India.
          </p>
        </div>
      </div>

      {/* ── Sub-nav ── */}
      <div className="sticky top-16 z-30 bg-forest-deep border-b border-white/10">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">
          {/* Mobile: 3-column grid (2 rows) | Desktop: single row flex */}
          <div className="grid grid-cols-3 sm:flex sm:flex-row overflow-x-auto">
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
                  className={`text-center sm:text-left text-[10px] sm:text-xs font-semibold uppercase tracking-wider py-2.5 sm:py-3 px-1 sm:px-5 border-b-2 transition-colors whitespace-nowrap ${
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

      {/* ── 0 — In Memory ── */}
      <section id="in-memory" className="pt-10 pb-28 scroll-mt-28" style={{ backgroundColor: 'rgb(245,240,232)' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Eyebrow */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgb(212,201,175)', color: 'rgb(92,73,45)' }}>
              🕊️ In Loving Memory
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug" style={{ color: 'rgb(52,40,24)', fontFamily: "'Lora', serif" }}>
              The Soul Behind MSS Charitable Trust
            </h2>
            <div className="w-16 h-0.5 mx-auto mt-5" style={{ backgroundColor: 'rgb(200,169,110)' }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            <div className="flex flex-col gap-6 h-full">
              {/* Photo */}
              <div className="shadow-2xl rounded-2xl overflow-hidden" style={{ border: '4px solid rgb(200,169,110)' }}>
                <div style={{ overflow: 'hidden', height: 400 }}>
                  <img
                    src="/photos/sudhakar-rao.jpg"
                    alt="Shri Mikkili Sudhakara Rao"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                </div>
              </div>

              {/* Quote box — grows to fill remaining height */}
              <div className="rounded-xl p-6 flex flex-col justify-center flex-1" style={{ backgroundColor: 'rgb(232,224,210)', border: '1px solid rgb(212,201,175)' }}>
                <p className="text-base italic leading-relaxed mb-3" style={{ color: 'rgb(82,68,42)', fontFamily: "'Lora', serif" }}>
                  "He lived simply, gave generously, and loved unconditionally. His life was a quiet act of service — and that is the foundation on which MSS stands."
                </p>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgb(139,115,85)' }}>
                  — In Memory of Shri Mikkili Sudhakara Rao
                </div>
              </div>
            </div>

            {/* Tribute text */}
            <div className="space-y-6">
              <blockquote className="border-l-4 pl-5 py-1" style={{ borderColor: 'rgb(200,169,110)' }}>
                <p className="text-lg italic leading-relaxed" style={{ color: 'rgb(82,68,42)', fontFamily: "'Lora', serif" }}>
                  "He lived simply, gave generously, and loved unconditionally. His life was a quiet act of service — and that is the foundation on which MSS stands."
                </p>
              </blockquote>

              <p className="text-sm leading-relaxed" style={{ color: 'rgb(82,68,42)' }}>
                MSS Charitable Trust carries the initials of <strong>Mikkili Sudhakar Rao</strong> — a man who believed
                that kindness was not a gesture but a way of life. Born on 25th October 1956, he spent his
                years in quiet service to those around him — always giving, never seeking recognition.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgb(82,68,42)' }}>
                When he passed on 11th July 2020, his family chose to honour his memory not with words alone,
                but with action. The Trust was founded in his name so that his spirit of compassion would
                continue to touch the lives of the vulnerable, the forgotten, and the hopeful — long after
                his time on earth.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgb(82,68,42)' }}>
                Every scholarship we fund, every medical camp we run, every family we help — is a tribute
                to him. His name lives on in every life we serve.
              </p>

              <div className="rounded-xl p-5 mt-2" style={{ backgroundColor: 'rgb(232,224,210)', border: '1px solid rgb(212,201,175)' }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgb(139,115,85)' }}>In His Honour</div>
                <p className="text-sm italic" style={{ color: 'rgb(82,68,42)' }}>
                  The <strong>M</strong> in MSS stands for <strong>Mikkili</strong> — his family name, his legacy, his love.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 1 — Founders ── */}
      <section id="who-we-are" className="pt-8 pb-28 scroll-mt-28" style={{ backgroundColor: 'rgb(245,240,232)' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Eyebrow + heading */}
          <div className="mb-7">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgb(139,115,85)' }}>
              The Man Behind the Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug" style={{ color: 'rgb(52,40,24)', fontFamily: "'Lora', serif" }}>
              Sunil Kumar Mikkili — Founder, MSS Charitable Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

            {/* Left: photo + quote */}
            <div className="flex flex-col gap-6 h-full">
              <div className="rounded-xl overflow-hidden shadow-lg flex-1" style={{ border: '1px solid rgb(212,201,175)' }}>
                <img
                  src="/photos/sunil.jpg"
                  alt="Sunil Kumar Mikkili — Founder, MSS Charitable Trust"
                  className="w-full h-full object-cover object-top"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Quote box */}
              <div className="rounded-xl p-6" style={{ backgroundColor: 'rgb(232,224,210)', border: '1px solid rgb(212,201,175)' }}>
                <p className="text-base italic leading-relaxed mb-3" style={{ color: 'rgb(82,68,42)', fontFamily: "'Lora', serif" }}>
                  "Every person deserves dignity, care, and hope — regardless of where they were born
                  or what life has dealt them. That belief is why MSS exists."
                </p>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgb(139,115,85)' }}>
                  — Sunil Kumar Mikkili, Founder
                </div>
              </div>
            </div>

            {/* Right: bio */}
            <div className="space-y-5 pt-1">
              <p className="text-base leading-relaxed" style={{ color: 'rgb(82,68,42)' }}>
                Sunil Kumar Mikkili is the Founder of MSS Charitable Trust, a registered nonprofit
                organisation dedicated to uplifting orphaned children, widowed women, students, and
                underserved communities across India. With a deep sense of social
                responsibility and compassion, he established the Trust in 2020 after witnessing
                firsthand the scale of neglect in rural villages — families without healthcare,
                children who had never entered a classroom, and widows with no income or support.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'rgb(82,68,42)' }}>
                As Founder, Sunil provides strategic leadership and hands-on direction across all
                charitable initiatives. Under his guidance, MSS has conducted free medical camps,
                distributed educational kits, run women's empowerment programmes, and provided
                emergency relief to families in crisis. His commitment to verified, transparent giving
                has built strong trust among donors and beneficiaries alike.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'rgb(82,68,42)' }}>
                Sunil believes that true service is demonstrated through consistent, personal action —
                not just words. His leadership continues to inspire volunteers, community members, and
                supporters to show up where they are most needed. Through MSS Charitable Trust, he
                remains dedicated to ensuring that no family in India is left without hope,
                dignity, or a path forward.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ── 2 — Our Story ── */}
      <section id="our-story" className="py-44 bg-white scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Our Story</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-lg leading-snug">How It All Began</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Story text */}
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                MSS Charitable Trust was born from a simple but powerful conviction — that every human being,
                regardless of caste, religion, gender, or social standing, deserves dignity, care, and a
                fair chance at life. Founded in 2020, the Trust was established after its founders witnessed
                the silent suffering of the poorest of the poor in the villages of India: families
                without food, children without schooling, widows without support, and the elderly forgotten
                by those around them.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We do not ask who you pray to, what community you belong to, or where you come from.
                We ask only one question: are you in need? That belief — that humanity transcends every
                boundary we draw — is the foundation on which MSS stands. Our doors, our programmes, and
                our hearts are open to all, unconditionally.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                What began as a single health camp for 60 villagers has grown into a structured,
                multi-programme charitable trust. Today we serve over 500 families annually — running
                free medical camps, funding education, sheltering orphaned children, empowering widowed
                women, and responding to communities in crisis. Our model is built on trust: verify
                every need personally, give with transparency, and stay accountable to every family
                and every donor who believes in this mission.
              </p>
            </div>

            {/* Story image */}
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80"
              alt="MSS field work"
              className="w-full rounded-xl shadow-lg object-cover"
              style={{ height: 380 }}
            />
          </div>

        </div>
      </section>

      {/* ── 3 — Vision & Mission ── */}
      <section id="vision-mission" className="py-44 bg-stone-900 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-14">
              <h3 className="text-2xl font-bold text-white mb-5 leading-snug" style={{ fontFamily: "'Lora', serif" }}>
                Our Mission
              </h3>
              <blockquote className="border-l-4 border-marigold/60 pl-4 mb-6">
                <p className="text-white/75 text-sm italic leading-relaxed">
                  To give what we can, as far as our strength allows — reaching those without food, care, or hope, and serving with compassion, transparency, and purpose.
                </p>
              </blockquote>
              <ul className="space-y-3">
                {[
                  'Distribute food, medicines, and clothing to families who have nothing',
                  'Conduct free health camps in underserved rural villages',
                  'Support children\'s education through scholarships and school kits',
                  'Empower widows and women through livelihood and training programmes',
                  'Build consistent, long-term community relationships — not one-time charity',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-marigold shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-marigold/10 border border-marigold/25 rounded-xl p-14">
              <h3 className="text-2xl font-bold text-white mb-5 leading-snug" style={{ fontFamily: "'Lora', serif" }}>
                Our Vision
              </h3>
              <blockquote className="border-l-4 border-marigold/60 pl-4 mb-6">
                <p className="text-white/75 text-sm italic leading-relaxed">
                  No village family without food, care, or hope — a society where every person, regardless of caste, religion, or background, lives with dignity and opportunity.
                </p>
              </blockquote>
              <ul className="space-y-3">
                {[
                  'Ensure every village family has access to proper food, clothing, and healthcare',
                  'Reach the poorest of the poor regardless of caste, religion, or background',
                  'Restore dignity and hope to those the world has overlooked',
                  'Grow the Trust nationwide — village by village, life by life',
                  'Let God lead this mission as far as our strength can carry it',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-marigold shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 — Our Approach ── */}
      <section id="our-approach" className="py-44 bg-forest-xlight scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-4">Our Approach</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-sm leading-snug">How We Work</h2>
            <p className="text-gray-500 text-base max-w-sm leading-relaxed">
              Every rupee we receive is used with care. Here's how we decide who gets help and how.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((a, i) => (
              <div key={i} className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="text-5xl font-black text-forest/10 leading-none mb-4 select-none">{a.step}</div>
                <div className="w-10 h-10 rounded-full bg-forest text-white font-black flex items-center justify-center text-sm mb-4">
                  {i + 1}
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-3 leading-snug">{a.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                {i < approach.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-marigold items-center justify-center text-white text-xs font-bold shadow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 — Our Values ── */}
      <section id="our-values" className="py-28 bg-cream scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Our Values</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What We Stand For</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex gap-5">
                <div className="text-3xl shrink-0 mt-0.5">{v.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">{v.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Transparency strip */}
          <div className="bg-forest-deep rounded-xl overflow-hidden">
            <div className="p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-3">Transparency & Accountability</div>
              <h3 className="text-xl font-bold text-white mb-7">How we keep every donor informed</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Donation Utilization',  desc: 'Every rupee is tracked to a specific program. No donation goes to unspecified overheads.' },
                  { title: 'Project Reporting',     desc: 'Each program publishes an outcome report at the end of every cycle.' },
                  { title: 'Impact Tracking',       desc: 'We track long-term outcomes — not just outputs — to measure real change in beneficiary lives.' },
                ].map((t, i) => (
                  <div key={i} className="border-l-2 border-marigold/40 pl-5">
                    <h4 className="font-bold text-white text-sm mb-2">{t.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
