import { getAnimeInfoByAnimeId } from "@/api/anime";
import type { Metadata, ResolvingMetadata } from "next";

// Server-side metadata generation function
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
  return <>{children}</>;
}
