import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { trackEvent } from "@/lib/analytics";

export default function ProjectsSection() {
  const [isFigmaModalOpen, setIsFigmaModalOpen] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const mainProjects = [
    {
      title: "AI Customer Support Chatbot",
      description: "Designed a conversational interface for handling complex customer service scenarios. The wireframe demonstrates various user input patterns and system responses to create natural, helpful interactions.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
      features: [
        "Natural language processing for intent recognition",
        "Multi-step conversation flows with context preservation",
        "Seamless handoff to human agents when needed",
        "Personalized responses based on user history",
      ],
      skills: ["Conversational UI", "Wireframing", "User Flow"],
      hasFigma: true,
    },
    {
      title: "Mobile Banking Experience",
      description: "Redesigned mobile banking app to improve user engagement and reduce customer service calls. Focus on intuitive navigation and proactive financial insights.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
      impact: [
        { metric: "40%", description: "Increase in app usage" },
        { metric: "25%", description: "Reduction in support calls" },
      ],
      skills: ["FinTech", "Mobile Design", "Data Visualization"],
      hasFigma: false,
    },
  ];

  const additionalProjects = [
    {
      title: "Checkout Optimization",
      description: "Streamlined e-commerce checkout reducing cart abandonment by 30%.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      skills: ["E-commerce", "Conversion"],
      color: "green",
    },
    {
      title: "Analytics Dashboard",
      description: "Enterprise dashboard for complex data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      skills: ["Enterprise", "Data Viz"],
      color: "purple",
    },
    {
      title: "Social Network App",
      description: "Community-focused platform emphasizing meaningful connections.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      skills: ["Social", "Community"],
      color: "pink",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-neutral via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold mb-4 text-secondary">Featured Projects</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
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
                    <h3 className="text-2xl font-semibold text-secondary">{project.title}</h3>
                    {project.hasFigma && (
                      <button
                        onClick={() => setIsFigmaModalOpen(true)}
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <span className="mr-2">🎨</span>View Wireframes
                      </button>
                    )}
                  </div>
                  <p className="text-slate mb-6">{project.description}</p>
                  
                  {project.features && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Key Features:</h4>
                        <ul className="text-slate text-sm space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={i}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {project.impact && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Impact:</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {project.impact.map((item, i) => (
                            <div key={i} className="text-center">
                              <p className="text-2xl font-bold text-accent">{item.metric}</p>
                              <p className="text-sm text-slate">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`${
                          index === 0 
                            ? "bg-primary/10 text-primary" 
                            : "bg-accent/10 text-accent"
                        } px-3 py-1 rounded-full text-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Additional Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalProjects.map((project, index) => {
            const { ref, isVisible } = useScrollReveal();
            
            return (
              <motion.div
                key={project.title}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
                  <p className="text-slate text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`${
                          project.color === "green" 
                            ? "bg-green-100 text-green-700"
                            : project.color === "purple"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-pink-100 text-pink-700"
                        } px-2 py-1 rounded text-xs`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
              <h3 className="text-2xl font-semibold text-secondary">Chatbot Wireframe Flow</h3>
              <button
                onClick={() => setIsFigmaModalOpen(false)}
                className="text-slate hover:text-secondary text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&h=900"
                  alt="Detailed Chatbot Wireframe Flow"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-secondary mb-4">Wireframe Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-slate mb-2">User Input Scenarios:</h5>
                      <ul className="text-slate text-sm space-y-1">
                        <li>• Basic product inquiries</li>
                        <li>• Complex troubleshooting flows</li>
                        <li>• Account management requests</li>
                        <li>• Billing and payment issues</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate mb-2">Design Considerations:</h5>
                      <ul className="text-slate text-sm space-y-1">
                        <li>• Progressive disclosure of information</li>
                        <li>• Clear escalation paths</li>
                        <li>• Context-aware responses</li>
                        <li>• Accessibility compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
