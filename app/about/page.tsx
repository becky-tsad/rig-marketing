import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "RIG stands for Resources to Inspire Growth. Learn about our mission, our founder Becky Gale Tsadilas, and why we help small businesses grow with strategic marketing.",
};

const values = [
  {
    title: "Resources",
    description:
      "We equip you with the tools, strategies, and expertise your business needs — no fluff, no filler. From brand guides to analytics dashboards, you get assets that keep working long after our engagement ends.",
    icon: "R",
  },
  {
    title: "Inspire",
    description:
      "We believe marketing should spark something. We create work that inspires your audience to take action and inspires you to dream bigger about what your business can become.",
    icon: "I",
  },
  {
    title: "Growth",
    description:
      "Everything we do ladders up to one goal: growing your business. Real growth, measured in revenue, customers, and impact — not vanity metrics that look good on a report but don't move the needle.",
    icon: "G",
  },
];

const milestones = [
  { year: "2018", title: "RIG Marketing Founded", description: "Becky launches RIG from Alberta with a mission to make expert marketing accessible to growing businesses across North America." },
  { year: "2019", title: "First 10 Clients", description: "Built early reputation through word-of-mouth, working with local startups and small businesses in Alberta." },
  { year: "2021", title: "90-Day Fast Track Launched", description: "Created the signature startup program that takes new businesses from zero to market-ready in 90 days." },
  { year: "2023", title: "50+ Businesses Served", description: "Reached a major milestone, with a 95% client retention rate and an average 3x growth for partner businesses." },
  { year: "2025", title: "Coaching & Workshops", description: "Expanded into 1-on-1 coaching and group workshops, empowering entrepreneurs to own their marketing." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-coral font-semibold text-sm uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Resources to Inspire Growth
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              That&apos;s what RIG stands for — and it&apos;s the promise behind everything
              we do. Based in Alberta and serving clients across Canada and the
              United States, we&apos;ve been helping small businesses, startups,
              and entrepreneurs build the brands and strategies they need to thrive since 2018.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/team/becky-gale.png"
                    alt="Becky Gale Tsadilas, Founder of RIG Marketing & Strategy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral rounded-2xl -z-10" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right">
              <div>
                <p className="text-coral font-semibold text-sm uppercase tracking-widest mb-4">
                  Meet the Founder
                </p>
                <h2 className="text-3xl font-extrabold text-navy-900 mb-2">
                  Becky Gale Tsadilas
                </h2>
                <p className="text-coral font-medium mb-6">
                  Founder & Lead Strategist
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Becky founded RIG Marketing in 2018 with a simple mission: give
                  small businesses access to the same strategic marketing that drives
                  big-brand success.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  With a passion for helping entrepreneurs find their voice and reach
                  their audience, she&apos;s guided 50+ businesses from brand confusion to
                  market clarity — building strategies that don&apos;t just look good on
                  paper but drive real, measurable results.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  &ldquo;I started RIG because I saw too many incredible businesses
                  struggling to get noticed — not because they weren&apos;t great at what
                  they do, but because they didn&apos;t have the right marketing support.
                  That&apos;s what we&apos;re here to change.&rdquo;
                </p>
                <Button href="/contact" variant="secondary">
                  Work With Becky
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* What RIG Stands For */}
      <section className="py-20 bg-gray-50">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="What RIG Stands For"
              subtitle="Our name is our promise — Resources to Inspire Growth."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-md text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-extrabold text-white">
                      {value.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-white">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="Our Journey"
              subtitle="From a solo mission to a full-service agency — here's how RIG grew."
            />
          </AnimateOnScroll>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200" />

              {milestones.map((milestone, i) => (
                <AnimateOnScroll key={milestone.year} delay={i * 0.1}>
                  <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-coral border-4 border-white shadow z-10 mt-1.5" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                      <span className="text-coral font-bold text-lg">{milestone.year}</span>
                      <h3 className="font-bold text-navy-900 mt-1">{milestone.title}</h3>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-20 bg-navy-900">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="How We Work"
              subtitle="No cookie-cutter strategies. Every engagement starts with understanding your business."
              light
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Discover", description: "We dig deep into your business, audience, competitors, and goals. We ask the hard questions so we can build something that actually works." },
              { step: "02", title: "Strategize", description: "We craft a custom roadmap built on data and creative insight — not templates. Every recommendation is tied to a measurable outcome." },
              { step: "03", title: "Execute & Grow", description: "We roll up our sleeves and make it happen. Then we measure, optimize, and iterate to keep your growth accelerating." },
            ].map((item, i) => (
              <AnimateOnScroll key={item.step} delay={i * 0.15}>
                <div className="text-center">
                  <span className="text-5xl font-extrabold text-coral/30">{item.step}</span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
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
