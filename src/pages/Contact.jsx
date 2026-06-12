import { motion } from "framer-motion";
import { pageVariants } from "../animations/pageTransition";

import "../styles/contact.css";

function Contact() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="contact-page"
    >

      {/* HERO */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re always here to support your dental care journey.</p>
      </div>

      {/* CONTACT GRID */}
      <div className="contact-grid">

        <div className="contact-card">
          <div className="icon">📍</div>
          <h3>Our Address</h3>
          <p>12 Dental Avenue, Lagos, Nigeria</p>
        </div>

        <div className="contact-card">
          <div className="icon">📞</div>
          <h3>Call Us</h3>
          <p>+234 801 234 5678</p>
        </div>

        <div className="contact-card">
          <div className="icon">📧</div>
          <h3>Email</h3>
          <p>info@smilecare.com</p>
        </div>

      </div>

      {/* MAP SECTION */}
      <div className="map-section">

        <iframe
          title="clinic-map"
          src="https://www.google.com/maps/embed?pb="
          loading="lazy"
          allowFullScreen
        />

      </div>

    </motion.main>
  );
}

export default Contact;