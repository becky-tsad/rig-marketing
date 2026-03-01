"use client";

import {
  ChartBarIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const serviceItems = [
  {
    icon: ChartBarIcon,
    title: "Marketing Strategy",
    description:
      "Know exactly where your next customers are coming from — with a data-driven roadmap built for your business.",
    href: "/services#marketing-strategy",
  },
  {
    icon: SparklesIcon,
    title: "Brand Development",
    description:
      "Get a brand identity your audience can't forget — from logo to voice to the full visual system.",
    href: "/services#brand-development",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Web Design & Dev",
    description:
      "Launch a website that works while you sleep — converting visitors into leads and customers 24/7.",
    href: "/services#web-design",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Social Media",
    description:
      "Show up where your customers already are — with content that builds community and drives action.",
    href: "/services#social-media",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            title="How We Help You Win"
            subtitle="Whether you need one thing or everything, here's how we drive growth for businesses like yours."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 0.1}>
              <Card href={service.href} className="p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-coral" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
