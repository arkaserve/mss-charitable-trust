import { useState } from 'react'
import { Link } from 'react-router-dom'

const INIT = { full_name: '', email: '', phone: '', purpose: '', message: '' }

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.13 1 .38 1.98.72 2.92a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.16-1.16a2 2 0 012.11-.45c.94.34 1.92.59 2.92.72A2 2 0 0122 14.92z"/>
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function Contact() {
  const [form, setForm]     = useState(INIT)
  const [status, setStatus] = useState(null)

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const data = new FormData()
      data.append('access_key', '26faa4c5-1b33-4359-9d5e-c4f5cfef4318')
      data.append('subject', 'New Message — MSS Charitable Trust Website')
      data.append('from_name', 'MSS Trust Website')
      Object.entries(form).forEach(([k, v]) => data.append(k, v))
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) { setStatus('success'); setForm(INIT) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputCls = 'w-full bg-white text-gray-900 text-sm px-4 py-2.5 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/25 transition-colors'
  const inputStyle = { border: '1px solid rgb(212,201,175)' }

  return (
    <>
      {/* ── Small hero ── */}
      <div className="bg-forest-deep py-7 px-4 text-left" style={{ minHeight: 145, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div className="max-w-6xl mx-auto w-full px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-2 whitespace-nowrap">
            We'd Love to Hear From You
          </h1>
          <p className="text-white/75 text-sm max-w-xl leading-relaxed">
            Whether you're interested in volunteering, making a donation, or partnering with us — please reach out.
          </p>
        </div>
      </div>

      {/* ── Main 2-column section ── */}
      <div className="pt-6 pb-10 sm:pt-8 sm:pb-12 px-4 sm:px-6" style={{ backgroundColor: 'rgb(245,240,232)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

            {/* ── LEFT: Get in Touch ── */}
            <div className="flex flex-col">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Get in Touch
              </h2>

              {/* Contact items */}
              <div className="space-y-6 mb-8">

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgb(139,115,85)' }}>
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgb(92,73,45)' }}>Phone</div>
                    <a href="tel:+919866376367" className="text-sm font-semibold hover:underline" style={{ color: 'rgb(139,115,85)' }}>
                      +91 98663 76367
                    </a>
                    <div className="text-gray-400 text-xs mt-0.5">Mon – Sat, 9 AM – 6 PM</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgb(139,115,85)' }}>
                    <MailIcon />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgb(92,73,45)' }}>Email</div>
                    <a href="mailto:msscharitabletrust4u@gmail.com" className="text-sm font-semibold break-all hover:underline" style={{ color: 'rgb(139,115,85)' }}>
                      msscharitabletrust4u@gmail.com
                    </a>
                    <div className="text-gray-400 text-xs mt-0.5">Reply within 24 hours</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgb(139,115,85)' }}>
                    <PinIcon />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgb(92,73,45)' }}>Address</div>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed">
                      MSS Charitable Trust,<br />Guntur, India – 522315
                    </p>
                  </div>
                </div>

              </div>

              {/* Quote card */}
              <div className="mt-2 mb-1 rounded-xl p-6 relative overflow-hidden" style={{ backgroundColor: 'rgb(232,224,210)', border: '1px solid rgb(212,201,175)' }}>
                <div className="text-6xl leading-none opacity-15 select-none absolute -top-2 left-4" style={{ color: 'rgb(82,68,42)', fontFamily: "'Lora', serif" }}>"</div>
                <p className="text-sm italic leading-relaxed relative z-10 mb-3" style={{ color: 'rgb(82,68,42)', fontFamily: "'Lora', serif" }}>
                  Every message we receive is a chance to serve better. We are here, we are listening, and we care deeply about every family we touch.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgb(139,115,85)' }}>— MSS Charitable Trust</div>
              </div>

              {/* Trust info strip */}
              <div className="rounded-xl p-4 flex items-center gap-4 mb-2" style={{ backgroundColor: 'rgb(245,240,232)', border: '1px solid rgb(212,201,175)' }}>
                <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-lg" style={{ backgroundColor: 'rgb(200,169,110)' }}>🏛️</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'rgb(92,73,45)' }}>Registered Non-Profit</div>
                  <div className="text-xs" style={{ color: 'rgb(139,115,85)' }}>Reg. No. MSST/2024 · Indian Trusts Act, 1882</div>
                </div>
              </div>

              {/* Donation callout box */}
              <div className="mt-auto rounded-xl p-6" style={{ backgroundColor: 'rgb(82,68,42)' }}>
                <div className="font-bold text-white text-base mb-1">Want to make a donation?</div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(212,185,140)' }}>
                  Find all bank transfer and UPI payment details on our Donate page.
                </p>
                <Link
                  to="/get-involved"
                  className="inline-block font-semibold text-sm px-6 py-2.5 rounded-lg transition-all hover:opacity-90"
                  style={{ backgroundColor: 'rgb(168,142,98)', color: 'white' }}
                >
                  Go to Donate Page
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Form card ── */}
            <div className="bg-white rounded-2xl shadow-md px-7 sm:px-8 py-8 sm:py-10 flex flex-col">
              <h2
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-7"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Send Us a Message
              </h2>

              <form onSubmit={submit} className="space-y-5 flex flex-col flex-1">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input name="full_name" value={form.full_name} onChange={set}
                    placeholder="Your name" className={inputCls} style={inputStyle} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={set}
                    placeholder="your@email.com" className={inputCls} style={inputStyle} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input name="phone" type="tel" value={form.phone} onChange={set}
                    className={inputCls} style={inputStyle} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Purpose</label>
                  <select name="purpose" value={form.purpose} onChange={set}
                    className={inputCls + ' text-gray-700'} style={inputStyle}>
                    <option value="">Select a purpose…</option>
                    <option>Donation enquiry</option>
                    <option>Sponsorship</option>
                    <option>Volunteering</option>
                    <option>CSR / Partnership</option>
                    <option>General query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={set}
                    placeholder="How can we help you?" rows={4}
                    className={inputCls + ' resize-none'} style={inputStyle} required />
                </div>

                <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 text-sm p-4 rounded-lg flex gap-2 items-start">
                    <span className="shrink-0">✓</span> Thank you! We'll respond within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-lg">
                    Something went wrong. Please email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-auto w-full py-3 rounded-lg font-semibold text-white text-base transition-all hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: 'rgb(82,68,42)' }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
