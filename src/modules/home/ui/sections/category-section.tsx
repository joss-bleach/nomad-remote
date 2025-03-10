"use client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { trpc } from "@/trpc/client";

import { CategoryFilterCarousel } from "../components/category-filter-carousel";

const CategorySectionLoading = () => {
  return <div>Loading...</div>;
};

export const CategorySection = ({ categoryId }: { categoryId?: string }) => {
  return (
    <Suspense fallback={<CategorySectionLoading />}>
      <ErrorBoundary fallback={<p>Error</p>}>
        <CategorySectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategorySectionSuspense = ({ categoryId }: { categoryId?: string }) => {
  const [categories] = trpc.category.getAll.useSuspenseQuery();

  const formatCategories = categories.map(({ name, id, icon }) => ({
    value: id,
    label: name,
    icon,
  }));

  return <CategoryFilterCarousel value={categoryId} data={formatCategories} />;
};
