import { useState } from "react";
import { motion } from "framer-motion";

import "../styles/booking.css";

function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment request sent!");
  };

  return (
    <motion.form
      className="booking-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      <h2>Book Appointment</h2>

      {/* GRID FIELDS */}
      <div className="form-grid">

        <div className="field">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="+234..."
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

      </div>

      {/* MESSAGE */}
      <div className="field full">
        <label>Message (Optional)</label>
        <textarea
          name="message"
          placeholder="Describe your dental issue..."
          value={form.message}
          onChange={handleChange}
        />
      </div>

      {/* SUBMIT */}
      <button type="submit" className="booking-btn">
        Submit Appointment Request
      </button>

    </motion.form>
  );
}

export default AppointmentForm;