import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "90-Day Fast Track Startup Program",
  description:
    "Go from zero to market-ready in 90 days. RIG's signature startup program includes brand identity, website, marketing launch, and a growth roadmap — starting at $5,000.",
};

const phases = [
  {
    weeks: "Weeks 1-3",
    title: "Discovery & Brand Foundation",
    items: [
      "Deep-dive discovery session with Becky",
      "Market research & competitor analysis",
      "Brand positioning & messaging framework",
      "Logo design & visual identity development",
      "Complete brand guidelines document",
    ],
  },
  {
    weeks: "Weeks 4-7",
    title: "Website & Digital Presence",
    items: [
      "Custom website design (mobile-first)",
      "Website development & CMS setup",
      "SEO-optimized site structure & copy",
      "Social media profile setup & branding",
      "Google Business Profile optimization",
    ],
  },
  {
    weeks: "Weeks 8-10",
    title: "Content & Launch Prep",
    items: [
      "Content strategy & editorial calendar",
      "Initial blog content creation",
      "Social media content library (first month)",
      "Email marketing setup & welcome sequence",
      "Launch campaign strategy & ad creative",
    ],
  },
  {
    weeks: "Weeks 11-12",
    title: "Launch & Accelerate",
    items: [
      "Website launch & go-live",
      "First marketing campaign execution",
      "Social media launch sequence",
      "Performance tracking & analytics setup",
      "90-day growth roadmap & playbook handoff",
    ],
  },
];

const packages = [
  {
    name: "Foundation",
    price: "$5,000",
    description: "The essentials to get market-ready",
    features: [
      "Brand identity (logo, colours, fonts)",
      "5-page custom website",
      "Social media setup (2 platforms)",
      "Basic SEO optimization",
      "30-day post-launch support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$10,000",
    description: "The full launch package",
    features: [
      "Everything in Foundation, plus:",
      "Comprehensive brand guidelines",
      "10-page custom website with blog",
      "Social media content (first month)",
      "Launch marketing campaign",
      "Email marketing setup",
      "90-day growth roadmap",
      "60-day post-launch support",
    ],
    highlighted: true,
  },
  {
    name: "Accelerator",
    price: "$15,000",
    description: "Maximum momentum from day one",
    features: [
      "Everything in Growth, plus:",
      "Brand messaging & positioning strategy",
      "Custom website with e-commerce or booking",
      "3 months of social media management",
      "Paid ad campaign setup & management",
      "SEO content strategy (3 months)",
      "Monthly strategy calls for 3 months",
      "90-day post-launch support",
    ],
    highlighted: false,
  },
];

export default function FastTrackPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/5 rounded-full blur-[100px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6">Signature Program</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Go from Zero to{" "}
              <span className="text-coral">Market-Ready</span> in 90 Days
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Launching a business is hard enough without trying to figure out
              marketing on your own. Our 90-Day Fast Track gives you everything
              you need — brand, website, strategy, and your first campaign — so
              you launch with momentum, not confusion.
            </p>
            <p className="text-coral font-semibold mb-10">
              Starting at $5,000 CAD
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Apply for the Fast Track
              </Button>
              <Button href="#how-it-works" variant="outline" size="lg">
                See How It Works
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Is This For You? */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <SectionHeading
                title="Is the Fast Track Right for You?"
                subtitle="This program was designed for a specific type of business owner."
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimateOnScroll delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <span className="text-coral text-lg">&#10003;</span>
                    Perfect Fit If You&apos;re...
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li>Launching a new business and need everything built</li>
                    <li>Rebranding or pivoting and need a fresh start</li>
                    <li>A solopreneur who can&apos;t afford to spend months figuring out marketing</li>
                    <li>Ready to invest in doing it right the first time</li>
                    <li>Want a single partner to handle brand, web, and launch</li>
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <span className="text-gray-400 text-lg">&#10007;</span>
                    Maybe Not If You...
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li>Already have a strong brand and just need one service</li>
                    <li>Are looking for ongoing monthly management only</li>
                    <li>Need an enterprise-level solution with complex integrations</li>
                    <li>Aren&apos;t ready to commit to the 90-day timeline</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    No worries — check out our{" "}
                    <a href="/services" className="text-coral hover:text-coral-dark underline">
                      individual services
                    </a>{" "}
                    instead.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white scroll-mt-24">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="How the 90 Days Work"
              subtitle="A structured, step-by-step process that takes you from brand new to fully launched."
            />
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {phases.map((phase, i) => (
                <AnimateOnScroll key={phase.weeks} delay={i * 0.1}>
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                    <div>
                      <span className="text-coral font-bold text-sm uppercase tracking-wider">
                        {phase.weeks}
                      </span>
                      <h3 className="text-xl font-bold text-navy-900 mt-1">
                        {phase.title}
                      </h3>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="text-coral mt-0.5">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-navy-900">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="Choose Your Fast Track Package"
              subtitle="Every package includes a dedicated project manager and direct access to Becky."
              light
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col ${
                    pkg.highlighted
                      ? "bg-white text-navy-900 ring-2 ring-coral shadow-xl shadow-coral/10 relative"
                      : "bg-navy-800 text-white"
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge>Most Popular</Badge>
                    </div>
                  )}

                  <h3
                    className={`text-xl font-bold ${
                      pkg.highlighted ? "text-navy-900" : "text-white"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 mb-4 ${
                      pkg.highlighted ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {pkg.description}
                  </p>
                  <div className="mb-6">
                    <span
                      className={`text-4xl font-extrabold ${
                        pkg.highlighted ? "text-navy-900" : "text-white"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-sm ml-1 ${
                        pkg.highlighted ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      CAD
                    </span>
                  </div>

                  <ul className="space-y-2 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2 text-sm ${
                          pkg.highlighted ? "text-gray-600" : "text-gray-300"
                        }`}
                      >
                        <span className="text-coral mt-0.5 flex-shrink-0">
                          &#10003;
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={pkg.highlighted ? "primary" : "outline"}
                    className="w-full"
                  >
                    Apply Now
                  </Button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            Payment plans available. All packages can be customized during your discovery call.
          </p>
        </Container>
      </section>

      {/* Case Study: TechStart */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <SectionHeading
                title="Fast Track in Action"
                subtitle="See how TechStart Solutions went from idea to 50 paying customers in 90 days."
              />
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "500+", label: "Qualified Leads" },
                    { value: "50", label: "Paying Customers" },
                    { value: "2,000+", label: "Social Followers" },
                  ].map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-extrabold text-coral">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-coral pl-6 mb-6">
                  <p className="text-lg text-navy-900 italic leading-relaxed">
                    &ldquo;The 90-Day Fast Track was a game-changer for us. RIG took
                    us from an idea to a real business with real customers in record
                    time.&rdquo;
                  </p>
                </blockquote>
                <p className="font-bold text-navy-900">Marcus Johnson</p>
                <p className="text-sm text-gray-600">CEO, TechStart Solutions</p>

                <div className="mt-8">
                  <Button href="/contact" variant="secondary">
                    Book a Free Strategy Call
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
        <Container>
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Ready to Launch with{" "}
                <span className="text-coral">Momentum?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Spots are limited — we only take on 2-3 Fast Track clients at a time
                to ensure every business gets the attention it deserves.
              </p>
              <Button href="/contact" size="lg">
                Apply for the 90-Day Fast Track
              </Button>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
