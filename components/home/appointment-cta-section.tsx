"use client";

import { CalendarDays, Phone } from "lucide-react";

import { CTASection } from "@/components/common/cta-section";
import { getAppointmentTelHref } from "@/lib/contact-links";

function AppointmentCtaSection() {
  const appointmentHref = getAppointmentTelHref();

  return (
    <CTASection
      variant="brand"
      size="hero"
      align="center"
      title="Book Your Consultation"
      description="A care coordinator will help you find the right specialist, prepare your records, and answer any questions — usually within one business day."
      primaryAction={{
        label: "Book Your Consultation",
        href: "/appointment",
        icon: <CalendarDays />,
      }}
      secondaryAction={{
        label: "Talk to a Coordinator",
        href: appointmentHref,
        icon: <Phone />,
      }}
    />
  );
}

export { AppointmentCtaSection };
