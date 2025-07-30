import Footer from "@/src/components/server/footer";
import Navbar from "@/src/components/client/navbar";
import { NavbarItem } from "@/src/components/server/navbar_static";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import "@wooorm/starry-night/style/both";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | panglew.github.io",
    default: "panglew.github.io",
  },
  description: "Weston Pangle's Personal Website",
  openGraph: {
    type: "website",
    siteName: "panglew.github.io",
    locale: "en_US",
  },
  robots: {
    follow: true,
    index: true,
    googleBot: "index, follow",
  },
  category: "personal",
  icons: [
    {
      type: "image/x-icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links: NavbarItem[] = [
    {
      title: "Posts",
      href: "/posts",
    },
  ];

  return (
    <html lang="en">
      <body className={`${inter_tight.className} flex flex-col min-h-screen`}>
        <Navbar links={links} />
        <main className="content my-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
