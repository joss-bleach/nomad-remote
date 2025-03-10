import { createTRPCRouter } from "../init";

import { categoryRouter } from "@/modules/category/server/procedures";

export const appRouter = createTRPCRouter({
  category: categoryRouter,
});

export type AppRouter = typeof appRouter;
