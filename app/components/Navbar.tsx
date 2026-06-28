'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-brand tracking-tight hover:text-brand-dark transition-colors duration-200 cursor-pointer"
        >
          Motherlode Roofing
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                  pathname === l.href
                    ? 'text-brand'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:+12098409802"
              className="bg-brand text-white text-sm font-semibold px-5 py-2 rounded hover:bg-brand-dark transition-colors duration-200 cursor-pointer"
            >
              (209) 840-9802
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-dark-lighter border-t border-dark-border transition-all duration-300 overflow-hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`block text-base font-medium transition-colors duration-200 cursor-pointer ${
                  pathname === l.href ? 'text-brand' : 'text-gray-300'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:+12098409802"
              className="inline-block bg-brand text-white font-semibold px-5 py-2.5 rounded hover:bg-brand-dark transition-colors duration-200 cursor-pointer mt-2"
            >
              Call (209) 840-9802
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
