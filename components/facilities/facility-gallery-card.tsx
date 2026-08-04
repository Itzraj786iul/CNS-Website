"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { FacilityItem } from "@/components/facilities/data";
import { IconBox } from "@/components/common/icon-box";
import { Card, CardContent } from "@/components/ui/card";
import {
  CARD_VARIANT_DEFAULT,
  type CardVariant,
  cardDescClamp,
  cardIconSize,
} from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
} as const;

const aspectByVariant: Record<
  CardVariant,
  Record<FacilityItem["size"], string>
> = {
  compact: {
    large: "min-h-[100px] md:min-h-[130px]",
    medium: "min-h-[90px] md:min-h-[120px]",
    small: "min-h-[80px]",
  },
  standard: {
    large: "min-h-[120px] md:min-h-[160px]",
    medium: "min-h-[110px] md:min-h-[140px]",
    small: "min-h-[100px]",
  },
  detailed: {
    large: "min-h-[140px] md:min-h-[180px]",
    medium: "min-h-[130px] md:min-h-[160px]",
    small: "min-h-[120px]",
  },
};

function FacilityGalleryCard({
  facility,
  variant = CARD_VARIANT_DEFAULT,
}: {
  facility: FacilityItem;
  variant?: CardVariant;
}) {
  const isCompact = variant === "compact";
  const captionPad = isCompact ? "p-3" : "p-3.5";

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn(sizeClasses[facility.size])}
    >
      <Card className="group relative overflow-hidden rounded-[20px] card-premium card-premium-hover ring-0">
        <div
          className={cn(
            "relative w-full overflow-hidden",
            aspectByVariant[variant][facility.size]
          )}
        >
          <Image
            src={facility.image}
            alt={`${facility.title} facility at CNS`}
            fill
            className="object-cover img-zoom"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
          <CardContent className={cn("absolute inset-x-0 bottom-0 space-y-1.5", captionPad)}>
            <IconBox
              icon={facility.icon}
              variant={facility.iconVariant}
              size={cardIconSize[variant]}
              className="bg-white/15 text-white backdrop-blur-sm [&_svg]:text-white"
            />
            <div>
              <h3
                className={cn(
                  "font-heading font-semibold text-white",
                  isCompact ? "text-xs" : "text-sm"
                )}
              >
                {facility.title}
              </h3>
              <p
                className={cn(
                  "mt-1 text-xs leading-snug text-white/80",
                  cardDescClamp[variant]
                )}
              >
                {facility.description}
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

export { FacilityGalleryCard };
