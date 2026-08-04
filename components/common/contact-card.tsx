"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { IconBox } from "@/components/common/icon-box";
import { Card, CardContent } from "@/components/ui/card";
import {
  resolveCardVariant,
  type ContentDensity,
} from "@/lib/design-system";
import type { CardVariant } from "@/lib/card-variants";
import { cardDescClamp, cardIconSize } from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ContactCardProps = {
  title: string;
  value: string;
  description?: string;
  href: string;
  icon: LucideIcon;
  iconVariant?: "blue" | "green" | "orange" | "navy";
  density?: ContentDensity | CardVariant;
  className?: string;
};

function ContactCard({
  title,
  value,
  description,
  href,
  icon: Icon,
  iconVariant = "blue",
  density = "preview",
  className,
}: ContactCardProps) {
  const variant = resolveCardVariant(density);
  const isExternal =
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  const content = (
    <Card className="card-premium card-premium-hover ring-0">
      <CardContent className="space-y-2 px-4 py-4">
        <IconBox icon={Icon} variant={iconVariant} size={cardIconSize[variant]} />
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {title}
          </p>
          <p className="font-heading text-sm font-semibold text-cns-navy">{value}</p>
          {description ? (
            <p className={cn("text-[13px] leading-snug text-muted-foreground", cardDescClamp[variant])}>
              {description}
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div initial="rest" whileHover="hover" variants={hoverLift} className={className}>
      {isExternal ? (
        <a href={href} className="block focus-visible:outline-none">
          {content}
        </a>
      ) : (
        <Link href={href} className="block focus-visible:outline-none">
          {content}
        </Link>
      )}
    </motion.div>
  );
}

export { ContactCard };
