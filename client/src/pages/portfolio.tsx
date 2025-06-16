import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import EducationSection from "@/components/sections/education";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import CertificationSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";
// import FigmaModal from "@/components/figma-modal";
import Chatbot from "@/components/sections/chatbot";
import { steps } from "../chatbot-content.tsx"

export default function Portfolio() {
  useEffect(() => {
    document.title = "Shyamali Panda - Process Designer";
  }, []);

  return (
    <div className="min-h-screen bg-neutral">
      <Navigation />
      <HeroSection />
      <Chatbot steps={steps}/>
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationSection />
      <ContactSection />
      {/* <FigmaModal /> */}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 Shyamali Panda. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Designed & developed with <span className="text-red-500">♥</span> in Bangalore
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
