import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from our clients about how RIG Marketing helped them grow their businesses.",
};

const testimonials = [
  {
    quote:
      "RIG completely transformed our brand and online presence. Within 3 months, our leads tripled and our brand recognition went through the roof. They're not just a marketing agency — they're a true growth partner.",
    author: "Sarah Chen",
    role: "Founder, Bloom Botanicals",
    company: "Bloom Botanicals",
    image: "/images/testimonials/sarah-chen.svg",
  },
  {
    quote:
      "The 90-Day Fast Track program was exactly what our startup needed. RIG took us from an idea to a real business with real customers in record time. Professional, strategic, and results-driven from day one.",
    author: "Marcus Johnson",
    role: "CEO, TechStart Solutions",
    company: "TechStart Solutions",
    image: "/images/testimonials/marcus-johnson.svg",
  },
  {
    quote:
      "Our tables are full and our phone doesn't stop ringing. RIG's social media strategy turned our restaurant into the talk of the town. I can't recommend them highly enough.",
    author: "Chef Maria Santos",
    role: "Owner, Urban Eats Bistro",
    company: "Urban Eats Bistro",
    image: "/images/testimonials/maria-santos.svg",
  },
  {
    quote:
      "We went from being invisible online to showing up at the top of Google. The quality of leads from organic search has been outstanding. RIG's SEO expertise is world-class.",
    author: "David Park",
    role: "Managing Partner, Greenfield Financial",
    company: "Greenfield Financial",
    image: "/images/testimonials/david-park.svg",
  },
  {
    quote:
      "Working with RIG felt like having an in-house marketing team. They understood our vision from day one and executed flawlessly. Our website redesign alone increased conversions by 40%.",
    author: "Lisa Thompson",
    role: "COO, Elevate Fitness",
    company: "Elevate Fitness",
    image: "/images/testimonials/lisa-thompson.svg",
  },
  {
    quote:
      "As a solopreneur, I was overwhelmed trying to handle my own marketing. RIG's coaching program gave me the clarity and tools I needed. My revenue doubled within 6 months of implementing their strategies.",
    author: "James Okonkwo",
    role: "Founder, Craft & Co. Design",
    company: "Craft & Co. Design",
    image: "/images/testimonials/james-okonkwo.svg",
  },
  {
    quote:
      "RIG doesn't do cookie-cutter marketing. Every strategy was custom-built for our business. They took the time to understand our industry and delivered a campaign that outperformed all expectations.",
    author: "Priya Sharma",
    role: "Director of Marketing, NovaTech",
    company: "NovaTech",
    image: "/images/testimonials/priya-sharma.svg",
  },
  {
    quote:
      "The brand identity RIG created for us is something we're incredibly proud of. It captures exactly who we are and resonates deeply with our customers. Best investment we've ever made.",
    author: "Mike & Rachel Torres",
    role: "Co-Founders, Riverside Café",
    company: "Riverside Café",
    image: "/images/testimonials/mike-rachel-torres.svg",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-coral font-semibold text-sm uppercase tracking-widest mb-4">
              Testimonials
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Our Clients Love Working With Us
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Don&apos;t just take our word for it — hear from the businesses
              we&apos;ve helped transform and grow.
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.author} delay={(i % 3) * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-8 break-inside-avoid">
                  <div className="text-4xl text-coral/20 font-serif mb-2">
                    &ldquo;
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.image} alt={t.author} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-bold text-navy-900 text-sm">
                        {t.author}
                      </div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
