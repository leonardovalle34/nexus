import type { MetadataRoute } from "next";
import { posts } from "./blog/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = posts.map((post) => ({
    url: `https://nexustecnologia.online/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://nexustecnologia.online",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://nexustecnologia.online/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogRoutes,
  ];
}
