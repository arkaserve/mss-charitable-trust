import { useState } from 'react'

const INIT = { first_name: '', last_name: '', email: '', phone: '', purpose: '', message: '' }

const contactCards = [
  {
    icon: '📍',
    title: 'Visit Our Office',
    lines: ['MSS Charitable Trust,', 'Guntur, Andhra Pradesh – 522315'],
  },
  {
    icon: '📞',
    title: 'Call / WhatsApp',
    lines: ['+91 98663 76367', 'Mon – Sat, 9 AM – 6 PM'],
  },
  {
    icon: '✉️',
    title: 'Email Us',
    lines: ['msscharitabletrust4u@gmail.com', 'Reply within 24 hours'],
  },
]

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

  const field = 'w-full border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-marigold focus:ring-1 focus:ring-marigold/30 transition-colors bg-white placeholder-gray-400'

  return (
    <>
      {/* ── Photo Hero ── */}
      <div
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ height: 520, minHeight: 420 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e0?auto=format&fit=crop&w=1920&q=85')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        />
        {/* Diagonal gradient — heavy left, fades to translucent right so photo shows */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(8,34,24,0.97) 0%, rgba(8,34,24,0.82) 45%, rgba(8,34,24,0.45) 100%)' }}
        />
        {/* Subtle bottom fade for readability */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{ background: 'linear-gradient(to top, rgba(8,34,24,0.6) 0%, transparent 100%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-16">
          <div className="max-w-2xl">
            {/* Eyebrow with rule */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-marigold shrink-0" />
              <div className="text-xs font-bold uppercase tracking-widest text-marigold">Contact Us</div>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] text-white font-black leading-tight mb-5"
              style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
            >
              Let's Connect &<br className="hidden sm:block" /> Make a Difference
            </h1>
            <p className="text-white/65 text-base max-w-lg leading-relaxed mb-10">
              For donations, volunteering, partnerships, or any query — we respond within 24 hours.
            </p>

            {/* Quick contact pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '📞', text: '+91 98663 76367', always: true },
                { icon: '✉️', text: 'msscharitabletrust4u@gmail.com', always: false },
                { icon: '📍', text: 'Guntur, Andhra Pradesh', always: true },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 ${c.always ? '' : 'hidden sm:flex'}`}
                >
                  <span className="text-sm leading-none">{c.icon}</span>
                  <span className="text-white/80 text-xs font-medium">{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact info cards strip ── */}
      <div className="bg-forest-deep">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((c, i) => (
              <div
                key={i}
                className="flex gap-5 bg-white/5 border border-white/10 rounded-xl px-6 py-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl shrink-0 mt-0.5">{c.icon}</div>
                <div>
                  <div className="font-bold text-white text-sm mb-2">{c.title}</div>
                  {c.lines.map((l, j) => (
                    <div key={j} className="text-white/55 text-sm leading-relaxed">{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main section ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Left: Bank details + Office hours */}
            <div className="lg:col-span-2 space-y-7">

              {/* Bank transfer */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-forest-deep px-6 py-4">
                  <h4 className="font-bold text-white text-sm uppercase tracking-widest">Bank Transfer Details</h4>
                </div>
                <div className="px-6 py-4 space-y-0">
                  {[
                    ['Account Name', 'MSS Charitable Trust'],
                    ['Account No.',  'XXXX XXXX XXXX'],
                    ['Bank & Branch','Bank Name, Branch'],
                    ['IFSC Code',    'XXXXXXXXXX'],
                    ['Account Type', 'Current Account'],
                  ].map(([l, r]) => (
                    <div key={l} className="flex justify-between py-3 border-b border-gray-100 last:border-0 gap-4">
                      <span className="text-gray-400 text-xs">{l}</span>
                      <span className="font-semibold text-gray-800 text-xs text-right">{r}</span>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-5">
                  <div className="bg-marigold/10 border border-marigold/25 text-marigold-dark text-xs px-4 py-3 rounded-lg font-medium">
                    ✓ 80G tax receipt issued for all donations above ₹500
                  </div>
                </div>
              </div>

              {/* Quick promise */}
              <div className="bg-marigold rounded-xl px-6 py-5 flex gap-4 items-start">
                <span className="text-2xl shrink-0">⚡</span>
                <div>
                  <div className="font-bold text-white text-sm mb-1">Fast Response Guarantee</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Every message is personally read by our team. You will receive a reply within 24 hours on working days.
                  </p>
                </div>
              </div>

            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="mb-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-2">Send A Message</div>
                  <h2 className="text-2xl font-bold text-gray-900">We'd Love to Hear From You</h2>
                </div>

                <form onSubmit={submit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">First Name *</label>
                      <input name="first_name" value={form.first_name} onChange={set} placeholder="John" className={field} required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                      <input name="last_name" value={form.last_name} onChange={set} placeholder="Doe" className={field} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={set} placeholder="you@example.com" className={field} required />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input name="phone" type="tel" value={form.phone} onChange={set} placeholder="" className={field} />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Purpose</label>
                    <select name="purpose" value={form.purpose} onChange={set} className={field}>
                      <option value="">Select a purpose…</option>
                      <option>Donation enquiry</option>
                      <option>Sponsorship</option>
                      <option>Volunteering</option>
                      <option>CSR / Partnership</option>
                      <option>Request annual report</option>
                      <option>General query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Message *</label>
                    <textarea
                      name="message" value={form.message} onChange={set}
                      placeholder="Tell us how we can help…"
                      rows={5}
                      className={field + ' resize-none'}
                      required
                    />
                  </div>

                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  {status === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 text-sm p-4 rounded-lg flex gap-3">
                      <span className="shrink-0">✓</span>
                      Thank you! Your message has been sent. We'll respond within 24 hours.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-lg">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-marigold hover:bg-marigold-dark text-white font-bold py-4 rounded-lg text-sm transition-colors disabled:opacity-60 min-h-[52px]"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
