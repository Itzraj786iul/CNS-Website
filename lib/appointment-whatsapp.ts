import { siteConfig } from "@/lib/constants/site";

export type AppointmentBooking = {
  name: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
};

/** Normalize to digits; default Indian numbers to country code 91 */
export function normalizePhoneForWhatsApp(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

export function formatAppointmentWhatsAppMessage(booking: AppointmentBooking): string {
  const lines = [
    "*Appointment Request — Center for Neuroscience*",
    "",
    `*Patient Name:* ${booking.name}`,
    `*Phone:* ${booking.phone}`,
    `*Email:* ${booking.email}`,
    `*Department:* ${booking.department}`,
    `*Doctor:* ${booking.doctor}`,
    `*Preferred Date:* ${booking.date}`,
    `*Preferred Time:* ${booking.time}`,
  ];

  if (booking.message.trim()) {
    lines.push(`*Message:* ${booking.message.trim()}`);
  }

  lines.push("", "Sent via cns.org appointment form");
  return lines.join("\n");
}

/** Opens WhatsApp chat with CNS; patient sends from the number they entered */
export function getAppointmentWhatsAppUrl(booking: AppointmentBooking): string {
  const hospitalNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(formatAppointmentWhatsAppMessage(booking));
  return `https://wa.me/${hospitalNumber}?text=${text}`;
}

export function openAppointmentWhatsApp(booking: AppointmentBooking): boolean {
  const url = getAppointmentWhatsAppUrl(booking);
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) {
    window.location.href = url;
    return true;
  }
  return true;
}
