import type { LucideIcon } from "lucide-react";
import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";
import {
  facilityImagePath,
  IMAGE_CATEGORIES,
  type ImageCategory,
} from "@/lib/content/images";
import {
  Ambulance,
  FlaskConical,
  HeartPulse,
  Microscope,
  Pill,
  Scan,
  ScanLine,
  ShieldCheck,
  Syringe,
  Activity,
  Siren,
} from "lucide-react";

export type FacilityItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconVariant: "blue" | "green" | "orange" | "navy";
  image: string;
  imageCategory: ImageCategory;
  size: "large" | "medium" | "small";
};

export const facilitiesContent = {
  hero: {
    eyebrow: "Clinical Infrastructure",
    title: "Technology Supporting Better Outcomes",
    description:
      "Every scan, monitor, and surgical tool exists for one reason — to help us find answers faster and treat you with greater precision and safety.",
  },
  overview: {
    eyebrow: "Clinical Excellence",
    title: "Built for Advanced Neuro Care",
    description:
      "Every facility at CNS is purpose-built for neurological patients — from high-field imaging and digital monitoring to sterile surgical environments and 24×7 emergency response.",
  },
  facilities: [
    { title: "MRI", description: "High-resolution 3T MRI for faster, more accurate neurological diagnosis — often with same-day reporting.", icon: Scan, iconVariant: "blue", image: facilityImagePath("mri-suite"), imageCategory: IMAGE_CATEGORIES.mriSuite, size: "large" },
    { title: "CT Scan", description: "Rapid low-dose CT for stroke and trauma emergencies — critical when every minute saves brain tissue.", icon: ScanLine, iconVariant: "green", image: facilityImagePath("ct-scan"), imageCategory: IMAGE_CATEGORIES.ctScanRoom, size: "medium" },
    { title: "EEG", description: "Digital EEG to pinpoint seizure activity and guide the right treatment — without guesswork.", icon: Activity, iconVariant: "orange", image: facilityImagePath("eeg-lab"), imageCategory: IMAGE_CATEGORIES.diagnostics, size: "small" },
    { title: "EMG", description: "Nerve studies that identify the source of weakness or pain — so treatment targets the real problem.", icon: Microscope, iconVariant: "navy", image: facilityImagePath("emg-lab"), imageCategory: IMAGE_CATEGORIES.diagnostics, size: "small" },
    { title: "ICU", description: "Dedicated neuro ICU with continuous monitoring — for patients who need the closest medical attention.", icon: HeartPulse, iconVariant: "blue", image: facilityImagePath("neuro-icu"), imageCategory: IMAGE_CATEGORIES.icu, size: "large" },
    { title: "Modular OT", description: "Neuro-navigation in sterile theatres — so complex brain and spine surgery is safer and more precise.", icon: Syringe, iconVariant: "green", image: facilityImagePath("modular-ot"), imageCategory: IMAGE_CATEGORIES.operationTheatre, size: "medium" },
    { title: "Emergency", description: "24×7 stroke pathway and triage — our team is ready the moment you or your family needs urgent help.", icon: Siren, iconVariant: "orange", image: facilityImagePath("emergency"), imageCategory: IMAGE_CATEGORIES.emergency, size: "medium" },
    { title: "Laboratory", description: "In-house neuro diagnostic testing — so you spend less time waiting and more time starting treatment.", icon: FlaskConical, iconVariant: "navy", image: facilityImagePath("laboratory"), imageCategory: IMAGE_CATEGORIES.diagnostics, size: "small" },
    { title: "Pharmacy", description: "Neurological medications available on campus — so your treatment is not delayed after your visit.", icon: Pill, iconVariant: "blue", image: facilityImagePath("pharmacy"), imageCategory: IMAGE_CATEGORIES.pharmacy, size: "small" },
    { title: "Ambulance", description: "ALS-equipped ambulances with pre-hospital stroke notification — care begins before you arrive.", icon: Ambulance, iconVariant: "green", image: facilityImagePath("ambulance"), imageCategory: IMAGE_CATEGORIES.ambulance, size: "large" },
  ] satisfies FacilityItem[],
  technology: {
    eyebrow: "Clinical Technology",
    title: "Precision Diagnostic & Surgical Systems",
    description: "Technology that helps us find answers faster — so you spend less time waiting and more time healing.",
    items: [
      { icon: Scan, title: "3T MRI Suite", description: "High-resolution imaging for faster, more accurate neurological diagnosis.", variant: "blue" as const },
      { icon: Syringe, title: "Neuro-Navigation", description: "Intraoperative guidance that makes complex brain and spine surgery safer.", variant: "green" as const },
      { icon: Activity, title: "Digital Monitoring", description: "Continuous EEG and vital sign surveillance — so changes are caught early.", variant: "orange" as const },
      { icon: Microscope, title: "Advanced Lab", description: "Specialized neuro diagnostic panels with rapid turnaround on campus.", variant: "navy" as const },
    ],
  },
  safety: {
    eyebrow: "Patient Safety",
    title: "Safety at Every Level",
    description: "Patient safety is embedded in our infrastructure, protocols, and culture — from infection control to emergency preparedness.",
    items: [
      { icon: ShieldCheck, title: "Infection Control", description: "Strict sterilization protocols and HEPA-filtered surgical environments." },
      { icon: HeartPulse, title: "Critical Care Standards", description: "ICU staffing ratios and monitoring aligned with international guidelines." },
      { icon: Siren, title: "Emergency Preparedness", description: "Regular drills, stroke code pathways, and rapid response teams." },
      { icon: Ambulance, title: "Transport Safety", description: "ALS-equipped ambulances with trained paramedic staff." },
    ],
  },
  cta: {
    title: "See How Our Technology Supports Your Care",
    description:
      "Schedule a visit to tour our facilities or speak with our team about the diagnostic and treatment options available for your condition.",
    ...standardAppointmentCta,
    ...standardWhatsAppCta(),
  },
} as const;
