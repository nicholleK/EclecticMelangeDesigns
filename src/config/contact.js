// TODO: Replace these placeholders with your real details.
// WhatsApp number must be in international format, digits only (no +, spaces or dashes).
// Example for South Africa: "27821234567"
export const WHATSAPP_NUMBER = "27000000000";
export const CONTACT_EMAIL = "hello@eclecticmelange.com";
export const CONTACT_PHONE_DISPLAY = "+27 00 000 0000";

// Builds a wa.me link with an optional pre-filled message.
export function buildWhatsAppLink(message = "") {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Builds a mailto link with an optional subject and body.
export function buildMailtoLink({ subject = "", body = "" } = {}) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${CONTACT_EMAIL}?${query}` : `mailto:${CONTACT_EMAIL}`;
}
