import type { LucideIcon } from "lucide-react";
import {
  Award,
  Building2,
  Eye,
  FlaskConical,
  HeartHandshake,
  Lightbulb,
  Microscope,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";
import {
  homeImagePath,
  hospitalImage,
  IMAGE_CATEGORIES,
} from "@/lib/content/images";

export const aboutContent = {
  hero: {
    eyebrow: "Our Institution",
    title: "About Center for Neuroscience",
    description:
      "The people, values, and clinical standards behind Raipur's trusted centre for brain and spine care — where precision medicine meets genuine compassion.",
  },
  aboutCns: {
    title: "A Legacy of Neuroscience Excellence",
    description:
      "Founded with a vision to make world-class neurological care accessible, the Center for Neuroscience has grown into a comprehensive institution serving patients across the region. Our integrated model brings neurology, neurosurgery, psychiatry, and rehabilitation together under one roof — ensuring seamless, coordinated treatment at every stage of care.",
    secondaryDescription:
      "We invest continuously in clinical talent, research partnerships, and advanced technology so that every patient receives care grounded in evidence, delivered with empathy, and tailored to their unique needs.",
    image: hospitalImage(
      homeImagePath("campus"),
      "Center for Neuroscience hospital campus",
      IMAGE_CATEGORIES.hospitalExterior
    ),
  },
  visionMission: [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the most trusted center for neuroscience in the region — recognized for clinical innovation, research leadership, and exceptional patient outcomes.",
      variant: "blue" as const,
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver accessible, evidence-based neurological care through expert clinicians, advanced technology, and a culture that puts every patient at the center of every decision.",
      variant: "green" as const,
    },
  ],
  coreValues: [
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "Transparent, ethical practice in every clinical and administrative interaction.",
      variant: "blue" as const,
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new techniques, technology, and research to improve outcomes.",
      variant: "green" as const,
    },
    {
      icon: HeartHandshake,
      title: "Compassion",
      description: "Treating every patient and family with dignity, empathy, and respect.",
      variant: "orange" as const,
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards across clinical care and service delivery.",
      variant: "navy" as const,
    },
    {
      icon: FlaskConical,
      title: "Research",
      description: "Contributing to medical knowledge through studies and academic collaboration.",
      variant: "blue" as const,
    },
    {
      icon: Users,
      title: "Patient First",
      description: "Designing every process around the needs, comfort, and recovery of patients.",
      variant: "green" as const,
    },
  ],
  timeline: [
    {
      year: "2001",
      title: "Foundation",
      description:
        "Center for Neuroscience established with a neurology outpatient clinic and dedicated EEG laboratory.",
    },
    {
      year: "2008",
      title: "Expansion",
      description:
        "New hospital wing opened with 120 beds, neuro ICU, and the region's first dedicated stroke unit.",
    },
    {
      year: "2015",
      title: "New Departments",
      description:
        "Psychiatry, clinical psychology, and neuro rehabilitation launched to provide holistic patient care.",
    },
    {
      year: "2020",
      title: "Advanced Technology",
      description:
        "3T MRI, neuro-navigation surgery suite, and digital epilepsy monitoring center commissioned.",
    },
    {
      year: "2026",
      title: "Future Vision",
      description:
        "Expanding research programs, tele-neurology services, and a dedicated movement disorders center.",
    },
  ],
  leadership: [
    {
      name: "Clinical Director",
      role: "Director",
      qualification: "Pending client verification",
      bio: "Provides overall clinical leadership and governance for neuroscience programs at CNS.",
      image: hospitalImage(
        homeImagePath("leader-01"),
        "Clinical Director portrait at Center for Neuroscience",
        IMAGE_CATEGORIES.doctors
      ),
    },
    {
      name: "Medical Director",
      role: "Medical Director",
      qualification: "Pending client verification",
      bio: "Oversees clinical standards, surgical programs, and quality initiatives across departments.",
      image: hospitalImage(
        homeImagePath("leader-02"),
        "Medical Director portrait at Center for Neuroscience",
        IMAGE_CATEGORIES.doctors
      ),
    },
    {
      name: "Hospital Administrator",
      role: "Administrator",
      qualification: "Pending client verification",
      bio: "Manages operations, patient services, and strategic partnerships supporting clinical care.",
      image: hospitalImage(
        homeImagePath("leader-03"),
        "Hospital Administrator portrait at Center for Neuroscience",
        IMAGE_CATEGORIES.doctors
      ),
    },
  ],
  infrastructure: [
    {
      icon: Building2,
      title: "200-Bed Neuro Hospital",
      description: "Purpose-built facility with dedicated wards, private rooms, and family accommodation.",
      variant: "blue" as const,
    },
    {
      icon: Microscope,
      title: "Advanced Imaging Center",
      description: "3T MRI, CT, PET-CT, and digital angiography with same-day reporting.",
      variant: "green" as const,
    },
    {
      icon: FlaskConical,
      title: "Integrated Laboratory",
      description: "NABL-accredited pathology with specialized neuro diagnostic panels.",
      variant: "orange" as const,
    },
    {
      icon: Users,
      title: "Rehabilitation Center",
      description: "Physiotherapy, occupational therapy, speech therapy, and cognitive rehabilitation suites.",
      variant: "navy" as const,
    },
  ],
  cta: {
    title: "Ready to Begin Your Care Journey?",
    description:
      "Whether you need a first consultation, a second opinion, or emergency care — our team is here to guide you and your family with clarity and compassion.",
    ...standardAppointmentCta,
    ...standardWhatsAppCta(),
  },
} as const;

export type ValueItem = (typeof aboutContent.coreValues)[number] & {
  icon: LucideIcon;
};
