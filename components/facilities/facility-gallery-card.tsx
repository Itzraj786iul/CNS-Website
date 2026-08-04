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
    large: "min-h-[220px] md:min-h-[300px]",
    medium: "min-h-[200px] md:min-h-[260px]",
    small: "min-h-[180px]",
  } as const;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn(sizeClasses[facility.size])}
    >
      <Card className="group relative overflow-hidden rounded-2xl card-premium card-premium-hover ring-0">
        <div className={cn("relative w-full overflow-hidden", aspectClasses[facility.size])}>
          <Image
            src={facility.image}
            alt={`${facility.title} facility at CNS`}
            fill
            className="object-cover img-zoom"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
          <CardContent className="absolute inset-x-0 bottom-0 space-y-2 p-5">
            <IconBox icon={facility.icon} variant={facility.iconVariant} size="default" className="bg-white/15 text-white backdrop-blur-sm [&_svg]:text-white" />
            <div>
              <h3 className="font-heading text-lg font-semibold text-white">{facility.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/80">{facility.description}</p>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

export { FacilityGalleryCard };
