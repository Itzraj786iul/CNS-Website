export type DoctorProfile = {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  specializations: string[];
  bio: string;
  featured?: boolean;
  image: {
    src: string;
    alt: string;
  };
};

const colors = ["EEF4F9/16324A", "E7EEF5/1F7CC6", "F8FBFD/7DBD24", "FFFFFF/16324A"];

function doctorImage(name: string, index: number): { src: string; alt: string } {
  const slug = name.replace(/^Dr\.\s*/, "").replace(/\s+/g, "+");
  const palette = colors[index % colors.length];
  return {
    src: `https://placehold.co/480x560/${palette}/png?font=roboto&text=${slug}`,
    alt: `${name}, specialist at Center for Neuroscience`,
  };
}

export const doctorsContent = {
  hero: {
    eyebrow: "Our Physicians",
    title: "Meet Our Neuroscience Specialists",
    description:
      "Board-certified clinicians with advanced fellowship training — committed to accurate diagnosis, evidence-based treatment, and care that respects every patient.",
  },
  introduction:
    "Our medical team includes board-certified neurologists, neurosurgeons, psychiatrists, and rehabilitation specialists. Each doctor brings subspecialty expertise and a patient-first approach to every consultation.",
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
      bio: "Specializes in acute stroke management and long-term epilepsy care with expertise in advanced EEG interpretation.",
      featured: true,
      image: doctorImage("Dr. Ananya Sharma", 0),
    },
    {
      id: "dr-menon",
      name: "Dr. Rajesh Menon",
      designation: "Chief Neurosurgeon",
      qualification: "MCh (Neurosurgery)",
      experience: "18+ years",
      specializations: ["Brain Tumors", "Spine Surgery", "Vascular"],
      bio: "Leads the neurosurgery program with focus on minimally invasive spine procedures and awake craniotomy.",
      featured: true,
      image: doctorImage("Dr. Rajesh Menon", 1),
    },
    {
      id: "dr-nair",
      name: "Dr. Priya Nair",
      designation: "Consultant Psychiatrist",
      qualification: "MD (Psychiatry)",
      experience: "12+ years",
      specializations: ["Mood Disorders", "Anxiety", "Neuropsychiatry"],
      bio: "Integrates pharmacological and psychotherapeutic approaches for complex psychiatric and neurological comorbidities.",
      featured: true,
      image: doctorImage("Dr. Priya Nair", 2),
    },
    {
      id: "dr-patel",
      name: "Dr. Vikram Patel",
      designation: "Rehabilitation Specialist",
      qualification: "DM (Neuro Rehabilitation)",
      experience: "10+ years",
      specializations: ["Stroke Rehab", "Gait Training", "Cognitive Recovery"],
      bio: "Designs individualized rehabilitation programs combining physiotherapy, robotics, and cognitive therapy.",
      image: doctorImage("Dr. Vikram Patel", 3),
    },
    {
      id: "dr-khan",
      name: "Dr. Imran Khan",
      designation: "Interventional Neurologist",
      qualification: "MD, DM (Neurology), Fellowship (Interventional)",
      experience: "14+ years",
      specializations: ["Mechanical Thrombectomy", "Aneurysm Coiling", "Stroke"],
      bio: "Performs endovascular procedures for acute ischemic stroke and cerebrovascular malformations.",
      image: doctorImage("Dr. Imran Khan", 0),
    },
    {
      id: "dr-gupta",
      name: "Dr. Sunita Gupta",
      designation: "Epileptologist",
      qualification: "MD, DM (Neurology)",
      experience: "11+ years",
      specializations: ["Epilepsy Surgery", "Video-EEG", "Pediatric Epilepsy"],
      bio: "Runs the comprehensive epilepsy program including pre-surgical evaluation and ketogenic diet therapy.",
      image: doctorImage("Dr. Sunita Gupta", 1),
    },
    {
      id: "dr-iyer",
      name: "Dr. Karthik Iyer",
      designation: "Spine Surgeon",
      qualification: "MCh (Neurosurgery)",
      experience: "13+ years",
      specializations: ["Disc Surgery", "Spinal Fusion", "Minimally Invasive"],
      bio: "Expert in degenerative spine disorders and complex spinal deformity correction with rapid recovery protocols.",
      image: doctorImage("Dr. Karthik Iyer", 2),
    },
    {
      id: "dr-joshi",
      name: "Dr. Meera Joshi",
      designation: "Movement Disorder Specialist",
      qualification: "MD, DM (Neurology)",
      experience: "9+ years",
      specializations: ["Parkinson's", "Dystonia", "Deep Brain Stimulation"],
      bio: "Manages Parkinson's disease and movement disorders with medical therapy and DBS program coordination.",
      image: doctorImage("Dr. Meera Joshi", 3),
    },
    {
      id: "dr-singh",
      name: "Dr. Harpreet Singh",
      designation: "Pain Medicine Specialist",
      qualification: "MD, FIPP",
      experience: "10+ years",
      specializations: ["Neuropathic Pain", "Spinal Injections", "Headache"],
      bio: "Provides interventional pain procedures and multidisciplinary management for chronic neurological pain.",
      image: doctorImage("Dr. Harpreet Singh", 0),
    },
    {
      id: "dr-fernandes",
      name: "Dr. Clara Fernandes",
      designation: "Neuro-oncologist",
      qualification: "MD, DM (Neurology), Fellowship (Neuro-Oncology)",
      experience: "8+ years",
      specializations: ["Brain Tumors", "Chemotherapy", "Palliative Care"],
      bio: "Coordinates multidisciplinary brain tumor boards and personalized oncology treatment plans.",
      image: doctorImage("Dr. Clara Fernandes", 1),
    },
    {
      id: "dr-reddy",
      name: "Dr. Arvind Reddy",
      designation: "Pediatric Neurologist",
      qualification: "MD (Pediatrics), DM (Neurology)",
      experience: "12+ years",
      specializations: ["Pediatric Epilepsy", "Developmental Disorders", "Cerebral Palsy"],
      bio: "Dedicated to neurological care for children with developmental, epileptic, and neuromuscular conditions.",
      image: doctorImage("Dr. Arvind Reddy", 2),
    },
    {
      id: "dr-bose",
      name: "Dr. Amit Bose",
      designation: "Clinical Psychologist",
      qualification: "PhD (Clinical Psychology)",
      experience: "9+ years",
      specializations: ["Cognitive Assessment", "Psychotherapy", "Neuropsychology"],
      bio: "Conducts neuropsychological evaluations and delivers evidence-based therapy for neurological patients.",
      image: doctorImage("Dr. Amit Bose", 3),
    },
  ] satisfies DoctorProfile[],
  statistics: [
    { value: "20", suffix: "+", label: "Subspecialist Physicians" },
    { value: "150", suffix: "+", label: "Years Combined Experience" },
    { value: "12", suffix: "", label: "Subspecialty Areas" },
    { value: "50", suffix: "K+", label: "Patients Cared For Annually" },
  ],
  cta: {
    title: "Consult Our Experts",
    description:
      "Connect with the right specialist for your condition. Our coordinators will help you book at a convenient time.",
    primaryLabel: "Book Your Consultation",
    primaryHref: "/appointment",
  },
} as const;

export const featuredDoctors = doctorsContent.doctors.filter(
  (doctor): doctor is DoctorProfile & { featured: true } => Boolean(doctor.featured)
);
