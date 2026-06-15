import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects, experience } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/experience", "/contact"];
  const dynamicRoutes = [
    ...projects.map((p) => `/projects/${p.slug}`),
    ...experience.map((e) => `/experience/${e.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
