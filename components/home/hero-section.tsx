"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { getAppointmentDisplay, getAppointmentTelHref, isTelHref } from "@/lib/contact-links";

import { heroStats } from "@/components/home/data";
import { Container } from "@/components/common/container";
import { StatisticsCard } from "@/components/common/statistics-card";
import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";

function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg lg:max-w-none">
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 top-8 size-48 rounded-full bg-primary/15 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-6 bottom-12 size-56 rounded-full bg-secondary/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-12 top-4 size-24 rounded-full bg-accent/15 blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-full items-center justify-center"
      >
        <svg
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full [filter:drop-shadow(0_20px_40px_rgba(31,124,198,0.15))]"
          aria-hidden="true"
        >
          <circle cx="240" cy="240" r="200" fill="url(#heroGradient)" opacity="0.12" />
          <circle cx="240" cy="240" r="160" stroke="#1F7CC6" strokeWidth="1.5" opacity="0.2" />
          <circle cx="240" cy="240" r="120" stroke="#7DBD24" strokeWidth="1.5" opacity="0.25" />
          <circle cx="240" cy="240" r="80" stroke="#F7941D" strokeWidth="1.5" opacity="0.3" />

          <path
            d="M240 120c-44 0-80 36-80 80 0 28 14 52 36 66-18 8-30 26-30 46 0 28 22 50 50 50h48c28 0 50-22 50-50 0-20-12-38-30-46 22-14 36-38 36-66 0-44-36-80-80-80z"
            fill="url(#brainGradient)"
          />
          <path
            d="M200 210c8-12 20-18 40-18s32 6 40 18"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M185 260c12 10 28 16 55 16s43-6 55-16"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.4"
          />

          <circle cx="160" cy="180" r="6" fill="#7DBD24" />
          <circle cx="320" cy="180" r="6" fill="#F7941D" />
          <circle cx="140" cy="260" r="5" fill="#1F7CC6" />
          <circle cx="340" cy="260" r="5" fill="#7DBD24" />
          <circle cx="240" cy="140" r="5" fill="#F7941D" />

          <line x1="160" y1="180" x2="200" y2="210" stroke="#7DBD24" strokeWidth="1.5" opacity="0.5" />
          <line x1="320" y1="180" x2="280" y2="210" stroke="#F7941D" strokeWidth="1.5" opacity="0.5" />
          <line x1="140" y1="260" x2="185" y2="260" stroke="#1F7CC6" strokeWidth="1.5" opacity="0.5" />
          <line x1="340" y1="260" x2="295" y2="260" stroke="#7DBD24" strokeWidth="1.5" opacity="0.5" />

          <defs>
            <linearGradient id="heroGradient" x1="40" y1="40" x2="440" y2="440">
              <stop stopColor="#1F7CC6" />
              <stop offset="1" stopColor="#7DBD24" />
            </linearGradient>
            <linearGradient id="brainGradient" x1="160" y1="120" x2="320" y2="362">
              <stop stopColor="#1F7CC6" />
              <stop offset="0.5" stopColor="#3A8FD4" />
              <stop offset="1" stopColor="#16324A" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-4 rounded-2xl border border-cns-border/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-sm"
        >
          <p className="text-xs font-medium text-muted-foreground">Neuro ICU</p>
          <p className="font-heading text-sm font-semibold text-cns-navy">24×7 Critical Care</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute right-0 top-16 rounded-2xl border border-cns-border/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-sm"
        >
          <p className="text-xs font-medium text-muted-foreground">3T MRI</p>
          <p className="font-heading text-sm font-semibold text-primary">Same-Day Imaging</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

function HeroSection() {
  const appointmentHref = getAppointmentTelHref();
  const appointmentDisplay = getAppointmentDisplay();

  const trustItems = [
    { icon: ShieldCheck, label: "24×7 Stroke & Trauma Response" },
    { icon: Stethoscope, label: "Subspecialist-Led Care" },
    { icon: Users, label: "Integrated Neuro Team" },
  ];

  return (
    <section className="relative overflow-hidden section-surface-default">
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/[0.06] via-transparent to-secondary/[0.05]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 size-[36rem] rounded-full bg-primary/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-secondary/[0.05] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hero-light-beam pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background via-background/80 to-transparent"
      />

      <Container className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center pb-36 pt-14 lg:min-h-[calc(100vh-6rem)] lg:pb-44 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-xl space-y-9"
          >
            <motion.div variants={fadeUp}>
              <Tag variant="blue" className="px-4 py-1.5 text-sm shadow-soft">
                Raipur · Brain &amp; Spine Specialists
              </Tag>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <h1 className="font-heading text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-cns-navy sm:text-5xl lg:text-[3.625rem] lg:leading-[1.04]">
                Center for{" "}
                <span className="text-gradient-brand">Neuroscience</span>
              </h1>
              <p className="prose-lead max-w-lg">
                From stroke emergencies to complex neurosurgery — subspecialist
                care, advanced imaging, and a team that sees the person behind
                every diagnosis.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  nativeButton={false}
                  render={
                    <Link href="/appointment">
                      <CalendarDays />
                      Book Appointment
                    </Link>
                  }
                  size="lg"
                  className="h-12 min-w-[11rem] bg-secondary px-6 shadow-glow-green hover:bg-secondary/90"
                />
                <Button
                  nativeButton={false}
                  render={
                    <Link href="/departments">
                      Explore Departments
                      <ArrowRight />
                    </Link>
                  }
                  variant="outline"
                  size="lg"
                  className="h-12 border-cns-border bg-white/80 px-6 shadow-soft backdrop-blur-sm"
                />
              </div>
              {isTelHref(appointmentHref) ? (
                <a
                  href={appointmentHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-cns-navy/75 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  <span>
                    Or call{" "}
                    <span className="font-semibold text-cns-navy">{appointmentDisplay}</span>
                  </span>
                </a>
              ) : (
                <Link
                  href={appointmentHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-cns-navy/75 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-cns-navy">{appointmentDisplay}</span>
                </Link>
              )}
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="flex flex-col gap-3.5 border-t border-cns-border/50 pt-7 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-cns-navy/80">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-cns-border/60 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>

      <div className="relative z-10 -mt-24 pb-10 lg:-mt-28">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <StatisticsCard
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  className="glass rounded-2xl shadow-card ring-1 ring-white/70 backdrop-blur-md"
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}

export { HeroSection };
