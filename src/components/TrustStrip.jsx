const items = [
  { icon: '✓',  label: 'Est. 2020',         sub: 'Serving since'      },
  { icon: '📋', label: '12A Registered',     sub: 'Govt. of India'     },
  { icon: '💰', label: '80G Tax Benefit',    sub: 'For all donors'     },
  { icon: '👥', label: '500+ Families',      sub: 'Directly helped'    },
  { icon: '📍', label: 'Telangana & AP',     sub: 'Operating regions'  },
]

export default function TrustStrip() {
  return (
    <div className="bg-forest-deep">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/10">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-4 bg-forest-deep">
              <span className="text-marigold text-lg shrink-0">{item.icon}</span>
              <div className="min-w-0">
                <div className="text-white text-sm font-bold truncate">{item.label}</div>
                <div className="text-white/50 text-xs">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
