"use client";

import * as React from "react";
import Link from "next/link";
import { CalendarDays, Mail, MapPin, MessageCircle, Phone, Siren } from "lucide-react";

import { Container } from "@/components/common/container";
import { LogoLink } from "@/components/common/logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/common/social-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  footerDepartments,
  footerQuickLinks,
  footerServices,
} from "@/lib/constants/navigation";
import { WHATSAPP_URL, getEmergencyTelHref, toTelHref } from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[13px] leading-snug text-white/78 transition-colors duration-200 hover:text-white"
    >
      {children}
    </Link>
  );
}

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-white/88">
        {title}
      </h3>
      <ul className="mt-2 space-y-1.5">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-7 items-center justify-center rounded-full border border-white/12 text-white/75 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
    >
      <Icon className="size-3.5 stroke-[1.75]" />
    </a>
  );
}

function Footer() {
  const { contact, social, hours } = siteConfig;
  const emergencyHref = getEmergencyTelHref();

  return (
    <footer data-slot="footer" className="footer-surface relative text-white">
      <div
        aria-hidden="true"
        className="neural-pattern pointer-events-none absolute inset-0 opacity-[0.1]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
      />
      <Container className="relative py-5 md:py-6">
        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-5 lg:gap-y-4">
          <div className="min-w-0 space-y-2.5 sm:col-span-2 lg:col-span-4">
            <LogoLink size="sm" variant="footer" linkClassName="hover:scale-100" />
            <p className="max-w-xs text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary">
              {siteConfig.name} · {siteConfig.location}
            </p>
            <p className="max-w-sm text-[13px] leading-snug text-white/75">
              Integrated neurology, neurosurgery, psychiatry, and rehabilitation under one trusted institution.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                nativeButton={false}
                render={
                  <Link href="/appointment">
                    <CalendarDays />
                    Book Appointment
                  </Link>
                }
                size="sm"
                className="h-8 rounded-full bg-secondary px-3.5 text-xs font-semibold text-secondary-foreground shadow-glow-green hover:bg-secondary/90"
              />
              <Button
                nativeButton={false}
                render={
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle />
                    WhatsApp
                  </a>
                }
                variant="outline"
                size="sm"
                className="h-8 rounded-full border-white/20 bg-white/5 px-3.5 text-xs text-white hover:border-white/30 hover:bg-white/10 hover:text-white"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <SocialLink href={social.facebook ?? ""} label="Facebook" icon={FacebookIcon} />
              <SocialLink href={social.instagram ?? ""} label="Instagram" icon={InstagramIcon} />
              <SocialLink href={social.linkedin ?? ""} label="LinkedIn" icon={LinkedInIcon} />
              <SocialLink href={social.youtube ?? ""} label="YouTube" icon={YouTubeIcon} />
              <SocialLink href={social.twitter ?? ""} label="X (Twitter)" icon={TwitterIcon} />
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterSection title="Quick Links" links={footerQuickLinks} />
          </div>
          <div className="lg:col-span-2">
            <FooterSection title="Departments" links={footerDepartments} />
          </div>
          <div className="lg:col-span-2">
            <FooterSection title="Services" links={footerServices} />
          </div>

          <div className="space-y-2.5 sm:col-span-2 lg:col-span-2">
            <div className="rounded-[20px] border border-destructive/25 bg-destructive/[0.06] p-3 ring-1 ring-destructive/10">
              <h3 className="font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-white/95">
                Emergency & Contact
              </h3>
              <a
                href={emergencyHref}
                className="mt-1 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-white hover:text-white/90"
              >
                <Siren className="size-3.5 shrink-0 text-destructive" />
                {contact.emergency}
              </a>
              <ul className="mt-2 space-y-1 text-[13px] leading-snug text-white/75">
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 size-3.5 shrink-0 text-secondary" />
                  <a href={`mailto:${contact.email}`} className="hover:text-white">
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-secondary" />
                  <span>{contact.address}</span>
                </li>
                {contact.phone ? (
                  <li className="flex items-start gap-2">
                    <Phone className="mt-0.5 size-3.5 shrink-0 text-secondary" />
                    <a href={toTelHref(contact.phone)} className="hover:text-white">
                      {contact.phone}
                    </a>
                  </li>
                ) : null}
              </ul>
              <div className="mt-2.5 border-t border-white/10 pt-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                  Hours
                </p>
                <ul className="mt-1 space-y-0.5 text-[12px] leading-snug text-white/70">
                  <li>
                    <span className="text-white/85">OPD:</span> {hours.outpatient}
                  </li>
                  <li>
                    <span className="text-white/85">ER:</span> {hours.emergency}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-4 bg-white/10" />

        <div className="flex flex-col gap-1.5 text-[12px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <FooterLink href="/resources">Patient Resources</FooterLink>
            <FooterLink href="/contact">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Terms of Use</FooterLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
