import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CertificationSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: education1Ref, isVisible: education1Visible } = useScrollReveal();
  const { ref: education2Ref, isVisible: education2Visible } = useScrollReveal();
  const { ref: education3Ref, isVisible: education3Visible } = useScrollReveal();

  const refs = [education1Ref, education2Ref, education3Ref];
  const visibles = [education1Visible, education2Visible, education3Visible];

  const certificationData = [
    {
      name: "Product Management: Building a Product Strategy",
      institution: "PMI® Registered Education Provider",
      completedOn: "May 25, 2025",
      link: "",
      color: "primary",
    },
    {
      name: "Conversational Design Course",
      institution: "Cognigy Academy",
      completedOn: "May 22, 2023",
      link: "",
      color: "primary",
    },
    {
      name: "Python for Data Science",
      institution: "IBM",
      completedOn: "April 06, 2023",
      link: "",
      color: "primary",
    },
  ];

  return (
    <section id="certifications" className="py-20" style={{background: 'linear-gradient(to bottom,rgb(10, 7, 41), rgb(4, 3, 16))'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold mb-4 text-secondary" style={{ color: "white"}}>Certifications</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto" style={{ color: "white"}}>
          Credentials validating my expertise and commitment to continuous professional growth.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {certificationData.map((certificate, index) => {
            const ref = refs[index];
            const isVisible = visibles[index];
            
            return (
              <motion.div
                key={certificate.name}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-secondary mb-2" style={{color: '#7700ff'}}>
                      {certificate.name}
                    </h3>
                    <p className="text-primary font-medium mb-2" style={{fontWeight: 'bold'}}>
                      {certificate.institution}
                    </p>
                    <p className="text-slate mb-4">
                      {certificate.completedOn}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8 text-right">
                    <p className="text-2xl text-accent">
                      <a href={certificate.link}>View Certificate</a>
                    </p>
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
