"use client";

import {
  Carousel,
  // CarouselApi,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { CategoryIcon } from "@/modules/category/ui/components/category-icons";

interface CategoryFilterCarouselProps {
  value?: string | null;
  data: {
    value: string;
    label: string;
    icon: string;
  }[];
}

export const CategoryFilterCarousel = ({
  // value,
  data,
}: CategoryFilterCarouselProps) => {
  return (
    <div className="relative w-full">
      <Carousel
        opts={{ align: "start", dragFree: true }}
        className="w-full px-12"
      >
        <CarouselContent>
          {data.map((cat) => {
            return (
              <CarouselItem
                className="flex basis-auto flex-col items-center justify-center gap-1 pl-[32px]"
                key={cat.value}
              >
                <CategoryIcon category={cat.icon} isActive={false} />
                <span className="text-muted-foreground text-xs">
                  {cat.label}
                </span>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
