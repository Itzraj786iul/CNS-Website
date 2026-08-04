"use client";

import { Siren } from "lucide-react";

import { IconBox } from "@/components/common/icon-box";
import { Button } from "@/components/ui/button";
import { getEmergencyTelHref } from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

type EmergencyBannerProps = {
  className?: string;
  title?: string;
  description?: string;
};

function EmergencyBanner({
  className,
  title = "24×7 Emergency Support",
  description = "Stroke symptoms, severe headache, seizures, or head injury — call our emergency line immediately. Every minute counts in neurological emergencies.",
}: EmergencyBannerProps) {
  const emergencyHref = getEmergencyTelHref();

  return (
    <div
      data-slot="emergency-banner"
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 footer-surface px-5 py-6 shadow-soft-lg sm:px-8 sm:py-7",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-destructive/20 blur-3xl"
      />
      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3.5">
          <IconBox
            icon={Siren}
            variant="white"
            className="bg-destructive/20 text-white [&_svg]:animate-emergency-pulse"
          />
          <div>
            <h2 className="font-heading text-lg font-semibold text-white sm:text-xl">
              {title}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/88 sm:text-base">
              {description}
            </p>
            <a
              href={emergencyHref}
              className="mt-3 inline-block font-heading text-lg font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
            >
              {siteConfig.contact.emergency}
            </a>
          </div>
        </div>
        <Button
          nativeButton={false}
          render={
            <a href={emergencyHref}>
              <Siren />
              Emergency Assistance
            </a>
          }
          variant="destructiveSolid"
          className="h-11 shrink-0 rounded-full px-6"
        />
      </div>
    </div>
  );
}

export { EmergencyBanner };
