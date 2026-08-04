/**
 * Patient testimonials — structured for client content entry.
 *
 * TODO: Replace sample entries with verified patient stories approved by client.
 * Do not publish unverified testimonials or outcomes.
 */

export type TestimonialEntry = {
  id: string;
  quote: string;
  name: string;
  city?: string;
  /** Condition or care area — avoid specific medical claims unless verified */
  condition?: string;
  /** Legacy role label — shown if condition is absent */
  role?: string;
  outcome?: string;
  /** Path under /public/images/testimonials/ — null uses avatar placeholder */
  photo?: string | null;
  verified?: boolean;
  rating?: number;
  /** When false, entry is hidden until client approval */
  published: boolean;
  todo?: string;
};

export const testimonials: TestimonialEntry[] = [
  {
    id: "testimonial-01",
    quote:
      "The team explained every step clearly. We felt supported throughout the process — from first consultation to follow-up.",
    name: "Patient Story",
    city: "Raipur",
    condition: "Neurological Care",
    outcome: "Recovery journey in progress",
    photo: null,
    verified: false,
    rating: 5,
    published: true,
    todo: "Replace with verified patient testimonial approved by client",
  },
  {
    id: "testimonial-02",
    quote:
      "Before treatment, the specialists walked us through our options. We felt informed and prepared for what came next.",
    name: "Family Member",
    city: "Chhattisgarh",
    condition: "Surgical Consultation",
    outcome: "Post-procedure follow-up ongoing",
    photo: null,
    verified: false,
    rating: 5,
    published: true,
    todo: "Replace with verified family testimonial approved by client",
  },
  {
    id: "testimonial-03",
    quote:
      "Departments worked together as one team. They listened to our concerns — and that made a real difference for our family.",
    name: "Patient Story",
    city: "Raipur",
    condition: "Integrated Care",
    photo: null,
    verified: false,
    rating: 5,
    published: true,
    todo: "Replace with verified patient testimonial approved by client",
  },
];

export function getPublishedTestimonials() {
  return testimonials.filter((item) => item.published);
}
