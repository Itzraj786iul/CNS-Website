export const siteConfig = {
  name: "Center for Neuroscience",
  shortName: "CNS",
  description:
    "Advanced neuroscience care, research, and clinical excellence.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cns.org",
  locale: "en_US",
  announcement: null as string | null,
  contact: {
    phone: "",
    email: "",
    address: "",
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
