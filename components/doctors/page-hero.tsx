"use client";

import { motion } from "framer-motion";

import { Breadcrumb } from "@/components/doctors/breadcrumb";
import { Container } from "@/components/common/container";
import { fadeUp, staggerContainer } from "@/lib/motion";

type PageHeroProps = {
  title: string;
  description: string;
};

function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-8 md:pb-20 md:pt-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-primary/5 blur-3xl"
      />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl space-y-6"
        >
          <motion.div variants={fadeUp}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Doctors" },
              ]}
            />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-semibold tracking-tight text-cns-navy sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

export { PageHero };
