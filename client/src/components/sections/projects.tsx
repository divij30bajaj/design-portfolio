import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { trackEvent } from "@/lib/analytics";

export default function ProjectsSection() {
  const [isFigmaModalOpen, setIsFigmaModalOpen] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const mainProjects = [
    {
      title: "Kashibot: Conversational Design for Heritage Sites",
      institute: "Banaras Hindu University",
      time: "August 2023",
      description: "A multilingual chatbot built to enhance the tourist experience across Varanasi's major temples, integrating real-time info on aarti schedules, tickets, locations, and cultural insights in Hindi, English, and Telugu. Developed full conversation flows, bot and user personas, and architecture on Figma.",
      image: "/kashibot.png",
      hasFigma: true,
    },
    {
      title: "Respin Transcription Proect",
      institute: "IISC, Bangalore",
      time: "March 2023",
      description: "Conducted phonetic transcription of Hindi audio files collected manually from native speakers related to Agriculture and Finance sectors",
      image: "/audio-hindi.png",
      impact: "Worked closely with tools like Rev, Wavesurfer",
      hasFigma: false,
    },
    {
      title: "Hindi Morphological Generator",
      institute: "Banaras Hindu University",
      time: "February 2023",
      description: "Built a Python-based NLP tool to generate root forms and inflected Hindi nouns",
      image: "/python-hindi.png",
      impact: "Automated morphological analysis for gender, number, and case variations.",
      hasFigma: false,
    },
    
  ];

  return (
    <section id="projects" className="py-20" style={{background: 'linear-gradient(to bottom,rgb(48, 42, 118),rgb(10, 7, 41))'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold mb-4 text-secondary" style={{ color: "white"}}>Featured Projects</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto" style={{ color: "white"}}>
            A showcase of design solutions that solve real user problems and drive business impact.
          </p>
        </motion.div>
        
        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {mainProjects.map((project, index) => {
            const { ref, isVisible } = useScrollReveal();
            
            return (
              <motion.div
                key={project.title}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover-lift"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-secondary" style={{color: '#7700ff'}}>{project.title}</h3>
                    <div style={{ display: "flex", flexDirection: "column"}}>
                      <h5 style={{ fontWeight: "bold"}}>{project.institute}</h5>
                      <h5>{project.time}</h5>
                    </div>
                    {/* {project.hasFigma && (
                      <button
                        onClick={() => setIsFigmaModalOpen(true)}
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <span className="mr-2">🎨</span>View Wireframes
                      </button>
                    )} */}
                  </div>
                  <p className="text-slate mb-6">{project.description}</p>
                  
                  {project.impact && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-secondary mb-2">{project.impact}</h4>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>

      {/* Figma Modal */}
      {isFigmaModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-semibold text-secondary">Coming soon!</h3>
              <button
                onClick={() => setIsFigmaModalOpen(false)}
                className="text-slate hover:text-secondary text-2xl"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
