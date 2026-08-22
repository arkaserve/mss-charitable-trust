import { useState } from 'react'

const photos = [
  { src: '/photos/real-1.jpg', caption: 'MSS Charitable Trust — Community Service' },
  { src: '/photos/real-2.jpg', caption: 'MSS Charitable Trust — Field Work' },
  { src: '/photos/real-3.jpg', caption: 'MSS Charitable Trust — Outreach Programme' },
  { src: '/photos/real-4.jpg', caption: 'MSS Charitable Trust — Community Event' },
  { src: '/photos/real-5.jpg', caption: 'MSS Charitable Trust — Trust Activities' },
]

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState(null)

  const close = () => setLightbox(null)
  const prev = () => setLightbox(i => (i - 1 + photos.length) % photos.length)
  const next = () => setLightbox(i => (i + 1) % photos.length)

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
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-8 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight mb-2 whitespace-nowrap"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            Photo Gallery
          </h1>
          <p className="text-white/75 text-sm max-w-xl leading-relaxed">
            Moments from our ground-level work across communities in India.
          </p>
        </div>
      </div>

      {/* ── Gallery grid ── */}
      <section className="py-14 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Our Moments</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10" style={{ fontFamily: "'Lora', serif" }}>
            Stories Told Through Pictures
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photos.map((p, i) => (
              <div
                key={i}
                className="cursor-pointer group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300"
                style={{ height: 280 }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <p className="w-full px-4 py-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60">
                    {p.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-xl flex items-center justify-center transition-colors"
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >‹</button>

          {/* Image */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-3" onClick={e => e.stopPropagation()}>
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].caption}
              className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
            <p className="text-white/75 text-sm text-center">{photos[lightbox].caption}</p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-xl flex items-center justify-center transition-colors"
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Next"
          >›</button>

          {/* Close */}
          <button
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white text-lg flex items-center justify-center transition-colors"
            onClick={close}
            aria-label="Close"
          >×</button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs">
            {lightbox + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  )
}
