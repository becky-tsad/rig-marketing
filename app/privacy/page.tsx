import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <Container>
          <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-gray-300 mt-4">Last updated: March 1, 2026</p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-gray">
            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              When you use our website or contact us, we may collect the following information:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-6">
              <li>Name, email address, phone number, and company name (when you submit our contact form)</li>
              <li>Information about your business and marketing needs (as provided by you)</li>
              <li>Website usage data collected through analytics tools (page views, referral sources, device information)</li>
              <li>Cookies and similar tracking technologies for website functionality and analytics</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-6">
              <li>Respond to your inquiries and provide the services you request</li>
              <li>Communicate with you about our services, including follow-up emails</li>
              <li>Improve our website, services, and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. How We Protect Your Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-6">
              <li>Service providers who assist us in operating our website and business (e.g., email delivery services)</li>
              <li>Legal authorities when required by law or to protect our rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">5. Cookies</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our website uses cookies to enhance your browsing experience and gather analytics data. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Under Canadian privacy law (PIPEDA), you have the right to:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent for the use of your information</li>
              <li>Request deletion of your personal information</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have questions about this privacy policy or wish to exercise your rights, please contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-coral hover:text-coral-dark">
                {siteConfig.email}
              </a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
