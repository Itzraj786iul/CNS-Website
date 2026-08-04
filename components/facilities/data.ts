import type { LucideIcon } from "lucide-react";
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
  size: "large" | "medium" | "small";
};

export const facilitiesContent = {
  hero: {
    eyebrow: "Clinical Infrastructure",
    title: "Technology Supporting Better Outcomes",
    description:
      "Purpose-built facilities for accurate diagnosis, safe surgery, critical care, and comprehensive neurological recovery.",
  },
  overview: {
    eyebrow: "Clinical Excellence",
    title: "Built for Advanced Neuro Care",
    description:
      "Every facility at CNS is purpose-built for neurological patients — from high-field imaging and digital monitoring to sterile surgical environments and 24×7 emergency response.",
  },
  facilities: [
    { title: "MRI", description: "3T high-field MRI with functional, diffusion, and spectroscopy protocols for precise neuroimaging.", icon: Scan, iconVariant: "blue", image: "https://placehold.co/800x600/EEF4F9/1F7CC6/png?font=roboto&text=MRI+Suite", size: "large" },
    { title: "CT Scan", description: "Multi-slice CT with rapid acquisition for emergency stroke and trauma evaluation.", icon: ScanLine, iconVariant: "green", image: "https://placehold.co/600x400/F8FBFD/16324A/png?font=roboto&text=CT+Scan", size: "medium" },
    { title: "EEG", description: "Digital EEG and continuous video-EEG monitoring for epilepsy and encephalopathy diagnosis.", icon: Activity, iconVariant: "orange", image: "https://placehold.co/600x400/E7EEF5/7DBD24/png?font=roboto&text=EEG+Lab", size: "small" },
    { title: "EMG", description: "Nerve conduction studies and electromyography for neuromuscular disorder evaluation.", icon: Microscope, iconVariant: "navy", image: "https://placehold.co/600x400/FFFFFF/16324A/png?font=roboto&text=EMG+Lab", size: "small" },
    { title: "ICU", description: "Dedicated neuro ICU with ICP monitoring, ventilator support, and 1:1 nursing care.", icon: HeartPulse, iconVariant: "blue", image: "https://placehold.co/800x600/16324A/FFFFFF/png?font=roboto&text=Neuro+ICU", size: "large" },
    { title: "Modular OT", description: "Laminar-flow operation theatres with neuro-navigation and intraoperative imaging.", icon: Syringe, iconVariant: "green", image: "https://placehold.co/600x500/EEF4F9/1F7CC6/png?font=roboto&text=Modular+OT", size: "medium" },
    { title: "Emergency", description: "24×7 emergency department with stroke pathway and immediate specialist access.", icon: Siren, iconVariant: "orange", image: "https://placehold.co/600x400/F8FBFD/F7941D/png?font=roboto&text=Emergency", size: "medium" },
    { title: "Laboratory", description: "NABL-accredited pathology with specialized neuro diagnostic test panels.", icon: FlaskConical, iconVariant: "navy", image: "https://placehold.co/600x400/E7EEF5/16324A/png?font=roboto&text=Laboratory", size: "small" },
    { title: "Pharmacy", description: "In-house pharmacy stocking neurological medications and emergency drug protocols.", icon: Pill, iconVariant: "blue", image: "https://placehold.co/600x400/FFFFFF/7DBD24/png?font=roboto&text=Pharmacy", size: "small" },
    { title: "Ambulance", description: "Advanced life support ambulances with pre-hospital stroke notification capability.", icon: Ambulance, iconVariant: "green", image: "https://placehold.co/800x500/F8FBFD/16324A/png?font=roboto&text=Ambulance", size: "large" },
  ] satisfies FacilityItem[],
  technology: {
    eyebrow: "Clinical Technology",
    title: "Precision Diagnostic & Surgical Systems",
    description: "Our facilities are continuously upgraded to incorporate the latest advances in neurological diagnosis and treatment.",
    items: [
      { icon: Scan, title: "3T MRI Suite", description: "High-resolution imaging with advanced neuro protocols.", variant: "blue" as const },
      { icon: Syringe, title: "Neuro-Navigation", description: "Intraoperative guidance for safer surgical precision.", variant: "green" as const },
      { icon: Activity, title: "Digital Monitoring", description: "Continuous EEG, ICP, and vital sign surveillance.", variant: "orange" as const },
      { icon: Microscope, title: "Advanced Lab", description: "Rapid turnaround on specialized diagnostic panels.", variant: "navy" as const },
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
    title: "Tour Our Facilities",
    description: "Schedule a visit to see our infrastructure firsthand or speak with our team about the services available.",
    primaryLabel: "Book Appointment",
    primaryHref: "/appointment",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
  },
} as const;
