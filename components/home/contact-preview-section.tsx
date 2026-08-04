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
    <Section variant="muted" spacing="xl" className="!pb-28 md:!pb-32">
      <div className="space-y-14">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Reach Our Care Team"
            title="We Are Here When You Need Us"
            description="Whether you need an appointment, a referral, or directions to our campus — our team responds with clarity and care."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                  <Card className="card-premium card-premium-hover h-full">
                    <CardContent className="space-y-5 px-7 py-9">
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
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="image-placeholder overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:min-h-[320px] lg:h-full">
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

            <Card className="card-premium card-premium-hover flex h-full ring-0">
              <CardContent className="flex h-full flex-col justify-center space-y-6 px-6 py-8 sm:px-8">
                <div className="space-y-3">
                  <IconBox icon={MapPin} variant="orange" />
                  <h3 className="font-heading text-2xl font-semibold text-cns-navy">
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
                  className="h-11 w-fit rounded-full border-cns-border px-6"
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
