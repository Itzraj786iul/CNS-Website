import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Ambulance,
  Brain,
  BrainCircuit,
  FlaskConical,
  Heart,
  HeartPulse,
  Microscope,
  Pill,
  Scan,
  Users,
} from "lucide-react";

import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";
import {
  homeImagePath,
  hospitalImage,
  IMAGE_CATEGORIES,
} from "@/lib/content/images";
import { departmentPath } from "@/lib/content/slugs";

export type DepartmentItem = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconVariant: "blue" | "green" | "orange" | "navy";
  treatments: string[];
  href: string;
  detail: {
    overview: string;
    highlights: string[];
  };
};

const department = (
  slug: string,
  item: Omit<DepartmentItem, "slug" | "href">
): DepartmentItem => ({
  slug,
  href: departmentPath(slug),
  ...item,
});

export const departmentsContent = {
  hero: {
    eyebrow: "Clinical Excellence",
    title: "Integrated Brain & Spine Departments",
    description:
      "Subspecialist-led departments — neurology, neurosurgery, psychiatry, and rehabilitation working as one team.",
  },
  overview: {
    eyebrow: "Comprehensive Neuroscience Care",
    title: "Every Specialty, One Coordinated Team",
    description:
      "Each department at CNS is staffed by subspecialty-trained clinicians supported by dedicated nursing teams, advanced diagnostics, and coordinated care pathways. From acute emergencies to long-term rehabilitation, patients receive seamless transitions between services.",
  },
  departments: [
    department("neurology", {
      title: "Neurology",
      description:
        "Expert management of stroke, epilepsy, movement disorders, dementia, and neuromuscular conditions.",
      icon: Brain,
      iconVariant: "blue",
      treatments: ["Stroke care", "Epilepsy management", "Movement disorders"],
      detail: {
        overview:
          "The neurology department provides outpatient and inpatient care for stroke, epilepsy, movement disorders, dementia, and neuromuscular disease — supported by on-site imaging and neurophysiology.",
        highlights: [
          "Acute and outpatient stroke follow-up",
          "Epilepsy and movement disorder clinics",
          "Memory and cognitive neurology",
          "Coordination with neurosurgery and rehab",
        ],
      },
    }),
    department("neurosurgery", {
      title: "Neurosurgery",
      description:
        "Advanced surgical care for brain tumors, spine disorders, vascular malformations, and trauma.",
      icon: BrainCircuit,
      iconVariant: "green",
      treatments: ["Brain tumor surgery", "Spine surgery", "Minimally invasive procedures"],
      detail: {
        overview:
          "Neurosurgeons perform complex brain and spine procedures with intraoperative navigation, working closely with neurologists, ICU teams, and rehabilitation specialists for complete perioperative care.",
        highlights: [
          "Brain tumor and vascular surgery",
          "Minimally invasive spine procedures",
          "Neuro-navigation guided operations",
          "Trauma and emergency neurosurgery",
        ],
      },
    }),
    department("psychiatry", {
      title: "Psychiatry",
      description:
        "Evidence-based treatment for mood disorders, anxiety, psychosis, and neuropsychiatric conditions.",
      icon: Heart,
      iconVariant: "orange",
      treatments: ["Mood disorders", "Anxiety & OCD", "Addiction medicine"],
      detail: {
        overview:
          "Psychiatrists deliver evidence-based care for mood disorders, anxiety, psychosis, and neuropsychiatric conditions — integrated with neurology for patients whose mental and neurological health intersect.",
        highlights: [
          "Mood and anxiety disorder management",
          "Neuropsychiatric consultation",
          "Medication optimization and monitoring",
          "Collaborative care with psychology teams",
        ],
      },
    }),
    department("clinical-psychology", {
      title: "Clinical Psychology",
      description:
        "Psychological assessment, psychotherapy, and cognitive rehabilitation for neurological patients.",
      icon: Users,
      iconVariant: "navy",
      treatments: ["Cognitive assessment", "Psychotherapy", "Behavioral therapy"],
      detail: {
        overview:
          "Clinical psychologists conduct neuropsychological assessments and deliver psychotherapy for patients and families navigating neurological illness, recovery, and long-term adaptation.",
        highlights: [
          "Neuropsychological testing",
          "Individual and family psychotherapy",
          "Cognitive rehabilitation support",
          "Pre- and post-surgical psychological evaluation",
        ],
      },
    }),
    department("neuro-rehabilitation", {
      title: "Neuro Rehabilitation",
      description:
        "Multidisciplinary programs restoring mobility, speech, cognition, and daily independence.",
      icon: Activity,
      iconVariant: "blue",
      treatments: ["Physiotherapy", "Speech therapy", "Occupational therapy"],
      detail: {
        overview:
          "Rehabilitation teams help patients recover mobility, speech, swallowing, and cognitive function after stroke, spinal injury, brain surgery, and other neurological events.",
        highlights: [
          "Early mobilization after stroke",
          "Speech and swallowing therapy",
          "Gait training and balance programs",
          "Return-to-work and daily living support",
        ],
      },
    }),
    department("pain-medicine", {
      title: "Pain Medicine",
      description:
        "Interventional and medical management of chronic neuropathic, spine, and headache pain.",
      icon: Pill,
      iconVariant: "green",
      treatments: ["Nerve blocks", "Spinal injections", "Headache clinic"],
      detail: {
        overview:
          "Pain medicine specialists manage chronic neuropathic pain, spine-related pain, and headache syndromes through interventional procedures and coordinated medical therapy.",
        highlights: [
          "Image-guided spinal injections",
          "Neuropathic pain protocols",
          "Headache clinic coordination",
          "Multidisciplinary pain assessment",
        ],
      },
    }),
    department("critical-care", {
      title: "Critical Care",
      description:
        "Dedicated neuro ICU with continuous monitoring for critically ill neurological patients.",
      icon: HeartPulse,
      iconVariant: "orange",
      treatments: ["Neuro ICU", "Ventilator support", "ICP monitoring"],
      detail: {
        overview:
          "The critical care department operates a dedicated neuro ICU with continuous monitoring for patients with severe brain injury, status epilepticus, and post-operative neurosurgical needs.",
        highlights: [
          "24×7 intensivist coverage",
          "Continuous EEG and ICP monitoring",
          "Ventilator and hemodynamic management",
          "Structured family communication protocols",
        ],
      },
    }),
    department("emergency-medicine", {
      title: "Emergency Medicine",
      description:
        "24×7 stroke and neurotrauma response with rapid triage and specialist consultation.",
      icon: Ambulance,
      iconVariant: "navy",
      treatments: ["Stroke protocol", "Neurotrauma", "Status epilepticus"],
      detail: {
        overview:
          "Emergency teams activate stroke and neurotrauma protocols around the clock — coordinating triage, imaging, and specialist consultation so treatment begins without delay.",
        highlights: [
          "Door-to-needle stroke pathways",
          "Neurotrauma stabilization",
          "Status epilepticus protocols",
          "Direct ICU and interventional handoffs",
        ],
      },
    }),
    department("diagnostics", {
      title: "Diagnostics",
      description:
        "Integrated imaging, EEG, EMG, and neurophysiology for accurate and timely diagnosis.",
      icon: Scan,
      iconVariant: "blue",
      treatments: ["MRI & CT imaging", "EEG monitoring", "Nerve conduction studies"],
      detail: {
        overview:
          "The diagnostics department integrates MRI, CT, EEG, EMG, and laboratory services on campus — enabling faster results and tighter coordination with treating clinicians.",
        highlights: [
          "3T MRI with neuro protocols",
          "Digital EEG and video monitoring",
          "EMG and nerve conduction studies",
          "Same-day reporting for urgent cases",
        ],
      },
    }),
  ] satisfies DepartmentItem[],
  whyDepartments: {
    eyebrow: "Evidence-Based Treatment",
    title: "Integrated Care That Makes a Difference",
    description:
      "Unlike fragmented healthcare models, CNS departments share electronic records, joint rounds, and unified treatment protocols — reducing delays and improving outcomes.",
    points: [
      {
        title: "Multidisciplinary Rounds",
        description:
          "Neurologists, surgeons, psychiatrists, and therapists collaborate on complex cases daily.",
      },
      {
        title: "Shared Diagnostic Pathways",
        description:
          "Standardized protocols ensure every patient receives the right tests at the right time.",
      },
      {
        title: "Continuity of Care",
        description:
          "Smooth handoffs from emergency to ICU, ward, and outpatient follow-up.",
      },
      {
        title: "Subspecialty Expertise",
        description:
          "Each department includes clinicians with advanced fellowship training in their field.",
      },
    ],
  },
  technology: {
    eyebrow: "Clinical Technology",
    title: "Precision Tools Across Every Department",
    description:
      "Our departments are equipped with the latest diagnostic and therapeutic technology to support precision medicine.",
    items: [
      {
        icon: Scan,
        title: "3T MRI & Advanced Imaging",
        description: "High-resolution neuroimaging with functional and diffusion protocols.",
        variant: "blue" as const,
      },
      {
        icon: Microscope,
        title: "Neuro-Navigation Surgery",
        description: "Intraoperative guidance for safer, more precise surgical procedures.",
        variant: "green" as const,
      },
      {
        icon: FlaskConical,
        title: "Digital EEG & EMG Labs",
        description: "Continuous video-EEG monitoring and comprehensive nerve studies.",
        variant: "orange" as const,
      },
      {
        icon: BrainCircuit,
        title: "Robotic Rehabilitation",
        description: "Technology-assisted therapy for motor recovery and gait training.",
        variant: "navy" as const,
      },
    ],
  },
  sectionImage: hospitalImage(
    homeImagePath("integrated-departments"),
    "Integrated neuroscience departments at Center for Neuroscience",
    IMAGE_CATEGORIES.consultationRoom
  ),
  cta: {
    title: "Talk to a Neuroscience Specialist",
    description:
      "Unsure where to begin? Describe your symptoms to our care team — we will guide you to the right department and specialist.",
    ...standardAppointmentCta,
    ...standardWhatsAppCta(),
  },
} as const;

export function getDepartmentBySlug(slug: string): DepartmentItem | undefined {
  return departmentsContent.departments.find((item) => item.slug === slug);
}

export function getAllDepartmentSlugs(): string[] {
  return departmentsContent.departments.map((item) => item.slug);
}
