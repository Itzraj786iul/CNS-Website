"use client";

import { CalendarDays, Phone } from "lucide-react";

import { CTASection } from "@/components/common/cta-section";
import { getAppointmentTelHref } from "@/lib/contact-links";

function AppointmentCtaSection() {
  const appointmentHref = getAppointmentTelHref();

  return (
    <CTASection
      variant="brand"
      size="compact"
      align="center"
      title="Book Your Consultation"
      description="Our care coordinator will connect you with the right specialist — usually within one business day."
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
