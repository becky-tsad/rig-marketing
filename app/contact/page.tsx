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



            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
