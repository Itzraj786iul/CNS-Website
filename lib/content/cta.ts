import { getWhatsAppUrl } from "@/lib/contact-links";

/** Standard secondary CTA for WhatsApp across page data files */
export function standardWhatsAppCta() {
  return {
    secondaryLabel: "Chat With Our Care Team",
    secondaryHref: getWhatsAppUrl(),
  } as const;
}

/** Standard appointment CTA labels */
export const standardAppointmentCta = {
  primaryLabel: "Book Your Consultation",
  primaryHref: "/appointment",
} as const;
