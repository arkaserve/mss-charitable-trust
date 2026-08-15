import { useState } from 'react'
import { Link } from 'react-router-dom'

const UPI_ID = 'msst@upibank'

const ONE_TIME_AMOUNTS = [500, 1000, 2500, 5000, 10000]
const MONTHLY_AMOUNTS  = [200, 500, 1000, 2500]

function upiUrl(amt, note = 'Donation to MSS Charitable Trust') {
  return `upi://pay?pa=${UPI_ID}&pn=MSS+Charitable+Trust&am=${amt}&cu=INR&tn=${encodeURIComponent(note)}`
}
function qrSrc(amt) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=4&color=1a5c38&bgcolor=eff8f2&data=${encodeURIComponent(upiUrl(amt))}`
}

const subNav = [
  { href: '#donate',          label: 'Donate'           },
  { href: '#sponsor-student', label: 'Sponsor a Student'},
  { href: '#sponsor-project', label: 'Sponsor a Project'},
  { href: '#volunteer',       label: 'Volunteer'        },
  { href: '#partner',         label: 'Partner With Us'  },
]

const projects = [
  { icon: '🏥', title: 'One Health Camp',       amount: '₹18,000', desc: 'Complete health camp with doctors for 60+ villagers — check-ups, eye screening, dental care, and free medicines.' },
  { icon: '🙏', title: "Women's Skill Batch",   amount: '₹9,500',  desc: 'A 6-week tailoring/handicraft training for 10 women — materials, instructor, and certification included.' },
  { icon: '👧', title: 'Child Care Month',       amount: '₹12,000', desc: 'One month of nutrition, schooling, and counselling for 5 children in our residential shelter program.' },
  { icon: '📚', title: 'Study Kit Drive',        amount: '₹5,000',  desc: 'School kits (bag, books, uniform) for 10 children before the academic year begins.' },
  { icon: '🌳', title: 'Community Green Drive',  amount: '₹3,500',  desc: 'Plant 50 trees and conduct sanitation awareness in one village — including materials and event.' },
  { icon: '💡', title: 'Awareness Camp',         amount: '₹4,000',  desc: 'A one-day legal rights, health, or government scheme awareness camp for 80+ community members.' },
]

export default function GetInvolved({ openDonate }) {
  const [tab, setTab]           = useState('one-time')
  const [selected, setSelected] = useState(null)
  const [monthly, setMonthly]   = useState(null)
  const [custom, setCustom]     = useState('')

  const amount = tab === 'one-time'
    ? (custom ? parseInt(custom) || 0 : selected)
    : monthly

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative flex flex-col justify-end overflow-hidden" style={{ height: 420 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=85')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,34,24,0.96) 0%, rgba(8,34,24,0.60) 50%, rgba(8,34,24,0.20) 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 w-full">
          <div className="text-xs font-bold uppercase tracking-widest text-forest-light mb-3">Get Involved</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-black leading-tight mb-4 max-w-3xl"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            Join the Mission
          </h1>
          <p className="text-white/75 text-base max-w-xl leading-relaxed">
            Donate, sponsor, volunteer, or partner with us. Every contribution — however large or small —
            goes directly to those who need it most.
          </p>
        </div>
      </div>

      {/* ── Sub-nav ── */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-0 min-w-max">
            {subNav.map(s => (
              <a key={s.href} href={s.href}
                className="text-sm text-gray-500 hover:text-forest py-3.5 px-4 border-b-2 border-transparent hover:border-forest transition-colors whitespace-nowrap">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── 1. DONATE ── */}
      <section id="donate" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: photo + trust signals */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?auto=format&fit=crop&w=900&q=85"
                alt="Children benefiting from donations"
                className="w-full rounded-lg shadow-lg object-cover mb-6"
                style={{ height: 280 }}
              />
              <div className="text-xs font-bold uppercase tracking-widest text-forest mb-2">Why Give to MSS</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Donation Creates Real Change</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Instant, secure, and direct. Every rupee goes to our programs — education, healthcare,
                child welfare, and women's empowerment across Andhra Pradesh.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: '✅', label: '80G Tax Exemption', sub: 'For donations ₹500+' },
                  { icon: '🔒', label: 'Secure & Direct',   sub: 'To trust account' },
                  { icon: '📋', label: 'Full Receipt',       sub: 'Sent within 48 hrs' },
                ].map((t, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl mb-1">{t.icon}</div>
                    <div className="font-bold text-gray-800 text-xs leading-snug">{t.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{t.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: donate widget */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* One-time / Monthly toggle */}
              <div className="flex rounded-lg bg-cream p-1 mb-6">
                {['one-time', 'monthly'].map(t => (
                  <button
                    key={t}
                    onClick={() => { setTab(t); setCustom('') }}
                    className={`flex-1 py-2.5 text-sm font-bold rounded-md transition-colors ${
                      tab === t ? 'bg-forest text-white shadow' : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {t === 'one-time' ? 'One-Time' : 'Monthly'}
                  </button>
                ))}
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                {tab === 'one-time' ? 'Choose Amount' : 'Monthly Amount'}
              </div>

              {tab === 'one-time' ? (
                <>
                  <div className="grid grid-cols-5 gap-2 mb-3">
                    {ONE_TIME_AMOUNTS.map(a => (
                      <button key={a} onClick={() => { setSelected(a); setCustom('') }}
                        className={`py-3 text-sm font-bold rounded-lg border-2 transition-colors ${
                          amount === a && !custom
                            ? 'bg-forest text-white border-forest'
                            : 'border-gray-200 text-gray-700 hover:border-forest hover:text-forest bg-cream'
                        }`}>
                        ₹{a >= 1000 ? `${a / 1000}k` : a}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number" placeholder="Or enter custom amount (₹)"
                    value={custom} onChange={e => setCustom(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-forest mb-5 bg-cream"
                  />
                </>
              ) : (
                <>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {MONTHLY_AMOUNTS.map(a => (
                      <button key={a} onClick={() => setMonthly(a)}
                        className={`py-3 text-sm font-bold rounded-lg border-2 transition-colors ${
                          monthly === a
                            ? 'bg-forest text-white border-forest'
                            : 'border-gray-200 text-gray-700 hover:border-forest hover:text-forest bg-cream'
                        }`}>
                        ₹{a >= 1000 ? `${a / 1000}k` : a}
                      </button>
                    ))}
                  </div>
                  <div className="bg-forest-xlight border border-forest/20 rounded-lg p-4 mb-5 text-xs text-gray-600 leading-relaxed">
                    <strong className="text-forest">How monthly giving works:</strong> Set up a UPI AutoPay
                    mandate in PhonePe / GPay. You can cancel anytime.
                  </div>
                </>
              )}

              {amount ? (
                <a
                  href={upiUrl(amount, tab === 'monthly' ? 'Monthly Donation – MSS Trust' : 'Donation to MSS Charitable Trust')}
                  className="flex items-center justify-center gap-2 bg-marigold hover:bg-marigold-dark text-white font-black py-4 rounded-lg text-base transition-colors mb-5 w-full"
                >
                  {tab === 'monthly'
                    ? `Set Up ₹${amount.toLocaleString('en-IN')}/month via UPI`
                    : `Pay ₹${amount.toLocaleString('en-IN')} via UPI`}
                </a>
              ) : (
                <div className="flex items-center justify-center py-4 rounded-lg text-sm font-bold text-gray-400 border-2 border-dashed border-gray-200 mb-5 w-full">
                  Select or enter an amount above
                </div>
              )}

              {/* QR */}
              <div className="flex items-center gap-6 border-t border-gray-100 pt-5">
                {amount ? (
                  <img src={qrSrc(amount)} alt="QR Code" className="w-20 h-20 rounded" />
                ) : (
                  <div className="w-20 h-20 rounded bg-gray-100 flex items-center justify-center text-gray-300 text-xs text-center leading-tight px-1">QR after amount</div>
                )}
                <div>
                  <div className="text-xs font-bold text-gray-500 mb-1">
                    {amount ? `Scan to Pay · ₹${amount.toLocaleString('en-IN')}` : 'Scan to Pay'}
                  </div>
                  <div className="text-xs text-gray-400 mb-3">PhonePe, GPay, Paytm &amp; all UPI apps</div>
                  <div className="text-xs text-gray-400">Prefer bank transfer?{' '}
                    <Link to="/contact" className="text-forest font-bold hover:underline">Get details →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SPONSOR A STUDENT ── */}
      <section id="sponsor-student" className="py-24 bg-forest">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-forest-light mb-3">Sponsor a Student</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Give a Child a Full Year of Education
              </h2>
              <p className="text-white/75 text-base leading-relaxed mb-6">
                For many families, the cost of school fees, books, and a uniform is the difference between
                staying in school and dropping out. ₹5,000 covers one student for an entire academic year —
                and you'll receive a photo and progress update at year-end.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Annual school fees paid directly to the institution',
                  'Books, bag, and stationery kit at the start of the year',
                  'Uniform and footwear where required',
                  'Year-end photo update and impact report sent to you',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-white/80">
                    <span className="text-marigold font-bold shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="text-3xl font-black text-marigold">₹5,000 / year</div>
                <Link to="/contact"
                  className="bg-white text-forest text-sm font-black px-7 py-3 rounded-full hover:bg-cream transition-colors">
                  Sponsor a Student
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85"
                alt="Students"
                className="w-full rounded-lg shadow-xl object-cover"
                style={{ height: 200 }}
              />
              <div className="bg-white rounded-lg p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-forest mb-4">Also Available</div>
                {[
                  { icon: '📚', title: 'Study Kit',     amount: '₹500/kit',       desc: 'Books, bag, and stationery for one child.' },
                  { icon: '💻', title: 'Laptop Support', amount: '₹15,000',        desc: 'Refurbished laptop for a college student.' },
                  { icon: '📝', title: 'Exam Fees',      amount: '₹1,000–₹3,000', desc: 'Competitive exam fees for a deserving student.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 py-3 border-b border-gray-100 last:border-0">
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-sm text-gray-900">{s.title}</span>
                        <span className="text-forest font-bold text-sm">{s.amount}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
                <Link to="/contact"
                  className="mt-4 block text-center border-2 border-forest text-forest text-sm font-bold py-2.5 rounded-full hover:bg-forest hover:text-white transition-colors">
                  Enquire About Any →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SPONSOR A PROJECT ── */}
      <section id="sponsor-project" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Sponsor a Project</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fund a Specific Initiative</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Know exactly what your money funds. Each project has a defined scope, cost, and measurable
              outcome — you receive a full impact report when the project closes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <div key={i}
                className="bg-white rounded-lg p-7 flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border-t-4 border-forest">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
                <div className="font-black text-forest text-xl mb-3">{p.amount}</div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>
                <Link to="/contact"
                  className="text-center bg-forest text-white text-xs font-bold py-2.5 rounded-full hover:bg-forest-dark transition-colors">
                  Sponsor This →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VOLUNTEER ── */}
      <section id="volunteer" className="py-24 bg-forest-xlight">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Volunteer</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Give Your Time and Skills</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                You don't need to be wealthy to make a difference. Doctors, teachers, counsellors,
                designers, accountants — we need your skills as much as your donations. Weekend commitment welcome.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { label: 'Teaching & Tutoring',    desc: 'Help children with studies or teach vocational skills to women.' },
                  { label: 'Medical Volunteering',   desc: 'Doctors and paramedics for our quarterly health camps.' },
                  { label: 'Event Organisation',     desc: 'Help plan distribution drives, camps, and community events.' },
                  { label: 'Documentation & Design', desc: 'Photography, graphic design, content writing, social media.' },
                  { label: 'Field Outreach',         desc: 'Visit villages, identify beneficiaries, build community ties.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <span className="text-forest font-black text-sm shrink-0 mt-0.5">→</span>
                    <div>
                      <span className="text-sm font-bold text-gray-800">{item.label}</span>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact"
                className="inline-flex items-center gap-2 bg-forest text-white text-sm font-black px-8 py-3.5 rounded-full hover:bg-forest-dark transition-colors">
                Register as Volunteer →
              </Link>
            </div>

            <div className="space-y-5">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=85"
                alt="Volunteers at work"
                className="w-full rounded-lg shadow-lg object-cover"
                style={{ height: 240 }}
              />
              <div className="bg-forest rounded-lg p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-forest-light mb-4">What Volunteers Say</div>
                <blockquote className="text-white/90 text-base font-serif leading-relaxed mb-4 italic">
                  "I spent one Saturday at a health camp and left knowing I had made a real difference.
                  The children's faces are something I'll never forget."
                </blockquote>
                <div className="text-xs text-forest-light">— A Volunteer Doctor, Hyderabad</div>
                <div className="mt-6 pt-6 border-t border-white/20 text-sm text-white/70">
                  Even one day makes a real difference. Most volunteers start with a single event and stay for years.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PARTNER WITH US ── */}
      <section id="partner" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Partner With Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Build a Meaningful Partnership</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              Individuals, corporates, foundations, and institutions — we welcome partnerships that align
              with our mission of serving the most vulnerable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏢',
                color: '#EFF8F2',
                border: '#1A5C38',
                title: 'CSR Partnership',
                desc: "Meet your company's CSR mandate while creating measurable community impact. We offer impact reports, field visits, co-branding on camps, and donor recognition.",
                action: 'Explore CSR Partnership',
              },
              {
                icon: '🤝',
                color: '#FDF0D5',
                border: '#CB7D0B',
                title: 'Institutional Collaboration',
                desc: 'Hospitals, schools, colleges, and NGOs — partner on joint programs, training, outreach, or referral networks to multiply our collective impact.',
                action: 'Discuss Collaboration',
              },
              {
                icon: '📣',
                color: '#E8F4F8',
                border: '#2D7A9A',
                title: 'Spread the Word',
                desc: 'Share our work on social media, introduce us to your network, or bring us to speak at your institution or organisation.',
                action: 'Get Sharing Materials',
              },
            ].map((g, i) => (
              <div key={i}
                className="rounded-xl p-8 flex flex-col hover:shadow-lg transition-all duration-200 border-t-4"
                style={{ backgroundColor: g.color, borderColor: g.border }}>
                <div className="text-5xl mb-5">{g.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-3">{g.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed flex-1 mb-6">{g.desc}</p>
                <Link to="/contact"
                  className="text-center text-white text-sm font-bold py-3 rounded-full transition-colors"
                  style={{ backgroundColor: g.border }}>
                  {g.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
