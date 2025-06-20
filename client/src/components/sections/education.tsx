import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function EducationSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: education1Ref, isVisible: education1Visible } = useScrollReveal();
  const { ref: education2Ref, isVisible: education2Visible } = useScrollReveal();

  const educationData = [
    {
      degree: "M.A. Linguistics",
      institution: "Banaras Hindu University",
      description: "Focused on computational linguistics with an emphasis on Hindi; developed a morphological generator and conducted targeted experiments in Hindi language processing.",
      period: "2021 - 2023",
      gpa: "GPA: 8",
      color: "primary",
    },
    {
      degree: "B.A. English Hons.",
      institution: "Banaras Hindu University",
      description: "Relevant Coursework: Language and Literature, Linguistics, Philosophy, Sanskrit",
      period: "2018 - 2021",
      gpa: "GPA: 8.5",
      color: "accent",
    },
  ];

  return (
    <section id="education" className="py-20" style={{background: 'linear-gradient(to bottom,rgb(10, 7, 41), rgb(4, 3, 16))'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold mb-4 text-secondary" style={{color: "white"}}>Education</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto" style={{color: "white"}}>
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
                    <h3 className="text-2xl font-semibold text-secondary mb-2" style={{color: '#7700ff'}}>
                      {education.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2" style={{fontWeight: "bold"}}>
                      {education.institution}
                    </p>
                    <p className="text-slate mb-4">
                      {education.description}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8 text-right">
                    <p className="text-2xl font-bold">
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
