import { capitalize } from "@/lib/utils";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const category = (await params).category;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${capitalize(category.replaceAll("-", " "))} Category | Hianime`,
    description: `Explore ${category} in this vast anime library.`,
    keywords: category.split("-"),
    openGraph: {
      description: `Explore ${category} in this vast anime library.`,
      title: `${capitalize(category)} Category | Hianime`,
      images: [...previousImages],
    },
  };
}

export default function RootInfoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
