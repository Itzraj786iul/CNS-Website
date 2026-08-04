import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants/site";

const routes = [
  "/",
  "/about",
  "/departments",
  "/doctors",
  "/services",
  "/facilities",
  "/gallery",
  "/research",
  "/news",
  "/resources",
  "/contact",
  "/appointment",
  "/careers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
