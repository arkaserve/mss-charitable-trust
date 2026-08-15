import { Link } from 'react-router-dom'

const subNav = [
  { href: '#who-we-are',     label: 'Who We Are'       },
  { href: '#our-story',      label: 'Our Story'        },
  { href: '#vision-mission', label: 'Vision & Mission' },
  { href: '#who-we-serve',   label: 'Who We Serve'     },
  { href: '#our-approach',   label: 'Our Approach'     },
  { href: '#our-values',     label: 'Our Values'       },
]

const served = [
  {
    img: 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?auto=format&fit=crop&w=600&q=80',
    label: 'Children',
    desc: 'Orphaned or vulnerable children needing shelter, care, and schooling.',
  },
  {
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
    label: 'Students',
    desc: 'First-generation learners who lack financial support to continue education.',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496546038-82f9c39f6365?auto=format&fit=crop&w=600&q=80',
    label: 'Women & Widows',
    desc: 'Widows facing social isolation and economic hardship after losing their spouse.',
  },
  {
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
    label: 'Elderly & Needy',
    desc: 'Senior citizens with no family support or access to healthcare.',
  },
  {
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
    label: 'Communities',
    desc: 'Rural villages with limited access to health, education, and livelihoods.',
  },
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
  return (
    <>
      {/* ── Hero ── */}
      <div className="relative flex flex-col justify-end overflow-hidden" style={{ height: 420 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=85')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,34,24,0.96) 0%, rgba(8,34,24,0.65) 45%, rgba(8,34,24,0.25) 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 w-full">
          <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-3">About Us</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-black leading-tight mb-4 max-w-3xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            Who We Are
          </h1>
          <p className="text-white/75 text-base max-w-2xl leading-relaxed">
            MSS Charitable Trust is a registered non-profit working at the grassroots to uplift orphans,
            widows, and underserved communities across Andhra Pradesh.
          </p>
        </div>
      </div>

      {/* ── Sub-nav ── */}
      <div className="sticky top-16 z-30 bg-forest-deep border-b border-white/10 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-0 min-w-max">
            {subNav.map(s => (
              <a
                key={s.href}
                href={s.href}
                className="text-xs font-semibold uppercase tracking-wider text-white/55 hover:text-white py-4 px-5 border-b-2 border-transparent hover:border-marigold transition-colors whitespace-nowrap"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── 1 — Who We Are ── */}
      <section id="who-we-are" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85"
                alt="MSS community outreach"
                className="w-full rounded-xl shadow-xl object-cover"
                style={{ height: 440 }}
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-forest-deep rounded-xl px-5 py-4 shadow-xl">
                <div className="text-marigold font-black text-2xl">Since 2020</div>
                <div className="text-white/60 text-xs mt-0.5">Serving Communities</div>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-forest mb-4">Who We Are</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                A Trust Built on Purpose, Not Profit
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                MSS Charitable Trust is registered under the Indian Trusts Act, 1882 and holds both
                12A and 80G certification from the Government of India. We operate in Andhra Pradesh,
                reaching communities in urban fringes, semi-rural towns, and remote villages.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Millions of Indians lack access to the most basic rights — education, healthcare,
                and economic dignity. Orphaned children, widowed women, and elderly citizens fall
                through every safety net. We exist to be that net — present where institutions are
                absent, committed to serving with transparency and dignity.
              </p>
              <div className="flex gap-10 border-t border-gray-200 pt-8">
                {[
                  { num: '500+', label: 'Families Helped' },
                  { num: '200+', label: 'Students Supported' },
                  { num: '80+',  label: 'Children in Care' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-forest leading-none">{s.num}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="bg-forest-deep py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '500+', label: 'Families Helped',     sub: 'Across Andhra Pradesh'     },
              { num: '200+', label: 'Students Supported',  sub: 'Scholarships & kits'       },
              { num: '12',   label: 'Health Camps',        sub: 'Free medical care'         },
              { num: '10+',  label: 'Villages Reached',    sub: 'Community programmes'      },
            ].map((s, i) => (
              <div key={i} className={`${i < 3 ? 'md:border-r border-white/10' : ''} px-4`}>
                <div className="font-black text-4xl md:text-5xl text-marigold leading-none mb-2">{s.num}</div>
                <div className="text-white font-bold text-sm mb-1">{s.label}</div>
                <div className="text-white/40 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2 — Our Story ── */}
      <section id="our-story" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-4">Our Story</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 max-w-lg leading-snug">How It All Began</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Story text */}
            <div className="space-y-5">
              <p className="text-gray-600 text-base leading-relaxed">
                MSS Charitable Trust was founded in 2020 by a small group of individuals who witnessed
                firsthand the scale of neglect in rural Andhra Pradesh. During a visit to a remote village,
                the founders encountered families with no access to healthcare, children who had never been
                inside a school, and widows with no income and no support system.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                What began as a single health camp serving 60 villagers grew steadily — through word of
                mouth, community trust, and the generosity of early donors — into a structured multi-program
                trust. Within two years we expanded to education support, child welfare, and women's
                empowerment programs.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Today we serve over 500 families annually across multiple districts. Our model has remained
                constant: find those who are truly in need, verify before we act, provide the right support,
                and follow up to measure real impact.
              </p>
            </div>

            {/* Story image */}
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80"
              alt="MSS field work"
              className="w-full rounded-xl shadow-lg object-cover"
              style={{ height: 360 }}
            />
          </div>
        </div>
      </section>

      {/* ── 3 — Vision & Mission ── */}
      <section id="vision-mission" className="py-24 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-4">Vision & Mission</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 max-w-lg leading-snug">
            Where We're Going and How We'll Get There
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-10 hover:bg-white/8 transition-colors">
              <div className="w-12 h-12 rounded-full bg-marigold/20 flex items-center justify-center text-2xl mb-6">🌍</div>
              <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-4">Our Vision</div>
              <h3 className="text-2xl font-bold text-white mb-5 leading-snug">
                A society where no one is left behind
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                We envision communities across India where every child has a future, every widow has
                economic independence, every patient has access to care, and every deserving student
                can fulfil their potential — regardless of where they were born.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-marigold/10 border border-marigold/25 rounded-xl p-10 hover:bg-marigold/15 transition-colors">
              <div className="w-12 h-12 rounded-full bg-marigold/30 flex items-center justify-center text-2xl mb-6">🎯</div>
              <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-4">Our Mission</div>
              <h3 className="text-2xl font-bold text-white mb-5 leading-snug">
                Serving those who have the least, with all that we have
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                Through targeted programs in education, healthcare, child welfare, and livelihood support,
                we bridge the gap between genuine need and available resources — with transparency,
                dignity, and long-term commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 — Who We Serve ── */}
      <section id="who-we-serve" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-4">Who We Serve</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-sm leading-snug">Our Beneficiaries</h2>
            <p className="text-gray-500 text-base max-w-sm leading-relaxed">
              Five groups most often overlooked by existing support systems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {served.map((s, i) => (
              <div key={i} className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${i === 3 ? 'lg:col-start-1' : ''}`}>
                <div className="overflow-hidden" style={{ height: 220 }}>
                  <img
                    src={s.img}
                    alt={s.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 border-t-4 border-forest">
                  <h4 className="font-bold text-gray-900 text-base mb-2">{s.label}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 — Our Approach ── */}
      <section id="our-approach" className="py-24 bg-forest-xlight">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-4">Our Approach</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
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

      {/* ── 6 — Our Values ── */}
      <section id="our-values" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-4">Our Values</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">What We Stand For</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
            <div className="p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-3">Transparency & Accountability</div>
              <h3 className="text-xl font-bold text-white mb-10">How we keep every donor informed</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Donation Utilization',  desc: 'Every rupee is tracked to a specific program. No donation goes to unspecified overheads.' },
                  { title: 'Financial Reporting',   desc: 'Annual accounts are audited by an independent CA and available to any donor on request.' },
                  { title: 'Project Reporting',     desc: 'Each program publishes an outcome report at the end of every cycle.' },
                  { title: 'Impact Tracking',       desc: 'We track long-term outcomes — not just outputs — to measure real change in beneficiary lives.' },
                ].map((t, i) => (
                  <div key={i} className="border-l-2 border-marigold/40 pl-5">
                    <h4 className="font-bold text-white text-sm mb-2">{t.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-marigold hover:bg-marigold-dark text-white text-sm font-bold px-7 py-3.5 rounded-full transition-colors"
                >
                  Request Annual Report →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
