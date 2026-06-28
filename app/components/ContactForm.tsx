'use client'

import { useState } from 'react'

type FormState = {
  name: string
  phone: string
  email: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-gray-400 max-w-sm">
          Thank you for reaching out. We&apos;ll be in touch shortly. You can also call us at{' '}
          <a href="tel:+12098409802" className="text-brand hover:underline cursor-pointer">
            (209) 840-9802
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-brand">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors duration-200"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(209) 555-0100"
            className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors duration-200"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email Address <span className="text-brand">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors duration-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your roofing needs..."
          className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-colors duration-200 cursor-pointer"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
