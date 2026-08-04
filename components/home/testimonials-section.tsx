"use client";

import { TestimonialCard } from "@/components/common/testimonial-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { testimonials } from "@/components/home/data";

function TestimonialsSection() {
  return (
    <CardGridSection
      variant="default"
      spacing="default"
      density="preview"
      heading={{
        align: "center",
        eyebrow: "Patient Voices",
        title: "Stories of Recovery & Trust",
        description:
          "Recovery stories from patients and families — focused on outcomes, communication, and the trust built along the way.",
      }}
    >
      {testimonials.map((testimonial) => (
        <CardGridItem key={testimonial.author}>
          <TestimonialCard variant="compact" {...testimonial} />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { TestimonialsSection };
