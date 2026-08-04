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
import {
  getAppointmentDisplay,
  getAppointmentTelHref,
  isTelHref,
} from "@/lib/contact-links";

import { heroStats } from "@/components/home/data";
import { Container } from "@/components/common/container";
import { StatisticsCard } from "@/components/common/statistics-card";
import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";

function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg lg:max-w-none">
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 top-8 size-48 rounded-full bg-primary/12 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-6 bottom-12 size-56 rounded-full bg-secondary/15 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-12 top-4 size-24 rounded-full bg-accent/10 blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-full items-center justify-center lg:scale-[1.02] lg:translate-x-2"
      >
        <div
          aria-hidden="true"
          className="absolute inset-[8%] rounded-full bg-linear-to-br from-primary/[0.08] via-transparent to-secondary/[0.06] blur-2xl"
        />
        <svg
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-full w-full [filter:drop-shadow(0_24px_48px_rgba(31,124,198,0.12))]"
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
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass absolute bottom-6 left-0 rounded-2xl px-4 py-3.5 sm:bottom-8 sm:left-4"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Neuro ICU
          </p>
          <p className="font-heading text-sm font-semibold text-cns-navy">
            24×7 Critical Care
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="glass absolute right-0 top-12 rounded-2xl px-4 py-3.5 sm:top-16"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            3T MRI
          </p>
          <p className="font-heading text-sm font-semibold text-primary">
            Same-Day Imaging
          </p>
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
    { icon: Stethoscope, label: "Board-Certified Specialists" },
    { icon: Users, label: "One Integrated Care Team" },
  ];

  return (
    <section className="relative overflow-hidden section-surface-default">
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/[0.05] via-transparent to-secondary/[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 size-[36rem] rounded-full bg-primary/[0.05] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-secondary/[0.04] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hero-light-beam pointer-events-none absolute inset-0 opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,transparent_40%,rgb(248_251_253_/_0.85)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-background via-background/90 to-transparent"
      />

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center pb-40 pt-16 sm:pt-20 lg:min-h-[calc(100svh-6rem)] lg:pb-48 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24 xl:gap-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-xl space-y-10"
          >
            <motion.div variants={fadeUp}>
              <Tag variant="blue" className="px-4 py-1.5 text-sm shadow-soft">
                Trusted Neuroscience Care · Raipur
              </Tag>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <h1 className="font-heading text-[2.625rem] font-semibold leading-[1.05] tracking-[-0.035em] text-cns-navy sm:text-5xl lg:text-[3.75rem] lg:leading-[1.02]">
                Center for{" "}
                <span className="text-gradient-brand">Neuroscience</span>
              </h1>
              <p className="font-heading text-lg font-medium tracking-tight text-cns-navy/90 sm:text-xl">
                Your health is in safe hands.
              </p>
              <p className="prose-lead max-w-lg pt-1">
                Subspecialist-led care for stroke, brain, and spine conditions —
                with advanced imaging, round-the-clock emergency support, and
                clinicians who take time to listen.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Button
                  nativeButton={false}
                  render={
                    <Link href="/appointment">
                      <CalendarDays />
                      Book Your Consultation
                    </Link>
                  }
                  size="lg"
                  className="h-12 min-w-[12rem] bg-secondary font-semibold shadow-glow-green hover:bg-[#527a14]"
                />
                <Button
                  nativeButton={false}
                  render={
                    <Link href="/departments">
                      Talk to a Specialist
                      <ArrowRight />
                    </Link>
                  }
                  variant="outline"
                  size="lg"
                  className="h-12 border-border bg-white px-7 font-semibold text-cns-navy shadow-soft hover:border-primary/35 hover:bg-primary/5"
                />
              </div>
              {isTelHref(appointmentHref) ? (
                <a
                  href={appointmentHref}
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-cns-navy/88 transition-colors hover:text-primary"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-cns-border/60">
                    <Phone className="size-3.5 text-primary" aria-hidden="true" />
                  </span>
                  <span>
                    Prefer to speak now?{" "}
                    <span className="font-semibold text-cns-navy">
                      {appointmentDisplay}
                    </span>
                  </span>
                </a>
              ) : (
                <Link
                  href={appointmentHref}
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-cns-navy/88 transition-colors hover:text-primary"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-cns-border/60">
                    <Phone className="size-3.5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-cns-navy">
                    {appointmentDisplay}
                  </span>
                </Link>
              )}
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="flex flex-col gap-4 border-t border-border/70 pt-8 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4"
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-sm font-medium text-cns-navy/90"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-white/90 shadow-soft ring-1 ring-cns-border/50 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-4"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>

      <div className="relative z-10 -mt-28 pb-14 lg:-mt-32 lg:pb-16">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="text-center">
              <p className="eyebrow-pill mx-auto">Clinical Credibility</p>
              <p className="mt-4 font-heading text-lg font-medium text-cns-navy/85 sm:text-xl">
                Trusted by families across Chhattisgarh
              </p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {heroStats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <StatisticsCard
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    className="rounded-2xl border border-white/70 bg-white/80 shadow-card ring-1 ring-cns-border/30 backdrop-blur-xl"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}

export { HeroSection };
