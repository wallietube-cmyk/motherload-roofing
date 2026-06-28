'use client'

import { motion } from 'framer-motion'
import type { Review } from '../data/reviews'

interface Props {
  review: Review
  onClick: () => void
  index?: number
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewCard({ review, onClick, index = 0 }: Props) {
  return (
    <motion.button
      type="button"
      className="w-full text-left bg-dark rounded-2xl p-6 border border-dark-border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -4, borderColor: 'rgba(249,115,22,0.4)', transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <div className="mb-3">
        <Stars />
      </div>

      {review.text && (
        <p className="font-sans text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
          &ldquo;{review.text}&rdquo;
        </p>
      )}

      <div className="flex items-center justify-between gap-3 mt-auto pt-1">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-brand/15 border border-brand/25 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="font-sans text-white font-semibold text-sm leading-tight">{review.name}</p>
            {review.location && (
              <p className="font-sans text-gray-500 text-xs">{review.location}</p>
            )}
          </div>
        </div>

        {review.photos && review.photos.length > 0 && (
          <div className="flex items-center gap-1 text-brand/60 flex-shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-sans text-xs font-medium">{review.photos.length}</span>
          </div>
        )}
      </div>
    </motion.button>
  )
}
