"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutTeaser() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/team/becky-gale.png"
                  alt="Becky Gale Tsadilas, Founder of RIG Marketing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral rounded-2xl -z-10" />
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll direction="right">
            <div>
              <p className="text-coral font-semibold text-sm uppercase tracking-widest mb-4">
                Resources to Inspire Growth
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 leading-tight">
                Your Growth Partner{" "}
                <span className="text-coral">Since 2018</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                RIG Marketing & Strategy was founded by Becky Gale Tsadilas with one
                mission: give small businesses access to the same caliber of
                marketing strategy that drives big-brand success — without the
                big-agency price tag.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From startups finding their footing to established businesses
                looking to scale, we bring the resources, inspiration, and
                strategic thinking you need to grow. No cookie-cutter templates.
                No vanity metrics. Just marketing that works.
              </p>
              <Button href="/about" variant="secondary">
                Our Story
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
