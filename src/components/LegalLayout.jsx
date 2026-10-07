export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      {/* Hero */}
      <div className="bg-forest-deep px-5 sm:px-8 lg:px-16 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-3">Legal</div>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {title}
          </h1>
          <p className="text-white/50 text-sm mt-3">Last updated: {updated}</p>
        </div>
      </div>

      {/* Content card */}
      <div className="bg-gray-50 min-h-screen px-5 sm:px-8 lg:px-16 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 sm:px-10 md:px-14 py-10 sm:py-14">
            <div className="space-y-10 text-gray-600" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', lineHeight: '1.85' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function Section({ title, children }) {
  return (
    <section>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-1 shrink-0 rounded-full bg-marigold mt-1" style={{ height: '1.25rem' }} />
        <h2
          className="text-base sm:text-lg font-bold text-gray-900 leading-snug"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {title}
        </h2>
      </div>
      <div className="pl-4 space-y-3">
        {children}
      </div>
    </section>
  )
}
