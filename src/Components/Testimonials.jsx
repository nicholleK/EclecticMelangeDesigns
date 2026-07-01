import React from "react";
import Reveal from "./Reveal";
import "../Styles/Testimonials.css";

// TODO: replace with real client quotes.
const TESTIMONIALS = [
  {
    quote:
      "They translated a vague idea into a space that finally feels like us. Every detail was considered.",
    name: "A. Mokoena",
    role: "Homeowner, Lumen Loft",
  },
  {
    quote:
      "The team gets brand. Our new identity looks premium and still feels completely ours.",
    name: "T. van Wyk",
    role: "Founder, Maré",
  },
  {
    quote:
      "Fast, thoughtful, and genuinely collaborative. The app design exceeded what we pitched.",
    name: "S. Naidoo",
    role: "Product Lead, Práçe",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <p className="testimonials-eyebrow">Kind words</p>
        <h2 className="testimonials-title">What clients say</h2>
        <div className="testimonials-underline" />
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <Reveal className="testimonial-card" key={t.name} delay={i * 120}>
            <i className="fa-solid fa-quote-left testimonial-mark"></i>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-person">
              <span className="testimonial-name">{t.name}</span>
              <span className="testimonial-role">{t.role}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
