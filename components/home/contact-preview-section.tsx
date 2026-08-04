"use client";

import Link from "next/link";
import { isTelHref } from "@/lib/contact-links";
import { Mail, MapPin, Phone, Siren } from "lucide-react";
import { motion } from "framer-motion";

import { contactCards } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { IconBox } from "@/components/common/icon-box";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
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
    <Section variant="default" spacing="lg">
      <div className="space-y-12">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title="Get in Touch"
            description="Reach our team for appointments, referrals, or general inquiries. We are committed to responding promptly and clearly."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = iconMap[card.icon];
            const variant = variantMap[card.icon];

            return (
              <motion.div key={card.title} variants={fadeUp}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  variants={hoverLift}
                  className="h-full"
                >
                  <Card className="h-full border-cns-border/80 bg-white shadow-soft ring-0">
                    <CardContent className="space-y-4 px-6 py-8">
                      <IconBox icon={Icon} variant={variant} />
                      <div className="space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {card.title}
                        </p>
                        {isTelHref(card.href) || card.href.startsWith("mailto:") ? (
                          <a
                            href={card.href}
                            className="block font-heading text-lg font-semibold text-cns-navy transition-colors hover:text-primary"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <Link
                            href={card.href}
                            className="block font-heading text-lg font-semibold text-cns-navy transition-colors hover:text-primary"
                          >
                            {card.value}
                          </Link>
                        )}
                        <p className="text-sm text-muted-foreground">
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
          <div className="overflow-hidden rounded-3xl border border-cns-border/80 bg-muted shadow-soft">
            <div className="relative aspect-[16/7] w-full">
              <iframe
                title="Center for Neuroscience location map"
                src="https://maps.google.com/maps?q=Raipur+Chhattisgarh&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cns-border/40" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { ContactPreviewSection };
