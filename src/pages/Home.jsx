import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'

/* ── Programs ── */
const programs = [
  {
    icon: '📚',
    title: 'Education Centres',
    desc: 'Scholarships, school kits, free tuition, and career mentorship for students from low-income families across Andhra Pradesh.',
    to: '/our-work',
  },
  {
    icon: '👧',
    title: 'Children Support',
    desc: 'Safe shelter, daily nutrition, school enrolment, and psychological care for orphaned and vulnerable children.',
    to: '/our-work',
  },
  {
    icon: '🙏',
    title: 'Women & Widows',
    desc: 'Vocational training, financial assistance, and self-help groups to help widowed women rebuild financially independent lives.',
    to: '/our-work',
  },
  {
    icon: '🏥',
    title: 'Healthcare & Wellness',
    desc: 'Free medical camps bringing physician consultations, eye, dental, and specialist care directly to rural communities.',
    to: '/our-work',
  },
  {
    icon: '🤝',
    title: 'Livelihood & Skills',
    desc: 'Community welfare — sanitation drives, environmental programmes, and volunteer-led initiatives that uplift entire villages.',
    to: '/our-work',
  },
]

/* ── Impact stats ── */
const stats = [
  { num: '500+', label: 'Families Helped'    },
  { num: '200+', label: 'Students Supported' },
  { num: '80+',  label: 'Children in Care'   },
  { num: '12',   label: 'Health Camps Held'  },
]

/* ── Donation methods ── */
const donateMethods = [
  {
    icon: '📱',
    title: 'UPI / BHIM Payment',
    body: 'Scan our QR code or send directly to our UPI ID for an instant, secure transfer.',
    detail: 'UPI ID: msscharitabletrust@upi',
  },
  {
    icon: '🏦',
    title: 'Bank Transfer (NEFT / RTGS)',
    body: "Transfer directly to our registered bank account. We'll send you a receipt by email.",
    detail: 'A/C details on request · info@msscharitabletrust.org',
  },
  {
    icon: '📄',
    title: 'Cheque / Demand Draft',
    body: 'Mail a cheque payable to "MSS Charitable Trust" to our registered office address.',
    detail: 'Andhra Pradesh — contact us for full address',
  },
]

export default function Home({ openDonate }) {
  return (
    <>
      {/* 1 ── Hero slider */}
      <Hero openDonate={openDonate} />

      {/* 1b ── Scrolling marquee ticker */}
      <div className="bg-marigold overflow-hidden py-3">
        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .marquee-track { display: flex; animation: marquee 28s linear infinite; width: max-content; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="marquee-track">
          {[
            'Education Support', 'Healthcare Camps', 'Women Empowerment',
            'Child Welfare', 'Livelihood Training', 'Community Development',
            'Disaster Relief', 'Senior Citizen Care', 'Scholarship Programs',
            'Education Support', 'Healthcare Camps', 'Women Empowerment',
            'Child Welfare', 'Livelihood Training', 'Community Development',
            'Disaster Relief', 'Senior Citizen Care', 'Scholarship Programs',
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-6 text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap">
              {item}
              <span className="text-white/50">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* 1c ── Our Heart */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Photo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: '2px solid rgba(203,125,11,0.35)' }}>
                <img
                  src="/photos/founder.jpg"
                  alt="MSS Charitable Trust founder"
                  className="w-full object-cover object-top"
                  style={{ height: 420 }}
                  loading="lazy"
                />
            </div>

            {/* Content */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-4">Our Heart</div>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Kindness is the language the world understands
              </h2>

              <div className="space-y-6 mb-8">
                <blockquote className="border-l-4 pl-5" style={{ borderColor: 'rgba(203,125,11,0.45)' }}>
                  <p className="text-gray-600 text-base italic leading-relaxed">
                    "Every act of kindness, no matter how small, creates ripples of change that reach further than we can imagine. We exist to be those ripples in the lives of those who need it most."
                  </p>
                </blockquote>
                <blockquote className="border-l-4 pl-5" style={{ borderColor: 'rgba(203,125,11,0.45)' }}>
                  <p className="text-gray-600 text-base italic leading-relaxed">
                    "We do not serve because we have to — we serve because every life is precious, and every family deserves a chance at dignity, hope, and a better tomorrow."
                  </p>
                </blockquote>
              </div>

              <p className="text-gray-400 italic text-sm">— MSS Charitable Trust, Founded with Love</p>
            </div>

          </div>
        </div>
      </section>

      {/* 2 ── Programs — JWF-style: dark centered heading + card grid */}
      <section className="bg-stone-900">
        {/* Heading band */}
        <div className="pt-16 pb-10 text-center px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-4">What We Do</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Our Programs
          </h2>
          <div className="w-16 h-0.5 bg-marigold mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {programs.map((p, i) => (
                <Link
                  key={i}
                  to={p.to}
                  className="group bg-white/5 border border-white/10 p-7 rounded hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-bold text-white text-base mb-3 leading-snug group-hover:text-marigold transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <span className="text-marigold text-xs font-bold">Learn More →</span>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 bg-marigold hover:bg-marigold-dark text-white font-bold text-sm px-7 py-3.5 rounded-full transition-colors"
              >
                View All Programs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── About — Fidelity style: large side-by-side photos + text */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: single wide image — Fidelity 0.53 ratio (width × 0.53 = height) */}
            {/* At ~580px col width → height ≈ 307px → h-72 (288px) is close */}
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85"
              alt="MSS community outreach"
              className="w-full object-cover rounded-lg shadow-lg"
              style={{ height: 320 }}
              loading="lazy"
            />

            {/* Right: text */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Raise Your Helping Hand to Build A Better Society
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                MSS Charitable Trust is a registered charitable organization working with underprivileged
                communities across Andhra Pradesh. We address the core challenges of poverty — education,
                healthcare, women's empowerment, and children's welfare — with ground-level programs that
                are verified, accountable, and long-term.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Our teams are embedded in the communities we serve. Every beneficiary is personally
                visited and verified. We work closely with local leaders and families to ensure every
                rupee reaches the right person and creates lasting impact.
              </p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-forest font-bold mt-0.5">→</span>
                  Partner with us in uplifting communities and transforming their lives.
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white font-bold text-sm uppercase tracking-widest px-7 py-3.5 rounded-full transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 ── Partner banner — fixed 420px height like Fidelity's content sections */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          height: 420,
          backgroundImage: "url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(8,34,24,0.68)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
            Partner with us in Uplifting Communities and Transforming Their Lives
          </h2>
          <button
            onClick={openDonate}
            className="inline-flex items-center gap-3 bg-marigold hover:bg-marigold-dark text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-colors"
          >
            Donate Now
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">→</span>
          </button>
        </div>
      </section>

      {/* 5 ── "Want to join a hand?" 3-column */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Want to join a hand?</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              You are welcome to participate in volunteer work, charitable giving, or spreading the word about our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: '💸',
                title: 'Send Donation',
                body: 'Giving online has never been more secure or convenient. Your donation goes directly to a program beneficiary — no middlemen, fully tracked and audited.',
              },
              {
                icon: '🤝',
                title: 'Volunteer for Work',
                body: 'Get involved through financial support or hands-on volunteering. Join us in standing up for the economically disadvantaged and creating positive change.',
              },
              {
                icon: '📢',
                title: 'Spread the Word',
                body: 'Share our mission with your network. Awareness is powerful — every person who learns about MSS is a potential donor, volunteer, or advocate for change.',
              },
            ].map((c, i) => (
              <div key={i} className="text-center px-4">
                <div className="w-20 h-20 rounded-full bg-forest-xlight flex items-center justify-center text-4xl mx-auto mb-5">
                  {c.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{c.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── Donation methods */}
      <section className="py-20 bg-forest-xlight border-t border-forest/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-forest mb-2">Give Back</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Donate to MSS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donateMethods.map((d, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-sm text-center border-t-4 border-forest hover:shadow-md transition-shadow">
                <div className="text-5xl mb-5">{d.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-3">{d.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed mb-4">{d.body}</p>
                <div className="text-forest font-semibold text-xs bg-forest-xlight px-3 py-2 rounded-md">
                  {d.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 ── "Your Contribution Could Save Lives" — Fidelity style: full photo left, no overlay */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Fidelity 0.53 ratio — at ~580px col width → ~307px tall */}
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1000&q=85"
              alt="MSS impact"
              className="w-full object-cover rounded-lg shadow-lg"
              style={{ height: 320 }}
              loading="lazy"
            />
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Our Mission</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Your Contribution Could Save Lives
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                MSS Charitable Trust invites you to join us in making a positive impact and contributing
                to the growth of our charitable programs. Your generous donation plays an important role
                in the upliftment of the underprivileged across Andhra Pradesh.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                All donations above ₹500 are eligible for 80G income tax exemption. We are 12A
                registered with the Government of India, and our accounts are independently audited
                every year.
              </p>
              <Link
                to="/impact"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white font-bold text-sm uppercase tracking-widest px-7 py-3.5 rounded-full transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8 ── Our Impact — stats + narrative */}
      <section className="py-20 bg-forest">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-forest-light mb-2">Results on the Ground</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-14">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="font-black text-4xl md:text-5xl text-marigold mb-2">{s.num}</div>
                <div className="text-white/60 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/80 text-base leading-relaxed mb-4">
              Since our inception in 2020, we have significantly changed the lives of hundreds of
              families in Andhra Pradesh. We have witnessed children overcoming barriers to education,
              women achieving financial independence, and communities receiving healthcare for the first time.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              By investing in children's education and community well-being, we are laying the foundation
              for a more equitable and prosperous society — one family at a time.
            </p>
          </div>
        </div>
      </section>

      {/* 9 ── Photo Gallery */}
      <Gallery />

      {/* 10 ── Get Involved CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Take Action</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
            Get Involved
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            You can join us in our mission to empower children and communities by volunteering your time,
            donating, or spreading the word about our work. Together, we can make a difference in the
            lives of families across Andhra Pradesh.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-forest hover:bg-forest-dark text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-colors"
          >
            Contact Now
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">✉</span>
          </Link>
        </div>
      </section>
    </>
  )
}
