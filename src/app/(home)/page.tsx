export const dynamic = "force-dynamic";

import type { Metadata } from "next";

import { HydrateClient, trpc } from "@/trpc/server";

import { HomeView } from "@/modules/home/ui/views/home-view";

export const metadata: Metadata = {
  title: "Work from anywhere",
};

interface PageProps {
  searchParams: Promise<{ categoryId?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { categoryId } = await searchParams;
  void trpc.category.getAll.prefetch();

  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
}
