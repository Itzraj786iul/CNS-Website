import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";
import {
  doctorImagePath,
  hospitalImage,
  IMAGE_CATEGORIES,
} from "@/lib/content/images";

export type DoctorProfile = {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  specializations: string[];
  bio: string;
  available?: boolean;
  featured?: boolean;
  image: {
    src: string;
    alt: string;
    category?: (typeof IMAGE_CATEGORIES)[keyof typeof IMAGE_CATEGORIES];
  };
};

/** Photo slot: /public/images/doctors/doctor-NN.jpg */
function doctorImage(name: string, index: number) {
  return hospitalImage(
    doctorImagePath(index),
    `${name} — physician portrait at Center for Neuroscience`,
    IMAGE_CATEGORIES.doctors
  );
}

export const doctorsContent = {
  hero: {
    eyebrow: "Our Physicians",
    title: "Meet Our Neuroscience Specialists",
    description:
      "When you or someone you love needs neurological care, you deserve specialists who listen, explain clearly, and treat you like family — not a case file.",
  },
  introduction:
    "Our team includes neurologists, neurosurgeons, psychiatrists, and rehabilitation specialists. Each doctor brings deep subspecialty expertise — and the patience to walk you through every step of your care.",
  filterDepartments: [
    "All Departments",
    "Neurology",
    "Neurosurgery",
    "Psychiatry",
    "Rehabilitation",
    "Pain Medicine",
  ],
  doctors: [
    {
      id: "dr-sharma",
      name: "Dr. Ananya Sharma",
      designation: "Senior Consultant Neurologist",
      qualification: "MD, DM (Neurology)",
      experience: "15+ years",
      specializations: ["Stroke", "Epilepsy", "Movement Disorders"],
      bio: "Walks patients and families through stroke and epilepsy care with clarity — helping you understand every decision before it is made.",
      featured: true,
      image: doctorImage("Dr. Ananya Sharma", 1),
    },
    {
      id: "dr-menon",
      name: "Dr. Rajesh Menon",
      designation: "Chief Neurosurgeon",
      qualification: "MCh (Neurosurgery)",
      experience: "18+ years",
      specializations: ["Brain Tumors", "Spine Surgery", "Vascular"],
      bio: "Explains every surgical option in plain language so you and your family feel informed and confident before any procedure.",
      featured: true,
      image: doctorImage("Dr. Rajesh Menon", 2),
    },
    {
      id: "dr-nair",
      name: "Dr. Priya Nair",
      designation: "Consultant Psychiatrist",
      qualification: "MD (Psychiatry)",
      experience: "12+ years",
      specializations: ["Mood Disorders", "Anxiety", "Neuropsychiatry"],
      bio: "Creates a safe, supportive space for patients and families navigating mental health alongside neurological conditions.",
      featured: true,
      image: doctorImage("Dr. Priya Nair", 3),
    },
    {
      id: "dr-patel",
      name: "Dr. Vikram Patel",
      designation: "Rehabilitation Specialist",
      qualification: "DM (Neuro Rehabilitation)",
      experience: "10+ years",
      specializations: ["Stroke Rehab", "Gait Training", "Cognitive Recovery"],
      bio: "Guides recovery with realistic goals — helping patients regain mobility, speech, and independence step by step.",
      image: doctorImage("Dr. Vikram Patel", 4),
    },
    {
      id: "dr-khan",
      name: "Dr. Imran Khan",
      designation: "Interventional Neurologist",
      qualification: "MD, DM (Neurology), Fellowship (Interventional)",
      experience: "14+ years",
      specializations: ["Mechanical Thrombectomy", "Aneurysm Coiling", "Stroke"],
      bio: "Performs endovascular procedures for acute ischemic stroke and cerebrovascular malformations.",
      image: doctorImage("Dr. Imran Khan", 5),
    },
    {
      id: "dr-gupta",
      name: "Dr. Sunita Gupta",
      designation: "Epileptologist",
      qualification: "MD, DM (Neurology)",
      experience: "11+ years",
      specializations: ["Epilepsy Surgery", "Video-EEG", "Pediatric Epilepsy"],
      bio: "Runs the comprehensive epilepsy program including pre-surgical evaluation and ketogenic diet therapy.",
      image: doctorImage("Dr. Sunita Gupta", 6),
    },
    {
      id: "dr-iyer",
      name: "Dr. Karthik Iyer",
      designation: "Spine Surgeon",
      qualification: "MCh (Neurosurgery)",
      experience: "13+ years",
      specializations: ["Disc Surgery", "Spinal Fusion", "Minimally Invasive"],
      bio: "Expert in degenerative spine disorders and complex spinal deformity correction with rapid recovery protocols.",
      image: doctorImage("Dr. Karthik Iyer", 7),
    },
    {
      id: "dr-joshi",
      name: "Dr. Meera Joshi",
      designation: "Movement Disorder Specialist",
      qualification: "MD, DM (Neurology)",
      experience: "9+ years",
      specializations: ["Parkinson's", "Dystonia", "Deep Brain Stimulation"],
      bio: "Manages Parkinson's disease and movement disorders with medical therapy and DBS program coordination.",
      image: doctorImage("Dr. Meera Joshi", 8),
    },
    {
      id: "dr-singh",
      name: "Dr. Harpreet Singh",
      designation: "Pain Medicine Specialist",
      qualification: "MD, FIPP",
      experience: "10+ years",
      specializations: ["Neuropathic Pain", "Spinal Injections", "Headache"],
      bio: "Provides interventional pain procedures and multidisciplinary management for chronic neurological pain.",
      image: doctorImage("Dr. Harpreet Singh", 9),
    },
    {
      id: "dr-fernandes",
      name: "Dr. Clara Fernandes",
      designation: "Neuro-oncologist",
      qualification: "MD, DM (Neurology), Fellowship (Neuro-Oncology)",
      experience: "8+ years",
      specializations: ["Brain Tumors", "Chemotherapy", "Palliative Care"],
      bio: "Coordinates multidisciplinary brain tumor boards and personalized oncology treatment plans.",
      image: doctorImage("Dr. Clara Fernandes", 10),
    },
    {
      id: "dr-reddy",
      name: "Dr. Arvind Reddy",
      designation: "Pediatric Neurologist",
      qualification: "MD (Pediatrics), DM (Neurology)",
      experience: "12+ years",
      specializations: ["Pediatric Epilepsy", "Developmental Disorders", "Cerebral Palsy"],
      bio: "Dedicated to neurological care for children with developmental, epileptic, and neuromuscular conditions.",
      image: doctorImage("Dr. Arvind Reddy", 11),
    },
    {
      id: "dr-bose",
      name: "Dr. Amit Bose",
      designation: "Clinical Psychologist",
      qualification: "PhD (Clinical Psychology)",
      experience: "9+ years",
      specializations: ["Cognitive Assessment", "Psychotherapy", "Neuropsychology"],
      bio: "Conducts neuropsychological evaluations and delivers evidence-based therapy for neurological patients.",
      image: doctorImage("Dr. Amit Bose", 12),
    },
  ] satisfies DoctorProfile[],
  cta: {
    title: "Talk to a Neuroscience Specialist",
    description:
      "Not sure which doctor you need? Our coordinators will listen to your concerns and connect you with the right specialist — usually within a few days.",
    ...standardAppointmentCta,
    ...standardWhatsAppCta(),
  },
} as const;

export const featuredDoctors = doctorsContent.doctors.filter(
  (doctor): doctor is DoctorProfile & { featured: true } => Boolean(doctor.featured)
);
