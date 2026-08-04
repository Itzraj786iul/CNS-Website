"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Siren } from "lucide-react";
import { motion } from "framer-motion";

import { contactCards } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { IconBox } from "@/components/common/icon-box";
import { LocationMapPanel } from "@/components/common/location-map-panel";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { isTelHref } from "@/lib/contact-links";
import { fadeUp, hoverLift } from "@/lib/motion";

const iconMap = {
  phone: Phone,
  email: Mail,
  location: MapPin,
  emergency: Siren,
} as const;

const variantMap = {
  phone: "blue",
  email: "green",
  location: "orange",
  emergency: "orange",
} as const;

function ContactPreviewSection() {
  return (
    <Section variant="muted" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Reach Our Care Team"
            title="We Are Here When You Need Us"
            description="Whether you need an appointment, a referral, or directions to our campus — our team responds with clarity and care."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = iconMap[card.icon];
            const variant = variantMap[card.icon];

            return (
              <motion.div key={card.title} variants={fadeUp}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  variants={hoverLift}
                >
                  <Card className="card-premium card-premium-hover">
                    <CardContent className="space-y-2 px-4 py-4">
                      <IconBox icon={Icon} variant={variant} size="sm" />
                      <div className="space-y-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {card.title}
                        </p>
                        {isTelHref(card.href) || card.href.startsWith("mailto:") ? (
                          <a
                            href={card.href}
                            className="block font-heading text-sm font-semibold text-cns-navy transition-colors hover:text-primary"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <Link
                            href={card.href}
                            className="block font-heading text-sm font-semibold text-cns-navy transition-colors hover:text-primary"
                          >
                            {card.value}
                          </Link>
                        )}
                        <p className="line-clamp-2 text-[13px] leading-snug text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatedSection>

        <AnimatedSection>
          <LocationMapPanel showDirections directionsHref="/contact" />
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { ContactPreviewSection };
