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
  ];
}

export const dynamicParams = false;
