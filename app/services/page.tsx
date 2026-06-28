import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  {
    title: 'Roof Inspections',
    description:
      'A professional roof inspection is the best way to know the true condition of your roof. Our inspectors check every layer — from shingles and flashing to gutters, vents, and underlayment — and provide a clear, honest assessment.',
    details: [
      'Pre-purchase inspections for home buyers',
      'Annual maintenance inspections',
      'Post-storm damage assessments',
      'Insurance claim support',
      'Written inspection reports',
    ],
    image: '/images/roof7.jpg',
    imageAlt: 'Roof inspection in progress',
  },
  {
    title: 'Roof Repair',
    description:
      'When your roof has a problem, you need it fixed fast and done right. We handle all types of roof repairs — from minor leak patches to major structural repairs — using quality materials that last.',
    details: [
      'Leak detection and repair',
      'Damaged or missing shingle replacement',
      'Flashing repair and replacement',
      'Gutter repair and sealing',
      'Emergency storm damage repair',
    ],
    image: '/images/roof8.jpg',
    imageAlt: 'Roof repair work',
  },
  {
    title: 'Roof Replacement',
    description:
      'When repairs are no longer enough, a full roof replacement is the smart investment. We handle the entire process — from material selection to final cleanup — with minimal disruption to your home or business.',
    details: [
      'Complete tear-off and disposal',
      'Asphalt shingle, metal, and tile options',
      'Proper ventilation and insulation assessment',
      'Quality underlayment and ice barrier installation',
      'Clean job site, every time',
    ],
    image: '/images/roof9.jpg',
    imageAlt: 'Roof replacement project',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-dark-lighter overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/roof10.jpg"
            alt="Roofing services background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From a quick inspection to a complete replacement, Motherlode Roofing has you covered with honest service and quality work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((s, i) => (
            <AnimatedSection key={s.title}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className={i % 2 === 1 ? '[direction:ltr]' : ''}>
                  <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
                    0{i + 1}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">{s.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">{s.description}</p>
                  <ul className="space-y-3 mb-10">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-gray-300">
                        <svg className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+12098409802"
                    className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-7 py-3 rounded transition-colors duration-200 cursor-pointer"
                  >
                    Call for a Free Estimate
                  </a>
                </div>

                <div className={`relative h-72 sm:h-96 rounded-xl overflow-hidden ${i % 2 === 1 ? '[direction:ltr]' : ''}`}>
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-lighter border-t border-dark-border">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Give us a call or send a message. We&apos;ll help you figure out the best solution for your roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12098409802"
              className="bg-brand hover:bg-brand-dark text-white font-bold text-lg px-8 py-4 rounded transition-colors duration-200 cursor-pointer"
            >
              Call (209) 840-9802
            </a>
            <Link
              href="/contact"
              className="border-2 border-dark-border hover:border-brand text-gray-300 hover:text-brand font-semibold text-lg px-8 py-4 rounded transition-colors duration-200 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
