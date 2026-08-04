"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Siren } from "lucide-react";
import { motion } from "framer-motion";

import { contactContent } from "@/components/contact/data";
import { FormField, FormInput, FormTextarea } from "@/components/contact/form-fields";
import { AnimatedSection } from "@/components/common/animated-section";
import { EmergencyBanner } from "@/components/common/emergency-banner";
import { IconBox } from "@/components/common/icon-box";
import { LocationMapPanel } from "@/components/common/location-map-panel";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { FAQCard } from "@/components/common/faq-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WHATSAPP_URL, isTelHref } from "@/lib/contact-links";
import { fadeUp, hoverLift } from "@/lib/motion";

const iconMap = {
  phone: Phone,
  email: Mail,
  emergency: Siren,
  address: MapPin,
} as const;

const variantMap = {
  phone: "blue",
  email: "green",
  emergency: "orange",
  address: "navy",
} as const;

function ContactCardsSection() {
  return (
    <Section variant="white" spacing="default" className="!pt-0">
      <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactContent.cards.map((card) => {
          const Icon = iconMap[card.type];
          const variant = variantMap[card.type];
          return (
            <motion.div key={card.title} variants={fadeUp}>
              <motion.div initial="rest" whileHover="hover" variants={hoverLift}>
                <Card className="card-premium card-premium-hover ring-0">
                  <CardContent className="space-y-3 px-4 py-5 sm:px-5">
                    <IconBox icon={Icon} variant={variant} />
                    <div className="space-y-1.5">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">{card.title}</p>
                      {isTelHref(card.href) || card.href.startsWith("mailto:") || card.href.startsWith("http") ? (
                        <a href={card.href} className="block font-heading text-base font-semibold text-cns-navy transition-colors hover:text-primary">{card.value}</a>
                      ) : (
                        <Link href={card.href} className="block font-heading text-base font-semibold text-cns-navy transition-colors hover:text-primary">{card.value}</Link>
                      )}
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatedSection>
    </Section>
  );
}

function ContactFormSection() {
  return (
    <Section variant="default" spacing="default">
      <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
        <AnimatedSection className="lg:col-span-7">
          <div className="mb-5 space-y-3">
            <SectionHeading
              eyebrow="Get in Touch"
              title="Send Us a Message"
              description="Our care team responds within one business day — with clear, helpful guidance."
            />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
              aria-label="Chat on WhatsApp with Center for Neuroscience"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
          <form
            className="space-y-4 rounded-[20px] border border-border bg-card p-5 shadow-soft sm:p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Full Name" htmlFor="contact-name" required>
                <FormInput id="contact-name" name="name" placeholder="Your full name" required />
              </FormField>
              <FormField label="Phone" htmlFor="contact-phone" required>
                <FormInput id="contact-phone" name="phone" type="tel" placeholder="+91 00000 00000" required />
              </FormField>
            </div>
            <FormField label="Email" htmlFor="contact-email" required>
              <FormInput id="contact-email" name="email" type="email" placeholder="you@email.com" required />
            </FormField>
            <FormField label="Subject" htmlFor="contact-subject" required>
              <FormInput id="contact-subject" name="subject" placeholder="How can we help?" required />
            </FormField>
            <FormField label="Message" htmlFor="contact-message" required>
              <FormTextarea id="contact-message" name="message" placeholder="Describe your inquiry..." rows={4} />
            </FormField>
            <Button type="submit" size="lg" className="w-full sm:w-auto sm:px-8">
              Send Message
            </Button>
          </form>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-5 lg:self-stretch">
          <LocationMapPanel
            className="h-full"
            hours={contactContent.timings.schedules}
          />
        </AnimatedSection>
      </div>
    </Section>
  );
}

function DepartmentsContactSection() {
  return (
    <Section variant="white" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Direct Lines"
            title="Reach the Right Team"
            description="Department contacts for faster assistance with referrals, records, and specialist inquiries."
          />
        </AnimatedSection>
        <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactContent.departments.map((dept) => (
            <motion.div key={dept.name} variants={fadeUp}>
              <Card className="border-border bg-card shadow-soft ring-0">
                <CardContent className="space-y-2 px-5 py-5">
                  <h3 className="font-heading text-base font-semibold text-cns-navy">{dept.name}</h3>
                  {isTelHref(dept.href) ? (
                    <a href={dept.href} className="block text-sm text-primary hover:underline">{dept.phone}</a>
                  ) : (
                    <Link href={dept.href} className="block text-sm text-primary hover:underline">{dept.phone}</Link>
                  )}
                  <Link href={`mailto:${dept.email}`} className="block text-sm text-muted-foreground hover:text-primary">{dept.email}</Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

function EmergencyBannerSection() {
  return (
    <Section variant="default" spacing="sm">
      <AnimatedSection>
        <EmergencyBanner title="Neurological Emergency?" />
      </AnimatedSection>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section variant="white" spacing="default">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-6">
        <AnimatedSection className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Your Questions"
            title="Clear Guidance Before You Visit"
            description="Practical answers about contacting CNS, visiting our campus, and preparing for care."
          />
        </AnimatedSection>
        <AnimatedSection>
          <FAQCard items={[...contactContent.faq]} />
        </AnimatedSection>
      </div>
    </Section>
  );
}

export {
  ContactCardsSection,
  ContactFormSection,
  DepartmentsContactSection,
  EmergencyBannerSection,
  FaqSection,
};
