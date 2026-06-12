import { Link } from "react-router-dom";
import "../styles/cta-section.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready for a Healthier Smile?</h2>

        <p>
          Schedule your appointment today and receive expert dental care from
          our experienced team.
        </p>

        <Link to="/booking" className="cta-btn">
          Book Appointment
        </Link>
      </div>
    </section>
  );
}

export default CTASection;