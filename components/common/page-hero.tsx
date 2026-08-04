"use client";

import { motion } from "framer-motion";

import { Breadcrumb, type BreadcrumbItem } from "@/components/common/breadcrumb";
import { Container } from "@/components/common/container";
import { fadeUp, staggerContainer } from "@/lib/motion";

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumb: BreadcrumbItem[];
};

function PageHero({ title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-cns-border/50 bg-background pb-16 pt-8 md:pb-20 md:pt-10">
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/[0.04] via-transparent to-secondary/[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-primary/[0.06] blur-3xl"
      />
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl space-y-6"
        >
          <motion.div variants={fadeUp}>
            <Breadcrumb items={breadcrumb} />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-semibold tracking-tight text-cns-navy sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-[1.75] text-muted-foreground sm:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

export { PageHero };
