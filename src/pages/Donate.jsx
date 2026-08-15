import { useState } from 'react'
import { Link } from 'react-router-dom'

const UPI_ID  = 'msst@upibank' // TODO: replace with real UPI ID
const AMOUNTS = [500, 1000, 2500, 5000, 10000]

function upiUrl(amt) {
  return `upi://pay?pa=${UPI_ID}&pn=MSS+Charitable+Trust&am=${amt}&cu=INR&tn=Donation+to+MSS+Charitable+Trust`
}
function qrSrc(amt) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=4&color=1a5c38&bgcolor=d6eddf&data=${encodeURIComponent(upiUrl(amt))}`
}

const sponsorOptions = [
  { icon: '🎓', title: 'Sponsor a Student',  amount: '₹5,000 / year',  desc: 'Cover a student\'s annual school fees, books, and uniform. You\'ll receive a photo and progress update at year-end.' },
  { icon: '📚', title: 'Sponsor a Study Kit', amount: '₹500 / kit',    desc: 'Provide one child with a complete set of books, bag, and stationery for the academic year.' },
  { icon: '🏥', title: 'Sponsor a Health Camp', amount: '₹18,000',     desc: 'Fund one complete health camp serving 60+ villagers with doctors, screening, and medicines.' },
  { icon: '🙏', title: 'Sponsor a Skill Program', amount: '₹9,500',    desc: 'Fund one 6-week tailoring/handicraft training batch for 10 widowed women.' },
]

const getInvolvedOptions = [
  {
    icon: '🤝',
    title: 'Volunteer',
    desc: 'Offer your skills — teach, counsel, organise health camps, or run community events. Weekend commitment welcome.',
    action: 'Register as Volunteer',
  },
  {
    icon: '🏢',
    title: 'CSR Partnership',
    desc: 'Partner under your company\'s CSR mandate. We offer impact reports, site visits, co-branding, and donor recognition.',
    action: 'Explore Partnership',
  },
  {
    icon: '📣',
    title: 'Spread the Word',
    desc: 'Share our work on social media, refer donors, or introduce us to individuals or organisations who can help.',
    action: 'Get Sharing Materials',
  },
]

export default function Donate({ openDonate }) {
  const [selected, setSelected] = useState(1000)
  const [custom, setCustom]     = useState('')
  const amount = custom ? (parseInt(custom) || selected) : selected

  return (
    <>
      {/* Page hero */}
      <div className="bg-forest-deep py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-forest-light mb-3">Donate</div>
          <h1 className="text-4xl md:text-5xl text-white font-serif mb-4">Give. Change a Life.</h1>
          <p className="text-white/70 text-base max-w-2xl leading-relaxed">
            Every rupee goes directly to our programs. No administrative bloat, no vague fund pools.
            Choose how you want to give below.
          </p>
        </div>
      </div>

      {/* 1 — UPI Donate */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Quick Donation</div>
            <h2 className="text-3xl md:text-4xl text-gray-900 font-serif mb-4">Donate via UPI</h2>
            <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
              Instant, secure, and direct. Use any UPI app — PhonePe, GPay, Paytm, or scan the QR code below.
              All donations above ₹500 receive an 80G tax exemption receipt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Amount selector */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Choose an Amount</div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                {AMOUNTS.map(a => (
                  <button
                    key={a}
                    onClick={() => { setSelected(a); setCustom('') }}
                    className={`py-3 text-sm font-bold rounded border transition-colors ${
                      amount === a && !custom
                        ? 'bg-forest text-white border-forest'
                        : 'border-gray-200 text-gray-700 hover:border-forest hover:text-forest'
                    }`}
                  >
                    ₹{a >= 1000 ? `${a / 1000}k` : a}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Or enter a custom amount"
                value={custom}
                onChange={e => setCustom(e.target.value)}
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-forest mb-6"
              />
              <a
                href={upiUrl(amount)}
                className="flex items-center justify-center gap-2 bg-marigold hover:bg-marigold-dark text-white font-bold py-4 rounded text-base transition-colors mb-4"
              >
                Pay ₹{amount.toLocaleString('en-IN')} via UPI App
              </a>
              <div className="flex gap-3 text-xs text-gray-400 items-center">
                <span className="text-forest font-bold">✓</span> 80G receipt for all donations above ₹500
                <span className="mx-2">·</span>
                <span className="text-forest font-bold">✓</span> Secure &amp; direct
              </div>

              {/* Bank transfer */}
              <div className="mt-8 border border-gray-200 rounded-sm p-5">
                <h4 className="font-bold text-sm text-gray-900 mb-4">Prefer Bank Transfer?</h4>
                {[
                  ['Account Name', 'MSS Charitable Trust'],
                  ['Account No.',  'XXXX XXXX XXXX'],
                  ['Bank & Branch','Bank Name, Branch'],
                  ['IFSC Code',    'XXXXXXXXXX'],
                ].map(([l, r]) => (
                  <div key={l} className="flex justify-between text-xs py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-400">{l}</span>
                    <span className="font-medium text-gray-800">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* QR code */}
            <div className="border border-gray-200 rounded-sm p-8 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Scan to Pay</div>
              <img src={qrSrc(amount)} alt={`QR for ₹${amount}`} className="w-44 h-44 mx-auto rounded mb-4" />
              <div className="text-sm text-gray-600 mb-1">Amount: <strong className="text-forest">₹{amount.toLocaleString('en-IN')}</strong></div>
              <div className="text-xs text-gray-400">Works with PhonePe, GPay, Paytm &amp; all UPI apps</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Sponsor options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Targeted Giving</div>
            <h2 className="text-3xl md:text-4xl text-gray-900 font-serif mb-4">Sponsor a Specific Cause</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Know exactly what your donation funds. Each option below maps to a real, traceable program outcome.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sponsorOptions.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-sm p-7 flex flex-col hover:border-forest hover:shadow-lg transition-all duration-200"
                   style={{ borderTop: '3px solid #1A5C38' }}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                <div className="text-forest font-bold text-lg font-serif mb-3">{s.amount}</div>
                <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-5">{s.desc}</p>
                <Link to="/contact" className="text-center border border-forest text-forest text-xs font-bold py-2 rounded hover:bg-forest hover:text-white transition-colors">
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Get involved */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Beyond Donating</div>
            <h2 className="text-3xl md:text-4xl text-gray-900 font-serif mb-4">Other Ways to Help</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              You don't need to be wealthy to make a difference. Time, skills, and voice matter too.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getInvolvedOptions.map((g, i) => (
              <div key={i} className="border border-gray-200 rounded-sm p-8 flex flex-col hover:border-forest transition-colors">
                <div className="text-4xl mb-4">{g.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-3">{g.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{g.desc}</p>
                <Link to="/contact" className="text-center bg-forest text-white text-sm font-bold py-2.5 rounded hover:bg-forest-dark transition-colors">
                  {g.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
