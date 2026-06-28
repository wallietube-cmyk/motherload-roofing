'use client'

import { useState, useRef } from 'react'
import { reviews } from '../data/reviews'
import ReviewCard from './ReviewCard'
import ReviewModal from './ReviewModal'
import type { Review } from '../data/reviews'

export default function ReviewsGrid() {
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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review, i) => (
          <ReviewCard
            key={review.id}
            review={review}
            onClick={() => handleOpen(review)}
            index={i}
          />
        ))}
      </div>
      <ReviewModal review={selected} onClose={handleClose} />
    </>
  )
}
