import { useState, useEffect } from 'react'

const UPI_ID  = 'msst@upibank' // TODO: replace with your real UPI ID
const AMOUNTS = [500, 1000, 2500, 5000]

function upiUrl(amt) {
  return `upi://pay?pa=${UPI_ID}&pn=MSS+Charitable+Trust&am=${amt}&cu=INR&tn=Donation+to+MSS+Charitable+Trust`
}

function qrSrc(amt) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=148x148&margin=4&color=1a5c38&bgcolor=d6eddf&data=${encodeURIComponent(upiUrl(amt))}`
}

export default function DonateModal({ open, onClose }) {
  const [selected, setSelected] = useState(500)
  const [custom, setCustom]     = useState('')

  const amount = custom ? (parseInt(custom) || selected) : selected

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    if (open) window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-2xl sm:rounded-lg w-full max-w-sm shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h3 className="font-serif font-bold text-gray-900">Make a Donation</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none w-8 h-8 flex items-center justify-center">
            ×
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Amount preset grid */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Choose Amount</div>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {AMOUNTS.map(a => (
                <button
                  key={a}
                  onClick={() => { setSelected(a); setCustom('') }}
                  className={`py-2 text-sm font-bold rounded border transition-colors ${
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
              placeholder="Or enter custom amount"
              value={custom}
              onChange={e => setCustom(e.target.value)}
              className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-forest"
            />
          </div>

          {/* UPI deep link */}
          <a
            href={upiUrl(amount)}
            className="flex items-center justify-center gap-2 bg-marigold hover:bg-marigold-dark text-white font-bold py-3.5 rounded text-sm transition-colors"
          >
            Pay ₹{amount.toLocaleString('en-IN')} via UPI App
          </a>

          {/* QR code */}
          <div className="border border-gray-100 rounded p-4 text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Or Scan QR Code</div>
            <img
              src={qrSrc(amount)}
              alt={`QR for ₹${amount} UPI payment`}
              className="w-36 h-36 mx-auto rounded"
            />
            <div className="text-xs text-gray-400 mt-2">Works with PhonePe, GPay, Paytm &amp; all UPI apps</div>
          </div>

          <p className="text-xs text-gray-400 text-center">
            80G tax benefit · All donations go directly to programs
          </p>
        </div>
      </div>
    </div>
  )
}
