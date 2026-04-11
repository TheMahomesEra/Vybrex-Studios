/* ============================================================
   VYBREX STUDIOS Home Page — Dark Forge Futurism
   Assembles all sections in order
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.07 0.015 285)" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
