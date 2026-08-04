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
  { label: "Research", href: "/research" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const ctaNavigation: NavItem = {
  label: "Appointment",
  href: "/appointment",
};

export const footerQuickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Research", href: "/research" },
  { label: "News & Events", href: "/news" },
  { label: "Patient Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerDepartments = [
  { label: "Neurology", href: "/departments" },
  { label: "Neurosurgery", href: "/departments" },
  { label: "Psychiatry", href: "/departments" },
  { label: "Neuro Rehabilitation", href: "/departments" },
  { label: "Pain Medicine", href: "/departments" },
  { label: "Diagnostics", href: "/departments" },
];

export const footerServices = [
  { label: "Stroke Care", href: "/services" },
  { label: "Epilepsy", href: "/services" },
  { label: "Brain Disorders", href: "/services" },
  { label: "Spine Disorders", href: "/services" },
  { label: "Mental Health", href: "/services" },
  { label: "Rehabilitation", href: "/services" },
];

