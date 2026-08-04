import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  external?: boolean;
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const ctaNavigation: NavItem = {
  label: "Appointment",
  href: "/appointment",
};

export const footerNavigation = {
  explore: mainNavigation.filter((item) =>
    ["/about", "/departments", "/doctors", "/services", "/facilities"].includes(
      item.href
    )
  ),
  resources: mainNavigation.filter((item) =>
    ["/gallery", "/careers", "/blog", "/contact"].includes(item.href)
  ),
} as const;
