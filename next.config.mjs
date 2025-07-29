import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeStarryNight from "rehype-starry-night";
import NextBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const baseConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export", // Enables static export
  experimental: {
    optimizePackageImports: ["katex"],
  },
};

function remarkMdxFrontmatterWithOptions() {
  return remarkMdxFrontmatter({
    name: "metadata",
  });
}

function remarkTocWithOptions() {
  return remarkToc({
    tight: true,
    maxDepth: 2,
    ordered: true,
  });
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatterWithOptions,
      remarkMath,
      remarkTocWithOptions,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      rehypeStarryNight,
    ],
  },
});

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Final export
const config = withBundleAnalyzer(withMDX(baseConfig));
export default config;