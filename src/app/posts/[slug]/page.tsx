interface DynamicPageParams {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: DynamicPageParams) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}/page.mdx`);
  return <Post />;
}

export function generateStaticParams() {
  return [
    { slug: "pick-it-up" },
    { slug: "eecs494" },
    { slug: "eecs491" },
    { slug: "eecs489" },
    { slug: "eecs485" },
    { slug: "eecs484" },
    { slug: "eecs482" },
    { slug: "eecs388" },
    { slug: "eecs370" },
    { slug: "eecs281" },
    { slug: "eecs280" },
  ];
}

export const dynamicParams = false;
