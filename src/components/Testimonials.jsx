import "../styles/testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Amina K.",
      text: "Best dental experience I’ve ever had. Very professional team!",
    },
    {
      name: "John D.",
      text: "Clean clinic, modern equipment, and excellent service.",
    },
    {
      name: "Sarah M.",
      text: "They completely fixed my smile. Highly recommended!",
    },
  ];

  return (
    <section className="testimonials">
      <div className="section-header">
        <h2>What Our Patients Say</h2>
        <p>Real feedback from happy patients</p>
      </div>

      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <p className="text">"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;