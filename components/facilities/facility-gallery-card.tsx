"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { FacilityItem } from "@/components/facilities/data";
import { IconBox } from "@/components/common/icon-box";
import { Card, CardContent } from "@/components/ui/card";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

function FacilityGalleryCard({ facility }: { facility: FacilityItem }) {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  } as const;

  const aspectClasses = {
    large: "min-h-[320px] md:min-h-[480px]",
    medium: "min-h-[280px] md:min-h-[480px]",
    small: "min-h-[240px]",
  } as const;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", sizeClasses[facility.size])}
    >
      <Card className="group relative h-full overflow-hidden rounded-3xl card-premium card-premium-hover ring-0">
        <div className={cn("relative w-full overflow-hidden", aspectClasses[facility.size])}>
          <Image
            src={facility.image}
            alt={`${facility.title} facility at CNS`}
            fill
            className="object-cover img-zoom"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-cns-navy/85 via-cns-navy/30 to-transparent" />
          <CardContent className="absolute inset-x-0 bottom-0 space-y-3 p-6">
            <IconBox icon={facility.icon} variant={facility.iconVariant} size="default" className="bg-white/15 text-white backdrop-blur-sm [&_svg]:text-white" />
            <div>
              <h3 className="font-heading text-xl font-semibold text-white">{facility.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{facility.description}</p>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

export { FacilityGalleryCard };
