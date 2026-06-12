import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp.css";

function WhatsAppFloat() {
  const phoneNumber = "2348012345678";

  const message = "Hi, I would like to book a dental appointment.";
  const encodedMessage = encodeURIComponent(message);

  const [rippling, setRippling] = useState(false);

  const handleClick = () => {
    setRippling(true);
    setTimeout(() => setRippling(false), 400);
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noreferrer"
      className={`whatsapp-float ${rippling ? "ripple" : ""}`}
      onClick={handleClick}
    >

      {/* ONLINE DOT */}
      <span className="whatsapp-status" />

      {/* ICON */}
      <FaWhatsapp />

      {/* TOOLTIP */}
      <span className="whatsapp-tooltip">
        Chat with us
      </span>

    </a>
  );
}

export default WhatsAppFloat;