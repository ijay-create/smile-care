import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          🦷 SmileCare
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="nav-actions">
          <Link to="/booking" className="cta-btn">
            Book Appointment
          </Link>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="menu-btn"
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={location.pathname === link.path ? "active" : ""}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/booking"
              className="mobile-cta"
              onClick={() => setOpen(false)}
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

export default Navbar;