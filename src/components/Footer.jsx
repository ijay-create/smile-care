import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>SmileCare</h2>
          <p>
            Premium dental care focused on healthy, confident smiles using
            modern technology and expert doctors.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/doctors">Doctors</a>
          <a href="/booking">Book Appointment</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3>Services</h3>

          <p>Teeth Cleaning</p>
          <p>Dental Implants</p>
          <p>Braces & Alignment</p>
          <p>Cosmetic Dentistry</p>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Lagos, Nigeria</p>
          <p>+234 801 234 5678</p>
          <p>info@smilecare.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 SmileCare Dental Clinic. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;