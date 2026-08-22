import { Link } from 'react-router-dom'

const stats = [
  { num: '500+', label: 'Families Helped',    sub: 'Across India',      icon: '🏠' },
  { num: '12',   label: 'Health Camps',        sub: 'Free medical check-ups',     icon: '🏥' },
  { num: '80+',  label: 'Children in Care',    sub: 'Shelter, food & schooling',  icon: '👧' },
  { num: '200+', label: 'Students Supported',  sub: 'Scholarships & kits',        icon: '🎓' },
  { num: '10+',  label: 'Villages Reached',    sub: 'Community programmes',       icon: '🏘️' },
  { num: '300+', label: 'Patients Treated',    sub: 'Health camp beneficiaries',  icon: '❤️' },
]

const stories = [
  {
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80',
    amount: '₹12,500',
    category: 'Education',
    title: 'School Supplies for 25 Children',
    desc: 'Notebooks, uniforms, and bags distributed to children in two villages. All 25 continued their school year without dropping out.',
    detail: '25 children · India',
  },
  {
    img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=700&q=80',
    amount: '₹18,000',
    category: 'Health Camp',
    title: 'Free Medical Camp — 60 Adults Treated',
    desc: 'Blood pressure, eye, and dental screenings plus basic medicines. Six patients referred for further hospital treatment at no cost.',
    detail: '60 adults · Rural India',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496546038-82f9c39f6365?auto=format&fit=crop&w=700&q=80',
    amount: '₹9,500',
    category: 'Women Empowerment',
    title: 'Livelihood Skills for 10 Widowed Women',
    desc: 'Tailoring and handicraft training over 6 weeks. Eight of ten participants now earning independently through home-based work.',
    detail: '10 women · India',
  },
]

const reports = [
  { year: '2023–24', desc: 'Annual impact report covering all programs, beneficiary counts, and fund utilisation.' },
  { year: '2022–23', desc: 'Year-end report covering healthcare camps, scholarship distribution, and widow support.' },
  { year: '2021–22', desc: 'Inaugural annual report from our first full year of operations.' },
]

export default function OurImpact() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="relative flex flex-col justify-end overflow-hidden" style={{ height: 145 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=85')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,34,24,0.96) 0%, rgba(8,34,24,0.60) 50%, rgba(8,34,24,0.20) 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-8 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight mb-2 whitespace-nowrap"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            Proof That It Works
          </h1>
          <p className="text-white/75 text-sm max-w-xl leading-relaxed">
            Every number here is a life touched. Every story is real. Every rupee is accounted for.
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <section className="py-20 bg-forest">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-forest-light mb-3">By the Numbers</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Reach So Far</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {stats.map((s, i) => (
              <div key={i} className="bg-forest flex flex-col items-center justify-center py-10 px-6 text-center hover:bg-forest-dark transition-colors">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-black text-4xl md:text-5xl text-marigold mb-1 leading-none">{s.num}</div>
                <div className="font-bold text-white text-sm mt-2">{s.label}</div>
                <div className="text-white/45 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote banner ── */}
      <div className="bg-marigold py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-4xl text-white/30 font-serif leading-none mb-4">"</div>
          <p className="text-white font-bold text-xl md:text-2xl leading-snug mb-4">
            We came with nothing. MSS gave our children a school, our family a doctor, and me a reason to hope again.
          </p>
          <div className="text-white/70 text-sm">— Beneficiary family, India</div>
        </div>
      </div>

      {/* ── Impact Stories ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Impact Stories</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where Your Money Goes</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              Real outcomes from our community programs — traceable, verified, and documented.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
                <div className="overflow-hidden" style={{ height: 200 }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 border-t-4 border-forest">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-marigold">{s.category}</span>
                    <span className="font-black text-forest text-lg">{s.amount}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">{s.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed flex-1 mb-4">{s.desc}</p>
                  <div className="text-xs text-gray-400 border-t border-gray-100 pt-3 flex items-center gap-1">
                    <span>📍</span> {s.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            Representative examples from recent programs. Full accounts available on request —{' '}
            <Link to="/contact" className="text-forest hover:underline font-medium">write to us</Link>.
          </p>
        </div>
      </section>

      {/* ── How we use funds ── */}
      <section className="py-24 bg-forest-xlight">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Fund Utilisation</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Every Rupee is Accounted For</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                We maintain strict oversight of every donation received. No funds go to unspecified overheads.
                Every rupee is tracked to a beneficiary, a program, or a verified field expense.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Direct Program Costs', pct: 82, color: '#1A5C38' },
                  { label: 'Field Operations',     pct: 11, color: '#CB7D0B' },
                  { label: 'Administration',       pct:  7, color: '#6B7280' },
                ].map((f, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                      <span>{f.label}</span>
                      <span style={{ color: f.color }}>{f.pct}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${f.pct}%`, backgroundColor: f.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=85"
              alt="MSS community work"
              className="w-full rounded-lg shadow-lg object-cover"
              style={{ height: 360 }}
            />
          </div>
        </div>
      </section>

      {/* ── Reports ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Reports & Accounts</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Full Transparency</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                All reports are independently audited and available to any donor on request within 48 hours.
              </p>
              <div className="bg-forest rounded-lg p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-forest-light mb-2">Request a Report</div>
                <p className="text-white/75 text-sm leading-relaxed mb-4">
                  Write to us with your name and email — we'll send the latest annual report within 48 hours.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-marigold hover:bg-marigold-dark text-white text-sm font-bold py-3 rounded-full transition-colors"
                >
                  Request Now →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {reports.map((r, i) => (
                <div key={i} className="bg-white rounded-lg p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-forest-xlight flex items-center justify-center shrink-0">
                    <span className="text-forest font-black text-xs">📄</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-sm mb-1">Annual Report {r.year}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{r.desc}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 text-xs font-bold text-forest border border-forest px-4 py-2 rounded-full hover:bg-forest hover:text-white transition-colors whitespace-nowrap"
                  >
                    Request
                  </Link>
                </div>
              ))}

              {/* Certifications */}
              <div className="bg-forest rounded-lg p-6 flex flex-wrap gap-6 items-center justify-center sm:justify-start">
                {[
                  { label: '12A Registered', sub: 'Income Tax Act' },
                  { label: '80G Certified',  sub: 'Tax Exemption for Donors' },
                  { label: 'Audited Yearly', sub: 'Independent CA' },
                ].map((c, i) => (
                  <div key={i} className="text-center">
                    <div className="text-white font-black text-sm">{c.label}</div>
                    <div className="text-white/50 text-xs mt-0.5">{c.sub}</div>
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
