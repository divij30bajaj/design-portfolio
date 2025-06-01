import { motion } from "framer-motion";
import { Heart, ServerCog, RotateCcw } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const philosophyItems = [
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every decision starts with understanding user needs and pain points.",
      color: "bg-primary",
    },
    {
      icon: ServerCog,
      title: "Systematic",
      description: "Building scalable design systems that evolve with product growth.",
      color: "bg-accent",
    },
    {
      icon: RotateCcw,
      title: "Iterative",
      description: "Continuous testing and refinement based on real user feedback.",
      color: "bg-green-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -30 }}
            animate={imageVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              alt="Alex Chen - Product Designer"
              className="rounded-2xl shadow-2xl hover-lift w-full max-w-md mx-auto"
            />
          </motion.div>
          
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 30 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-playfair font-bold mb-6 text-secondary">About Me</h2>
            <p className="text-lg text-slate mb-6 leading-relaxed">
              I'm a passionate product designer with 5+ years of experience crafting user-centered digital solutions. 
              My approach combines strategic thinking with creative problem-solving to deliver products that users love and businesses thrive on.
            </p>
            <p className="text-lg text-slate mb-8 leading-relaxed">
              I believe great design is invisible – it simply works. My mission is to eliminate friction between users and their goals, 
              creating experiences that feel natural and delightful.
            </p>
            
            {/* Design Philosophy */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary mb-4">Design Philosophy</h3>
              <div className="space-y-3">
                {philosophyItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center mt-1`}>
                      <item.icon className="text-white w-3 h-3" />
                    </div>
                    <p className="text-slate">
                      <strong>{item.title}:</strong> {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
