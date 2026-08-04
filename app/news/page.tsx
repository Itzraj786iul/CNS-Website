import { NewsPageContent } from "@/components/news/news-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "News & Events",
  description:
    "Latest news, health awareness campaigns, upcoming events, and achievements from the Center for Neuroscience.",
  path: "/news",
});

export default function NewsPage() {
  return <NewsPageContent />;
}
