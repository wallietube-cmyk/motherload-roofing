'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Roof Inspections',
    description: 'Thorough inspections to catch issues early and keep your roof in peak condition before problems become costly repairs.',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, damaged shingles, flashing, and more — done right the first time.',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Roof Replacement',
    description: 'Complete roof replacements using quality materials and expert installation for lasting protection.',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

function ServiceCard({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) {
  return (
    <motion.div
      className="bg-dark rounded-xl p-8 border border-dark-border cursor-pointer group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{
        y: -10,
        boxShadow: '0 24px 48px -12px rgba(249, 115, 22, 0.22)',
        borderColor: 'rgba(249, 115, 22, 0.45)',
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      {/* Icon with spring bounce on scroll-in + nudge on hover */}
      <motion.div
        className="text-brand mb-6 w-fit"
        initial={{ scale: 0, rotate: -20, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 220, damping: 14, delay: index * 0.12 + 0.18 }}
        whileHover={{ rotate: 12, scale: 1.2, transition: { duration: 0.2 } }}
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function ServicesGrid() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          href="/services"
          className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3 rounded transition-all duration-200 cursor-pointer"
        >
          View All Services
        </Link>
      </motion.div>
    </>
  )
}
