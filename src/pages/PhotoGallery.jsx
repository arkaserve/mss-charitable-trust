import { useState, useEffect } from 'react'

const photos = [
  /* ── Community Meals ── */
  { src: '/photos/meal-large-gathering.jpg',       caption: 'Community Meal — Families Served Together',    category: 'meals' },
  { src: '/photos/meal-women-children.jpg',        caption: 'Women & Children at Community Meal',           category: 'meals' },
  { src: '/photos/meal-community-wide.jpg',        caption: 'Hundreds Fed at Community Gathering',          category: 'meals' },
  { src: '/photos/meal-seated-rows.jpg',           caption: 'Families Seated in Rows — Community Feast',   category: 'meals' },
  { src: '/photos/meal-volunteers-active.jpg',     caption: 'Volunteers Serving Every Family',              category: 'meals' },
  { src: '/photos/meal-youth-volunteers.jpg',      caption: 'Youth Volunteers Distributing Food Trays',    category: 'meals' },
  { src: '/photos/meal-volunteer-serving.jpg',     caption: 'A Volunteer Serving Children with Care',      category: 'meals' },
  { src: '/photos/meal-children-served.jpg',       caption: 'Nourishing Every Child — No One Left Behind', category: 'meals' },
  { src: '/photos/meal-children-banner.jpg',       caption: 'Children Fed Under the MSS Trust Banner',     category: 'meals' },
  { src: '/photos/meal-community-gathering.jpg',   caption: 'Community Gathering — MSS Charitable Trust',  category: 'meals' },
  { src: '/photos/meal-banner-crowd.jpg',          caption: 'MSS Charitable Trust Community Event',        category: 'meals' },
  { src: '/photos/meal-food-preparation.jpg',      caption: 'Freshly Prepared Meals — Ready to Serve',    category: 'meals' },

  /* ── Outreach & Awareness ── */
  { src: '/photos/outreach-community-discussion.jpg', caption: 'Community Awareness Session in the Field',  category: 'outreach' },
  { src: '/photos/outreach-awareness-session.jpg',    caption: 'Field Outreach — Reaching Every Family',   category: 'outreach' },
  { src: '/photos/outreach-home-visit.jpg',           caption: 'Home Visit — Understanding Ground Realities', category: 'outreach' },

  /* ── Existing real photos ── */
  { src: '/photos/community-gathering.jpg',        caption: 'Community Gathering & Support',               category: 'outreach' },
  { src: '/photos/womens-meeting.jpg',             caption: 'Women\'s Empowerment & Support Programme',    category: 'outreach' },
  { src: '/photos/children-outreach.jpg',          caption: 'Children\'s Education & Outreach',           category: 'outreach' },
  { src: '/photos/children-kits.jpg',              caption: 'School Kit Distribution Drive',              category: 'outreach' },
]

const TABS = [
  { key: 'all',     label: 'All Photos' },
  { key: 'meals',   label: 'Community Meals' },
  { key: 'outreach',label: 'Outreach & Awareness' },
]

export default function PhotoGallery() {
  const [lightbox, setLightbox]   = useState(null)
  const [activeTab, setActiveTab] = useState('all')

  const filtered = activeTab === 'all' ? photos : photos.filter(p => p.category === activeTab)

  const close = () => setLightbox(null)
  const prev  = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length)
  const next  = () => setLightbox(i => (i + 1) % filtered.length)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = e => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative flex flex-col justify-end overflow-hidden" style={{ height: 145 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,34,24,0.96) 0%, rgba(8,34,24,0.65) 50%, rgba(8,34,24,0.2) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pb-8 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight mb-2"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            Photo Gallery
          </h1>
          <p className="text-white/75 text-sm max-w-xl leading-relaxed">
            Real moments from our ground-level work — feeding families, reaching homes, changing lives.
          </p>
        </div>
      </div>

      {/* ── Gallery ── */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

          {/* heading */}
          <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgb(139,115,85)' }}>Our Moments</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Lora', serif" }}>
            Stories Told Through Pictures
          </h2>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {TABS.map(t => (
              <button
                key={t.key}
                onClick={() => { setActiveTab(t.key); setLightbox(null) }}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={activeTab === t.key
                  ? { backgroundColor: 'rgb(26,92,56)', color: 'white' }
                  : { backgroundColor: 'rgb(232,224,210)', color: 'rgb(82,68,42)' }
                }
              >
                {t.label}
                <span className="ml-1.5 text-xs opacity-70">
                  ({t.key === 'all' ? photos.length : photos.filter(p => p.category === t.key).length})
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filtered.map((p, i) => (
              <div
                key={p.src}
                className="cursor-pointer group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ height: 260 }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.15)' }}
                  onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
                />
                {/* hover overlay */}
                <div className="absolute inset-0 flex items-end transition-all duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(8,34,24,0) 0%, rgba(8,34,24,0) 50%, rgba(8,34,24,0) 100%)' }}
                >
                  <div className="w-full px-4 pb-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(8,34,24,0.85) 0%, transparent 100%)' }}>
                    <p className="text-white text-xs font-semibold leading-snug">{p.caption}</p>
                  </div>
                </div>
                {/* zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="8" cy="8" r="5"/><path d="M13 13l4 4"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* count footer */}
          <p className="text-center mt-8 text-sm" style={{ color: 'rgb(139,115,85)' }}>
            Showing {filtered.length} of {photos.length} photos
          </p>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/92 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Prev */}
          <button
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl flex items-center justify-center transition-colors z-10"
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >‹</button>

          {/* Image */}
          <div
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center gap-3"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl"
              style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.15)' }}
            />
            <p className="text-white/80 text-sm text-center px-8">{filtered[lightbox].caption}</p>
            <p className="text-white/35 text-xs">{lightbox + 1} / {filtered.length}</p>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl flex items-center justify-center transition-colors z-10"
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Next"
          >›</button>

          {/* Close */}
          <button
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white text-lg flex items-center justify-center transition-colors"
            onClick={close}
            aria-label="Close"
          >×</button>
        </div>
      )}
    </>
  )
}
