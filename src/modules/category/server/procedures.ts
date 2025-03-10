import { getAllCategories } from "@/db/queries/category";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoryRouter = createTRPCRouter({
  getAll: baseProcedure.query(async () => {
    return await getAllCategories();
  }),
});
