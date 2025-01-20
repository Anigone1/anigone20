import { getAnimeInfoByAnimeId } from "@/api/anime";
import type { Metadata, ResolvingMetadata } from "next";
import { useEffect } from "react";

type Props = {
  params: Promise<{ episodeId: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const animeId = (await params).episodeId;

  const {
    anime: {
      info: { name, poster, description },
    },
  } = await getAnimeInfoByAnimeId(animeId);

  const previousImages = (await parent).openGraph?.images || [];
  const desc: string = description.slice(0, 146) + "...";

  return {
    title: `Watching ${name}` + " | AniGone",
    description: desc,
    keywords: name.split(" "),
    openGraph: {
      description: desc,
      title: `Watching ${name}` + " | AniGone",
      images: poster ? poster : previousImages,
    },
  };
}

export default function RootInfoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    // Dynamically inject the popunder ad script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//evendisciplineseedlings.com/ca/86/51/ca86514362b783b9e9d69e455eca31f5.js";
    script.async = true;

    // Append script to the <head> tag
    document.head.appendChild(script);

    // Log success or error
    script.onload = () => console.log("Ad script loaded successfully.");
    script.onerror = () => console.error("Failed to load ad script.");

    // Cleanup script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <>{children}</>;
}
