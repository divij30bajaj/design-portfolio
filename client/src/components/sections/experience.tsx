import { motion } from "framer-motion";
import { Briefcase, Rocket, Sprout } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ExperienceSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const experiences = [
    {
      title: "Senior Product Designer",
      company: "Slack Technologies",
      period: "2022 - Present",
      description: "Leading design for enterprise collaboration features, focusing on workflow automation and AI-assisted productivity tools. Collaborated with cross-functional teams to ship features used by millions of users daily.",
      achievements: [
        "Designed workflow builder that increased user productivity by 40%",
        "Led design system evolution supporting 10+ product areas",
        "Mentored 3 junior designers and established design critique processes",
      ],
      skills: ["Design Systems", "Enterprise UX", "AI/ML Design"],
      icon: Briefcase,
      color: "primary",
    },
    {
      title: "Product Designer",
      company: "Shopify",
      period: "2021 - 2022",
      description: "Focused on merchant experience for point-of-sale systems and inventory management. Drove design decisions for features serving 1M+ merchants globally.",
      achievements: [
        "Redesigned POS interface reducing checkout time by 25%",
        "Created mobile-first inventory management system",
        "Conducted user research across 5 international markets",
      ],
      skills: ["E-commerce", "Mobile Design", "User Research"],
      icon: Rocket,
      color: "accent",
    },
    {
      title: "UX Designer",
      company: "Airbnb",
      period: "2019 - 2021",
      description: "Designed host tools and booking experiences. Specialized in international markets and accessibility improvements. Worked closely with data science team to optimize conversion funnels.",
      achievements: [
        "Improved host onboarding completion rate by 35%",
        "Led accessibility initiative reaching WCAG AA compliance",
        "Designed features for emerging markets in SE Asia",
      ],
      skills: ["Travel Tech", "Accessibility", "Conversion Optimization"],
      icon: Sprout,
      color: "green-500",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold mb-4 text-secondary">Work Experience</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Professional journey spanning startups to enterprise, solving complex design challenges.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const { ref, isVisible } = useScrollReveal();
            
            return (
              <motion.div
                key={experience.title}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center gap-4 md:flex-col md:items-center md:w-32 flex-shrink-0">
                    <div className={`w-12 h-12 ${
                      experience.color === "primary" 
                        ? "bg-primary"
                        : experience.color === "accent"
                        ? "bg-accent"
                        : "bg-green-500"
                    } rounded-full flex items-center justify-center`}>
                      <experience.icon className="text-white w-6 h-6" />
                    </div>
                    <p className="text-accent font-bold text-lg md:text-center md:mt-2">
                      {experience.period}
                    </p>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-secondary mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-primary font-medium text-lg mb-4">
                      {experience.company}
                    </p>
                    <p className="text-slate mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    <ul className="text-slate space-y-2 mb-6">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`${
                            experience.color === "primary" 
                              ? "bg-primary/10 text-primary"
                              : experience.color === "accent"
                              ? "bg-accent/10 text-accent"
                              : "bg-green-100 text-green-700"
                          } px-4 py-2 rounded-full text-sm font-medium`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
