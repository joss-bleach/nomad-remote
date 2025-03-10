import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { category } from "../schema/category";
import { env } from "@/config/env";

// Categories from our category-icons.tsx
const categories = [
  { name: "Beachfront", icon: "beachfront" },
  { name: "Countryside", icon: "countryside" },
  { name: "Lakefront", icon: "lakefront" },
  { name: "Houseboat", icon: "houseboat" },
  { name: "Tropical", icon: "tropical" },
  { name: "Vineyards", icon: "vineyards" },
  { name: "Historical", icon: "historical" },
  { name: "Luxury", icon: "luxury" },
  { name: "Cities", icon: "cities" },
  { name: "Coworking", icon: "coworking" },
  { name: "Windmill", icon: "windmill" },
  { name: "Creative Space", icon: "creative-space" },
] as const;

async function main() {
  const client = postgres(env.DATABASE_URL);
  const db = drizzle(client);

  console.log("🌱 Starting to seed categories...");

  try {
    await db
      .insert(category)
      .values(
        categories.map((cat) => ({
          name: cat.name,
          icon: cat.icon,
        }))
      )
      .onConflictDoNothing();

    console.log("✅ Categories seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding categories:", error);
    throw error;
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error("Failed to seed database:", err);
  process.exit(1);
});
