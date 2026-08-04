"use client";

import { motion } from "framer-motion";

import { researchContent } from "@/components/research/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { CTASection } from "@/components/common/cta-section";
import { PageHero } from "@/components/common/page-hero";
import { ResearchCard } from "@/components/common/research-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { StatisticsCard } from "@/components/common/statistics-card";
import { getCardGridClass } from "@/lib/card-variants";
import { fadeUp } from "@/lib/motion";

function ResearchPageContent() {
  const { hero, highlights, publications, studies, awards, statistics, cta } =
    researchContent;

  return (
    <>
      <PageHero
        title={hero.title}
        description={hero.description}
        eyebrow={hero.eyebrow}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Research" }]}
      />

      <Section variant="white" spacing="default">
        <div className="section-stack">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Highlights"
              title="Research Highlights"
              description="Current areas of investigation led by CNS clinicians and research faculty."
            />
          </AnimatedSection>
          <AnimatedSection stagger className={getCardGridClass("standard")}>
            {highlights.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <ResearchCard
                  kind="highlight"
                  variant="standard"
                  tag={item.tag}
                  tagVariant="blue"
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="default" spacing="default" divider>
        <div className="section-stack">
          <AnimatedSection>
            <SectionHeading eyebrow="Publications" title="Recent Publications" description="Peer-reviewed contributions from our clinical and research teams." />
          </AnimatedSection>
          <AnimatedSection stagger className="space-y-4">
            {publications.map((pub) => (
              <motion.div key={pub.title} variants={fadeUp}>
                <ResearchCard
                  kind="publication"
                  variant="detailed"
                  title={pub.title}
                  meta={pub.journal}
                  submeta={pub.authors}
                />
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="white" spacing="default" divider>
        <div className="section-stack">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <SectionHeading eyebrow="Studies" title="Clinical Studies" description="Ongoing and completed trials advancing evidence-based neurological care." />
          </AnimatedSection>
          <AnimatedSection stagger className={getCardGridClass("standard")}>
            {studies.map((study) => (
              <motion.div key={study.title} variants={fadeUp}>
                <ResearchCard
                  kind="study"
                  variant="standard"
                  tag={study.status}
                  tagVariant={
                    study.status === "Recruiting"
                      ? "green"
                      : study.status === "Active"
                        ? "blue"
                        : "default"
                  }
                  title={study.title}
                  description={study.description}
                />
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="default" spacing="default" divider>
        <div className="section-stack">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <SectionHeading align="center" eyebrow="Recognition" title="Awards & Recognition" description="Honors reflecting our commitment to clinical excellence and research leadership." />
          </AnimatedSection>
          <AnimatedSection stagger className={getCardGridClass("compact")}>
            {awards.map((award) => (
              <motion.div key={award.title} variants={fadeUp}>
                <ResearchCard
                  kind="award"
                  variant="compact"
                  year={award.year}
                  title={award.title}
                  meta={award.organization}
                />
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="white" spacing="default" divider>
        <div className="section-stack">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <SectionHeading align="center" eyebrow="Impact" title="Research by the Numbers" description="Measurable contributions to neuroscience knowledge and patient care." />
          </AnimatedSection>
          <AnimatedSection stagger className={getCardGridClass("compact")}>
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
