import type { LightboxImage } from "@/components/common/lightbox";
import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";
import { galleryImagePath, hospitalImage, IMAGE_CATEGORIES } from "@/lib/content/images";

function galleryPhoto(
  category: string,
  slug: string,
  alt: string,
  title: string,
  captionCategory: string,
  imageCategory: (typeof IMAGE_CATEGORIES)[keyof typeof IMAGE_CATEGORIES]
): LightboxImage {
  const ref = hospitalImage(galleryImagePath(category, slug), alt, imageCategory);
  return {
    src: ref.src,
    alt: ref.alt,
    title,
    category: captionCategory,
  };
}

export const galleryContent = {
  hero: {
    eyebrow: "Life at CNS",
    title: "Our Hospital Environment",
    description:
      "A visual journey through Center for Neuroscience — from clinical infrastructure and technology to patient care and community engagement.",
  },
  sections: [
    {
      id: "hospital-infrastructure",
      eyebrow: "Infrastructure",
      title: "Hospital Infrastructure",
      description:
        "Campus facilities designed for neurological inpatient, outpatient, and critical care.",
      images: [
        galleryPhoto("hospital-infrastructure", "main-entrance", "CNS hospital main entrance", "Main Entrance", "Infrastructure", IMAGE_CATEGORIES.hospitalExterior),
        galleryPhoto("hospital-infrastructure", "reception-lobby", "Hospital reception and patient lobby", "Reception & Lobby", "Infrastructure", IMAGE_CATEGORIES.reception),
        galleryPhoto("hospital-infrastructure", "waiting-area", "Comfortable patient waiting area", "Waiting Area", "Infrastructure", IMAGE_CATEGORIES.waitingArea),
        galleryPhoto("hospital-infrastructure", "patient-rooms", "Private inpatient rooms", "Patient Rooms", "Infrastructure", IMAGE_CATEGORIES.patientCare),
      ],
    },
    {
      id: "advanced-technology",
      eyebrow: "Technology",
      title: "Advanced Technology",
      description:
        "Diagnostic and surgical technology supporting precision neurological care.",
      images: [
        galleryPhoto("advanced-technology", "mri-suite", "3T MRI imaging suite", "MRI Suite", "Technology", IMAGE_CATEGORIES.mriSuite),
        galleryPhoto("advanced-technology", "ct-scan", "CT imaging room", "CT Scan Room", "Technology", IMAGE_CATEGORIES.ctScanRoom),
        galleryPhoto("advanced-technology", "neuro-navigation", "Neuro-navigation surgical system", "Neuro-Navigation", "Technology", IMAGE_CATEGORIES.advancedTechnology),
      ],
    },
    {
      id: "operation-theatre",
      eyebrow: "Surgery",
      title: "Operation Theatre",
      description:
        "Modular operating theatres equipped for complex brain and spine procedures.",
      images: [
        galleryPhoto("operation-theatre", "modular-ot", "Modular operation theatre", "Modular Operation Theatre", "Surgery", IMAGE_CATEGORIES.operationTheatre),
        galleryPhoto("operation-theatre", "surgical-team", "Neurosurgery team in theatre", "Surgical Team", "Surgery", IMAGE_CATEGORIES.operationTheatre),
        galleryPhoto("operation-theatre", "pre-op-area", "Pre-operative preparation area", "Pre-Operative Area", "Surgery", IMAGE_CATEGORIES.operationTheatre),
      ],
    },
    {
      id: "patient-care",
      eyebrow: "Care",
      title: "Patient Care",
      description:
        "Compassionate care at consultation, treatment, and recovery touchpoints.",
      images: [
        galleryPhoto("patient-care", "consultation", "Specialist consultation with patient", "Specialist Consultation", "Patient Care", IMAGE_CATEGORIES.consultationRoom),
        galleryPhoto("patient-care", "rehabilitation", "Neuro rehabilitation session", "Neuro Rehabilitation", "Patient Care", IMAGE_CATEGORIES.neuroRehabilitation),
        galleryPhoto("patient-care", "nursing-care", "Nursing care on ward", "Nursing Care", "Patient Care", IMAGE_CATEGORIES.patientCare),
      ],
    },
    {
      id: "events",
      eyebrow: "Community",
      title: "Events",
      description:
        "Health awareness programs, community camps, and academic gatherings.",
      images: [
        galleryPhoto("events", "health-camp", "Community health camp", "Community Health Camp", "Events", IMAGE_CATEGORIES.events),
        galleryPhoto("events", "awareness-drive", "Public health awareness event", "Awareness Drive", "Events", IMAGE_CATEGORIES.events),
        galleryPhoto("events", "support-group", "Patient support group meeting", "Support Group", "Events", IMAGE_CATEGORIES.events),
      ],
    },
    {
      id: "research",
      eyebrow: "Research",
      title: "Research",
      description:
        "Clinical research activities and academic collaboration spaces.",
      images: [
        galleryPhoto("research", "research-lab", "Clinical research laboratory", "Research Laboratory", "Research", IMAGE_CATEGORIES.research),
        galleryPhoto("research", "academic-session", "Academic teaching session", "Academic Session", "Research", IMAGE_CATEGORIES.research),
      ],
    },
    {
      id: "diagnostics",
      eyebrow: "Diagnostics",
      title: "Diagnostics",
      description:
        "Neurophysiology and pathology laboratories for comprehensive assessment.",
      images: [
        galleryPhoto("diagnostics", "eeg-lab", "Digital EEG laboratory", "EEG Laboratory", "Diagnostics", IMAGE_CATEGORIES.diagnostics),
        galleryPhoto("diagnostics", "pathology-lab", "Pathology and lab services", "Pathology Lab", "Diagnostics", IMAGE_CATEGORIES.diagnostics),
        galleryPhoto("diagnostics", "emg-suite", "EMG and nerve study suite", "EMG Suite", "Diagnostics", IMAGE_CATEGORIES.diagnostics),
      ],
    },
    {
      id: "emergency",
      eyebrow: "Emergency",
      title: "Emergency",
      description:
        "Emergency department and critical response infrastructure.",
      images: [
        galleryPhoto("emergency", "ed-triage", "Emergency department triage area", "Emergency Triage", "Emergency", IMAGE_CATEGORIES.emergency),
        galleryPhoto("emergency", "ambulance-bay", "Ambulance bay and emergency access", "Ambulance Bay", "Emergency", IMAGE_CATEGORIES.ambulance),
        galleryPhoto("emergency", "neuro-icu", "Neuro intensive care unit", "Neuro ICU", "Emergency", IMAGE_CATEGORIES.icu),
      ],
    },
  ],
  cta: {
    title: "Ready to Visit CNS?",
    description:
      "Schedule a consultation or tour our facilities in person — our team will help you prepare for your visit.",
    ...standardAppointmentCta,
    ...standardWhatsAppCta(),
  },
} as const;

export type GallerySection = (typeof galleryContent.sections)[number];
