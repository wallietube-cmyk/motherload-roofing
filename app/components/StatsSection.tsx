'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const steps = 55
    const interval = 1800 / steps
    const step = target / steps
    let current = 0

    const id = setInterval(() => {
      current += step
      if (current >= target) {
        setValue(target)
        clearInterval(id)
      } else {
        setValue(Math.round(current))
      }
    }, interval)

    return () => clearInterval(id)
  }, [inView, target])

  return <span ref={ref}>{value}{suffix}</span>
}

const stats = [
  { target: 500, suffix: '+', label: 'Roofs Completed' },
  { target: 15, suffix: '+', label: 'Years Experience' },
  { target: 100, suffix: '%', label: 'Satisfaction Rate' },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={`text-center py-8 sm:py-0 ${i > 0 ? 'sm:border-l border-dark-border' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
