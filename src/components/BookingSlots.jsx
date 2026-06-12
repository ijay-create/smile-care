import { useState } from "react";
import { motion } from "framer-motion";

import "../styles/schedule.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Williams",
    specialty: "Cosmetic Dentistry",
  },
  {
    id: 2,
    name: "Dr. Michael Adams",
    specialty: "Dental Implants",
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    specialty: "Orthodontics",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

function BookingSlots() {
  const [booking, setBooking] = useState({
    doctor: doctors[0],
    date: "",
    time: "",
  });

  const selectDoctor = (doctor) => {
    setBooking((prev) => ({ ...prev, doctor }));
  };

  const selectTime = (time) => {
    setBooking((prev) => ({ ...prev, time }));
  };

  const selectDate = (e) => {
    setBooking((prev) => ({ ...prev, date: e.target.value }));
  };

  return (
    <motion.section
      className="booking-slots"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      {/* HEADER */}
      <div className="booking-slots-header">
        <h2>Select Your Appointment</h2>
        <p>Choose a doctor, date, and available time slot.</p>
      </div>

      {/* DOCTOR SELECT (CARD STYLE) */}
      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className={`doctor-card ${
              booking.doctor.id === doctor.id ? "active" : ""
            }`}
            onClick={() => selectDoctor(doctor)}
          >
            <h4>{doctor.name}</h4>
            <p>{doctor.specialty}</p>
          </div>
        ))}
      </div>

      {/* DATE + TIME */}
      <div className="booking-controls">

        <div className="field">
          <label>Select Date</label>
          <input type="date" value={booking.date} onChange={selectDate} />
        </div>

      </div>

      {/* TIME SLOTS */}
      <div className="slots-container">
        {timeSlots.map((slot) => (
          <button
            key={slot}
            className={`slot-btn ${
              booking.time === slot ? "active" : ""
            }`}
            onClick={() => selectTime(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="appointment-summary">

        <h3>Appointment Summary</h3>

        <p>
          <strong>Doctor:</strong> {booking.doctor.name}
        </p>

        <p>
          <strong>Specialty:</strong> {booking.doctor.specialty}
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {booking.date || "Select a date"}
        </p>

        <p>
          <strong>Time:</strong>{" "}
          {booking.time || "Select a time"}
        </p>

      </div>

    </motion.section>
  );
}

export default BookingSlots;