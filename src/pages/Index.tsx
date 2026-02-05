import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import GithubSection from "@/components/sections/GithubSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ColorSwitcher from "@/components/ColorSwitcher";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "portfolio",
        "github",
        "languages",
        "testimonials",
        "contact",
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="flex-1 lg:ml-[270px]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <GithubSection />
        <LanguagesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>

      <BackToTop />
      <ColorSwitcher />
    </div>
  );
};

export default Index;
