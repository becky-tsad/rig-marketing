"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const testimonials = [
  {
    quote:
      "RIG completely transformed our brand and online presence. Within 3 months, our leads tripled and our brand recognition went through the roof.",
    author: "Sarah Chen",
    role: "Founder, Bloom Botanicals",
    image: "/images/testimonials/sarah-chen.svg",
  },
  {
    quote:
      "The 90-Day Fast Track program was exactly what our startup needed. Professional, strategic, and results-driven from day one.",
    author: "Marcus Johnson",
    role: "CEO, TechStart Solutions",
    image: "/images/testimonials/marcus-johnson.svg",
  },
  {
    quote:
      "Our tables are full and our phone doesn't stop ringing. RIG's social media strategy turned our restaurant into the talk of the town.",
    author: "Chef Maria Santos",
    role: "Owner, Urban Eats Bistro",
    image: "/images/testimonials/maria-santos.svg",
  },
  {
    quote:
      "We went from being invisible online to showing up at the top of Google. The quality of leads from organic search has been outstanding.",
    author: "David Park",
    role: "Managing Partner, Greenfield Financial",
    image: "/images/testimonials/david-park.svg",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from the businesses we've helped grow."
          />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12">
              {/* Quote mark */}
              <div className="text-6xl text-coral/20 font-serif absolute top-4 left-6">
                &ldquo;
              </div>

              <blockquote className="relative z-10">
                <p className="text-lg md:text-xl text-navy-900 leading-relaxed mb-6 italic">
                  {testimonials[current].quote}
                </p>
                <footer className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={testimonials[current].image} alt={testimonials[current].author} className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-bold text-navy-900">
                      {testimonials[current].author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[current].role}
                    </div>
                  </div>
                </footer>
              </blockquote>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        i === current ? "bg-coral" : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeftIcon className="w-5 h-5 text-navy-900" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-navy-900" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
