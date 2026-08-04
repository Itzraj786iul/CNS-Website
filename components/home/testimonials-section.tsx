"use client";

import { motion } from "framer-motion";

import { testimonials } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { TestimonialCard } from "@/components/common/testimonial-card";
import { getCardGridClass } from "@/lib/card-variants";
import { fadeUp } from "@/lib/motion";

function TestimonialsSection() {
  return (
    <Section variant="default" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Patient Voices"
            title="Stories of Recovery & Trust"
            description="Recovery stories from patients and families — focused on outcomes, communication, and the trust built along the way."
          />
        </AnimatedSection>

        <AnimatedSection stagger className={getCardGridClass("compact")}>
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.author} variants={fadeUp}>
              <TestimonialCard variant="compact" {...testimonial} />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { TestimonialsSection };
