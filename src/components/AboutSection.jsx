import { motion } from "framer-motion";

import doctorImage from "../assets/about/doctor.jpg";
import clinicVideo from "../assets/about/clinic-video.mp4";

import "../styles/about-section.css";

function AboutSection() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "10k+", label: "Happy Patients" },
    { value: "25", label: "Dental Experts" },
  ];

  return (
    <section className="about-section">

      {/* IMAGE */}
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -80, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={doctorImage} alt="Dental doctor" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Advanced Dental Care</h2>

        <p>
          At SmileCare, we combine modern technology, experienced specialists,
          and personalized treatment to deliver exceptional dental experiences
          with comfort and precision.
        </p>

        {/* STATS */}
        <div className="stats">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* VIDEO */}
      <motion.div
        className="clinic-video"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <video src={clinicVideo} autoPlay muted loop playsInline />
      </motion.div>

    </section>
  );
}

export default AboutSection;