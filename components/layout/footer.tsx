import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/common/container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/common/social-icons";
import { Separator } from "@/components/ui/separator";
import { ctaNavigation, footerNavigation } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-white/70 transition-colors hover:text-white"
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
      <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
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
      className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
    >
      <Icon className="size-4" />
    </a>
  );
}

function Footer() {
  const { contact, social } = siteConfig;
  const hasContact = contact.phone || contact.email || contact.address;
  const hasSocial = Object.values(social).some(Boolean);

  return (
    <footer data-slot="footer" className="bg-cns-navy text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-5">
            <div>
              <p className="font-heading text-2xl font-semibold">
                {siteConfig.shortName}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
                {siteConfig.name}
              </p>
            </div>
            {hasSocial ? (
              <div className="flex flex-wrap gap-2">
                <SocialLink
                  href={social.facebook}
                  label="Facebook"
                  icon={FacebookIcon}
                />
                <SocialLink
                  href={social.instagram}
                  label="Instagram"
                  icon={InstagramIcon}
                />
                <SocialLink
                  href={social.linkedin}
                  label="LinkedIn"
                  icon={LinkedInIcon}
                />
                <SocialLink
                  href={social.youtube}
                  label="YouTube"
                  icon={YouTubeIcon}
                />
              </div>
            ) : null}
          </div>

          <FooterSection title="Explore" links={footerNavigation.explore} />
          <FooterSection title="Resources" links={footerNavigation.resources} />

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              {contact.phone ? (
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <Phone className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <a href={`tel:${contact.phone}`} className="hover:text-white">
                    {contact.phone}
                  </a>
                </li>
              ) : null}
              {contact.email ? (
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <Mail className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-white"
                  >
                    {contact.email}
                  </a>
                </li>
              ) : null}
              {contact.address ? (
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <span>{contact.address}</span>
                </li>
              ) : null}
              {!hasContact ? (
                <li>
                  <FooterLink href="/contact">Contact Us</FooterLink>
                </li>
              ) : null}
            </ul>

            <Link
              href={ctaNavigation.href}
              className={cn(
                "mt-6 inline-flex h-10 items-center justify-center rounded-full bg-secondary px-5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
              )}
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
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
