"use client";

import { motion } from "framer-motion";

import { Breadcrumb, type BreadcrumbItem } from "@/components/common/breadcrumb";
import { Container } from "@/components/common/container";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumb: BreadcrumbItem[];
  eyebrow?: string;
};

function PageHero({ title, description, breadcrumb, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-cns-border/40 brand-surface-page pb-24 pt-10 md:pb-28 md:pt-14">
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="neural-pattern pointer-events-none absolute inset-0 opacity-[0.35]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/[0.04] via-transparent to-secondary/[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-primary/[0.05] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-0 size-72 rounded-full bg-secondary/[0.04] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hero-light-beam pointer-events-none absolute inset-0 opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-background to-transparent"
      />
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl space-y-7"
        >
          <motion.div variants={fadeUp}>
            <Breadcrumb items={breadcrumb} />
          </motion.div>
          {eyebrow ? (
            <motion.div variants={fadeUp}>
              <p className="eyebrow-pill">{eyebrow}</p>
            </motion.div>
          ) : null}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="cns-brand-bar" aria-hidden="true" />
            <h1
              className={cn(
                "font-heading text-4xl font-semibold tracking-[-0.025em] text-cns-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
              )}
            >
              {title}
            </h1>
          </motion.div>
          <motion.p variants={fadeUp} className="prose-lead max-w-2xl">
            {description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

export { PageHero };
