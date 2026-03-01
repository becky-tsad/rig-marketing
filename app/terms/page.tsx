import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <Container>
          <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-gray-300 mt-4">Last updated: March 1, 2026</p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              By accessing or using the {siteConfig.name} website ({siteConfig.url}), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Services</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {siteConfig.name} provides marketing strategy, brand development, web design, social media management, content creation, and related services. Specific services, deliverables, timelines, and fees are outlined in individual client agreements and are separate from these website terms.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All content on this website — including text, graphics, logos, images, and software — is the property of {siteConfig.name} and is protected by Canadian and international intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without written permission.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">4. User Submissions</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When you submit information through our contact form or other communication channels, you grant us permission to use that information to respond to your inquiry and provide our services. We handle your information in accordance with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This website is provided &ldquo;as is&rdquo; without warranties of any kind. While we strive to keep information accurate and up-to-date, we do not guarantee the completeness, reliability, or accuracy of any content on this site. Past results described in case studies and testimonials are not guarantees of future performance.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {siteConfig.name} shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">7. External Links</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of any external sites. Visiting linked sites is at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These terms are governed by the laws of the Province of Alberta and the federal laws of Canada applicable therein.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the website constitutes acceptance of updated terms.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">10. Contact</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For questions about these terms, contact us at{" "}
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
