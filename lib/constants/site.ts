export const siteConfig = {
  name: "Center for Neuroscience",
  shortName: "CNS",
  description:
    "Advanced neuroscience care, research, and clinical excellence.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cns.org",
  locale: "en_US",
  announcement: null as string | null,
  contact: {
    phone: "+91 80 4567 8900",
    emergency: "+91 80 4567 8911",
    email: "care@cns.org",
    address: "Center for Neuroscience, Medical District, Bengaluru 560001",
    whatsapp: "+9180000000000",
  },
  hours: {
    outpatient: "Mon – Sat, 8:00 AM – 8:00 PM",
    emergency: "Open 24 hours, every day",
    diagnostics: "Mon – Sat, 7:00 AM – 9:00 PM",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
