import type { Metadata } from 'next'
import AnimatedSection from '../components/AnimatedSection'
import ReviewsGrid from '../components/ReviewsGrid'

export const metadata: Metadata = {
  title: 'Customer Reviews | Motherlode Roofing',
  description:
    '33 five-star reviews from satisfied homeowners across the Motherlode region. See why customers trust Motherlode Roofing.',
}

const STAR_PATH =
  'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'

export default function ReviewsPage() {
  return (
    <div className="pt-24 pb-20 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="font-sans text-brand font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-3">
            Customer Reviews
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            What Our Customers Say
          </h1>
          <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            33 five-star reviews from homeowners across the Motherlode region.
          </p>

          {/* Rating badge */}
          <div className="inline-flex items-center gap-2.5 bg-dark-lighter border border-dark-border rounded-full px-5 py-2.5">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path d={STAR_PATH} />
                </svg>
              ))}
            </div>
            <span className="font-sans text-white font-bold text-sm">5.0</span>
            <span className="font-sans text-gray-600 text-sm">·</span>
            <span className="font-sans text-gray-400 text-sm">33 reviews</span>
          </div>
        </AnimatedSection>

        <ReviewsGrid />
      </div>
    </div>
  )
}
