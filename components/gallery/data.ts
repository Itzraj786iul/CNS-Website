import type { LightboxImage } from "@/components/common/lightbox";

function galleryImage(
  text: string,
  bg = "EEF4F9",
  fg = "16324A",
  size = "600x750"
): LightboxImage["src"] {
  return `https://placehold.co/${size}/${bg}/${fg}/png?font=roboto&text=${encodeURIComponent(text)}`;
}

export const galleryContent = {
  hero: {
    title: "Gallery",
    description:
      "Explore our hospital environment — from advanced infrastructure and surgical suites to compassionate patient care and community events.",
  },
  sections: [
    {
      id: "photo-gallery",
      eyebrow: "Gallery",
      title: "Photo Gallery",
      description: "A visual journey through the Center for Neuroscience.",
      images: [
        { src: galleryImage("Main Entrance"), alt: "CNS main entrance", title: "Main Entrance", category: "Campus" },
        { src: galleryImage("Lobby", "F8FBFD", "1F7CC6"), alt: "Hospital lobby", title: "Patient Lobby", category: "Campus" },
        { src: galleryImage("Waiting Area"), alt: "Waiting area", title: "Comfortable Waiting Area", category: "Campus" },
        { src: galleryImage("Garden", "E7EEF5", "7DBD24", "600x600"), alt: "Healing garden", title: "Healing Garden", category: "Campus" },
      ],
    },
    {
      id: "infrastructure",
      eyebrow: "Infrastructure",
      title: "Hospital Infrastructure",
      description: "Modern facilities built for complex neurological care.",
      images: [
        { src: galleryImage("Hospital Wing", "16324A", "FFFFFF"), alt: "Hospital building", title: "Neuro Hospital Wing", category: "Infrastructure" },
        { src: galleryImage("Patient Rooms"), alt: "Patient rooms", title: "Private Patient Rooms", category: "Infrastructure" },
        { src: galleryImage("Nursing Station", "FFFFFF", "16324A", "600x600"), alt: "Nursing station", title: "Nursing Station", category: "Infrastructure" },
        { src: galleryImage("Recovery Ward"), alt: "Recovery ward", title: "Recovery Ward", category: "Infrastructure" },
      ],
    },
    {
      id: "operation-theatre",
      eyebrow: "Surgery",
      title: "Operation Theatre",
      description: "State-of-the-art modular operating theatres with neuro-navigation.",
      images: [
        { src: galleryImage("Modular OT", "EEF4F9", "1F7CC6"), alt: "Operation theatre", title: "Modular Operation Theatre", category: "Surgery" },
        { src: galleryImage("Surgical Team"), alt: "Surgical team", title: "Neurosurgery Team", category: "Surgery" },
        { src: galleryImage("Neuro Navigation", "F8FBFD", "16324A", "600x800"), alt: "Neuro navigation system", title: "Neuro-Navigation Suite", category: "Surgery" },
      ],
    },
    {
      id: "diagnostics",
      eyebrow: "Diagnostics",
      title: "Diagnostics",
      description: "Advanced imaging and neurophysiology laboratories.",
      images: [
        { src: galleryImage("MRI Suite", "E7EEF5", "1F7CC6"), alt: "MRI suite", title: "3T MRI Suite", category: "Diagnostics" },
        { src: galleryImage("CT Scan"), alt: "CT scan room", title: "CT Imaging", category: "Diagnostics" },
        { src: galleryImage("EEG Lab", "FFFFFF", "7DBD24", "600x600"), alt: "EEG laboratory", title: "Digital EEG Lab", category: "Diagnostics" },
        { src: galleryImage("Lab", "F8FBFD", "16324A"), alt: "Pathology lab", title: "Pathology Laboratory", category: "Diagnostics" },
      ],
    },
    {
      id: "patient-care",
      eyebrow: "Care",
      title: "Patient Care",
      description: "Compassionate care delivered at every touchpoint.",
      images: [
        { src: galleryImage("Consultation"), alt: "Doctor consultation", title: "Specialist Consultation", category: "Patient Care" },
        { src: galleryImage("Rehabilitation"), alt: "Rehabilitation session", title: "Neuro Rehabilitation", category: "Patient Care" },
        { src: galleryImage("Physiotherapy", "EEF4F9", "7DBD24", "600x700"), alt: "Physiotherapy", title: "Physiotherapy Session", category: "Patient Care" },
      ],
    },
    {
      id: "events",
      eyebrow: "Community",
      title: "Events",
      description: "Health camps, awareness drives, and academic conferences.",
      images: [
        { src: galleryImage("Health Camp"), alt: "Community health camp", title: "Community Health Camp", category: "Events" },
        { src: galleryImage("Stroke Awareness"), alt: "Stroke awareness event", title: "Stroke Awareness Day", category: "Events" },
        { src: galleryImage("Conference", "16324A", "FFFFFF", "600x600"), alt: "Medical conference", title: "Neuroscience Conference", category: "Events" },
        { src: galleryImage("Workshop"), alt: "Medical workshop", title: "Clinical Workshop", category: "Events" },
      ],
    },
  ],
  cta: {
    title: "Experience CNS in Person",
    description: "Schedule a visit to tour our facilities or book a consultation with our specialists.",
    primaryLabel: "Book Appointment",
    primaryHref: "/appointment",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
  },
} as const;

export type GallerySection = (typeof galleryContent.sections)[number];
