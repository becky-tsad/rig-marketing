export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string;
  metrics: { label: string; value: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bloom-botanicals-rebrand",
    title: "Complete Brand Transformation",
    client: "Bloom Botanicals",
    category: "Brand Development",
    image: "/images/portfolio/bloom.svg",
    summary: "A full rebrand that increased customer recognition by 200% and drove a 65% increase in online sales.",
    challenge:
      "Bloom Botanicals was a local plant shop struggling with an outdated brand identity that didn't reflect their premium product line. Their online presence was minimal and inconsistent across platforms.",
    approach:
      "We conducted a thorough brand audit and competitor analysis, then developed a fresh visual identity including logo, color palette, typography, and brand guidelines. We redesigned their website and unified their social media presence.",
    results:
      "The rebrand resulted in a 200% increase in brand recognition, 65% growth in online sales within 6 months, and a 150% increase in social media engagement.",
    metrics: [
      { label: "Brand Recognition", value: "+200%" },
      { label: "Online Sales", value: "+65%" },
      { label: "Social Engagement", value: "+150%" },
    ],
    testimonial: {
      quote: "RIG didn't just give us a new logo — they gave us a brand identity that truly represents who we are. The results speak for themselves.",
      author: "Sarah Chen",
      role: "Founder, Bloom Botanicals",
    },
  },
  {
    slug: "techstart-launch",
    title: "Startup Launch Campaign",
    client: "TechStart Solutions",
    category: "Marketing Strategy",
    image: "/images/portfolio/techstart.svg",
    summary: "A 90-day launch strategy that generated 500+ qualified leads and secured first 50 paying customers.",
    challenge:
      "TechStart Solutions had a great SaaS product but no market presence. They needed to go from zero to launch with a limited budget and tight timeline.",
    approach:
      "We enrolled TechStart in our 90-Day Fast Track program. We built their brand from scratch, created a conversion-optimized website, and executed a multi-channel launch campaign including content marketing, paid ads, and strategic partnerships.",
    results:
      "Within 90 days, TechStart generated over 500 qualified leads, converted 50 paying customers, and established a strong social media following of 2,000+ engaged followers.",
    metrics: [
      { label: "Qualified Leads", value: "500+" },
      { label: "Paying Customers", value: "50" },
      { label: "Social Followers", value: "2,000+" },
    ],
    testimonial: {
      quote: "The 90-Day Fast Track was a game-changer for us. RIG took us from an idea to a real business with real customers in record time.",
      author: "Marcus Johnson",
      role: "CEO, TechStart Solutions",
    },
  },
  {
    slug: "urban-eats-social",
    title: "Social Media Growth Strategy",
    client: "Urban Eats Bistro",
    category: "Social Media",
    image: "/images/portfolio/urban-eats.svg",
    summary: "A social media strategy that grew followers by 400% and increased restaurant bookings by 80%.",
    challenge:
      "Urban Eats Bistro had great food but low foot traffic. Their social media was sporadic and wasn't driving any measurable business results.",
    approach:
      "We developed a comprehensive social media strategy focused on food photography, behind-the-scenes content, and local community engagement. We managed daily posting across Instagram and Facebook, ran targeted ad campaigns, and implemented a user-generated content program.",
    results:
      "In 6 months, we grew their Instagram following from 800 to 4,000+, increased average weekly bookings by 80%, and generated a 5x return on ad spend.",
    metrics: [
      { label: "Follower Growth", value: "+400%" },
      { label: "Weekly Bookings", value: "+80%" },
      { label: "Ad ROAS", value: "5x" },
    ],
    testimonial: {
      quote: "Our tables are full and our phone doesn't stop ringing. RIG's social media magic turned our restaurant into the talk of the town.",
      author: "Chef Maria Santos",
      role: "Owner, Urban Eats Bistro",
    },
  },
  {
    slug: "greenfield-seo",
    title: "SEO & Content Overhaul",
    client: "Greenfield Financial",
    category: "Content & SEO",
    image: "/images/portfolio/greenfield.svg",
    summary: "An SEO strategy that achieved page-one rankings for 15 target keywords and tripled organic traffic.",
    challenge:
      "Greenfield Financial relied entirely on referrals and had zero organic search presence. Their website was not optimized and they had no content strategy.",
    approach:
      "We performed a comprehensive SEO audit, developed a keyword strategy targeting high-intent financial planning terms, optimized their website structure, and launched a blog content program publishing two articles per week.",
    results:
      "Within 8 months, Greenfield achieved page-one rankings for 15 key search terms, tripled their organic website traffic, and saw a 120% increase in consultation bookings from organic search.",
    metrics: [
      { label: "Page-1 Keywords", value: "15" },
      { label: "Organic Traffic", value: "+300%" },
      { label: "Consultation Bookings", value: "+120%" },
    ],
    testimonial: {
      quote: "We went from being invisible online to showing up at the top of Google. The quality of leads from organic search has been outstanding.",
      author: "David Park",
      role: "Managing Partner, Greenfield Financial",
    },
  },
];
