import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig, navLinks } from "@/lib/constants";

const serviceLinks = [
  { label: "Marketing Strategy", href: "/services#marketing-strategy" },
  { label: "Brand Development", href: "/services#brand-development" },
  { label: "Web Design", href: "/services#web-design" },
  { label: "Social Media", href: "/services#social-media" },
  { label: "Content & SEO", href: "/services#content-seo" },
  { label: "Coaching", href: "/services#coaching" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                RIG<span className="text-coral">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-coral transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                    className="hover:text-coral transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              )}
              <li>{siteConfig.location}</li>
              <li className="text-gray-500">Proudly serving clients across Canada &amp; the U.S.</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-coral transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-coral transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
