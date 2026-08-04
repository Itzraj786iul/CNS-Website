import type { MetadataRoute } from "next";

import { getAllDepartmentSlugs } from "@/components/departments/data";
import { getAllNewsSlugs } from "@/components/news/data";
import { getAllServiceSlugs } from "@/components/services/data";
import { siteConfig } from "@/lib/constants/site";

const staticRoutes = [
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

  const dynamicRoutes = [
    ...getAllServiceSlugs().map((slug) => `/services/${slug}`),
    ...getAllDepartmentSlugs().map((slug) => `/departments/${slug}`),
    ...getAllNewsSlugs().map((slug) => `/news/${slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("/") && path.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
