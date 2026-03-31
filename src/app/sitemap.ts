import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://panglew.github.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://panglew.github.io/posts",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://panglew.github.io/posts/recommendation-engine",
      lastModified: new Date(2026, 3, 31),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/pick-it-up",
      lastModified: new Date(2025, 2, 9),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/eecs494",
      lastModified: new Date(2024, 12, 15),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/eecs491",
      lastModified: new Date(2024, 12, 15),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/eecs489",
      lastModified: new Date(2024, 12, 15),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/eecs485",
      lastModified: new Date(2024, 12, 15),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/eecs484",
      lastModified: new Date(2024, 12, 15),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/eecs482",
      lastModified: new Date(2024, 12, 15),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/eecs388",
      lastModified: new Date(2024, 12, 15),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/eecs370",
      lastModified: new Date(2024, 12, 15),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/eecs281",
      lastModified: new Date(2024, 12, 15),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/eecs280",
      lastModified: new Date(2024, 12, 15),
      changeFrequency: "never",
      priority: 0.5,
    },
  ];
}
