import { CTASection } from "@/components/common/cta-section";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Careers",
  description:
    "Join the Center for Neuroscience team. Explore clinical, research, and administrative career opportunities.",
  path: "/careers",
});

const careerAreas = [
  {
    title: "Clinical & Nursing",
    description:
      "Neurologists, neurosurgeons, psychiatrists, nurses, and allied health professionals delivering patient-centered neuroscience care.",
  },
  {
    title: "Research & Academics",
    description:
      "Clinical researchers, lab scientists, and data specialists advancing stroke, epilepsy, and neurodegenerative disease studies.",
  },
  {
    title: "Operations & Administration",
    description:
      "Patient coordinators, facility managers, and support teams ensuring seamless hospital operations and patient experience.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers at Center for Neuroscience"
        description="Build your career with a multidisciplinary neuroscience team committed to advanced patient care, research, and clinical education."
        eyebrow="Join Our Team"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />
      <Section variant="white" spacing="default">
        <SectionHeading
          eyebrow="Opportunities"
          title="Join a team advancing brain health"
          description="We welcome experienced clinicians, emerging researchers, and dedicated support professionals who share our commitment to neuroscience excellence."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {careerAreas.map((area) => (
            <article
              key={area.title}
              className="card-premium rounded-2xl p-5"
            >
              <h2 className="font-heading text-lg font-semibold text-cns-navy">
                {area.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <CTASection
        title="Interested in joining CNS?"
        description="Share your profile with our HR team. We review applications for clinical, research, and administrative roles on an ongoing basis."
        primaryAction={{ label: "Contact HR", href: "/contact" }}
        secondaryAction={{ label: "About CNS", href: "/about" }}
        variant="navy"
      />
    </>
  );
}
