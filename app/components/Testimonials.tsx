'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { featuredReviews } from '../data/reviews'
import ReviewCard from './ReviewCard'
import ReviewModal from './ReviewModal'
import type { Review } from '../data/reviews'

export default function Testimonials() {
  const [selected, setSelected] = useState<Review | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  function handleOpen(review: Review) {
    triggerRef.current = document.activeElement as HTMLElement
    setSelected(review)
  }

  function handleClose() {
    setSelected(null)
    setTimeout(() => triggerRef.current?.focus(), 60)
  }

  return (
    <section className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-sans text-brand font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-3">
            What Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Trusted by Homeowners Across the Motherlode
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredReviews.map((review, i) => (
            <ReviewCard
              key={review.id}
              review={review}
              onClick={() => handleOpen(review)}
              index={i}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/reviews"
            className="font-sans inline-flex items-center gap-2 border border-dark-border hover:border-brand text-gray-300 hover:text-brand font-semibold px-7 py-3 rounded-lg transition-colors duration-200"
          >
            Read All 33 Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <ReviewModal review={selected} onClose={handleClose} />
      </div>
    </section>
  )
}
