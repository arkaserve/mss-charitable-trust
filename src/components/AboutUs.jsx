const values = [
  { icon: '🤝', title: 'Compassion',   desc: 'Every decision we make is guided by empathy for the people we serve — their dignity comes first.' },
  { icon: '🔍', title: 'Transparency', desc: 'We publish our accounts and program outcomes so every donor knows exactly where their money goes.' },
  { icon: '🌱', title: 'Sustainability',desc: 'We build skills and independence, not dependency — programs are designed to create lasting change.' },
  { icon: '⚖️', title: 'Equity',       desc: 'We reach communities that others overlook — rural villages, widows, orphans, and first-generation students.' },
]

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">About Us</div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            MSS Charitable Trust is a registered non-profit working at the grassroots level to uplift orphans,
            widows, and underserved communities across Telangana and India.
          </p>
        </div>

        {/* Mission + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Our Mission</div>
            <h3 className="font-serif text-2xl text-gray-900 mb-5">
              Serving those who have the least, with all that we have
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              We believe that every child deserves a safe home, every widow deserves economic independence,
              every villager deserves access to healthcare, and every deserving student deserves the chance
              to fulfil their potential — regardless of circumstance.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our programs are not one-time interventions. We build long-term relationships with the
              communities we serve, tracking outcomes year after year and adapting our approach based
              on what actually works on the ground.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Our Story</div>
            <h3 className="font-serif text-2xl text-gray-900 mb-5">
              Founded out of a personal call to serve
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              MSS Charitable Trust was founded in 2020 by a small group of individuals who witnessed firsthand
              the scale of poverty and neglect in rural Telangana. What started as a single health camp for
              60 villagers has grown into a multi-program trust serving over 500 families annually.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Registered under the Indian Trusts Act, 1882, and holding both 12A and 80G certification,
              the trust operates with full legal and financial accountability to its donors and beneficiaries.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-lg p-10">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-forest mb-2">What Guides Us</div>
            <h3 className="font-serif text-2xl text-gray-900">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{v.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration strip */}
        <div className="mt-12 border border-gray-200 rounded-sm p-6 flex flex-wrap gap-6 justify-between items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Legal Registration</div>
            <div className="text-sm text-gray-700 font-medium">Indian Trusts Act, 1882 · Reg. No. MSST/2024</div>
          </div>
          <div className="h-8 w-px bg-gray-200 hidden sm:block" />
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Tax Exemption</div>
            <div className="text-sm text-gray-700 font-medium">12A &amp; 80G Registered — Govt. of India</div>
          </div>
          <div className="h-8 w-px bg-gray-200 hidden sm:block" />
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Operating Since</div>
            <div className="text-sm text-gray-700 font-medium">2020 · Telangana &amp; India</div>
          </div>
          <a
            href="#contact"
            className="bg-forest hover:bg-forest-dark text-white text-sm font-bold px-6 py-2.5 rounded transition-colors shrink-0"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  )
}
