import { motion } from "framer-motion";
import { pageVariants } from "../animations/pageTransition";

import ServiceCard from "../components/ServiceCard";
import "../styles/services.css";

// Images (IMPORTANT: always import here, not inside ServiceCard)
import cleaningImg from "../assets/services/cleaning.jpg";
import implantImg from "../assets/services/implant.jpg";
import bracesImg from "../assets/services/braces.jpg";
import cosmeticImg from "../assets/services/cosmetic.jpg";
import extractionImg from "../assets/services/extraction.jpg";
import rootCanalImg from "../assets/services/rootcanal.jpg";

function Services() {
  const services = [
    {
      image: cleaningImg,
      title: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and maintain oral health.",
      category: "General Care",
    },
    {
      image: implantImg,
      title: "Dental Implants",
      description: "Permanent solutions for missing teeth with natural appearance.",
      category: "Surgery",
    },
    {
      image: bracesImg,
      title: "Braces & Alignment",
      description: "Straighten teeth and improve bite using modern orthodontics.",
      category: "Orthodontics",
    },
    {
      image: cosmeticImg,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with whitening, veneers, and reshaping.",
      category: "Cosmetic",
    },
    {
      image: extractionImg,
      title: "Tooth Extraction",
      description: "Safe and painless removal of damaged or infected teeth.",
      category: "Surgery",
    },
    {
      image: rootCanalImg,
      title: "Root Canal",
      description: "Advanced treatment to save infected teeth without pain.",
      category: "Restorative",
    },
  ];

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="services-page">

        {/* HERO */}
        <div className="services-hero">
          <h1>Our Dental Services</h1>
          <p>
            Complete dental care solutions using modern technology, expert
            doctors, and a patient-first approach.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* PROCESS */}
        <div className="services-process">
          <h2>How It Works</h2>

          <div className="process-grid">

            <div className="process-step">
              <h3>1. Consultation</h3>
              <p>Book an appointment and meet our dental experts.</p>
            </div>

            <div className="process-step">
              <h3>2. Diagnosis</h3>
              <p>We examine and create a personalized treatment plan.</p>
            </div>

            <div className="process-step">
              <h3>3. Treatment</h3>
              <p>We perform safe, modern and painless procedures.</p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="services-cta">
          <h2>Ready to Improve Your Smile?</h2>
          <p>Book your appointment today with our dental specialists.</p>

          <a href="/booking" className="cta-btn">
            Book Appointment
          </a>
        </div>

      </section>
    </motion.main>
  );
}

export default Services;