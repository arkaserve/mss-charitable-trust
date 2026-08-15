import { Link } from 'react-router-dom'

const subNav = [
  { href: '#education', label: 'Education Support'  },
  { href: '#children',  label: 'Children & Orphans' },
  { href: '#women',     label: 'Women & Widows'     },
  { href: '#healthcare',label: 'Healthcare Camps'   },
  { href: '#community', label: 'Community Welfare'  },
]

const programs = [
  {
    id: 'education',
    icon: '📚',
    accent: '#1A5C38',
    tag: 'Program 1',
    title: 'Education Support',
    intro: 'Education is the most lasting way to break the cycle of poverty. We ensure financial hardship is never the reason a student\'s dream ends early.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    items: [
      { label: 'Merit & need-based scholarships', desc: 'Annual scholarships for school and college students from low-income families.' },
      { label: 'School kits distribution',        desc: 'Books, bags, uniforms, and stationery given before every academic year.' },
      { label: 'Competitive exam coaching',       desc: 'Free coaching for NEET, JEE, and state-level competitive exams.' },
      { label: 'Free tuition centres',            desc: 'After-school tuition run by volunteers in underserved areas.' },
      { label: 'Career mentorship',               desc: 'One-on-one guidance from working professionals for students in higher education.' },
    ],
    stat: { num: '200+', label: 'Students Supported' },
  },
  {
    id: 'children',
    icon: '👧',
    accent: '#CB7D0B',
    tag: 'Program 2',
    title: 'Children & Orphans',
    intro: 'Children without parental care are among society\'s most vulnerable. We provide more than shelter — we provide belonging, routine, and a real childhood.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    items: [
      { label: 'Safe residential shelter',    desc: 'Secure, clean accommodation for children without family support.' },
      { label: 'Daily nutrition',             desc: 'Three nutritious meals a day and regular health monitoring.' },
      { label: 'School enrolment',            desc: 'Every child in our care is enrolled in a government or private school.' },
      { label: 'Psychological care',          desc: 'Trauma-informed counselling and emotional support.' },
      { label: 'Skill-building for youth',    desc: 'Vocational training and life-skills programmes for older children.' },
    ],
    stat: { num: '80+', label: 'Children in Care' },
  },
  {
    id: 'women',
    icon: '🙏',
    accent: '#1A5C38',
    tag: 'Program 3',
    title: 'Women & Widows Empowerment',
    intro: 'Widows often face social isolation and financial hardship simultaneously. Our programme builds economic independence alongside emotional resilience.',
    img: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=900&q=80',
    items: [
      { label: 'Vocational skill training',   desc: 'Tailoring, handicraft, and other income-generating skills over 6-week cycles.' },
      { label: 'Financial assistance',        desc: 'Monthly support for immediate household needs while skills are being built.' },
      { label: 'Self-help group formation',   desc: 'Women\'s SHGs for savings, peer support, and microfinance access.' },
      { label: 'Legal awareness',             desc: 'Workshops on property rights, government schemes, and legal protections.' },
      { label: 'Community reintegration',     desc: 'Events and peer networks that reduce social isolation and build confidence.' },
    ],
    stat: { num: '150+', label: 'Women Empowered' },
  },
  {
    id: 'healthcare',
    icon: '🏥',
    accent: '#CB7D0B',
    tag: 'Program 4',
    title: 'Healthcare Camps',
    intro: 'Inadequate healthcare access is a silent crisis in rural areas. We bring qualified doctors and diagnostic services directly to communities that need them most.',
    img: 'https://images.unsplash.com/photo-1551601651-09492b5468b6?auto=format&fit=crop&w=900&q=80',
    items: [
      { label: 'General health check-ups',    desc: 'Physician consultations, blood pressure, sugar, and cholesterol screening.' },
      { label: 'Eye camps',                   desc: 'Vision screening and free spectacles for adults identified with impairment.' },
      { label: 'Dental camps',               desc: 'Basic dental care and oral health education for all ages.' },
      { label: 'Women\'s health awareness',   desc: 'Maternal and gynaecological health sessions for women.' },
      { label: 'Free medicine distribution',  desc: 'Essential medicines given free to patients who cannot afford treatment.' },
    ],
    stat: { num: '12', label: 'Health Camps Held' },
  },
  {
    id: 'community',
    icon: '🤝',
    accent: '#1A5C38',
    tag: 'Program 5',
    title: 'Community Welfare',
    intro: 'Individual programs are more effective when the whole community is stronger. We invest in initiatives that lift entire villages — not just individual families.',
    img: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=900&q=80',
    items: [
      { label: 'Sanitation awareness',        desc: 'Hygiene education programmes in schools and villages.' },
      { label: 'Environment drives',          desc: 'Tree planting and waste management campaigns in rural areas.' },
      { label: 'Community events',            desc: 'Festivals, sports days, and cultural programmes that build community bonds.' },
      { label: 'Awareness campaigns',         desc: 'Health, legal rights, and government scheme awareness drives.' },
      { label: 'Volunteer mobilisation',      desc: 'Training and coordinating local volunteers to sustain programmes long-term.' },
    ],
    stat: { num: '10+', label: 'Villages Reached' },
  },
]

export default function OurWork() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="relative flex flex-col justify-end overflow-hidden" style={{ height: 380 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,34,24,0.96) 0%, rgba(8,34,24,0.65) 50%, rgba(8,34,24,0.2) 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-3">Our Work</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-black leading-tight mb-4 max-w-3xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            What We Do
          </h1>
          <p className="text-white/70 text-base max-w-2xl leading-relaxed">
            Five focused programs — each targeting a specific gap in underserved communities across Andhra Pradesh.
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

      {/* ── Program Sections ── */}
      {programs.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`py-24 ${i % 2 === 0 ? 'bg-cream' : 'bg-white'}`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>

              {/* Image side */}
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full rounded-xl shadow-xl object-cover"
                  style={{ height: 420 }}
                />
                {/* Stat badge */}
                <div className="absolute bottom-6 left-6 bg-forest-deep rounded-xl px-5 py-4 shadow-xl">
                  <div className="font-black text-2xl text-marigold leading-none">{p.stat.num}</div>
                  <div className="text-white/60 text-xs mt-1">{p.stat.label}</div>
                </div>
                {/* Tag badge */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-bold text-gray-700 shadow">
                  {p.tag}
                </div>
              </div>

              {/* Content side */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{p.icon}</span>
                  <div className="text-xs font-bold uppercase tracking-widest text-forest">{p.title}</div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                  {p.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-8 italic border-l-4 border-forest/20 pl-4">
                  {p.intro}
                </p>

                {/* Initiative list */}
                <div className="space-y-4">
                  {p.items.map((item, j) => (
                    <div key={j} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
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
          </div>
        </section>
      ))}

      {/* ── Bottom CTA ── */}
      <div className="bg-forest-deep py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-4">Support Our Work</div>
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">Want to support a specific program?</h2>
          <p className="text-white/60 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Donate to the general fund or sponsor a specific initiative — education, healthcare, or child care.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/get-involved" className="bg-marigold hover:bg-marigold-dark text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors">
              Donate Now →
            </Link>
            <Link to="/contact" className="border border-white/40 text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
