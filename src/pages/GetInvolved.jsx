import { Link } from 'react-router-dom'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.13 1 .38 1.98.72 2.92a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.16-1.16a2 2 0 012.11-.45c.94.34 1.92.59 2.92.72A2 2 0 0122 14.92z"/>
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const BankIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22h18M3 10h18M5 6l7-4 7 4M4 10v12M20 10v12M8 10v12M12 10v12M16 10v12"/>
  </svg>
)

const whyDonate = [
  {
    icon: '📚',
    title: 'Education for Every Child',
    desc: 'We fund scholarships, school kits, free tuition centres, and competitive exam coaching for students from low-income families across India.',
  },
  {
    icon: '🏥',
    title: 'Free Healthcare Camps',
    desc: 'Doctors, medicines, and diagnostics brought directly to rural communities — general check-ups, eye care, dental care, and women\'s health awareness.',
  },
  {
    icon: '🙏',
    title: 'Women & Widow Empowerment',
    desc: 'Vocational training, self-help groups, and financial support help widowed and vulnerable women rebuild their independence and dignity.',
  },
  {
    icon: '👧',
    title: 'Orphan & Child Care',
    desc: 'Safe shelter, daily nutrition, school enrolment, and emotional care for orphaned children — giving them a home and a future.',
  },
  {
    icon: '🤝',
    title: 'Community Development',
    desc: 'Sanitation drives, awareness camps, elder care, and disaster relief that lift entire villages — not just individual families.',
  },
  {
    icon: '✅',
    title: '100% Transparent & Accountable',
    desc: 'Every donation is used directly for charitable programmes. We are registered under the Indian Trusts Act, 1882, and issue 80G receipts for all eligible donations.',
  },
]

const stats = [
  { num: '500+', label: 'Families Helped' },
  { num: '200+', label: 'Students Supported' },
  { num: '80+',  label: 'Children in Care' },
  { num: '12',   label: 'Health Camps Held' },
]

export default function GetInvolved() {
  return (
    <>
      {/* ── Hero ── */}
      <div
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ height: 145 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,34,24,0.96) 0%, rgba(8,34,24,0.65) 55%, rgba(8,34,24,0.2) 100%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 pb-8 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight mb-2 whitespace-nowrap"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            Donate to MSS Charitable Trust
          </h1>
          <p className="text-white/75 text-sm max-w-xl leading-relaxed">
            Your generous donation helps us continue our mission of serving underprivileged communities
            across India. Every contribution, no matter how small, makes a real difference.
          </p>
        </div>
      </div>

      {/* ── Every Contribution Counts ── */}
      <div style={{ backgroundColor: 'rgb(245,240,232)' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-6 pt-12 sm:pt-16 pb-4 text-center">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgb(139,115,85)' }}>Every Contribution Counts</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3" style={{ color: 'rgb(52,40,24)', fontFamily: "'Lora', serif" }}>Donate Now</h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'rgb(107,91,62)' }}>
            Choose your preferred method below to make a secure donation directly to MSS Charitable Trust.
          </p>
        </div>

        {/* ── 3 Cards ── */}
        <div className="max-w-5xl mx-auto px-5 sm:px-6 pb-14 sm:pb-20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">

            {/* Card 1: Get in Touch */}
            <div className="bg-white rounded-xl p-5 flex flex-col gap-4 h-full" style={{ border: '1px solid rgb(212,201,175)' }}>
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgb(107,91,62)' }}>Get in Touch</div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgb(200,169,110)' }}>
                  <PhoneIcon />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'rgb(107,91,62)' }}>Phone</div>
                  <a href="tel:+919866376367" className="text-sm font-semibold" style={{ color: 'rgb(139,115,85)' }}>
                    +91 98663 76367
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgb(200,169,110)' }}>
                  <MailIcon />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'rgb(107,91,62)' }}>Email</div>
                  <a href="mailto:msscharitabletrust4u@gmail.com" className="text-sm font-semibold break-all" style={{ color: 'rgb(139,115,85)' }}>
                    msscharitabletrust4u@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgb(200,169,110)' }}>
                  <PinIcon />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'rgb(107,91,62)' }}>Address</div>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: 'rgb(82,68,42)' }}>
                    MSS Charitable Trust,<br />Guntur, India
                  </p>
                </div>
              </div>

            </div>

            {/* Card 2: Bank Transfer */}
            <div className="bg-white rounded-xl p-5 flex flex-col gap-4 h-full" style={{ border: '1px solid rgb(212,201,175)' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgb(200,169,110)' }}>
                  <BankIcon />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgb(107,91,62)' }}>IN India — Bank Transfer</div>
              </div>

              <div className="flex flex-col gap-0 divide-y" style={{ borderColor: 'rgb(230,220,200)' }}>
                {[
                  ['Account Name', 'MSS Charitable Trust'],
                  ['Bank',         'State Bank of India'],
                  ['Account No',   'XXXX XXXX XXXX'],
                  ['IFSC Code',    'SBIN00XXXXX'],
                  ['UPI',          'mss.trust@sbi'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center py-2.5" style={{ borderColor: 'rgb(230,220,200)' }}>
                    <span className="text-xs" style={{ color: 'rgb(139,115,85)' }}>{label}</span>
                    <span className="text-xs font-bold text-right ml-3" style={{ color: 'rgb(52,40,24)' }}>{value}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Card 3: UPI */}
            <div className="bg-white rounded-xl p-5 flex flex-col gap-4 h-full" style={{ border: '1px solid rgb(212,201,175)' }}>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgb(107,91,62)' }}>UPI ID</div>
                <div className="text-base font-black" style={{ color: 'rgb(52,40,24)' }}>mss.trust@sbi</div>
              </div>

              {/* QR Code placeholder */}
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-xl overflow-hidden p-2" style={{ backgroundColor: 'rgb(245,240,232)', border: '1px solid rgb(212,201,175)' }}>
                  <svg viewBox="0 0 120 120" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                    {/* Corner squares */}
                    <rect x="8" y="8" width="32" height="32" rx="3" fill="none" stroke="rgb(52,40,24)" strokeWidth="4"/>
                    <rect x="14" y="14" width="20" height="20" rx="1" fill="rgb(52,40,24)"/>
                    <rect x="80" y="8" width="32" height="32" rx="3" fill="none" stroke="rgb(52,40,24)" strokeWidth="4"/>
                    <rect x="86" y="14" width="20" height="20" rx="1" fill="rgb(52,40,24)"/>
                    <rect x="8" y="80" width="32" height="32" rx="3" fill="none" stroke="rgb(52,40,24)" strokeWidth="4"/>
                    <rect x="14" y="86" width="20" height="20" rx="1" fill="rgb(52,40,24)"/>
                    {/* Data dots */}
                    {[50,56,62,68,74,80].map(x => [50,56,62,68,74,80].map(y =>
                      Math.random() > 0.45 ? <rect key={`${x}-${y}`} x={x} y={y} width="4" height="4" fill="rgb(52,40,24)"/> : null
                    ))}
                    <rect x="50" y="8" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="56" y="8" width="4" height="4" fill="rgb(200,169,110)"/>
                    <rect x="62" y="8" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="68" y="8" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="50" y="14" width="4" height="4" fill="rgb(200,169,110)"/>
                    <rect x="62" y="14" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="74" y="14" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="8" y="50" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="14" y="50" width="4" height="4" fill="rgb(200,169,110)"/>
                    <rect x="20" y="50" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="8" y="56" width="4" height="4" fill="rgb(200,169,110)"/>
                    <rect x="20" y="56" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="26" y="56" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="8" y="62" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="14" y="62" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="26" y="62" width="4" height="4" fill="rgb(200,169,110)"/>
                    <rect x="32" y="68" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="8" y="74" width="4" height="4" fill="rgb(52,40,24)"/>
                    <rect x="20" y="74" width="4" height="4" fill="rgb(200,169,110)"/>
                  </svg>
                </div>
                <div className="text-xs font-semibold" style={{ color: 'rgb(107,91,62)' }}>Scan to Pay</div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Google Pay', 'PhonePe', 'Paytm', 'BHIM'].map(app => (
                  <span key={app} className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgb(245,240,232)', color: 'rgb(107,91,62)' }}>
                    {app}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Why Donate ── */}
      <div className="bg-white py-14 sm:py-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-marigold mb-3">Make a Lasting Impact</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Donate to MSS Charitable Trust?</h2>
            <div className="w-14 h-0.5 bg-marigold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyDonate.map((w, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}
