import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function EducationSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: education1Ref, isVisible: education1Visible } = useScrollReveal();
  const { ref: education2Ref, isVisible: education2Visible } = useScrollReveal();

  const educationData = [
    {
      degree: "Master of Design in Interaction Design",
      institution: "Carnegie Mellon University",
      description: "Specialized in human-computer interaction, design research methods, and prototyping. Thesis focused on conversational UI design patterns for complex workflows.",
      period: "2019 - 2021",
      gpa: "GPA: 3.9/4.0",
      skills: ["HCI Research", "Design Systems", "Prototyping"],
      color: "primary",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      description: "Strong technical foundation with coursework in algorithms, software engineering, and human-computer interaction. Led the design team for the university's student portal redesign project.",
      period: "2015 - 2019",
      gpa: "Magna Cum Laude",
      skills: ["Software Engineering", "Data Structures", "UI Development"],
      color: "accent",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold mb-4 text-secondary">Education</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Academic foundation that shaped my design thinking and problem-solving approach.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {educationData.map((education, index) => {
            const ref = index === 0 ? education1Ref : education2Ref;
            const isVisible = index === 0 ? education1Visible : education2Visible;
            
            return (
              <motion.div
                key={education.degree}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-secondary mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {education.institution}
                    </p>
                    <p className="text-slate mb-4">
                      {education.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {education.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`${
                            education.color === "primary" 
                              ? "bg-primary/10 text-primary" 
                              : "bg-accent/10 text-accent"
                          } px-3 py-1 rounded-full text-sm`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8 text-right">
                    <p className="text-2xl font-bold text-accent">
                      {education.period}
                    </p>
                    <p className="text-slate">{education.gpa}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
