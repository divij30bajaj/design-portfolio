import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const skills = [
    "Python",
    "NLTK",
    "Pandas",
    "NumPy",
    "Git",
    "Scripting for NLP",
    "SQL",
    "Natural Language Understanding",
    "Natural Language Generation",
    "JIRA",
    "Morphological Analysis",
    "Phonetic Transcription"
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
              I’ve always been curious about how language systems work behind the scenes. As a Computational Linguist, I design multilingual NLU and NLG pipelines and build rule-based NLP solutions that make digital experiences more intuitive and accessible. I enjoy working closely with large-scale language data, setting up human-in-the-loop annotation workflows, and using Python-driven automation to bring structure to linguistic complexity. Language technology - especially conversational AI and multilingual user experiences - continues to fascinate me, and I’m keen to grow into roles where I can shape data-centric processes and scalable language systems that impact real users.
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
