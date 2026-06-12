import { motion } from "framer-motion";
import { pageVariants } from "../animations/pageTransition";

import DoctorCard from "../components/DoctorCard";

import doctor1 from "../assets/doctors/doctor1.jpg";
import doctor2 from "../assets/doctors/doctor2.jpg";
import doctor3 from "../assets/doctors/doctor3.jpg";

import "../styles/doctors.css";

function Doctors() {
  const doctors = [
    {
      image: doctor1,
      name: "Dr. Sarah Williams",
      role: "Cosmetic Dentistry Specialist",
    },
    {
      image: doctor2,
      name: "Dr. Michael Adams",
      role: "Dental Implant Surgeon",
    },
    {
      image: doctor3,
      name: "Dr. Emily Carter",
      role: "Orthodontics Specialist",
    },
  ];

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="doctors-page">
        <div className="doctors-header">
          <h1>Meet Our Doctors</h1>
          <p>
            Our experienced dental professionals provide exceptional care using
            modern techniques.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default Doctors;