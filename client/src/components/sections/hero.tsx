import { motion } from "framer-motion";
import { PencilRuler, Palette } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faP, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral via-blue-50 to-amber-50 pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            <span className="gradient-text">Shyamali Panda</span>
          </h1>
          <div style={{display: "flex", marginTop: "20px", justifyContent: "center", marginBottom: "20px"}}>
          <a href={"mailto:shyamalijsr790@gmail.com"} 
              className="icon-link-home"
            ><FontAwesomeIcon icon={faEnvelope} className='fa-2xl pe-3 ps-3'/>
            </a>
            <a href={"https://www.linkedin.com/in/shyamali-panda-6152a1185/"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-link-home"
            >
              <FontAwesomeIcon icon={faLinkedin} className='fa-2xl pe-2 ps-1'/>
              </a>
              <a href={"#contact"} 
              className="icon-link-home"
            >
              <FontAwesomeIcon icon={faPhone} className='fa-2xl ps-3' />
              </a>
          </div>
          <p className="text-xl md:text-2xl text-slate mb-8 max-w-3xl mx-auto leading-relaxed">
          From app curation to user flows — crafting seamless journeys that lead from content to product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => {
                trackEvent('view_work_clicked', 'engagement', 'hero_section');
                handleNavClick("#projects");
              }}
              className="bg-primary text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => {
                trackEvent('resume_download', 'conversion', 'hero_section');
                const link = document.createElement("a");
                link.href = "/api/resume";
                link.download = "Shyamali_Panda_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="border-2 border-accent text-accent px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
            <motion.button
              onClick={() => {
                trackEvent('contact_clicked', 'engagement', 'hero_section');
                handleNavClick("#contact");
              }}
              className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Design Elements */}
      <motion.div
        className="absolute top-1/4 left-10 hidden lg:block"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
          <PencilRuler className="text-primary w-8 h-8" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-10 hidden lg:block"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1,
        }}
      >
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
          <Palette className="text-accent w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
}
