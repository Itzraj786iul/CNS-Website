import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";
import { newsPath, toSlug } from "@/lib/content/slugs";

function newsImage(slug: string) {
  return `/images/news/${slug}.jpg`;
}

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  href: string;
  body: string;
};

const newsItem = (
  slug: string,
  item: Omit<NewsItem, "slug" | "href" | "image"> & { imageSlug?: string }
): NewsItem => ({
  slug,
  href: newsPath(slug),
  image: newsImage(item.imageSlug ?? slug),
  title: item.title,
  excerpt: item.excerpt,
  category: item.category,
  date: item.date,
  body: item.body,
});

export const newsContent = {
  hero: {
    eyebrow: "News & Insights",
    title: "News & Events",
    description:
      "Hospital updates, community health initiatives, and clinical milestones from Center for Neuroscience.",
  },
  news: [
    newsItem("stroke-response-pathway", {
      title: "Hospital Update — Stroke Response Pathway",
      excerpt:
        "CNS continues refining emergency stroke protocols across emergency, imaging, and ICU teams.",
      category: "Announcement",
      date: "March 12, 2026",
      body:
        "Center for Neuroscience is strengthening coordination between emergency medicine, diagnostic imaging, and neuro ICU teams to reduce door-to-treatment times for acute stroke. Updated triage checklists, pre-alert ambulance protocols, and post-thrombectomy rehabilitation handoffs are being rolled out across departments.",
    }),
    newsItem("epilepsy-screening-program", {
      title: "Community Epilepsy Screening Program",
      excerpt:
        "Outreach program offering neurological evaluations — dates and registration details to be announced.",
      category: "Health Campaign",
      date: "March 5, 2026",
      body:
        "CNS is preparing a community epilepsy screening initiative offering neurological evaluations and patient education. Registration details and outreach dates will be published once the program schedule is finalized with hospital communications.",
    }),
    newsItem("clinical-team-recognition", {
      title: "Clinical Team Recognition",
      excerpt:
        "Placeholder entry — replace with verified achievement after client approval.",
      category: "Achievement",
      date: "February 28, 2026",
      body:
        "This announcement will be updated with a verified clinical milestone once approved by hospital leadership. Replace this content with an authenticated achievement before external publication.",
    }),
    newsItem("imaging-services-expansion", {
      title: "Imaging Services Expansion",
      excerpt:
        "Updated MRI and CT capacity supports faster outpatient and emergency neurological imaging.",
      category: "Announcement",
      date: "February 15, 2026",
      body:
        "Expanded MRI and CT capacity on campus supports faster outpatient scheduling and shorter wait times for emergency neurological imaging. Same-day reporting remains a priority for stroke and trauma pathways.",
    }),
    newsItem("brain-health-awareness", {
      title: "Brain Health Awareness Initiative",
      excerpt:
        "Community education on stroke warning signs and when to seek emergency neurological care.",
      category: "Health Campaign",
      date: "January 22, 2026",
      body:
        "CNS is running community education sessions on stroke warning signs, when to call emergency services, and how early intervention protects brain function. Materials are available at the hospital front desk and through upcoming outreach events.",
    }),
    newsItem("neuroscience-conference", {
      title: "Neuroscience Academic Conference",
      excerpt:
        "Regional gathering on movement disorders, epilepsy, and neuro rehabilitation — program details forthcoming.",
      category: "Event",
      date: "January 10, 2026",
      body:
        "A regional neuroscience conference focused on movement disorders, epilepsy, and neuro rehabilitation is being organized at CNS. Full program details, speaker list, and registration information will be announced by the academic affairs office.",
    }),
  ] satisfies NewsItem[],
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

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsContent.news.find((item) => item.slug === slug);
}

export function getAllNewsSlugs(): string[] {
  return newsContent.news.map((item) => item.slug);
}

export function newsSlugFromTitle(title: string): string {
  return toSlug(title);
}
