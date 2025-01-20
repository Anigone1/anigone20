import { getAnimeInfoByAnimeId } from "@/api/anime";
import type { Metadata, ResolvingMetadata } from "next";
import Script from "next/script";

type Props = {
  params: { episodeId: string }; // Fixed type definition
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const animeId = params.episodeId; // Access `episodeId` directly

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
  return (
    <>
      {/* Safely load the script for popunder ads */}
      <Script
        src="//evendisciplineseedlings.com/ca/86/51/ca86514362b783b9e9d69e455eca31f5.js"
        strategy="afterInteractive"
        onError={() => {
          console.error("Failed to load the popunder script.");
        }}
      />
      {children}
    </>
  );
}
