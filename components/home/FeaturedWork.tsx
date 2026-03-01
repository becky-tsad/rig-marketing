"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { caseStudies } from "@/content/portfolio";

export default function FeaturedWork() {
  const featured = caseStudies[0];

  return (
    <section className="py-20 bg-navy-900">
      <Container>
        <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-navy-800 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.image} alt={featured.client} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div>
              <Badge className="mb-4">{featured.category}</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="text-lg text-white font-semibold mb-2">
                {featured.client}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {featured.summary}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {featured.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-2xl font-extrabold text-coral">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button href={`/portfolio/${featured.slug}`}>
                View Case Study
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
