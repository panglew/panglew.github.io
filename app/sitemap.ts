import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://panglew.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://panglew.dev/posts",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://panglew.dev/posts/pick-it-up",
      lastModified: new Date(2025, 2, 9),
      changeFrequency: "never",
      priority: 0.5,
    },
  ];
}
