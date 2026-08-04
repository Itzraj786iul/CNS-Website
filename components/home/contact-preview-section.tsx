"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Siren } from "lucide-react";
import { motion } from "framer-motion";

import { contactCards } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { IconBox } from "@/components/common/icon-box";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { isTelHref } from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";
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
                >
                  <Card className="card-premium card-premium-hover">
                    <CardContent className="space-y-3 px-4 py-5 sm:px-5">
                      <IconBox icon={Icon} variant={variant} />
                      <div className="space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {card.title}
                        </p>
                        {isTelHref(card.href) || card.href.startsWith("mailto:") ? (
                          <a
                            href={card.href}
                            className="block font-heading text-base font-semibold text-cns-navy transition-colors hover:text-primary"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <Link
                            href={card.href}
                            className="block font-heading text-base font-semibold text-cns-navy transition-colors hover:text-primary"
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
          <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
            <div className="image-placeholder overflow-hidden rounded-3xl">
              <div className="relative h-40 w-full sm:h-44">
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

            <Card className="card-premium card-premium-hover ring-0">
              <CardContent className="space-y-4 px-4 py-5 sm:px-5">
                <div className="space-y-2.5">
                  <IconBox icon={MapPin} variant="orange" />
                  <h3 className="font-heading text-xl font-semibold text-cns-navy">
                    Visit {siteConfig.shortName}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {siteConfig.contact.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.location} · Parking and wheelchair access available
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <span className="font-medium text-cns-navy">Outpatient:</span>{" "}
                    {siteConfig.hours.outpatient}
                  </li>
                  <li>
                    <span className="font-medium text-cns-navy">Emergency:</span>{" "}
                    {siteConfig.hours.emergency}
                  </li>
                </ul>
                <Button
                  nativeButton={false}
                  render={
                    <Link href="/contact">
                      Get Directions
                      <ArrowRight />
                    </Link>
                  }
                  variant="outline"
                    className="h-11 w-fit rounded-full border-border px-6 font-semibold text-cns-navy hover:border-primary/35 hover:bg-primary/5"
                />
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { ContactPreviewSection };
