"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Siren } from "lucide-react";

import { Container } from "@/components/common/container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/common/social-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ctaNavigation,
  footerDepartments,
  footerQuickLinks,
  footerServices,
} from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-white/70 transition-colors hover:text-white">
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
      <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
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
      className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:scale-[1.02] hover:border-white/25 hover:bg-white/10 hover:text-white"
    >
      <Icon className="size-4" />
    </a>
  );
}

function Footer() {
  const { contact, social, hours } = siteConfig;

  return (
    <footer data-slot="footer" className="bg-cns-navy text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div className="space-y-5 sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <div>
              <p className="font-heading text-2xl font-semibold">{siteConfig.shortName}</p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
                {siteConfig.name} — advancing brain and spine health through
                clinical excellence, research, and compassionate care.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <SocialLink href={social.facebook} label="Facebook" icon={FacebookIcon} />
              <SocialLink href={social.instagram} label="Instagram" icon={InstagramIcon} />
              <SocialLink href={social.linkedin} label="LinkedIn" icon={LinkedInIcon} />
              <SocialLink href={social.youtube} label="YouTube" icon={YouTubeIcon} />
            </div>
            <form
              className="space-y-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <p className="text-sm font-semibold text-white/90">Stay Updated</p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email for newsletter"
                  className="h-10 flex-1 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                />
                <Button type="submit" size="sm" className="h-10 rounded-full bg-secondary px-5 hover:bg-secondary/90">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>

          <FooterSection title="Quick Links" links={footerQuickLinks} />
          <FooterSection title="Departments" links={footerDepartments} />
          <FooterSection title="Services" links={footerServices} />

          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                Emergency Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <Siren className="mt-0.5 size-4 shrink-0 text-destructive" />
                  <a href={`tel:${contact.emergency.replace(/\s/g, "")}`} className="hover:text-white">
                    {contact.emergency}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <Phone className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <Mail className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <a href={`mailto:${contact.email}`} className="hover:text-white">
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <span>{contact.address}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                Working Hours
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
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

            <Link
              href={ctaNavigation.href}
              className="inline-flex h-10 items-center justify-center rounded-full bg-secondary px-5 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-secondary/90"
            >
              {ctaNavigation.label}
            </Link>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
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
