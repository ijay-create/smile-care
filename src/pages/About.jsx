import { motion } from "framer-motion";
import { pageVariants } from "../animations/pageTransition";

import "../styles/about.css";

function About() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="about-page">

        {/* HERO SECTION */}
        <div className="about-hero">
          <h1>About SmileCare Clinic</h1>
          <p>
            We are a modern dental clinic committed to restoring smiles,
            improving confidence, and delivering world-class dental care using
            advanced technology.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="about-grid">

          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              To provide affordable, high-quality dental care using modern
              equipment while ensuring patient comfort and trust.
            </p>
          </div>

          <div className="about-card">
            <h2>Our Vision</h2>
            <p>
              To become one of the leading dental care providers in Africa,
              known for excellence, innovation, and patient satisfaction.
            </p>
          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="about-why">

          <h2>Why Choose SmileCare?</h2>

          <ul>
            <li>✔ Experienced certified dentists</li>
            <li>✔ Modern dental equipment & technology</li>
            <li>✔ Pain-free treatment approach</li>
            <li>✔ Affordable pricing plans</li>
            <li>✔ Clean, safe & comfortable environment</li>
          </ul>

        </div>

        {/* STATS SECTION */}
        <div className="about-stats">

          <div className="stat">
            <h3>10K+</h3>
            <p>Patients Treated</p>
          </div>

          <div className="stat">
            <h3>15+</h3>
            <p>Expert Dentists</p>
          </div>

          <div className="stat">
            <h3>8+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat">
            <h3>100%</h3>
            <p>Patient Satisfaction</p>
          </div>

        </div>

        {/* CTA */}
        <div className="about-cta">
          <h2>Ready to Transform Your Smile?</h2>
          <p>Book an appointment today and meet our dental experts.</p>

          <a href="/booking" className="cta-btn">
            Book Appointment
          </a>
        </div>

      </section>
    </motion.main>
  );
}

export default About;