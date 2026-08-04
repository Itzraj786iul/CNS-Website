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
    /** TODO: Add main appointment line when confirmed by client */
    phone: null as string | null,
    /** TODO: Verify emergency number with hospital administration */
    emergency: "+91 73893 21886",
    email: "care@cns.org",
    address: "Center for Neuroscience, Raipur, Chhattisgarh 492001",
    whatsapp: "917389321886",
    /** Department contact emails — TODO: verify with client */
    departments: {
      appointments: "appointments@cns.org",
      neurology: "neurology@cns.org",
      neurosurgery: "neurosurgery@cns.org",
      psychiatry: "psychiatry@cns.org",
      billing: "billing@cns.org",
      records: "records@cns.org",
      medicalRecords: "medicalrecords@cns.org",
    },
  },
  hours: {
    outpatient: "Mon – Sat, 8:00 AM – 8:00 PM",
    emergency: "Open 24 hours, every day",
    diagnostics: "Mon – Sat, 7:00 AM – 9:00 PM",
    /** TODO: Verify pharmacy hours with administration */
    pharmacy: "Mon – Sat, 7:30 AM – 9:30 PM",
    /** TODO: Verify visiting hours with administration */
    visiting: "Daily, 11:00 AM – 1:00 PM & 5:00 PM – 7:00 PM",
  },
  maps: {
    /**
     * Optional explicit Google Maps embed URL.
     * When null, embed is built from contact.address.
     * TODO: Replace with exact embed URL or lat/lng when available.
     */
    embedUrl: null as string | null,
    /** Optional Google Maps directions URL — built from address when null */
    directionsUrl: null as string | null,
    lat: null as number | null,
    lng: null as number | null,
  },
  social: {
    /** Set to profile URL when available — null hides the icon */
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
    youtube: null as string | null,
    twitter: null as string | null,
  },
} as const;

export type SiteConfig = typeof siteConfig;
