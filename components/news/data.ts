export const newsContent = {
  hero: {
    title: "News & Events",
    description:
      "Stay informed about hospital announcements, health awareness campaigns, upcoming events, and recent achievements at the Center for Neuroscience.",
  },
  news: [
    {
      title: "CNS Launches Advanced Stroke Pathway Protocol",
      excerpt: "New streamlined stroke response reduces door-to-treatment time by 40% across emergency and ICU teams.",
      category: "Announcement",
      date: "March 12, 2026",
      image: "https://placehold.co/640x400/EEF4F9/1F7CC6/png?font=roboto&text=Stroke+Protocol",
    },
    {
      title: "Free Epilepsy Screening Camp This Month",
      excerpt: "Community outreach program offering complimentary neurological evaluations and EEG screening.",
      category: "Health Campaign",
      date: "March 5, 2026",
      image: "https://placehold.co/640x400/F8FBFD/7DBD24/png?font=roboto&text=Epilepsy+Camp",
    },
    {
      title: "Dr. Menon Receives National Neurosurgery Award",
      excerpt: "Chief Neurosurgeon honored for excellence in minimally invasive spine surgery outcomes.",
      category: "Achievement",
      date: "February 28, 2026",
      image: "https://placehold.co/640x400/FFFFFF/16324A/png?font=roboto&text=Award+2026",
    },
    {
      title: "New 3T MRI Suite Now Operational",
      excerpt: "Expanded imaging capacity with advanced neuro protocols and same-day reporting for outpatients.",
      category: "Announcement",
      date: "February 15, 2026",
      image: "https://placehold.co/640x400/E7EEF5/16324A/png?font=roboto&text=New+MRI",
    },
    {
      title: "World Brain Day Awareness Drive",
      excerpt: "Hospital-led campaign educating communities on stroke warning signs and when to seek emergency care.",
      category: "Health Campaign",
      date: "January 22, 2026",
      image: "https://placehold.co/640x400/F8FBFD/F7941D/png?font=roboto&text=Brain+Day",
    },
    {
      title: "Annual Neuroscience Conference 2026",
      excerpt: "CNS hosts regional conference on movement disorders, epilepsy, and neuro rehabilitation advances.",
      category: "Event",
      date: "January 10, 2026",
      image: "https://placehold.co/640x400/16324A/FFFFFF/png?font=roboto&text=Conference",
    },
  ],
  upcomingEvents: [
    { title: "Stroke Awareness Walk", date: "April 15, 2026", location: "Medical District Park" },
    { title: "Epilepsy Patient Support Group", date: "April 22, 2026", location: "CNS Auditorium" },
    { title: "Neuro Rehabilitation Open House", date: "May 8, 2026", location: "Rehabilitation Center" },
  ],
  achievements: [
    "NABH Accreditation renewed for third consecutive cycle",
    "Ranked among top neuroscience centers in regional patient satisfaction surveys",
    "Published 18 peer-reviewed papers in the last calendar year",
    "Expanded neuro ICU capacity with 12 additional monitored beds",
  ],
  cta: {
    title: "Stay Connected",
    description: "Subscribe to our newsletter or follow us on social media for the latest updates from CNS.",
    primaryLabel: "Contact Us",
    primaryHref: "/contact",
    secondaryLabel: "View Gallery",
    secondaryHref: "/gallery",
  },
} as const;
