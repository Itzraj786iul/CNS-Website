"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Siren } from "lucide-react";
import { motion } from "framer-motion";

import { contactContent } from "@/components/contact/data";
import { FormField, FormInput, FormTextarea } from "@/components/contact/form-fields";
import { AnimatedSection } from "@/components/common/animated-section";
import { IconBox } from "@/components/common/icon-box";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { FAQCard } from "@/components/common/faq-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
                      <Link href={card.href} className="block font-heading text-base font-semibold text-cns-navy transition-colors hover:text-primary">{card.value}</Link>
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
          <div className="mb-8">
            <SectionHeading eyebrow="Send a Message" title="Contact Form" description="Fill out the form below and our team will respond within one business day." />
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
                src="https://maps.google.com/maps?q=medical+district+bengaluru&output=embed"
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
                  <Link href={`tel:${dept.phone.replace(/\s/g, "")}`} className="block text-sm text-primary hover:underline">{dept.phone}</Link>
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
  const { emergencyBanner } = contactContent;
  return (
    <Section variant="default" spacing="sm" contained={true}>
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-3xl bg-cns-navy px-6 py-8 sm:px-10 sm:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-destructive/20 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <IconBox icon={Siren} variant="white" className="bg-destructive/20 text-white" />
              <div>
                <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">{emergencyBanner.title}</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">{emergencyBanner.description}</p>
              </div>
            </div>
            <Button
              nativeButton={false}
              render={<Link href={emergencyBanner.href}>{emergencyBanner.phone}</Link>}
              className="h-12 shrink-0 rounded-full bg-destructive px-6 text-white hover:bg-destructive/90"
            />
          </div>
        </div>
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
