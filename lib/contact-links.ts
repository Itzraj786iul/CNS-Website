import { siteConfig } from "@/lib/constants/site";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to know more about the services offered by Center for Neuroscience."
);

export function getWhatsAppUrl() {
  const number = siteConfig.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${WHATSAPP_MESSAGE}`;
}

/** @deprecated Use getWhatsAppUrl() */
export const WHATSAPP_URL = getWhatsAppUrl();

export function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function getEmergencyTelHref() {
  return toTelHref(siteConfig.contact.emergency);
}

export function getAppointmentTelHref() {
  return siteConfig.contact.phone
    ? toTelHref(siteConfig.contact.phone)
    : "/appointment";
}

export function getAppointmentDisplay() {
  return siteConfig.contact.phone ?? "Book Online";
}

export function isTelHref(href: string) {
  return href.startsWith("tel:");
}

export function getMapsEmbedUrl() {
  const { maps, contact } = siteConfig;
  if (maps.embedUrl) return maps.embedUrl;
  if (maps.lat !== null && maps.lng !== null) {
    return `https://maps.google.com/maps?q=${maps.lat},${maps.lng}&z=15&output=embed`;
  }
  return `https://maps.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;
}

export function getMapsDirectionsUrl() {
  const { maps, contact } = siteConfig;
  if (maps.directionsUrl) return maps.directionsUrl;
  if (maps.lat !== null && maps.lng !== null) {
    return `https://www.google.com/maps/dir/?api=1&destination=${maps.lat},${maps.lng}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.address)}`;
}

export function getMailtoHref(email: string) {
  return `mailto:${email}`;
}
