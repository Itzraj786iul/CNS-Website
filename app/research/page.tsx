import { ResearchPageContent } from "@/components/research/research-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Research & Publications",
  description:
    "Explore neuroscience research, clinical studies, publications, and awards from the Center for Neuroscience.",
  path: "/research",
});

export default function ResearchPage() {
  return <ResearchPageContent />;
}
