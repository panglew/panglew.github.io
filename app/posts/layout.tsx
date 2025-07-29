import { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Posts",
  description: "All Posts by Weston Pangle",
  authors: [{ name: "Weston Pangle", url: "https://panglew.github.io" }],
};

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className} lg:mx-60 mx-10 block`}>{children}</div>
  );
}
