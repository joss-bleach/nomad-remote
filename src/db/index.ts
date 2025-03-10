import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/db/schema";
import { env } from "@/config/env";

export const db = drizzle(postgres(env.DATABASE_URL), {
  schema,
  logger: true,
});

export type db = typeof db;

export default db;
