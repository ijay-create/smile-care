import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/services.css";

function ServiceCard({ image, title, description, category }) {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/booking", {
      state: {
        service: title,
      },
    });
  };

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >

      {/* IMAGE WRAPPER */}
      <div className="service-image">

        <img src={image} alt={title} />

        {/* CATEGORY */}
        {category && (
          <span className="service-badge">
            {category}
          </span>
        )}

        {/* OVERLAY BUTTON */}
        <div className="service-overlay">
          <button
            className="service-btn"
            onClick={handleBook}
          >
            Book Now
          </button>
        </div>

      </div>

      {/* CONTENT */}
      <div className="service-content">

        <h3 className="service-title">
          {title}
        </h3>

        <p className="service-description">
          {description}
        </p>

      </div>

    </motion.div>
  );
}

export default ServiceCard;