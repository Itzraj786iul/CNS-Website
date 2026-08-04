"use client";

import { ResearchCard } from "@/components/common/research-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { CTASection } from "@/components/common/cta-section";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { researchStatistics } from "@/lib/content/statistics";
import { StatisticsCardFromStat } from "@/components/common/statistics-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { researchContent } from "@/components/research/data";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

function ResearchPageContent() {
  const { hero, highlights, publications, studies, awards, cta } = researchContent;

  return (
    <>
      <PageHero
        title={hero.title}
        description={hero.description}
        eyebrow={hero.eyebrow}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Research" }]}
      />

      <CardGridSection
        variant="white"
        spacing="default"
        density="listing"
        heading={{
          align: "center",
          eyebrow: "Highlights",
          title: "Research Highlights",
          description:
            "Current areas of investigation led by CNS clinicians and research faculty.",
        }}
      >
        {highlights.map((item) => (
          <CardGridItem key={item.title}>
            <ResearchCard
              kind="highlight"
              variant="standard"
              tag={item.tag}
              tagVariant="blue"
              title={item.title}
              description={item.description}
            />
          </CardGridItem>
        ))}
      </CardGridSection>

      <Section variant="default" spacing="default" divider>
        <div className="section-stack">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Publications"
              title="Recent Publications"
              description="Peer-reviewed contributions from our clinical and research teams."
            />
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

      <CardGridSection
        variant="white"
        spacing="default"
        divider
        density="listing"
        heading={{
          align: "center",
          eyebrow: "Studies",
          title: "Clinical Studies",
          description:
            "Ongoing and completed trials advancing evidence-based neurological care.",
        }}
      >
        {studies.map((study) => (
          <CardGridItem key={study.title}>
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
          </CardGridItem>
        ))}
      </CardGridSection>

      {awards.length > 0 ? (
        <CardGridSection
          variant="default"
          spacing="default"
          divider
          density="preview"
          heading={{
            align: "center",
            eyebrow: "Recognition",
            title: "Awards & Recognition",
            description:
              "Honors reflecting our commitment to clinical excellence and research leadership.",
          }}
        >
          {awards.map((award) => (
            <CardGridItem key={award.title}>
              <ResearchCard
                kind="award"
                variant="compact"
                year={award.year}
                title={award.title}
                meta={award.organization}
              />
            </CardGridItem>
          ))}
        </CardGridSection>
      ) : null}

      <CardGridSection
        variant="white"
        spacing="default"
        divider
        density="preview"
        heading={{
          align: "center",
          eyebrow: "Impact",
          title: "Research by the Numbers",
          description:
            "Verified metrics appear once confirmed by the research department.",
        }}
      >
        {researchStatistics.map((stat) => (
          <CardGridItem key={stat.id}>
            <StatisticsCardFromStat stat={stat} size="small" />
          </CardGridItem>
        ))}
      </CardGridSection>

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
