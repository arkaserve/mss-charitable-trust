const stories = [
  {
    amount: '₹12,500',
    category: 'Education',
    title: 'School Supplies for 25 Children in Need',
    desc: 'Notebooks, uniforms, and bags distributed to children in two villages who lacked basic study materials. All 25 children continued their school year.',
    detail: '25 children · Gajwel & Medak, Telangana',
  },
  {
    amount: '₹18,000',
    category: 'Health Camp',
    title: 'Free Medical Camp — 60 Adults Treated',
    desc: 'Blood pressure, eye, and dental screenings plus basic medicines provided at zero cost. Six patients referred for further hospital treatment.',
    detail: '60 adults treated · Rural Andhra Pradesh',
  },
  {
    amount: '₹9,500',
    category: 'Widow Support',
    title: 'Livelihood Skills for 10 Widowed Women',
    desc: 'Tailoring and handicraft training completed over 6 weeks. Eight of ten participants now earning independently through small home-based work.',
    detail: '10 women · Nalgonda, Telangana',
  },
]

export default function Stories() {
  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Where Your Money Goes</div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Impact in Action</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Every donation is traceable — these are real outcomes from our community programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col hover:border-forest transition-colors duration-200">
              <div className="font-serif text-3xl font-bold text-forest mb-2">{s.amount}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-4">{s.category}</div>
              <h3 className="font-serif text-base font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{s.desc}</p>
              <div className="text-xs text-gray-400 border-t border-gray-100 pt-4">{s.detail}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          Representative examples from recent programs. Full accounts available on request —{' '}
          <a href="#contact" className="text-forest hover:underline">write to us</a>.
        </p>
      </div>
    </section>
  )
}
