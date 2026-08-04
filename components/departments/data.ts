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

export type DepartmentItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconVariant: "blue" | "green" | "orange" | "navy";
  treatments: string[];
  href: string;
};

export const departmentsContent = {
  hero: {
    title: "Our Departments",
    description:
      "Integrated specialties working together to diagnose, treat, and rehabilitate the full spectrum of neurological conditions.",
  },
  overview: {
    eyebrow: "Overview",
    title: "Comprehensive Neuroscience Under One Roof",
    description:
      "Each department at CNS is staffed by subspecialty-trained clinicians supported by dedicated nursing teams, advanced diagnostics, and coordinated care pathways. From acute emergencies to long-term rehabilitation, patients receive seamless transitions between services.",
  },
  departments: [
    {
      title: "Neurology",
      description:
        "Expert management of stroke, epilepsy, movement disorders, dementia, and neuromuscular conditions.",
      icon: Brain,
      iconVariant: "blue",
      treatments: ["Stroke care", "Epilepsy management", "Movement disorders"],
      href: "/departments",
    },
    {
      title: "Neurosurgery",
      description:
        "Advanced surgical care for brain tumors, spine disorders, vascular malformations, and trauma.",
      icon: BrainCircuit,
      iconVariant: "green",
      treatments: ["Brain tumor surgery", "Spine surgery", "Minimally invasive procedures"],
      href: "/departments",
    },
    {
      title: "Psychiatry",
      description:
        "Evidence-based treatment for mood disorders, anxiety, psychosis, and neuropsychiatric conditions.",
      icon: Heart,
      iconVariant: "orange",
      treatments: ["Mood disorders", "Anxiety & OCD", "Addiction medicine"],
      href: "/departments",
    },
    {
      title: "Clinical Psychology",
      description:
        "Psychological assessment, psychotherapy, and cognitive rehabilitation for neurological patients.",
      icon: Users,
      iconVariant: "navy",
      treatments: ["Cognitive assessment", "Psychotherapy", "Behavioral therapy"],
      href: "/departments",
    },
    {
      title: "Neuro Rehabilitation",
      description:
        "Multidisciplinary programs restoring mobility, speech, cognition, and daily independence.",
      icon: Activity,
      iconVariant: "blue",
      treatments: ["Physiotherapy", "Speech therapy", "Occupational therapy"],
      href: "/departments",
    },
    {
      title: "Pain Medicine",
      description:
        "Interventional and medical management of chronic neuropathic, spine, and headache pain.",
      icon: Pill,
      iconVariant: "green",
      treatments: ["Nerve blocks", "Spinal injections", "Headache clinic"],
      href: "/departments",
    },
    {
      title: "Critical Care",
      description:
        "Dedicated neuro ICU with continuous monitoring for critically ill neurological patients.",
      icon: HeartPulse,
      iconVariant: "orange",
      treatments: ["Neuro ICU", "Ventilator support", "ICP monitoring"],
      href: "/departments",
    },
    {
      title: "Emergency Medicine",
      description:
        "24×7 stroke and neurotrauma response with rapid triage and specialist consultation.",
      icon: Ambulance,
      iconVariant: "navy",
      treatments: ["Stroke protocol", "Neurotrauma", "Status epilepticus"],
      href: "/departments",
    },
    {
      title: "Diagnostics",
      description:
        "Integrated imaging, EEG, EMG, and neurophysiology for accurate and timely diagnosis.",
      icon: Scan,
      iconVariant: "blue",
      treatments: ["MRI & CT imaging", "EEG monitoring", "Nerve conduction studies"],
      href: "/departments",
    },
  ] satisfies DepartmentItem[],
  whyDepartments: {
    eyebrow: "Why Our Departments",
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
    eyebrow: "Technology",
    title: "Advanced Tools Across Every Department",
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
  cta: {
    title: "Find the Right Department for You",
    description:
      "Not sure where to start? Our patient coordinators can guide you to the appropriate specialist based on your symptoms and needs.",
    primaryLabel: "Book Appointment",
    primaryHref: "/appointment",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
  },
} as const;
