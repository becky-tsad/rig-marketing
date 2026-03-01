"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function FastTrackTeaser() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-coral/10 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
              <div>
                <Badge className="mb-4">Signature Program</Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Launching a Business?{" "}
                  <span className="text-coral">Skip the Guesswork.</span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our 90-Day Fast Track takes startups from zero to market-ready
                  with a complete brand, website, and first marketing campaign —
                  all in one focused engagement.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["Brand Identity", "Custom Website", "Launch Campaign", "Growth Roadmap"].map(
                    (item) => (
                      <span
                        key={item}
                        className="flex items-center gap-1.5 text-sm text-gray-300"
                      >
                        <span className="text-coral">&#10003;</span>
                        {item}
                      </span>
                    )
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href="/fast-track">
                    Learn About the Fast Track
                  </Button>
                  <Button href="/portfolio/techstart-launch" variant="outline">
                    See a Success Story
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-navy-800 rounded-2xl p-8 text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                    Starting from
                  </p>
                  <p className="text-4xl font-extrabold text-white mb-1">
                    $5,000
                  </p>
                  <p className="text-xs text-gray-400 mb-4">CAD</p>
                  <p className="text-xs text-gray-500">
                    Brand + Website + Launch
                    <br />
                    All in 90 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
