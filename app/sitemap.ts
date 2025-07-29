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
      url: "https://panglew.github.io/posts/lambda-deployment",
      lastModified: new Date(2024, 7, 11),
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: "https://panglew.github.io/posts/erm-p1",
      lastModified: new Date(2024, 4, 27),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://panglew.github.io/posts/logistic-regression",
      lastModified: new Date(2025, 2, 9),
      changeFrequency: "never",
      priority: 0.5,
    },
  ];
}
