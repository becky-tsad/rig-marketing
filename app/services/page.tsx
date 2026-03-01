import type { Metadata } from "next";
import {
  ChartBarIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  SwatchIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTABanner from "@/components/home/CTABanner";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore RIG Marketing's full range of services — from strategy and branding to web design, social media, SEO, and our signature 90-Day Fast Track startup program. Transparent pricing included.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ChartBarIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  SwatchIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-coral font-semibold text-sm uppercase tracking-widest mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Everything You Need to{" "}
              <span className="text-coral">Grow Your Business</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              From strategy to execution, we offer comprehensive marketing
              solutions tailored to your unique goals and budget. Every project
              is scoped individually — the ranges below give you a realistic starting point.
            </p>
            <p className="text-gray-400 text-sm">
              All prices in CAD. Custom quotes provided after a free discovery call.
            </p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-24">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              const isEven = i % 2 === 0;
              const isHighlight = service.slug === "startup-program";

              return (
                <AnimateOnScroll key={service.slug}>
                  <div
                    id={service.slug}
                    className={`scroll-mt-24 rounded-3xl ${
                      isHighlight
                        ? "bg-navy-900 p-8 md:p-12"
                        : ""
                    }`}
                  >
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
                    >
                      {/* Icon/Visual Card */}
                      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                        <div
                          className={`rounded-2xl p-12 flex flex-col items-center justify-center text-center ${
                            isHighlight
                              ? "bg-navy-800"
                              : "bg-gray-50"
                          }`}
                        >
                          {Icon && (
                            <Icon
                              className={`w-20 h-20 mb-6 ${
                                isHighlight ? "text-coral" : "text-coral opacity-80"
                              }`}
                            />
                          )}
                          {/* Pricing block */}
                          <div className="mt-2">
                            <p
                              className={`text-xs uppercase tracking-wider font-semibold mb-1 ${
                                isHighlight ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              Starting from
                            </p>
                            <p
                              className={`text-3xl font-extrabold ${
                                isHighlight ? "text-white" : "text-navy-900"
                              }`}
                            >
                              {service.pricing.startingAt}
                            </p>
                            {service.pricing.note && (
                              <p
                                className={`text-xs mt-2 ${
                                  isHighlight ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                {service.pricing.note}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                        {isHighlight && (
                          <Badge className="mb-4">Most Popular</Badge>
                        )}
                        <h2
                          className={`text-2xl md:text-3xl font-extrabold mb-2 ${
                            isHighlight ? "text-white" : "text-navy-900"
                          }`}
                        >
                          {service.headline}
                        </h2>
                        <p
                          className={`text-sm font-medium mb-4 ${
                            isHighlight ? "text-coral" : "text-coral"
                          }`}
                        >
                          {service.title}
                        </p>
                        <p
                          className={`mb-6 leading-relaxed ${
                            isHighlight ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {service.description}
                        </p>

                        <h3
                          className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                            isHighlight ? "text-gray-400" : "text-navy-900"
                          }`}
                        >
                          What You Get
                        </h3>
                        <ul className="space-y-2 mb-8">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className={`flex items-start gap-2 text-sm ${
                                isHighlight ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              <span className="text-coral mt-0.5">&#10003;</span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        {service.slug === "startup-program" ? (
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button href="/fast-track">
                              Learn More About the Fast Track
                            </Button>
                            <Button href="/contact" variant="outline">
                              Apply Now
                            </Button>
                          </div>
                        ) : (
                          <Button
                            href="/contact"
                            variant={isHighlight ? "primary" : "secondary"}
                          >
                            Get a Free Quote
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-2xl font-extrabold text-navy-900 mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every business is different. Book a free 30-minute strategy call
                with Becky and we&apos;ll help you identify the highest-impact
                starting point for your budget and goals. No pressure, no pitch —
                just honest advice.
              </p>
              <Button href="/contact" size="lg">
                Book Your Free Strategy Call
              </Button>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
