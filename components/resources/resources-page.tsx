"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, FileText, ShieldCheck, Siren, Users } from "lucide-react";

import { resourcesContent } from "@/components/resources/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { CTASection } from "@/components/common/cta-section";
import { FAQCard } from "@/components/common/faq-card";
import { IconBox } from "@/components/common/icon-box";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getEmergencyTelHref } from "@/lib/contact-links";
import { fadeUp, hoverLift } from "@/lib/motion";

function ResourcesPageContent() {
  const {
    hero,
    downloads,
    insurance,
    patientGuidelines,
    visitorGuidelines,
    faq,
    emergency,
    cta,
  } = resourcesContent;

  return (
    <>
      <PageHero
        title={hero.title}
        description={hero.description}
        eyebrow={hero.eyebrow}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <Section variant="white" spacing="default">
        <div className="section-stack">
          <AnimatedSection>
            <SectionHeading eyebrow="Patient Forms" title="Download & Prepare" description="Complete these forms before your visit — save time at registration and help us serve you faster." />
          </AnimatedSection>
          <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {downloads.map((form) => (
              <motion.div key={form.title} variants={fadeUp}>
                <motion.div initial="rest" whileHover="hover" variants={hoverLift}>
                  <Card className="card-premium card-premium-hover ring-0">
                    <CardContent className="flex items-start gap-4 px-6 py-6">
                      <IconBox icon={FileText} variant="blue" size="default" className="shrink-0" />
                      <div className="flex-1 space-y-2">
                        <h3 className="font-heading text-base font-semibold text-cns-navy">{form.title}</h3>
                        <p className="text-xs text-muted-foreground">{form.type} · {form.size}</p>
                        <Button variant="ghost" className="-ml-2 h-auto px-2 py-1 text-primary hover:bg-primary/5">
                          <Download />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="default" spacing="default" divider>
        <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <AnimatedSection direction="left" className="flex flex-col justify-center">
            <div className="space-y-4">
              <SectionHeading eyebrow="Insurance" title={insurance.title} description={insurance.description} />
              <ul className="space-y-3">
                {insurance.points.map((point) => (
                  <li key={point} className="flex gap-3 rounded-xl border border-cns-border/60 bg-card px-4 py-2.5 text-sm leading-relaxed text-cns-navy/85 shadow-soft">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" stagger className="space-y-4">
            {patientGuidelines.map((section) => (
              <motion.div key={section.title} variants={fadeUp}>
                <Card className="card-premium card-premium-hover ring-0">
                  <CardContent className="space-y-3 px-5 py-5">
                    <div className="flex items-center gap-3">
                      <IconBox icon={Users} variant="green" size="sm" />
                      <h3 className="font-heading text-lg font-semibold text-cns-navy">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="white" spacing="default" divider>
        <AnimatedSection>
          <div className="rounded-[20px] border border-cns-border/80 bg-card p-5 shadow-soft sm:p-6">
            <SectionHeading eyebrow="Visitor Information" title="Visitor Guidelines" description="Help us maintain a calm, healing environment for every patient and family." />
            <ul className="mt-5 space-y-2.5">
              {visitorGuidelines.map((rule) => (
                <li key={rule} className="flex gap-3 text-sm leading-relaxed text-cns-navy/85">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </Section>

      <Section variant="default" spacing="default" divider>
        <div className="rounded-[20px] border border-destructive/20 bg-destructive/5 p-5 sm:p-6">
          <AnimatedSection>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <IconBox icon={Siren} variant="orange" />
                  <h2 className="font-heading text-2xl font-semibold text-cns-navy">{emergency.title}</h2>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">{emergency.description}</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {emergency.signs.map((sign) => (
                    <li key={sign} className="flex gap-2 text-sm text-cns-navy/85">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                nativeButton={false}
                render={<Link href={getEmergencyTelHref()}>{emergency.phone}</Link>}
                className="h-12 shrink-0 rounded-full bg-destructive px-6 hover:bg-destructive/90"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="white" spacing="default" divider>
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-stretch lg:gap-6">
          <AnimatedSection className="flex flex-col justify-center">
            <SectionHeading eyebrow="Your Questions" title="Clear Guidance Before You Visit" description="Practical answers about visits, medical records, insurance, and hospital policies at CNS." />
          </AnimatedSection>
          <AnimatedSection>
            <FAQCard items={[...faq]} />
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

export { ResourcesPageContent };
