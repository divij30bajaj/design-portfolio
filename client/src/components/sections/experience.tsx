import { motion } from "framer-motion";
import { Briefcase, Rocket, Sprout } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ExperienceSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const experiences = [
    {
      title: "Localization Executive",
      company: "PhonePe – Indus Appstore",
      period: "October 2023 - Present",
      description: "As the Hindi Localization Executive for Indus Appstore—a homegrown alternative to Google Play tailored for Indian regional users—I’ve led the end-to-end process of language adaptation, personalized app curation, and performance-driven content rollout. My role bridges content, design, and data, with a focus on improving discoverability and user engagement through scalable and structured workflow",
      achievements: [
        "<b>Scaled Hindi installs from 24K to 75K in 12 months</b> through curated app collections, push campaigns, and homepage optimizations.",
        "Boosted Installers-to-DAU conversion from <b>18% to 58%</b> by refining content flow logic and prioritizing high-intent app placements.",
        "<b>Doubled average installs per user from 0.25 to 0.55</b>, enhancing user journeys with trend-based and category-specific content.",
        "Maintained a <b>steady 15–18% DAU</b> contribution from Hindi content, showcasing strong regional engagement.",
        "Spearheaded an ongoing Transliteration Tool Project using phonemic mapping—<b>leading a team of 11</b> to automate app title transliteration, reducing manual effort and turnaround time by 40%.",
        "Authored SOPs for localization and rollout processes—<b>cutting content release time by 30%</b> and enabling smooth cross-functional handoffs.",
        "Developed a modular curation system to support multilingual scaling and reduce dependency on manual tagging."
      ],
      icon: Briefcase,
      color: "primary",
    },
    {
      title: "Technical Content Developer",
      company: "Lysto",
      period: "February 2023- September 2023",
      description: "Worked on building Web3 gamer-centric virtual support experiences while supporting content operations, SEO, and community engagement.",
      achievements: [
        "<b>Designed and deployed FAQ-based conversational flows</b> on FreshDesk for virtual assistant for the platform.",
        "Led weekly Ask Me Anything (AMA) sessions with gamers to <b>understand pain points</b> and improve platform onboarding—personally hosted and transcribed sessions for content insights.",
        "Conducted keyword research and content optimization to boost SEO visibility and organic reach for Web 3 gaming-related support content."
      ],
      icon: Rocket,
      color: "accent",
    },
  ];

  return (
    <section id="experience" className="py-20" style={{ background: "linear-gradient(to bottom, rgb(4, 3, 16), rgb(48, 42, 118))"}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold mb-4 text-secondary" style={{ color: "white"}}>Work Experience</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto" style={{ color: "white"}}>
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
                    <h3 className="text-2xl font-semibold text-secondary mb-2" style={{color: '#7700ff'}}>
                      {experience.title}
                    </h3>
                    <p className="text-primary font-medium text-lg mb-4" style={{ fontWeight: "bold"}}>
                      {experience.company}
                    </p>
                    <p className="text-slate mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    <ul className="text-slate space-y-2 mb-6">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <p dangerouslySetInnerHTML={{ __html: achievement}}/>
                        </li>
                      ))}
                    </ul>
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
