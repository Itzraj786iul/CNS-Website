"use client";

import * as React from "react";
import Link from "next/link";
import { MapPin, Phone, Siren, X } from "lucide-react";

import { Container } from "@/components/common/container";
import {
  getAppointmentDisplay,
  getAppointmentTelHref,
  getEmergencyTelHref,
  isTelHref,
} from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

type AnnouncementBarProps = {
  className?: string;
};

function AnnouncementBar({ className }: AnnouncementBarProps) {
  const [isDismissed, setIsDismissed] = React.useState(false);
  const appointmentHref = getAppointmentTelHref();
  const appointmentDisplay = getAppointmentDisplay();
  const emergencyHref = getEmergencyTelHref();

  if (isDismissed) {
    return null;
  }

  return (
    <div
      data-slot="announcement-bar"
      className={cn("relative bg-primary text-white", className)}
    >
      <Container className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 py-2 pr-10 text-center text-xs sm:gap-x-5 sm:text-sm">
        <a
          href={emergencyHref}
          className="inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 font-semibold text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:px-3"
        >
          <Siren className="size-3.5 shrink-0" aria-hidden="true" />
          <span className="hidden min-[360px]:inline">24×7 Emergency:</span>
          <span className="font-bold underline decoration-white/40 underline-offset-2">
            {siteConfig.contact.emergency}
          </span>
        </a>

        <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden="true" />

        {isTelHref(appointmentHref) ? (
          <a
            href={appointmentHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/95 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <Phone className="size-3.5 shrink-0" aria-hidden="true" />
            <span>Appointments:</span>
            <span className="font-semibold">{appointmentDisplay}</span>
          </a>
        ) : (
          <Link
            href={appointmentHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/95 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <Phone className="size-3.5 shrink-0" aria-hidden="true" />
            <span>Appointments:</span>
            <span className="font-semibold">{appointmentDisplay}</span>
          </Link>
        )}

        <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden="true" />

        <span className="hidden min-[480px]:inline-flex items-center gap-1.5 font-medium text-white/90">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          <span className="truncate max-w-[10rem] sm:max-w-none">{siteConfig.location}</span>
        </span>

        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="absolute right-4 rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label="Dismiss announcement"
        >
          <X className="size-4" />
        </button>
      </Container>
    </div>
  );
}

export { AnnouncementBar };
