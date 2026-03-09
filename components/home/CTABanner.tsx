"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function CTABanner() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/5 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to Stop Guessing and{" "}
              <span className="text-coral">Start Growing?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Book a free strategy call with Becky and discover what&apos;s standing
              between your business and its next level of growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Book Your Free Strategy Call
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
