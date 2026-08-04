"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { departments } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { DepartmentCard } from "@/components/common/department-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";

function DepartmentsPreviewSection() {
  return (
    <Section variant="default" spacing="default">
      <div className="space-y-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Comprehensive Neuroscience Care"
            title="Integrated Brain & Spine Specialties"
            description="From acute emergencies to long-term rehabilitation — every discipline works together under one roof, so your care never falls through the gaps."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <motion.div key={dept.title} variants={fadeUp}>
              <DepartmentCard
                title={dept.title}
                description={dept.description}
                icon={dept.icon}
                href={dept.href}
                iconVariant={dept.iconVariant}
              />
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="flex justify-center">
          <Button
            nativeButton={false}
            render={
              <Link href="/departments">
                Explore All Specialties
                <ArrowRight />
              </Link>
            }
            variant="outline"
            size="lg"
            className="h-12 border-cns-border px-6"
          />
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { DepartmentsPreviewSection };
