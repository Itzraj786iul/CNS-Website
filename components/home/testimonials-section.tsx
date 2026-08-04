"use client";

import { TestimonialCard } from "@/components/common/testimonial-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { getPublishedTestimonials } from "@/lib/content/testimonials";

function TestimonialsSection() {
  const items = getPublishedTestimonials();

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
          "Patient and family experiences — shared with consent. Replace sample entries in lib/content/testimonials.ts with verified stories.",
      }}
    >
      {items.map((testimonial) => (
        <CardGridItem key={testimonial.id}>
          <TestimonialCard
            variant="compact"
            quote={testimonial.quote}
            author={testimonial.name}
            city={testimonial.city}
            condition={testimonial.condition}
            outcome={testimonial.outcome}
            photo={testimonial.photo}
            verified={testimonial.verified}
            rating={testimonial.rating}
          />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { TestimonialsSection };
