import Hero from "@/components/home/Hero";
import SocialProofBar from "@/components/home/SocialProofBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutTeaser from "@/components/home/AboutTeaser";
import FastTrackTeaser from "@/components/home/FastTrackTeaser";
import FeaturedWork from "@/components/home/FeaturedWork";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import BlogPreview from "@/components/home/BlogPreview";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ServicesOverview />
      <AboutTeaser />
      <FastTrackTeaser />
      <FeaturedWork />
      <TestimonialsCarousel />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
