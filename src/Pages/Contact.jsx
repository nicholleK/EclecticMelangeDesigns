import React, { useState } from "react";
import "../Styles/Contact.css";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  buildWhatsAppLink,
  buildMailtoLink,
} from "../config/contact";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const composed = `Hi Eclectic Mélange Designs,\n\n${
    name ? `My name is ${name}.\n` : ""
  }${message}${email ? `\n\n(${email})` : ""}`;

  function handleWhatsApp() {
    window.open(buildWhatsAppLink(composed), "_blank", "noopener");
  }

  function handleEmail(e) {
    e.preventDefault();
    window.location.href = buildMailtoLink({
      subject: subject || `New enquiry${name ? ` from ${name}` : ""}`,
      body: composed,
    });
  }

  return (
    <section className="contact-page">
      <div className="contact-header">
        <p className="contact-eyebrow">Let's talk</p>
        <h1 className="contact-title">Start a conversation</h1>
        <div className="contact-underline" />
        <p className="contact-sub">
          Have a project, a question, or just want to say hello? We'd love to
          hear from you.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <a
            className="contact-info-card"
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <div>
              <p className="contact-info-label">WhatsApp</p>
              <p className="contact-info-value">Chat with us instantly</p>
            </div>
          </a>

          <a className="contact-info-card" href={buildMailtoLink()}>
            <i className="fa-solid fa-envelope"></i>
            <div>
              <p className="contact-info-label">Email</p>
              <p className="contact-info-value">{CONTACT_EMAIL}</p>
            </div>
          </a>

          <div className="contact-info-card">
            <i className="fa-solid fa-phone"></i>
            <div>
              <p className="contact-info-label">Phone</p>
              <p className="contact-info-value">{CONTACT_PHONE_DISPLAY}</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="Behance">
              <i className="fa-brands fa-behance"></i>
            </a>
            <a href="#" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </div>

        <form className="contact-form emd-form" onSubmit={handleEmail}>
          <div className="contact-form-row">
            <label className="emd-field">
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>
            <label className="emd-field">
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </label>
          </div>

          <label className="emd-field">
            <span>Subject</span>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What's this about?"
            />
          </label>

          <label className="emd-field">
            <span>Message</span>
            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project…"
            />
          </label>

          <div className="emd-form-actions">
            <button
              type="button"
              className="emd-btn emd-btn-whatsapp"
              onClick={handleWhatsApp}
            >
              <i className="fa-brands fa-whatsapp"></i> WhatsApp us
            </button>
            <button type="submit" className="emd-btn emd-btn-primary">
              <i className="fa-solid fa-paper-plane"></i> Send email
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
