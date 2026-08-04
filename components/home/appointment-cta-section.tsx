"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";

function AppointmentCtaSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-[#2a8fd4] to-secondary px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-16 size-80 rounded-full bg-white/10 blur-3xl"
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-2xl space-y-6 text-center"
            >
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Take the Next Step?
              </h2>
              <p className="text-base leading-relaxed text-white/85 sm:text-lg">
                Schedule a consultation with our specialists. Whether you need
                an urgent evaluation or a planned visit, we are here to help.
              </p>
              <Button
                nativeButton={false}
                render={
                  <Link href="/appointment">
                    <CalendarDays />
                    Book Appointment
                  </Link>
                }
                size="lg"
                className="h-12 bg-white px-8 text-primary hover:bg-white/90"
              />
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export { AppointmentCtaSection };
