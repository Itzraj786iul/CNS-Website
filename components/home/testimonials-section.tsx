"use client";

import { TestimonialCard } from "@/components/common/testimonial-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { getPublishedTestimonials } from "@/lib/content/testimonials";

function TestimonialsSection() {
  const items = getPublishedTestimonials().slice(0, 2);

  if (items.length === 0) {
    return null;
  }

  return (
    <CardGridSection
      variant="default"
      spacing="sm"
      density="preview"
      heading={{
        align: "center",
        eyebrow: "Patient Voices",
        title: "Stories of Recovery & Trust",
        description: "Experiences shared with patient consent.",
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
