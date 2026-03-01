import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTABanner from "@/components/home/CTABanner";
import { caseStudies } from "@/content/portfolio";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = caseStudies.find((cs) => cs.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — ${study.client}`,
    description: study.summary,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((cs) => cs.slug === params.slug);
  if (!study) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <Badge className="mb-4">{study.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl text-coral font-semibold mb-4">
              {study.client}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {study.summary}
            </p>
          </div>
        </Container>
      </section>

      {/* Metrics Bar */}
      <section className="bg-gray-50 border-b border-gray-100">
        <Container className="py-10">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-coral">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 mt-1 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Study Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            <AnimateOnScroll>
              <div>
                <h2 className="text-2xl font-extrabold text-navy-900 mb-4">
                  The Challenge
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {study.challenge}
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div>
                <h2 className="text-2xl font-extrabold text-navy-900 mb-4">
                  Our Approach
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {study.approach}
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div>
                <h2 className="text-2xl font-extrabold text-navy-900 mb-4">
                  The Results
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {study.results}
                </p>
              </div>
            </AnimateOnScroll>

            {/* Testimonial */}
            {study.testimonial && (
              <AnimateOnScroll>
                <div className="bg-navy-900 rounded-2xl p-8 md:p-12">
                  <div className="text-5xl text-coral/30 font-serif mb-4">
                    &ldquo;
                  </div>
                  <blockquote className="text-lg text-white leading-relaxed italic mb-6">
                    {study.testimonial.quote}
                  </blockquote>
                  <footer>
                    <div className="text-white font-bold">
                      {study.testimonial.author}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {study.testimonial.role}
                    </div>
                  </footer>
                </div>
              </AnimateOnScroll>
            )}
          </div>

          <div className="text-center mt-16">
            <Button href="/portfolio" variant="secondary">
              View All Projects
            </Button>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
