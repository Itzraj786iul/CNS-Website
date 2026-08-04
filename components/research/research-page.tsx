"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { researchContent } from "@/components/research/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { CTASection } from "@/components/common/cta-section";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { StatisticsCard } from "@/components/common/statistics-card";
import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, hoverLift } from "@/lib/motion";

function ResearchPageContent() {
  const { hero, highlights, publications, studies, awards, statistics, cta } =
    researchContent;

  return (
    <>
      <PageHero
        title={hero.title}
        description={hero.description}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Research" }]}
      />

      <Section variant="white" spacing="lg">
        <div className="space-y-12">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Highlights"
              title="Research Highlights"
              description="Current areas of investigation led by CNS clinicians and research faculty."
            />
          </AnimatedSection>
          <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <motion.div initial="rest" whileHover="hover" variants={hoverLift} className="h-full">
                  <Card className="card-premium card-premium-hover h-full ring-0">
                    <CardContent className="space-y-4 px-6 py-8">
                      <Tag variant="blue">{item.tag}</Tag>
                      <h3 className="font-heading text-lg font-semibold text-cns-navy">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="default" spacing="lg" divider>
        <div className="space-y-12">
          <AnimatedSection>
            <SectionHeading eyebrow="Publications" title="Recent Publications" description="Peer-reviewed contributions from our clinical and research teams." />
          </AnimatedSection>
          <AnimatedSection stagger className="space-y-4">
            {publications.map((pub) => (
              <motion.div key={pub.title} variants={fadeUp}>
                <Card className="card-premium card-premium-hover ring-0">
                  <CardContent className="flex flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-heading text-base font-semibold text-cns-navy sm:text-lg">{pub.title}</h3>
                      <p className="text-sm text-primary">{pub.journal}</p>
                      <p className="text-sm text-muted-foreground">{pub.authors}</p>
                    </div>
                    <Button variant="ghost" className="shrink-0 text-primary hover:bg-primary/5">
                      <ExternalLink />
                      View
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="white" spacing="lg" divider>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection direction="left">
            <SectionHeading eyebrow="Studies" title="Clinical Studies" description="Ongoing and completed trials advancing evidence-based neurological care." />
          </AnimatedSection>
          <AnimatedSection stagger className="space-y-4">
            {studies.map((study) => (
              <motion.div key={study.title} variants={fadeUp}>
                <Card className="card-premium card-premium-hover ring-0">
                  <CardContent className="space-y-2 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <Tag variant={study.status === "Recruiting" ? "green" : study.status === "Active" ? "blue" : "default"}>
                        {study.status}
                      </Tag>
                    </div>
                    <h3 className="font-heading text-base font-semibold text-cns-navy">{study.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{study.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="default" spacing="lg" divider>
        <div className="space-y-12">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <SectionHeading align="center" eyebrow="Recognition" title="Awards & Recognition" description="Honors reflecting our commitment to clinical excellence and research leadership." />
          </AnimatedSection>
          <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((award) => (
              <motion.div key={award.title} variants={fadeUp}>
                <Card className="card-premium card-premium-hover h-full ring-0">
                  <CardContent className="space-y-2 px-6 py-6">
                    <p className="text-sm font-semibold text-primary">{award.year}</p>
                    <h3 className="font-heading text-base font-semibold text-cns-navy">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="white" spacing="lg" divider>
        <div className="space-y-12">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <SectionHeading align="center" eyebrow="Impact" title="Research by the Numbers" description="Measurable contributions to neuroscience knowledge and patient care." />
          </AnimatedSection>
          <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <StatisticsCard value={stat.value} suffix={stat.suffix} label={stat.label} />
              </motion.div>
            ))}
          </AnimatedSection>
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

export { ResearchPageContent };
