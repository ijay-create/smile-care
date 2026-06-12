import { Link } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import "../styles/doctors-preview.css";

import doctor1 from "../assets/doctors/doctor1.jpg";
import doctor2 from "../assets/doctors/doctor2.jpg";
import doctor3 from "../assets/doctors/doctor3.jpg";

function DoctorsPreview() {
  const doctors = [
    {
      name: "Dr. Sarah Williams",
      specialty: "Cosmetic Dentistry",
      image: doctor1,
    },
    {
      name: "Dr. Michael Adams",
      specialty: "Dental Implants",
      image: doctor2,
    },
    {
      name: "Dr. Emily Carter",
      specialty: "Orthodontics",
      image: doctor3,
    },
  ];

  return (
    <section className="doctors-preview">
      <div className="section-header">
        <h2>Meet Our Specialists</h2>
        <p>Experienced dentists dedicated to your perfect smile.</p>
      </div>

      <div className="doctors-grid">
        {doctors.map((doc, index) => (
          <DoctorCard key={index} {...doc} />
        ))}
      </div>

      <div className="view-all">
        <Link to="/doctors">View All Doctors</Link>
      </div>
    </section>
  );
}

export default DoctorsPreview;