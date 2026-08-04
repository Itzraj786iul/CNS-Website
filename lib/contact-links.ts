import { siteConfig } from "@/lib/constants/site";

export const WHATSAPP_URL =
  "https://wa.me/917389321886?text=Hello%20I%20would%20like%20to%20know%20more%20about%20the%20services%20offered%20by%20Center%20for%20Neuroscience.";

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
