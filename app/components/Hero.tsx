'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Deterministic particles — no Math.random to avoid SSR hydration mismatch
const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: ((i * 37 + 13) % 93) + 2,
  top: ((i * 53 + 7) % 85) + 5,
  size: (i % 3) * 0.7 + 1.2,
  durY: 10 + (i % 6) * 3,
  durX: 7 + (i % 5) * 2.5,
  delY: -((i * 1.5) % 9),
  delX: -((i * 1.2) % 7),
  opacity: 0.06 + (i % 5) * 0.03,
}))

const SLIDES = [
  '/images/roof1.jpg',
  '/images/roof5.jpg',
  '/images/roof7.jpg',
  '/images/roof8.jpg',
  '/images/roof9.jpg',
]

const SLIDE_MS = 5500
const WORDS_LINE1 = ['Your', 'Roof.']
const WORDS_LINE2 = ['Our', 'Priority.']

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % SLIDES.length),
      SLIDE_MS
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* ── Carousel + Ken Burns ── */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          >
            {/* Ken Burns: slow zoom applied to the image wrapper */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.0 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 7, ease: 'linear' }}
            >
              <Image
                src={SLIDES[current]}
                alt="Motherlode Roofing project"
                fill
                className="object-cover"
                priority={current === 0}
                quality={85}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/55 to-dark/95" />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{ y: [-6, 6, -6], x: [-3, 3, -3] }}
            transition={{
              y: { duration: p.durY, repeat: Infinity, ease: 'easeInOut', delay: p.delY },
              x: { duration: p.durX, repeat: Infinity, ease: 'easeInOut', delay: p.delX },
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.p
          className="text-brand font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Angels Camp, CA
        </motion.p>

        {/* Word-by-word reveal */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-7">
          <span className="block overflow-hidden pb-2">
            {WORDS_LINE1.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.22em]"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.14, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden pb-2">
            {WORDS_LINE2.map((word, i) => (
              <motion.span
                key={word}
                className={`inline-block mr-[0.22em] ${word === 'Priority.' ? 'text-brand italic' : ''}`}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25 + (WORDS_LINE1.length + i) * 0.14,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          className="font-sans text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-11 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Expert roof inspections, repairs, and replacements — with honest pricing and workmanship you can count on.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
        >
          <a
            href="tel:+12098409802"
            className="font-sans bg-brand hover:bg-brand-dark text-white font-bold text-lg px-9 py-4 rounded transition-colors duration-200 cursor-pointer shadow-xl shadow-brand/25"
          >
            Call Us Today
          </a>
          <Link
            href="/services"
            className="font-sans border-2 border-white/40 hover:border-white text-white font-semibold text-lg px-9 py-4 rounded transition-colors duration-200 cursor-pointer"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      {/* ── Slide dots ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 cursor-pointer ${
              i === current
                ? 'w-7 h-2 bg-brand'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </motion.div>
    </section>
  )
}
