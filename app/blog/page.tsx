import { redirect } from "next/navigation";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Clinical insights, neuroscience updates, and research news from the Center for Neuroscience.",
  path: "/blog",
});

export default function BlogRedirectPage() {
  redirect("/research");
}
