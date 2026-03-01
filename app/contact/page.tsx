import type { Metadata } from "next";
import { EnvelopeIcon, MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free strategy call with Becky at RIG Marketing. Let's discuss how we can help your business grow.",
};

const testimonialSnippets = [
  {
    quote: "RIG completely transformed our brand. Our leads tripled in 3 months.",
    author: "Sarah Chen",
    role: "Founder, Bloom Botanicals",
    image: "/images/testimonials/sarah-chen.svg",
  },
  {
    quote: "The 90-Day Fast Track took us from zero to 50 paying customers.",
    author: "Marcus Johnson",
    role: "CEO, TechStart Solutions",
    image: "/images/testimonials/marcus-johnson.svg",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-coral font-semibold text-sm uppercase tracking-widest mb-4">
              Let&apos;s Talk Growth
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Your Free Strategy Call{" "}
              <span className="text-coral">Starts Here</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us a bit about your business and what you&apos;re looking to
              achieve. Becky will personally get back to you within 24 hours to
              schedule your free strategy call.
            </p>
          </div>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="bg-gray-50 border-b border-gray-100">
        <Container className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { step: "1", title: "Send your message", description: "Fill out the form below" },
              { step: "2", title: "We respond in 24h", description: "Becky reviews every inquiry" },
              { step: "3", title: "Free strategy call", description: "30-min call, zero pressure" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3 justify-center md:flex-col md:gap-2">
                <div className="w-8 h-8 rounded-full bg-coral text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div className="md:text-center">
                  <p className="font-semibold text-navy-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-navy-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                No commitment required — just tell us where you are and where you want to go.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 text-sm">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-gray-600 hover:text-coral transition-colors text-sm"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 text-sm">Location</h3>
                    <p className="text-gray-600 text-sm">{siteConfig.location}</p>
                    <p className="text-gray-500 text-xs mt-1">Proudly serving clients across Canada &amp; the U.S.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <CalendarIcon className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 text-sm">Response Time</h3>
                    <p className="text-gray-600 text-sm">Within 24 hours, Mon - Fri</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-navy-900 text-sm mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-coral hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-coral hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-coral hover:text-white transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-navy-900 text-sm mb-4">
                  What Clients Say
                </h3>
                <div className="space-y-4">
                  {testimonialSnippets.map((t) => (
                    <div key={t.author} className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-700 italic mb-3">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.image} alt={t.author} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="text-xs font-semibold text-navy-900">
                            {t.author}
                          </p>
                          <p className="text-xs text-gray-500">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
