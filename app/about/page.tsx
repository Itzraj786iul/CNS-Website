import { AboutPageContent } from "@/components/about/about-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about the Center for Neuroscience — our vision, mission, leadership, and commitment to excellence in brain and spine care.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
