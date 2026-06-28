import Image from 'next/image'
import Link from 'next/link'
import Hero from './components/Hero'
import AnimatedSection from './components/AnimatedSection'
import DiagonalDivider from './components/DiagonalDivider'
import ServicesGrid from './components/ServicesGrid'
import StatsSection from './components/StatsSection'
import WhyChooseUs from './components/WhyChooseUs'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import Testimonials from './components/Testimonials'

const trustBadges = ['Licensed & Insured', 'Local Experts', 'Free Estimates', 'Quality Guaranteed']
const galleryPreview = ['/images/roof2.jpg', '/images/roof3.jpg', '/images/roof4.jpg', '/images/roof10.jpg']

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero Carousel ── */}
      <Hero />

      {/* dark → orange */}
      <DiagonalDivider from="#1a1a1a" to="#f97316" />

      {/* ── 2. Trust Badges ── */}
      <div className="bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
            {trustBadges.map((b) => (
              <div key={b} className="flex items-center gap-2 text-white font-sans font-semibold text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* orange → dark */}
      <DiagonalDivider from="#f97316" to="#1a1a1a" flip />

      {/* ── 3. Stats ── */}
      <StatsSection />

      {/* ── 4. About ── */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <p className="font-sans text-brand font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-3">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Trusted Roofing in the Motherlode Region
              </h2>
              <p className="font-sans text-gray-400 text-lg leading-relaxed mb-6">
                We&apos;re a local roofing company based in Angels Camp, CA, serving homeowners and businesses throughout the Motherlode region. Our team brings years of hands-on experience and a commitment to getting every job done right.
              </p>
              <p className="font-sans text-gray-400 text-lg leading-relaxed mb-8">
                From routine inspections to full replacements, we treat every roof like it&apos;s our own — with honesty, quality materials, and workmanship you can count on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+12098409802"
                  className="font-sans bg-brand hover:bg-brand-dark text-white font-bold px-7 py-3 rounded transition-colors duration-200 cursor-pointer text-center"
                >
                  (209) 840-9802
                </a>
                <Link
                  href="/contact"
                  className="font-sans border border-dark-border hover:border-brand text-gray-300 hover:text-brand font-semibold px-7 py-3 rounded transition-colors duration-200 cursor-pointer text-center"
                >
                  Get a Free Estimate
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="relative h-80 lg:h-[480px] rounded-xl overflow-hidden">
              <Image
                src="/images/roof6.jpg"
                alt="Roofing work by Motherlode Roofing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* dark → dark-lighter */}
      <DiagonalDivider from="#1a1a1a" to="#2d2d2d" />

      {/* ── 5. Why Choose Us ── */}
      <WhyChooseUs />

      {/* ── 6. Services ── (same bg-dark-lighter, no divider) */}
      <section className="pb-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="font-sans text-brand font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
          </AnimatedSection>
          <ServicesGrid />
        </div>
      </section>

      {/* dark-lighter → dark */}
      <DiagonalDivider from="#2d2d2d" to="#1a1a1a" flip />

      {/* ── 7. Before / After Slider ── */}
      <section className="pt-4 pb-20 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <p className="font-sans text-brand font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-3">
              The Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">See the Transformation</h2>
            <p className="font-sans text-gray-400">Drag the slider to compare before and after.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <BeforeAfterSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* ── 8. Gallery Preview ── (same bg-dark) */}
      <section className="pb-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="font-sans text-brand font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-3">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Recent Projects</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreview.map((src, i) => (
              <AnimatedSection key={src} delay={i * 0.08} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Roofing project ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/gallery"
              className="font-sans inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded transition-colors duration-200 cursor-pointer"
            >
              View Full Gallery
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* dark → dark-lighter */}
      <DiagonalDivider from="#1a1a1a" to="#2d2d2d" />

      {/* ── 9. Testimonials ── */}
      <Testimonials />

      {/* dark-lighter → dark (for gradient CTA) */}
      <DiagonalDivider from="#2d2d2d" to="#1a1a1a" flip />

      {/* ── 10. Gradient CTA Banner ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 45%, #f97316 100%)' }}
      >
        {/* Decorative radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-white/70 font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4">
            Get Started Today
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 italic">
            Your Roof Deserves the Best.
          </h2>
          <p className="font-sans text-white/80 text-lg max-w-xl mx-auto mb-11 leading-relaxed">
            Free estimates, honest pricing, and quality workmanship — from a team that treats your home like their own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12098409802"
              className="font-sans bg-white text-orange-700 font-bold text-lg px-9 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer shadow-xl"
            >
              Call (209) 840-9802
            </a>
            <Link
              href="/contact"
              className="font-sans border-2 border-white/60 hover:border-white text-white font-bold text-lg px-9 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              Send a Message
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
