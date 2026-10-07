import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Logo from '../components/Logo'

/* ── Programs ── */
const programs = [
  {
    title: 'Education',
    desc: 'We fund scholarships, distribute school kits, run free tuition centres, and mentor students from low-income families — because every child deserves the chance to learn.',
  },
  {
    title: 'Partnerships',
    desc: 'We collaborate with corporates, institutions, and NGOs through CSR and joint programs. Together, we multiply impact and build sustainable change at the community level.',
  },
  {
    title: 'Volunteer Opportunities',
    desc: 'Whether teaching, healthcare, outreach, or administration — your time and skills can transform lives. Join our growing network of compassionate volunteers across India.',
  },
  {
    title: 'Women & Widow Empowerment',
    desc: 'Vocational training, self-help groups, legal awareness camps, and monthly financial support help widowed and vulnerable women reclaim their independence and dignity.',
  },
  {
    title: 'Charitable Activities',
    desc: 'From free health camps and food distribution to disaster relief and elder care — we respond to the most urgent community needs with compassion, speed, and accountability.',
  },
  {
    title: 'Orphan Care',
    desc: 'We provide safe shelter, nutritious meals, school enrolment, and emotional care for orphaned and abandoned children — giving them a home, a future, and a sense of belonging.',
  },
]

/* ── Testimonials ── */
const testimonials = [
  {
    name: 'Rajesh P',
    role: 'Manager, MSS Trust',
    initials: 'RP',
    color: '#1A5C38',
    quote: 'Managing MSS Trust has been a deeply fulfilling journey. Every day, I see how our programs directly transform lives — from children receiving their first school kit to widows starting their own businesses. The trust our community places in us is what keeps us moving forward.',
  },
  {
    name: 'Papa Rao',
    role: 'Camp Lead, MSS Trust',
    initials: 'PR',
    color: '#1A5C38',
    quote: 'Leading our healthcare and community camps across India has shown me how much a little organised effort can achieve. Seeing a village receive free health check-ups for the first time, or watching women gain confidence — these moments are irreplaceable.',
  },
]

export default function Home({ openDonate }) {
  return (
    <>
      {/* 1 ── Hero slider */}
      <Hero />

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
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Sudhakar Rao photo */}
            <div className="relative flex items-center justify-center">
              <div
                className="rounded-2xl shadow-xl w-full overflow-hidden"
                style={{
                  height: 420,
                  border: '2px solid rgba(203,125,11,0.35)',
                }}
              >
                <img
                  src="/photos/sudhakar-rao.jpg"
                  alt="Shri Mikkili Sudhakara Rao"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </div>
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
        <div className="pt-16 pb-10 text-center px-5 sm:px-8 lg:px-16">
          <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-4">What We Do</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Our Mission: We Care for People
          </h2>
          <div className="w-16 h-0.5 bg-marigold mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="pb-16 px-5 sm:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {programs.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/8 p-9 rounded-xl flex flex-col"
                  style={{ minHeight: 240 }}
                >
                  <div className="w-10 h-0.5 bg-marigold mb-6" />
                  <h3 className="font-bold text-white text-lg mb-4 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{p.desc}</p>
                </div>
              ))}
            </div>
           
          </div>
        </div>
      </section>

      {/* 3 ── Our Impact */}
      <section className="py-20 bg-forest">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-forest-light mb-2">Results on the Ground</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Impact</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/80 text-base leading-relaxed mb-4">
              Since our founding in 2026, we have significantly changed the lives of hundreds of
              families in India. We have witnessed children overcoming barriers to education,
              women achieving financial independence, and communities receiving healthcare for the first time.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              By investing in children's education and community well-being, we are laying the foundation
              for a more equitable and prosperous society — one family at a time.
            </p>
          </div>
        </div>
      </section>

      {/* 4 ── Community Voices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-4">Community Voices</div>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "'Lora', serif" }}
            >
              What Our Community Says About MSS Trust
            </h2>
            <div className="w-16 h-0.5 bg-marigold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl leading-none mb-5 font-serif" style={{ color: t.color }}>"</div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic mb-8">{t.quote}</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white font-black text-sm"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: t.color }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── Dark CTA */}
      <section className="py-20" style={{ background: '#0D1F17' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-16 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-5">Make a Difference Today</div>
          <h2
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Empowering Communities Through Compassionate Action
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            At MSS Charitable Trust, we believe in the power of people coming together to create lasting change.
            With a focus on education, healthcare, and empowerment, we connect passionate individuals with causes
            that matter — creating hope in every community we touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Get Involved Today
            </Link>
            <Link
              to="/get-involved#donate"
              className="inline-flex items-center justify-center gap-2 bg-marigold hover:bg-marigold-dark text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
