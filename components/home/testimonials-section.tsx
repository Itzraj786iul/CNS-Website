"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { testimonials } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { hoverLift, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "size-4",
            index < rating
              ? "fill-accent text-accent"
              : "fill-cns-border text-cns-border"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function HomeTestimonialCard({
  quote,
  author,
  role,
  avatar,
  rating,
}: {
  quote: string;
  author: string;
  role?: string;
  avatar: string;
  rating: number;
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className="h-full"
    >
      <Card className="h-full border-cns-border/80 bg-white shadow-soft ring-0">
        <CardContent className="flex h-full flex-col gap-6 px-6 py-8">
          <StarRating rating={rating} />
          <blockquote className="flex-1 text-base leading-relaxed text-cns-navy/90">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <footer className="flex items-center gap-4 border-t border-cns-border pt-5">
            <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-muted">
              <Image
                src={avatar}
                alt={author}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <cite className="not-italic">
              <p className="font-heading text-base font-semibold text-cns-navy">
                {author}
              </p>
              {role ? (
                <p className="mt-0.5 text-sm text-muted-foreground">{role}</p>
              ) : null}
            </cite>
          </footer>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function TestimonialsSection() {
  return (
    <Section variant="default" spacing="lg">
      <div className="space-y-12">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Testimonials"
            title="Stories from Our Patients"
            description="Real experiences from individuals and families who trusted CNS with their neurological care and recovery."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.author} variants={fadeUp}>
              <HomeTestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { TestimonialsSection };
