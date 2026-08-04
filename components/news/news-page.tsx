"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import { newsContent } from "@/components/news/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { CTASection } from "@/components/common/cta-section";
import { NewsCard } from "@/components/common/news-card";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { CardGridItem, CardGridSection, SplitContentSection } from "@/components/common/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/lib/motion";
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

      <CardGridSection
        variant="white"
        spacing="default"
        density="listing"
        heading={{
          eyebrow: "Latest Updates",
          title: "News from CNS",
          description:
            "Recent announcements and clinical milestones from across Center for Neuroscience.",
        }}
        footer={
          <div className="flex items-center justify-center gap-2">
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
          </div>
        }
      >
        {news.map((item) => (
          <CardGridItem key={item.title}>
            <NewsCard
              variant="standard"
              title={item.title}
              excerpt={item.excerpt}
              image={item.image}
              date={item.date}
              category={item.category}
              categoryVariant={
                categoryVariant[item.category as keyof typeof categoryVariant] ?? "default"
              }
            />
          </CardGridItem>
        ))}
      </CardGridSection>

      <SplitContentSection
        variant="default"
        spacing="default"
        divider
        ratio="equal"
        left={
          <div className="section-stack">
            <SectionHeading
              eyebrow="Calendar"
              title="Upcoming Events"
              description="Join us for community programs, support groups, and awareness initiatives."
            />
            <AnimatedSection stagger className="space-y-4">
              {upcomingEvents.map((event) => (
                <motion.div key={event.title} variants={fadeUp}>
                  <Card className="card-premium card-premium-hover ring-0">
                    <CardContent className="flex gap-3 px-4 py-3.5">
                      <div className="flex size-10 shrink-0 flex-col items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Calendar className="size-4" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="card-title-compact">{event.title}</h3>
                        <p className="mt-0.5 text-xs text-primary">{event.date}</p>
                        <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
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
        }
        right={
          <div className="section-stack">
            <SectionHeading
              eyebrow="Milestones"
              title="Recent Achievements"
              description="Highlights from our continued pursuit of excellence in neuroscience care."
            />
            <AnimatedSection stagger className="space-y-3">
              {achievements.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <div className="rounded-xl border border-cns-border/60 bg-card px-4 py-3 shadow-soft">
                    <p className="line-clamp-3 text-[13px] leading-snug text-cns-navy/85">{item}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatedSection>
          </div>
        }
      />

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
