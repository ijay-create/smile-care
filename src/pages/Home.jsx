import { motion } from "framer-motion";
import { pageVariants } from "../animations/pageTransition";

import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import DoctorsPreview from "../components/DoctorsPreview";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <ServicesSection />
      <AboutSection />
      <DoctorsPreview />
      <Testimonials />
      <CTASection />
    </motion.main>
  );
}

export default Home;