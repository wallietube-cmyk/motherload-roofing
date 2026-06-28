'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(48)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] max-h-[520px] overflow-hidden rounded-2xl cursor-ew-resize select-none shadow-2xl"
      onMouseDown={(e) => { setDragging(true); updatePosition(e.clientX) }}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseMove={(e) => dragging && updatePosition(e.clientX)}
      onTouchStart={(e) => { setDragging(true); updatePosition(e.touches[0].clientX) }}
      onTouchEnd={() => setDragging(false)}
      onTouchMove={(e) => { e.preventDefault(); updatePosition(e.touches[0].clientX) }}
    >
      {/* Before image — full size underneath */}
      <div className="absolute inset-0">
        <Image
          src="/images/roof4.jpg"
          alt="Before: roof in need of repair"
          fill
          className="object-cover"
          quality={85}
        />
        <span className="absolute top-4 left-4 font-sans text-xs font-bold uppercase tracking-[0.18em] text-white bg-dark/70 px-3 py-1.5 rounded-full backdrop-blur-sm">
          Before
        </span>
      </div>

      {/* After image — clipped from position% to 100% */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <Image
          src="/images/roof6.jpg"
          alt="After: completed roof replacement"
          fill
          className="object-cover"
          quality={85}
        />
        <span className="absolute top-4 right-4 font-sans text-xs font-bold uppercase tracking-[0.18em] text-white bg-brand/90 px-3 py-1.5 rounded-full backdrop-blur-sm">
          After
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/80 shadow-[0_0_12px_2px_rgba(255,255,255,0.3)]"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-gray-200">
          <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
