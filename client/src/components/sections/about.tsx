import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const skills = [
    "User Experience Design",
    "User Research",
    "Figma",
    "Freshdesk",
    "Strapi",
    "CMS",
    "TMS",
    "Qliksense",
    "JIRA",
    "Brahma Fabricator",
    "Python"
  ];

  return (
    <section id="about" className="py-20" style={{background: 'linear-gradient(to bottom,rgb(48, 42, 118),rgb(10, 7, 41))'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-playfair font-bold mb-8 text-secondary" style={{color: "white"}}>About Me</h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <img
                src="/shyamali.jpeg"
                alt="Shyamali Panda - Process Designer"
                className="rounded-2xl shadow-lg w-full max-w-sm float-left mr-8 mb-4 lg:mb-0"
              />
            </div>
            
            <div className="lg:w-2/3">
              <p className="text-lg text-slate mb-6 leading-relaxed" style={{color: "white"}}>
              I’ve always been drawn to how things work behind the scenes. In my current role, I curate Hindi content and app experiences for the Indus Appstore across Xiaomi and Lava devices. I love creating process flows, breaking down data, and designing systems that feel intuitive. Chatbots and language tech fascinate me, and I’m now working toward a transition into process design, where I aim to grow into a product leadership role.
              </p>
              
              {/* Skills Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary mb-4" style={{color: "white"}}>Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="px-3 py-2 rounded-lg text-sm font-medium text-center"
                      style={{
                        backgroundColor: '#ffffff',       // white bg
                        color: '#7700ff',                 // purple text
                        borderRadius: "12px"
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: '#7700ff',       // purple bg on hover
                        color: '#ffffff',                 // white text on hover
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
