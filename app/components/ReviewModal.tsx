'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { Review } from '../data/reviews'

interface Props {
  review: Review | null
  onClose: () => void
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewModal({ review, onClose }: Props) {
  const isOpen = review !== null
  const modalRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const reducedMotion = useReducedMotion()
  const nameId = `review-dialog-name-${review?.id ?? 0}`

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  // Focus close button when modal opens (keyed to review id so it re-fires on change)
  useEffect(() => {
    if (!isOpen) return
    const id = setTimeout(() => closeBtnRef.current?.focus(), 60)
    return () => clearTimeout(id)
  }, [isOpen, review?.id])

  // Escape key + Tab focus trap
  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return
      const modal = modalRef.current
      if (!modal) return
      const focusable = Array.from(
        modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('disabled'))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus() }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const fadeOnly = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
  const panelAnim = reducedMotion
    ? fadeOnly
    : { hidden: { opacity: 0, scale: 0.95, y: 10 }, visible: { opacity: 1, scale: 1, y: 0 } }

  return (
    <AnimatePresence>
      {isOpen && review && (
        <>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            variants={fadeOnly}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Centering shell — pointer-events-none so backdrop click works */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              ref={modalRef}
              key={`modal-panel-${review.id}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={nameId}
              className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-dark-lighter rounded-2xl border border-dark-border shadow-2xl pointer-events-auto"
              variants={panelAnim}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {/* Close button */}
              <button
                ref={closeBtnRef}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-dark/70 text-gray-400 hover:text-white hover:bg-dark transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label="Close review"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-7">
                {/* Header */}
                <div className="mb-5 pr-8">
                  <Stars />
                  <h2 id={nameId} className="mt-3 text-xl font-bold text-white font-sans">
                    {review.name}
                  </h2>
                  {review.location && (
                    <p className="font-sans text-gray-400 text-sm mt-0.5">{review.location}</p>
                  )}
                </div>

                {/* Full review text */}
                {review.text && (
                  <p className="font-sans text-gray-300 leading-relaxed text-base">
                    &ldquo;{review.text}&rdquo;
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
