import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projectSlugs, experienceSlugs } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/experience", "/contact"];
  const dynamicRoutes = [
    ...projectSlugs.map((slug) => `/projects/${slug}`),
    ...experienceSlugs.map((slug) => `/experience/${slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
