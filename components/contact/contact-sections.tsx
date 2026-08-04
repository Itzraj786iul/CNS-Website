"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Siren } from "lucide-react";
import { motion } from "framer-motion";

import { contactContent } from "@/components/contact/data";
import { FormField, FormInput, FormTextarea } from "@/components/contact/form-fields";
import { AnimatedSection } from "@/components/common/animated-section";
import { EmergencyBanner } from "@/components/common/emergency-banner";
import { IconBox } from "@/components/common/icon-box";
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
    <Section variant="white" spacing="default">
      <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {contactContent.cards.map((card) => {
          const Icon = iconMap[card.type];
          const variant = variantMap[card.type];
          return (
            <motion.div key={card.title} variants={fadeUp}>
              <motion.div initial="rest" whileHover="hover" variants={hoverLift} className="h-full">
                <Card className="h-full border-cns-border/80 bg-white shadow-soft ring-0">
                  <CardContent className="space-y-4 px-6 py-8">
                    <IconBox icon={Icon} variant={variant} />
                    <div className="space-y-2">
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
    <Section variant="default" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <AnimatedSection>
          <div className="mb-8 space-y-5">
            <SectionHeading eyebrow="Send a Message" title="Contact Form" description="Fill out the form below and our team will respond within one business day." />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
              aria-label="Chat on WhatsApp with Center for Neuroscience"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
          <form
            className="space-y-5 rounded-3xl border border-cns-border/80 bg-white p-6 shadow-soft sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
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
              <FormTextarea id="contact-message" name="message" placeholder="Describe your inquiry..." rows={5} />
            </FormField>
            <Button type="submit" size="lg" className="h-12 w-full sm:w-auto sm:px-8">Send Message</Button>
          </form>
        </AnimatedSection>

        <AnimatedSection className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-cns-border/80 bg-muted shadow-soft">
            <div className="relative aspect-square w-full lg:aspect-auto lg:min-h-[360px]">
              <iframe
                title="Center for Neuroscience location"
                src="https://maps.google.com/maps?q=Raipur+Chhattisgarh&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <Card className="border-cns-border/80 bg-white shadow-soft ring-0">
            <CardContent className="space-y-4 px-6 py-6">
              <h3 className="font-heading text-lg font-semibold text-cns-navy">{contactContent.timings.title}</h3>
              <ul className="space-y-3">
                {contactContent.timings.schedules.map((item) => (
                  <li key={item.label} className="flex flex-col gap-0.5 border-b border-cns-border/60 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-cns-navy">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </Section>
  );
}

function DepartmentsContactSection() {
  return (
    <Section variant="white" spacing="lg">
      <div className="space-y-10">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading align="center" eyebrow="Direct Lines" title="Department Contacts" description="Reach the right team directly for faster assistance with your specific inquiry." />
        </AnimatedSection>
        <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactContent.departments.map((dept) => (
            <motion.div key={dept.name} variants={fadeUp}>
              <Card className="h-full border-cns-border/80 bg-white shadow-soft ring-0">
                <CardContent className="space-y-3 px-6 py-6">
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
    <Section variant="default" spacing="sm" contained={true}>
      <AnimatedSection>
        <EmergencyBanner title="Neurological Emergency?" />
      </AnimatedSection>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section variant="white" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
        <AnimatedSection className="lg:sticky lg:top-28">
          <SectionHeading eyebrow="FAQ" title="Common Questions" description="Quick answers to frequently asked questions about contacting and visiting CNS." />
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
