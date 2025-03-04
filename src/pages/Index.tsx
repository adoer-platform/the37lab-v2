
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RiskSection from "../components/RiskSection";
import ValueGapSection from "../components/ValueGapSection";
import PromiseSection from "../components/PromiseSection";
import ArchitectureSection from "../components/ArchitectureSection";
import ProcessSection from "../components/ProcessSection";
import WhyUsSection from "../components/WhyUsSection";
import NextStepsSection from "../components/NextStepsSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "the37lab | De-risk and fast-track your AI ambitions";
    
    // Add fade-in animation to sections on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade-in-section");
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RiskSection />
      <ValueGapSection />
      <PromiseSection />
      <ArchitectureSection />
      <ProcessSection />
      <WhyUsSection />
      <NextStepsSection />
      <Footer />
    </div>
  );
};

export default Index;
