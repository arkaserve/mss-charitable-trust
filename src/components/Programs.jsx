const programs = [
  {
    icon: '👧',
    title: 'Orphan Care',
    desc: 'Safe shelter, daily nutrition, school enrollment, and psychological care for children without parental support.',
    items: ['Residential care & meals', 'School enrollment & tutoring', 'Counseling & skill-building'],
  },
  {
    icon: '🙏',
    title: 'Widow Support',
    desc: 'Economic independence and emotional resilience for widows through skills training and community support.',
    items: ['Vocational skill training', 'Monthly financial assistance', 'Legal awareness workshops'],
  },
  {
    icon: '🏥',
    title: 'Free Health Camps',
    desc: 'Qualified doctors and diagnostic services brought to rural communities that lack access to healthcare.',
    items: ['General health check-ups', 'Eye, dental & BP screening', 'Free medicine distribution'],
  },
  {
    icon: '📚',
    title: 'Education Support',
    desc: 'Scholarships, books, and mentorship to keep deserving students in school and on a path to opportunity.',
    items: ['Merit & need scholarships', 'Stationery & uniform kits', 'Career mentorship'],
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Our Programs</div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Four Ways We Serve</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Every program targets a specific gap — designed for lasting change, not temporary relief.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-sm p-7 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              style={{ borderTop: '3px solid #1A5C38' }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-gray-900 text-base mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
              <ul className="space-y-0">
                {p.items.map((item, j) => (
                  <li key={j} className="text-xs text-gray-400 pl-4 relative border-t border-gray-100 py-1.5">
                    <span className="absolute left-0 text-forest font-bold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
