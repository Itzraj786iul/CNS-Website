"use client";

import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { getAppointmentTelHref, isTelHref } from "@/lib/contact-links";
import { fadeUp } from "@/lib/motion";

function AppointmentCtaSection() {
  const appointmentHref = getAppointmentTelHref();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-primary via-primary to-secondary px-7 py-16 shadow-soft-lg sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-16 size-80 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="hero-light-beam pointer-events-none absolute inset-0 opacity-40"
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-2xl space-y-8 text-center"
            >
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.875rem] lg:leading-[1.1]">
                  Book Your Consultation
                </h2>
                <p className="text-base leading-[1.85] text-white/90 sm:text-lg">
                  A care coordinator will help you find the right specialist,
                  prepare your records, and answer any questions — usually within
                  one business day.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  nativeButton={false}
                  render={
                    <Link href="/appointment">
                      <CalendarDays />
                      Book Your Consultation
                    </Link>
                  }
                  size="lg"
                  className="h-12 min-w-[11rem] rounded-full bg-white px-8 text-primary shadow-soft hover:bg-white/90"
                />
                {isTelHref(appointmentHref) ? (
                  <Button
                    nativeButton={false}
                    render={
                      <a href={appointmentHref}>
                        <Phone />
                        Talk to a Coordinator
                      </a>
                    }
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                  />
                ) : (
                  <Button
                    nativeButton={false}
                    render={
                      <Link href={appointmentHref}>
                        <Phone />
                        Talk to a Coordinator
                      </Link>
                    }
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export { AppointmentCtaSection };
