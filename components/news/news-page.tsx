"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import { newsContent } from "@/components/news/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { CTASection } from "@/components/common/cta-section";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

const categoryVariant = {
  Announcement: "blue",
  "Health Campaign": "green",
  Achievement: "orange",
  Event: "navy",
} as const;

function NewsPageContent() {
  const { hero, news, upcomingEvents, achievements, cta } = newsContent;

  return (
    <>
      <PageHero
        title={hero.title}
        description={hero.description}
        eyebrow={hero.eyebrow}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <Section variant="white" spacing="default">
        <div className="space-y-8">
          <AnimatedSection>
            <SectionHeading eyebrow="Latest Updates" title="News from CNS" description="Recent announcements and clinical milestones from across Center for Neuroscience." />
          </AnimatedSection>
          <AnimatedSection stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {news.map((item) => (
              <motion.article key={item.title} variants={fadeUp}>
                <motion.div initial="rest" whileHover="hover" variants={hoverLift}>
                  <Card className="card-premium card-premium-hover overflow-hidden ring-0">
                    <div className="image-placeholder relative aspect-[16/10]">
                      <Image src={item.image} alt={item.title} fill loading="lazy" className="img-zoom object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <CardContent className="space-y-3 px-6 py-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <Tag variant={categoryVariant[item.category as keyof typeof categoryVariant] ?? "default"}>{item.category}</Tag>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="size-3.5" aria-hidden="true" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold leading-snug text-cns-navy">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                      <Button variant="ghost" className="-ml-2 h-auto px-2 py-1 text-primary hover:bg-primary/5">
                        Read More
                        <ArrowRight />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.article>
            ))}
          </AnimatedSection>

          {/* Pagination UI only */}
          <AnimatedSection className="flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full border-cns-border" aria-label="Previous page" disabled>
              <ChevronLeft />
            </Button>
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                size="sm"
                className={cn("size-9 rounded-full", page !== 1 && "border-cns-border")}
                aria-label={`Page ${page}`}
                aria-current={page === 1 ? "page" : undefined}
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" size="icon" className="rounded-full border-cns-border" aria-label="Next page">
              <ChevronRight />
            </Button>
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="default" spacing="default" divider>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-8">
            <AnimatedSection direction="left">
              <SectionHeading eyebrow="Calendar" title="Upcoming Events" description="Join us for community programs, support groups, and awareness initiatives." />
            </AnimatedSection>
            <AnimatedSection stagger className="space-y-4">
              {upcomingEvents.map((event) => (
                <motion.div key={event.title} variants={fadeUp}>
                  <Card className="card-premium card-premium-hover ring-0">
                    <CardContent className="flex gap-4 px-6 py-5">
                      <div className="flex size-12 shrink-0 flex-col items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Calendar className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-cns-navy">{event.title}</h3>
                        <p className="mt-1 text-sm text-primary">{event.date}</p>
                        <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="size-3.5" aria-hidden="true" />
                          {event.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatedSection>
          </div>

          <div className="space-y-8">
            <AnimatedSection direction="right">
              <SectionHeading eyebrow="Milestones" title="Recent Achievements" description="Highlights from our continued pursuit of excellence in neuroscience care." />
            </AnimatedSection>
            <AnimatedSection stagger className="space-y-3">
              {achievements.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <div className="rounded-xl border border-cns-border/60 bg-card px-5 py-4 shadow-soft">
                    <p className="text-sm leading-relaxed text-cns-navy/85">{item}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </Section>

      <CTASection
        title={cta.title}
        description={cta.description}
        primaryAction={{ label: cta.primaryLabel, href: cta.primaryHref }}
        secondaryAction={{ label: cta.secondaryLabel, href: cta.secondaryHref }}
        variant="navy"
      />
    </>
  );
}

export { NewsPageContent };
