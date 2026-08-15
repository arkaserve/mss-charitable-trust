import { useState } from 'react'

const INIT = { first_name: '', last_name: '', email: '', phone: '', purpose: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INIT)
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const set = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
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

  const field = 'w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-forest transition-colors bg-white'

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-forest mb-3">Get in Touch</div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Contact &amp; Donate</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            For donations, volunteering, partnerships, or any queries — we respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: '📍', title: 'Our Office',         lines: ['MSS Charitable Trust,', 'Door No. ___, Street Name,', 'City, State – PIN Code'] },
              { icon: '📞', title: 'Phone / WhatsApp',   lines: ['+91 98765 43210', 'Mon–Sat, 9 AM – 6 PM'] },
              { icon: '✉️', title: 'Email',              lines: ['info@msscharitabletrust.org'] },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <div className="font-bold text-sm text-gray-900 mb-1">{item.title}</div>
                  {item.lines.map((l, j) => <div key={j} className="text-sm text-gray-500">{l}</div>)}
                </div>
              </div>
            ))}

            <div className="border border-gray-200 rounded p-5">
              <h4 className="font-bold text-sm text-gray-900 mb-4">Bank Transfer Details</h4>
              {[
                ['Account Name', 'MSS Charitable Trust'],
                ['Account No.',  'XXXX XXXX XXXX'],
                ['Bank & Branch','Bank Name, Branch'],
                ['IFSC Code',    'XXXXXXXXXX'],
                ['Account Type', 'Current Account'],
              ].map(([l, r]) => (
                <div key={l} className="flex justify-between text-xs py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-500">{l}</span>
                  <span className="font-medium text-gray-800">{r}</span>
                </div>
              ))}
              <p className="text-xs text-forest mt-3 font-medium">✓ 80G receipt issued for all donations above ₹500</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input name="first_name" value={form.first_name} onChange={set} placeholder="First name *" className={field} required />
              <input name="last_name"  value={form.last_name}  onChange={set} placeholder="Last name"    className={field} />
            </div>
            <input name="email"  type="email" value={form.email}  onChange={set} placeholder="Email address *" className={field} required />
            <input name="phone"  type="tel"   value={form.phone}  onChange={set} placeholder="Phone (optional)"className={field} />
            <select name="purpose" value={form.purpose} onChange={set} className={field}>
              <option value="">Purpose of contact</option>
              <option>Donation inquiry</option>
              <option>Volunteering</option>
              <option>CSR / Partnership</option>
              <option>General query</option>
            </select>
            <textarea
              name="message" value={form.message} onChange={set}
              placeholder="Your message *" rows={5}
              className={field + ' resize-none'} required
            />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            {status === 'success' && (
              <div className="bg-forest-light border border-forest/30 text-forest text-sm p-4 rounded">
                Thank you! Your message has been sent. We'll respond within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <button
              type="submit" disabled={status === 'sending'}
              className="w-full bg-forest hover:bg-forest-dark text-white font-bold py-3.5 rounded text-sm transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
