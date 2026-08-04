import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Briefcase,
  Building2,
  FlaskConical,
  Images,
  Newspaper,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  external?: boolean;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const moreNavigationGroups: NavGroup[] = [
  {
    title: "Hospital",
    items: [
      { label: "Facilities", href: "/facilities", icon: Building2 },
      { label: "Gallery", href: "/gallery", icon: Images },
      { label: "Careers", href: "/careers", icon: Briefcase },
    ],
  },
  {
    title: "Knowledge",
    items: [
      { label: "Research", href: "/research", icon: FlaskConical },
      { label: "News", href: "/news", icon: Newspaper },
      {
        label: "Patient Resources",
        href: "/resources",
        icon: BookOpen,
      },
    ],
  },
];

export const moreNavigation: NavItem[] = moreNavigationGroups.flatMap(
  (group) => group.items
);

/** Full flat list — footer and legacy references */
export const mainNavigation: NavItem[] = [
  ...primaryNavigation,
  ...moreNavigation,
];

export const ctaNavigation: NavItem = {
  label: "Book Appointment",
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
