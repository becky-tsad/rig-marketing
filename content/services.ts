export interface Service {
  slug: string;
  title: string;
  headline: string;
  description: string;
  icon: string;
  deliverables: string[];
  pricing: {
    type: "project" | "monthly" | "session";
    startingAt: string;
    note?: string;
  };
}

export const services: Service[] = [
  {
    slug: "marketing-strategy",
    title: "Marketing Strategy & Consulting",
    headline: "Know Exactly Where Your Next Customers Are Coming From",
    description:
      "Stop guessing and start growing with a clear, data-backed marketing roadmap built for your business. We analyze your market, audience, and competitors to identify the highest-impact opportunities — then build a step-by-step plan to capture them.",
    icon: "ChartBarIcon",
    deliverables: [
      "In-depth market & competitor analysis",
      "Customer persona development",
      "Multi-channel marketing roadmap",
      "KPI framework & measurement plan",
      "Quarterly strategy reviews & optimization",
    ],
    pricing: {
      type: "project",
      startingAt: "$2,500",
      note: "Monthly retainers from $1,500/mo",
    },
  },
  {
    slug: "brand-development",
    title: "Brand Development",
    headline: "A Brand Your Audience Can't Forget",
    description:
      "Your brand is more than a logo — it's the feeling people get when they encounter your business. We build complete brand identity systems that make you instantly recognizable, deeply memorable, and impossible to confuse with the competition.",
    icon: "SparklesIcon",
    deliverables: [
      "Logo design & visual identity system",
      "Colour palette, typography & imagery direction",
      "Brand voice & messaging framework",
      "Comprehensive brand guidelines document",
      "Collateral templates (business cards, social, presentations)",
    ],
    pricing: {
      type: "project",
      startingAt: "$4,000",
      note: "Full brand strategy + identity from $10,000",
    },
  },
  {
    slug: "web-design",
    title: "Website Design & Development",
    headline: "A Website That Works While You Sleep",
    description:
      "Your website should be your hardest-working employee — converting visitors into leads and customers 24/7. We design and build modern, mobile-first websites that look stunning, load fast, and are engineered to drive results.",
    icon: "ComputerDesktopIcon",
    deliverables: [
      "Custom responsive design (mobile-first)",
      "Development & CMS integration",
      "SEO-optimized site structure & copy",
      "Performance optimization & Core Web Vitals",
      "Post-launch support & training",
    ],
    pricing: {
      type: "project",
      startingAt: "$6,000",
      note: "Ongoing maintenance from $300/mo",
    },
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    headline: "Show Up Where Your Customers Already Are",
    description:
      "Consistent, strategic social media is what turns followers into fans and fans into customers. We handle everything — from content creation to community management — so you can focus on running your business while your audience grows.",
    icon: "ChatBubbleLeftRightIcon",
    deliverables: [
      "Custom content calendar & strategy",
      "Content creation & scheduling (12-20+ posts/mo)",
      "Community management & engagement",
      "Monthly analytics reports & insights",
      "Paid social ad campaign management",
    ],
    pricing: {
      type: "monthly",
      startingAt: "$1,500/mo",
      note: "Custom packages based on platforms & posting frequency",
    },
  },
  {
    slug: "content-seo",
    title: "Content Creation & SEO",
    headline: "Get Found First on Google",
    description:
      "When someone searches for what you offer, you should be the first name they see. Our content and SEO strategies work together to drive organic traffic, build authority, and turn searchers into customers — month after month.",
    icon: "PencilSquareIcon",
    deliverables: [
      "Technical SEO audit & keyword strategy",
      "Blog content writing (2-4 posts/mo)",
      "On-page optimization & internal linking",
      "Monthly ranking & traffic reports",
      "Content strategy & editorial calendar",
    ],
    pricing: {
      type: "monthly",
      startingAt: "$1,500/mo",
      note: "SEO-only or content-only packages available",
    },
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    headline: "Visuals That Stop the Scroll",
    description:
      "In a world of infinite content, great design is what makes people stop, look, and pay attention. From social graphics to print materials, we create visuals that communicate your message with clarity and impact.",
    icon: "SwatchIcon",
    deliverables: [
      "Social media graphics & templates",
      "Print marketing materials (brochures, flyers, posters)",
      "Presentation & pitch deck design",
      "Infographics & data visualization",
      "Packaging & promotional materials",
    ],
    pricing: {
      type: "project",
      startingAt: "$500",
      note: "Monthly retainers from $1,200/mo",
    },
  },
  {
    slug: "startup-program",
    title: "90-Day Fast Track Startup Program",
    headline: "Go from Zero to Market-Ready in 90 Days",
    description:
      "Our signature program for startups and new businesses. In 90 days, we build your brand, launch your website, set up your marketing channels, and execute your first campaign — so you hit the market with momentum instead of confusion.",
    icon: "RocketLaunchIcon",
    deliverables: [
      "Complete brand identity package",
      "Custom website design & development",
      "Social media setup & launch strategy",
      "First marketing campaign execution",
      "90-day growth roadmap & playbook",
    ],
    pricing: {
      type: "project",
      startingAt: "$5,000",
      note: "All-inclusive packages up to $15,000",
    },
  },
  {
    slug: "coaching",
    title: "Coaching & Accountability Sessions",
    headline: "Master Your Own Marketing — With Expert Guidance",
    description:
      "Not ready for full-service? Our 1-on-1 coaching gives you the expert guidance, actionable feedback, and accountability you need to execute your own marketing with confidence. Think of it as having a marketing director on speed dial.",
    icon: "AcademicCapIcon",
    deliverables: [
      "Weekly or bi-weekly 1-on-1 coaching calls",
      "Custom action plans & homework",
      "Marketing audit & strategic feedback",
      "Tool & platform recommendations",
      "Progress tracking & accountability check-ins",
    ],
    pricing: {
      type: "session",
      startingAt: "$150/session",
      note: "Monthly packages from $800/mo",
    },
  },
];
