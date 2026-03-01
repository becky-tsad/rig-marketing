"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const posts = [
  {
    slug: "5-marketing-mistakes-startups-make",
    title: "5 Marketing Mistakes Every Startup Makes (And How to Avoid Them)",
    excerpt:
      "Starting a business is exciting, but many founders fall into common marketing traps that waste time and money. Here's how to sidestep them.",
    category: "Marketing Strategy",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    image: "/images/blog/startup-mistakes.svg",
  },
  {
    slug: "brand-identity-small-business",
    title: "Why Brand Identity Is the Best Investment for Small Businesses",
    excerpt:
      "Your brand is more than a logo. Discover why investing in a complete brand identity pays dividends for years to come.",
    category: "Branding",
    date: "Feb 8, 2026",
    readTime: "4 min read",
    image: "/images/blog/brand-identity.svg",
  },
  {
    slug: "social-media-trends-2026",
    title: "Social Media Trends to Watch in 2026",
    excerpt:
      "The social media landscape is always evolving. Stay ahead of the curve with these key trends shaping digital marketing this year.",
    category: "Social Media",
    date: "Feb 1, 2026",
    readTime: "6 min read",
    image: "/images/blog/social-media-trends.svg",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            title="Free Marketing Insights"
            subtitle="Actionable strategies and industry insights to help you grow smarter — no strings attached."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {posts.map((post, i) => (
            <AnimateOnScroll key={post.slug} delay={i * 0.1}>
              <Card href={`/blog/${post.slug}`} className="h-full flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="coral">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-gray-400 mt-4">{post.date}</p>
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Button href="/blog" variant="secondary">
            Read More Insights
          </Button>
        </div>
      </Container>
    </section>
  );
}
