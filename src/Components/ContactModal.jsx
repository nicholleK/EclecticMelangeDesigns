import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { buildWhatsAppLink, buildMailtoLink } from "../config/contact";

function ContactModal({ show, onHide }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const composed = `Hi Eclectic Mélange Designs,%0A%0A${
    name ? `My name is ${name}.%0A` : ""
  }${message}${email ? `%0A%0A(${email})` : ""}`.replace(/%0A/g, "\n");

  function handleWhatsApp() {
    window.open(buildWhatsAppLink(composed), "_blank", "noopener");
  }

  function handleEmail(e) {
    e.preventDefault();
    window.location.href = buildMailtoLink({
      subject: `New enquiry${name ? ` from ${name}` : ""}`,
      body: composed,
    });
  }

  return (
    <>
      <div className="modal-backdrops" />
      <Modal
        show={show}
        onHide={onHide}
        centered
        className="emd-modal"
        contentClassName="emd-modal-content"
      >
        <Modal.Header closeButton className="emd-modal-header">
          <div>
            <p className="emd-modal-eyebrow">Get in touch</p>
            <Modal.Title className="emd-modal-title">
              Let's create something together
            </Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body className="emd-modal-body">
          <form className="emd-form" onSubmit={handleEmail}>
            <label className="emd-field">
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                autoFocus
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

            <label className="emd-field">
              <span>Message</span>
              <textarea
                rows={4}
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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactModal;
