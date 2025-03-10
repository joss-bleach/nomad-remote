import { db } from "@/db";
import { category } from "@/db/schema";

export async function getAllCategories() {
  const data = await db.select().from(category);
  return data;
}
