"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as React from "react";

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.4 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="relative overflow-hidden border-b border-cns-border/40 brand-surface-page pb-8 pt-6 md:pb-10 md:pt-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
        className="hero-gradient-breathe pointer-events-none absolute inset-0 bg-linear-to-br from-primary/[0.04] via-transparent to-secondary/[0.04]"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: parallaxX, y: parallaxY }}
        className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-primary/[0.05] blur-3xl md:size-96"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        style={{ x: parallaxX, y: parallaxY }}
        className="pointer-events-none absolute -left-16 bottom-0 size-56 rounded-full bg-secondary/[0.04] blur-3xl md:size-72"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <div
        aria-hidden="true"
        className="hero-light-beam pointer-events-none absolute inset-0 opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-background to-transparent"
      />
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl space-y-4"
        >
          <motion.div variants={fadeUp}>
            <Breadcrumb items={breadcrumb} />
          </motion.div>
          {eyebrow ? (
            <motion.div variants={fadeUp}>
              <p className="eyebrow-pill">{eyebrow}</p>
            </motion.div>
          ) : null}
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="cns-brand-bar" aria-hidden="true" />
            <h1
              className={cn(
                "font-heading text-3xl font-semibold tracking-[-0.025em] text-cns-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
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
