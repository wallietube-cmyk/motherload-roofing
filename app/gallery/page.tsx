import Image from 'next/image'
import AnimatedSection from '../components/AnimatedSection'

const images = [
  { src: '/images/roof1.jpg', alt: 'Roofing project 1' },
  { src: '/images/roof2.jpg', alt: 'Roofing project 2' },
  { src: '/images/roof3.jpg', alt: 'Roofing project 3' },
  { src: '/images/roof4.jpg', alt: 'Roofing project 4' },
  { src: '/images/roof5.jpg', alt: 'Roofing project 5' },
  { src: '/images/roof6.jpg', alt: 'Roofing project 6' },
  { src: '/images/roof7.jpg', alt: 'Roofing project 7' },
  { src: '/images/roof8.jpg', alt: 'Roofing project 8' },
  { src: '/images/roof9.jpg', alt: 'Roofing project 9' },
  { src: '/images/roof10.jpg', alt: 'Roofing project 10' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-lighter">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">Our Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Project Gallery</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Browse our recent roofing work across Angels Camp and the surrounding Motherlode region. Every project is completed with the same level of care and craftsmanship.
          </p>
        </AnimatedSection>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.map((img, i) => (
              <AnimatedSection
                key={img.src}
                delay={(i % 3) * 0.08}
                className="relative overflow-hidden rounded-xl group"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-lighter border-t border-dark-border">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Like What You See?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Call us today or send a message to get a free estimate on your roofing project.
          </p>
          <a
            href="tel:+12098409802"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-bold text-lg px-8 py-4 rounded transition-colors duration-200 cursor-pointer"
          >
            Call (209) 840-9802
          </a>
        </AnimatedSection>
      </section>
    </>
  )
}
