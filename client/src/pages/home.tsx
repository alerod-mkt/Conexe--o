import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/hero";
import ProblemSection from "@/components/sections/problem";
import UrgencyLostDaysSection from "@/components/sections/urgency-lost-days";
import SolutionSection from "@/components/sections/solution";
import AuthorSection from "@/components/sections/author";
import TestimonialsSection from "@/components/sections/testimonials";
import ProductDetailsSection from "@/components/sections/product-details";
import PricingSection from "@/components/sections/pricing";
import UrgencySection from "@/components/sections/urgency";
import FaqSection from "@/components/sections/faq";
import FinalDecisionSection from "@/components/sections/final-decision";
import LastOpportunitySection from "@/components/sections/last-opportunity";
import FooterSection from "@/components/sections/footer";
import FloatingCTA from "@/components/ui/floating-cta";
import Header from "@/components/ui/header";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background overflow-x-hidden"
    >
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <ProblemSection />
      <UrgencyLostDaysSection />
      <SolutionSection />
      <div id="author">
        <AuthorSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <ProductDetailsSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <UrgencySection />
      <div id="faq">
        <FaqSection />
      </div>
      <FinalDecisionSection />
      <LastOpportunitySection />
      <FooterSection />
      <FloatingCTA />
    </motion.div>
  );
}
