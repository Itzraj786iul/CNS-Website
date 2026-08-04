export const siteConfig = {
  name: "Center for Neuroscience",
  shortName: "CNS",
  description:
    "Patient-centred neuroscience care — neurology, neurosurgery, psychiatry, and rehabilitation at Center for Neuroscience, Raipur.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cns.org",
  locale: "en_US",
  announcement: null as string | null,
  location: "Raipur, Chhattisgarh",
  contact: {
    phone: null as string | null,
    emergency: "+91 73893 21886",
    email: "care@cns.org",
    address: "Center for Neuroscience, Raipur, Chhattisgarh 492001",
    whatsapp: "917389321886",
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
