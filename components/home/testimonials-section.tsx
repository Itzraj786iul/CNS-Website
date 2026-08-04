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
  outcome,
  avatar,
  rating,
}: {
  quote: string;
  author: string;
  role?: string;
  outcome?: string;
  avatar: string;
  rating: number;
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
    >
      <Card className="card-premium card-premium-hover ring-0">
        <CardContent className="flex flex-col gap-4 px-4 py-5 sm:px-5">
          <StarRating rating={rating} />
          {outcome ? (
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-secondary">
              {outcome}
            </p>
          ) : null}
          <blockquote className="relative space-y-3">
            <span className="quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="text-sm leading-[1.75] text-cns-navy/90">
              {quote}
            </p>
          </blockquote>
          <footer className="flex items-center gap-3 border-t border-cns-border/80 pt-4">
            <div className="photo-frame relative size-10 shrink-0 rounded-full ring-2 ring-white">
              <Image
                src={avatar}
                alt={author}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <cite className="not-italic">
              <p className="font-heading text-sm font-semibold text-cns-navy">
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

        <AnimatedSection stagger className="grid gap-5 md:grid-cols-3 md:gap-5">
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
