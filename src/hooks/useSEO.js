import { useEffect } from 'react'

const BASE_URL = 'https://msscharitabletrust.org'

// Per-page SEO data
const SEO = {
  home: {
    path: '/',
    title: 'MSS Charitable Trust — Serving Humanity, Guntur India',
    desc: 'Registered non-profit in Guntur, India — orphan care, widow support, free health camps and education support across Andhra Pradesh and Telangana.',
    ogDesc: 'We provide orphan care, widow support, free health camps and education support in Telangana and Andhra Pradesh. Every contribution makes a real difference.',
    breadcrumb: null,
    schemaType: null,
  },
  about: {
    path: '/about',
    title: 'About Us | MSS Charitable Trust',
    desc: 'Learn about MSS Charitable Trust — our founding story, mission, values and the communities we serve in Andhra Pradesh and Telangana.',
    ogDesc: 'MSS Charitable Trust was founded with one purpose: to serve the most vulnerable — orphans, widows and families in need across Andhra Pradesh.',
    breadcrumb: [{ name: 'About Us', item: '/about' }],
    schemaType: 'AboutPage',
  },
  'our-work': {
    path: '/our-work',
    title: 'Our Programs & Initiatives | MSS Charitable Trust',
    desc: 'Orphan care, widow support, free health camps and education support programmes by MSS Charitable Trust across Andhra Pradesh and Telangana.',
    ogDesc: 'From community meals to free health camps — see how MSS Charitable Trust is changing lives across Andhra Pradesh and Telangana.',
    breadcrumb: [{ name: 'Our Work', item: '/our-work' }],
    schemaType: 'WebPage',
  },
  gallery: {
    path: '/gallery',
    title: 'Photo Gallery | MSS Charitable Trust',
    desc: 'Real moments from our ground-level work — community meals, outreach and education support across Andhra Pradesh and Telangana.',
    ogDesc: 'Photos from MSS Charitable Trust community programmes — feeding families, reaching homes, changing lives across Andhra Pradesh.',
    breadcrumb: [{ name: 'Photo Gallery', item: '/gallery' }],
    schemaType: 'ImageGallery',
  },
  'get-involved': {
    path: '/get-involved',
    title: 'Donate & Volunteer | MSS Charitable Trust',
    desc: 'Support MSS Charitable Trust — donate online, volunteer your time or partner with us to help orphans, widows and communities in need across Andhra Pradesh.',
    ogDesc: 'Your support changes lives. Donate to MSS Charitable Trust or volunteer your skills to help orphans, widows and communities across Andhra Pradesh.',
    breadcrumb: [{ name: 'Get Involved', item: '/get-involved' }],
    schemaType: 'WebPage',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us | MSS Charitable Trust',
    desc: 'Reach MSS Charitable Trust in Guntur, Andhra Pradesh — by phone, email or our contact form. We typically respond within 24 hours.',
    ogDesc: 'Contact MSS Charitable Trust — Guntur, Andhra Pradesh. Call +91 94902 84208, email us or send a message through our contact form.',
    breadcrumb: [{ name: 'Contact Us', item: '/contact' }],
    schemaType: 'ContactPage',
  },
  'privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy | MSS Charitable Trust',
    desc: 'How MSS Charitable Trust collects, uses and protects your personal data in line with applicable Indian data protection guidelines.',
    ogDesc: 'Privacy policy for the MSS Charitable Trust website.',
    breadcrumb: [{ name: 'Privacy Policy', item: '/privacy-policy' }],
    schemaType: 'WebPage',
  },
  'terms-of-use': {
    path: '/terms-of-use',
    title: 'Terms of Use | MSS Charitable Trust',
    desc: 'Terms and conditions governing use of the MSS Charitable Trust website and donation services.',
    ogDesc: 'Terms of use for the MSS Charitable Trust website.',
    breadcrumb: [{ name: 'Terms of Use', item: '/terms-of-use' }],
    schemaType: 'WebPage',
  },
}

// ── DOM helpers ───────────────────────────────────────────────────────────────

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOGProp(prop, content) {
  let el = document.querySelector(`meta[property="${prop}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', prop)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function removeJsonLd(id) {
  const el = document.getElementById(id)
  if (el) el.remove()
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useSEO(pageKey) {
  useEffect(() => {
    const s    = SEO[pageKey] || {}
    const title  = s.title || 'MSS Charitable Trust'
    const desc   = s.desc  || ''
    const ogDesc = s.ogDesc || desc
    const url    = BASE_URL + (s.path || '/')

    // Core meta
    document.title = title
    setMeta('description', desc)
    setCanonical(url)

    // Open Graph
    setOGProp('og:title', title)
    setOGProp('og:description', ogDesc)
    setOGProp('og:url', url)

    // Twitter / X Card
    setMeta('twitter:title', title)
    setMeta('twitter:description', desc)

    // ── BreadcrumbList JSON-LD ────────────────────────────────────────────
    if (s.breadcrumb && s.breadcrumb.length > 0) {
      setJsonLd('seo-breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': BASE_URL + '/',
          },
          ...s.breadcrumb.map((crumb, i) => ({
            '@type': 'ListItem',
            'position': i + 2,
            'name': crumb.name,
            'item': BASE_URL + crumb.item,
          })),
        ],
      })
    } else {
      removeJsonLd('seo-breadcrumb')
    }

    // ── WebPage JSON-LD ───────────────────────────────────────────────────
    if (s.schemaType) {
      setJsonLd('seo-webpage', {
        '@context': 'https://schema.org',
        '@type': s.schemaType,
        '@id': url + '#webpage',
        'url': url,
        'name': title,
        'description': desc,
        'isPartOf': {
          '@type': 'WebSite',
          '@id': BASE_URL + '/#website',
          'url': BASE_URL,
          'name': 'MSS Charitable Trust',
        },
        'publisher': {
          '@type': 'NGO',
          'name': 'MSS Charitable Trust',
          'url': BASE_URL,
        },
        'inLanguage': 'en-IN',
      })
    } else {
      removeJsonLd('seo-webpage')
    }
  }, [pageKey])
}
