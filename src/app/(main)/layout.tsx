import MainWrapper from "@/components/main/layout/main-wrapper";
import Navbar from "@/components/main/ui/navbar";
import type { Metadata } from "next";
import Link from "next/link";
import { useEffect } from "react"; // Import useEffect

export const metadata: Metadata = {
  title: "AniGone | Watch Anime Online Free.",
  description:
    "Explore the trending anime, spotlight anime, latest anime & many more.",
  keywords: [
    "aniGone",
    "anime streaming website",
    "trending anime",
    "latest anime",
    "popular anime",
  ],
  openGraph: {
    title: "AniGone | Watch Anime Online Free.",
    description:
      "Explore the trending anime, spotlight anime, latest anime & many more.",
    images: "/og-image.png",
    type: "website",
  },
};

export default function MainRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize Google Analytics
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-STLSC4FHH3`; // Replace with your Measurement ID
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-STLSC4FHH3"); // Replace with your Measurement ID
  }, []);

  return (
    <MainWrapper>
      <Navbar />
      {children}
      <footer className="bg-primary-100 px-4 py-10">
        <div className="wrapper-container flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <p>Made with ❤️</p>

          <div className="flex items-center gap-1">
            <p>All rights reserved to its developer!</p>
            <Link
              href="https://github.com/zeddxx"
              target="_blank"
              className="text-secondary underline underline-offset-2"
            >
              Github
            </Link>
          </div>
        </div>
      </footer>
    </MainWrapper>
  );
}
