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
    <section className="py-8 md:py-10">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-primary via-primary to-secondary px-5 py-8 shadow-soft-lg sm:px-8 sm:py-9 lg:px-12 lg:py-10">
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
              className="relative z-10 mx-auto max-w-2xl space-y-6 text-center"
            >
              <div className="space-y-3">
                <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-white sm:text-[1.75rem] lg:text-[2.125rem] lg:leading-[1.12]">
                  Book Your Consultation
                </h2>
                <p className="text-sm leading-[1.75] text-white/90 sm:text-base">
                  A care coordinator will help you find the right specialist,
                  prepare your records, and answer any questions — usually within
                  one business day.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  nativeButton={false}
                  render={
                    <Link href="/appointment">
                      <CalendarDays />
                      Book Your Consultation
                    </Link>
                  }
                  size="lg"
                  className="h-11 min-w-[11rem] rounded-full bg-white px-7 text-primary shadow-soft hover:bg-white/90"
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
                    className="h-11 rounded-full border-white/30 bg-white/10 px-7 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
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
                    className="h-11 rounded-full border-white/30 bg-white/10 px-7 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
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
