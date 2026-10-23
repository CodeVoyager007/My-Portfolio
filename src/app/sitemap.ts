import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";

const publicRoutes = ["", "/work", "/blog", "/certifications", "/journey", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path, index) => ({
    url: new URL(path || "/", SITE_URL).toString(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : index < 4 ? 0.8 : 0.6,
  }));
}
