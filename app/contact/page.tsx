import AnimatedSection from '../components/AnimatedSection'
import ContactForm from '../components/ContactForm'

const contactInfo = [
  {
    label: 'Phone',
    value: '(209) 840-9802',
    href: 'tel:+12098409802',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'motherloderoofing@gmail.com',
    href: 'mailto:motherloderoofing@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Angels Camp, CA',
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-lighter">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">Reach Out</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to get started? Give us a call or send a message below. We offer free estimates and respond quickly.
          </p>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">{c.label}</p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-white text-lg font-medium hover:text-brand transition-colors duration-200 cursor-pointer break-all"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-white text-lg font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call CTA */}
              <div className="bg-dark-lighter border border-dark-border rounded-xl p-6">
                <p className="text-white font-bold text-lg mb-2">Prefer to Call?</p>
                <p className="text-gray-400 text-sm mb-5">
                  We&apos;re available to take your call and answer any questions about your roofing needs.
                </p>
                <a
                  href="tel:+12098409802"
                  className="flex items-center gap-3 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer w-fit"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (209) 840-9802
                </a>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.15}>
              <div className="bg-dark-lighter border border-dark-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
