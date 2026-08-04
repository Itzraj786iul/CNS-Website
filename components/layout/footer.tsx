"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Siren } from "lucide-react";

import { Container } from "@/components/common/container";
import { LogoLink } from "@/components/common/logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/common/social-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  footerDepartments,
  footerQuickLinks,
  footerServices,
} from "@/lib/constants/navigation";
import {
  getEmergencyTelHref,
  toTelHref,
} from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-white/80 transition-all duration-200 hover:translate-x-0.5 hover:text-white"
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
      <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
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
      className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:bg-white/10 hover:text-white"
    >
      <Icon className="size-4 stroke-[1.75]" />
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
        className="neural-pattern pointer-events-none absolute inset-0 opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
      />
      <Container className="relative py-9 md:py-11">
        <div className="grid min-w-0 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-8">
          <div className="min-w-0 space-y-5 sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <div className="space-y-4">
              <LogoLink size="lg" variant="footer" linkClassName="hover:scale-100" />
              <p className="max-w-xs text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                Center for Neuroscience · Raipur
              </p>
              <p className="max-w-sm text-sm leading-[1.8] text-white/80">
                Patient-centred neuroscience care — integrating neurology,
                neurosurgery, psychiatry, and rehabilitation under one trusted
                institution.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <SocialLink href={social.facebook} label="Facebook" icon={FacebookIcon} />
              <SocialLink href={social.instagram} label="Instagram" icon={InstagramIcon} />
              <SocialLink href={social.linkedin} label="LinkedIn" icon={LinkedInIcon} />
              <SocialLink href={social.youtube} label="YouTube" icon={YouTubeIcon} />
            </div>
            <form
              className="min-w-0 space-y-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <p className="text-sm font-semibold text-white/95">Clinical Updates & News</p>
              <p className="text-xs leading-relaxed text-white/70">
                Health insights and hospital announcements from CNS.
              </p>
              <div className="grid min-w-0 grid-cols-1 gap-2.5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-stretch">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email for newsletter"
                  className="h-11 min-w-0 w-full rounded-full border border-white/20 bg-white/8 px-4 text-sm text-white placeholder:text-white/55 outline-none transition-all duration-300 focus:border-primary/60 focus:ring-2 focus:ring-primary/40"
                />
                <Button
                  type="submit"
                  className="h-11 w-full shrink-0 rounded-full bg-secondary px-5 whitespace-nowrap shadow-glow-green hover:bg-secondary/90 sm:w-auto sm:min-w-[7.5rem]"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>

          <FooterSection title="Quick Links" links={footerQuickLinks} />
          <FooterSection title="Departments" links={footerDepartments} />
          <FooterSection title="Services" links={footerServices} />

          <div className="space-y-6">
            <div className="rounded-2xl border border-destructive/25 bg-destructive/[0.06] p-5 ring-1 ring-destructive/10">
              <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-white/95">
                Emergency Assistance
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                Stroke, seizures, or head injury — call immediately.
              </p>
              <ul className="mt-4 space-y-3.5">
                <li className="flex items-start gap-3 text-sm">
                  <Siren className="mt-0.5 size-4 shrink-0 text-destructive" />
                  <a
                    href={emergencyHref}
                    className="font-heading text-base font-semibold text-white hover:text-white/90"
                  >
                    {contact.emergency}
                  </a>
                </li>
                {contact.phone ? (
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <Phone className="mt-0.5 size-4 shrink-0 text-secondary" />
                    <a href={toTelHref(contact.phone)} className="hover:text-white">
                      {contact.phone}
                    </a>
                  </li>
                ) : null}
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <Mail className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <a href={`mailto:${contact.email}`} className="hover:text-white">
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <span>{contact.address}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                Working Hours
              </h3>
              <ul className="space-y-2.5 text-sm leading-relaxed text-white/80">
                <li>
                  <span className="font-medium text-white/85">Outpatient:</span>{" "}
                  {hours.outpatient}
                </li>
                <li>
                  <span className="font-medium text-white/85">Emergency:</span>{" "}
                  {hours.emergency}
                </li>
                <li>
                  <span className="font-medium text-white/85">Diagnostics:</span>{" "}
                  {hours.diagnostics}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-4 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
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
