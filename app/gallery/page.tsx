import { GalleryPageContent } from "@/components/gallery/gallery-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Explore the Center for Neuroscience through photos of our infrastructure, operation theatres, diagnostics, patient care, and events.",
  path: "/gallery",
});

export default function GalleryPage() {
  return <GalleryPageContent />;
}
