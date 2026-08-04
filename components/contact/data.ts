import type { FAQItem } from "@/components/common/faq-card";
import {
  getAppointmentDisplay,
  getEmergencyTelHref,
  toTelHref,
} from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";

const emergencyPhone = siteConfig.contact.emergency;
const emergencyHref = getEmergencyTelHref();
const appointmentDisplay = getAppointmentDisplay();

export const contactContent = {
  hero: {
    title: "Contact Us",
    description:
      "Reach our team for appointments, referrals, or billing questions. We respond with clarity — because navigating care should never feel confusing.",
  },
  cards: [
    {
      type: "phone" as const,
      title: "Phone",
      value: appointmentDisplay,
      href: siteConfig.contact.phone
        ? toTelHref(siteConfig.contact.phone)
        : "/appointment",
      description: "Mon–Sat, 8:00 AM – 8:00 PM",
    },
    {
      type: "email" as const,
      title: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      description: "Response within one business day",
    },
    {
      type: "emergency" as const,
      title: "Emergency",
      value: emergencyPhone,
      href: emergencyHref,
      description: "24×7 stroke & neurotrauma line",
    },
    {
      type: "address" as const,
      title: "Address",
      value: siteConfig.contact.address,
      href: "https://maps.google.com/maps?q=Raipur+Chhattisgarh",
      description: "Parking & wheelchair access available",
    },
  ],
  timings: {
    eyebrow: "Hospital Hours",
    title: "Visiting & Outpatient Timings",
    schedules: [
      { label: "Outpatient Clinics", hours: "Mon – Sat, 8:00 AM – 8:00 PM" },
      { label: "Emergency Department", hours: "Open 24 hours, every day" },
      { label: "Diagnostics & Imaging", hours: "Mon – Sat, 7:00 AM – 9:00 PM" },
      { label: "Pharmacy", hours: "Mon – Sat, 7:30 AM – 9:30 PM" },
      { label: "Visiting Hours (Wards)", hours: "Daily, 11:00 AM – 1:00 PM & 5:00 PM – 7:00 PM" },
    ],
  },
  departments: [
    { name: "Appointments", phone: appointmentDisplay, email: "appointments@cns.org", href: siteConfig.contact.phone ? toTelHref(siteConfig.contact.phone) : "/appointment" },
    { name: "Neurology OPD", phone: emergencyPhone, email: "neurology@cns.org", href: emergencyHref },
    { name: "Neurosurgery", phone: emergencyPhone, email: "neurosurgery@cns.org", href: emergencyHref },
    { name: "Psychiatry", phone: emergencyPhone, email: "psychiatry@cns.org", href: emergencyHref },
    { name: "Billing & Insurance", phone: emergencyPhone, email: "billing@cns.org", href: emergencyHref },
    { name: "Medical Records", phone: emergencyPhone, email: "records@cns.org", href: emergencyHref },
  ],
  faq: [
    {
      question: "How do I schedule an appointment?",
      answer: "You can book online via our Appointment page, call our appointments desk, or visit the front desk during outpatient hours. Emergency cases should go directly to our 24×7 emergency department.",
    },
    {
      question: "What are the visiting hours?",
      answer: "Ward visiting hours are 11:00 AM – 1:00 PM and 5:00 PM – 7:00 PM daily. ICU visiting is restricted — please check with the nursing station for current policy.",
    },
    {
      question: "How do I obtain medical records?",
      answer: "Submit a request to medicalrecords@cns.org with valid ID and authorization. Records are typically available within 3–5 business days.",
    },
    {
      question: "Is parking available on campus?",
      answer: "Yes. Free patient and visitor parking is available in the basement and surface lots. Valet service is offered at the main entrance during outpatient hours.",
    },
  ] satisfies FAQItem[],
} as const;

export const appointmentDepartments = [
  "Neurology",
  "Neurosurgery",
  "Psychiatry",
  "Clinical Psychology",
  "Neuro Rehabilitation",
  "Pain Medicine",
  "Pediatric Neurology",
  "General Consultation",
];

export const appointmentDoctors = [
  "Dr. Ananya Sharma — Neurology",
  "Dr. Rajesh Menon — Neurosurgery",
  "Dr. Priya Nair — Psychiatry",
  "Dr. Vikram Patel — Rehabilitation",
  "Dr. Imran Khan — Interventional Neurology",
  "Dr. Sunita Gupta — Epilepsy",
  "Dr. Karthik Iyer — Spine Surgery",
  "Dr. Meera Joshi — Movement Disorders",
  "Dr. Harpreet Singh — Pain Medicine",
  "Dr. Arvind Reddy — Pediatric Neurology",
  "Any Available Specialist",
];

export const appointmentTimeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
