"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { IconBox } from "@/components/common/icon-box";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

type ScheduleItem = {
  label: string;
  hours: string;
};

type LocationMapPanelProps = {
  className?: string;
  hours?: readonly ScheduleItem[];
  showDirections?: boolean;
  directionsHref?: string;
};

function LocationMapPanel({
  className,
  hours,
  showDirections = false,
  directionsHref = "/contact",
}: LocationMapPanelProps) {
  const schedule =
    hours ??
    ([
      { label: "Outpatient", hours: siteConfig.hours.outpatient },
      { label: "Emergency", hours: siteConfig.hours.emergency },
      { label: "Diagnostics", hours: siteConfig.hours.diagnostics },
    ] satisfies ScheduleItem[]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border border-border bg-card shadow-soft",
        className
      )}
    >
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[160px] sm:min-h-[180px] lg:min-h-[220px]">
          <iframe
            title="Center for Neuroscience location"
            src="https://maps.google.com/maps?q=Raipur+Chhattisgarh&output=embed"
            className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-col justify-center gap-3.5 border-t border-border p-5 sm:p-6 lg:border-t-0 lg:border-l">
          <div className="space-y-2">
            <IconBox icon={MapPin} variant="orange" size="sm" />
            <h3 className="font-heading text-lg font-semibold text-cns-navy">
              Visit {siteConfig.shortName}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.contact.address}
            </p>
            <p className="text-xs text-muted-foreground">
              {siteConfig.location} · Parking and wheelchair access available
            </p>
          </div>
          <ul className="space-y-2 border-t border-border/70 pt-3">
            {schedule.map((item) => (
              <li
                key={item.label}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span className="text-sm font-medium text-cns-navy">{item.label}</span>
                <span className="text-sm text-muted-foreground">{item.hours}</span>
              </li>
            ))}
          </ul>
          {showDirections ? (
            <Button
              nativeButton={false}
              render={
                <Link href={directionsHref}>
                  Get Directions
                  <ArrowRight />
                </Link>
              }
              variant="outline"
              className="h-[46px] w-fit rounded-full px-5"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export { LocationMapPanel };
