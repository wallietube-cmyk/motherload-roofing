import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-xl font-bold text-brand mb-3">Motherlode Roofing</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving Angels Camp and the surrounding Motherlode region with honest, professional roofing services.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</p>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 text-sm hover:text-brand transition-colors duration-200 cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+12098409802" className="text-gray-400 text-sm hover:text-brand transition-colors duration-200 cursor-pointer">
                  (209) 840-9802
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:motherloderoofing@gmail.com" className="text-gray-400 text-sm hover:text-brand transition-colors duration-200 cursor-pointer break-all">
                  motherloderoofing@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm">Angels Camp, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-dark-border text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Motherlode Roofing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
