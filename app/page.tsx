import { HomePage } from "@/components/home/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Center for Neuroscience — integrated neurological, neurosurgical, and psychiatric care with advanced diagnostics and 24×7 emergency support.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
