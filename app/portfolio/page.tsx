"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTABanner from "@/components/home/CTABanner";
import { caseStudies } from "@/content/portfolio";

const categories = [
  "All",
  ...Array.from(new Set(caseStudies.map((cs) => cs.category))),
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-coral font-semibold text-sm uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Results That Speak for Themselves
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Explore our portfolio of projects and see the real impact
              we&apos;ve made for businesses like yours.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter & Grid */}
      <section className="py-20 bg-white">
        <Container>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-navy-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((study, i) => (
              <AnimateOnScroll key={study.slug} delay={i * 0.1}>
                <Card
                  href={`/portfolio/${study.slug}`}
                  className="overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={study.image} alt={study.client} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge>{study.category}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-1">
                      {study.title}
                    </h3>
                    <p className="text-sm text-coral font-medium mb-3">
                      {study.client}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.summary}
                    </p>
                    <div className="flex gap-6 mt-4 pt-4 border-t border-gray-100">
                      {study.metrics.slice(0, 3).map((m) => (
                        <div key={m.label}>
                          <div className="text-lg font-extrabold text-navy-900">
                            {m.value}
                          </div>
                          <div className="text-xs text-gray-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
