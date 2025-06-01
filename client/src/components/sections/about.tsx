import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const skills = [
    "User Experience Design",
    "User Interface Design", 
    "Prototyping & Wireframing",
    "Design Systems",
    "User Research",
    "Interaction Design",
    "Figma",
    "Sketch",
    "Adobe Creative Suite",
    "HTML/CSS",
    "JavaScript",
    "React"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-playfair font-bold mb-8 text-secondary">About Me</h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
                alt="Alex Chen - Product Designer"
                className="rounded-2xl shadow-lg w-full max-w-sm float-left mr-8 mb-4 lg:mb-0"
              />
            </div>
            
            <div className="lg:w-2/3">
              <p className="text-lg text-slate mb-6 leading-relaxed">
                I'm a passionate product designer with 5+ years of experience crafting user-centered digital solutions. 
                My approach combines strategic thinking with creative problem-solving to deliver products that users love and businesses thrive on.
              </p>
              <p className="text-lg text-slate mb-8 leading-relaxed">
                I believe great design is invisible – it simply works. My mission is to eliminate friction between users and their goals, 
                creating experiences that feel natural and delightful. I specialize in enterprise software, mobile applications, and design systems.
              </p>
              
              {/* Skills Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary mb-4">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium text-center"
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
