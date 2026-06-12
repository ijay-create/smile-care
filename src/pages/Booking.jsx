import { useState } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../animations/pageTransition";

import BookingSlots from "../components/BookingSlots";
import AppointmentForm from "../components/AppointmentForm";

import "../styles/booking.css";

function Booking() {
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="booking-page"
    >

      {/* HERO */}
      <div className="booking-hero">
        <h1>Schedule Your Appointment</h1>
        <p>Select a doctor, choose a time slot, and confirm your visit instantly.</p>
      </div>

      {/* FLOW INDICATOR */}
      <div className="booking-steps">
        <div className="step active">
          <span>1</span> Select Slot
        </div>

        <div className="step">
          <span>2</span> Fill Details
        </div>

        <div className="step">
          <span>3</span> Confirm
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="booking-grid">

        {/* SLOTS */}
        <div className="booking-card">
          <h2>Available Slots</h2>

          <BookingSlots
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        </div>

        {/* FORM + SUMMARY */}
        <div className="booking-card">

          <h2>Patient Details</h2>

          <AppointmentForm selectedSlot={selectedSlot} />

          {/* SUMMARY */}
          {selectedSlot && (
            <div className="booking-summary">
              <h3>Booking Summary</h3>
              <p><strong>Time:</strong> {selectedSlot}</p>
              <p><strong>Doctor:</strong> Available</p>
            </div>
          )}

        </div>

      </div>

    </motion.main>
  );
}

export default Booking;