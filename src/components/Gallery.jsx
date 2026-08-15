const photos = [
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=75',
    caption: 'Education Drive',
    sub: 'Book & stationery distribution among children.',
  },
  {
    src: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=600&q=75',
    caption: 'Healthcare Camp',
    sub: 'Free medical check-ups for rural communities.',
  },
  {
    src: 'https://images.unsplash.com/photo-1573496546038-82f9c39f6365?auto=format&fit=crop&w=600&q=75',
    caption: 'Women\'s Empowerment',
    sub: 'Skills training programme for widowed women.',
  },
  {
    src: 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?auto=format&fit=crop&w=600&q=75',
    caption: 'Children Support',
    sub: 'Nutrition & care for orphaned children.',
  },
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=75',
    caption: 'Community Outreach',
    sub: 'Grassroots program across Telangana & AP.',
  },
  {
    src: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=75',
    caption: 'Livelihood Program',
    sub: 'Vocational training for sustainable income.',
  },
  {
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=75',
    caption: 'Field Visit',
    sub: 'Team verifying every beneficiary personally.',
  },
  {
    src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=75',
    caption: 'Food Distribution',
    sub: 'Nutrition support to vulnerable families.',
  },
  {
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=75',
    caption: 'Youth Empowerment',
    sub: 'Mentoring program for young leaders.',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Photo Gallery</div>
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-3">
            MSS Charitable Trust completed project activity photos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {photos.map((p, i) => (
            <div key={i} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              {/* 3:2 ratio — at ~380px col width → 253px tall */}
              <div className="overflow-hidden" style={{ height: 248 }}>
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-4 py-3">
                <div className="font-bold text-gray-900 text-sm">{p.caption}</div>
                <div className="text-gray-500 text-sm mt-0.5 leading-snug">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
