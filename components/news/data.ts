import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";

function newsImage(slug: string) {
  return `/images/news/${slug}.jpg`;
}

export const newsContent = {
  hero: {
    eyebrow: "News & Insights",
    title: "News & Events",
    description:
      "Hospital updates, community health initiatives, and clinical milestones from Center for Neuroscience.",
  },
  news: [
    {
      title: "Hospital Update — Stroke Response Pathway",
      excerpt:
        "CNS continues refining emergency stroke protocols across emergency, imaging, and ICU teams.",
      category: "Announcement",
      date: "March 12, 2026",
      image: newsImage("stroke-pathway"),
    },
    {
      title: "Community Epilepsy Screening Program",
      excerpt:
        "Outreach program offering neurological evaluations — dates and registration details to be announced.",
      category: "Health Campaign",
      date: "March 5, 2026",
      image: newsImage("epilepsy-camp"),
    },
    {
      title: "Clinical Team Recognition",
      excerpt:
        "Placeholder entry — replace with verified achievement after client approval.",
      category: "Achievement",
      date: "February 28, 2026",
      image: newsImage("team-recognition"),
    },
    {
      title: "Imaging Services Expansion",
      excerpt:
        "Updated MRI and CT capacity supports faster outpatient and emergency neurological imaging.",
      category: "Announcement",
      date: "February 15, 2026",
      image: newsImage("mri-expansion"),
    },
    {
      title: "Brain Health Awareness Initiative",
      excerpt:
        "Community education on stroke warning signs and when to seek emergency neurological care.",
      category: "Health Campaign",
      date: "January 22, 2026",
      image: newsImage("brain-awareness"),
    },
    {
      title: "Neuroscience Academic Conference",
      excerpt:
        "Regional gathering on movement disorders, epilepsy, and neuro rehabilitation — program details forthcoming.",
      category: "Event",
      date: "January 10, 2026",
      image: newsImage("conference"),
    },
  ],
  upcomingEvents: [
    { title: "Stroke Awareness Walk", date: "April 15, 2026", location: "Medical District Park" },
    { title: "Epilepsy Patient Support Group", date: "April 22, 2026", location: "CNS Auditorium" },
    { title: "Neuro Rehabilitation Open House", date: "May 8, 2026", location: "Rehabilitation Center" },
  ],
  /** TODO: Replace with verified milestones approved by hospital communications */
  achievements: [] as const,
  cta: {
    title: "Need Neurological Care?",
    description:
      "Stay informed about CNS — and when you are ready, our specialists are here to help you and your family take the next step.",
    ...standardAppointmentCta,
    ...standardWhatsAppCta(),
  },
} as const;
