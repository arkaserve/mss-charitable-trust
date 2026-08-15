const stats = [
  { num: '500+', label: 'Families Helped'     },
  { num: '12',   label: 'Health Camps Held'   },
  { num: '80+',  label: 'Children in Care'    },
  { num: '200+', label: 'Students Supported'  },
]

export default function ImpactStrip() {
  return (
    <div className="bg-forest py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">{s.num}</div>
              <div className="text-white/60 text-xs uppercase tracking-widest font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
